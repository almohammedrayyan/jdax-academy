import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Cpu,
  Leaf,
  Menu,
  X,
  BookOpen,
  Target,
  Library,
  AlertTriangle,
} from "lucide-react";
import React from "react";

export default function GS3Navigation() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "architecture", label: "Architecture", icon: TrendingUp },
    { id: "topics", label: "Topics", icon: Cpu },
    { id: "strategy", label: "80-20 Rule", icon: Target },
    { id: "resources", label: "Resources", icon: Library },
    { id: "mistakes", label: "Mistakes", icon: AlertTriangle },
  ];

  const otherPapers = [
    {
      id: "gs1",
      label: "GS1",
      href: "/resources/study-main-materials",
      color: "emerald",
    },
    { id: "gs2", label: "GS2", href: "/mains/gs2", color: "purple" },
    { id: "gs4", label: "GS4", href: "/mains/gs4", color: "rose" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-cyan-100"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1
                  className={`text-lg font-bold ${
                    isScrolled ? "text-cyan-900" : "text-white"
                  }`}
                >
                  GS Mains Paper III
                </h1>
                <p
                  className={`text-xs ${
                    isScrolled ? "text-cyan-600" : "text-cyan-200"
                  }`}
                >
                  Technology & Economy
                </p>
              </div>
            </motion.div>

            <div className="hidden lg:flex items-center gap-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      activeSection === section.id
                        ? "bg-cyan-600 text-white shadow-lg"
                        : isScrolled
                        ? "text-cyan-700 hover:bg-cyan-50"
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

            <div className="hidden lg:flex items-center gap-2">
              {otherPapers.map((paper) => (
                <Link
                  key={paper.id}
                  to={paper.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isScrolled
                      ? `text-${paper.color}-700 hover:bg-${paper.color}-50`
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {paper.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                isScrolled ? "text-cyan-700" : "text-white"
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
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeSection === section.id
                        ? "bg-cyan-600 text-white"
                        : "text-cyan-700 hover:bg-cyan-50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{section.label}</span>
                  </button>
                );
              })}
              <div className="border-t border-cyan-100 pt-4 space-y-2">
                {otherPapers.map((paper) => (
                  <Link
                    key={paper.id}
                    to={paper.href}
                    className="block px-4 py-3 text-cyan-700 hover:bg-cyan-50 rounded-lg transition-all font-medium"
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
