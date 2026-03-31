import React from 'react';

const Logo = ({ size = 'md' }) => {
  const sizes = {
    sm: { icon: 'w-7 h-7', text: 'text-[0.9em]' },
    md: { icon: 'w-8 h-8', text: 'text-[1.05em]' },
    lg: { icon: 'w-9 h-9', text: 'text-[1.2em]' },
  };
  const s = sizes[size];

  return (
    <a href="#home" className="flex items-center gap-2.5 flex-shrink-0 group">
      <div className={`${s.icon} rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] flex items-center justify-center shadow-md shadow-[rgba(var(--accent-rgb),0.2)] group-hover:shadow-lg group-hover:shadow-[rgba(var(--accent-rgb),0.3)] transition-shadow`}>
        <svg className="w-[55%] h-[55%] fill-white" viewBox="0 0 24 24">
          <path d="M2.5 12.5C2.5 8 5 4.5 9 3c1.5 2 3.5 3 6 3 1 0 2-.2 3-.5C19.5 7 21 9.5 21 12.5c0 4-3 7.5-7.5 8.5-.5.1-1 .2-1.5.2s-1-.1-1.5-.2C6 20 2.5 16.5 2.5 12.5z"/>
          <path d="M9 3c0 0 2 2.5 6 3" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <span className={`font-unbounded ${s.text} font-semibold text-white tracking-tight drop-shadow-sm`}>
        Sole<span className="text-[var(--accent)]">Craft</span>
      </span>
    </a>
  );
};

export default Logo;
