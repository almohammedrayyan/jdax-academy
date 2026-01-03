import { useState } from "react";
import React from "react";

import { Download, Loader2 } from "lucide-react";

export function PDFExportButton({ title }) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = () => {
    setIsExporting(true);

    // Add print-specific class to body
    document.body.classList.add("printing");

    // Trigger print dialog
    window.print();

    // Remove print-specific class after a short delay
    setTimeout(() => {
      document.body.classList.remove("printing");
      setIsExporting(false);
    }, 100);
  };

  return (
    <button
      onClick={handleExport}
      disabled={isExporting}
      className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-xl"
    >
      {isExporting ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Preparing PDF...
        </>
      ) : (
        <>
          <Download className="w-5 h-5" />
          Download as PDF
        </>
      )}
    </button>
  );
}
