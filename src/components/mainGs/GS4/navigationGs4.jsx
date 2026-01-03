import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scale, BookOpen, Home, FileText } from "lucide-react";
import React from "react";

export default function GS4Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sections = [
        "overview",
        "architecture",
        "topics",
        "80-20-rule",
        "resources",
        "mistakes",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "architecture", label: "Paper Structure" },
    { id: "topics", label: "Topics" },
    { id: "80-20-rule", label: "80-20 Rule" },
    { id: "resources", label: "Resources" },
    { id: "mistakes", label: "Mistakes" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-rose-900/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-rose-300" />
            <span className="text-white font-bold text-lg">GS4: Ethics</span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  document
                    .getElementById(section.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === section.id
                    ? "bg-rose-500 text-white"
                    : "text-rose-100 hover:bg-rose-800/50"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="p-2 rounded-lg bg-rose-800/50 hover:bg-rose-700 text-rose-100 transition-all"
              title="Prelims"
            >
              <Home className="w-5 h-5" />
            </Link>
            <Link
              to="/csat"
              className="p-2 rounded-lg bg-rose-800/50 hover:bg-rose-700 text-rose-100 transition-all"
              title="CSAT"
            >
              <FileText className="w-5 h-5" />
            </Link>
            <Link
              to="/resources/study-main-materials"
              className="p-2 rounded-lg bg-rose-800/50 hover:bg-rose-700 text-rose-100 transition-all"
              title="GS1"
            >
              <BookOpen className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <motion.div
        className="h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-red-400"
        style={{
          scaleX: scrolled ? 1 : 0,
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.nav>
  );
}
