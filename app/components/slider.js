'use client'
import Image from 'next/image'
import React, { useState, useRef } from 'react'

const images = [
  { src: '/images/real/img2.jpeg', alt: 'Wine & Fine vino u basti' },
  { src: '/images/real/img3.jpeg', alt: 'Wine & Fine ljudi' },
  { src: '/images/real/img4.jpeg', alt: 'Wine & Fine basta' },
  { src: '/images/real/img5.jpeg', alt: 'Wine & Fine basta' },
  { src: '/images/real/img9.jpeg', alt: 'Wine & Fine znak' },
  { src: '/images/real/img10.jpeg', alt: 'Wine & Fine' },
  { src: '/images/real/img11.jpeg', alt: 'Wine & Fine' },
  { src: '/images/real/img13.jpeg', alt: 'Wine & Fine' },
]

export default function ImageSlider() {
  const [current, setCurrent] = useState(0)

  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))

  // Swipe controls
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
      diff > 0 ? nextSlide() : prevSlide()
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto relative overflow-hidden py-26 shadow-lg">
      {/* Slider */}
      <div
        className="flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative aspect-video"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-3 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-3 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? 'bg-white' : 'bg-white/40'
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  )
}
