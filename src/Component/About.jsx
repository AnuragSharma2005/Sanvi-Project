"use client";

import React from "react";
import { motion } from "framer-motion";
// import team1 from "../assets/team1.jpg";
// import team2 from "../assets/team2.jpg";

const teamMembers = [
  { name: "Ava Patel", role: "Product Designer", image: team1 },
  { name: "Liam Chen", role: "Full-Stack Engineer", image: team2 },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80 } },
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.5)" },
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 text-center bg-gray-900 text-white">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="text-4xl font-bold mb-4"
      >
        Meet the Team
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-md cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-left">
              <h2 className="text-lg font-semibold">{member.name}</h2>
              <p className="text-gray-400">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
