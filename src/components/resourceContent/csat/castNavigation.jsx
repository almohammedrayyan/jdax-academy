import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Home,
  BookOpen,
  Users,
  Brain,
  Target,
  Lightbulb,
  Calculator,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function CSATNavigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { icon: Home, label: "GS Paper I", href: "/", special: true },
    { icon: BookOpen, label: "Overview", href: "#overview" },
    { icon: Target, label: "Comprehension", href: "#comprehension" },
    { icon: Users, label: "Interpersonal", href: "#interpersonal" },
    { icon: Brain, label: "Logical", href: "#logical" },
    { icon: Lightbulb, label: "Decision", href: "#decision" },
    { icon: Brain, label: "Mental", href: "#mental" },
    { icon: Calculator, label: "Numeracy", href: "#numeracy" },
    { icon: TrendingUp, label: "Strategy", href: "#strategy" },
  ];

  return (
    <motion.nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b-4 ${
        scrolled
          ? "bg-gradient-to-r from-orange-500 to-amber-500 shadow-2xl border-orange-700"
          : "bg-gradient-to-r from-orange-400 to-amber-400 backdrop-blur-sm border-orange-600"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap justify-center gap-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.href}
                className={`flex items-center gap-2 px-4 py-2 font-bold text-sm uppercase tracking-wide transition-all duration-300 
                  ${
                    item.special
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 rounded-none clip-path-arrow shadow-lg"
                      : "bg-white/90 text-orange-700 hover:bg-yellow-300 hover:text-orange-900 hover:scale-105 rounded-none"
                  } group shadow-md`}
                style={
                  item.special
                    ? {
                        clipPath:
                          "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)",
                      }
                    : {}
                }
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{item.label}</span>
                {item.special && <Zap className="w-3 h-3 ml-1" />}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
