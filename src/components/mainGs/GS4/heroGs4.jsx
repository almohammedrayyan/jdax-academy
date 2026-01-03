import { motion } from "framer-motion";
import {
  Scale,
  Heart,
  Shield,
  BookOpen,
  Users,
  Sparkles,
  ChevronDown,
  Gavel,
} from "lucide-react";
import { useEffect, useState } from "react";
import React from "react";

export default function GS4Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const floatingOrbs = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    size: Math.random() * 60 + 40,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 4,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-900 via-red-800 to-pink-900">
      {/* Animated background orbs */}
      {mounted &&
        floatingOrbs.map((orb) => (
          <motion.div
            key={orb.id}
            className="absolute rounded-full bg-gradient-to-br from-rose-400/20 to-pink-400/20 blur-2xl"
            style={{
              width: orb.size,
              height: orb.size,
              left: `${orb.left}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: orb.duration,
              delay: orb.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-rose-500/20 backdrop-blur-sm border border-rose-300/30 rounded-full"
          >
            <Scale className="w-5 h-5 text-rose-200" />
            <span className="text-rose-100 font-medium">GS Mains Paper 4</span>
          </motion.div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Ethics, Integrity
            <span className="block mt-2 bg-gradient-to-r from-rose-200 via-pink-200 to-red-200 bg-clip-text text-transparent">
              & Aptitude
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-rose-100 max-w-3xl mx-auto">
            Master the art of ethical decision-making with case studies, moral
            philosophy, and real-world dilemmas
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            {[
              {
                icon: BookOpen,
                label: "13 Topics",
                sublabel: "2 Main Sections",
              },
              { icon: Shield, label: "250 Marks", sublabel: "3 Hours" },
              { icon: Heart, label: "65% Applied", sublabel: "Case Studies" },
              { icon: Gavel, label: "35% Theory", sublabel: "Ethics & Values" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-rose-300/20 rounded-2xl p-6 hover:bg-white/20 transition-all"
              >
                <stat.icon className="w-8 h-8 text-rose-200 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">
                  {stat.label}
                </div>
                <div className="text-sm text-rose-200 mt-1">
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key insights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {[
              { icon: Users, text: "Stakeholder Analysis" },
              { icon: Sparkles, text: "Emotional Intelligence" },
              { icon: Scale, text: "Ethical Dilemmas" },
            ].map((insight, index) => (
              <div
                key={insight.text}
                className="flex items-center gap-2 px-4 py-2 bg-rose-500/20 backdrop-blur-sm border border-rose-300/30 rounded-full"
              >
                <insight.icon className="w-4 h-4 text-rose-200" />
                <span className="text-sm text-rose-100">{insight.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => {
              document
                .getElementById("overview")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="text-rose-200 text-sm">Explore Syllabus</span>
            <ChevronDown className="w-6 h-6 text-rose-200" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
