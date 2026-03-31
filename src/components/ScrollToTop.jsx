import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 glass rounded-full flex items-center justify-center text-[var(--text-heading)] hover:bg-[rgba(var(--accent-rgb),0.1)] hover:border-[rgba(var(--accent-rgb),0.3)] transition-all shadow-lg"
      aria-label="Scroll to top"
    >
      <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"/></svg>
    </button>
  );
};

export default ScrollToTop;
