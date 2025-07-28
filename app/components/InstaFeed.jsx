'use client'
import React, { useEffect } from 'react'

export default function InstaFeed() {
  useEffect(() => {
    const processInstagrams = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process()
      }
    }

    if (window.instgrm && window.instgrm.Embeds) {
      processInstagrams()
    } else {
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://www.instagram.com/embed.js'
      script.onload = processInstagrams
      document.body.appendChild(script)

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
      }
    }
  }, [])

  return (
    <div className="px-6 py-26 mx-auto max-w-2xl">
      {/* Instagram Embed */}
      <blockquote
        className="instagram-media rounded-lg overflow-hidden"
        data-instgrm-permalink="https://www.instagram.com/wineandfine_belgrade/"
        data-instgrm-version="14"
        style={{
          border: '0',
          borderRadius: '12px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
          margin: 'auto',
          maxWidth: '100%',
          padding: '0',
          width: '100%',
        }}
      >
        <a
          href="https://www.instagram.com/wineandfine_belgrade/"
          style={{
            background: '#FFFFFF',
            lineHeight: 0,
            padding: '0',
            textAlign: 'center',
            textDecoration: 'none',
            width: '100%',
            display: 'block',
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Pogledajte ovu objavu na Instagramu
        </a>
      </blockquote>

      {/* Social Links Section */}
      <div className="mt-10 text-center">
        <p className="text-white text-lg mb-4 font-serif">
          Pratite nas na društvenim mrežama za najnovije vesti i događaje:
        </p>

        <div className="flex space-x-8 text-white items-center justify-center text-2xl">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/wineandfine_belgrade"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex flex-col items-center hover:text-pink-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-7 h-7 mb-1"
            >
              <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM4.5 7.75A3.25 3.25 0 0 1 7.75 4.5h8.5a3.25 3.25 0 0 1 3.25 3.25v8.5a3.25 3.25 0 0 1-3.25 3.25h-8.5a3.25 3.25 0 0 1-3.25-3.25v-8.5ZM12 7.25A4.75 4.75 0 1 0 12 16.75 4.75 4.75 0 0 0 12 7.25Zm0 1.5a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5Zm4.88-.38a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25Z" />
            </svg>
            <span className="text-sm">Instagram</span>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@wineandfine.vracar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="flex flex-col items-center hover:text-[#69C9D0] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-7 h-7 mb-1"
            >
              <path d="M12 2c1.38 0 2.5 1.12 2.5 2.5v11.38c0 2.38-1.63 4.5-4 4.88-2.38.38-4.5-1.63-4.88-4-.38-2.38 1.63-4.5 4-4.88.46-.07.93-.1 1.38-.1V9.5c-.38 0-.75.02-1.13.07-3.63.55-6.13 3.95-5.5 7.63.63 3.63 4.06 6.13 7.69 5.5 3.38-.63 5.94-3.63 5.94-7.13V6.19c.69.44 1.5.75 2.38.88v-2c-.94-.12-1.75-.5-2.38-1.06-.63-.63-1-1.44-1.06-2.38H12Z" />
            </svg>
            <span className="text-sm">TikTok</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61575886383357#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook - Wine & Fine"
            className="flex flex-col items-center hover:text-blue-500 transition-colors"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 mb-1"
            >
              <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" />
            </svg>
            <span className="text-sm">Facebook</span>
          </a>
        </div>
      </div>

   
    </div>
  )
}
