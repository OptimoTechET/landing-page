import React, { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'outlined' | 'ghost' | 'white';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const baseStyles = 'px-8 py-3 rounded-full font-bold transition-all duration-300 active:scale-95 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'pill-gradient text-white hover:opacity-90 shadow-lg shadow-primary/30 hover:shadow-primary/50',
    outlined: 'border-2 border-outline-variant hover:border-primary hover:bg-surface-container-low text-on-surface hover:text-primary',
    ghost: 'text-primary hover:gap-4 shadow-none px-4 py-2 hover:bg-primary/5',
    white: 'bg-white text-primary hover:bg-surface-container-lowest shadow-xl'
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
