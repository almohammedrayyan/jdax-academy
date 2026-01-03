import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Calendar,
  TrendingUp,
  ChevronDown,
  ChevronRight,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
export default function PYQHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const floatingOrbs = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    size: Math.random() * 60 + 40,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 4,
  }));

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-cyan-900">
        {/* Animated background orbs */}
        {mounted &&
          floatingOrbs.map((orb) => (
            <motion.div
              key={orb.id}
              className="absolute rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 blur-2xl"
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 backdrop-blur-sm border border-blue-300/30 rounded-full"
            >
              <FileText className="w-5 h-5 text-blue-200" />
              <span className="text-blue-100 font-medium">
                Previous Year Questions
              </span>
            </motion.div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              UPSC PYQ Papers
              <span className="block mt-2 bg-gradient-to-r from-blue-200 via-cyan-200 to-indigo-200 bg-clip-text text-transparent">
                2013 - 2025
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Download authentic UPSC question papers from the last 13 years.
              Practice with real exam papers to understand patterns and trends.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
              {[
                {
                  icon: FileText,
                  label: "78 Papers",
                  sublabel: "Complete Collection",
                },
                { icon: Calendar, label: "13 Years", sublabel: "2013-2025" },
                { icon: Download, label: "Free", sublabel: "All Downloads" },
                {
                  icon: TrendingUp,
                  label: "Pattern",
                  sublabel: "Analysis Ready",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-md border border-blue-300/20 rounded-2xl p-6 hover:bg-white/20 transition-all"
                >
                  <stat.icon className="w-8 h-8 text-blue-200 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">
                    {stat.label}
                  </div>
                  <div className="text-sm text-blue-200 mt-1">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Link
                to="/"
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-blue-300/30 rounded-full text-blue-100 hover:bg-white/20 transition-all"
              >
                View Syllabus
              </Link>
              <Link
                to="#categories"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-semibold transition-all"
              >
                Browse Papers
              </Link>
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
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                });
              }}
            >
              <span className="text-blue-200 text-sm">Explore Papers</span>
              <ChevronDown className="w-6 h-6 text-blue-200" />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Select Your Paper Category
            </h2>
            <p className="text-xl text-gray-600">
              Access year-wise question papers from 2013 to 2025
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Prelims PYQ Card */}
            <Link to="/resources/pqy-prelims" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-blue-500 rounded-xl">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <ChevronRight className="w-6 h-6 text-blue-500 group-hover:translate-x-2 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Prelims PYQs
                </h3>
                <p className="text-gray-700 mb-4">GS Paper - I</p>
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <Download className="w-4 h-4" />
                  <span>13 Papers Available (2013-2025)</span>
                </div>
              </div>
            </Link>

            {/* CSAT PYQ Card */}
            <Link to="/resources/csat-prelims" className="group">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-2 border-indigo-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-indigo-500 rounded-xl">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <ChevronRight className="w-6 h-6 text-indigo-500 group-hover:translate-x-2 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  CSAT PYQs
                </h3>
                <p className="text-gray-700 mb-4">GS Paper - II (CSAT)</p>
                <div className="flex items-center gap-2 text-sm text-indigo-600">
                  <Download className="w-4 h-4" />
                  <span>13 Papers Available (2013-2025)</span>
                </div>
              </div>
            </Link>

            {/* Mains GS1 PYQ Card */}
            <Link to="/resource/gs1main" className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-green-500 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <ChevronRight className="w-6 h-6 text-green-500 group-hover:translate-x-2 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Mains GS1
                </h3>
                <p className="text-gray-700 mb-4">
                  Culture, History, Geography
                </p>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <Download className="w-4 h-4" />
                  <span>13 Papers Available (2013-2025)</span>
                </div>
              </div>
            </Link>

            {/* Mains GS2 PYQ Card */}
            <Link to="/resource/gs2main" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-purple-500 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <ChevronRight className="w-6 h-6 text-purple-500 group-hover:translate-x-2 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Mains GS2
                </h3>
                <p className="text-gray-700 mb-4">Polity, Governance, IR</p>
                <div className="flex items-center gap-2 text-sm text-purple-600">
                  <Download className="w-4 h-4" />
                  <span>13 Papers Available (2013-2025)</span>
                </div>
              </div>
            </Link>

            {/* Mains GS3 PYQ Card */}
            <Link to="/resource/gs3main" className="group">
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-2 border-cyan-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-cyan-500 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <ChevronRight className="w-6 h-6 text-cyan-500 group-hover:translate-x-2 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Mains GS3
                </h3>
                <p className="text-gray-700 mb-4">
                  Economy, Science, Environment
                </p>
                <div className="flex items-center gap-2 text-sm text-cyan-600">
                  <Download className="w-4 h-4" />
                  <span>13 Papers Available (2013-2025)</span>
                </div>
              </div>
            </Link>

            {/* Mains GS4 PYQ Card */}
            <Link to="/resource/gs4main" className="group">
              <div className="bg-gradient-to-br from-rose-50 to-rose-100 border-2 border-rose-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-rose-500 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <ChevronRight className="w-6 h-6 text-rose-500 group-hover:translate-x-2 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Mains GS4
                </h3>
                <p className="text-gray-700 mb-4">
                  Ethics, Integrity, Aptitude
                </p>
                <div className="flex items-center gap-2 text-sm text-rose-600">
                  <Download className="w-4 h-4" />
                  <span>13 Papers Available (2013-2025)</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Why Practice PYQs?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-white">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <p className="text-blue-100">Authentic UPSC Papers</p>
                </div>
                <div className="text-white">
                  <div className="text-4xl font-bold mb-2">13 Years</div>
                  <p className="text-blue-100">Complete Coverage</p>
                </div>
                <div className="text-white">
                  <div className="text-4xl font-bold mb-2">Pattern</div>
                  <p className="text-blue-100">Analysis & Trends</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
