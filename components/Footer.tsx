"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, Twitter, Github } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { name: "Email", icon: Mail, href: "mailto:support@virtuanagaia.com" },
  { name: "Discord", icon: MessageCircle, href: "https://discord.gg/YourInviteLink" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/VIRTUANA_GAIA" },
  { name: "GitHub", icon: Github, href: "https://github.com/KnextKoder/VIRTUANA_GAIA" },
]

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 border-t border-purple-800 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-bold mb-4 text-purple-400 glitch" data-text="VIRTUANA_GAIA">
              VIRTUANA_GAIA
            </h3>
            <p className="text-gray-400">Shape your virtual world today.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-4 text-purple-400">Connect With Us</h4>
            <ul className="space-y-2">
              {socialLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={link.href}
                    className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <link.icon className="mr-2 text-purple-800" size={18} />
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4 text-purple-400">Contributing</h4>
            <p className="text-gray-400 mb-2">We welcome contributions from developers, designers, and futurists!</p>
            <motion.a
              href="https://github.com/KnextKoder/VIRTUANA_GAIA"
              className="inline-block text-purple-400 hover:text-purple-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Fork us on GitHub <Github className="inline ml-1" size={18} />
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 pt-8 border-t border-purple-800 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>&copy; {new Date().getFullYear()} VIRTUANA_GAIA. All rights reserved.</p>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px]" />
    </footer>
  )
}

