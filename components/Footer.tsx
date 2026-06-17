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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); setTimeout(() => setSubscribed(false), 4000); }
  };

  return (
    <footer className="bg-on-surface w-full">
      <div className="px-6 md:px-16 xl:px-20 pt-20 pb-10 max-w-[1400px] mx-auto">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 xl:gap-16">

          {/* Brand */}
          <div className="md:col-span-3">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/logo.jpg" alt="Scrubskwad" width={40} height={40} className="object-contain brightness-0 invert" />
              <span className="text-[18px] font-semibold text-white tracking-tight" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Scrubskwad</span>
            </Link>
            <p className="font-label-md text-[11px] tracking-[0.18em] uppercase text-white/40 mb-8">Luxury Property Care</p>
            <div className="flex gap-3">
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h5 className="font-label-md text-[10px] tracking-[0.2em] uppercase text-white/40 mb-6">Services</h5>
            <ul className="space-y-3">
              {[
                { label: 'Regular Home Cleaning',        href: '/services/regular-home-cleaning' },
                { label: 'Deep Cleaning',                href: '/services/deep-cleaning' },
                { label: 'End of Tenancy',               href: '/services/end-of-tenancy-cleaning' },
                { label: 'Office & Commercial',          href: '/services/office-commercial-cleaning' },
                { label: 'Carpet & Upholstery',         href: '/services/carpet-upholstery-cleaning' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body-md text-[13px] text-white/60 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h5 className="font-label-md text-[10px] tracking-[0.2em] uppercase text-white/40 mb-6">Company</h5>
            <ul className="space-y-3">
              {[
                { label: 'About',           href: '/about-us' },
                { label: 'How It Works',    href: '/how-it-works' },
                { label: 'Franchise',       href: '/franchise' },
                { label: 'Careers',         href: '/join-our-team' },
                { label: 'FAQs',            href: '/faqs' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body-md text-[13px] text-white/60 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop */}
          <div className="md:col-span-2">
            <h5 className="font-label-md text-[10px] tracking-[0.2em] uppercase text-white/40 mb-6">Shop</h5>
            <ul className="space-y-3">
              {[
                { label: 'Products',              href: '/shop' },
                { label: 'Equipment',             href: '/shop/cleaning-tools-equipment' },
                { label: 'Cleaning Solutions',    href: '/shop/cleaning-chemicals-solutions' },
                { label: 'Accessories',           href: '/shop/cleaning-machines' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body-md text-[13px] text-white/60 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h5 className="font-label-md text-[10px] tracking-[0.2em] uppercase text-white/40 mb-6">Newsletter</h5>
            <p className="font-body-md text-[13px] text-white/50 mb-6 leading-relaxed">
              Cleaning insights, seasonal tips and product updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="mt-6 flex border border-tertiary-fixed bg-white">
              <input
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="Email address"
                required
                className="w-full bg-white/5 border border-white/15 px-4 py-3 font-body-md text-[13px] text-white outline-none focus:border-white/40 transition-colors placeholder:text-white/25"
              />
              <button type="submit"
                className="w-full border border-white/30 text-white font-label-md text-[11px] tracking-[0.18em] uppercase py-3 hover:bg-white hover:text-on-surface transition-all">
                {subscribed ? '✓ Subscribed' : 'Join'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label-md text-[11px] text-white/30">© {new Date().getFullYear()} Scrubskwad. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms-and-conditions" className="font-label-md text-[11px] text-white/30 hover:text-white/60 transition-colors">Terms</Link>
            <Link href="/privacy-policy"       className="font-label-md text-[11px] text-white/30 hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="/cookies"              className="font-label-md text-[11px] text-white/30 hover:text-white/60 transition-colors">Cookies</Link>
            <Link href="/request-a-quote"      className="font-label-md text-[11px] text-white/30 hover:text-white/60 transition-colors">Request Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
