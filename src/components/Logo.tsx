"use client";

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  subtitleClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  subtitleClassName = '',
}) => {
  const sizeClasses = {
    sm: {
      text: 'text-xl tracking-tight',
      sub: 'text-[9px] tracking-[0.24em]',
      gap: 'gap-0.5',
    },
    md: {
      text: 'text-2xl sm:text-3xl tracking-tight',
      sub: 'text-[10px] sm:text-[11px] tracking-[0.28em]',
      gap: 'gap-1',
    },
    lg: {
      text: 'text-3xl sm:text-4xl tracking-tight',
      sub: 'text-[12px] sm:text-[13px] tracking-[0.3em]',
      gap: 'gap-1.5',
    },
    xl: {
      text: 'text-4xl sm:text-5xl md:text-6xl tracking-tight',
      sub: 'text-[13px] sm:text-[15px] tracking-[0.32em]',
      gap: 'gap-2',
    },
  };

  const current = sizeClasses[size];

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <div className={`font-bold font-sans ${current.text} flex items-baseline leading-none`}>
        <span className="text-[#1A1A1C] font-semibold tracking-[-0.02em]">hitono</span>
        <span className="text-[#EFA00B] font-bold tracking-[-0.01em]">wa</span>
      </div>
      {showSubtitle && (
        <div
          className={`text-[#4A4A4E] font-normal font-sans-jp text-center ${current.sub} ${current.gap} mt-1 ${subtitleClassName}`}
        >
          合同会社ひとのわ
        </div>
      )}
    </div>
  );
};