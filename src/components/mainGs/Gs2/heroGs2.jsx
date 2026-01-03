import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Scale, Globe, Heart, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function GS2Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-violet-800 to-fuchsia-900">
        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Loading...
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-violet-800 to-fuchsia-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                [
                  "rgba(147, 51, 234, 0.3)",
                  "rgba(168, 85, 247, 0.3)",
                  "rgba(217, 70, 239, 0.3)",
                  "rgba(192, 132, 252, 0.3)",
                ][i % 4]
              } 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="mx-auto px-6 py-20 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-block mb-6">
          <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            <Scale className="w-5 h-5 text-purple-300" />
            <span className="text-purple-100 font-semibold">
              UPSC CSE MAINS 2024
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
        >
          General Studies
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-200 to-fuchsia-300 mt-2">
            Paper II
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Governance, Constitution, Polity, Social Justice & International
          Relations
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mb-12 text-purple-200"
        >
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">250 Marks</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-purple-300"></div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">3 Hours</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-purple-300"></div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">20 Questions</span>
          </div>
        </motion.div>

        {/* Three Pillars */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Constitution & Polity
            </h3>
            <p className="text-purple-200">9 Topics • 48% Weightage</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Governance & Justice
            </h3>
            <p className="text-purple-200">7 Topics • 36% Weightage</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              International Relations
            </h3>
            <p className="text-purple-200">4 Topics • 18% Weightage</p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-purple-200 text-sm uppercase tracking-wider">
            Scroll to explore
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-purple-300" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
