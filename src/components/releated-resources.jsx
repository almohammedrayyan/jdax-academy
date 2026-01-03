import { Link } from "react-router-dom";
import {
  FileText,
  Calendar,
  BookOpen,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import React from "react";

const iconMap = {
  file: FileText,
  calendar: Calendar,
  book: BookOpen,
  message: MessageCircle,
};

export function RelatedResources({ resources }) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-purple-600" />
        Related Resources
      </h4>

      <div className="space-y-3">
        {resources &&
          resources.map((resource, index) => {
            const Icon = iconMap[resource.icon] || BookOpen;

            const content = (
              <>
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>

                <span className="flex-1 text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
                  {resource.title}
                </span>

                {resource.external && (
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
                )}
              </>
            );

            return resource.external ? (
              <a
                key={index}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-purple-500 hover:shadow-md transition-all duration-300 group"
              >
                {content}
              </a>
            ) : (
              <Link
                key={index}
                to={resource.href}
                className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-purple-500 hover:shadow-md transition-all duration-300 group"
              >
                {content}
              </Link>
            );
          })}
      </div>
    </div>
  );
}
