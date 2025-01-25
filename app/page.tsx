import Layout from "@/components/Layout"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import TechnicalOverview from "@/components/TechnicalOverview"
import GettingStarted from "@/components/GettingStarted"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen bg-black text-gray-100">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <TechnicalOverview />
        <GettingStarted />
        <Footer />
      </main>
    </Layout>
  )
}

