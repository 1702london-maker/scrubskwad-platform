import Link from 'next/link';
import Image from 'next/image';

/* ── Shared helpers ── */
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="font-label-md text-[10px] tracking-[0.22em] uppercase text-on-surface/40 mb-4">{children}</p>
);

const DarkBtn = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href}
    className="inline-block bg-on-surface text-white font-label-md text-[11px] tracking-[0.18em] uppercase px-7 py-3.5 hover:bg-on-surface/85 transition-all">
    {children}
  </Link>
);

const OutlineBtn = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href}
    className="inline-block border border-on-surface text-on-surface font-label-md text-[11px] tracking-[0.18em] uppercase px-7 py-3.5 hover:bg-on-surface hover:text-white transition-all">
    {children}
  </Link>
);

/* ── Interior image URLs ── */
const IMG = {
  hero:      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80',
  about:     'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80',
  svc1:      'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&q=70',
  svc2:      'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&q=70',
  svc3:      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70',
  svc4:      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=70',
  svc5:      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=70',
  proj1:     'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=75',
  proj2:     'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&q=75',
  proj3:     'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&q=75',
  proj4:     'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&q=75',
  prod1:     'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&q=70',
  prod2:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70',
  prod3:     'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&q=70',
  prod4:     'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=70',
  franchise: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&q=75',
};

