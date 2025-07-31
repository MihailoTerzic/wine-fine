import React from "react";
import { FiPhone } from "react-icons/fi"; // Import phone icon

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-[100svh] object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/video6.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-[100svh] bg-black/50" />

      {/* Left Content */}
      <div className="relative z-10 flex flex-col items-start justify-end md:pl-20 h-full text-white px-4 font-serif">
        <h1 className="text-6xl sm:text-7xl md:text-9xl leading-none">
          Wine <br /> & Fine
        </h1>
      </div>

      {/* Right Bottom Card */}
      <div className="absolute xl:block hidden bottom-6 right-6 z-10 p-6 md:p-8 w-[90%] max-w-sm md:max-w-md text-white">
        <div className="space-y-4 text-base md:text-lg mb-6">
          <div className="flex justify-between border-b border-white/40 pb-2">
            <span>Pon - Čet</span>
            <span className="font-medium">08:00 - 00:00</span>
          </div>
          <div className="flex justify-between border-b border-white/40 pb-2">
            <span>Pet - Sub</span>
            <span className="font-medium">08:00 - 01:00</span>
          </div>
          <div className="flex justify-between">
            <span>Nedelja</span>
            <span className="text-white font-semibold">Zatvoreno</span>
          </div>
        </div>

        {/* Phone Section */}
        <p className="text-lg text-white font-serif flex items-center justify-end gap-4">
          <FiPhone className="text-white" size={25} />
          <a
            href="tel:+381611315483"
            className="underline hover:text-gray-300 transition"
          >
            +381 61 131 5483
          </a>
        </p>
      </div>
    </section>
  );
}
