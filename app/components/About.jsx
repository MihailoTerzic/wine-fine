import Image from 'next/image'
import React from 'react'
import InstaFeed from './InstaFeed'

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-black flex flex-col items-center py-26 gap-16"
    >
     
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center gap-10  max-w-7xl mx-auto px-6">
        <div className="md:w-1/2 text-white text-lg md:text-xl  font-serif leading-relaxed">
          <h1 className="mb-12 text-3xl">
            Vaš Kutak za Vino na Vračaru 
          </h1>
          <p className=''>
            U srcu Vračara,Wine & Fine vinski bar u Beogradu je mesto gde vino priča svoju jedinstvenu priču. 
            Svaki gutljaj vodi vas na putovanje kroz najbolje vinograde sveta i otkriva raznovrsne ukuse kako poznatih svetskih etiketa
          </p>
          
                <button className='"text-black bg-white/50 hover:bg-white/80 mt-5 font-serif px-6 py-3 rounded-full lg:border-transparent hover:border-yellow-400 transition-all duration-300'>
   <a
  href="https://simplebooklet.com/winefine#page=1"
 className='text-black font-serif'
  aria-label="Meni - Wine & Fine"
>
  Naša ponuda vina
</a>
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/img2.jpg"
            alt="Pažljivo odabrana kolekcija vina u vinskom baru Wine & Fine na Vračaru"
            width={800}
            height={600}
            className="rounded-xl shadow-lg w-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 pt-26 max-w-7xl mx-auto px-6">
        <div className="md:w-1/2 text-white text-lg  font-serif leading-relaxed">
          <h2 className="mb-4 text-3xl">
            Uživanje u vrhunskim vinima u prijatnoj atmosferi
          </h2>
           <p>
            Posetite nas i uživajte u bogatoj ponudi crvenih, belih i roze vina u opuštenoj atmosferi. Bilo da ste strastveni poznavalac vina ili tek otkrivate svet vinskih aroma, kod nas ćete pronaći idealno vino za svaku priliku.
          </p>
          <button className='"text-black bg-white/50 hover:bg-white/80 mt-5 font-serif px-6 py-3 rounded-full lg:border-transparent hover:border-yellow-400 transition-all duration-300'>
   <a
  href="/#contact"
 className='text-black font-serif'
  aria-label="Galerija - Wine & Fine"
>
  Rezervišite svoj sto
</a>
          </button>
 
        </div>
        <div className="md:w-1/2 pb-26">
          <Image
            src="/images/real/img4.jpeg"
            alt="Topla i prijatna atmosfera vinskog bara Wine & Fine na Vračaru"
            width={800}
            height={600}
            className="rounded-xl shadow-lg w-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Mid-Section CTA */}
      

    {/* Section 3 */}
<div className="w-full rounded-xl relative text-white text-lg font-serif leading-relaxed py-26">
  {/* Background image */}
  <div className="absolute inset-0 bg-[url('/images/img4.jpg')] bg-cover bg-center rounded-xl" />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60 rounded-xl" />

  {/* Content */}
  <div className="relative z-10 p-10 md:p-16 max-w-7xl  mx-auto">
    <div className="max-w-2xl xl:ml-auto xl:text-end">
      <h2 className="mb-4 text-3xl py-8">
        Stručni somelijeri i vinske degustacije
      </h2>
      <p>
        Naš tim posvećenih somelijera rado će vam pomoći da otkrijete nove ukuse i naučite više o svetu vina. Verujemo da je svaka boca prilika za slavlje i da vinska kultura zaslužuje posebnu pažnju.
      </p>
      <p className="mt-4">
        Pridružite se našim redovnim degustacijama vina i događajima, i uživajte u nezaboravnom vinskom iskustvu u srcu Beograda.
      </p>
    </div>
  </div>
</div>



      {/* Instagram Feed */}
      

     
    </section>
  )
}
