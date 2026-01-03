import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Globe,
  Landmark,
  Clock,
  FileText,
  Target,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroGs1() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Floating Orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10 backdrop-blur-sm"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="mx-auto px-4 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="text-center text-white"
        >
          {/* Breadcrumb */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="flex items-center justify-center gap-3 text-sm md:text-base font-semibold text-emerald-100">
              <Link to="/prelims" className="hover:text-white">
                GS Prelims
              </Link>
              <span>/</span>
              <Link to="/csat" className="hover:text-white">
                CSAT
              </Link>
              <span>/</span>
              <span className="text-white">GS Mains</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-block mb-6 px-8 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/40 shadow-xl">
              <span className="text-lg md:text-xl font-bold">
                UPSC MAINS 2025
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
              GS PAPER I
            </h1>

            <h2 className="text-xl md:text-3xl font-bold text-emerald-100 max-w-4xl mx-auto">
              Indian Heritage & Culture, History, Society & Geography
            </h2>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12"
          >
            {[
              { icon: FileText, value: "250", label: "Marks" },
              { icon: Clock, value: "3", label: "Hours" },
              { icon: Target, value: "20", label: "Questions" },
              { icon: Award, value: "4", label: "Sections" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                className="bg-white/15 backdrop-blur-md rounded-xl p-6 shadow-xl"
              >
                <item.icon className="w-10 h-10 mx-auto mb-3" />
                <div className="text-4xl font-black">{item.value}</div>
                <div className="text-sm font-bold text-white/80">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pillars */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
          >
            {[
              { icon: Landmark, title: "Heritage & Culture", marks: "35–45" },
              { icon: BookOpen, title: "History", marks: "80–90" },
              { icon: Users, title: "Society", marks: "55–65" },
              { icon: Globe, title: "Geography", marks: "60–70" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30"
              >
                <item.icon className="w-12 h-12 mx-auto mb-3 text-emerald-100" />
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-emerald-100">{item.marks} marks</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div variants={itemVariants} className="mt-16">
            <p className="text-sm font-bold text-emerald-100 mb-3">
              Explore Complete Analysis
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white rounded-full mx-auto flex justify-center"
            >
              <motion.div
                className="w-1.5 h-1.5 bg-white rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
