"use client"
import React, { useEffect } from "react"
import { motion } from "framer-motion"

export default function About() {
  // ✅ Scroll to top when page loads or reloads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const teamMembers = [
    { name: "Sanvi Neha Sinha", image: "/About1.jpg" },
    { name: "Nidhi Singh", image: "/About2.jpg" },
  ]

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.8 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.3,
        type: "spring",
        stiffness: 90,
        damping: 15,
      },
    }),
  }

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#0b1430] via-[#3b0764] to-black text-white flex flex-col items-center px-4 sm:px-12 pt-36 pb-20">
      
      {/* Animated Heading */}
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        className="text-4xl sm:text-6xl font-extrabold mb-16 text-center bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 bg-clip-text text-transparent tracking-wide drop-shadow-lg whitespace-nowrap"
      >
        Meet Our Team ✨
      </motion.h1>

      {/* Animated Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 items-center justify-center">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-white/40 bg-black/30 shadow-2xl flex items-center justify-center cursor-pointer">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <p className="mt-5 text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-fuchsia-400 via-pink-500 to-purple-400 bg-clip-text text-transparent tracking-wide">
              {member.name}
            </p>
            <div className="h-[2px] w-24 mt-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
