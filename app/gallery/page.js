'use client'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'

const images = [
  { src: '/images/real/img1.jpeg', alt: 'Wine & Fine vino' },
  { src: '/images/real/img2.jpeg', alt: 'Wine & Fine vino u basti' },
  { src: '/images/real/img3.jpeg', alt: 'Wine & Fine ljudi' },
  { src: '/images/real/img4.jpeg', alt: 'Wine & Fine basta ' },
  { src: '/images/real/img5.jpeg', alt: 'Wine & Fine basta' },
  { src: '/images/real/img6.jpeg', alt: 'Wine & Fine rakija' },
  { src: '/images/real/img7.jpeg', alt: 'Wine & Fine frape' },
  { src: '/images/real/img8.jpeg', alt: 'Wine & Fine meze' },
  { src: '/images/real/img9.jpeg', alt: 'Wine & Fine znak' },
  { src: '/images/real/img10.jpeg', alt: 'Wine & Fine ' },
  { src: '/images/real/img11.jpeg', alt: 'Wine & Fine ' },
  { src: '/images/real/img12.jpeg', alt: 'Wine & Fine ' },
  { src: '/images/real/img13.jpeg', alt: 'Wine & Fine ' },
  { src: '/images/real/img14.jpeg', alt: 'Wine & Fine ' },
]

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const [isAnimating, setIsAnimating] = useState(false); // New state for animation control

  const openModal = (index) => {
    setCurrentIndex(index)
    setModalOpen(true)
    setDirection(null); // Reset direction when opening the modal
  }

  const closeModal = () => {
    setModalOpen(false)
    setDirection(null)
    setIsAnimating(false);
  }

  const changeImage = (dir) => {
    if (isAnimating) return; // Prevent changing image during animation
    setIsAnimating(true);
    setDirection(dir)

    setCurrentIndex((prev) =>
      dir === 'next'
        ? (prev + 1) % images.length
        : (prev - 1 + images.length) % images.length
    )
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX
  }

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX
    handleSwipe()
  }

  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      diff > 0 ? changeImage('next') : changeImage('prev')
    }
  }

  const handleAnimationEnd = () => {
    setIsAnimating(false);
    setDirection(null); // Clear direction after animation
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalOpen) return;
      if (e.key === 'ArrowLeft') {
        changeImage('prev');
      } else if (e.key === 'ArrowRight') {
        changeImage('next');
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen, changeImage]);

  return (
    <section id='gallery' className='py-16 px-4 bg-black text-white font-serif w-full min-h-screen'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl text-center mb-12'>Galerija</h2>
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

      {modalOpen && (
        <div className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center overflow-hidden'>
          <button onClick={closeModal} className='absolute top-5 right-5 text-white text-3xl z-50'>✖</button>
          <button onClick={() => changeImage('prev')} className='absolute left-4 text-4xl text-white px-2 z-50'>‹</button>

          {/* MODIFIED IMAGE CONTAINER */}
          <div
            className='relative w-[95vw] max-w-6xl h-[70vh] md:h-[80vh] overflow-hidden' // Adjust h-[...] for height control
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              key={currentIndex}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className={`object-contain absolute transition-all duration-500
                ${direction === 'next' ? 'animate-slide-in-next' : ''}
                ${direction === 'prev' ? 'animate-slide-in-prev' : ''}
              `}
              onAnimationEnd={handleAnimationEnd}
            />
          </div>

          <button onClick={() => changeImage('next')} className='absolute right-4 text-4xl text-white px-2 z-50'>›</button>
        </div>
      )}
    </section>
  )
}