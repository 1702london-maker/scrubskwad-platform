import Link from 'next/link';

export const metadata = { title: 'Regular Home Cleaning | Scrubskwad' };

export default function RegularHomeCleaning() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" alt="Regular Home Cleaning"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHYJVv_6XpshEpcZ8cueQ1ah5g-17bnl9uI--iC6WXSs-9h4OEC_AIntYv6ihrkvRvPykWDXamNJPchY1LCYIM9qkthA-hOfuAtvU9qML8BOB9ZmOjTtV-SYOWfyHu-zQaBXpSsW15mEHuQETO9FYqd_TVUX1x20hQfbfjnb2ntdTQri8ymonWPCQz8EchtxEvvbKp7-FIaXLrO2G03lZokwz56aJAuS8DpqIStwLomW7mV-lUyJL5cxQdpVnvA2gmrmWMMYCXlp4" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-20 max-w-[1200px] mx-auto w-full pb-20">
          <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-4 block">Our Services</span>
          <h1 className="font-display-lg text-display-lg md:text-6xl text-on-surface mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Regular Home Cleaning</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Consistent, meticulous maintenance for the discerning homeowner.</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-[120px] px-6 md:px-20 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>The Art of Consistent Excellence</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Our Regular Home Cleaning service is designed for those who understand that a pristine home is not a luxury — it's the foundation of a refined life. We assign a dedicated team to your residence, ensuring they learn every corner, every preference, and every nuance of your home.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-10">
              Available weekly, fortnightly, or monthly, our bespoke cleaning schedule adapts entirely to your lifestyle. From the drawing room to the wine cellar, nothing escapes our meticulous attention.
            </p>
            <Link href="/request-a-quote" className="bg-primary text-on-primary px-10 py-5 font-label-md text-label-md tracking-wider hover:bg-primary/90 transition-all inline-block">
              BOOK YOUR CLEAN
            </Link>
          </div>
          <div className="relative">
            <div className="image-frame">
              <img className="w-full object-cover h-[500px]" alt="Clean elegant home" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeNwdbE5I3-vLppWRdRbANYZjh8e3WN5_OuZ-nZlRo9Wa6vAAt_VfL21jBoIkVZsX3ahLafxnViH0H-MUg15GWxUEf_EF4mUqVdDu92G1rbXgInArbxtbO2BqNobfBMUs6BI37CID6It-WIP_--VpazvF1U7fIgrcCvD9PXApt_aRDb6VJJhhUTkC5sT-kVExkt_hOs_4y3xP0fKssz27U4ujh_X7rosU_Y_v0xG4QQuNCx6VPVjDUdiRtolaepuzdM4DneVNZHE0" />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-surface-container-low py-[120px] border-y border-[#c8c4be]/20">
        <div className="px-6 md:px-20 max-w-[1200px] mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-center mb-16" style={{ fontFamily: 'EB Garamond, serif' }}>What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'bedroom_parent', title: 'All Rooms', items: ['Dusting all surfaces', 'Vacuuming carpets & rugs', 'Mopping hard floors', 'Wiping skirting boards', 'Cleaning mirrors'] },
              { icon: 'kitchen', title: 'Kitchen', items: ['Cleaning appliance exteriors', 'Wiping countertops', 'Cleaning sink & taps', 'Interior microwave clean', 'Floor & cabinet fronts'] },
              { icon: 'bathroom', title: 'Bathrooms', items: ['Sanitising toilet', 'Cleaning shower & bath', 'Polishing taps & fixtures', 'Cleaning tiles', 'Replacing towels'] },
            ].map(col => (
              <div key={col.icon} className="bg-white p-10 border border-[#c8c4be]/30">
                <span className="material-symbols-outlined text-primary text-4xl mb-6 block">{col.icon}</span>
                <h3 className="font-headline-md text-headline-md mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>{col.title}</h3>
                <ul className="space-y-3">
                  {col.items.map(item => (
                    <li key={item} className="font-body-md text-body-md text-on-surface-variant flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-[120px] px-6 md:px-20 max-w-[1200px] mx-auto">
        <h2 className="font-headline-lg text-headline-lg text-center mb-16" style={{ fontFamily: 'EB Garamond, serif' }}>Tailored Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { plan: 'Weekly', price: '£120', per: 'per visit', desc: 'For residences requiring consistent, high-frequency maintenance.' },
            { plan: 'Fortnightly', price: '£150', per: 'per visit', desc: 'Our most popular cadence — the perfect balance of freshness and discretion.' },
            { plan: 'Monthly', price: '£200', per: 'per visit', desc: 'A thorough monthly refresh for the well-maintained residence.' },
          ].map((p, i) => (
            <div key={p.plan} className={`p-10 border ${i === 1 ? 'border-primary bg-primary/5' : 'border-[#c8c4be]/30 bg-surface-container-low'}`}>
              {i === 1 && <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-4 block">Most Popular</span>}
              <h3 className="font-headline-md text-headline-md mb-2" style={{ fontFamily: 'EB Garamond, serif' }}>{p.plan}</h3>
              <p className="text-4xl font-light text-on-surface mb-1" style={{ fontFamily: 'EB Garamond, serif' }}>{p.price}</p>
              <p className="font-label-md text-label-md text-secondary mb-6">{p.per}</p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">{p.desc}</p>
              <Link href="/request-a-quote" className="block text-center bg-primary text-on-primary px-6 py-3 font-label-md text-label-md tracking-wider hover:bg-primary/90 transition-all">GET A QUOTE</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
