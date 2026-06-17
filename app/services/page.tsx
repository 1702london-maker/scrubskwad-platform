import Link from 'next/link';

export const metadata = { title: 'Services | Scrubskwad' };

const services = [
  ['Regular Home Cleaning', '/services/regular-home-cleaning', 'Scheduled care for homes that need a calm, consistent finish.'],
  ['Deep Cleaning', '/services/deep-cleaning', 'A detailed reset for kitchens, bathrooms, edges, glass, and high-touch surfaces.'],
  ['End of Tenancy', '/services/end-of-tenancy-cleaning', 'Inventory-ready cleaning for move-outs, landlords, and handovers.'],
  ['Office & Commercial', '/services/office-commercial-cleaning', 'Quiet, reliable maintenance for offices, studios, clinics, and retail spaces.'],
  ['Carpet & Upholstery', '/services/carpet-upholstery-cleaning', 'Specialist fabric care for carpets, rugs, sofas, stairs, and delicate materials.'],
];

export default function Services() {
  return (
    <>
      <section className="px-6 pb-16 pt-32 md:px-20 md:pt-36">
        <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <h1 className="font-display-lg text-[36px] leading-tight text-on-surface md:text-[50px]">
              Cleaning services with a quieter standard of luxury.
            </h1>
          </div>
          <p className="max-w-[600px] font-body-md text-[15px] leading-7 text-on-surface-variant">
            Each service is prepared around the property, the surfaces, and the rhythm of the people using the space.
            The result is not a generic clean. It is a reset that feels considered.
          </p>
        </div>
      </section>

      <section className="bg-surface-container-low px-6 py-16 md:px-20 md:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85"
            alt="Clean premium interior"
            className="h-[320px] w-full object-cover md:h-[500px]"
          />
          <div className="border-y border-tertiary-fixed">
            {services.map(([title, href, text], index) => (
              <Link
                key={href}
                href={href}
                className="group grid gap-5 border-b border-tertiary-fixed py-7 last:border-b-0 md:grid-cols-[64px_1fr_58px] md:items-center"
              >
                <span className="font-headline-md text-[26px] text-primary/45">{String(index + 1).padStart(2, '0')}</span>
                <span>
                  <span className="block font-headline-md text-[25px] text-on-surface group-hover:text-primary">
                    {title}
                  </span>
                  <span className="mt-2 block font-body-md text-[14px] leading-6 text-secondary">{text}</span>
                </span>
                <span className="font-label-md text-[11px] uppercase tracking-[0.18em] text-primary">View</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-18 md:px-20 md:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-8 border-y border-tertiary-fixed py-10 md:grid-cols-3">
          {[
            ['Prepared', 'Room notes, access details, and priorities are confirmed before arrival.'],
            ['Equipped', 'Teams arrive with the right products, tools, and protective care for each surface.'],
            ['Checked', 'The finish is reviewed before handover, with 24-hour care if anything needs attention.'],
          ].map(([title, text]) => (
            <div key={title}>
              <h2 className="font-label-md text-[12px] uppercase tracking-[0.22em] text-primary">{title}</h2>
              <p className="mt-3 max-w-[340px] font-body-md text-[14px] leading-6 text-secondary">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
