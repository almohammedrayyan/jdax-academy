import React from "react";
import { FaFilePdf, FaDownload } from "react-icons/fa";
import pdf1 from "../../assets/jdax-prospect-1.pdf";
import pdf2 from "../../assets/jdax-prospect-2.pdf";

const ProspectDownload = () => {
  const downloadPDF = async (filePath, fileName) => {
    try {
      const response = await fetch(filePath);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
          Prospect
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="border border-gray-300 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <FaFilePdf className="text-red-600 text-6xl mb-4" />

            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              JDAX Academy Prospect
            </h3>

            <p className="text-gray-600 mb-6">
              Download the complete JDAX Academy prospect with course details
              and facilities.
            </p>

            <button
              onClick={() => downloadPDF(pdf1, "JDAX-Academy-Prospect.pdf")}
              className="inline-flex items-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition"
            >
              <FaDownload />
              Download PDF
            </button>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-300 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <FaFilePdf className="text-red-600 text-6xl mb-4" />

            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Civil Services Program Prospect
            </h3>

            <p className="text-gray-600 mb-6">
              Get detailed information about our Civil Services preparation
              program.
            </p>

            <button
              onClick={() => downloadPDF(pdf2, "Civil-Services-Prospect.pdf")}
              className="inline-flex items-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition"
            >
              <FaDownload />
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProspectDownload;
