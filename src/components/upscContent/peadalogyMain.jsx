import React, { useState } from "react";
import Peadology from "./peadalogy";
import Prelims from "./prelims";
import MainExe from "./mainEx";
import JdaxExe from "./jdaxExe";

const PeadalogyMain = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which accordion is open

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "COMPETITIVE EXAMS ECOSYSTEM BUILDING INITIATIVES",
      file: <Peadology />,
    },
    {
      title: "PRELIMS MASTERY INITIATIVES",
      file: <Prelims />,
    },
    {
      title: "MAINS EXCELLENCE INITIATIVES",
      file: <MainExe />,
    },
    {
      title: "UPSC CSE INTERVIEW TRANSFORMATION INITIATIVE",
      file: <JdaxExe />,
    },
  ];

  return (
    <div className="p-2 md:p-16 text-gray-800 leading-relaxed">
      {/* MAIN TITLE */}
      <h1 className="text-2xl font-bold mb-6">
        <span className="font-extrabold text-xl">--&gt;</span> PEDAGOGY &amp;
        DELIVERY INITIATIVES
      </h1>

      <div className="space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm overflow-hidden bg-white"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg hover:bg-gray-100 transition"
            >
              <span>
                <span className="font-bold">→</span> {item.title}
              </span>

              <span className="text-2xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Accordion Content */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-fit p-6" : "max-h-0 p-0"
              } overflow-hidden`}
            >
              {item.file}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeadalogyMain;
