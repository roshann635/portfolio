import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Button.css';

/**
 * Button — Premium interactive button with:
 *   - Magnetic pull: shifts toward cursor on hover
 *   - Ripple effect: expanding circle on click
 *   - Glow intensifies on hover
 *   - Shimmer sweep animation
 */
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
  const btnRef = useRef(null);
  const [ripples, setRipples] = useState([]);
  const [magnetic, setMagnetic] = useState({ x: 0, y: 0 });

  // Magnetic pull — button shifts toward cursor
  const handleMouseMove = (e) => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMagnetic({ x: x * 0.25, y: y * 0.25 }); // Increased intensity
    
    // Dynamic glow position based on mouse relative to button
    const glowX = (e.clientX - rect.left) / rect.width * 100;
    const glowY = (e.clientY - rect.top) / rect.height * 100;
    btnRef.current?.style.setProperty('--glow-x', `${glowX}%`);
    btnRef.current?.style.setProperty('--glow-y', `${glowY}%`);
    btnRef.current?.style.setProperty('--glow-opacity', '0.6');
  };

  const handleMouseLeave = () => {
    setMagnetic({ x: 0, y: 0 });
    btnRef.current?.style.setProperty('--glow-opacity', '0');
  };


  // Ripple effect on click
  const handleClick = (e) => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();
      setRipples((prev) => [...prev, { x, y, id }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    }
    onClick?.(e);
  };

  const MotionComp = href ? motion.a : motion.button;

  return (
    <MotionComp
      ref={btnRef}
      className={classes}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      href={href}
      type={href ? undefined : type}
      disabled={disabled}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      animate={{
        x: magnetic.x,
        y: magnetic.y,
      }}
      transition={{
        x: { type: 'spring', stiffness: 150, damping: 15 },
        y: { type: 'spring', stiffness: 150, damping: 15 },
        scale: { duration: 0.2 },
      }}
      {...props}
    >
      {/* Ripple circles */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="btn__ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}

      {icon && <span className="btn__icon">{icon}</span>}
      {children}
    </MotionComp>
  );
};

export default Button;
