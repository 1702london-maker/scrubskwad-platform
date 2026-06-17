'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '@/lib/cart-context';
import { useState } from 'react';

const serviceLinks = [
  { label: 'Regular Home Cleaning', href: '/services/regular-home-cleaning' },
  { label: 'Deep Cleaning', href: '/services/deep-cleaning' },
  { label: 'End of Tenancy Cleaning', href: '/services/end-of-tenancy-cleaning' },
  { label: 'Office & Commercial Cleaning', href: '/services/office-commercial-cleaning' },
  { label: 'Carpet & Upholstery Cleaning', href: '/services/carpet-upholstery-cleaning' },
];

const shopLinks = [
  { label: 'Cleaning Chemicals & Solutions', href: '/shop/cleaning-chemicals-solutions' },
  { label: 'Cleaning Tools & Equipment', href: '/shop/cleaning-tools-equipment' },
  { label: 'Cleaning Machines', href: '/shop/cleaning-machines' },
  { label: 'All Products', href: '/shop' },
];

export default function Header() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileShop, setMobileShop] = useState(false);

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  return (
    <header className="fixed top-0 w-full z-50 glass-header border-b border-[#c8c4be]/30">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-5 px-6 py-4 md:px-20 max-w-[1400px] mx-auto">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image src="/logo.jpg" alt="Scrubskwad" width={54} height={54} className="object-contain" />
          <span className="font-headline-md text-[25px] leading-none text-primary tracking-tight font-bold hidden sm:block">Scrubskwad</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center gap-1">
          <Link
            href="/"
            className={`px-4 py-3 font-label-md text-[12px] uppercase tracking-[0.18em] transition-colors ${pathname === '/' ? 'text-primary' : 'text-on-secondary-container hover:text-primary'}`}
          >
            Home
          </Link>

          {/* Services flyout */}
          <div className="nav-item relative">
            <Link href="/services" className={`block px-4 py-3 font-label-md text-[12px] uppercase tracking-[0.18em] transition-colors ${isActive('/services') ? 'text-primary' : 'text-on-secondary-container hover:text-primary'}`}>
              Services
            </Link>
            <div className="flyout-menu absolute top-full left-0 mt-3 w-72 bg-surface-container-lowest border border-tertiary-fixed shadow-[0_40px_80px_-20px_rgba(212,195,161,0.15)] z-50">
              {serviceLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-6 py-3.5 font-body-md text-body-md text-secondary hover:text-primary hover:bg-surface-container-low border-b border-tertiary-fixed/30 last:border-0 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Shop flyout */}
          <div className="nav-item relative">
            <Link href="/shop" className={`block px-4 py-3 font-label-md text-[12px] uppercase tracking-[0.18em] transition-colors ${isActive('/shop') ? 'text-primary' : 'text-on-secondary-container hover:text-primary'}`}>
              Shop
            </Link>
            <div className="flyout-menu absolute top-full left-0 mt-3 w-64 bg-surface-container-lowest border border-tertiary-fixed shadow-[0_40px_80px_-20px_rgba(212,195,161,0.15)] z-50">
              {shopLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-6 py-3.5 font-body-md text-body-md text-secondary hover:text-primary hover:bg-surface-container-low border-b border-tertiary-fixed/30 last:border-0 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/franchise"
            className={`px-4 py-3 font-label-md text-[12px] uppercase tracking-[0.18em] transition-colors ${pathname === '/franchise' ? 'text-primary' : 'text-on-secondary-container hover:text-primary'}`}
          >
            Franchise
          </Link>
          <Link
            href="/about-us"
            className={`font-label-md text-label-md transition-colors ${isActive('/about-us') ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-secondary-container hover:text-primary'}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`px-4 py-3 font-label-md text-[12px] uppercase tracking-[0.18em] transition-colors ${pathname === '/contact' ? 'text-primary' : 'text-on-secondary-container hover:text-primary'}`}
          >
            Contact
          </Link>
        </nav>

        {/* Right actions */}
        <div className="flex items-center justify-end space-x-4">
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/account" aria-label="Account">
              <span className="font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary hover:text-primary transition-colors">Account</span>
            </Link>
            <Link href="/cart" className="relative inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors" aria-label="Cart">
              <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6.2 7.5h13.1l-1.2 8.2H7.4L6.2 7.5Z" stroke="currentColor" strokeWidth="1.7" />
                <path d="M6.2 7.5 5.7 4H3.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square" />
                <path d="M8.7 20h.1M17 20h.1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-primary text-on-primary text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
          <Link
            href="/request-a-quote"
            className="hidden bg-primary px-5 py-3 font-label-md text-[11px] uppercase tracking-[0.18em] text-on-primary transition-all hover:bg-primary/90 active:scale-[0.98] md:block"
          >
            Book Now
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-secondary hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="font-label-md text-[12px] uppercase tracking-[0.18em]">{mobileOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface-container-lowest border-t border-tertiary-fixed px-6 py-6 space-y-4">
          <Link href="/" className="block font-label-md text-label-md text-on-surface py-2" onClick={() => setMobileOpen(false)}>Home</Link>

          <div>
            <button
              className="flex items-center justify-between w-full font-label-md text-label-md text-on-surface py-2"
              onClick={() => setMobileServices(!mobileServices)}
            >
              Services <span>{mobileServices ? '-' : '+'}</span>
            </button>
            {mobileServices && (
              <div className="pl-4 space-y-2 mt-2">
                {serviceLinks.map(l => (
                  <Link key={l.href} href={l.href} className="block font-body-md text-secondary py-1" onClick={() => setMobileOpen(false)}>{l.label}</Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              className="flex items-center justify-between w-full font-label-md text-label-md text-on-surface py-2"
              onClick={() => setMobileShop(!mobileShop)}
            >
              Shop <span>{mobileShop ? '-' : '+'}</span>
            </button>
            {mobileShop && (
              <div className="pl-4 space-y-2 mt-2">
                {shopLinks.map(l => (
                  <Link key={l.href} href={l.href} className="block font-body-md text-secondary py-1" onClick={() => setMobileOpen(false)}>{l.label}</Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/franchise" className="block font-label-md text-label-md text-on-surface py-2" onClick={() => setMobileOpen(false)}>Franchise</Link>
          <Link href="/about-us" className="block font-label-md text-label-md text-on-surface py-2" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/contact" className="block font-label-md text-label-md text-on-surface py-2" onClick={() => setMobileOpen(false)}>Contact</Link>

          <div className="flex items-center gap-4 pt-2 border-t border-tertiary-fixed">
            <Link href="/account" onClick={() => setMobileOpen(false)}>
              <span className="font-label-md text-[12px] uppercase tracking-[0.18em] text-secondary">Account</span>
            </Link>
            <Link href="/cart" className="relative" onClick={() => setMobileOpen(false)}>
              <span className="font-label-md text-[12px] uppercase tracking-[0.18em] text-secondary">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-primary text-on-primary text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link href="/request-a-quote" className="ml-auto bg-primary-container text-on-primary-container px-5 py-2 font-label-md text-label-md" onClick={() => setMobileOpen(false)}>
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
