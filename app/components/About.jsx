import Image from 'next/image'
import React from 'react'
import InstaFeed from './InstaFeed'

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-black flex flex-col items-center py-16 lg:py-24 gap-20 w-full"
    >
      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-[90rem] mx-auto px-4 sm:px-8">
        <div className="w-full lg:w-1/2 text-white text-lg md:text-xl font-serif leading-relaxed">
          <h1 className="mb-8 text-3xl lg:text-4xl">
            Vaš Kutak za Vino na Vračaru 
          </h1>
          <p>
            U srcu Vračara, Wine & Fine vinski bar u Beogradu je mesto gde vino priča svoju jedinstvenu priču. 
            Svaki gutljaj vodi vas na putovanje kroz najbolje vinograde sveta i otkriva raznovrsne ukuse kako poznatih svetskih etiketa.
          </p>
          
          <button className="text-white hover:text-black bg-transparent border border-white hover:bg-white/80 mt-6 font-serif px-6 py-3 transition-all duration-300">
            <a
              href="https://simplebooklet.com/winefine#page=1"
              className="text-white font-serif"
              aria-label="Meni - Wine & Fine"
            >
              Naša ponuda vina
            </a>
          </button>
        </div>

        {/* Working hours block */}
      <div className="w-full block lg:hidden lg:w-1/2 px-2 mt-10 lg:mt-0">
  <div className="text-white w-full">
    {/* Header */}
    <h3 className="text-2xl font-serif mb-6 border-b border-white/60 pb-2">
      Radno Vreme
    </h3>

    <div className="space-y-4 text-base md:text-lg mb-4">
      <div className="flex justify-between border-b border-white/40 pb-2">
        <span>Pon - Čet</span>
        <span className="font-medium">08:00 - 00:00</span>
      </div>
      <div className="flex justify-between border-b border-white/40 pb-2">
        <span>Pet - Sub</span>
        <span className="font-medium">08:00 - 01:00</span>
      </div>
      <div className="flex justify-between">
        <span>Nedelja</span>
        <span className="text-white font-semibold">Zatvoreno</span>
      </div>
    </div>

    {/* Phone Number */}
    <div className="flex justify-between border-t border-white/40 pt-2 mt-6 text-base md:text-lg">
      <span>Kontakt telefon</span>
      <a
        href="tel:+381611315483"
        className="font-medium underline hover:text-white"
      >
        +381611315483
      </a>
    </div>
  </div>
</div>

        <div className="w-full hidden lg:block lg:w-1/2">
          <Image
            src="/images/real/img5.jpeg"
            alt="Vinski bar Wine & Fine na Vračaru"
            width={800}
            height={600}
            className="rounded-md shadow-lg w-full"
            loading="lazy"
          />

      </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-12 w-full max-w-[90rem] mx-auto px-4 sm:px-8">
        <div className="w-full md:w-1/2 text-white text-lg font-serif leading-relaxed">
          <h2 className="mb-6 text-3xl lg:text-4xl">
            Uživanje u vrhunskim vinima u prijatnoj atmosferi
          </h2>
          <p>
            Posetite nas i uživajte u bogatoj ponudi crvenih, belih i roze vina u opuštenoj atmosferi. Bilo da ste strastveni poznavalac vina ili tek otkrivate svet vinskih aroma, kod nas ćete pronaći idealno vino za svaku priliku.
          </p>
          <button className="text-white bg-transparent border border-white hover:bg-white/80 mt-6 font-serif px-6 py-3 transition-all duration-300">
            <a
              href="/#contact"
              className="text-white font-serif"
              aria-label="Galerija - Wine & Fine"
            >
              Rezervišite svoj sto
            </a>
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/images/real/img4.jpeg"
            alt="Topla i prijatna atmosfera vinskog bara Wine & Fine na Vračaru"
            width={800}
            height={600}
            className="rounded-md shadow-lg w-full"
            loading="lazy"
          />
        </div>
      </div>

 
    </section>
  )
}
