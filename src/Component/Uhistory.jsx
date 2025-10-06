"use client"
import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom" // for navigation

export default function Uhistory() {
  const navigate = useNavigate()

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
    <main className="min-h-screen bg-gradient-to-br from-[#0b1430] via-[#3b0764] to-black text-white px-4 sm:px-12 py-16 flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16">

      {/* Left Side Image */}
      <motion.div
        className="w-full sm:w-1/2 flex items-center justify-center mt-8 sm:mt-0" // mt-4 for mobile, no margin for larger screens
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-80 h-80 sm:w-[28rem] sm:h-[28rem] bg-black/20 rounded-xl border border-white/20 flex items-center justify-center overflow-hidden">
          <img
            src="/uhistory.png"
            alt="Uber India Launch"
            className="w-72 h-72 sm:w-[26rem] sm:h-[26rem] object-cover rounded-md"
          />
        </div>
      </motion.div>


      {/* Right Side Content */}
      {/* Right Side Content */}
      <motion.div
        className="w-full sm:w-1/2 flex flex-col gap-4 text-left mt-4 sm:mt-8" // mt-4 for mobile, mt-8 for larger screens
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold text-center bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-[Playfair_Display]"
        >Uber History in India</h1>

        <p className="text-base sm:text-lg opacity-90 leading-relaxed text-justify">
          Uber first marked its presence in India in 2013, launching its services in Bengaluru to challenge the traditional taxi model. Its initial strategy leveraged its core global strengths: a seamless, cashless, app-based booking experience, and professional drivers.
        </p>

        <p className="text-base sm:text-lg opacity-90 leading-relaxed text-justify">
          The company quickly expanded, but faced significant local hurdles, most notably from domestic rival Ola and the market's heavy reliance on cash payments. This forced Uber to localize its product rapidly, introducing the cash payment option in 2015—a major deviation from its global model.
        </p>

        <p className="text-base sm:text-lg opacity-90 leading-relaxed text-justify">
          Over the years, Uber poured billions of dollars into subsidies and incentives to acquire both riders and drivers, making India one of its most critical international battlegrounds. Furthermore, to cater to the diverse needs of the price-sensitive market, Uber introduced low-cost services like UberGO and categories like Uber Auto and Uber Moto (bike taxis), fundamentally transforming urban mobility and establishing a massive, if often volatile, presence across hundreds of Indian cities.
        </p>

        {/* Buttons */}
        <div className="w-full flex justify-between mt-6">
          <button
            onClick={() => navigate("/ubercards")} // replace with your route
            className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition cursor-pointer"
          >
            Previous
          </button>
          <button
            onClick={() => navigate("/uchallenge")} // replace with your route
            className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition cursor-pointer"
          >
            Next
          </button>
        </div>
      </motion.div>

    </main>
  )
}
