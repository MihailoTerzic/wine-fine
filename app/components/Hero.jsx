import React from 'react'

export default function Hero() {
  return (
     <section id="home" className="relative h-screen w-full">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/video3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-end  h-full text-white px-4 font-serif">
        <h1 className="text-8xl md:text-9xl mb-8 leading-none">
  <div>Wine</div>
  <div>& Fine</div>
</h1>
        
      </div>
    </section>
  )
}
