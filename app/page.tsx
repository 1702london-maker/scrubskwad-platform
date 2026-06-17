import Link from 'next/link';

const heroImage =
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85';

const detailImage =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85';

const serviceImages = [
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85',
];

const services = [
  {
    title: 'Regular Home Cleaning',
    href: '/services/regular-home-cleaning',
    line: 'Weekly, fortnightly, or monthly visits for homes that need to stay composed without being over-managed.',
  },
  {
    title: 'Deep Cleaning',
    href: '/services/deep-cleaning',
    line: 'A precise reset for lived-in kitchens, bathrooms, hidden edges, skirting, glass, and high-touch surfaces.',
  },
  {
    title: 'End of Tenancy',
    href: '/services/end-of-tenancy-cleaning',
    line: 'Inventory-ready cleaning for move-outs, handovers, landlords, and returning a property to its best state.',
  },
  {
    title: 'Office & Commercial',
    href: '/services/office-commercial-cleaning',
    line: 'Quiet, reliable care for offices, studios, clinics, and retail spaces before staff or clients arrive.',
  },
  {
    title: 'Carpet & Upholstery',
    href: '/services/carpet-upholstery-cleaning',
    line: 'Specialist fabric care for rugs, sofas, carpets, stairs, and delicate materials that need expert handling.',
  },
];

const products = [
  ['Citrus Pro Degreaser', 'Kitchen and utility reset', '£24.99'],
  ['Microfibre Set', 'Professional finishing cloths', '£42.00'],
  ['Steam Mop Pro', 'Hard floor maintenance', '£189.00'],
  ['Cordless HEPA Vacuum', 'Fine dust and daily debris', '£345.00'],
];

