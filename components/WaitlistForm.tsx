"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { X, Loader2, CheckCircle2 } from "lucide-react"

interface WaitlistFormProps {
  isOpen: boolean
  onClose: () => void
}

export const WaitlistForm = ({ isOpen, onClose }: WaitlistFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profession: "",
    college: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Validate form data
    if (!formData.name || !formData.email || !formData.profession || !formData.college) {
      setError("All fields are required")
      setIsLoading(false)
      return
    }

    try {
      console.log("[v0] Submitting form data:", formData)

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      console.log("[v0] API response status:", response.status)
      const responseData = await response.json()
      console.log("[v0] API response data:", responseData)

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", profession: "", college: "" })

      // Close modal after success
      setTimeout(() => {
        setIsSubmitted(false)
        onClose()
      }, 2000)
    } catch (err) {
      setError("Failed to submit. Please try again.")
      console.error("[v0] Waitlist submission error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-background rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-foreground/60" />
        </button>

        {isSubmitted ? (
          // Success state
          <div className="text-center py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex justify-center mb-4"
            >
              <CheckCircle2 className="w-16 h-16 text-primary" />
            </motion.div>
            <h3
              className="text-2xl font-bold text-foreground mb-2"
              style={{ fontFamily: "Figtree", fontWeight: "700" }}
            >
              You're In!
            </h3>
            <p
              className="text-foreground/60"
              style={{ fontFamily: "Figtree", fontWeight: "400" }}
            >
              Welcome to the Vistar founding member community. We'll be in touch soon!
            </p>
          </div>
        ) : (
          <>
            <h2
              className="text-2xl font-bold text-foreground mb-2"
              style={{ fontFamily: "Figtree", fontWeight: "700" }}
            >
              Join the Waitlist
            </h2>
            <p
              className="text-foreground/60 mb-6"
              style={{ fontFamily: "Figtree", fontWeight: "400" }}
            >
              Be among the first to experience the future of learning
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                  style={{ fontFamily: "Figtree", fontWeight: "500" }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  style={{ fontFamily: "Figtree", fontWeight: "400" }}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                  style={{ fontFamily: "Figtree", fontWeight: "500" }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  style={{ fontFamily: "Figtree", fontWeight: "400" }}
                />
              </div>

              {/* Profession */}
              <div>
                <label
                  htmlFor="profession"
                  className="block text-sm font-medium text-foreground mb-2"
                  style={{ fontFamily: "Figtree", fontWeight: "500" }}
                >
                  Profession
                </label>
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  placeholder="Student / Engineer / etc."
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  style={{ fontFamily: "Figtree", fontWeight: "400" }}
                />
              </div>

              {/* College */}
              <div>
                <label
                  htmlFor="college"
                  className="block text-sm font-medium text-foreground mb-2"
                  style={{ fontFamily: "Figtree", fontWeight: "500" }}
                >
                  College / Organization
                </label>
                <input
                  type="text"
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="Your institution"
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  style={{ fontFamily: "Figtree", fontWeight: "400" }}
                />
              </div>

              {/* Error message */}
              {error && (
                <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-lg">
                  <p
                    className="text-sm text-destructive"
                    style={{ fontFamily: "Figtree", fontWeight: "400" }}
                  >
                    {error}
                  </p>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
                style={{ fontFamily: "Figtree", fontWeight: "600" }}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}
