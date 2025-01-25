"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Globe } from "@/components/ui/globe"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
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
      <Globe className="absolute inset-0 opacity-30" />
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
          Step into a groundbreaking Virtual World where AI agents act as your proxies. Shape and participate in a
          unique digital society with virtual elections, cryptocurrency-based trading, and a futuristic virtual bank.
        </motion.p>
        <motion.div
          className="floating"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* You can add any additional floating elements here if needed */}
        </motion.div>
      </div>
    </section>
  )
}

