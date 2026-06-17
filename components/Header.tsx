'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/lib/cart-context';
import { useState } from 'react';

const serviceLinks = [
  { label: 'Regular Home Cleaning',        href: '/services/regular-home-cleaning' },
  { label: 'Deep Cleaning',                href: '/services/deep-cleaning' },
  { label: 'End of Tenancy Cleaning',      href: '/services/end-of-tenancy-cleaning' },
  { label: 'Office & Commercial Cleaning', href: '/services/office-commercial-cleaning' },
  { label: 'Carpet & Upholstery Cleaning', href: '/services/carpet-upholstery-cleaning' },
];

const shopLinks = [
  { label: 'Cleaning Chemicals & Solutions', href: '/shop/cleaning-chemicals-solutions' },
  { label: 'Cleaning Tools & Equipment',     href: '/shop/cleaning-tools-equipment' },
  { label: 'Cleaning Machines',              href: '/shop/cleaning-machines' },
  { label: 'All Products',                   href: '/shop' },
];

export default function Header() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileShop, setMobileShop] = useState(false);

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <span className="text-2xl font-serif font-semibold tracking-tight">Scrubskwad</span>
          </Link>
        </div>

        {/* Main Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}>Home</Link>

          {/* Services flyout */}
          <div className="nav-item relative">
            <button className="nav-link text-gray-500 hover:text-gray-900 flex items-center">
              Services{' '}
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
            <div className="flyout-menu absolute top-full left-0 mt-3 w-64 bg-white border border-gray-100 shadow-lg z-50">
              {serviceLinks.map(link => (
                <Link key={link.href} href={link.href}
                  className="block px-5 py-3 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Shop flyout */}
          <div className="nav-item relative">
            <button className="nav-link text-gray-500 hover:text-gray-900 flex items-center">
              Shop{' '}
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
            <div className="flyout-menu absolute top-full left-0 mt-3 w-64 bg-white border border-gray-100 shadow-lg z-50">
              {shopLinks.map(link => (
                <Link key={link.href} href={link.href}
                  className="block px-5 py-3 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/franchise" className={`nav-link ${pathname === '/franchise' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}>Franchise</Link>
          <Link href="/about-us"  className={`nav-link ${isActive('/about-us') ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}>About</Link>
          <Link href="/contact"   className={`nav-link ${pathname === '/contact' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}>Contact</Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-6">
          <Link href="/account" className="nav-link text-gray-500 hover:text-gray-900 hidden md:flex items-center">
            Account{' '}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </Link>

          <Link href="/cart" className="hidden md:flex items-center relative" aria-label="Cart">
            <svg className="w-5 h-5 text-gray-500 hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-scrub-dark text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <Link href="/request-a-quote" className="hidden md:block border border-gray-900 px-6 py-2.5 text-[10px] uppercase tracking-widest font-semibold hover:bg-gray-900 hover:text-white transition-all">
            Book Now
          </Link>

          {/* Mobile hamburger */}
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                : <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-4">
          <Link href="/" className="block nav-link text-gray-900 py-2" onClick={() => setMobileOpen(false)}>Home</Link>
          <div>
            <button className="flex items-center justify-between w-full nav-link text-gray-500 py-2" onClick={() => setMobileServices(!mobileServices)}>
              Services <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
            </button>
            {mobileServices && (
              <div className="pl-4 space-y-2 mt-1">
                {serviceLinks.map(l => <Link key={l.href} href={l.href} className="block text-xs text-gray-500 py-1" onClick={() => setMobileOpen(false)}>{l.label}</Link>)}
              </div>
            )}
          </div>
          <div>
            <button className="flex items-center justify-between w-full nav-link text-gray-500 py-2" onClick={() => setMobileShop(!mobileShop)}>
              Shop <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
            </button>
            {mobileShop && (
              <div className="pl-4 space-y-2 mt-1">
                {shopLinks.map(l => <Link key={l.href} href={l.href} className="block text-xs text-gray-500 py-1" onClick={() => setMobileOpen(false)}>{l.label}</Link>)}
              </div>
            )}
          </div>
          <Link href="/franchise" className="block nav-link text-gray-500 py-2" onClick={() => setMobileOpen(false)}>Franchise</Link>
          <Link href="/about-us"  className="block nav-link text-gray-500 py-2" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/contact"   className="block nav-link text-gray-500 py-2" onClick={() => setMobileOpen(false)}>Contact</Link>
          <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
            <Link href="/account" onClick={() => setMobileOpen(false)} className="nav-link text-gray-500">Account</Link>
            <Link href="/request-a-quote" className="ml-auto border border-gray-900 px-5 py-2 text-[10px] uppercase tracking-widest font-semibold" onClick={() => setMobileOpen(false)}>Book Now</Link>
          </div>
        </div>
      )}
    </header>
  );
}
