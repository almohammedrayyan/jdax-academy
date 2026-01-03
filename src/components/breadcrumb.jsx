import React from "react";
import { Link } from "react-router-dom";

import { ChevronRight, Home } from "lucide-react";

export function Breadcrumb({ items }) {
  return (
    <nav
      className="flex items-center gap-2 text-sm text-gray-600 mb-6 flex-wrap"
      aria-label="Breadcrumb"
    >
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-purple-600 transition-colors"
      >
        <Home className="w-4 h-4" />
        Home
      </Link>

      {items &&
        items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-gray-400" />

            {item.href ? (
              <Link
                to={item.href}
                className="hover:text-purple-600 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}
          </div>
        ))}
    </nav>
  );
}
