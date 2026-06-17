import Link from 'next/link';

export const metadata = { title: 'Shop | Scrubskwad' };

const products = [
  ['Citrus Pro Degreaser', 'Chemicals', '£24.99', 'Best Seller'],
  ['Marble & Stone Polish', 'Chemicals', '£34.99', ''],
  ['Professional Microfibre Set', 'Tools', '£42.00', 'New'],
  ['Telescopic Window Wiper', 'Tools', '£58.00', ''],
  ['Steam Mop Pro', 'Machines', '£189.00', 'Best Seller'],
  ['Cordless HEPA Vacuum', 'Machines', '£345.00', ''],
  ['Anti-Bacterial Bathroom Spray', 'Chemicals', '£18.50', ''],
  ['Grout Cleaning Brush Kit', 'Tools', '£29.99', ''],
];

const productImages = [
  'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=700&q=85',
];

export default function Shop() {
  return (
    <>
      <section className="px-6 pb-12 pt-32 md:px-20 md:pt-36">
        <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <h1 className="font-display-lg text-[36px] leading-tight text-on-surface md:text-[50px]">
            Professional cleaning products, edited for the home.
          </h1>
          <p className="max-w-[580px] font-body-md text-[15px] leading-7 text-on-surface-variant">
            A concise selection of chemicals, tools, and machines chosen for a refined maintenance routine.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-20">
        <div className="mx-auto flex max-w-[1400px] flex-wrap gap-2 border-y border-tertiary-fixed py-5">
          {[
            ['All Products', '/shop'],
            ['Chemicals', '/shop/cleaning-chemicals-solutions'],
            ['Tools', '/shop/cleaning-tools-equipment'],
            ['Machines', '/shop/cleaning-machines'],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="border border-tertiary-fixed bg-white px-5 py-2.5 font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary transition hover:border-primary hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-14 md:px-20 md:py-18">
        <div className="mx-auto grid max-w-[1400px] gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(([name, category, price, badge], index) => (
            <article key={name} className="group border-b border-tertiary-fixed pb-6">
              <div className="relative overflow-hidden bg-surface-container-low">
                <img
                  src={productImages[index % productImages.length]}
                  alt={name}
                  className="h-[180px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {badge && (
                  <span className="absolute left-3 top-3 bg-primary px-3 py-1 font-label-md text-[10px] uppercase tracking-[0.16em] text-on-primary">
                    {badge}
                  </span>
                )}
              </div>
              <div className="pt-5">
                <p className="font-label-md text-[10px] uppercase tracking-[0.2em] text-secondary">{category}</p>
                <h2 className="mt-2 min-h-[52px] font-headline-md text-[22px] leading-tight text-on-surface">{name}</h2>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <p className="font-label-md text-[13px] text-primary">{price}</p>
                  <button className="border border-primary/30 px-4 py-2 font-label-md text-[10px] uppercase tracking-[0.16em] text-primary transition hover:bg-primary hover:text-on-primary">
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
