import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

export function TopicCard({
  number,
  title,
  description,
  readTime,
  href,
  icon,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-white rounded-xl border-2 border-gray-200 hover:border-purple-500 transition-all duration-300 hover:shadow-xl overflow-hidden"
    >
      <Link to={href} className="block p-6">
        <div className="flex items-start gap-4">
          {/* Number Badge */}
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
            {number}
          </div>

          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-100 transition-colors">
            {icon}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
              {title}
            </h3>

            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {description}
            </p>

            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1 text-gray-500">
                <Clock className="w-4 h-4" />
                {readTime}
              </span>

              <span className="flex items-center gap-1 text-purple-600 font-medium group-hover:gap-2 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
