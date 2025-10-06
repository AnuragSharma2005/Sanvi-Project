"use client"
import React from "react"
import { motion } from "framer-motion"

export default function Ascope() {
  // Animation variants
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
    <main className="min-h-screen bg-gradient-to-br from-[#0b1430] via-[#3b0764] to-black text-white px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-center gap-12">
      
      {/* Left Side Text */}
      <motion.div
        className="w-full sm:w-1/2 flex flex-col gap-4 text-left"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Uber History in India</h1>

        <p className="text-base sm:text-lg opacity-90 leading-relaxed text-justify">
          Uber first marked its presence in India in 2013, launching its services in Bengaluru to challenge the traditional taxi model. Its initial strategy leveraged its core global strengths: a seamless, cashless, app-based booking experience, and professional drivers.
        </p>

        <p className="text-base sm:text-lg opacity-90 leading-relaxed text-justify">
          The company quickly expanded, but faced significant local hurdles, most notably from domestic rival Ola and the market's heavy reliance on cash payments. This forced Uber to localize its product rapidly, introducing the cash payment option in 2015—a major deviation from its global model.
        </p>

        <p className="text-base sm:text-lg opacity-90 leading-relaxed text-justify">
          Over the years, Uber poured billions of dollars into subsidies and incentives to acquire both riders and drivers, making India one of its most critical international battlegrounds. Furthermore, to cater to the diverse needs of the price-sensitive market, Uber introduced low-cost services like UberGO and categories like Uber Auto and Uber Moto (bike taxis), fundamentally transforming urban mobility and establishing a massive, if often volatile, presence across hundreds of Indian cities.
        </p>
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
            alt="Uber India Launch"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </motion.div>

    </main>
  )
}
