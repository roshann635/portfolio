import { motion } from 'framer-motion';
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

  const MotionComp = href ? motion.a : motion.button;

  return (
    <MotionComp
      className={classes}
      onClick={onClick}
      href={href}
      type={href ? undefined : type}
      disabled={disabled}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      {children}
    </MotionComp>
  );
};

export default Button;
