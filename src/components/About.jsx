import React from 'react';
import sneaker4 from '../assets/images/sneaker4.webp';
import sneaker1 from '../assets/images/sneaker1.webp';

const About = () => {
  return (
    <section className="glass-section max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-[60px]">
        {/* Left - Founder's Pick */}
        <div className="lg:w-[40%] relative flex items-center justify-center">
          <div className="absolute w-[200px] h-[200px] rounded-full bg-[var(--accent)] opacity-10 blur-[80px]" />
          <div className="glass-card w-full max-w-[300px] sm:max-w-[350px] relative overflow-hidden" style={{ transform: 'rotate(-8deg)', padding: '20px' }}>
            <div className="absolute top-0 left-0 right-0 h-[50%] bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-t-[20px]" />
            <div className="section-tag !mb-2">Founder's Pick</div>
            <div className="w-full aspect-square rounded-[16px] sm:rounded-[20px] overflow-hidden mb-4 relative flex items-center justify-center bg-gradient-to-br from-[rgba(var(--accent-rgb),0.08)] to-[rgba(255,255,255,0.02)]">
              <img src={sneaker4} alt="Founder's pick sneaker" className="w-[85%] h-[85%] object-contain drop-shadow-lg hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/10 to-transparent rounded-t-[16px]" />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[rgba(var(--accent-rgb),0.2)] to-[rgba(var(--accent-rgb),0.06)] flex items-center justify-center text-sm font-unbounded text-[var(--text-heading)] border-2 border-[rgba(var(--accent-rgb),0.15)]">
                S
              </div>
              <div>
                <h4 className="font-unbounded text-[0.9em] sm:text-[1em] font-light leading-tight">SoleCraft Team</h4>
                <p className="text-[var(--accent)] text-xs font-medium">Handpicked for You</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-[14px] glass flex items-center justify-center z-10" style={{ transform: 'rotate(6deg)' }}>
            <img src={sneaker1} alt="Sneaker" className="w-[80%] h-[80%] object-contain" />
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-[60%]">
          <div className="section-tag">Our Story</div>
          <h2 className="mb-4 sm:mb-6">Crafted with Passion. Worn with Pride.</h2>

          <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
            <div className="flex items-start gap-3 sm:gap-[15px]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[rgba(var(--accent-rgb),0.25)]">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>
              </div>
              <div>
                <h3 className="mb-1 font-unbounded text-[0.95em] sm:text-[1.1em] font-light uppercase">Premium Materials</h3>
                <p className="text-[var(--text-body)] text-sm">Every pair is crafted from sustainably sourced leather and recycled textiles, ensuring quality that lasts.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-[15px]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
              </div>
              <div>
                <h3 className="mb-1 font-unbounded text-[0.95em] sm:text-[1.1em] font-light uppercase">Lifetime Guarantee</h3>
                <p className="text-[var(--text-body)] text-sm">We stand behind every stitch. If anything goes wrong, we'll repair or replace — no questions asked.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[var(--divider)] mb-6 sm:mb-8"></div>

          <div className="grid grid-cols-3 gap-2 sm:gap-[15px]">
            {[
              { value: "50K+", label: "Pairs Sold" },
              { value: "120+", label: "Countries" },
              { value: "4.9", label: "Avg Rating" },
            ].map((stat, i) => (
              <div key={i} className="glass-card relative overflow-hidden" style={{ padding: '12px 16px' }}>
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-[rgba(var(--accent-rgb),0.06)] to-transparent rounded-bl-full" />
                <div className="flex justify-end mb-1 sm:mb-2">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-[var(--accent)]" viewBox="0 0 24 24"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                </div>
                <h2 className="font-unbounded text-[1.2em] sm:text-[1.8em] font-light leading-tight">{stat.value}</h2>
                <p className="text-[var(--text-muted)] text-xs sm:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
