import React from 'react';
import sneaker1 from '../assets/images/sneaker1.webp';
import sneaker2 from '../assets/images/sneaker2.webp';
import sneaker3 from '../assets/images/sneaker3.webp';

const shoes = [
  { title: "Air Phantom X", desc: "Ultra-lightweight running shoe with reactive foam and breathable mesh upper.", price: "$189", tag: "Bestseller", image: sneaker1 },
  { title: "Urban Drift Pro", desc: "Street-ready sneaker with premium suede, cushioned sole, and bold silhouette.", price: "$159", tag: "New", image: sneaker2 },
  { title: "Eclipse Formal", desc: "Hand-stitched Italian leather oxford. Timeless design meets modern comfort.", price: "$249", tag: "Premium", image: sneaker3 },
];

const DigitalSolutions = () => (
  <section className="section-glass">
    <div className="max-w-[1400px] mx-auto">
      <div className="glass-section" style={{ padding: '40px 30px' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
          <div>
            <div className="section-tag">Featured Collection</div>
            <h2>Handpicked for You. Made to Move.</h2>
          </div>
          <button className="btn-primary whitespace-nowrap">
            View All
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-4">
        {shoes.map((s, i) => (
          <div key={i} className="glass-card group cursor-pointer overflow-hidden relative" style={{ padding: 0 }}>
            <div className="relative h-[220px] sm:h-[260px] overflow-hidden rounded-t-[20px] flex items-center justify-center bg-gradient-to-br from-[rgba(var(--accent-rgb),0.05)] to-[rgba(255,255,255,0.02)]">
              <div className="absolute top-0 left-0 right-0 h-[50%] bg-gradient-to-b from-white/10 to-transparent" />
              <img src={s.image} alt={s.title} className="w-[70%] h-[70%] object-contain group-hover:scale-110 group-hover:rotate-[-3deg] transition-all duration-500 drop-shadow-xl relative z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-white/10 to-transparent" />
              <span className="absolute top-4 left-4 text-[10px] font-bold uppercase px-3 py-1 rounded-full text-[var(--accent)] z-20 bg-[rgba(var(--accent-rgb),0.08)] backdrop-blur-sm border border-[rgba(var(--accent-rgb),0.15)]">
                {s.tag}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-unbounded text-[0.95em] font-light">{s.title}</h4>
                <span className="font-unbounded text-[var(--accent)] text-[1.1em] font-medium">{s.price}</span>
              </div>
              <p className="text-[var(--text-muted)] text-sm mb-4 leading-relaxed">{s.desc}</p>
              <button className="btn-primary w-full justify-center text-sm py-3">
                Add to Cart
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DigitalSolutions;
