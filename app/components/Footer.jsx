
import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-semibold text-white">Wine & Fine</h2>
          <p className="text-sm mt-3 leading-relaxed">
            Uživajte u vrhunskim vinima i gastronomiji u prijatnoj atmosferi. 
            Posetite nas i uživajte u svakom zalogaju i gutljaju.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold text-white">Brzi linkovi</h3>
          <Link href="/#home" className="hover:text-white transition">Početna</Link>
          <Link href="/#about" className="hover:text-white transition">O Nama</Link>
          <Link href="https://simplebooklet.com/winefine#page=1" target="_blank" className="hover:text-white transition">Meni</Link>
          <Link href="/#contact" className="hover:text-white transition">Kontakt</Link>
        </div>

        {/* Contact & Social */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Kontakt</h3>
          <p className="flex items-center gap-2"><FaPhoneAlt />  
           <a
        href="tel:+381611315483"
        className='text-white'
      >+381611315483</a></p>
          <p className="flex items-center gap-2"><FaMapMarkerAlt /> Kursulina 12, Beograd</p>
          
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/profile.php?id=61575886383357#" target="_blank" className="hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.instagram.com/wineandfine_belgrade" target="_blank" className="hover:text-white">
              <FaInstagram size={20} />
            </a>
             <a href="https://www.tiktok.com/@wineandfine.vracar" target="_blank" className="hover:text-white">
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Wine & Fine. Sva prava zadržana.
      </div>
    </footer>
  )
}
