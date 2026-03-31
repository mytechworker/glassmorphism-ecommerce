import React, { useState } from 'react';

const faqData = [
  { q: "What sizes do you carry?", a: "We carry US sizes 4-15 for all styles. Our size guide helps you find the perfect fit with measurements for length and width." },
  { q: "How long does shipping take?", a: "Standard shipping takes 5-7 business days. Premium members get free express shipping (2-3 days). We ship to over 120 countries worldwide." },
  { q: "What's your return policy?", a: "We offer a 30-day hassle-free return policy. If you're not 100% satisfied, send them back for a full refund or exchange." },
  { q: "Are your shoes sustainably made?", a: "Absolutely. We use recycled materials where possible, sustainably sourced leather, and our factories are audited for fair labor practices." },
  { q: "How do Limited Edition drops work?", a: "Limited Edition shoes drop on specific dates announced via our newsletter. Premium and Collector members get priority access." },
  { q: "Can I cancel my membership anytime?", a: "Yes, you can cancel your SoleCraft Club membership at any time from your account settings. No cancellation fees." },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);
  const half = Math.ceil(faqData.length / 2);

  const renderItem = (item, idx) => (
    <div key={idx}>
      <button
        onClick={() => setOpen(open === idx ? -1 : idx)}
        className="w-full flex items-center justify-between py-4 sm:py-5 text-left border-t border-[var(--divider)]"
      >
        <span className="font-unbounded text-[0.8em] sm:text-[0.9em] font-light text-[var(--text-heading)] pr-3">{item.q}</span>
        <svg className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${open === idx ? 'rotate-45 stroke-[var(--accent)]' : 'stroke-[var(--text-muted)]'}`} fill="none" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-[var(--text-body)] text-sm pb-5 pr-8 leading-relaxed">{item.a}</p>
      </div>
    </div>
  );

  return (
    <section className="glass-section max-w-[1400px] mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="section-tag">Support</div>
          <h2>Frequently Asked Questions</h2>
        </div>
        <button className="btn-primary whitespace-nowrap">
          Contact Us
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
        <div className="glass-card" style={{ padding: '8px 24px' }}>
          {faqData.slice(0, half).map((item, idx) => renderItem(item, idx))}
        </div>
        <div className="glass-card" style={{ padding: '8px 24px' }}>
          {faqData.slice(half).map((item, idx) => renderItem(item, idx + half))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
