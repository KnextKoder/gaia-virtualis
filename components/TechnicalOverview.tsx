"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { Server, Coins, Cpu, Network } from "lucide-react"

const technologies = [
  {
    title: "Blockchain Technology",
    description: "Secure and transparent transactions using cutting-edge distributed ledger technology.",
    icon: Server,
  },
  {
    title: "Advanced AI Framework",
    description: "State-of-the-art algorithms powering intelligent and adaptive AI proxies.",
    icon: Cpu,
  },
  {
    title: "Cryptocurrency Integration",
    description: "Custom digital currency enabling seamless and efficient virtual economy.",
    icon: Coins,
  },
  {
    title: "Decentralized Governance",
    description: "Smart contracts ensuring fair elections and transparent policy implementation.",
    icon: Network,
  },
]

export default function TechnicalOverview() {
  const [hoveredTech, setHoveredTech] = useState<number | null>(null)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.3 },
    })
  }, [controls]) // Removed unnecessary dependency: hoveredTech

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-purple-400 glitch neon-glow"
          data-text="Technical Overview"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Overview
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-black p-6 rounded-lg border border-purple-800 shadow-lg shadow-purple-800/20 hover:shadow-purple-800/40 transition-shadow duration-300 relative overflow-hidden"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredTech(index)}
              onHoverEnd={() => setHoveredTech(null)}
            >
              <motion.div animate={index === hoveredTech ? controls : {}}>
                <tech.icon className="text-4xl text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-purple-300">{tech.title}</h3>
                <p className="text-gray-400">{tech.description}</p>
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px]" />
    </section>
  )
}

