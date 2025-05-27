'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Integrate with EmailJS or similar
    alert('Message sent!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id='contact' className='relative w-full min-h-screen bg-black'>
      {/* Background image */}
      <Image
        src='/images/img1.jpg'
        className='absolute top-0 left-0 w-full h-full object-cover'
        alt='Vas Kutak za Vračaru'
        fill
        priority
        quality={100}
      />

      {/* Dark overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-black/60 z-0' />

      {/* Content container */}
      <div className='relative z-10 flex flex-col items-center justify-center px-4 py-12 max-w-4xl mx-auto space-y-12'>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className='bg-white/5 backdrop-blur-md p-8 rounded-2xl w-full space-y-6 border border-white/10 text-white font-serif'
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
      </div>
    </section>
  )
}
