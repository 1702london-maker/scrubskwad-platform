'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';

const products = [
  { id: 'mach-1', name: 'Steam Mop Pro 2000W', price: 189.00, badge: 'Best Seller', desc: 'Kills 99.9% of bacteria with steam power. Suitable for all sealed hard floors.' },
  { id: 'mach-2', name: 'Cordless HEPA Vacuum', price: 345.00, badge: '', desc: 'True HEPA filtration. 60-minute battery. Perfect for allergen-sensitive homes.' },
  { id: 'mach-3', name: 'Wet & Dry Shop Vacuum 30L', price: 229.00, badge: '', desc: 'Heavy-duty suction for wet spills, dry debris, and post-renovation clean-up.' },
  { id: 'mach-4', name: 'Robot Vacuum Pro Series', price: 495.00, badge: 'New', desc: 'Laser navigation, auto-empty base, and app control. Compatible with Alexa and Google Home.' },
  { id: 'mach-5', name: 'Pressure Washer 1800psi', price: 265.00, badge: '', desc: 'Compact electric pressure washer for patios, driveways, and exterior surfaces.' },
  { id: 'mach-6', name: 'Window Vacuum Cleaner', price: 79.99, badge: '', desc: 'Cordless squeegee and vacuum in one. Leaves glass streak-free in seconds.' },
];

export default function CleaningMachines() {
  const { addItem } = useCart();

  return (
    <>
      <section className="pt-40 pb-12 px-6 md:px-20 max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/shop" className="font-label-md text-label-md text-secondary hover:text-primary transition-colors">Shop</Link>
          <span className="font-body-md text-[14px] text-secondary">/</span>
          <span className="font-label-md text-label-md text-primary">Cleaning Machines</span>
        </div>
        <h1 className="font-display-lg text-display-lg md:text-5xl text-on-surface mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Cleaning Machines</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Professional-grade machines for achieving immaculate results at home.</p>
      </section>

      <section className="px-6 md:px-20 max-w-[1200px] mx-auto pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map(p => (
            <div key={p.id} className="group bg-white border border-[#c8c4be]/30 hover:border-primary/30 transition-all">
              <div className="relative overflow-hidden h-[180px] bg-surface-container-low">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHYJVv_6XpshEpcZ8cueQ1ah5g-17bnl9uI--iC6WXSs-9h4OEC_AIntYv6ihrkvRvPykWDXamNJPchY1LCYIM9qkthA-hOfuAtvU9qML8BOB9ZmOjTtV-SYOWfyHu-zQaBXpSsW15mEHuQETO9FYqd_TVUX1x20hQfbfjnb2ntdTQri8ymonWPCQz8EchtxEvvbKp7-FIaXLrO2G03lZokwz56aJAuS8DpqIStwLomW7mV-lUyJL5cxQdpVnvA2gmrmWMMYCXlp4"
                  alt={p.name} />
                {p.badge && <span className="absolute top-4 left-4 bg-primary text-on-primary font-label-md text-[12px] px-3 py-1 tracking-widest">{p.badge}</span>}
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-[18px] text-on-surface mb-2" style={{ fontFamily: 'EB Garamond, serif' }}>{p.name}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4 text-sm">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-body-lg text-body-lg text-primary">£{p.price.toFixed(2)}</span>
                  <button onClick={() => addItem({ id: p.id, name: p.name, price: p.price, category: 'machines' })}
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
