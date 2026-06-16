import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Eye, MapPin } from "lucide-react";
const TotalViews = ({ totalViews }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <div className="flex items-center gap-2 bg-gradient-to-r from-[#0d1117] to-[#431aa0] border border-yellow-400/20 rounded-xl px-3 py-2 shadow-xl backdrop-blur-sm">
          <div className="bg-yellow-400/10 p-1.5 rounded-full">
            <Eye className="w-3.5 h-3.5 text-yellow-400" />
          </div>

          <div className="leading-none">
            <p className="text-[9px] text-yellow-300 uppercase tracking-wide">
              Total Views
            </p>
            <h3 className="text-sm font-bold text-yellow-400 mt-0.5">
              {totalViews.toLocaleString()}
            </h3>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TotalViews;
