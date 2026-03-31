import React from 'react';
import sneaker1 from '../assets/images/sneaker1.webp';
import sneaker2 from '../assets/images/sneaker2.webp';
import sneaker3 from '../assets/images/sneaker3.webp';
import sneaker4 from '../assets/images/sneaker4.webp';

const categories = [
  { title: "Running", desc: "Engineered for speed and endurance. Lightweight builds with responsive cushioning.", image: sneaker1 },
  { title: "Streetwear", desc: "Bold designs that turn heads. Statement sneakers for the culture.", image: sneaker4, highlight: true },
  { title: "Formal", desc: "Sleek silhouettes for the modern professional. Comfort meets class.", image: sneaker3 },
  { title: "Limited Edition", desc: "Exclusive drops you won't find anywhere else. Collect the extraordinary.", image: sneaker2 },
];

const Services = () => {
  return (
    <section className="glass-section max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 mb-5">
        <div className="lg:w-[31%]">
          <div className="section-tag">Shop by Category</div>
        </div>
        <div className="lg:flex-1">
          <h2 className="mb-3">Find Your Perfect Pair</h2>
          <p className="text-[var(--text-body)] text-sm sm:text-base mt-2">From track to street, boardroom to rooftop — we've got a sole for every story.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-[15px] mt-5">
        {categories.map((cat, i) => (
          <div
            key={i}
            className={`glass-card group hover:-translate-y-2.5 transition-all duration-300 overflow-hidden ${cat.highlight ? '!border-[rgba(var(--accent-rgb),0.35)]' : ''}`}
            style={{
              background: cat.highlight ? 'rgba(var(--accent-rgb), 0.06)' : undefined,
              boxShadow: cat.highlight ? '0 0 40px rgba(var(--accent-rgb), 0.08)' : undefined,
              padding: 0,
            }}
          >
            <div className="relative h-[180px] sm:h-[200px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[rgba(var(--accent-rgb),0.05)] to-[rgba(255,255,255,0.02)]">
              <img src={cat.image} alt={cat.title} className="w-[75%] h-[75%] object-contain group-hover:scale-110 group-hover:rotate-[-5deg] transition-all duration-500 drop-shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
              {cat.highlight && (
                <span className="absolute top-3 right-3 text-[10px] font-bold uppercase px-3 py-1 rounded-full text-[var(--accent)] bg-[rgba(var(--accent-rgb),0.1)] backdrop-blur-sm border border-[rgba(var(--accent-rgb),0.2)]">
                  Popular
                </span>
              )}
            </div>
            <div className="p-5">
              <h4 className="mb-2 sm:mb-3 font-unbounded text-[1em] sm:text-[1.1em] font-light">{cat.title}</h4>
              <p className="text-[var(--text-muted)] text-sm">{cat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
