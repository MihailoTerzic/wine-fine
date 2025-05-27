import Image from 'next/image'
import React from 'react'

const images = [
  { src: '/images/img1.jpg', alt: 'Wine bottles on wooden shelves' },
  { src: '/images/img2.jpg', alt: 'Elegant wine glasses on table' },
  { src: '/images/img3.jpg', alt: 'Cozy café interior with ambient lighting' },
  { src: '/images/img4.jpg', alt: 'Pouring red wine into a glass' },
  { src: '/images/img1.jpg', alt: 'Wine tasting event at Vino Café' },
  { src: '/images/img2.jpg', alt: 'Close-up of a wine bottle and cork' },
]

export default function Gallery() {
  return (
    <section id='gallery' className='py-16 px-4 bg-black text-white font-serif w-full min-h-screen'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-serif text-center mb-12'>Galerija</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
          {images.map(({ src, alt }, i) => (
            <div key={i} className='relative w-full aspect-square rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer'>
              <Image
                src={src}
                alt={alt}
                fill
                sizes='(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw'
                className='object-cover'
                priority={i < 3} // prioritize first few images
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
