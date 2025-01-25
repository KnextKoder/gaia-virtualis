"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Bot, Vote, Coins, Building } from "lucide-react"
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"

interface Feature {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  imageUrl: string
}

const features: Feature[] = [
  {
    title: "AI Proxies",
    description: "Real humans represented by advanced, customizable AI agents.",
    icon: Bot,
    imageUrl: `https://picsum.photos/${Math.floor(Math.random() * 1000)}`,
  },
  {
    title: "Virtual Democracy",
    description: "Participate in elections and shape the future of your digital world.",
    icon: Vote,
    imageUrl: `https://picsum.photos/${Math.floor(Math.random() * 1000)}`,
  },
  {
    title: "Virtual Economy",
    description: "Trade using cutting-edge cryptocurrency in a dynamic market.",
    icon: Coins,
    imageUrl: `https://picsum.photos/${Math.floor(Math.random() * 1000)}`,
  },
  {
    title: "Virtual Bank",
    description: "Secure and transparent transaction management with futuristic security.",
    icon: Building,
    imageUrl: `https://picsum.photos/${Math.floor(Math.random() * 1000)}`,
  },
]

interface FeatureCardProps {
  feature: Feature
  index: number
  isActive: boolean
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index, isActive }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: false })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 0.8, y: 50 },
      }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto mb-12 ${isActive ? "z-10" : "z-0"}`}
    >
      <DirectionAwareHover
        imageUrl={feature.imageUrl}
        className={`w-full h-64 md:h-80 transition-all duration-300 ${
          isActive ? "scale-105 shadow-2xl" : "scale-95 opacity-70"
        }`}
      >
        <div className="p-6 bg-black bg-opacity-70 rounded-lg backdrop-blur-sm">
          <feature.icon className="w-12 h-12 mb-4 text-purple-400" />
          <h3 className="text-2xl font-bold mb-2 text-purple-300 glitch" data-text={feature.title}>
            {feature.title}
          </h3>
          <p className="text-gray-300">{feature.description}</p>
        </div>
      </DirectionAwareHover>
    </motion.div>
  )
}

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-black overflow-hidden relative" ref={containerRef}>
      <div
        className="absolute inset-0 bg-[url('/rock-texture.jpg')] opacity-20 bg-cover bg-center"
        style={{ mixBlendMode: "overlay" }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center text-purple-400 glitch neon-glow"
          data-text="Futuristic Features"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Futuristic Features
        </motion.h2>
        <div className="relative">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} isActive={index === activeIndex} />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px]" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

