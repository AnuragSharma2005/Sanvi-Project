"use client"
import React, { useEffect } from "react"
import { motion } from "framer-motion"

export default function Ascope() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const textVariants = {
    hidden: { x: -150, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 90, damping: 20, duration: 0.8 }
    },
  }

  const imageVariants = {
    hidden: { x: 150, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 90, damping: 20, duration: 0.8, delay: 0.2 }
    },
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0b1430] via-[#3b0764] to-black text-white px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-center gap-12 pt-20 sm:pt-0 pb-20">

      {/* Left Side Text */}
      <motion.div
        className="w-full sm:w-1/2 flex flex-col gap-4 items-center text-center mt-8 sm:mt-20"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-[Playfair_Display]"
        >Uber India: Growth & Strategy Insights</h1>

        <p className="text-base sm:text-lg opacity-90 leading-relaxed">
          1. <strong>Driver-Centric Model: Shared Value 🤝</strong><br />
          Shift from pure commissions to shared economic value with drivers.
        </p>

        <p className="text-base sm:text-lg opacity-90 leading-relaxed">
          2. <strong>Tiered Commission/Subscription:</strong><br />
          Offer lower commission for top performers or a flat daily/weekly fee for predictable earnings.
        </p>

        <p className="text-base sm:text-lg opacity-90 leading-relaxed">
          3. <strong>Focus on Green Mobility & Efficiency 🌿</strong><br />
          Pivot to electric vehicles to align with sustainability and urban policy.
        </p>

        <p className="text-base sm:text-lg opacity-90 leading-relaxed">
          4. <strong>EV Incentives:</strong><br />
          Provide subsidized loans, bonuses, or lower platform fees to reduce fuel costs.
        </p>

        <p className="text-base sm:text-lg opacity-90 leading-relaxed">
          5. <strong>Micro-Mobility Expansion:</strong><br />
          Expand bike taxis and auto-rickshaws for fuel-efficient, high-volume urban transport.
        </p>

        <div className="w-full flex justify-center gap-4 mt-6">
          <a
            href="/uchallenge"
            className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition text-center"
          >
            Previous
          </a>
          <a
            href="/"
            className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition text-center"
          >
            Next
          </a>
        </div>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        className="w-full sm:w-1/2 flex items-center justify-center"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-md h-96 bg-black/20 rounded-xl border border-white/20 flex items-center justify-center overflow-hidden">
          <img
            src="/uhistory.png"
            alt="Driver & EV Strategy"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </motion.div>

    </main>
  )
}
