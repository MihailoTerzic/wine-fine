"use client";
import React, { useEffect } from "react";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";

export default function InstaFeed() {
  useEffect(() => {
    const processInstagrams = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    };

    if (window.instgrm && window.instgrm.Embeds) {
      processInstagrams();
    } else {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.instagram.com/embed.js";
      script.onload = processInstagrams;
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div className="px-6 py-20 mx-auto max-w-4xl">
      {/* Social Links */}
      <div className="mb-10 text-center">
        <p className="text-white text-lg mb-4 font-serif">
          Pratite nas na društvenim mrežama za najnovije vesti i događaje:
        </p>

        <div className="flex flex-wrap gap-6 text-white items-center justify-center text-2xl">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/wineandfine_belgrade"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex flex-col items-center hover:text-pink-500 transition-colors"
          >
            <FaInstagram className="w-7 h-7 mb-1" />
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
            <FaTiktok className="w-7 h-7 mb-1" />
            <span className="text-sm">TikTok</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61575886383357"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook - Wine & Fine"
            className="flex flex-col items-center hover:text-blue-500 transition-colors"
          >
            <FaFacebookF className="w-7 h-7 mb-1" />
            <span className="text-sm">Facebook</span>
          </a>
        </div>
      </div>

      {/* Instagram Embed */}
      <div className="w-full max-w-2xl mx-auto">
        <blockquote
          className="instagram-media rounded-lg overflow-hidden w-full"
          data-instgrm-permalink="https://www.instagram.com/wineandfine_belgrade/"
          data-instgrm-version="14"
          style={{
            border: "0",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
            margin: "auto",
            maxWidth: "100%",
            padding: "0",
          }}
        >
          <a
            href="https://www.instagram.com/wineandfine_belgrade/"
            style={{
              background: "#FFFFFF",
              lineHeight: 0,
              padding: "0",
              textAlign: "center",
              textDecoration: "none",
              width: "100%",
              display: "block",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pogledajte ovu objavu na Instagramu
          </a>
        </blockquote>
      </div>
    </div>
  );
}
