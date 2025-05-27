import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <section id='about' className='relative  w-full bg-black flex flex-col justify-center px-6 md:px-20 pt-20'>
      {/* Optional: Background image darkened */}
    

      <h1 className='z-10 relative text-4xl md:text-5xl font-serif text-white mb-6'>
        Vaš Kutak za Vino i Uspomene
      </h1>

      <p className='z-10 relative text-white max-w-3xl text-lg md:text-xl leading-relaxed font-serif'>
        U srcu Vračara, Wine & Fine je mesto gde vino postaje priča, a svaki gutljaj vodi na putovanje kroz vinograde sveta. 
        Naša pažljivo odabrana kolekcija obuhvata poznate svetske etikete, ali i skrivene dragulje lokalnih vinara.
      </p>

      <Image
      src={'/images/img2.jpg'} // replace with your image path
      alt='Wine selection'
      width={800}
      height={600}
      className='p-10'
      />

      <p className='z-10 relative mt-4 text-white max-w-3xl text-lg md:text-xl leading-relaxed font-serif'>
        U prijatnoj i toploj atmosferi našeg kafića, uživanje u vinu postaje trenutak za sećanje, bilo da ste u društvu prijatelja ili sami sa omiljenom čašom.
      </p>

        <Image
      src={'/images/img3.jpg'} // replace with your image path
      alt='Wine selection'
      width={800}
      height={600}
      className='p-10'
      />

      <p className='z-10 relative mt-4 text-white max-w-3xl text-lg md:text-xl leading-relaxed font-serif'>
        Naš tim posvećenih somelijera rado će vam pomoći da otkrijete nove ukuse i naučite više o svetu vina, jer verujemo da je svaka boca prilika za slavlje.
      </p>

        <Image
      src={'/images/img4.jpg'} // replace with your image path
      alt='Wine selection'
      width={800}
      height={600}
      className='p-10'
      />

      <p className='z-10 relative mt-8 text-white font-serif italic max-w-3xl'>
        Pridružite nam se i doživite vino na potpuno nov način — sa srcem i strasti.
      </p>
    </section>
  )
}