export default function Home() {
  return (
    <main className="bg-white">

      {/* ══ 1. HERO ══ */}
      <section className="pt-[60px] min-h-screen grid md:grid-cols-2">
        {/* Left: text */}
        <div className="flex flex-col justify-center px-8 md:px-16 xl:px-24 py-20 md:py-0">
          <Eyebrow>Premium Property Care</Eyebrow>
          <h1 className="text-[40px] md:text-[52px] xl:text-[62px] leading-[1.08] text-on-surface mb-6"
            style={{ fontFamily: 'EB Garamond, serif' }}>
            Cleaning services shaped around the rhythm of your property.
          </h1>
          <p className="font-body-md text-[15px] text-on-surface/60 leading-relaxed mb-10 max-w-[480px]">
            Discreet domestic and commercial cleaning for clients who value consistency, trust and spaces that always feel ready.
          </p>
          <div className="flex flex-wrap gap-4">
            <DarkBtn href="/request-a-quote">Request a Quote</DarkBtn>
            <OutlineBtn href="/services">Explore Services</OutlineBtn>
          </div>
        </div>

        {/* Right: image + floating card */}
        <div className="relative bg-[#f4f2ef] min-h-[60vh] md:min-h-full">
          <Image src={IMG.hero} alt="Luxury interior" fill className="object-cover" priority />
          <div className="absolute top-8 right-8 bg-white shadow-xl p-6 w-[190px]">
            <div className="flex items-end gap-1 mb-3">
              <span className="text-[32px] font-semibold text-on-surface leading-none" style={{ fontFamily: 'EB Garamond, serif' }}>2</span>
              <span className="text-[13px] text-on-surface/50 mb-1">hr</span>
            </div>
            <p className="font-label-md text-[9px] tracking-[0.18em] uppercase text-on-surface/40 mb-4">Average Response</p>
            <ul className="space-y-2">
              {['Vetted Teams', 'Fully Insured', 'Fixed Pricing'].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-on-surface rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white text-[11px]">check</span>
                  </span>
                  <span className="font-body-md text-[12px] text-on-surface/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══ 2. STATS ══ */}
      <section className="bg-[#f6f4f1] border-y border-on-surface/6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-on-surface/8">
          {[
            { stat: '500+',  label: 'Homes Maintained',  sub: 'Across London & the Home Counties' },
            { stat: '4.9★',  label: 'Client Rating',     sub: 'Based on verified reviews' },
            { stat: '24hr',  label: 'Response Time',     sub: 'We aim to respond within 2 hours' },
            { stat: '100%',  label: 'Insured Teams',     sub: 'Your property is in safe hands' },
          ].map(item => (
            <div key={item.label} className="px-8 py-10 text-center md:text-left">
              <p className="text-[34px] md:text-[40px] leading-none text-on-surface mb-1" style={{ fontFamily: 'EB Garamond, serif' }}>{item.stat}</p>
              <p className="font-label-md text-[10px] tracking-[0.18em] uppercase text-on-surface mb-1">{item.label}</p>
              <p className="font-body-md text-[12px] text-on-surface/45">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 3. WHO WE ARE ══ */}
      <section className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-0">
        <div className="flex flex-col justify-center px-8 md:px-16 xl:px-24 py-20 md:py-28">
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className="text-[36px] md:text-[48px] leading-[1.1] text-on-surface mb-7" style={{ fontFamily: 'EB Garamond, serif' }}>
            Quiet luxury starts with a clean space.
          </h2>
          <p className="font-body-md text-[14px] text-on-surface/60 leading-relaxed mb-5">
            Scrubskwad was founded on the belief that truly exceptional cleaning should be invisible — seamlessly woven into the rhythm of your life. We work with private clients, property managers and businesses across London and the Home Counties.
          </p>
          <p className="font-body-md text-[14px] text-on-surface/60 leading-relaxed mb-10">
            Every team member is individually vetted, trained to our exacting standards, and briefed on your specific property before each visit. The result is a service that feels personal, professional and effortlessly consistent.
          </p>
          <div><DarkBtn href="/about-us">Learn More</DarkBtn></div>
        </div>
        <div className="relative min-h-[420px] md:min-h-full bg-[#f4f2ef]">
          <Image src={IMG.about} alt="Who we are" fill className="object-cover" />
        </div>
      </section>

      {/* ══ 4. SERVICES ══ */}
      <section className="bg-[#f8f7f5] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 xl:px-20">
          <div className="grid md:grid-cols-2 gap-12 items-end mb-14">
            <div>
              <Eyebrow>Services</Eyebrow>
              <h2 className="text-[36px] md:text-[46px] leading-[1.1] text-on-surface" style={{ fontFamily: 'EB Garamond, serif' }}>
                Cleaning shaped around the property.
              </h2>
            </div>
            <div>
              <div className="flex gap-3 justify-end items-end mb-4">
                {[IMG.svc1, IMG.svc2, IMG.svc3, IMG.svc4, IMG.svc5].map((src, i) => (
                  <div key={i} className="relative w-[72px] h-[90px] shrink-0 overflow-hidden">
                    <Image src={src} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <Link href="/services" className="flex items-center gap-2 font-label-md text-[10px] tracking-[0.16em] uppercase text-on-surface justify-end hover:gap-3 transition-all">
                View All Services <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 border-t border-on-surface/10">
            {[
              { num: '01', title: 'Regular Home Cleaning',  desc: 'Consistent scheduled cleaning tailored to your household.', href: '/services/regular-home-cleaning' },
              { num: '02', title: 'Deep Cleaning',          desc: 'A thorough, intensive clean of every surface and detail.',   href: '/services/deep-cleaning' },
              { num: '03', title: 'End of Tenancy',         desc: 'Spotless preparation for check-out or new occupancy.',       href: '/services/end-of-tenancy-cleaning' },
              { num: '04', title: 'Office & Commercial',    desc: 'Professional environments maintained to the highest standard.', href: '/services/office-commercial-cleaning' },
              { num: '05', title: 'Carpet & Upholstery',   desc: 'Deep extraction cleaning for fabrics and soft furnishings.', href: '/services/carpet-upholstery-cleaning' },
            ].map((s, i) => (
              <div key={s.num} className={`group pt-8 pb-6 px-6 border-b md:border-b-0 md:border-r border-on-surface/10 ${i === 4 ? 'border-0' : ''}`}>
                <p className="font-label-md text-[10px] tracking-[0.2em] text-on-surface/25 mb-5">{s.num}</p>
                <h3 className="font-body-md text-[14px] font-semibold text-on-surface mb-3 leading-snug">{s.title}</h3>
                <p className="font-body-md text-[12px] text-on-surface/50 leading-relaxed mb-5">{s.desc}</p>
                <Link href={s.href} className="flex items-center gap-1.5 font-label-md text-[10px] tracking-[0.16em] uppercase text-on-surface group-hover:gap-2.5 transition-all">
                  View <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. RECENT PROJECTS ══ */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-16 xl:px-20 py-20 md:py-28">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-1">
            <Eyebrow>Recent Projects</Eyebrow>
            <h2 className="text-[32px] md:text-[40px] leading-[1.1] text-on-surface" style={{ fontFamily: 'EB Garamond, serif' }}>
              Results that speak quietly.
            </h2>
          </div>
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: IMG.proj1, label: 'Luxury Home' },
              { src: IMG.proj2, label: 'Executive Office' },
              { src: IMG.proj3, label: 'Short Stay Apartment' },
              { src: IMG.proj4, label: 'End Of Tenancy' },
            ].map(p => (
              <div key={p.label} className="group">
                <div className="relative h-[220px] md:h-[260px] overflow-hidden bg-[#f4f2ef] mb-3">
                  <Image src={p.src} alt={p.label} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="font-label-md text-[10px] tracking-[0.14em] uppercase text-on-surface/50">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. HOW IT WORKS ══ */}
      <section className="bg-[#f8f7f5] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 xl:px-20">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <Eyebrow>How It Works</Eyebrow>
              <h2 className="text-[36px] md:text-[46px] leading-[1.1] text-on-surface" style={{ fontFamily: 'EB Garamond, serif' }}>
                Luxury cleaning without the friction.
              </h2>
            </div>
            <div>
              <div className="flex justify-end mb-8">
                <DarkBtn href="/request-a-quote">Request Quote</DarkBtn>
              </div>
              <div className="border-t border-on-surface/10">
                {[
                  { num: '01', icon: 'home_work',    title: 'Tell us about the property.',       desc: 'Share a few details about your space, schedule and requirements.' },
                  { num: '02', icon: 'receipt_long', title: 'Receive a clear fixed quote.',       desc: 'A transparent, itemised quote with no hidden fees.' },
                  { num: '03', icon: 'groups',       title: 'Our team arrives fully briefed.',    desc: 'Vetted cleaners who know exactly what is expected.' },
                  { num: '04', icon: 'hotel_class',  title: 'Enjoy a perfectly prepared space.',  desc: 'A home or office that feels pristine, calm and ready.' },
                ].map(step => (
                  <div key={step.num} className="flex gap-6 py-6 border-b border-on-surface/10">
                    <div className="shrink-0 flex flex-col items-center gap-2 pt-1">
                      <p className="font-label-md text-[10px] tracking-[0.18em] text-on-surface/30">{step.num}</p>
                      <span className="material-symbols-outlined text-[22px] text-on-surface/40">{step.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-body-md text-[15px] font-semibold text-on-surface mb-1">{step.title}</h3>
                      <p className="font-body-md text-[13px] text-on-surface/50 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 7. TRUST PILLARS ══ */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-16 xl:px-20 py-20 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 border border-on-surface/8">
          {[
            { icon: 'verified_user', title: 'Vetted Teams',        desc: 'Every cleaner is referenced, screened and trained to our exacting standards.' },
            { icon: 'shield',        title: 'Fully Insured',       desc: 'Complete peace of mind with full public liability insurance.' },
            { icon: 'receipt',       title: 'Fixed Quotes',        desc: 'No hidden fees or surprise charges. What we quote is what you pay.' },
            { icon: 'headset_mic',   title: 'Responsive Support',  desc: 'Average response time under two hours, every day of the week.' },
          ].map((p, i) => (
            <div key={p.title} className={`px-8 py-10 text-center ${i < 3 ? 'border-r border-on-surface/8' : ''}`}>
              <span className="material-symbols-outlined text-[32px] text-on-surface/30 mb-5 block">{p.icon}</span>
              <h3 className="font-body-md text-[15px] font-semibold text-on-surface mb-3">{p.title}</h3>
              <p className="font-body-md text-[12px] text-on-surface/50 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 8. TESTIMONIALS ══ */}
      <section className="bg-[#f8f7f5] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 xl:px-20">
          <Eyebrow>Client Words</Eyebrow>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { quote: 'The team did not simply clean the property. They restored the feeling of the house.',                          attr: 'Private Client',  loc: 'London' },
              { quote: 'Professional, punctual and exceptionally thorough. I have never had a service this consistent.',              attr: 'Property Manager', loc: 'Kensington' },
              { quote: 'Our office has never looked better. The team works quietly and efficiently around our schedule.',             attr: 'Business Owner',   loc: 'City of London' },
            ].map(t => (
              <div key={t.attr} className="bg-white border border-on-surface/6 px-8 py-10">
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[16px] text-on-surface" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  ))}
                </div>
                <p className="text-[17px] text-on-surface leading-relaxed mb-8" style={{ fontFamily: 'EB Garamond, serif' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-on-surface/8 pt-6">
                  <p className="font-label-md text-[10px] tracking-[0.18em] uppercase text-on-surface">{t.attr}</p>
                  <p className="font-label-md text-[10px] tracking-[0.12em] uppercase text-on-surface/40 mt-1">{t.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 9. SHOP + JOIN ══ */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-16 xl:px-20 py-20 md:py-28">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Shop */}
          <div className="md:col-span-2">
            <Eyebrow>Professional Products</Eyebrow>
            <div className="flex items-end justify-between mb-10">
              <h2 className="text-[32px] md:text-[40px] leading-[1.1] text-on-surface max-w-[360px]" style={{ fontFamily: 'EB Garamond, serif' }}>
                Professional products without the warehouse feeling.
              </h2>
              <Link href="/shop" className="hidden md:flex items-center gap-2 font-label-md text-[10px] tracking-[0.16em] uppercase text-on-surface hover:gap-3 transition-all whitespace-nowrap">
                Shop All <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {[
                { img: IMG.prod1, name: 'Microfibre Set',        cat: 'Cleaning Tools',    price: '£42.00',  href: '/shop' },
                { img: IMG.prod2, name: 'Steam Mop Pro',         cat: 'Machines',          price: '£189.00', href: '/shop' },
                { img: IMG.prod3, name: 'Citrus Pro Degreaser',  cat: 'Chemicals',         price: '£24.99',  href: '/shop' },
                { img: IMG.prod4, name: 'Cordless HEPA Vacuum',  cat: 'Machines',          price: '£345.00', href: '/shop' },
              ].map(p => (
                <Link key={p.name} href={p.href} className="group block">
                  <div className="relative h-[160px] bg-[#f4f2ef] overflow-hidden mb-3">
                    <Image src={p.img} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="font-label-md text-[9px] tracking-[0.14em] uppercase text-on-surface/40 mb-1">{p.cat}</p>
                  <p className="font-body-md text-[13px] text-on-surface font-medium mb-1 leading-snug">{p.name}</p>
                  <p className="font-label-md text-[12px] text-on-surface">{p.price}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Join franchise */}
          <div className="relative overflow-hidden min-h-[420px]">
            <Image src={IMG.franchise} alt="Join Scrubskwad" fill className="object-cover" />
            <div className="absolute inset-0 bg-on-surface/62" />
            <div className="relative z-10 flex flex-col justify-end h-full p-8 pb-10">
              <p className="font-label-md text-[9px] tracking-[0.22em] uppercase text-white/50 mb-4">Join Scrubskwad</p>
              <h3 className="text-[28px] leading-[1.15] text-white mb-4" style={{ fontFamily: 'EB Garamond, serif' }}>
                Build your cleaning business with us.
              </h3>
              <p className="font-body-md text-[13px] text-white/60 leading-relaxed mb-8">
                Join our franchise network and benefit from our brand, systems and support from day one.
              </p>
              <Link href="/franchise"
                className="inline-block self-start border border-white text-white font-label-md text-[10px] tracking-[0.18em] uppercase px-6 py-3 hover:bg-white hover:text-on-surface transition-all">
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 10. CLOSING CTA ══ */}
      <section className="bg-on-surface py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 xl:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="text-[30px] md:text-[42px] leading-[1.12] text-white max-w-[540px]" style={{ fontFamily: 'EB Garamond, serif' }}>
            Let Scrubskwad make the property feel finished.
          </h2>
          <div className="flex flex-col items-start md:items-end gap-5 shrink-0">
            <p className="font-body-md text-[13px] text-white/55 text-left md:text-right max-w-[280px]">
              Request a quote and receive a response within two hours.
            </p>
            <Link href="/request-a-quote"
              className="inline-block border border-white text-white font-label-md text-[11px] tracking-[0.18em] uppercase px-8 py-3.5 hover:bg-white hover:text-on-surface transition-all">
              Book Your Clean
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
