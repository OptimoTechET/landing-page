import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  centered?: boolean;
  className?: string;
  dividerLocation?: 'below-eyebrow' | 'below-title' | 'none';
}

export function SectionHeading({ 
  eyebrow, 
  title, 
  subtitle, 
  centered = false, 
  className = '', 
  dividerLocation = 'below-title' 
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      {eyebrow && (
        <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
          {dividerLocation === 'below-eyebrow' && <span className="h-px w-8 bg-primary block"></span>}
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface">
        {title}
      </h2>
      {dividerLocation === 'below-title' && (
        <div className={`w-20 h-1 bg-primary mt-6 rounded-full ${centered ? 'mx-auto' : ''}`}></div>
      )}
      
      {subtitle && (
        <p className={`text-lg text-on-surface/60 ${dividerLocation === 'below-title' ? 'mt-6' : 'mt-8'} ${centered ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
