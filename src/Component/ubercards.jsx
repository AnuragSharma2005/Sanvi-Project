"use client"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function UberCards() {
  const navigate = useNavigate()

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const cards = [
    {
      title: "History",
      description: "Learn about the origin and development of Uber services.",
      imageSrc: "/ucard1.png",
      link: "/Uhistory",
    },
    {
      title: "Challenges",
      description: "Understand the key obstacles faced and how they were overcome.",
      imageSrc: "/ucard2.png",
      link: "/uchallenge",
    },
    {
      title: "Scope",
      description: "Explore future opportunities and potential improvements in the service.",
      imageSrc: "/ucard3.png",
      link: "/uscope",
    },
  ]

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0b1430] via-[#3b0764] to-black flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-center text-white px-4 sm:px-8 lg:px-16 pt-32 sm:pt-40 lg:pt-0 pb-20 sm:pb-24 lg:pb-0">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            onClick={() => navigate(card.link)}
            className="group rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 shadow-xl h-[28rem] flex flex-col cursor-pointer hover:scale-105 transition-transform"
            variants={cardVariants}
          >
            <div className="mb-6 overflow-hidden rounded-xl border border-white/15 bg-black/20 flex-shrink-0">
              <img
                src={card.imageSrc}
                alt={card.title}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
            <p className="text-sm opacity-90 flex-grow">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}
