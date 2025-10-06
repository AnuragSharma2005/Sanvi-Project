"use client"

import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const btnVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
  hover: { scale: 1.03 },
  tap: { scale: 0.98 },
}

function GlowButton({ children, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="relative inline-flex items-center justify-center rounded-full px-5 py-2.5 
                 bg-white/10 backdrop-blur-md border border-white/20 
                 shadow-[0_0_0_0_rgba(99,102,241,0.0)] hover:shadow-[0_0_24px_4px_rgba(99,102,241,0.35)] 
                 transition-shadow duration-300 text-sm font-medium text-white"
      variants={btnVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
    >
      {children}
    </motion.button>
  )
}

export default function Homepage() {
  const navigate = useNavigate()

  const projectDetails = [
    "Professional Ethics Minor Project",
    "Course: Professional Ethics and Social Responsibility",
    "Course Code: PFE301",
    "Amity Institute of Social Sciences",
  ]

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.4 } },
  }

  const typingVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
  }

  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-gradient-to-br from-[#0b1430] via-[#3b0764] to-black text-white pt-16 sm:pt-16">
      {/* Animated background accents */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"
        animate={{ x: [0, 30, -10, 0], y: [0, 10, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-3xl"
        animate={{ x: [0, -20, 15, 0], y: [0, -10, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 py-8 sm:py-12">
        {/* Project Title */}
        <motion.header
          className="mb-10 sm:mb-12 text-center space-y-3"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {projectDetails.map((line, index) => (
            <motion.h1
              key={index}
              className={`text-white font-bold ${
                index === 0 ? "text-3xl sm:text-5xl" : "text-lg sm:text-2xl"
              }`}
              variants={typingVariants}
            >
              {line}
            </motion.h1>
          ))}
        </motion.header>

        {/* Uber and Amazon Cards */}
        <section className="w-full max-w-3xl grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Uber card */}
          <motion.div
            className="group rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 text-left shadow-xl hover:shadow-2xl transition-shadow cursor-pointer"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => navigate("/ubercards")}
          >
            <div className="mb-4 overflow-hidden rounded-xl border border-white/15 bg-black/20">
              <img
                src="/uber1.png"
                alt="Uber ride interior"
                className="h-40 w-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">Uber — Ride Details</h3>
            <p className="text-sm opacity-90">Fast, reliable rides with live GPS and secure payments.</p>
            <div className="mt-4 ">
              <GlowButton onClick={() => navigate("/ubercards")}>Uber Car</GlowButton>
            </div>
          </motion.div>

          {/* Amazon card */}
          <motion.div
            className="group rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 text-left shadow-xl hover:shadow-2xl transition-shadow cursor-pointer"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => navigate("/amazoncards")}
          >
            <div className="mb-4 overflow-hidden rounded-xl border border-white/15 bg-black/20">
              <img
                src="/amazon1.png"
                alt="Amazon shopping illustration"
                className="h-40 w-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">Amazon Marketplace</h3>
            <p className="text-sm opacity-90">Millions of products with fast delivery and secure payments.</p>
            <div className="mt-4">
              <GlowButton onClick={() => navigate("/amazoncards")}>Amazon</GlowButton>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  )
}
