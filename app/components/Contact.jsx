'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import InstaFeed from './InstaFeed'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [modal, setModal] = useState({ isOpen: false, message: '', isError: false })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      
      console.log('Email successfully sent:', result.text)
      setModal({ isOpen: true, message: 'Poruka je uspešno poslata!', isError: false })
      setFormData({ name: '', email: '', message: '' })

    } catch (error) {
      console.error('Email send error:', error)
      setModal({ isOpen: true, message: 'Došlo je do greške pri slanju poruke. Pokušajte ponovo.', isError: true })
    }
  }

  const closeModal = () => setModal({ ...modal, isOpen: false })

  return (
    <section id='contact' className='relative w-full min-h-screen bg-black'>
      {/* Background image */}
      <Image
        src='/images/img1.jpg'
        className='absolute top-0 left-0 w-full h-full object-cover'
        alt='Vas Kutak za Vračaru'
        fill
        quality={100}
        loading="lazy"
      />

      {/* Dark overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-black/60 z-0' />

      {/* Content container */}
      <div className='relative z-10 flex flex-col items-center justify-center px-4 py-12 max-w-4xl mx-auto space-y-12'>

        {/* Google Map */}
        <div className='w-full rounded-2xl overflow-hidden shadow-lg border border-white/10'>
          <iframe
            title='Vino Cafe Location'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.060203498627!2d20.4727836!3d44.79996169999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a707527ee298b%3A0xf484870d392da854!2sKursulina%2012%2C%20Beograd%2011000!5e0!3m2!1sen!2srs!4v1748336993490!5m2!1sen!2srs"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="text-white text-center mt-8 font-serif">
          <h3 className="text-2xl mb-2">Radno vreme</h3>
          <p>Pon - Čet: 08:00 - 00:00</p>
          <p>Pet - Sub: 08:00 - 01:00</p>
          <p>Nedelja: Zatvoreno</p>
          
        </div>

  <p className="text-xl text-white font-serif flex items-center gap-4">
  <svg
    fill="#ffffff"
    height="30px"
    width="30px"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 473.806 473.806"
    stroke="#ffffff"
    strokeWidth="0.00473806"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <g>
          <path d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4
          c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8
          c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6
          c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5
          c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26
          c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9
          c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806
          C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20
          c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6
          c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1
          c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3
          c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5
          c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8
          c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9
          l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1
          C420.456,377.706,420.456,388.206,410.256,398.806z"/>
          <path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2
          c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11
          S248.656,111.506,256.056,112.706z"/>
          <path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11
          c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2
          c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"/>
        </g>
      </g>
    </g>
  </svg>
  <a href="tel:+381611315483" className="underline hover:text-gray-300 transition">+381611315483</a>
</p>


        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className='bg-white/5 backdrop-blur-md p-8 rounded-2xl w-full space-y-6  text-white font-serif'
        >
          <h2 className='text-3xl text-center mb-4'>Kontaktirajte Nas</h2>

          <input
            type='text'
            name='name'
            placeholder='Vaše ime'
            value={formData.name}
            onChange={handleChange}
            required
            className='w-full p-3 bg-transparent border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder-white/60'
          />

          <input
            type='email'
            name='email'
            placeholder='Vaš email'
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full p-3 bg-transparent border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder-white/60'
          />

          <textarea
            name='message'
            rows={5}
            placeholder='Vaša poruka'
            value={formData.message}
            onChange={handleChange}
            required
            className='w-full p-3 bg-transparent border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder-white/60'
          />

          <button
            type='submit'
            className='w-full py-3 mt-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition'
          >
            Pošalji Poruku
          </button>
        </form>

        {/* Social Media */}
        <div className="flex space-x-6 mt-8 text-white text-2xl">
          <a
            href="https://www.instagram.com/wineandfine_belgrade"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM4.5 7.75A3.25 3.25 0 0 1 7.75 4.5h8.5a3.25 3.25 0 0 1 3.25 3.25v8.5a3.25 3.25 0 0 1-3.25 3.25h-8.5a3.25 3.25 0 0 1-3.25-3.25v-8.5ZM12 7.25A4.75 4.75 0 1 0 12 16.75 4.75 4.75 0 0 0 12 7.25Zm0 1.5a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5Zm4.88-.38a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25Z" />
            </svg>
          </a>

          <a
            href="https://www.tiktok.com/@wineandfine.vracar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:text-[#69C9D0] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 2c1.38 0 2.5 1.12 2.5 2.5v11.38c0 2.38-1.63 4.5-4 4.88-2.38.38-4.5-1.63-4.88-4-.38-2.38 1.63-4.5 4-4.88.46-.07.93-.1 1.38-.1V9.5c-.38 0-.75.02-1.13.07-3.63.55-6.13 3.95-5.5 7.63.63 3.63 4.06 6.13 7.69 5.5 3.38-.63 5.94-3.63 5.94-7.13V6.19c.69.44 1.5.75 2.38.88v-2c-.94-.12-1.75-.5-2.38-1.06-.63-.63-1-1.44-1.06-2.38H12Z" />
            </svg>
          </a>

         <a
  href="https://www.facebook.com/profile.php?id=61575886383357#"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Facebook - Wine & Fine"
  className=" hover:text-[#69C9D0] transition"
>
  <svg
    fill="currentColor"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
  >
    <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" />
  </svg>
</a>
        </div>
      </div>

      {/* Modal */}
      {modal.isOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white/50 rounded-lg max-w-sm w-full p-6 mx-4 relative"
            onClick={(e) => e.stopPropagation()} // prevent modal close on clicking inside
          >
            <p className={`text-center text-lg font-serif font-semibold mb-4 ${modal.isError ? 'text-red-800' : 'text-green-600'}`}>
              {modal.message}
            </p>
            <button
              onClick={closeModal}
              className="block mx-auto mt-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              Zatvori
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
