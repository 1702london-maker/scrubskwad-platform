'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';

const products = [
  { id: 'tool-1', name: 'Professional Microfibre Set (12pk)', price: 42.00, badge: 'New', desc: 'Ultra-soft, lint-free cloths for all surfaces. Used by our own specialists.' },
  { id: 'tool-2', name: 'Telescopic Window Wiper', price: 58.00, badge: '', desc: 'Extend to 3.5m. Silicone blade for streak-free results on any window.' },
  { id: 'tool-3', name: 'Grout Cleaning Brush Kit (5pc)', price: 29.99, badge: '', desc: 'Angled stiff-bristle brushes for grout, seams, and tile edges.' },
  { id: 'tool-4', name: 'Heavy-Duty Scrubber Pad Set', price: 18.00, badge: '', desc: 'Non-scratch abrasive pads for stubborn stains on tough surfaces.' },
  { id: 'tool-5', name: 'Professional Spray Bottle Set (3pk)', price: 22.50, badge: '', desc: 'Commercial-grade trigger sprayers with adjustable nozzle settings.' },
  { id: 'tool-6', name: 'Extendable Duster — 100cm', price: 35.00, badge: 'Best Seller', desc: 'Electrostatic microfibre head attracts and holds dust. Machine washable.' },
];

export default function CleaningTools() {
  const { addItem } = useCart();

  return (
    <>
      <section className="pt-40 pb-12 px-6 md:px-20 max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/shop" className="font-label-md text-label-md text-secondary hover:text-primary transition-colors">Shop</Link>
          <span className="font-body-md text-[14px] text-secondary">/</span>
          <span className="font-label-md text-label-md text-primary">Cleaning Tools & Equipment</span>
        </div>
        <h1 className="font-display-lg text-display-lg md:text-5xl text-on-surface mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Cleaning Tools & Equipment</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Professional tools that make the difference between a clean home and a perfect one.</p>
      </section>

      <section className="px-6 md:px-20 max-w-[1200px] mx-auto pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map(p => (
            <div key={p.id} className="group bg-white border border-[#c8c4be]/30 hover:border-primary/30 transition-all">
              <div className="relative overflow-hidden h-[180px] bg-surface-container-low">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMiLL-nMzswzuRR_LmxrI39wHeneQfDrCUMP0micnc4mRyE7ngg3t44INwrsCSeieI-Dh-63xd4Kl8ti7U7vhClwXFByKjqqFV64R_MCuUzJ_75aeU1X0aEVF77w73ijD_I85YFlgh1hBC70iYc0aZR6weV6hP_U4PDnqfcW2efiTgq7ojLpvVQyydohVwdAxhyYguj1UeoBIYF-qPyFYR3RiwXlszsWNcMO8JRHVPl-kbBDhVeM-VFEcO4smycAL2PFVLAtWP8lg"
                  alt={p.name} />
                {p.badge && <span className="absolute top-4 left-4 bg-primary text-on-primary font-label-md text-[12px] px-3 py-1 tracking-widest">{p.badge}</span>}
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-[18px] text-on-surface mb-2" style={{ fontFamily: 'EB Garamond, serif' }}>{p.name}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4 text-sm">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-body-lg text-body-lg text-primary">£{p.price.toFixed(2)}</span>
                  <button onClick={() => addItem({ id: p.id, name: p.name, price: p.price, category: 'tools' })}
                    className="bg-primary text-on-primary px-4 py-2 font-label-md text-label-md hover:bg-primary/90 transition-all text-sm">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
