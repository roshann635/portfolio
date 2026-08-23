import { useState, useEffect } from 'react';
import { FaGithub, FaCodeBranch, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { fetchGitHubStats } from '../../services/githubService';
import './GitHubStats.css';

const GitHubStats = ({ username = 'roshann635' }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchGitHubStats(username).then((data) => {
      if (isMounted) {
        setStats(data);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [username]);

  if (loading || !stats) {
    return null;
  }

  return (
    <div className="github-stats">
      <div className="github-stats__header">
        <div className="github-stats__identity">
          <FaGithub className="github-stats__icon" />
          <span className="github-stats__title">@{stats.username}</span>
          <span className="github-stats__badge">LIVE GITHUB API</span>
        </div>
        <a
          href={stats.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="github-stats__link"
        >
          View Profile <FaExternalLinkAlt />
        </a>
      </div>

      <div className="github-stats__grid">
        <div className="github-stats__stat">
          <span className="github-stats__value">{stats.publicRepos || '16+'}</span>
          <span className="github-stats__label">Repositories</span>
        </div>

        <div className="github-stats__divider" />

        <div className="github-stats__stat">
          <span className="github-stats__value">
            <FaCodeBranch className="github-stats__subicon" /> Active
          </span>
          <span className="github-stats__label">Open Source</span>
        </div>

        <div className="github-stats__divider" />

        <div className="github-stats__stat">
          <span className="github-stats__value">
            <FaCode className="github-stats__subicon" /> 15+
          </span>
          <span className="github-stats__label">Shipped Projects</span>
        </div>

        {stats.topLanguages?.length > 0 && (
          <>
            <div className="github-stats__divider" />
            <div className="github-stats__stat github-stats__stat--langs">
              <span className="github-stats__langs-list">
                {stats.topLanguages.join(' · ')}
              </span>
              <span className="github-stats__label">Primary Languages</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GitHubStats;
