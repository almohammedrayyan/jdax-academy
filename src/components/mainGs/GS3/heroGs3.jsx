import { motion } from "framer-motion";
import {
  TrendingUp,
  Cpu,
  Leaf,
  Shield,
  AlertTriangle,
  ChevronDown,
} from "lucide-react";
import { useEffect, useState } from "react";
import React from "react";

export default function GS3Hero() {
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-900 via-teal-800 to-sky-900">
        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Loading...
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-900 via-teal-800 to-sky-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
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
                  "rgba(6, 182, 212, 0.3)",
                  "rgba(14, 165, 233, 0.3)",
                  "rgba(20, 184, 166, 0.3)",
                  "rgba(34, 211, 238, 0.3)",
                ][i % 4]
              } 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.3, 1],
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
            <TrendingUp className="w-5 h-5 text-cyan-300" />
            <span className="text-cyan-100 font-semibold">
              UPSC CSE MAINS 2024
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
        >
          General Studies
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-teal-300 mt-2">
            Paper III
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Technology, Economic Development, Environment, Security & Disaster
          Management
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mb-12 text-cyan-200"
        >
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">250 Marks</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-cyan-300"></div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">3 Hours</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-cyan-300"></div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">20 Questions</span>
          </div>
        </motion.div>

        {/* Five Pillars */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Economy</h3>
            <p className="text-cyan-200 text-sm">16 Topics • 48%</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Cpu className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">S&T</h3>
            <p className="text-cyan-200 text-sm">4 Topics • 18%</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Leaf className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Environment</h3>
            <p className="text-cyan-200 text-sm">1 Topic • 14%</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <AlertTriangle className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Disaster</h3>
            <p className="text-cyan-200 text-sm">1 Topic • 10%</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Security</h3>
            <p className="text-cyan-200 text-sm">6 Topics • 12%</p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-cyan-200 text-sm uppercase tracking-wider">
            Scroll to explore
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-cyan-300" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
