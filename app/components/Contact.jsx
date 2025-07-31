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
        <div className='w-full rounded-sm overflow-hidden shadow-lg border border-white/10'>
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

        

 


        {/* Contact Form */}
       <form
  onSubmit={handleSubmit}
  className="bg-white/5 backdrop-blur-md p-8 rounded-2xl w-full space-y-6 text-white font-serif"
>
  <h2 className="text-3xl text-center mb-6 border-b border-white/40 pb-4">
    Kontaktirajte Nas
  </h2>

  <input
    type="text"
    name="name"
    placeholder="Vaše ime"
    value={formData.name}
    onChange={handleChange}
    required
    className="w-full p-3 bg-transparent border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder-white/60 transition"
  />

  <input
    type="email"
    name="email"
    placeholder="Vaš email"
    value={formData.email}
    onChange={handleChange}
    required
    className="w-full p-3 bg-transparent border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder-white/60 transition"
  />

  <textarea
    name="message"
    rows={5}
    placeholder="Vaša poruka"
    value={formData.message}
    onChange={handleChange}
    required
    className="w-full p-3 bg-transparent border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder-white/60 transition resize-none"
  />

  <button
    type="submit"
    className="w-full py-3 mt-2 bg-transparent border-1 border-white text-white font-thin hover:bg-white hover:text-black transition"
  >
    Pošalji Poruku
  </button>
</form>

        {/* Social Media */}
       
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
              className="block mx-auto mt-2 bg-gray-800 text-white px-4 py-2  hover:bg-gray-700 transition"
            >
              Zatvori
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
