import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-white text-scrub-dark overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative min-h-[85vh] flex items-center bg-[#f9f9f9]">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Luxury interior"
            className="w-full h-full object-cover object-center opacity-90"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgwqWlh67fSy5If-MgKiTzaNGc1Mefhkmek2K4lFcfF6vOy5cpZGx4qUIj1AyXQSlCzBPAX0BIydJjVl9Dt5_20u4rshqyyB8pFtPd7oPbILsWKQxFZn3GpfTdYm-tXs6dedkXArZmCimGQwR6jvrJJYaV16FU6lvNvx_JtgwMWMMCHTMEF7g-74UwT64JSDexDIHVkzIWfr8aoBJRdPfIn_9bfnM93wCXk3MKAQCr5akeI77Gy8KuWbn1hZ4pJfKae1TWuFOA9YI"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gray-400 mb-6">Premium Property Care</p>
            <h1 className="text-6xl md:text-7xl leading-[1.1] mb-8">
              Cleaning services<br />shaped around the<br />rhythm of your<br />property.
            </h1>
            <p className="text-lg text-gray-600 max-w-md mb-10 leading-relaxed">
              Discreet domestic and commercial cleaning for clients who value consistency, trust and spaces that always feel ready.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/request-a-quote" className="bg-[#607d8b] text-white px-8 py-4 text-[11px] uppercase tracking-widest font-bold hover:brightness-110 transition-all">
                Request a Quote
              </Link>
              <Link href="/services" className="bg-transparent border border-gray-300 px-8 py-4 text-[11px] uppercase tracking-widest font-bold hover:bg-white transition-all">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
        {/* Floating Info Card */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 hidden xl:block w-[300px] bg-white p-10 shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-5xl font-serif">2 hr</span>
            <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mt-2">Average Response</p>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center text-xs font-semibold">
              <span className="w-5 h-5 rounded-full bg-scrub-dark text-white flex items-center justify-center mr-3 text-[10px]">✓</span> Vetted Teams
            </li>
            <li className="flex items-center text-xs font-semibold">
              <span className="w-5 h-5 rounded-full bg-scrub-dark text-white flex items-center justify-center mr-3 text-[10px]">✓</span> Fully Insured
            </li>
            <li className="flex items-center text-xs font-semibold">
              <span className="w-5 h-5 rounded-full bg-scrub-dark text-white flex items-center justify-center mr-3 text-[10px]">✓</span> Fixed Pricing
            </li>
          </ul>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="border-y border-gray-100 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <h3 className="text-4xl font-serif mb-1">500+</h3>
            <p className="text-[10px] uppercase font-bold tracking-widest mb-2">Homes Maintained</p>
            <p className="text-xs text-gray-500">Across London &amp; the<br />Home Counties</p>
          </div>
          <div>
            <h3 className="text-4xl font-serif mb-1">4.9<span className="text-2xl">★</span></h3>
            <p className="text-[10px] uppercase font-bold tracking-widest mb-2">Client Rating</p>
            <p className="text-xs text-gray-500">Based on verified<br />reviews</p>
          </div>
          <div>
            <h3 className="text-4xl font-serif mb-1">24hr</h3>
            <p className="text-[10px] uppercase font-bold tracking-widest mb-2">Response Time</p>
            <p className="text-xs text-gray-500">We aim to respond<br />within 2 hours</p>
          </div>
          <div>
            <h3 className="text-4xl font-serif mb-1">100%</h3>
            <p className="text-[10px] uppercase font-bold tracking-widest mb-2">Insured Teams</p>
            <p className="text-xs text-gray-500">Your property is in<br />safe hands</p>
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gray-400 mb-6">Who We Are</p>
          <h2 className="text-5xl leading-tight mb-8">Quiet luxury starts<br />with a clean space.</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Scrubskwad provides premium domestic and commercial cleaning services designed around modern lifestyles.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            From private residences to offices, every visit is carefully prepared, professionally executed and quality checked before completion.
          </p>
          <Link href="/about-us" className="inline-block bg-[#607d8b] text-white px-8 py-4 text-[11px] uppercase tracking-widest font-bold hover:brightness-110">
            Learn More
          </Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Interior detail"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3rdHXgZYW2T0W0AdUwO55ll0KKBTUSA2bWthSIYI0ITiRlTt3aCpcGG_3Fcl37CZW7tGB5tha5DxhTOwZBEkAYulSbajXVFJSqSM1CJdLEhCZVnfM9Rx1h8r_DzpAhYyjHqY03fACtTb7iIo-R_OqyWBY039mb4eGazwsScIwE-ALQWW_c2pXQSprPAgW7-mDazFTWP9mkeXc2kBQ5gxnWbDfY_tu-qb5tn53HdjL2Wuwb3KgJAYJNIyKM8lwo8AgtV7UYREF8a8"
          />
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gray-400 mb-4">Services</p>
              <h2 className="text-5xl">Cleaning shaped<br />around the property.</h2>
            </div>
            <Link href="/services" className="text-[10px] uppercase tracking-widest font-bold border-b border-gray-900 pb-1 flex items-center">
              View All Services <span className="ml-2">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <Link href="/services/regular-home-cleaning" className="group service-card cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Regular Cleaning" className="w-full h-full object-cover transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_2mQGfL0YMRSIUJQMxobT894H5HyyYMJPaZiVZS6s59DSjF8qRAm5eRLUPmjQg_udoIIbtEGMDSKt5ipL1TiKye9mIc4yw-OweenJkp5PVnK9HyTlXqg7fWTooXLWSo8c_P59UGj5W6N26lLTmVwhgaapNCeyyrVgMx9aTT0cVAa9QUu8NsbnqkgObhS6XBCsiZNWKV4ocTJArcUnF7dKc8YNW12NdyUCCQROUxAjFp_I2_YacS-3t3EHhuzG8FiHcc2QtvwQ0F0" />
              </div>
              <span className="text-xs text-gray-400 font-mono mb-2 block">01</span>
              <h4 className="text-xl mb-3">Regular Home Cleaning</h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">Weekly, fortnightly or monthly visits tailored around your lifestyle.</p>
              <span className="text-[10px] uppercase tracking-widest font-bold flex items-center">View <span className="ml-1">→</span></span>
            </Link>
            <Link href="/services/deep-cleaning" className="group service-card cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Deep Cleaning" className="w-full h-full object-cover transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2m5ikKzLqrLW-RKGSL2MoIMNjwzmQNBxlKBTZdEoEGenzUKpwjx7-tMtfCnD9PkZ4HUtYOpsHwc7K8zbionbULN-tZNRndhen44UVu0rDu8nqIcpnPT3wBenmVHRQcgzkzlNK5Z2RfT4SXR0LQhhxt-nktGFHujpGNL69Si20bKfwmhx1cXKhg8jJCrTZxenEdzrHVQrDwxsXZFYZjOkjyeXQSafpQBE_lgKA7aig50EMvUT8DZbm7mwp9SmX3DEgW4mh7hx8lks" />
              </div>
              <span className="text-xs text-gray-400 font-mono mb-2 block">02</span>
              <h4 className="text-xl mb-3">Deep Cleaning</h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">A complete reset for kitchens, bathrooms, skirting boards and hidden surfaces.</p>
              <span className="text-[10px] uppercase tracking-widest font-bold flex items-center">View <span className="ml-1">→</span></span>
            </Link>
            <Link href="/services/end-of-tenancy-cleaning" className="group service-card cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="End of Tenancy" className="w-full h-full object-cover transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz-r2zH3hma-rbY_LldPc8ztFaui2_AoJ_OZUu9xJ7Qx3EquHb6wIAI9yBA_nkrHgcvvWBGnk79_ZTulDIVxyE_CaRC5k7MN0tfkNoEmYcfSihIG0qFV3lWkZufzlxl3YXOzhvpFml9Wusps-bto6NK1crrdniAoXtv20FRMCooXVzRe5DWvRJVDl_cS0BEsjDVi9EvV0did3B4zVHWSI0_RWq0t8wi0xImZ_ST_alxR199BUImLz6vQZGWzDxncvFbZhau4VpDYg" />
              </div>
              <span className="text-xs text-gray-400 font-mono mb-2 block">03</span>
              <h4 className="text-xl mb-3">End Of Tenancy</h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">Move in or move out with confidence.</p>
              <span className="text-[10px] uppercase tracking-widest font-bold flex items-center">View <span className="ml-1">→</span></span>
            </Link>
            <Link href="/services/office-commercial-cleaning" className="group service-card cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Office Cleaning" className="w-full h-full object-cover transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTtINzcUgooJjqPZCg_sf2MRVsP5cINo4WfH019Epy9f25tP0fBCMihCIxzRWX5_eJ4gBnrN50hPGnDDlj3YdZD5hkxULxFmUNrPntqkeo5Y-Fq4EZswkzVM8a0oe4SVFlGEfJWn4Mqvx5XH5i3fymkhyBHXoi2LAGUMFatpZe1HXQcpzZoKnti8CS_BQ1L8mw9f7NpaoaW83T9kMY5cgLYC3e3qRfiWtatQjSwQDb4ZIXjiDvvDZBayr7ZHzFW_se06UWyDwhqMI" />
              </div>
              <span className="text-xs text-gray-400 font-mono mb-2 block">04</span>
              <h4 className="text-xl mb-3">Office &amp; Commercial</h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">Reliable commercial cleaning before your team arrives.</p>
              <span className="text-[10px] uppercase tracking-widest font-bold flex items-center">View <span className="ml-1">→</span></span>
            </Link>
            <Link href="/services/carpet-upholstery-cleaning" className="group service-card cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Carpet Cleaning" className="w-full h-full object-cover transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-msQDM9qrXpegovRC_I4b3tMGLz02jt74azVlZLDnh8__q9RRyGBd8WZbMBNMil97kLmpO3pBk9Vmnsc-Ouu9jyIgdLWh4F9IMgSesmfPK1XRHxmt_wNw8qBdYXWdix2jq7Q9wZxU2H9GrLPDWssO00gWUloiHmvPSqSTOJYZLCcO8miVdbBNntmxYU_62t5-JdKI0Sa3pmGKmpYoqjCBYrtTt8xhzJFKaoFsMvtx3jYEsqjZ96oULxkCDQ8zQZioiDdtwotmisk" />
              </div>
              <span className="text-xs text-gray-400 font-mono mb-2 block">05</span>
              <h4 className="text-xl mb-3">Carpet &amp; Upholstery</h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">Professional fabric and fibre care.</p>
              <span className="text-[10px] uppercase tracking-widest font-bold flex items-center">View <span className="ml-1">→</span></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Recent Projects ── */}
      <section className="py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gray-400 mb-4">Recent Projects</p>
            <h2 className="text-5xl">Results that<br />speak quietly.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Luxury Home" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgwqWlh67fSy5If-MgKiTzaNGc1Mefhkmek2K4lFcfF6vOy5cpZGx4qUIj1AyXQSlCzBPAX0BIydJjVl9Dt5_20u4rshqyyB8pFtPd7oPbILsWKQxFZn3GpfTdYm-tXs6dedkXArZmCimGQwR6jvrJJYaV16FU6lvNvx_JtgwMWMMCHTMEF7g-74UwT64JSDexDIHVkzIWfr8aoBJRdPfIn_9bfnM93wCXk3MKAQCr5akeI77Gy8KuWbn1hZ4pJfKae1TWuFOA9YI" />
              </div>
              <p className="text-xs font-semibold text-gray-400">Luxury Home</p>
            </div>
            <div>
              <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Executive Office" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTtINzcUgooJjqPZCg_sf2MRVsP5cINo4WfH019Epy9f25tP0fBCMihCIxzRWX5_eJ4gBnrN50hPGnDDlj3YdZD5hkxULxFmUNrPntqkeo5Y-Fq4EZswkzVM8a0oe4SVFlGEfJWn4Mqvx5XH5i3fymkhyBHXoi2LAGUMFatpZe1HXQcpzZoKnti8CS_BQ1L8mw9f7NpaoaW83T9kMY5cgLYC3e3qRfiWtatQjSwQDb4ZIXjiDvvDZBayr7ZHzFW_se06UWyDwhqMI" />
              </div>
              <p className="text-xs font-semibold text-gray-400">Executive Office</p>
            </div>
            <div>
              <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Short Stay Apartment" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2m5ikKzLqrLW-RKGSL2MoIMNjwzmQNBxlKBTZdEoEGenzUKpwjx7-tMtfCnD9PkZ4HUtYOpsHwc7K8zbionbULN-tZNRndhen44UVu0rDu8nqIcpnPT3wBenmVHRQcgzkzlNK5Z2RfT4SXR0LQhhxt-nktGFHujpGNL69Si20bKfwmhx1cXKhg8jJCrTZxenEdzrHVQrDwxsXZFYZjOkjyeXQSafpQBE_lgKA7aig50EMvUT8DZbm7mwp9SmX3DEgW4mh7hx8lks" />
              </div>
              <p className="text-xs font-semibold text-gray-400">Short Stay Apartment</p>
            </div>
            <div>
              <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="End Of Tenancy" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz-r2zH3hma-rbY_LldPc8ztFaui2_AoJ_OZUu9xJ7Qx3EquHb6wIAI9yBA_nkrHgcvvWBGnk79_ZTulDIVxyE_CaRC5k7MN0tfkNoEmYcfSihIG0qFV3lWkZufzlxl3YXOzhvpFml9Wusps-bto6NK1crrdniAoXtv20FRMCooXVzRe5DWvRJVDl_cS0BEsjDVi9EvV0did3B4zVHWSI0_RWq0t8wi0xImZ_ST_alxR199BUImLz6vQZGWzDxncvFbZhau4VpDYg" />
              </div>
              <p className="text-xs font-semibold text-gray-400">End Of Tenancy</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gray-400 mb-4">How It Works</p>
              <h2 className="text-5xl">Luxury cleaning<br />without the friction.</h2>
            </div>
            <Link href="/request-a-quote" className="bg-[#607d8b] text-white px-8 py-4 text-[11px] uppercase tracking-widest font-bold hover:brightness-110">
              Request Quote
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-6 p-6 border-l border-gray-100">
              <div className="w-10 flex flex-col items-center">
                <svg className="w-6 h-6 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
                <span className="text-xs font-mono text-gray-300">01</span>
              </div>
              <p className="text-xs font-semibold text-gray-600 leading-snug">Tell us about<br />the property.</p>
            </div>
            <div className="flex items-center space-x-6 p-6 border-l border-gray-100">
              <div className="w-10 flex flex-col items-center">
                <svg className="w-6 h-6 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
                <span className="text-xs font-mono text-gray-300">02</span>
              </div>
              <p className="text-xs font-semibold text-gray-600 leading-snug">Receive a clear<br />fixed quote.</p>
            </div>
            <div className="flex items-center space-x-6 p-6 border-l border-gray-100">
              <div className="w-10 flex flex-col items-center">
                <svg className="w-6 h-6 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
                <span className="text-xs font-mono text-gray-300">03</span>
              </div>
              <p className="text-xs font-semibold text-gray-600 leading-snug">Our team arrives<br />fully briefed.</p>
            </div>
            <div className="flex items-center space-x-6 p-6 border-l border-gray-100">
              <div className="w-10 flex flex-col items-center">
                <svg className="w-6 h-6 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
                <span className="text-xs font-mono text-gray-300">04</span>
              </div>
              <p className="text-xs font-semibold text-gray-600 leading-snug">Enjoy a perfectly<br />prepared space.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Value Props ── */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 mb-6 flex items-center justify-center border border-gray-200 rounded-full">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
            <h5 className="text-sm font-bold uppercase tracking-wider mb-3">Vetted Teams</h5>
            <p className="text-xs text-gray-500 leading-relaxed px-4">Every cleaner is referenced, screened and trained to our exacting standards.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 mb-6 flex items-center justify-center border border-gray-200 rounded-full">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
            <h5 className="text-sm font-bold uppercase tracking-wider mb-3">Fully Insured</h5>
            <p className="text-xs text-gray-500 leading-relaxed px-4">Complete peace of mind with full public liability insurance.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 mb-6 flex items-center justify-center border border-gray-200 rounded-full">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
            <h5 className="text-sm font-bold uppercase tracking-wider mb-3">Fixed Quotes</h5>
            <p className="text-xs text-gray-500 leading-relaxed px-4">No hidden fees or surprise charges. What we quote is what you pay.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 mb-6 flex items-center justify-center border border-gray-200 rounded-full">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
            <h5 className="text-sm font-bold uppercase tracking-wider mb-3">Responsive Support</h5>
            <p className="text-xs text-gray-500 leading-relaxed px-4">Average response time under two hours, every day of the week.</p>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gray-400 mb-12">Client Works</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="border-l-2 border-scrub-gold pl-8">
              <div className="text-scrub-gold text-lg mb-4">★★★★★</div>
              <p className="text-lg italic font-serif mb-6 leading-relaxed">&ldquo;The team did not simply clean the property. They restored the feeling of the house.&rdquo;</p>
              <p className="text-[10px] uppercase tracking-widest font-bold">Private Client • London</p>
            </div>
            <div className="border-l-2 border-scrub-gold pl-8">
              <div className="text-scrub-gold text-lg mb-4">★★★★★</div>
              <p className="text-lg italic font-serif mb-6 leading-relaxed">&ldquo;Professional, punctual and exceptionally thorough.&rdquo;</p>
              <p className="text-[10px] uppercase tracking-widest font-bold">Property Manager</p>
            </div>
            <div className="border-l-2 border-scrub-gold pl-8">
              <div className="text-scrub-gold text-lg mb-4">★★★★★</div>
              <p className="text-lg italic font-serif mb-6 leading-relaxed">&ldquo;Our office has never looked better.&rdquo;</p>
              <p className="text-[10px] uppercase tracking-widest font-bold">Business Owner</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products & Franchise ── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gray-400 mb-4">Professional Products</p>
                <h2 className="text-4xl">Professional products<br />without the warehouse feeling.</h2>
              </div>
              <Link href="/shop" className="text-[10px] uppercase tracking-widest font-bold border-b border-gray-900 pb-1">
                Shop All Products →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="group">
                <div className="aspect-square bg-gray-50 mb-4 flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Microfibre Set" className="group-hover:scale-110 transition-transform duration-500 p-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgwqWlh67fSy5If-MgKiTzaNGc1Mefhkmek2K4lFcfF6vOy5cpZGx4qUIj1AyXQSlCzBPAX0BIydJjVl9Dt5_20u4rshqyyB8pFtPd7oPbILsWKQxFZn3GpfTdYm-tXs6dedkXArZmCimGQwR6jvrJJYaV16FU6lvNvx_JtgwMWMMCHTMEF7g-74UwT64JSDexDIHVkzIWfr8aoBJRdPfIn_9bfnM93wCXk3MKAQCr5akeI77Gy8KuWbn1hZ4pJfKae1TWuFOA9YI" />
                </div>
                <h5 className="text-[10px] font-bold uppercase tracking-wider mb-1">Microfibre Set</h5>
                <p className="text-[9px] text-gray-500 mb-2">Professional finishing cloths</p>
                <p className="text-[10px] font-bold">£42.00</p>
              </div>
              <div className="group">
                <div className="aspect-square bg-gray-50 mb-4 flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Steam Mop Pro" className="group-hover:scale-110 transition-transform duration-500 p-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTtINzcUgooJjqPZCg_sf2MRVsP5cINo4WfH019Epy9f25tP0fBCMihCIxzRWX5_eJ4gBnrN50hPGnDDlj3YdZD5hkxULxFmUNrPntqkeo5Y-Fq4EZswkzVM8a0oe4SVFlGEfJWn4Mqvx5XH5i3fymkhyBHXoi2LAGUMFatpZe1HXQcpzZoKnti8CS_BQ1L8mw9f7NpaoaW83T9kMY5cgLYC3e3qRfiWtatQjSwQDb4ZIXjiDvvDZBayr7ZHzFW_se06UWyDwhqMI" />
                </div>
                <h5 className="text-[10px] font-bold uppercase tracking-wider mb-1">Steam Mop Pro</h5>
                <p className="text-[9px] text-gray-500 mb-2">Hard floor maintenance</p>
                <p className="text-[10px] font-bold">£189.00</p>
              </div>
              <div className="group">
                <div className="aspect-square bg-gray-50 mb-4 flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Citrus Pro Degreaser" className="group-hover:scale-110 transition-transform duration-500 p-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2m5ikKzLqrLW-RKGSL2MoIMNjwzmQNBxlKBTZdEoEGenzUKpwjx7-tMtfCnD9PkZ4HUtYOpsHwc7K8zbionbULN-tZNRndhen44UVu0rDu8nqIcpnPT3wBenmVHRQcgzkzlNK5Z2RfT4SXR0LQhhxt-nktGFHujpGNL69Si20bKfwmhx1cXKhg8jJCrTZxenEdzrHVQrDwxsXZFYZjOkjyeXQSafpQBE_lgKA7aig50EMvUT8DZbm7mwp9SmX3DEgW4mh7hx8lks" />
                </div>
                <h5 className="text-[10px] font-bold uppercase tracking-wider mb-1">Citrus Pro Degreaser</h5>
                <p className="text-[9px] text-gray-500 mb-2">Kitchen and utility reset</p>
                <p className="text-[10px] font-bold">£24.99</p>
              </div>
              <div className="group">
                <div className="aspect-square bg-gray-50 mb-4 flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Cordless HEPA Vacuum" className="group-hover:scale-110 transition-transform duration-500 p-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz-r2zH3hma-rbY_LldPc8ztFaui2_AoJ_OZUu9xJ7Qx3EquHb6wIAI9yBA_nkrHgcvvWBGnk79_ZTulDIVxyE_CaRC5k7MN0tfkNoEmYcfSihIG0qFV3lWkZufzlxl3YXOzhvpFml9Wusps-bto6NK1crrdniAoXtv20FRMCooXVzRe5DWvRJVDl_cS0BEsjDVi9EvV0did3B4zVHWSI0_RWq0t8wi0xImZ_ST_alxR199BUImLz6vQZGWzDxncvFbZhau4VpDYg" />
                </div>
                <h5 className="text-[10px] font-bold uppercase tracking-wider mb-1">Cordless HEPA Vacuum</h5>
                <p className="text-[9px] text-gray-500 mb-2">Fine dust and daily debris</p>
                <p className="text-[10px] font-bold">£345.00</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 bg-gray-50 p-10 flex flex-col justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gray-400 mb-4">Join Scrubskwad</p>
              <h3 className="text-4xl mb-6">Build your cleaning business with us.</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-8">Access premium clients, flexible schedules and ongoing support.</p>
            </div>
            <Link href="/franchise" className="block w-full bg-scrub-dark text-white py-4 text-[11px] uppercase tracking-widest font-bold hover:brightness-110 text-center">
              Become A Partner
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 bg-[#e2ddd5]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <h2 className="text-4xl">Let Scrubskwad make the<br />property feel finished.</h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <p className="text-xs font-semibold max-w-[200px]">Request a quote and receive a response within two hours.</p>
            <Link href="/request-a-quote" className="bg-[#607d8b] text-white px-10 py-5 text-[11px] uppercase tracking-widest font-bold hover:brightness-110">
              Book Your Clean
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
