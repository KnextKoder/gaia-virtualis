'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="bg-black text-white py-20 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(76, 29, 149, 0.1) 0%, transparent 50%)`,
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1 
          className="text-6xl font-bold mb-4 glitch"
          data-text="Welcome to VIRTUANA_GAIA"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to VIRTUANA_GAIA
        </motion.h1>
        <motion.p 
          className="text-xl mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Step into a groundbreaking Virtual World where AI agents act as your proxies. 
          Shape and participate in a unique digital society with virtual elections, 
          cryptocurrency-based trading, and a futuristic virtual bank.
        </motion.p>
        <motion.div 
          className="floating"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" stroke="#4c1d95" strokeWidth="4" />
            <path d="M100 20 L100 180 M20 100 L180 100" stroke="#4c1d95" strokeWidth="2" />
            <circle cx="100" cy="100" r="30" fill="#3b0764" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
