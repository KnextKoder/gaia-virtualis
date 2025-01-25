"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowRight, Bot, Globe, Coins, Vote } from "lucide-react"

const steps = [
  {
    title: "Create Your AI Proxy",
    description: "Design and customize your AI agent to represent you in the virtual world.",
    icon: Bot,
  },
  {
    title: "Explore Virtual Society",
    description: "Immerse yourself in a dynamic digital ecosystem with endless possibilities.",
    icon: Globe,
  },
  {
    title: "Engage in Economic Activities",
    description: "Trade, invest, and build your wealth using our advanced cryptocurrency system.",
    icon: Coins,
  },
  {
    title: "Participate in Governance",
    description: "Shape the future of the virtual world through democratic processes and voting.",
    icon: Vote,
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.5 },
    })
  }, [controls])

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-purple-400 glitch neon-glow"
          data-text="How It Works"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`bg-gray-900 p-6 rounded-lg shadow-lg border ${
                index === activeStep ? "border-purple-500" : "border-purple-800"
              } relative overflow-hidden group`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <motion.div animate={index === activeStep ? controls : {}} className="relative z-10">
                <step.icon className="text-5xl text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-purple-300">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
                {index === activeStep && (
                  <motion.div
                    className="absolute bottom-2 right-2 text-purple-400"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight />
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px]" />
    </section>
  )
}

