import React from 'react';

const LoadingSpinner = ({ size = 'md', variant = 'primary', className = '' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const variants = {
    primary: 'border-primary-500',
    secondary: 'border-secondary-500',
    white: 'border-white',
    neutral: 'border-neutral-500'
  };

  return (
    <div className={`inline-block ${sizes[size]} ${className}`}>
      <div 
        className={`${sizes[size]} rounded-full border-2 border-transparent ${variants[variant]} border-t-transparent animate-spin`}
        style={{
          borderTopColor: 'transparent',
          borderRightColor: 'currentColor',
          borderBottomColor: 'currentColor',
          borderLeftColor: 'currentColor'
        }}
      />
    </div>
  );
};

export default LoadingSpinner;