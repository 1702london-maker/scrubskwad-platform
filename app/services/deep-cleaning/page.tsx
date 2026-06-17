import Link from 'next/link';

export const metadata = { title: 'Deep Cleaning | Scrubskwad' };

export default function DeepCleaning() {
  return (
    <>
      <section className="relative h-[70vh] flex items-end overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" alt="Deep Cleaning"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMiLL-nMzswzuRR_LmxrI39wHeneQfDrCUMP0micnc4mRyE7ngg3t44INwrsCSeieI-Dh-63xd4Kl8ti7U7vhClwXFByKjqqFV64R_MCuUzJ_75aeU1X0aEVF77w73ijD_I85YFlgh1hBC70iYc0aZR6weV6hP_U4PDnqfcW2efiTgq7ojLpvVQyydohVwdAxhyYguj1UeoBIYF-qPyFYR3RiwXlszsWNcMO8JRHVPl-kbBDhVeM-VFEcO4smycAL2PFVLAtWP8lg" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-20 max-w-[1200px] mx-auto w-full pb-20">
          <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-4 block">Our Services</span>
          <h1 className="font-display-lg text-display-lg md:text-6xl text-on-surface mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Deep Cleaning</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">A comprehensive architectural revival of your home's surfaces and spaces.</p>
        </div>
      </section>

      <section className="py-[120px] px-6 md:px-20 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>A Thorough Transformation</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Our Deep Cleaning service penetrates beyond the surface to restore your home to an immaculate state. Ideal as a seasonal deep-clean, after renovation work, or when you want a complete reset of your living environment.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-10">
              Our specialists use professional-grade, eco-conscious solutions to tackle limescale, grease buildup, and accumulated grime in every corner — from inside the oven to behind furniture.
            </p>
            <Link href="/request-a-quote" className="bg-primary text-on-primary px-10 py-5 font-label-md text-label-md tracking-wider hover:bg-primary/90 transition-all inline-block">
              BOOK A DEEP CLEAN
            </Link>
          </div>
          <div className="relative">
            <div className="image-frame">
              <img className="w-full object-cover h-[500px]" alt="Pristine kitchen after deep clean"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeNwdbE5I3-vLppWRdRbANYZjh8e3WN5_OuZ-nZlRo9Wa6vAAt_VfL21jBoIkVZsX3ahLafxnViH0H-MUg15GWxUEf_EF4mUqVdDu92G1rbXgInArbxtbO2BqNobfBMUs6BI37CID6It-WIP_--VpazvF1U7fIgrcCvD9PXApt_aRDb6VJJhhUTkC5sT-kVExkt_hOs_4y3xP0fKssz27U4ujh_X7rosU_Y_v0xG4QQuNCx6VPVjDUdiRtolaepuzdM4DneVNZHE0" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-[120px] border-y border-[#c8c4be]/20">
        <div className="px-6 md:px-20 max-w-[1200px] mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-center mb-16" style={{ fontFamily: 'EB Garamond, serif' }}>What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Kitchen', items: ['Inside oven & hob degreasing', 'Inside fridge & freezer', 'All cupboard interiors', 'Extractor fan & filters', 'Behind & under appliances'] },
              { title: 'Bathrooms', items: ['Limescale removal from taps', 'Grout & tile deep scrub', 'Inside all cupboards', 'Ventilation cleaning', 'Complete sanitisation'] },
              { title: 'Living Areas', items: ['Behind & under furniture', 'Skirting boards & cornices', 'Window frames & sills', 'Light fittings & switches', 'Deep carpet vacuuming'] },
              { title: 'Bedrooms', items: ['Under beds & wardrobes', 'Wardrobe & drawer interiors', 'Curtain & blind dusting', 'Mattress vacuuming', 'Deep window cleaning'] },
            ].map(col => (
              <div key={col.title} className="bg-white p-10 border border-[#c8c4be]/30">
                <h3 className="font-headline-md text-headline-md mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>{col.title}</h3>
                <ul className="space-y-3">
                  {col.items.map(item => (
                    <li key={item} className="font-body-md text-body-md text-on-surface-variant flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[120px] px-6 md:px-20">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Starting from £350</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-12">Final pricing depends on property size and condition. Contact us for a bespoke quote tailored to your home.</p>
          <Link href="/request-a-quote" className="bg-primary text-on-primary px-16 py-6 font-label-md text-label-md tracking-widest hover:bg-primary/90 transition-all inline-block">REQUEST A QUOTE</Link>
        </div>
      </section>
    </>
  );
}
