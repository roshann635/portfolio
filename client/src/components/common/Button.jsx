import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  href,
  to,
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) => {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  // Internal client router link
  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...props}>
        {icon && <span className="btn__icon">{icon}</span>}
        {children}
      </Link>
    );
  }

  // External link or direct file download (e.g., /resume.pdf)
  if (href) {
    const isAnchorOrInternal = href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:');
    return (
      <a
        className={classes}
        href={href}
        target={isAnchorOrInternal ? undefined : '_blank'}
        rel={isAnchorOrInternal ? undefined : 'noopener noreferrer'}
        onClick={onClick}
        {...props}
      >
        {icon && <span className="btn__icon">{icon}</span>}
        {children}
      </a>
    );
  }

  // Standard interactive button
  return (
    <button
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
