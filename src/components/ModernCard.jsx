import React from 'react';

const ModernCard = ({ 
  children, 
  variant = 'modern', 
  className = '', 
  hover = true,
  onClick,
  ...props 
}) => {
  const baseClasses = 'transition-all duration-500 ease-out';
  
  const variants = {
    modern: 'bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20',
    glass: 'glass rounded-2xl',
    neumorphism: 'neumorphism',
    gradient: 'bg-gradient-to-br from-white to-neutral-50 rounded-2xl shadow-xl border border-neutral-200/50',
    minimal: 'bg-white rounded-xl shadow-lg border border-neutral-200'
  };
  
  const hoverEffects = hover ? {
    modern: 'hover:shadow-2xl hover:-translate-y-2',
    glass: 'hover:bg-white/20 hover:-translate-y-2',
    neumorphism: 'hover:shadow-inner-glow hover:-translate-y-1',
    gradient: 'hover:shadow-2xl hover:-translate-y-2 hover:from-white hover:to-primary-50',
    minimal: 'hover:shadow-xl hover:-translate-y-1'
  } : {};

  return (
    <div
      className={`${baseClasses} ${variants[variant]} ${hoverEffects[variant] || ''} ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default ModernCard;