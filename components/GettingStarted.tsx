"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, Package, Rocket } from "lucide-react"

const steps = [
  {
    title: "1. Clone the Repository",
    code: "git clone https://github.com/KnextKoder/VIRTUANA_GAIA.git",
    icon: Terminal,
  },
  {
    title: "2. Install Dependencies",
    code: "cd VIRTUANA_GAIA && npm install",
    icon: Package,
  },
  {
    title: "3. Run the Application",
    code: "npm start",
    icon: Rocket,
  },
]

export default function GettingStarted() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  // const controls = useAnimation()

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-black to-purple-900 text-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/circuit.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-purple-400 glitch neon-glow"
          data-text="Getting Started"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Getting Started
        </motion.h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredStep(index)}
              onHoverEnd={() => setHoveredStep(null)}
            >
              <motion.div
                animate={index === hoveredStep ? { scale: 1.05 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center mb-2">
                  <step.icon className="text-3xl text-purple-400 mr-2" />
                  <p className="text-xl font-semibold text-purple-300">{step.title}</p>
                </div>
                <motion.code
                  className="block bg-black bg-opacity-50 px-4 py-2 rounded border border-purple-800 text-purple-200"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {step.code}
                </motion.code>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" variant="secondary" className="bg-purple-800 hover:bg-purple-900 text-white mt-8">
            Explore the Virtual World <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

