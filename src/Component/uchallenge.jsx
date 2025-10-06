"use client"
import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function Uchallenge() {
  const navigate = useNavigate()

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sections = [
    {
      title: "Competition and Pricing ⚔",
      text: `The market is intensely competitive, with homegrown rival Ola being the main threat, alongside new commission-free models like Rapido (motorcycle taxis). This has often led to predatory pricing allegations, with platforms undercutting prices to gain market share, which results in unsustainability.`,
      image: "/challenge1.png",
    },
    {
      title: "Regulatory & Operational Hurdles 🚧",
      text: `Uber struggles with a complex and non-uniform regulatory environment as transport laws are managed by individual state governments. Unlike many global markets, India mandates commercial registration for taxis, which acts as a barrier to increasing the driver supply. This regulatory constraint contributes to the shortage of available vehicles to meet rising consumer demand.`,
      image: "/challenge2.png",
    },
    {
      title: "Driver and Quality Issues 🚗",
      text: `The driver classification as independent contractors—rather than employees—is a constant source of controversy, leading to dissatisfaction over shrinking incentives, rising fuel costs, and lack of benefits. This driver discontent often results in common consumer pain points: frequent trip cancellations and a decline in overall service quality.`,
      image: "/challenge3.png",
    },
  ]

  const imageVariants = {
    hidden: (direction) => ({
      x: direction === "left" ? -100 : 100,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 20, duration: 0.8 },
    },
  }

  const contentVariants = {
    hidden: (direction) => ({
      x: direction === "left" ? 100 : -100,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 20, duration: 0.8 },
    },
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#0b1430] via-[#3b0764] to-black text-white px-6 sm:px-12 py-32 flex flex-col items-center justify-center overflow-hidden">
      
      {/* ✨ Animated Heading */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, duration: 1 }}
        className="text-5xl sm:text-6xl font-extrabold mb-24 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-[Playfair_Display]"
      >
        Challenges
      </motion.h1>

      {/* ⬇ Vertical Line */}
      <div
        className="
          absolute
          top-56
          h-[calc(100%-15rem)]
          bg-white/25
          z-0
          rounded-full
          sm:left-1/2 sm:w-[2px] sm:-translate-x-1/2
          left-6 w-[2px] sm:left-auto
        "
      />

      {/* Main Sections */}
      <div className="flex flex-col gap-32 w-full max-w-7xl z-10">
        {sections.map((section, index) => {
          const isEven = index % 2 === 0
          return (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-center justify-between gap-12 sm:gap-24 ${
                isEven ? "" : "sm:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <motion.div
                className="w-full sm:w-1/2 flex items-center justify-center"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={isEven ? "left" : "right"}
              >
                <div className="w-72 h-72 sm:w-96 sm:h-96 bg-black/20 rounded-xl border border-white/20 overflow-hidden shadow-lg shadow-black/30">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="h-full object-cover object-left"
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                className="w-full sm:w-1/2 flex flex-col gap-4 sm:px-4 text-left"
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={isEven ? "left" : "right"}
              >
                <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-pink-300">
                  {section.title}
                </h2>
                <p className="text-base sm:text-lg opacity-90 leading-relaxed text-justify tracking-wide">
                  {section.text}
                </p>
              </motion.div>
            </div>
          )
        })}

        {/* Buttons at the bottom */}
        <div className="w-full flex justify-between mt-12">
          <button
            onClick={() => navigate("/Uhistory")}
            className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition cursor-pointer"
          >
            Previous
          </button>
          <button
            onClick={() => navigate("/uscope")}
            className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </main>
  )
}
