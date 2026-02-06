"use client"

import { motion } from "framer-motion"
import { Upload, Zap, Trophy } from "lucide-react"

// @component: How It Works Section
export const CaseStudiesCarousel = () => {
  const steps = [
    {
      icon: Upload,
      number: "1",
      title: "Upload",
      description: "Snap or upload your homework photo, PDF, or type your problem directly",
      color: "from-primary to-primary/80",
    },
    {
      icon: Zap,
      number: "2",
      title: "AI Solves",
      description: "Get step-by-step solutions in 3 seconds using advanced AI models",
      color: "from-accent to-accent/80",
    },
    {
      icon: Trophy,
      number: "3",
      title: "Learn & Earn XP",
      description: "Master concepts, unlock rewards, and level up your skills",
      color: "from-primary/60 to-accent/60",
    },
  ]

  return (
    <section id="how-it-works" className="w-full px-6 lg:px-8 py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
            How It Works
          </h2>
          <p
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
            style={{ fontFamily: "Figtree", fontWeight: "400" }}
          >
            Three simple steps to unlock your academic potential
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 -right-12 lg:-right-16 w-24 lg:w-32 h-1 bg-gradient-to-r from-primary/40 to-transparent" />
                )}

                <div className="flex flex-col h-full">
                  {/* Icon Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Step Number */}
                  <div
                    className="text-6xl font-bold text-primary/20 mb-2"
                    style={{ fontFamily: "Figtree", fontWeight: "700" }}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3
                    className="text-2xl font-bold text-foreground mb-3"
                    style={{ fontFamily: "Figtree", fontWeight: "700" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-foreground/60 leading-relaxed"
                    style={{ fontFamily: "Figtree", fontWeight: "400" }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p
            className="text-lg text-foreground/60 mb-6"
            style={{ fontFamily: "Figtree", fontWeight: "400" }}
          >
            Ready to transform your study habits?
          </p>
          
        </motion.div>
      </div>
    </section>
  )
}
