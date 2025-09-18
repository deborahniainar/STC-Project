import React from 'react';

const ModernButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon,
  iconPosition = 'right',
  loading = false,
  disabled = false,
  onClick,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 ease-out transform focus:outline-none focus:ring-4 focus:ring-primary-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-400 text-white shadow-lg hover:shadow-glow-lg hover:scale-105 hover:from-primary-600 hover:to-primary-500',
    secondary: 'bg-gradient-to-r from-secondary-500 to-secondary-400 text-neutral-900 shadow-lg hover:shadow-xl hover:scale-105 hover:from-secondary-600 hover:to-secondary-500',
    // Use text-current so the button's text/icon inherit color from surrounding context
    glass: 'glass text-current hover:bg-white/20 hover:scale-105',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white hover:scale-105',
    ghost: 'text-primary-500 hover:bg-primary-50 hover:scale-105',
    neumorphism: 'neumorphism text-neutral-700 hover:shadow-inner-glow hover:-translate-y-1'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };
  
  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7'
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="loading-dots">
          <span style={{'--i': 0}}></span>
          <span style={{'--i': 1}}></span>
          <span style={{'--i': 2}}></span>
        </div>
      ) : (
        <>
          {Icon && iconPosition === 'left' && (
            <Icon className={`${iconSizes[size]} mr-2 text-current flex-shrink-0`} />
          )}
          {children}
          {Icon && iconPosition === 'right' && (
            <Icon className={`${iconSizes[size]} ml-2 text-current flex-shrink-0 animate-wiggle-right`} />
          )}
        </>
      )}
    </button>
  );
};

export default ModernButton;