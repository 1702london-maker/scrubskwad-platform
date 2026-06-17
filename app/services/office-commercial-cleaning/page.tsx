import Link from 'next/link';

export const metadata = { title: 'Office & Commercial Cleaning | Scrubskwad' };

export default function OfficeCommercialCleaning() {
  return (
    <>
      <section className="relative h-[70vh] flex items-end overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover brightness-90" alt="Office Cleaning"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeNwdbE5I3-vLppWRdRbANYZjh8e3WN5_OuZ-nZlRo9Wa6vAAt_VfL21jBoIkVZsX3ahLafxnViH0H-MUg15GWxUEf_EF4mUqVdDu92G1rbXgInArbxtbO2BqNobfBMUs6BI37CID6It-WIP_--VpazvF1U7fIgrcCvD9PXApt_aRDb6VJJhhUTkC5sT-kVExkt_hOs_4y3xP0fKssz27U4ujh_X7rosU_Y_v0xG4QQuNCx6VPVjDUdiRtolaepuzdM4DneVNZHE0" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-20 max-w-[1200px] mx-auto w-full pb-20">
          <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-4 block">Our Services</span>
          <h1 className="font-display-lg text-display-lg md:text-6xl text-on-surface mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Office & Commercial Cleaning</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Bespoke maintenance programs for London's most prestigious commercial spaces.</p>
        </div>
      </section>

      <section className="py-[120px] px-6 md:px-20 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>The Impression Your Space Makes</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              A pristine workspace is a statement of intent. We serve London's premier offices, private members' clubs, art galleries, showrooms, and retail spaces with the same meticulous standard we bring to residential estates.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-10">
              Our commercial programs are fully bespoke — built around your operating hours, your sector's requirements, and your brand standards. We are fully insured and DBS-checked for all commercial environments.
            </p>
            <Link href="/contact" className="bg-primary text-on-primary px-10 py-5 font-label-md text-label-md tracking-wider hover:bg-primary/90 transition-all inline-block">
              REQUEST A PROGRAMME
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {['Offices & Co-Working', 'Private Members\' Clubs', 'Art Galleries & Showrooms', 'Retail & Boutiques', 'Restaurants & Hospitality', 'Medical & Wellness'].map(type => (
              <div key={type} className="bg-surface-container-low border border-[#c8c4be]/30 p-6">
                <span className="material-symbols-outlined text-primary mb-3 block">check_circle</span>
                <p className="font-body-md text-body-md text-on-surface">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-[120px] border-y border-[#c8c4be]/20">
        <div className="px-6 md:px-20 max-w-[1200px] mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Bespoke Commercial Pricing</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-12">Every commercial contract is individually priced based on your space, frequency, and specific requirements. Contact us for a consultation.</p>
          <Link href="/contact" className="bg-primary text-on-primary px-16 py-6 font-label-md text-label-md tracking-widest hover:bg-primary/90 transition-all inline-block">CONTACT US</Link>
        </div>
      </section>
    </>
  );
}
