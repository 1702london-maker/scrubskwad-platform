'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const footerGroups = [
  {
    title: 'Services',
    links: [
      ['Regular Home Cleaning', '/services/regular-home-cleaning'],
      ['Deep Cleaning', '/services/deep-cleaning'],
      ['End of Tenancy', '/services/end-of-tenancy-cleaning'],
      ['Office & Commercial', '/services/office-commercial-cleaning'],
      ['Carpet & Upholstery', '/services/carpet-upholstery-cleaning'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About Us', '/about-us'],
      ['How It Works', '/how-it-works'],
      ['Franchise', '/franchise'],
      ['Join Our Team', '/join-our-team'],
      ['FAQs', '/faqs'],
    ],
  },
  {
    title: 'Shop',
    links: [
      ['All Products', '/shop'],
      ['Cleaning Chemicals', '/shop/cleaning-chemicals-solutions'],
      ['Tools & Equipment', '/shop/cleaning-tools-equipment'],
      ['Cleaning Machines', '/shop/cleaning-machines'],
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3500);
  };

  return (
    <footer className="border-t border-tertiary-fixed bg-surface-container-low">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-20 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.4fr_0.95fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src="/logo.jpg" alt="Scrubskwad" width={54} height={54} className="object-contain" />
              <span className="font-headline-md text-[28px] leading-none text-primary">Scrubskwad</span>
            </Link>
            <p className="mt-6 max-w-[340px] font-body-md text-[15px] leading-7 text-secondary">
              Premium domestic and commercial cleaning across the United Kingdom, prepared with care and delivered with discretion.
            </p>
            <div className="mt-8 space-y-3 font-body-md text-[14px] leading-6 text-secondary">
              <p>London, United Kingdom</p>
              <p>+44 (0) 20 XXXX XXXX</p>
              <p>hello@scrubskwad.co.uk</p>
            </div>
          </div>

          <nav className="grid gap-9 sm:grid-cols-3">
            {footerGroups.map(group => (
              <div key={group.title}>
                <h2 className="font-label-md text-[11px] uppercase tracking-[0.22em] text-primary">
                  {group.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {group.links.map(([label, href]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="font-body-md text-[14px] leading-5 text-secondary transition hover:text-primary"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div>
            <h2 className="font-label-md text-[11px] uppercase tracking-[0.22em] text-primary">
              Private updates
            </h2>
            <p className="mt-5 font-body-md text-[14px] leading-7 text-secondary">
              Cleaning notes, seasonal care, and product releases from Scrubskwad.
            </p>
            <form onSubmit={handleSubscribe} className="mt-6 flex border border-tertiary-fixed bg-white">
              <input
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="Email address"
                required
                className="min-w-0 flex-1 bg-transparent px-4 py-3 font-body-md text-[14px] outline-none placeholder:text-on-surface-variant/45"
              />
              <button
                type="submit"
                className="bg-primary px-5 font-label-md text-[11px] uppercase tracking-[0.18em] text-on-primary transition hover:bg-primary/90"
              >
                {subscribed ? 'Done' : 'Join'}
              </button>
            </form>
            <div className="mt-7 flex gap-3">
              {['Instagram', 'Facebook', 'X'].map(label => (
                <a
                  key={label}
                  href={label === 'X' ? 'https://twitter.com' : `https://${label.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-tertiary-fixed px-4 py-2 font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary transition hover:border-primary hover:text-primary"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-tertiary-fixed pt-7 font-body-md text-[13px] text-secondary md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Scrubskwad. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms-and-conditions" className="transition hover:text-primary">
              Terms
            </Link>
            <Link href="/privacy-policy" className="transition hover:text-primary">
              Privacy
            </Link>
            <Link href="/request-a-quote" className="text-primary transition hover:text-on-surface">
              Request a quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
