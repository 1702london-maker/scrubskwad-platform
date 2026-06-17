'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
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
  const router = useRouter();
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileShop, setMobileShop] = useState(false);

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  return (
    <header className="fixed top-0 w-full z-50 glass-header border-b border-[#c8c4be]/30">
      <div className="flex justify-between items-center px-6 md:px-20 py-4 max-w-[1400px] mx-auto">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image src="/logo.jpg" alt="Scrubskwad" width={48} height={48} className="object-contain" />
          <span className="font-headline-md text-headline-md text-primary tracking-tight font-bold hidden sm:block">Scrubskwad</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`font-label-md text-label-md transition-colors ${pathname === '/' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-secondary-container hover:text-primary'}`}
          >
            Home
          </Link>

          {/* Services flyout */}
          <div className="nav-item relative">
            <button className={`font-label-md text-label-md transition-colors flex items-center gap-1 ${isActive('/services') ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-secondary-container hover:text-primary'}`}>
              Services
              <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </button>
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
            <button className={`font-label-md text-label-md transition-colors flex items-center gap-1 ${isActive('/shop') ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-secondary-container hover:text-primary'}`}>
              Shop
              <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </button>
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
            className={`font-label-md text-label-md transition-colors ${pathname === '/franchise' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-secondary-container hover:text-primary'}`}
          >
            Franchise
          </Link>
          <Link
            href="/contact"
            className={`font-label-md text-label-md transition-colors ${pathname === '/contact' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-secondary-container hover:text-primary'}`}
          >
            Contact
          </Link>
        </nav>

        {/* Right actions */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/account" aria-label="Account">
              <span className="material-symbols-outlined text-secondary hover:text-primary transition-colors cursor-pointer text-[22px]">person</span>
            </Link>
            <Link href="/cart" className="relative" aria-label="Cart">
              <span className="material-symbols-outlined text-secondary hover:text-primary transition-colors cursor-pointer text-[22px]">shopping_cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-primary text-on-primary text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
          <Link
            href="/request-a-quote"
            className="bg-primary-container text-on-primary-container px-5 py-2.5 font-label-md text-label-md hover:bg-primary-fixed-dim transition-all active:scale-[0.98] hidden md:block"
          >
            Book Now
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-secondary hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[24px]">{mobileOpen ? 'close' : 'menu'}</span>
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
              Services <span className="material-symbols-outlined text-[18px]">{mobileServices ? 'expand_less' : 'expand_more'}</span>
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
              Shop <span className="material-symbols-outlined text-[18px]">{mobileShop ? 'expand_less' : 'expand_more'}</span>
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
          <Link href="/contact" className="block font-label-md text-label-md text-on-surface py-2" onClick={() => setMobileOpen(false)}>Contact</Link>

          <div className="flex items-center gap-4 pt-2 border-t border-tertiary-fixed">
            <Link href="/account" onClick={() => setMobileOpen(false)}>
              <span className="material-symbols-outlined text-secondary">person</span>
            </Link>
            <Link href="/cart" className="relative" onClick={() => setMobileOpen(false)}>
              <span className="material-symbols-outlined text-secondary">shopping_cart</span>
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
