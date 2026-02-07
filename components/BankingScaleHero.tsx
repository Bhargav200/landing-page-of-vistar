"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

const Threads = dynamic(() => import("./Threads"), { ssr: false })

// @component: BankingScaleHero
export const BankingScaleHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div id="home" className="w-full overflow-hidden relative pt-24 min-h-screen flex flex-col justify-center">
      {/* Threads Background - Full Coverage */}
      <div className="absolute inset-0 top-0 w-full h-full z-0">
        <Threads
          amplitude={0.8}
          distance={0.6}
          enableMouseInteraction
          color={[0, 0.31, 0.4]}
        />
      </div>

      {/* Overlay Gradient for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent z-1" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-32 w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 w-fit px-3 py-1 rounded-full bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/40"
        >
          <span className="text-xs font-medium" style={{ fontFamily: "Figtree", fontWeight: "500" }}>
            Currently in R&D · Incubated at ACIC-CBIT Hyderabad
          </span>
        </motion.div>

        {/* Main Heading - Split for emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 max-w-2xl"
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight"
            style={{ fontFamily: "Figtree", fontWeight: "700" }}
          >
            Eliminate the Confusion.
          </h1>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mt-2 opacity-90"
            style={{ fontFamily: "Figtree", fontWeight: "700" }}
          >
            Master the Outcome.
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl leading-relaxed"
          style={{ fontFamily: "Figtree", fontWeight: "400" }}
        >
          Stop drowning in scattered notes and random playlists. Vistar is the Unified AI-powered learning environment system that organizes your learning, protects your focus, and tells you exactly what to learn next.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <button
            onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity w-fit"
            style={{ fontFamily: "Figtree", fontWeight: "600" }}
          >
            Request Early Access
          </button>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm text-primary-foreground/70"
          style={{ fontFamily: "Figtree", fontWeight: "400" }}
        >
          <p>Grounded in reality, not hype.</p>
        </motion.div>
      </div>
    </div>
  )
}
