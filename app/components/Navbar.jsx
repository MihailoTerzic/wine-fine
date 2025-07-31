'use client'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className="fixed top-0 right-5 md:right-10  z-50 text-end py-3 flex justify-end items-center bg-transparent text-white">
      {/* Hamburger Icon */}
      <button
        className="md:hidden z-50 text-4xl"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✖' : '☰'}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-lg font-serif">
        <li><a href="/#home" className="hover:underline capitalize">Početna</a></li>
        <li><a href="/#about" className="hover:underline capitalize">O Nama</a></li>
        <li><a href="/menu" className="hover:underline capitalize">Meni</a></li>
        <li><a href="/#contact" className="hover:underline capitalize">Kontakt</a></li>
        
      </ul>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-black text-white flex flex-col items-center justify-center space-y-8 text-2xl font-serif transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <a href="/#home" onClick={handleLinkClick} className="capitalize">Početna</a>
        <a href="/#about" onClick={handleLinkClick} className="capitalize">O Nama</a>
        <a href="/menu" onClick={handleLinkClick} className="capitalize">Meni</a>
        <a href="/#contact" onClick={handleLinkClick} className="capitalize">Kontakt</a>
        
      </div>
    </nav>
  )
}
