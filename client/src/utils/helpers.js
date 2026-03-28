export const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const getScrollProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  return docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
};

export const truncateText = (text, maxLength = 150) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const generateParticles = (count = 30) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    tx: `${(Math.random() - 0.5) * 200}px`,
    ty: `${-Math.random() * 300 - 100}px`,
    duration: `${Math.random() * 8 + 4}s`,
    delay: `${Math.random() * 5}s`,
    size: Math.random() * 3 + 1,
  }));
};

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
