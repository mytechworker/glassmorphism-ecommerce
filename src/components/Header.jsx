import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collection', href: '#collection' },
  { label: 'About', href: '#about' },
  { label: 'New Arrivals', href: '#new-arrivals' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 py-3 sm:py-4 px-3 sm:px-5 lg:px-8 transition-all duration-300 ${scrolled ? 'py-2 sm:py-2.5' : ''}`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="glass rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between">
          <Logo />

          {/* Navigation - desktop */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="px-4 xl:px-5 py-2 text-[var(--text-body)] hover:text-[var(--accent)] transition-colors text-sm font-medium rounded-full hover:bg-[rgba(var(--accent-rgb),0.05)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="relative text-[var(--text-heading)] hover:text-[var(--accent)] transition-colors w-9 h-9 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[var(--accent2)] rounded-full text-[10px] flex items-center justify-center text-black font-bold">3</span>
            </button>
            <a href="#membership" className="hidden lg:inline-flex btn-fill py-2 px-5 text-sm">Shop Now</a>
            <button className="lg:hidden text-[var(--text-heading)] w-9 h-9 flex items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden mt-2 glass rounded-2xl px-5 py-4">
            {navLinks.map((link, i) => (
              <a key={i} href={link.href} onClick={() => setMobileOpen(false)} className="block py-3 text-[var(--text-body)] hover:text-[var(--accent)] transition-colors text-sm font-medium border-b border-[var(--divider)] last:border-0">{link.label}</a>
            ))}
            <a href="#membership" onClick={() => setMobileOpen(false)} className="mt-3 btn-fill w-full justify-center py-3 text-sm block text-center">Shop Now</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
