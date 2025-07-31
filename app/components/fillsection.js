import React from 'react'

export default function Fillsection() {
  return (
        
      <div className="w-full rounded-xl relative text-white text-lg font-serif leading-relaxed py-20 px-4 sm:px-8">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('/images/img4.jpg')] bg-cover bg-center rounded-xl" />
        <div className="absolute inset-0 bg-black/80 rounded-xl" />

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-12 md:p-16 max-w-[90rem] mx-auto">
          <div className="max-w-2xl xl:ml-auto xl:text-end font-thin">
            <h2 className="mb-6 text-3xl lg:text-4xl py-4">
              Događaji i atmosfera
            </h2>
            <p className='text-thin '>
            Vikendom Wine & Fine postaje više od vinskog bara — postaje mesto susreta, muzike i novih ukusa. Gotovo svakog petka ili subote predstavljamo novu etiketu ili vinariju, uz gostovanje predstavnika vinarije, muziku uživo ili DJ setove, i prijateljsku, opuštenu atmosferu.
            </p>
            <p className="mt-4">
              Bilo da ste u prolazu, u potrazi za mestom za prvi sastanak, mini proslavu ili samo želite da završite dan uz dobru čašu vina — svratite.
Wine & Fine je više od vinskog bara. To je mesto za vaša mala slavlja, spontana okupljanja i sve one fine večeri koje se pamte.

            </p>
          </div>
        </div>
      </div>
  )
}
