import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import logo from "../assets/images.png";

const Footer = () => {
  return (
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
          <p className="mt-0.5" style={{ textAlign: "center" }}>
            Developed by Mohammed Fuzail Rayyan H
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
