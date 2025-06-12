import Image from 'next/image'
import React from 'react'
import InstaFeed from './InstaFeed'

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-black flex flex-col items-center px-6 md:px-20 pt-20 gap-16 pb-12"
    >
      <h1 className="text-4xl md:text-5xl font-serif text-white text-center z-10">
        Vaš Kutak za Vino na Vračaru — Wine & Fine
      </h1>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-white text-lg md:text-xl xl:text-3xl font-serif leading-relaxed">
          <h2 className="mb-4 text-3xl">
            Vinski bar sa pažljivo odabranom kolekcijom vina
          </h2>
          <p>
            U srcu Vračara, <strong>Wine & Fine vinski bar u Beogradu</strong> je mesto gde vino priča svoju jedinstvenu priču. 
            Svaki gutljaj vodi vas na putovanje kroz najbolje vinograde sveta i otkriva raznovrsne ukuse kako poznatih svetskih etiketa, tako i dragulja 
            vrhunskih lokalnih vinara sa područja Srbije.
          </p>
         
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
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="md:w-1/2 text-white text-lg md:text-xl xl:text-3xl font-serif leading-relaxed">
          <h2 className="mb-4 text-3xl">
            Uživanje u vrhunskim vinima u prijatnoj atmosferi
          </h2>
           <p>
            Posetite nas i uživajte u bogatoj ponudi <em>crvenih, belih i roze vina</em> u opuštenoj atmosferi. Bilo da ste strastveni poznavalac vina ili tek otkrivate svet vinskih aroma, kod nas ćete pronaći idealno vino za svaku priliku.
          </p>
    <a
  href="https://simplebooklet.com/winefine#page=1"
  className="text-white font-serif text-4xl lg:text-2xl  mt-10 block underline text-center lg:border-transparent hover:border-yellow-400 transition-all duration-300"
  aria-label="Meni - Wine & Fine"
>
  Naša ponuda vina
</a>
        </div>
        <div className="md:w-1/2">
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
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-white text-lg md:text-xl xl:text-3xl font-serif leading-relaxed">
          <h2 className="mb-4 text-3xl">
            Stručni somelijeri i vinske degustacije na Vračaru
          </h2>
          <p>
            Naš tim posvećenih somelijera rado će vam pomoći da otkrijete nove ukuse i naučite više o svetu vina. Verujemo da je svaka boca prilika za slavlje i da vinska kultura zaslužuje posebnu pažnju.
          </p>
          <p>
            Pridružite se našim redovnim <a href="/dogadjaji" className="underline hover:text-gray-300">degustacijama vina</a> i događajima, i uživajte u nezaboravnom vinskom iskustvu u srcu Beograda.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/img4.jpg"
            alt="Somelijer pomaže gostima da odaberu vino u vinskom baru Wine & Fine na Vračaru"
            width={800}
            height={600}
            className="rounded-xl shadow-lg w-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Instagram Feed */}
      <InstaFeed />

      {/* Final CTA */}
      <div className="text-white rounded-2xl px-8 py-6 text-center shadow-lg">
        <h3 className="text-4xl font-serif italic">
          Pridružite nam se i doživite vino na potpuno nov način!
        </h3>
      </div>
    </section>
  )
}
