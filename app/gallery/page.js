'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const images = [
  { src: '/images/img1.jpg', alt: 'Wine bottles on wooden shelves' },
  { src: '/images/img2.jpg', alt: 'Elegant wine glasses on table' },
  { src: '/images/img3.jpg', alt: 'Cozy café interior with ambient lighting' },
  { src: '/images/img4.jpg', alt: 'Pouring red wine into a glass' },
  { src: '/images/img1.jpg', alt: 'Wine tasting event at Vino Café' },
  { src: '/images/img2.jpg', alt: 'Close-up of a wine bottle and cork' },
]

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (index) => {
    setCurrentIndex(index)
    setModalOpen(true)
  }

  const closeModal = () => setModalOpen(false)

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))

  const nextImage = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))

  return (
    <section id='gallery' className='py-16 px-4 bg-black text-white font-serif w-full min-h-screen'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-serif text-center mb-12'>Galerija</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
          {images.map(({ src, alt }, i) => (
            <div
              key={i}
              className='relative w-full aspect-square rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer'
              onClick={() => openModal(i)}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes='(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw'
                className='object-cover'
                priority={i < 3}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center'>
          <button onClick={closeModal} className='absolute top-5 right-5 text-white text-3xl'>✖</button>
          <button onClick={prevImage} className='absolute left-4 text-4xl text-white px-2' aria-label="Previous">‹</button>
          <div className='relative w-[90vw] max-w-3xl aspect-video'>
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className='object-contain'
            />
          </div>
          <button onClick={nextImage} className='absolute right-4 text-4xl text-white px-2' aria-label="Next">›</button>
        </div>
      )}
    </section>
  )
}
