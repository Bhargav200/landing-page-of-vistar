"use client"

import { motion } from "framer-motion"
import { Users, Briefcase, Shield } from "lucide-react"

// @component: Built for the Serious Learner
export const IntegrationCarousel = () => {
  const audiences = [
    {
      icon: Users,
      title: "Students",
      benefits: [
        "Overcome exam anxiety by knowing exactly what specifically to study",
        "Replace 5 different notes apps with one system",
      ],
    },
    {
      icon: Briefcase,
      title: "Self-Learners",
      benefits: [
        "Structure your self-taught journey like a university degree",
        "Maintain consistency without a boss watching over you",
      ],
    },
    {
      icon: Shield,
      title: "Parents",
      benefits: [
        "Move beyond vague grades. Understand your child's true gaps",
        "Ensure screen time is productive, not just passive consumption",
      ],
    },
  ]

  return (
    <section id="audience" className="w-full px-6 lg:px-8 py-20 md:py-32 bg-background">
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
            Built for the Serious Learner
          </h2>
          <p
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
            style={{ fontFamily: "Figtree", fontWeight: "400" }}
          >
            Whether you're a student, self-learner, or parent, Vistar adapts to your needs
          </p>
        </motion.div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent/40 flex items-center justify-center mb-6 shadow-lg"
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold text-foreground mb-4"
                  style={{ fontFamily: "Figtree", fontWeight: "700" }}
                >
                  {audience.title}
                </h3>

                {/* Benefits List */}
                <ul className="space-y-3">
                  {audience.benefits.map((benefit, bIndex) => (
                    <li
                      key={bIndex}
                      className="flex gap-3 text-foreground/70"
                      style={{ fontFamily: "Figtree", fontWeight: "400" }}
                    >
                      <span className="text-primary font-bold flex-shrink-0">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20"
        >
          <h3
            className="text-2xl font-bold text-foreground mb-6"
            style={{ fontFamily: "Figtree", fontWeight: "700" }}
          >
            Clarity vs. The Alternatives
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th
                    className="text-left py-4 px-4 text-foreground font-bold"
                    style={{ fontFamily: "Figtree", fontWeight: "700" }}
                  >
                    Feature
                  </th>
                  <th
                    className="text-left py-4 px-4 text-foreground/60 font-medium"
                    style={{ fontFamily: "Figtree", fontWeight: "500" }}
                  >
                    YouTube / Course Sites
                  </th>
                  <th
                    className="text-left py-4 px-4 text-primary font-bold"
                    style={{ fontFamily: "Figtree", fontWeight: "700" }}
                  >
                    Vistar
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-4 px-4 text-foreground" style={{ fontFamily: "Figtree", fontWeight: "500" }}>
                    Primary Goal
                  </td>
                  <td className="py-4 px-4 text-foreground/60" style={{ fontFamily: "Figtree", fontWeight: "400" }}>
                    Engagement (Ad Revenue)
                  </td>
                  <td className="py-4 px-4 text-primary font-semibold" style={{ fontFamily: "Figtree", fontWeight: "600" }}>
                    Your Learning Outcome
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 px-4 text-foreground" style={{ fontFamily: "Figtree", fontWeight: "500" }}>
                    Structure
                  </td>
                  <td className="py-4 px-4 text-foreground/60" style={{ fontFamily: "Figtree", fontWeight: "400" }}>
                    Scattered Playlists
                  </td>
                  <td className="py-4 px-4 text-primary font-semibold" style={{ fontFamily: "Figtree", fontWeight: "600" }}>
                    Adaptive Learning Path
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-foreground" style={{ fontFamily: "Figtree", fontWeight: "500" }}>
                    Environment
                  </td>
                  <td className="py-4 px-4 text-foreground/60" style={{ fontFamily: "Figtree", fontWeight: "400" }}>
                    Highly Distracting
                  </td>
                  <td className="py-4 px-4 text-primary font-semibold" style={{ fontFamily: "Figtree", fontWeight: "600" }}>
                    Distraction-Free Focus
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
