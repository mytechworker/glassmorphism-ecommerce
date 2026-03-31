import React from 'react';

const reviews = [
  { name: "Priya Sharma", role: "Runner", text: "The Air Phantom X completely changed my marathon game. Lightest shoe I've ever raced in.", rating: 5 },
  { name: "James Wilson", role: "Collector", text: "SoleCraft drops are always fire. The quality is unmatched and the Limited Editions hold value.", rating: 5, featured: true },
  { name: "Aiko Tanaka", role: "Designer", text: "I wear the Urban Drift Pro daily. Gets compliments everywhere. Comfort and style perfectly balanced.", rating: 4 },
];

const Testimonials = () => (
  <section className="section-glass px-4 sm:px-6 lg:px-0">
    <div className="max-w-[1400px] mx-auto">
      <div className="section-tag justify-center">Happy Feet</div>
      <h2 className="text-center mb-3 sm:mb-4">What Our Customers Say</h2>
      <p className="text-[var(--text-muted)] text-center mb-14 sm:mb-16 max-w-[500px] mx-auto text-sm sm:text-base">Real people. Real comfort. Real style.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-end pt-10 sm:pt-12">
        {reviews.map((t, i) => (
          <div
            key={i}
            className={`glass-card text-center ${t.featured ? 'md:-mt-6 !border-[rgba(var(--accent-rgb),0.3)]' : ''}`}
            style={{
              background: t.featured ? 'rgba(var(--accent-rgb), 0.05)' : undefined,
              boxShadow: t.featured ? '0 0 40px rgba(var(--accent-rgb), 0.08)' : undefined,
              padding: '32px 24px',
            }}
          >
            <div className="flex justify-center -mt-14 sm:-mt-16 mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[rgba(var(--accent-rgb),0.2)] to-[rgba(var(--accent-rgb),0.06)] flex items-center justify-center text-xl sm:text-2xl font-unbounded font-light text-[var(--text-heading)] border-4 border-white/20" style={{ boxShadow: '0 0 0 8px rgba(var(--accent-rgb), 0.06)' }}>
                {t.name[0]}
              </div>
            </div>

            <h5 className="font-unbounded font-light text-[1em] uppercase">{t.name}</h5>
            <p className="text-[var(--accent)] text-xs uppercase tracking-widest mb-3 font-medium">{t.role}</p>
            <p className="text-[var(--text-body)] italic text-sm leading-relaxed mb-4 px-2">"{t.text}"</p>
            <div className="flex gap-1 justify-center">
              {[...Array(5)].map((_, s) => (
                <svg key={s} className={`w-4 h-4 ${s < t.rating ? 'fill-[var(--gold)]' : 'fill-[rgba(255,255,255,0.15)]'}`} viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
