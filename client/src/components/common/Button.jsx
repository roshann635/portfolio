import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  href,
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) => {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {icon && <span className="btn__icon">{icon}</span>}
        {children}
      </a>
    );
  }

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
