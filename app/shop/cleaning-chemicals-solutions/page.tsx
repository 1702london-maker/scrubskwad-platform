'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';

const products = [
  { id: 'chem-1', name: 'Citrus Pro Degreaser 1L', price: 24.99, badge: 'Best Seller', desc: 'Cuts through grease with natural citrus enzymes. Safe on all surfaces.' },
  { id: 'chem-2', name: 'Marble & Stone Polish 500ml', price: 34.99, badge: '', desc: 'Professional-grade polish for marble, granite, and all natural stone surfaces.' },
  { id: 'chem-3', name: 'Anti-Bacterial Bathroom Spray 750ml', price: 18.50, badge: '', desc: 'Hospital-grade sanitisation for bathroom surfaces, tiles, and fixtures.' },
  { id: 'chem-4', name: 'Glass & Mirror Streak-Free Cleaner', price: 16.99, badge: '', desc: 'Ammonia-free formula leaving glass surfaces perfectly clear.' },
  { id: 'chem-5', name: 'Limescale Power Remover 500ml', price: 22.00, badge: 'New', desc: 'Dissolves even the most stubborn limescale from taps, kettles, and showers.' },
  { id: 'chem-6', name: 'Eco Laundry & Fabric Sanitiser', price: 28.99, badge: '', desc: 'Hypoallergenic formula effective at 30°C. Suitable for delicate fabrics.' },
];

export default function CleaningChemicals() {
  const { addItem } = useCart();

  return (
    <>
      <section className="pt-40 pb-12 px-6 md:px-20 max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/shop" className="font-label-md text-label-md text-secondary hover:text-primary transition-colors">Shop</Link>
          <span className="material-symbols-outlined text-secondary text-[18px]">chevron_right</span>
          <span className="font-label-md text-label-md text-primary">Cleaning Chemicals & Solutions</span>
        </div>
        <h1 className="font-display-lg text-display-lg md:text-5xl text-on-surface mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Cleaning Chemicals & Solutions</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Professional-grade cleaning solutions used by our own specialists, now available for your home.</p>
      </section>

      <section className="px-6 md:px-20 max-w-[1200px] mx-auto pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map(p => (
            <div key={p.id} className="group bg-white border border-[#c8c4be]/30 hover:border-primary/30 transition-all">
              <div className="relative overflow-hidden h-56 bg-surface-container-low">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeNwdbE5I3-vLppWRdRbANYZjh8e3WN5_OuZ-nZlRo9Wa6vAAt_VfL21jBoIkVZsX3ahLafxnViH0H-MUg15GWxUEf_EF4mUqVdDu92G1rbXgInArbxtbO2BqNobfBMUs6BI37CID6It-WIP_--VpazvF1U7fIgrcCvD9PXApt_aRDb6VJJhhUTkC5sT-kVExkt_hOs_4y3xP0fKssz27U4ujh_X7rosU_Y_v0xG4QQuNCx6VPVjDUdiRtolaepuzdM4DneVNZHE0"
                  alt={p.name} />
                {p.badge && <span className="absolute top-4 left-4 bg-primary text-on-primary font-label-md text-[12px] px-3 py-1 tracking-widest">{p.badge}</span>}
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-[18px] text-on-surface mb-2" style={{ fontFamily: 'EB Garamond, serif' }}>{p.name}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4 text-sm">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-body-lg text-body-lg text-primary">£{p.price.toFixed(2)}</span>
                  <button onClick={() => addItem({ id: p.id, name: p.name, price: p.price, category: 'chemicals' })}
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
