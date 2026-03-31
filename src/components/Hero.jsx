import React from 'react';
import heroImage from '../assets/images/nav1.webp';
import sneaker2 from '../assets/images/sneaker2.webp';

const Hero = () => {
  return (
    <section className="glass-section max-w-[1400px] mx-auto">
      {/* Main two-column layout */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
        {/* Left Content */}
        <div className="lg:w-[45%] pr-0 lg:pr-[50px] flex flex-col justify-between order-2 lg:order-1">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--accent2)] animate-pulse"></span>
              <span className="text-[var(--text-body)] text-xs sm:text-sm">New Collection 2026 is Live</span>
            </div>

            {/* Review avatars */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-2">
                {['P', 'J', 'A'].map((letter, i) => (
                  <div key={i} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[rgba(var(--accent-rgb),0.25)] to-[rgba(var(--accent-rgb),0.08)] flex items-center justify-center text-xs font-unbounded text-[var(--text-heading)] border-2 border-white/20">
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 fill-[var(--gold)]" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-[var(--text-muted)] text-xs mt-0.5">2,400+ happy customers</p>
              </div>
            </div>
          </div>

          {/* Featured shoe glass card */}
          <div className="mt-4 hidden sm:block">
            <div className="relative w-[160px] h-[160px] rounded-[20px] overflow-hidden glass">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--accent-rgb),0.1)] to-transparent" />
              <img src={sneaker2} alt="Featured shoe" className="w-full h-full object-contain p-3 relative z-10" />
              <div className="absolute bottom-2 left-0 right-0 text-center">
                <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-unbounded">New Drop</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Large headings */}
        <div className="lg:w-[55%] flex flex-col gap-[6px] sm:gap-[10px] order-1 lg:order-2">
          {/* First row */}
          <div className="flex items-center gap-0 -mb-1 sm:-mb-3">
            <div className="glass rounded-[12px] sm:rounded-[20px] px-2 sm:px-3 py-2 sm:py-3">
              <h1 className="font-unbounded text-[2em] sm:text-[3em] md:text-[4em] xl:text-[5.5em] font-medium uppercase italic leading-[0.9]">Step</h1>
            </div>
            <div className="py-2 sm:py-3 pl-1">
              <h1 className="font-unbounded text-[2em] sm:text-[3em] md:text-[4em] xl:text-[5.5em] font-medium uppercase italic leading-[0.9]">Into</h1>
            </div>
          </div>

          {/* Second row */}
          <div className="flex items-center gap-0">
            <div className="py-2 sm:py-3">
              <h1 className="font-unbounded text-[2em] sm:text-[3em] md:text-[4em] xl:text-[5.5em] font-medium uppercase italic leading-[0.9]">Your</h1>
            </div>
            <div className="glass rounded-[12px] sm:rounded-[20px] px-2 sm:px-3 py-2 sm:py-3 ml-1">
              <h1 className="font-unbounded text-[2em] sm:text-[3em] md:text-[4em] xl:text-[5.5em] font-medium uppercase italic leading-[0.9]">Style</h1>
            </div>
          </div>

          {/* Description text */}
          <p className="text-[var(--text-body)] text-[0.9em] sm:text-[1em] pr-0 lg:pr-[200px] mt-2 sm:mt-3 leading-relaxed">
            Premium handcrafted sneakers designed for those who demand both comfort and style. Discover your perfect pair from our curated collection.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-5 items-center mt-4 sm:mt-6">
            <button className="btn-fill">
              Shop Collection
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] glass rounded-full flex items-center justify-center group-hover:bg-[rgba(var(--accent-rgb),0.1)] transition-all">
                <svg className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] fill-[var(--text-heading)]" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <span className="text-[var(--text-body)] text-sm hidden sm:inline">Watch Film</span>
            </div>
          </div>

          {/* Hero image with glass overlay */}
          <div className="mt-8 relative group">
            <div className="rounded-[24px] overflow-hidden border border-white/15 shadow-xl">
              <img
                src={heroImage}
                alt="Featured collection"
                className="w-full object-cover"
              />
            </div>
            {/* Glass overlay badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto glass flex items-center gap-3 rounded-[16px] px-4 py-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <div>
                <p className="text-[var(--text-heading)] text-sm font-unbounded font-light">Spring Collection</p>
                <p className="text-[var(--text-muted)] text-xs">New arrivals just dropped</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logos Row */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-[10px] mt-8 sm:mt-14">
        {['Nike', 'Adidas', 'Puma', 'New Balance', 'Reebok'].map((brand, i) => (
          <div key={i} className={`glass-card text-center ${i >= 3 ? 'hidden sm:flex' : 'flex'} items-center justify-center`} style={{ padding: '16px 12px' }}>
            <span className="text-[var(--text-muted)] text-xs sm:text-sm font-unbounded font-light opacity-60 hover:opacity-100 transition-opacity duration-500 uppercase tracking-widest">{brand}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
