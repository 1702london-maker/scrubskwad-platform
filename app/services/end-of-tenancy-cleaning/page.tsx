import Link from 'next/link';

export const metadata = { title: 'End of Tenancy Cleaning | Scrubskwad' };

export default function EndOfTenancyCleaning() {
  return (
    <>
      <section className="relative h-[70vh] flex items-end overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover brightness-90" alt="End of Tenancy Cleaning"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHYJVv_6XpshEpcZ8cueQ1ah5g-17bnl9uI--iC6WXSs-9h4OEC_AIntYv6ihrkvRvPykWDXamNJPchY1LCYIM9qkthA-hOfuAtvU9qML8BOB9ZmOjTtV-SYOWfyHu-zQaBXpSsW15mEHuQETO9FYqd_TVUX1x20hQfbfjnb2ntdTQri8ymonWPCQz8EchtxEvvbKp7-FIaXLrO2G03lZokwz56aJAuS8DpqIStwLomW7mV-lUyJL5cxQdpVnvA2gmrmWMMYCXlp4" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-20 max-w-[1200px] mx-auto w-full pb-20">
          <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-4 block">Our Services</span>
          <h1 className="font-display-lg text-display-lg md:text-6xl text-on-surface mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>End of Tenancy Cleaning</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Guaranteed deposit return service for the UK's most exclusive rentals.</p>
        </div>
      </section>

      <section className="py-[120px] px-6 md:px-20 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Deposit Returned. Guaranteed.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              We work to the exact standards required by the most demanding London landlords and letting agents. Our end of tenancy clean is so thorough that we offer a re-clean guarantee — if your deposit is withheld for cleaning reasons, we return and remedy at no charge.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-10">
              We adhere to the Association of Residential Letting Agents (ARLA) standards, and our cleaning checklist exceeds the most rigorous inventory checks.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/request-a-quote" className="bg-primary text-on-primary px-10 py-5 font-label-md text-label-md tracking-wider hover:bg-primary/90 transition-all inline-block">
                BOOK NOW
              </Link>
              <Link href="/contact" className="border border-outline/30 px-10 py-5 font-label-md text-label-md tracking-wider text-secondary hover:bg-surface-container transition-all inline-block">
                ENQUIRE
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { icon: 'verified', title: 'Re-clean Guarantee', desc: 'If your deposit is held for cleaning reasons, we return within 48 hours at no cost.' },
              { icon: 'schedule', title: 'Flexible Timing', desc: 'We work around check-out dates and inventory check-ins, including weekends.' },
              { icon: 'receipt_long', title: 'Detailed Checklist', desc: 'We use a comprehensive inventory-aligned checklist, documented with photos.' },
            ].map(item => (
              <div key={item.icon} className="flex gap-6 p-6 bg-surface-container-low border border-[#c8c4be]/30">
                <span className="material-symbols-outlined text-primary text-3xl shrink-0">{item.icon}</span>
                <div>
                  <h4 className="font-headline-md text-[20px] mb-1" style={{ fontFamily: 'EB Garamond, serif' }}>{item.title}</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary/5 border-y border-primary/10 py-20">
        <div className="px-6 md:px-20 max-w-[1200px] mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg mb-4" style={{ fontFamily: 'EB Garamond, serif' }}>Starting from £250</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8">Pricing based on property size. Studios from £250 · 1-bed from £320 · 2-bed from £395 · 3+ bed from £450</p>
          <Link href="/request-a-quote" className="bg-primary text-on-primary px-12 py-5 font-label-md text-label-md tracking-widest hover:bg-primary/90 transition-all inline-block">GET YOUR QUOTE</Link>
        </div>
      </section>
    </>
  );
}
