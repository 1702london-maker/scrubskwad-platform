import Link from 'next/link';

export const metadata = { title: 'Shop | Scrubskwad' };

const products = [
  { id: '1', name: 'Citrus Pro Degreaser', category: 'chemicals', price: 24.99, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeNwdbE5I3-vLppWRdRbANYZjh8e3WN5_OuZ-nZlRo9Wa6vAAt_VfL21jBoIkVZsX3ahLafxnViH0H-MUg15GWxUEf_EF4mUqVdDu92G1rbXgInArbxtbO2BqNobfBMUs6BI37CID6It-WIP_--VpazvF1U7fIgrcCvD9PXApt_aRDb6VJJhhUTkC5sT-kVExkt_hOs_4y3xP0fKssz27U4ujh_X7rosU_Y_v0xG4QQuNCx6VPVjDUdiRtolaepuzdM4DneVNZHE0', badge: 'Best Seller' },
  { id: '2', name: 'Marble & Stone Polish', category: 'chemicals', price: 34.99, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMiLL-nMzswzuRR_LmxrI39wHeneQfDrCUMP0micnc4mRyE7ngg3t44INwrsCSeieI-Dh-63xd4Kl8ti7U7vhClwXFByKjqqFV64R_MCuUzJ_75aeU1X0aEVF77w73ijD_I85YFlgh1hBC70iYc0aZR6weV6hP_U4PDnqfcW2efiTgq7ojLpvVQyydohVwdAxhyYguj1UeoBIYF-qPyFYR3RiwXlszsWNcMO8JRHVPl-kbBDhVeM-VFEcO4smycAL2PFVLAtWP8lg', badge: '' },
  { id: '3', name: 'Professional Microfibre Set (12pk)', category: 'tools', price: 42.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHYJVv_6XpshEpcZ8cueQ1ah5g-17bnl9uI--iC6WXSs-9h4OEC_AIntYv6ihrkvRvPykWDXamNJPchY1LCYIM9qkthA-hOfuAtvU9qML8BOB9ZmOjTtV-SYOWfyHu-zQaBXpSsW15mEHuQETO9FYqd_TVUX1x20hQfbfjnb2ntdTQri8ymonWPCQz8EchtxEvvbKp7-FIaXLrO2G03lZokwz56aJAuS8DpqIStwLomW7mV-lUyJL5cxQdpVnvA2gmrmWMMYCXlp4', badge: 'New' },
  { id: '4', name: 'Telescopic Window Wiper', category: 'tools', price: 58.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeNwdbE5I3-vLppWRdRbANYZjh8e3WN5_OuZ-nZlRo9Wa6vAAt_VfL21jBoIkVZsX3ahLafxnViH0H-MUg15GWxUEf_EF4mUqVdDu92G1rbXgInArbxtbO2BqNobfBMUs6BI37CID6It-WIP_--VpazvF1U7fIgrcCvD9PXApt_aRDb6VJJhhUTkC5sT-kVExkt_hOs_4y3xP0fKssz27U4ujh_X7rosU_Y_v0xG4QQuNCx6VPVjDUdiRtolaepuzdM4DneVNZHE0', badge: '' },
  { id: '5', name: 'Steam Mop Pro 2000W', category: 'machines', price: 189.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMiLL-nMzswzuRR_LmxrI39wHeneQfDrCUMP0micnc4mRyE7ngg3t44INwrsCSeieI-Dh-63xd4Kl8ti7U7vhClwXFByKjqqFV64R_MCuUzJ_75aeU1X0aEVF77w73ijD_I85YFlgh1hBC70iYc0aZR6weV6hP_U4PDnqfcW2efiTgq7ojLpvVQyydohVwdAxhyYguj1UeoBIYF-qPyFYR3RiwXlszsWNcMO8JRHVPl-kbBDhVeM-VFEcO4smycAL2PFVLAtWP8lg', badge: 'Best Seller' },
  { id: '6', name: 'Cordless HEPA Vacuum', category: 'machines', price: 345.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHYJVv_6XpshEpcZ8cueQ1ah5g-17bnl9uI--iC6WXSs-9h4OEC_AIntYv6ihrkvRvPykWDXamNJPchY1LCYIM9qkthA-hOfuAtvU9qML8BOB9ZmOjTtV-SYOWfyHu-zQaBXpSsW15mEHuQETO9FYqd_TVUX1x20hQfbfjnb2ntdTQri8ymonWPCQz8EchtxEvvbKp7-FIaXLrO2G03lZokwz56aJAuS8DpqIStwLomW7mV-lUyJL5cxQdpVnvA2gmrmWMMYCXlp4', badge: '' },
  { id: '7', name: 'Anti-Bacterial Bathroom Spray', category: 'chemicals', price: 18.50, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeNwdbE5I3-vLppWRdRbANYZjh8e3WN5_OuZ-nZlRo9Wa6vAAt_VfL21jBoIkVZsX3ahLafxnViH0H-MUg15GWxUEf_EF4mUqVdDu92G1rbXgInArbxtbO2BqNobfBMUs6BI37CID6It-WIP_--VpazvF1U7fIgrcCvD9PXApt_aRDb6VJJhhUTkC5sT-kVExkt_hOs_4y3xP0fKssz27U4ujh_X7rosU_Y_v0xG4QQuNCx6VPVjDUdiRtolaepuzdM4DneVNZHE0', badge: '' },
  { id: '8', name: 'Grout Cleaning Brush Kit', category: 'tools', price: 29.99, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMiLL-nMzswzuRR_LmxrI39wHeneQfDrCUMP0micnc4mRyE7ngg3t44INwrsCSeieI-Dh-63xd4Kl8ti7U7vhClwXFByKjqqFV64R_MCuUzJ_75aeU1X0aEVF77w73ijD_I85YFlgh1hBC70iYc0aZR6weV6hP_U4PDnqfcW2efiTgq7ojLpvVQyydohVwdAxhyYguj1UeoBIYF-qPyFYR3RiwXlszsWNcMO8JRHVPl-kbBDhVeM-VFEcO4smycAL2PFVLAtWP8lg', badge: '' },
];

export default function Shop() {
  return (
    <>
      <section className="pt-40 pb-12 px-6 md:px-20 max-w-[1200px] mx-auto">
        <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-4 block">Our Store</span>
        <h1 className="font-display-lg text-display-lg md:text-6xl text-on-surface mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Scrubskwad Shop</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Professional-grade cleaning products and equipment, available to purchase for your home.</p>
      </section>

      {/* Category Filter */}
      <section className="px-6 md:px-20 max-w-[1200px] mx-auto mb-12">
        <div className="flex flex-wrap gap-3">
          {[
            { label: 'All Products', href: '/shop' },
            { label: 'Cleaning Chemicals & Solutions', href: '/shop/cleaning-chemicals-solutions' },
            { label: 'Cleaning Tools & Equipment', href: '/shop/cleaning-tools-equipment' },
            { label: 'Cleaning Machines', href: '/shop/cleaning-machines' },
          ].map(cat => (
            <Link key={cat.href} href={cat.href}
              className="px-6 py-3 border border-[#c8c4be]/50 font-label-md text-label-md text-secondary hover:bg-primary hover:text-on-primary hover:border-primary transition-all">
              {cat.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 md:px-20 max-w-[1200px] mx-auto pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="group bg-white border border-[#c8c4be]/30 hover:border-primary/30 transition-all">
              <div className="relative overflow-hidden h-56">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={product.image} alt={product.name} />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-primary text-on-primary font-label-md text-[12px] px-3 py-1 tracking-widest">{product.badge}</span>
                )}
              </div>
              <div className="p-6">
                <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-2">{product.category}</p>
                <h3 className="font-headline-md text-[18px] text-on-surface mb-3" style={{ fontFamily: 'EB Garamond, serif' }}>{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-body-lg text-body-lg text-primary">£{product.price.toFixed(2)}</span>
                  <button className="bg-primary text-on-primary px-4 py-2 font-label-md text-label-md hover:bg-primary/90 transition-all text-sm">
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
