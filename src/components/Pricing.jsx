import React from 'react';

const plans = [
  {
    name: "Starter", price: "$9.99",
    desc: "Get early access to new drops and member-only colorways.",
    features: ["Early access to new releases", "Free standard shipping", "Member-only colorways"],
    note: "Cancel anytime. No commitments.",
  },
  {
    name: "Premium", price: "$24.99", popular: true,
    desc: "The ultimate sneakerhead membership with VIP perks.",
    features: ["Everything in Starter", "Priority access to Limited Editions", "Free express shipping worldwide", "Exclusive member events & previews"],
    note: "Most popular among collectors.",
  },
  {
    name: "Collector", price: "$49.99",
    desc: "For the true connoisseur. First in line, every time.",
    features: ["Everything in Premium", "Guaranteed allocation on all drops", "Personal style consultant"],
    note: "Limited to 500 members.",
  },
];

const Pricing = () => (
  <section className="glass-section max-w-[1400px] mx-auto text-center">
    <div className="section-tag justify-center">Membership</div>
    <h2 className="mb-3 sm:mb-4">Join the SoleCraft Club</h2>
    <p className="text-[var(--text-muted)] mb-8 mx-auto max-w-[550px] text-sm sm:text-base">Unlock exclusive drops, free shipping, and VIP access to the most coveted sneakers on the planet.</p>

    <div className="flex flex-col md:flex-row gap-3 sm:gap-5 mt-6 items-stretch">
      {plans.map((plan, i) => (
        <div
          key={i}
          className={`flex-1 text-left glass-card flex flex-col ${plan.popular ? 'md:-mt-4 md:mb-0 !border-[rgba(var(--accent-rgb),0.35)]' : 'md:mt-4'}`}
          style={{
            background: plan.popular ? 'rgba(var(--accent-rgb), 0.06)' : undefined,
            boxShadow: plan.popular ? '0 0 50px rgba(var(--accent-rgb), 0.1)' : undefined,
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="section-tag !mb-0">{plan.name}</div>
            {plan.popular && (
              <span className="text-[10px] font-bold uppercase px-3 py-1 rounded-full bg-[rgba(var(--accent-rgb),0.1)] text-[var(--accent)]">Popular</span>
            )}
          </div>

          <div className="flex items-end gap-1 mb-3">
            <h2 className="font-unbounded text-[2em] sm:text-[2.5em] font-light leading-none">{plan.price}</h2>
            <span className="text-[var(--text-muted)] text-sm mb-1">/mo</span>
          </div>
          <p className="text-[var(--text-body)] text-sm mb-5">{plan.desc}</p>

          <ul className="mb-5 flex-1 space-y-0">
            {plan.features.map((f, j) => (
              <li key={j} className="flex items-center gap-3 text-sm text-[var(--text-body)] py-[10px] border-t border-[var(--divider)]">
                <svg className="w-4 h-4 stroke-[var(--accent)] flex-shrink-0" fill="none" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                {f}
              </li>
            ))}
          </ul>

          <button className={`w-full justify-center py-3.5 rounded-full font-medium transition-all ${plan.popular ? 'btn-fill' : 'btn-primary'}`}>
            Join Now
          </button>
          <p className="text-[var(--text-muted)] text-[0.8em] mt-4 text-center">{plan.note}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Pricing;
