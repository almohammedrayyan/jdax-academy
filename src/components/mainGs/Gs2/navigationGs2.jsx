import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Scale,
  Heart,
  Menu,
  X,
  BookOpen,
  Target,
  Library,
  AlertTriangle,
} from "lucide-react";

export default function GS2Navigation() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "architecture", label: "Architecture", icon: Scale },
    { id: "topics", label: "Topics", icon: Heart },
    { id: "strategy", label: "80-20 Rule", icon: Target },
    { id: "resources", label: "Resources", icon: Library },
    { id: "mistakes", label: "Mistakes", icon: AlertTriangle },
  ];

  const otherPapers = [
    {
      id: "gs1",
      label: "GS1",
      to: "/resources/study-main-materials",
      color: "emerald",
    },
    { id: "gs3", label: "GS3", to: "/mains/gs3", color: "cyan" },
    { id: "gs4", label: "GS4", to: "/mains/gs4", color: "rose" },
  ];

  /* Tailwind-safe color mapping */
  const paperColorClasses = {
    emerald: "text-emerald-700 hover:bg-emerald-50",
    cyan: "text-cyan-700 hover:bg-cyan-50",
    rose: "text-rose-700 hover:bg-rose-50",
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 100;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-purple-100"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-violet-600 rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1
                  className={`text-lg font-bold ${
                    isScrolled ? "text-purple-900" : "text-white"
                  }`}
                >
                  GS Mains Paper II
                </h1>
                <p
                  className={`text-xs ${
                    isScrolled ? "text-purple-600" : "text-purple-200"
                  }`}
                >
                  Governance & Polity
                </p>
              </div>
            </motion.div>

            {/* DESKTOP SECTIONS */}
            <div className="hidden lg:flex items-center gap-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      activeSection === section.id
                        ? "bg-purple-600 text-white shadow-lg"
                        : isScrolled
                        ? "text-purple-700 hover:bg-purple-50"
                        : "text-white hover:bg-white/10"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{section.label}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* OTHER PAPERS */}
            <div className="hidden lg:flex items-center gap-2">
              {otherPapers.map((paper) => (
                <Link
                  key={paper.id}
                  to={paper.to}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isScrolled
                      ? paperColorClasses[paper.color]
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {paper.label}
                </Link>
              ))}
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                isScrolled ? "text-purple-700" : "text-white"
              }`}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute top-20 left-0 right-0 bg-white rounded-b-3xl shadow-2xl p-6 space-y-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
            >
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                      activeSection === section.id
                        ? "bg-purple-600 text-white"
                        : "text-purple-700 hover:bg-purple-50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {section.label}
                  </button>
                );
              })}

              <div className="border-t border-purple-100 pt-4 space-y-2">
                {otherPapers.map((paper) => (
                  <Link
                    key={paper.id}
                    to={paper.to}
                    className="block px-4 py-3 text-purple-700 hover:bg-purple-50 rounded-lg font-medium"
                  >
                    {paper.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
