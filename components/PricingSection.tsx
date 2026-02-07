"use client"

import React from "react"
import { motion } from "framer-motion"

// @component: Pre-Launch Email Collection / Waitlist
export function PricingSection() {
  // Google Form URL - directs to the form directly
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfgclxdnOLaT21T3U8jPfwpuISKoxrRl9M7CQ_mpG0gfcX_Rw/viewform?usp=dialog"

  const timelinePhases = [
    {
      phase: "Research & Validation",
      status: "Current Phase",
      description: "Deeply understanding learner psychology and identifying the root causes of educational confusion.",
    },
    {
      phase: "Private Beta",
      status: "Opening Soon",
      description: "Onboarding the first 1,000 active learners to test the MVP. Join waitlist.",
    },
    {
      phase: "Public Launch",
      status: "Planned",
      description: "Opening Vistar to the world.",
    },
  ]

  const benefits = [
    { icon: "✓", text: "Early Access - Get the app before public launch" },
    { icon: "✓", text: "2 Months Premium FREE - All features unlocked" },
    { icon: "✓", text: "Founding Member Badge - Exclusive recognition" },
  ]



  return (
    <>
      {/* Timeline Section */}
      <section id="timeline" className="w-full px-6 lg:px-8 py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              style={{ fontFamily: "Figtree", fontWeight: "700" }}
            >
              Our Journey
            </h2>
            <p
              className="text-lg text-foreground/60 max-w-2xl mx-auto"
              style={{ fontFamily: "Figtree", fontWeight: "400" }}
            >
              We prioritize quality and learner feedback over speed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timelinePhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-8 rounded-2xl border border-border bg-card"
              >
                {index < timelinePhases.length - 1 && (
                  <div className="hidden md:block absolute top-20 -right-12 lg:-right-16 w-24 lg:w-32 h-1 bg-gradient-to-r from-primary/40 to-transparent" />
                )}
                <div
                  className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
                    phase.status === "Current Phase"
                      ? "bg-primary/20 text-primary"
                      : "bg-accent/20 text-accent"
                  }`}
                  style={{ fontFamily: "Figtree", fontWeight: "600" }}
                >
                  {phase.status}
                </div>
                <h3
                  className="text-2xl font-bold text-foreground mb-3"
                  style={{ fontFamily: "Figtree", fontWeight: "700" }}
                >
                  {phase.phase}
                </h3>
                <p
                  className="text-foreground/60 leading-relaxed"
                  style={{ fontFamily: "Figtree", fontWeight: "400" }}
                >
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="w-full px-6 lg:px-8 py-20 md:py-32 bg-gradient-to-br from-primary via-primary/80 to-accent/60">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "Figtree", fontWeight: "700" }}
            >
              Be the First to Experience Focused Learning
            </h2>
            <p
              className="text-lg text-white/80 max-w-2xl mx-auto"
              style={{ fontFamily: "Figtree", fontWeight: "400" }}
            >
              Join the waitlist for the Private Beta. We are accepting a limited number of founding members to help shape the product.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-start gap-4"
              >
                <div className="text-2xl text-white mt-1">✅</div>
                <p
                  className="text-white leading-relaxed"
                  style={{ fontFamily: "Figtree", fontWeight: "500" }}
                >
                  {benefit.text}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto px-12 py-4 bg-white text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg text-center"
              style={{ fontFamily: "Figtree", fontWeight: "600" }}
            >
              Join Waitlist
            </a>
          </motion.div>

          {/* Waitlist Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <p
              className="text-white/80"
              style={{ fontFamily: "Figtree", fontWeight: "400" }}
            >
              <span className="font-bold text-white">2,847 students</span> already waiting!
            </p>
            <p
              className="text-white/60 text-sm mt-2"
              style={{ fontFamily: "Figtree", fontWeight: "400" }}
            >
              We'll only email you about launch updates
            </p>
          </motion.div>
        </div>
      </section>

    </>
  )
}