const promises = [
  ['Vetted teams', 'Every cleaner is screened, referenced, and briefed before entering a client home.'],
  ['Prepared visits', 'We arrive with products, equipment, room notes, and the right time window for the work.'],
  ['Clear pricing', 'Quotes are itemised before arrival, with no hidden extras after the appointment.'],
  ['24-hour care', 'If something needs attention, we return within 24 hours and put it right.'],
];

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[94vh] overflow-hidden bg-background pt-28 md:pt-32">
        <img
          src={heroImage}
          alt="Elegant clean living room"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(249,249,249,0.96)_0%,rgba(249,249,249,0.86)_38%,rgba(249,249,249,0.30)_72%,rgba(249,249,249,0.12)_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent" />

        <div className="relative mx-auto grid min-h-[calc(94vh-8rem)] max-w-[1400px] grid-cols-1 content-end px-6 pb-12 md:grid-cols-[minmax(0,760px)_1fr] md:px-20 md:pb-20">
          <div>
            <p className="mb-7 max-w-max border-b border-primary/30 pb-3 font-label-md text-[12px] uppercase tracking-[0.28em] text-primary">
              London cleaning concierge
            </p>
            <h1 className="max-w-[760px] font-display-lg text-[58px] leading-[0.96] text-on-surface md:text-[94px]">
              A home that feels looked after before you even notice the clean.
            </h1>
            <p className="mt-8 max-w-[560px] font-body-lg text-[18px] leading-8 text-on-surface-variant">
              Scrubskwad designs discreet domestic and commercial cleaning visits for clients who expect calm spaces, exacting standards, and a team that understands the details.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/request-a-quote"
                className="bg-primary px-9 py-4 text-center font-label-md text-[12px] uppercase tracking-[0.22em] text-on-primary transition hover:bg-primary/90"
              >
                Request a Quote
              </Link>
              <Link
                href="#services"
                className="border border-on-surface/20 bg-white/45 px-9 py-4 text-center font-label-md text-[12px] uppercase tracking-[0.22em] text-on-surface backdrop-blur transition hover:border-primary/50 hover:text-primary"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <aside className="mt-12 border-l border-primary/25 pl-6 md:mt-auto md:max-w-[280px]">
            <p className="font-headline-md text-[32px] leading-none text-primary">2 hr</p>
            <p className="mt-2 font-label-md text-[11px] uppercase tracking-[0.22em] text-secondary">
              quote response
            </p>
            <p className="mt-5 font-body-md text-[15px] leading-7 text-on-surface-variant">
              Fixed proposals, careful arrival windows, and teams briefed before they reach your door.
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-background px-6 py-14 md:px-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 border-y border-tertiary-fixed md:grid-cols-4">
          {promises.map(([title, text]) => (
            <div key={title} className="border-tertiary-fixed py-8 pr-6 odd:border-r md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
              <h2 className="font-label-md text-[12px] uppercase tracking-[0.2em] text-primary">{title}</h2>
              <p className="mt-3 max-w-[260px] font-body-md text-[14px] leading-6 text-secondary">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="bg-surface-container-low px-6 py-24 md:px-20 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="font-label-md text-[12px] uppercase tracking-[0.28em] text-primary">The work</p>
              <h2 className="mt-5 max-w-[560px] font-display-lg text-[42px] leading-tight text-on-surface md:text-[66px]">
                Cleaning services shaped around the rhythm of the property.
              </h2>
            </div>
            <p className="max-w-[620px] font-body-lg text-[18px] leading-8 text-on-surface-variant">
              No generic checklist. Each visit is prepared around access, surfaces, room priorities, pets, occupancy, and the finish you want to walk into.
            </p>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {serviceImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`Scrubskwad service detail ${index + 1}`}
                  className="h-[210px] w-full object-cover sm:h-[280px] lg:h-[170px]"
                />
              ))}
            </div>
            <div className="border-y border-tertiary-fixed">
              {services.map((service, index) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group grid gap-6 border-b border-tertiary-fixed py-8 last:border-b-0 md:grid-cols-[72px_1fr_48px] md:items-center"
                >
                  <span className="font-headline-md text-[32px] text-primary/35">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <span className="block font-headline-md text-[28px] leading-tight text-on-surface transition group-hover:text-primary">
                      {service.title}
                    </span>
                    <span className="mt-3 block max-w-[660px] font-body-md text-[15px] leading-7 text-secondary">
                      {service.line}
                    </span>
                  </span>
                  <span className="material-symbols-outlined justify-self-start text-primary transition group-hover:translate-x-2 md:justify-self-end">
                    arrow_forward
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:px-20 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[1fr_0.86fr] lg:items-center">
          <div className="relative">
            <img src={detailImage} alt="Pristine kitchen detail" className="h-[620px] w-full object-cover" />
            <div className="absolute bottom-8 left-8 max-w-[320px] bg-[#dcefed]/95 p-7 text-on-surface shadow-[0_28px_70px_rgba(26,28,28,0.12)]">
              <p className="font-label-md text-[11px] uppercase tracking-[0.24em] text-primary">New accent</p>
              <p className="mt-3 font-body-md text-[15px] leading-7">
                A clean aqua note for freshness, used lightly against the existing Scrubskwad palette.
              </p>
            </div>
          </div>
          <div>
            <p className="font-label-md text-[12px] uppercase tracking-[0.28em] text-primary">How it feels</p>
            <h2 className="mt-5 font-display-lg text-[44px] leading-tight text-on-surface md:text-[68px]">
              Quiet luxury is the absence of friction.
            </h2>
            <div className="mt-10 space-y-8 border-l border-tertiary-fixed pl-8">
              {[
                ['01', 'Tell us the property, rooms, and standard you expect.'],
                ['02', 'We quote clearly and prepare the visit before the team arrives.'],
                ['03', 'Your home is cleaned, checked, reset, and left ready to enjoy.'],
              ].map(([number, text]) => (
                <div key={number} className="grid grid-cols-[56px_1fr] gap-4">
                  <span className="font-headline-md text-[28px] text-primary/45">{number}</span>
                  <p className="font-body-lg text-[18px] leading-8 text-on-surface-variant">{text}</p>
                </div>
              ))}
            </div>
            <Link
              href="/how-it-works"
              className="mt-10 inline-flex items-center gap-3 font-label-md text-[12px] uppercase tracking-[0.22em] text-primary"
            >
              See the process <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface-container px-6 py-24 md:px-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="font-label-md text-[12px] uppercase tracking-[0.28em] text-primary">The store</p>
              <h2 className="mt-5 max-w-[650px] font-display-lg text-[42px] leading-tight text-on-surface md:text-[62px]">
                Professional products without the warehouse feeling.
              </h2>
            </div>
            <Link href="/shop" className="inline-flex items-center gap-3 font-label-md text-[12px] uppercase tracking-[0.22em] text-primary">
              Shop all products <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="mt-14 grid border-y border-tertiary-fixed md:grid-cols-4">
            {products.map(([name, note, price]) => (
              <Link
                key={name}
                href="/shop"
                className="group border-b border-tertiary-fixed py-8 md:border-b-0 md:border-r md:px-8 md:last:border-r-0 md:first:pl-0"
              >
                <p className="font-headline-md text-[26px] leading-tight text-on-surface group-hover:text-primary">{name}</p>
                <p className="mt-4 font-body-md text-[14px] leading-6 text-secondary">{note}</p>
                <p className="mt-8 font-label-md text-[13px] text-primary">{price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:px-20 md:py-32">
        <div className="mx-auto max-w-[1000px] text-center">
          <p className="font-label-md text-[12px] uppercase tracking-[0.28em] text-primary">Client words</p>
          <blockquote className="mt-9 font-display-lg text-[38px] leading-tight text-on-surface md:text-[64px]">
            "The team did not just clean the house. They restored the feeling of the house."
          </blockquote>
          <p className="mt-8 font-label-md text-[12px] uppercase tracking-[0.22em] text-secondary">
            Private homeowner, London
          </p>
        </div>
      </section>

      <section className="bg-primary px-6 py-24 text-on-primary md:px-20 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-label-md text-[12px] uppercase tracking-[0.28em] text-on-primary/75">Begin with a fixed quote</p>
            <h2 className="mt-5 max-w-[820px] font-display-lg text-[44px] leading-tight md:text-[72px]">
              Let Scrubskwad make the property feel finished.
            </h2>
          </div>
          <Link
            href="/request-a-quote"
            className="bg-white px-10 py-5 text-center font-label-md text-[12px] uppercase tracking-[0.22em] text-primary transition hover:bg-[#dcefed]"
          >
            Book Your Clean
          </Link>
        </div>
      </section>
    </>
  );
}
