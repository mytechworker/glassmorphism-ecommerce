import React from 'react';
import Logo from './Logo';

const Footer = () => (
  <footer className="glass-section max-w-[1400px] mx-auto" style={{ padding: '' }}>
    <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 mb-8">
      <div className="lg:w-2/5">
        <div className="mb-4"><Logo size="lg" /></div>
        <p className="text-[var(--text-muted)] text-sm max-w-[280px] leading-relaxed">Premium handcrafted sneakers for those who demand both style and substance.</p>
      </div>
      <div className="lg:w-3/5 flex flex-col items-start lg:items-end justify-center">
        <h3 className="font-unbounded text-[1em] sm:text-[1.1em] font-light uppercase mb-3">Get Drop Alerts</h3>
        <div className="flex w-full max-w-[420px]">
          <input type="email" placeholder="Your email" className="bg-white/10 backdrop-blur-sm border border-white/15 border-r-0 rounded-l-full px-5 py-3 text-sm text-[var(--text-heading)] outline-none placeholder-[var(--text-muted)] flex-1 min-w-0 focus:border-[rgba(var(--accent-rgb),0.4)] transition-colors" />
          <button className="btn-fill rounded-l-none py-3 px-6 text-sm">Subscribe</button>
        </div>
      </div>
    </div>

    <div className="border-t border-[var(--divider)] mb-8"></div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
      {[
        { title: "Shop", links: [{ label: 'Running', href: '#collection' }, { label: 'Streetwear', href: '#collection' }, { label: 'Formal', href: '#collection' }, { label: 'Limited Edition', href: '#new-arrivals' }] },
        { title: "Company", links: [{ label: 'About Us', href: '#about' }, { label: 'Careers', href: '#' }, { label: 'Sustainability', href: '#' }, { label: 'Press', href: '#' }] },
        { title: "Support", links: [{ label: 'Size Guide', href: '#faq' }, { label: 'Shipping', href: '#faq' }, { label: 'Returns', href: '#faq' }, { label: 'FAQ', href: '#faq' }] },
      ].map((col, i) => (
        <div key={i}>
          <h4 className="font-unbounded text-[0.8em] font-light uppercase mb-3">{col.title}</h4>
          <ul className="space-y-2">
            {col.links.map((l, j) => (
              <li key={j}><a href={l.href} className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors text-sm">{l.label}</a></li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <h4 className="font-unbounded text-[0.8em] font-light uppercase mb-3">Visit Us</h4>
        <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-3">42 Sneaker Lane<br/>Brooklyn, NY 11201</p>
        <button className="btn-primary text-xs py-2 px-4">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          Get Directions
        </button>
      </div>
    </div>

    <div className="border-t border-[var(--divider)] mt-8"></div>

    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5">
      <p className="text-[var(--text-muted)] text-xs">&copy; 2026 SoleCraft. All rights reserved.</p>
      <div className="flex items-center gap-2">
        {[
          'M24 12.07c0-6.63-5.37-12-12-12s-12 5.37-12 12c0 5.99 4.39 10.95 10.13 11.85v-8.38H7.08v-3.47h3.04V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.51c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.39C19.61 23.03 24 18.06 24 12.07z',
          'M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85C2.38 3.85 3.9 2.31 7.15 2.16 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.63-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-11.85a1.44 1.44 0 10-2.88 0 1.44 1.44 0 002.88 0z',
          'M23.95 4.57a10 10 0 01-2.83.78 4.96 4.96 0 002.16-2.72 9.9 9.9 0 01-3.13 1.18A4.92 4.92 0 0012 8.29c0 .39.04.77.13 1.13A13.98 13.98 0 011.64 3.16a4.82 4.82 0 00-.67 2.48 4.92 4.92 0 002.19 4.1 4.9 4.9 0 01-2.23-.62v.06a4.92 4.92 0 003.95 4.83 5 5 0 01-2.21.08 4.94 4.94 0 004.6 3.42A9.87 9.87 0 010 19.54a13.94 13.94 0 007.55 2.21c9.05 0 14-7.5 14-13.98 0-.21 0-.42-.02-.63A10 10 0 0024 4.59z',
        ].map((d, i) => (
          <a key={i} href="#" className="w-8 h-8 glass rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[rgba(var(--accent-rgb),0.3)] transition-all">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d={d}/></svg>
          </a>
        ))}
      </div>
      <div className="flex gap-4">
        <a href="#" className="text-[var(--text-muted)] text-xs hover:text-[var(--accent)] transition-colors">Privacy</a>
        <a href="#" className="text-[var(--text-muted)] text-xs hover:text-[var(--accent)] transition-colors">Terms</a>
      </div>
    </div>
  </footer>
);

export default Footer;
