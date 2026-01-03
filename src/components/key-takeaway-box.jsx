import { Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

export function KeyTakeawayBox({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-8 p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>

        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-900 mb-2">
            📌 Key Takeaway
          </h4>

          <div className="text-gray-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </motion.div>
  );
}
