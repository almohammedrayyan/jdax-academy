import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Calculator,
  Clock,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function CSATHero() {
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
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-500 via-amber-600 to-yellow-500">
      {/* Animated Geometric Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hexagon Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='https://i.pinimg.com/736x/bb/3c/ee/bb3cee5298dcd727f10e63fde0909404.jpg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Floating Triangles */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-16 h-16 border-4 border-white/20"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        ></motion.div>
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-32 w-20 h-20 border-4 border-white/20 rounded-full"
        ></motion.div>
      </div>

      <div
        className="container mx-auto px-4 py-20 relative z-10"
        style={{ background: "bottom" }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="text-center text-white"
        >
          {/* Main Title with Different Style */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              variants={pulseVariants}
              initial="initial"
              animate="animate"
              className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full border-2 border-white/40"
            >
              <span className="text-sm md:text-base font-bold tracking-wider">
                UPSC CSE PRELIMS
              </span>
            </motion.div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-4 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-100 to-white">
                CSAT
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 mb-2">
              Paper II: Aptitude Test
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <Zap className="w-6 h-6 text-yellow-200" />
              <p className="text-xl md:text-2xl text-yellow-100 font-semibold">
                The 33% Barrier You Must Cross
              </p>
              <Zap className="w-6 h-6 text-yellow-200" />
            </div>
          </motion.div>

          {/* Warning Banner - Different Style */}
          <motion.div
            variants={itemVariants}
            className="max-w-5xl mx-auto mb-12"
          >
            <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-3xl p-1 shadow-2xl">
              <div className="bg-gradient-to-br from-red-500/95 to-red-600/95 backdrop-blur-md rounded-3xl p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{
                      rotate: [0, -10, 10, -10, 0],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    <AlertTriangle className="w-10 h-10 flex-shrink-0 text-yellow-300" />
                  </motion.div>
                  <div className="text-left">
                    <p className="text-2xl md:text-3xl font-black text-white leading-tight">
                      Critical Reality Check
                    </p>
                    <p className="text-lg md:text-xl text-yellow-100 mt-2">
                      Below 33%? Your Prelims journey ends here - even with
                      190/200 in Paper 1!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid - Hexagonal Layout */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto"
          >
            {[
              {
                icon: Target,
                number: "200",
                label: "Total Marks",
                color: "from-orange-400 to-orange-600",
              },
              {
                icon: Calculator,
                number: "80",
                label: "Questions",
                color: "from-amber-400 to-amber-600",
              },
              {
                icon: Clock,
                number: "2",
                label: "Hours",
                color: "from-yellow-400 to-yellow-600",
              },
              {
                icon: AlertTriangle,
                number: "33%",
                label: "Minimum Cutoff",
                color: "from-red-400 to-red-600",
              },
              {
                icon: TrendingUp,
                number: "75-80",
                label: "Safe Target",
                color: "from-green-400 to-green-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`bg-gradient-to-br ${stat.color} p-1 rounded-2xl shadow-xl`}
              >
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl h-full">
                  <stat.icon className="w-10 h-10 mx-auto mb-3 text-white" />
                  <div className="text-5xl md:text-6xl font-black mb-2 text-white">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm font-bold text-white/90 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator - Different Animation */}
          <motion.div
            variants={itemVariants}
            className="mt-20 flex flex-col items-center"
          >
            <p className="text-base font-bold text-white/90 mb-3 uppercase tracking-wider">
              Explore Below
            </p>
            <motion.div
              animate={{
                y: [0, 15, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center"
            >
              <div className="w-8 h-12 border-4 border-white rounded-full flex items-start justify-center p-2">
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
