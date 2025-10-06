"use client"
import React, { useEffect } from "react"
import { motion } from "framer-motion"

export default function Ascope() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
    <main className="min-h-screen bg-gradient-to-br from-[#0b1430] via-[#3b0764] to-black text-white px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-center gap-12 pt-20 sm:pt-0 pb-20">
      
      {/* Left Side Text */}
     {/* Left Side Text */}
      <motion.div
        className="w-full sm:w-1/2 flex flex-col gap-4 text-left mt-8 sm:mt-20" // added mt-8 for mobile, mt-12 for larger screens
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Future Outlook for Amazon in India</h1>

        <p className="text-base sm:text-lg opacity-90 leading-relaxed text-justify">
          1. <strong>Easing Export Regulations:</strong> The most positive future development for Amazon is the potential relaxation of Foreign Direct Investment (FDI) rules for exports. This shift from a strict marketplace model to an export-facilitation model is a significant win that will streamline the supply chain and help Amazon achieve its goal of facilitating $80 billion in Indian e-commerce exports by 2030.
        </p>

        <p className="text-base sm:text-lg opacity-90 leading-relaxed text-justify">
          2. <strong>Intensified Domestic Scrutiny:</strong> Domestically, Amazon must prepare for a tougher regulatory landscape, particularly with the likely introduction of the Digital Competition Bill. This future legislation aims to:
        </p>

        <p className="text-base sm:text-lg opacity-90 leading-relaxed text-justify ml-4">
          • Curb Monopolistic Practices
        </p>
        <p className="text-base sm:text-lg opacity-90 leading-relaxed text-justify ml-4">
          • Mandate Data Protection
        </p>
        <p className="text-base sm:text-lg opacity-90 leading-relaxed text-justify ml-4">
          • Enhance Consumer Protection
        </p>

        {/* Buttons below text */}
      <div className="w-full flex justify-between mt-6">
          <a
            href="/Achallenge" // replace with your actual URL
            className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition text-center"
          >
            Previous
          </a>
          <a
            href="/" // replace with your actual URL
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
            alt="Amazon Future Outlook"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </motion.div>

    </main>
  )
}
