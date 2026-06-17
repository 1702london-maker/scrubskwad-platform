import Link from 'next/link';

export const metadata = { title: 'Franchise | Scrubskwad' };

export default function Franchise() {
  return (
    <>
      <section className="px-6 pb-14 pt-32 md:px-20 md:pt-36">
        <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <h1 className="font-display-lg text-[36px] leading-tight text-on-surface md:text-[50px]">
            Build a Scrubskwad territory with a brand designed for premium service.
          </h1>
          <p className="max-w-[620px] font-body-md text-[15px] leading-7 text-on-surface-variant">
            We are expanding carefully, with operators who understand service, consistency, and the value of recurring client relationships.
          </p>
        </div>
      </section>

      <section className="bg-surface-container-low px-6 py-16 md:px-20 md:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=85"
            alt="Premium business planning meeting"
            className="h-[330px] w-full object-cover md:h-[480px]"
          />
          <div>
            <h2 className="font-headline-md text-[32px] leading-tight text-on-surface md:text-[40px]">
              A franchise model for operators, not spectators.
            </h2>
            <p className="mt-6 font-body-md text-[15px] leading-7 text-secondary">
              Franchise partners receive territory rights, brand systems, supplier relationships, launch guidance,
              service standards, and ongoing performance support.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block bg-primary px-8 py-4 font-label-md text-[11px] uppercase tracking-[0.18em] text-on-primary transition hover:bg-primary/90"
            >
              Request Prospectus
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-20 md:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-4">
          {[
            ['Territory', 'Protected geographic area with launch planning.'],
            ['Training', 'Operational, commercial, and client care induction.'],
            ['Suppliers', 'Approved products, equipment, and operating tools.'],
            ['Support', 'Monthly performance reviews and brand guidance.'],
          ].map(([title, text]) => (
            <div key={title} className="border-y border-tertiary-fixed py-7">
              <h2 className="font-label-md text-[12px] uppercase tracking-[0.22em] text-primary">{title}</h2>
              <p className="mt-4 font-body-md text-[14px] leading-6 text-secondary">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 pb-20 md:px-20">
        <div className="mx-auto max-w-[1400px] border-t border-tertiary-fixed pt-12">
          <h2 className="font-headline-md text-[30px] text-on-surface md:text-[38px]">Investment overview</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ['Franchise fee', '£25,000', 'One-time licence fee for brand rights and territory setup.'],
              ['Total investment', '£45,000-£70,000', 'Equipment, launch marketing, initial team setup, and working capital.'],
              ['Royalty', '8% of revenue', 'Monthly support, brand systems, and national marketing contribution.'],
            ].map(([label, value, text]) => (
              <div key={label} className="bg-surface-container-low p-7">
                <p className="font-label-md text-[11px] uppercase tracking-[0.2em] text-primary">{label}</p>
                <p className="mt-4 font-headline-md text-[28px] text-on-surface">{value}</p>
                <p className="mt-4 font-body-md text-[14px] leading-6 text-secondary">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
