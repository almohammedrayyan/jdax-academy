import { BookOpen } from "lucide-react";
import React from "react";

export function ProgressIndicator({ currentStep, totalSteps, title }) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 mb-8 border border-purple-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-white" />
        </div>

        <div>
          <p className="text-sm text-gray-600 font-medium">
            Your Learning Progress
          </p>
          <p className="text-lg font-bold text-gray-900">
            Step {currentStep} of {totalSteps}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full h-3 bg-white rounded-full overflow-hidden shadow-inner">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Step Dots */}
      <div className="flex justify-between mt-4">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              step <= currentStep
                ? "bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-md scale-110"
                : "bg-white text-gray-400 border-2 border-gray-200"
            }`}
          >
            {step}
          </div>
        ))}
      </div>

      {title && (
        <p className="text-center mt-4 text-sm text-gray-700 font-medium">
          {title}
        </p>
      )}
    </div>
  );
}
