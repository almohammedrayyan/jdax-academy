import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Home,
  BookOpen,
  Users,
  Globe,
  Landmark,
  TrendingUp,
  Library,
  AlertCircle,
  FileText,
} from "lucide-react";

export default function GS1Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { icon: Home, label: "Overview", href: "#overview" },
    { icon: FileText, label: "Architecture", href: "#architecture" },
    { icon: Landmark, label: "Culture", href: "#culture" },
    { icon: BookOpen, label: "History", href: "#history" },
    { icon: Users, label: "Society", href: "#society" },
    { icon: Globe, label: "Geography", href: "#geography" },
    { icon: TrendingUp, label: "80-20 Rule", href: "#80-20" },
    { icon: Library, label: "Resources", href: "#resources" },
    { icon: AlertCircle, label: "Mistakes", href: "#mistakes" },
  ];

  return (
    <motion.nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b-4 ${
        scrolled
          ? "bg-gradient-to-r from-emerald-600 to-green-600 shadow-2xl border-emerald-800"
          : "bg-gradient-to-r from-emerald-500 to-green-500 backdrop-blur-sm border-emerald-700"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto px-4 py-3">
        <div className="flex flex-wrap justify-center gap-2">
          {/* Other Mains Papers */}
          <div className="flex gap-2 mr-4 border-r-2 border-white/30 pr-4">
            <Link
              to="/mains/gs2"
              className="px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs uppercase rounded-lg shadow-md transition"
            >
              GS2
            </Link>
            <Link
              to="/mains/gs3"
              className="px-3 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase rounded-lg shadow-md transition"
            >
              GS3
            </Link>
            <Link
              to="/mains/gs4"
              className="px-3 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase rounded-lg shadow-md transition"
            >
              GS4
            </Link>
          </div>

          {/* GS1 Navigation */}
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 bg-white/95 hover:bg-emerald-100 text-emerald-800 hover:text-emerald-900 font-bold text-sm uppercase tracking-wide rounded-lg transition-all duration-300 hover:scale-105 shadow-md"
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
