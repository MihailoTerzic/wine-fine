'use client'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className="fixed top-0 right-5 md:right-10 xl:right-50 z-50 text-end py-3 flex justify-end items-center bg-transparent text-white">
      {/* Hamburger Icon */}
      <button
        className="md:hidden z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✖' : '☰'}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-lg font-serif">
        {['home', 'about', 'contact'].map((section) => (
          <li key={section}>
            <a href={`/#${section}`} className="hover:underline capitalize">
              {section}
            </a>
          </li>
        ))}
        <li>
          <a href="/gallery" className="hover:underline capitalize">
            Gallery
          </a>
        </li>
      </ul>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-black text-white flex flex-col items-center justify-center space-y-8 text-2xl font-serif transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        {['home', 'about', 'contact'].map((section) => (
          <a
            key={section}
            href={`/#${section}`}
            onClick={handleLinkClick}
            className="capitalize"
          >
            {section}
          </a>
        ))}
        <a
          href="/gallery"
          onClick={handleLinkClick}
          className="capitalize"
        >
          Gallery
        </a>
      </div>
    </nav>
  )
}
