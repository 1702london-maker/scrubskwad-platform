'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-white border-t border-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/"><span className="text-2xl font-serif font-semibold tracking-tight mb-4 block">Scrubskwad</span></Link>
            <p className="text-xs text-gray-400 mb-6 font-semibold uppercase tracking-widest">Luxury Property Care</p>
            <div className="flex space-x-4">
              <a className="text-gray-900 hover:opacity-70" href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.365-.333 2.632-1.308 3.607-.975.975-2.242 1.246-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.365-.062-2.632-.333-3.607-1.308-.975-.975-1.246-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.365.332-2.632 1.308-3.607.975-.975 2.242-1.246 3.607-1.308 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a className="text-gray-900 hover:opacity-70" href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a className="text-gray-900 hover:opacity-70" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-6">Services</h5>
            <ul className="space-y-4">
              <li><Link className="text-xs text-gray-500 hover:text-gray-900" href="/services/regular-home-cleaning">Regular Home Cleaning</Link></li>
              <li><Link className="text-xs text-gray-500 hover:text-gray-900" href="/services/deep-cleaning">Deep Cleaning</Link></li>
              <li><Link className="text-xs text-gray-500 hover:text-gray-900" href="/services/end-of-tenancy-cleaning">End Of Tenancy</Link></li>
              <li><Link className="text-xs text-gray-500 hover:text-gray-900" href="/services/office-commercial-cleaning">Office &amp; Commercial</Link></li>
              <li><Link className="text-xs text-gray-500 hover:text-gray-900" href="/services/carpet-upholstery-cleaning">Carpet &amp; Upholstery</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-6">Company</h5>
            <ul className="space-y-4">
              <li><Link className="text-xs text-gray-500 hover:text-gray-900" href="/about-us">About</Link></li>
              <li><Link className="text-xs text-gray-500 hover:text-gray-900" href="/how-it-works">How It Works</Link></li>
              <li><Link className="text-xs text-gray-500 hover:text-gray-900" href="/franchise">Franchise</Link></li>
              <li><Link className="text-xs text-gray-500 hover:text-gray-900" href="/join-our-team">Careers</Link></li>
              <li><Link className="text-xs text-gray-500 hover:text-gray-900" href="/faqs">FAQs</Link></li>
            </ul>
          </div>

          {/* Shop */}
          <div className="md:col-span-1">
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-6">Shop</h5>
            <ul className="space-y-4">
              <li><Link className="text-xs text-gray-500 hover:text-gray-900" href="/shop">Products</Link></li>
              <li><Link className="text-xs text-gray-500 hover:text-gray-900" href="/shop/cleaning-tools-equipment">Equipment</Link></li>
              <li><Link className="text-xs text-gray-500 hover:text-gray-900" href="/shop/cleaning-chemicals-solutions">Cleaning Solutions</Link></li>
              <li><Link className="text-xs text-gray-500 hover:text-gray-900" href="/shop/cleaning-machines">Accessories</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-6">Newsletter</h5>
            <p className="text-xs text-gray-500 mb-6">Cleaning insights, seasonal tips and product updates.</p>
            <form className="flex border-b border-gray-200" onSubmit={e => { e.preventDefault(); setEmail(''); }}>
              <input
                className="w-full bg-transparent border-none text-xs focus:ring-0 py-3 outline-none"
                placeholder="Email address"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button className="bg-[#607d8b] text-white px-6 py-3 text-[10px] uppercase tracking-widest font-bold" type="submit">
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest font-medium">
          <p>© 2026 Scrubskwad. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link className="hover:text-gray-900" href="/terms-and-conditions">Terms</Link>
            <Link className="hover:text-gray-900" href="/privacy-policy">Privacy</Link>
            <Link className="hover:text-gray-900" href="/cookies">Cookies</Link>
            <Link className="hover:text-gray-900" href="/request-a-quote">Request Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
