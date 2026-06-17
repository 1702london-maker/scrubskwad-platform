import Link from 'next/link';

export const metadata = { title: 'Carpet & Upholstery Cleaning | Scrubskwad' };

export default function CarpetUpholsteryCleaning() {
  return (
    <>
      <section className="relative h-[70vh] flex items-end overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover brightness-90" alt="Carpet Cleaning"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMiLL-nMzswzuRR_LmxrI39wHeneQfDrCUMP0micnc4mRyE7ngg3t44INwrsCSeieI-Dh-63xd4Kl8ti7U7vhClwXFByKjqqFV64R_MCuUzJ_75aeU1X0aEVF77w73ijD_I85YFlgh1hBC70iYc0aZR6weV6hP_U4PDnqfcW2efiTgq7ojLpvVQyydohVwdAxhyYguj1UeoBIYF-qPyFYR3RiwXlszsWNcMO8JRHVPl-kbBDhVeM-VFEcO4smycAL2PFVLAtWP8lg" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-20 max-w-[1200px] mx-auto w-full pb-20">
          <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-4 block">Our Services</span>
          <h1 className="font-display-lg text-display-lg md:text-6xl text-on-surface mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Carpet & Upholstery Cleaning</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Specialized restoration for delicate fibres and heirloom furniture.</p>
        </div>
      </section>

      <section className="py-[120px] px-6 md:px-20 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Preserving Your Most Prized Possessions</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Your Persian rugs, Chesterfield sofas, and silk cushions are not simply furnishings — they are investments in your home's character. Our specialists understand the difference between aggressive machine cleaning and a gentle, expert restoration.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-10">
              We use hot-water extraction, dry cleaning, and foam encapsulation — selecting the appropriate method based on the fibre, weave, and condition of each piece. Every treatment is preceded by a thorough assessment.
            </p>
            <Link href="/request-a-quote" className="bg-primary text-on-primary px-10 py-5 font-label-md text-label-md tracking-wider hover:bg-primary/90 transition-all inline-block">
              REQUEST A QUOTE
            </Link>
          </div>
          <div className="space-y-6">
            {[
              { icon: 'texture', title: 'Carpets & Rugs', desc: 'All fibres including wool, silk, synthetic, and antique Oriental rugs.' },
              { icon: 'chair', title: 'Sofas & Armchairs', desc: 'Fabric, velvet, leather, and delicate antique upholstery.' },
              { icon: 'bed', title: 'Mattresses', desc: 'Deep sanitation and deodourisation for optimal hygiene.' },
              { icon: 'curtains', title: 'Curtains & Drapes', desc: 'In-situ or off-site cleaning for delicate fabrics.' },
            ].map(item => (
              <div key={item.icon} className="flex gap-6 p-6 bg-surface-container-low border border-[#c8c4be]/30">
                <span className="material-symbols-outlined text-primary text-3xl shrink-0">{item.icon}</span>
                <div>
                  <h4 className="font-headline-md text-[20px] mb-1" style={{ fontFamily: 'EB Garamond, serif' }}>{item.title}</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-20 border-y border-[#c8c4be]/20">
        <div className="px-6 md:px-20 max-w-[1200px] mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg mb-4" style={{ fontFamily: 'EB Garamond, serif' }}>Pricing from £80 per item</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto mb-8">Final pricing varies by size, material, and condition. Request a quote for your specific pieces.</p>
          <Link href="/request-a-quote" className="bg-primary text-on-primary px-12 py-5 font-label-md text-label-md tracking-widest hover:bg-primary/90 transition-all inline-block">GET A QUOTE</Link>
        </div>
      </section>
    </>
  );
}
