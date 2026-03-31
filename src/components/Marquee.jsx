import React from 'react';

const Marquee = () => {
  const items = ["Style", "Comfort", "Performance", "Luxury"];
  return (
    <div className="glass py-5 sm:py-6 overflow-hidden rounded-2xl max-w-[1400px] mx-auto">
      <div className="animate-marquee whitespace-nowrap">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="inline-flex items-center">
            {items.map((item, j) => (
              <React.Fragment key={j}>
                <span className="text-[2.2rem] sm:text-[3.5rem] md:text-[4.5rem] font-unbounded font-light uppercase px-4 sm:px-6 md:px-8" style={{ color: 'rgba(255,255,255,0.03)', WebkitTextStroke: '1px rgba(255,255,255,0.12)' }}>{item}</span>
                <span className="text-[rgba(var(--accent-rgb),0.2)] text-xl sm:text-3xl px-3 sm:px-5">&#10022;</span>
              </React.Fragment>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
