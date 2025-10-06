"use client"

import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom" // ✅ Correct for Vite + React Router

export default function Navbar() {
  const navigate = useNavigate() // ✅ Initialize navigation

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 
                 flex items-center justify-between 
                 mx-6 sm:mx-12 px-6 py-3 
                 rounded-2xl border border-white/20 
                 bg-white/10 backdrop-blur-lg shadow-lg"
    >
      {/* Left side - Project name */}
      <h1
        className="text-2xl sm:text-2xl font-extrabold  text-center bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-[Playfair_Display] cursor-pointer"
        onClick={() => navigate("/")} // ✅ use navigate()
      >
        Professional Ethics
      </h1>

      {/* Right side - About Us button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/About")} // ✅ use navigate()
        className="px-4 py-2 rounded-full border border-white/20 
                   bg-white/10 text-white text-sm font-medium 
                   hover:bg-white/20 transition-all cursor-pointer"
      >
        About Us
      </motion.button>
    </motion.nav>
  )
}
