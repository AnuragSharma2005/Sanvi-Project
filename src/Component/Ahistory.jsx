"use client"
import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Ahistory() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Animation variants
  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 80, duration: 0.8 } },
  }

  const contentVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 80, duration: 0.8 } },
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0b1430] via-[#3b0764] to-black text-white px-4 sm:px-12 py-24 flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16">
      
      {/* Left Side Image */}
      <motion.div
        className="w-full sm:w-1/2 flex items-center justify-center mt-8 sm:mt-0"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-80 h-80 sm:w-[28rem] sm:h-[28rem] bg-black/20 rounded-xl border border-white/20 flex items-center justify-center overflow-hidden">
          <img
            src="/Ahistory.png"
            alt="Amazon India Launch"
            className="w-72 h-72 sm:w-[26rem] sm:h-[26rem] object-cover rounded-md"
          />
        </div>
      </motion.div>

      {/* Right Side Content */}
      <motion.div
        className="w-full sm:w-1/2 flex flex-col gap-4 text-left mt-4 sm:mt-8"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl sm:text-6xl font-extrabold mb-4 -mt-6 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-[Playfair_Display]">
          Amazon History in India
        </h1>

        <p className="text-base sm:text-lg opacity-90 leading-relaxed text-justify">
          Amazon launched its India operations on June 5, 2013, starting with just books. To comply with regulations that prohibited foreign-owned companies from directly selling goods to consumers, Amazon adopted a pure marketplace model from the outset. It focused on onboarding third-party sellers and providing them with a platform, logistics (Fulfillment by Amazon), and technology.

          The company quickly realized the need to adapt its global playbook to the unique Indian market, which was less reliant on online payments and had poor internet connectivity. Some India-first innovations include:
          <ul className="list-disc list-inside mt-2">
            <li>Cash-on-Delivery (CoD): A critical feature for building customer trust in a cash-dominant economy.</li>
            <li>Lite App Versions: Optimization of its mobile app for slower 2G/3G networks and cheaper smartphones.</li>
            <li>Logistics Network: Partnering with India Post and local kirana stores to achieve pan-India reach, including remote areas.</li>
          </ul>

          {/* This localized strategy allowed Amazon to rapidly expand its product selection and challenge the established local market leaders. */}
        </p>

        {/* Buttons */}
       <div className="w-full flex justify-between mt-6">
          <Link
            to="/amazoncards" // replace with your route
            className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition text-center"
          >
            Previous
          </Link>

          <Link
            to="/Achallenge" // replace with your route
            className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition text-center"
          >
            Next
          </Link>
        </div>
      </motion.div>

    </main>
  )
}
