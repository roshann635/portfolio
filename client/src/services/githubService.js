const CACHE_KEY = 'portfolio_github_stats_cache';
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

export const fetchGitHubStats = async (username = 'roshann635') => {
  // 1. Check local cache
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      const isFresh = Date.now() - parsed.timestamp < CACHE_TTL_MS;
      if (isFresh) {
        return parsed.data;
      }
    }
  } catch (e) {
    console.warn('GitHub cache read error:', e);
  }

  // 2. Fetch from GitHub REST API
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers: { Accept: 'application/vnd.github.v3+json' },
      }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
        headers: { Accept: 'application/vnd.github.v3+json' },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      throw new Error(`GitHub API HTTP ${userRes.status}/${reposRes.status}`);
    }

    const userData = await userRes.json();
    const reposData = await reposRes.json();

    const totalStars = Array.isArray(reposData)
      ? reposData.reduce((acc, r) => acc + (r.stargazers_count || 0), 0)
      : 0;

    const totalForks = Array.isArray(reposData)
      ? reposData.reduce((acc, r) => acc + (r.forks_count || 0), 0)
      : 0;

    // Calculate top languages
    const langMap = {};
    if (Array.isArray(reposData)) {
      reposData.forEach((r) => {
        if (r.language) {
          langMap[r.language] = (langMap[r.language] || 0) + 1;
        }
      });
    }
    const topLanguages = Object.entries(langMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(([lang]) => lang);

    const stats = {
      username,
      publicRepos: userData.public_repos ?? (Array.isArray(reposData) ? reposData.length : 15),
      followers: userData.followers ?? 0,
      totalStars,
      totalForks,
      topLanguages,
      profileUrl: userData.html_url || `https://github.com/${username}`,
    };

    // Cache the fresh response
    try {
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ timestamp: Date.now(), data: stats })
      );
    } catch (e) {
      console.warn('GitHub cache write error:', e);
    }

    return stats;
  } catch (err) {
    console.warn('GitHub live fetch failed, serving fallback:', err);

    // If fetch failed, return stale cache if present
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        return JSON.parse(cached).data;
      }
    } catch (e) {
      // ignore
    }

    // Default static fallback from public profile so UI never breaks
    return {
      username,
      publicRepos: 18,
      followers: 5,
      totalStars: 4,
      totalForks: 2,
      topLanguages: ['JavaScript', 'Python', 'C++', 'TypeScript'],
      profileUrl: `https://github.com/${username}`,
    };
  }
};
