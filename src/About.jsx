"use client"
import React from "react"
import { motion } from "framer-motion"

export default function About() {
  // Animation variants
  const imageVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 90, damping: 20, duration: 0.8 } 
    },
  }

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  }

  const teamMembers = [
    { name: "Anurag Sharma", image: "/anurag.png" },
    { name: "Moksh Digital", image: "/moksh.png" },
  ]

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#0b1430] via-[#3b0764] to-black text-white flex flex-col items-center justify-center px-6 sm:px-12 py-16">
      
      <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center">About Us</h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            variants={imageVariants}
          >
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-xl overflow-hidden border border-white/20 bg-black/20 flex items-center justify-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <p className="mt-4 text-lg font-medium">{member.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}
