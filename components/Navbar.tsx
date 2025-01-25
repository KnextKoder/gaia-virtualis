'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-all duration-300 ${isScrolled ? 'text-purple-800' : 'text-purple-400'}`}>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4c1d95" />
                  <stop offset="100%" stopColor="#3b0764" />
                </linearGradient>
              </defs>
              <path d="M10 30L5 10H15L20 25L25 10H35L30 30H10Z" fill="url(#gradient)" />
              <path d="M40 30V10H50V20H55V10H65V30H40Z" fill="url(#gradient)" />
              <path d="M70 30V10H90V15H80V20H85V25H80V30H70Z" fill="url(#gradient)" />
              <path d="M95 30V10H115V15H105V17H115V23H105V25H115V30H95Z" fill="url(#gradient)" />
              <path d="M120 10L115 20V30H105V20L100 10H120Z" fill="url(#gradient)" />
            </svg>
          </Link>
          <Button asChild className="bg-purple-800 hover:bg-purple-900 text-white">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
