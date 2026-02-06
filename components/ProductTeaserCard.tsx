"use client"
import { motion } from "framer-motion"
import { AlertCircle, Users, BookOpen } from "lucide-react"

const problems = [
  {
    title: "The Fragmentation Trap",
    description: "Your learning lives in ten different places—YouTube, PDFs, Notion, and random websites. You spend more time organizing than actually learning.",
    icon: AlertCircle,
  },
  {
    title: "The Guidance Gap",
    description: "\"I don't know what to study next.\" Generic AI chatbots give random answers, not specifically for your syllabus or personal goals.",
    icon: Users,
  },
  {
    title: "The Distraction Economy",
    description: "Most platforms are engineered for addiction, not outcomes. Passive watching creates the illusion of competence, but knowledge isn't retained.",
    icon: BookOpen,
  },
]

// @component: Problem Statement
export const ProductTeaserCard = () => {
  return (
    <section id="problem" className="w-full px-6 lg:px-8 py-20 md:py-32 bg-background">
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
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: "Figtree", fontWeight: "700" }}
          >
            Why is modern learning so exhausting?
          </h2>
          <p
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
            style={{ fontFamily: "Figtree", fontWeight: "400" }}
          >
            You have infinite access to information, but zero clarity on how to use it.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3
                  className="text-xl font-bold text-foreground mb-3"
                  style={{ fontFamily: "Figtree", fontWeight: "600" }}
                >
                  {problem.title}
                </h3>
                <p
                  className="text-foreground/70 leading-relaxed"
                  style={{ fontFamily: "Figtree", fontWeight: "400" }}
                >
                  {problem.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Solution Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/20"
        >
          <h3
            className="text-3xl font-bold text-foreground mb-4"
            style={{ fontFamily: "Figtree", fontWeight: "700" }}
          >
            We don't sell courses.
          </h3>
          <h3
            className="text-3xl font-bold text-primary mb-4"
            style={{ fontFamily: "Figtree", fontWeight: "700" }}
          >
            We engineer clarity.
          </h3>
          <p
            className="text-lg text-foreground/70 max-w-2xl mx-auto mb-4"
            style={{ fontFamily: "Figtree", fontWeight: "400" }}
          >
            Vistar is not a marketplace. We are building a unified Learning Operating System.
          </p>
          <p
            className="text-base text-foreground/60 max-w-2xl mx-auto italic"
            style={{ fontFamily: "Figtree", fontWeight: "400" }}
          >
            "This is not a 'course company.' This is a learning operating system. We are grounded strictly in reality, not fantasy."
          </p>
          <p
            className="text-sm text-foreground/50 mt-4"
            style={{ fontFamily: "Figtree", fontWeight: "500" }}
          >
            — Founder's Note
          </p>
        </motion.div>
      </div>
    </section>
  )
}
