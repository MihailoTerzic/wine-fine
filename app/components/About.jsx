import Image from 'next/image'
import React from 'react'
import InstaFeed from './InstaFeed'

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black flex flex-col items-center px-6 md:px-20 pt-20 gap-16 pb-12">
      <h1 className="text-4xl md:text-5xl font-serif text-white text-center z-10">
        Vaš Kutak za Vino i Uspomene
      </h1>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-white text-lg md:text-xl font-serif leading-relaxed">
          <p>
            U srcu Vračara, Wine & Fine je mesto gde vino postaje priča, a svaki gutljaj vodi na putovanje kroz vinograde sveta. 
            Naša pažljivo odabrana kolekcija obuhvata poznate svetske etikete, ali i skrivene dragulje lokalnih vinara.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/img2.jpg"
            alt="Wine selection"
            width={800}
            height={600}
            className="rounded-xl shadow-lg w-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="md:w-1/2 text-white text-lg md:text-xl font-serif leading-relaxed">
          <p>
            U prijatnoj i toploj atmosferi našeg kafića, uživanje u vinu postaje trenutak za sećanje, bilo da ste u društvu prijatelja ili sami sa omiljenom čašom.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/img3.jpg"
            alt="Wine and ambiance"
            width={800}
            height={600}
            className="rounded-xl shadow-lg w-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-white text-lg md:text-xl font-serif leading-relaxed">
          <p>
            Naš tim posvećenih somelijera rado će vam pomoći da otkrijete nove ukuse i naučite više o svetu vina, jer verujemo da je svaka boca prilika za slavlje.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/img4.jpg"
            alt="Sommelier experience"
            width={800}
            height={600}
            className="rounded-xl shadow-lg w-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Instagram Feed */}
      <InstaFeed />

      {/* CTA */}
      <div className="text-white rounded-2xl px-8 py-6 max-w-2xl text-center shadow-lg">
        <p className="text-2xl font-serif italic">
          Pridružite nam se i doživite vino na potpuno nov način
        </p>
      </div>
    </section>
  )
}
