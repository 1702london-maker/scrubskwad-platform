'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-surface-container-low border-t border-tertiary-fixed w-full">
      <div className="px-6 md:px-20 py-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image src="/logo.jpg" alt="Scrubskwad" width={48} height={48} className="object-contain" />
              <span className="font-headline-md text-headline-md text-primary font-bold">Scrubskwad</span>
            </Link>
            <p className="font-body-md text-body-md text-secondary max-w-xs mb-6">
              Luxury domestic and commercial cleaning services across the United Kingdom. Meticulous, discreet, and professional.
            </p>
            <div className="space-y-2 mb-6">
              <p className="font-body-md text-body-md text-secondary flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">location_on</span>
                The Atrium, Belgravia Square, Westminster, London SW1X 7PJ
              </p>
              <p className="font-body-md text-body-md text-secondary flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">call</span>
                +44 (0) 20 7946 0123
              </p>
              <p className="font-body-md text-body-md text-secondary flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">mail</span>
                concierge@scrubskwad.co.uk
              </p>
            </div>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-tertiary-fixed flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-all" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-tertiary-fixed flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-all" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-tertiary-fixed flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-all" aria-label="Twitter/X">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h5 className="font-label-md text-label-md text-primary tracking-widest uppercase mb-6">Services</h5>
            <ul className="space-y-3">
              {[
                { label: 'Regular Home Cleaning', href: '/services/regular-home-cleaning' },
                { label: 'Deep Cleaning', href: '/services/deep-cleaning' },
                { label: 'End of Tenancy Cleaning', href: '/services/end-of-tenancy-cleaning' },
                { label: 'Office & Commercial Cleaning', href: '/services/office-commercial-cleaning' },
                { label: 'Carpet & Upholstery Cleaning', href: '/services/carpet-upholstery-cleaning' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body-md text-body-md text-secondary hover:text-primary hover:translate-x-1 transition-all inline-block">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Shop */}
          <div>
            <h5 className="font-label-md text-label-md text-primary tracking-widest uppercase mb-6">Shop</h5>
            <ul className="space-y-3">
              {[
                { label: 'Cleaning Chemicals & Solutions', href: '/shop/cleaning-chemicals-solutions' },
                { label: 'Cleaning Tools & Equipment', href: '/shop/cleaning-tools-equipment' },
                { label: 'Cleaning Machines', href: '/shop/cleaning-machines' },
                { label: 'All Products', href: '/shop' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body-md text-body-md text-secondary hover:text-primary hover:translate-x-1 transition-all inline-block">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company & Support */}
          <div>
            <h5 className="font-label-md text-label-md text-primary tracking-widest uppercase mb-6">Company & Support</h5>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about-us' },
                { label: 'How It Works', href: '/how-it-works' },
                { label: 'Franchise', href: '/franchise' },
                { label: 'Join Our Team', href: '/join-our-team' },
                { label: 'FAQs', href: '/faqs' },
                { label: 'Request a Quote', href: '/request-a-quote' },
                { label: 'Terms & Conditions', href: '/terms-and-conditions' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body-md text-body-md text-secondary hover:text-primary hover:translate-x-1 transition-all inline-block">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div>
            <h5 className="font-label-md text-label-md text-primary tracking-widest uppercase mb-6">Newsletter</h5>
            <p className="font-body-md text-body-md text-secondary mb-6">
              Subscribe for estate maintenance protocols and exclusive first access to new releases.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="YOUR EMAIL ADDRESS"
                required
                className="w-full bg-white border border-tertiary-fixed px-4 py-3 font-label-md text-label-md outline-none focus:border-primary transition-colors placeholder:text-surface-dim"
              />
              <button
                type="submit"
                className="w-full bg-primary text-on-primary font-label-md text-label-md px-6 py-3 uppercase tracking-widest hover:bg-primary/90 transition-all active:scale-[0.98]"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-tertiary-fixed flex flex-col md:flex-row justify-between items-center text-secondary gap-4">
          <p className="font-label-md text-label-md">© {new Date().getFullYear()} Scrubskwad Luxury Cleaning. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/terms-and-conditions" className="font-label-md text-label-md hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link href="/privacy-policy" className="font-label-md text-label-md hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
          <p className="font-label-md text-label-md italic">Designing cleanliness, delivering peace.</p>
        </div>
      </div>
    </footer>
  );
}
