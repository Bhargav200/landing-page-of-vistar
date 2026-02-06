"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navigationLinks = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "How it Works",
    href: "#how-it-works",
  },
] as any[]

// @component: PortfolioNavbar
export const PortfolioNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }
  
  const handleLinkClick = (href: string) => {
    closeMobileMenu()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => handleLinkClick("#home")}
              className="relative h-20 w-64 hover:opacity-80 transition-opacity duration-200 flex items-center justify-center"
              aria-label="Vistar Home"
            >
              <img
                src="/vistar-logo.png"
                alt="Vistar Logo"
                className="h-full w-full object-contain"
              />
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-foreground hover:text-primary px-3 py-2 text-base font-medium transition-colors duration-200 relative group"
                  style={{
                    fontFamily: "Figtree, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  <span>{link.name}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => handleLinkClick("#waitlist")}
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-base font-semibold hover:opacity-90 transition-opacity duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
              style={{
                fontFamily: "Figtree",
                fontWeight: "600",
              }}
            >
              Join Waitlist
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-foreground hover:text-primary p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <div className="px-6 py-6 space-y-4">
              {navigationLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="block w-full text-left text-foreground hover:text-primary py-3 text-lg font-medium transition-colors duration-200"
                  style={{
                    fontFamily: "Figtree, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  <span>{link.name}</span>
                </button>
              ))}
              <div className="pt-4 border-t border-border">
                <button
                  onClick={() => handleLinkClick("#waitlist")}
                  className="w-full bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-base font-semibold hover:opacity-90 transition-opacity duration-200"
                  style={{
                    fontFamily: "Figtree",
                    fontWeight: "600",
                  }}
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
