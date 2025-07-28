import React from 'react'

export default function Fillsection() {
  return (
        
      <div className="w-full rounded-xl relative text-white text-lg font-serif leading-relaxed py-20 px-4 sm:px-8">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('/images/img4.jpg')] bg-cover bg-center rounded-xl" />
        <div className="absolute inset-0 bg-black/60 rounded-xl" />

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-12 md:p-16 max-w-[90rem] mx-auto">
          <div className="max-w-2xl xl:ml-auto xl:text-end">
            <h2 className="mb-6 text-3xl lg:text-4xl py-4">
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
  )
}
