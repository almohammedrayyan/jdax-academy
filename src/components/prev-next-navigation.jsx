import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import React from "react";

export function PrevNextNavigation({ prev, next }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 mb-8">
      {/* Previous Button */}
      <div>
        {prev ? (
          <Link
            to={prev.href}
            className="group flex items-center gap-3 p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </div>

            <div className="flex-1 text-left">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                Previous
              </p>
              <p className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                {prev.title}
              </p>
            </div>
          </Link>
        ) : (
          <Link
            to="/courses/upsc"
            className="group flex items-center gap-3 p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Home className="w-5 h-5" />
            </div>

            <div className="flex-1 text-left">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                Back to
              </p>
              <p className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                Hub Page
              </p>
            </div>
          </Link>
        )}
      </div>

      {/* Next Button */}
      <div>
        {next && (
          <Link
            to={next.href}
            className="group flex items-center gap-3 p-6 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex-1 text-left">
              <p className="text-xs text-purple-100 uppercase tracking-wider mb-1">
                Next Step
              </p>
              <p className="font-bold">{next.title}</p>
            </div>

            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
