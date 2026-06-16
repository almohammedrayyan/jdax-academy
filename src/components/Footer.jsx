import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronUp, Eye, MapPin } from "lucide-react";
import logo from "../assets/images.png";
import TotalViews from "./Views/totalViews";
import axios from "axios";
const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [view, setViews] = useState(0);

  const fetchViews = async () => {
    try {
      const response = await axios.get(
        "https://jdax-server.onrender.com/api/events/realtime-visitors",
      );
      setViews(response.data?.totalViews);
    } catch (error) {
      console.error("Error fetching views:", error);
    }
  };

  useEffect(() => {
    fetchViews();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <TotalViews totalViews={view} />
      {/* {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
            fixed bottom-6 right-6 z-50
            bg-gradient-to-r from-[#0d1117] to-[#431aa0]
            border border-yellow-400/30
            text-yellow-400
            p-3 rounded-full
            shadow-2xl backdrop-blur-md
            hover:scale-110 transition-all duration-300
          "
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )} */}
      <footer className="w-full bg-gradient-to-r from-[#0d1117] to-[#431aa0] text-yellow-400 py-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-screen-xl mx-auto px-4 flex flex-col gap-2"
        >
          {/* Top section: Single line with logo, address & map */}
          <div className="flex items-center justify-between gap-6 text-sm md:text-base font-semibold">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={logo}
                alt="JDAX Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Address and Map side by side */}
            <div className="flex items-center gap-4 flex-wrap flex-1">
              <p className="leading-tight md:text-left">
                JDAX Main Centre, #23, Santhome High Road, Chennai-600004, Tamil
                Nadu (Opp to Santhome Higher Sec School){" "}
                <a
                  href="https://www.google.com/maps?q=13.0328682,80.2777262"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-300 hover:underline whitespace-nowrap"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-yellow-300 border-opacity-20" />

          {/* Bottom Text */}
          <div className="text-center text-xs md:text-sm font-semibold">
            <p style={{ textAlign: "center" }}>
              © 2025 • JD Academy of eXcellence. All rights reserved.
            </p>
            <p className="mt-0.5 text-center">
              Developed by{" "}
              <a
                href="https://in.linkedin.com/in/mohammed-fuzail-rayyan-689a6915a"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline transition"
                style={{ color: "#facc15" }}
              >
                Mohammed Fuzail Rayyan H
              </a>
              <span className="mx-1 text-gray-400">—</span>
              <a
                href="https://fuzail.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline hover:text-blue-600 transition"
              >
                View Portfolio
              </a>
            </p>
          </div>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
