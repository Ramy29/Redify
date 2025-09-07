import { Facebook, Instagram, Linkedin, Phone, Twitter, Github } from 'lucide-react'
import React from 'react'

export default function TopNavbar() {
  return (
    <div className="w-full bg-[#393280] text-white rounded-b-lg px-4 sm:px-6 lg:px-10 py-2">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        {/* Phone */}
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
          <p className="text-sm sm:text-base">+201554472917</p>
        </div>

        {/* Social Media */}
        <div className="flex items-center gap-4 mt-2 sm:mt-0">
          <a href="https://www.facebook.com/share/14PmNP91Jsz/" aria-label="Facebook">
            <Facebook className="w-5 h-5 hover:text-blue-400 transition" />
          </a>
          <a href="https://github.com/Ramy29" aria-label="GitHub">
            <Github className="w-5 h-5 hover:text-gray-300 transition" />
          </a>
          <a href="https://www.linkedin.com/in/ramy-esam-03845a226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 hover:text-blue-500 transition" />
          </a>
          <a href="https://www.instagram.com/ramy_e_14?igsh=MWR4ZWNzMjZja2owZw==" aria-label="Instagram">
            <Instagram className="w-5 h-5 hover:text-pink-400 transition" />
          </a>
          <a href="https://x.com/ramyesam701?t=ZYPqUxuGcEo9q12-Z2YqBg&s=08" aria-label="Twitter">
            <Twitter className="w-5 h-5 hover:text-sky-400 transition" />
          </a>
        </div>
      </div>
    </div>
  )
}

