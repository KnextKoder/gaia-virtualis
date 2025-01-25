import "@/app/globals.css"
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "VIRTUANA_GAIA - Shape Your Virtual World",
  description: "A groundbreaking Virtual World where AI agents act as proxies for real humans.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.className} bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}

