"use client"

import { motion } from "framer-motion"

export default function Navbar() {
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
        className="text-lg sm:text-xl font-semibold text-white tracking-wide cursor-pointer"
        onClick={() => (window.location.href = "/")}
        >
        Professional Ethics
        </h1>


      {/* Right side - About Us button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
         onClick={() => router.push("/about")}
        className="px-4 py-2 rounded-full border border-white/20 
                   bg-white/10 text-white text-sm font-medium 
                   hover:bg-white/20 transition-all"
      >
        About Us
      </motion.button>
    </motion.nav>
  )
}
