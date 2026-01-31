import React from "react";
import { Link } from "react-router-dom";

const RRBPage = () => {
  const navLinks = [
    { name: "Hub Home", path: "/courses/ssc" },
    { name: "SSC Exams", path: "/ssc" },
    { name: "Banking", path: "/banking" },
    { name: "RRB", path: "/rrb" },
    { name: "Regulatory", path: "/regulatory" },
  ];
  return (
    <div className="pt-20" style={{ fontSize: "25px" }}>
      <div
        className="hidden md:flex justify-center space-x-4"
        style={{ margin: "20px" }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="
        px-4 py-2
        rounded-full
        text-sm font-semibold
        bg-[#431aa0] text-white
        transition-all duration-300
        hover:bg-yellow-400 hover:text-[#431aa0]
      "
          >
            {link.name}
          </Link>
        ))}
      </div>

      <header className="bg-orange-gradient py-20 px-4 text-white mt-5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight">
            🚂 III. RRB EXAMS (Railway Recruitment Board)
          </h1>
          <p className="text-xl opacity-90 " style={{ textAlign: "center" }}>
            Strategic Guide to India's Lifeline Recruitment - Non-Technical &
            Technical Roles.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Intro */}
        <section className="mb-20">
          <div className="bg-orange-50 p-10 rounded-3xl border border-orange-100 flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-orange-900 mb-6 uppercase">
                About Railways Recruitment
              </h3>
              <p className="text-orange-800 text-lg leading-relaxed mb-6">
                RRBs function under the Ministry of Railways. Selection is based
                on 100% objective Computer Based Tests (CBT), followed by
                physical tests or document verification depending on the post.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-orange-200">
                  <i className="fas fa-map-location-dot text-orange-600 mr-2"></i>{" "}
                  Pan-India Recruitment
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-orange-200">
                  <i className="fas fa-microchip text-orange-600 mr-2"></i>{" "}
                  CBT-led Selection
                </div>
              </div>
            </div>
            <div className="md:w-1/3">
              <img
                src="https://picsum.photos/seed/train-station/400/400"
                className="rounded-3xl shadow-2xl border-4 border-white"
                alt="Indian Railways"
              />
            </div>
          </div>
        </section>

        {/* Detailed Pattern Table for RRB */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
              Railway Exam Patterns
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead className="bg-orange-600 text-white uppercase text-sm font-bold">
                <tr>
                  <th className="p-6 border-r border-orange-500/30">Stage</th>
                  <th className="p-6 border-r border-orange-500/30">
                    RRB NTPC
                  </th>
                  <th className="p-6 border-r border-orange-500/30">
                    RRB ALP & Tech
                  </th>
                  <th className="p-6">RRB Group D (Level 1)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr className="align-top">
                  <td className="p-6 font-bold text-gray-900 bg-orange-50 border-r border-gray-200">
                    CBT-1
                  </td>
                  <td className="p-6 border-r border-gray-200">
                    <p className="font-bold text-orange-700 text-sm mb-2">
                      Screening (1.5 Hours)
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• GA (40 Qs)</li>
                      <li>• Maths (30 Qs)</li>
                      <li>• Reasoning (30 Qs)</li>
                      <li className="font-bold text-orange-600 mt-2">
                        Total: 100 Marks
                      </li>
                    </ul>
                  </td>
                  <td className="p-6 border-r border-gray-200">
                    <p className="font-bold text-orange-700 text-sm mb-2">
                      60 Minutes
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Maths (20 Qs)</li>
                      <li>• Reasoning (25 Qs)</li>
                      <li>• Gen Science (20 Qs)</li>
                      <li>• GA (10 Qs)</li>
                    </ul>
                  </td>
                  <td className="p-6">
                    <p className="font-bold text-orange-700 text-sm mb-2">
                      90 Minutes
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Science (25 Qs)</li>
                      <li>• Maths (25 Qs)</li>
                      <li>• Reasoning (30 Qs)</li>
                      <li>• GA (20 Qs)</li>
                    </ul>
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="p-6 font-bold text-gray-900 bg-orange-50 border-r border-gray-200">
                    Stage 2
                  </td>
                  <td className="p-6 border-r border-gray-200">
                    <p className="font-bold text-orange-700 text-sm mb-2">
                      CBT-2 (Main Merit)
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• GA (50 Qs)</li>
                      <li>• Maths (35 Qs)</li>
                      <li>• Reasoning (35 Qs)</li>
                      <li className="font-bold text-orange-600 mt-2">
                        Total: 120 Marks
                      </li>
                    </ul>
                  </td>
                  <td className="p-6 border-r border-gray-200">
                    <p className="font-bold text-orange-700 text-sm mb-2">
                      Part A + Part B
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Part A: Merit (Math, Reasoning, Engineering)</li>
                      <li>• Part B: Qualifying Trade Test</li>
                    </ul>
                  </td>
                  <td className="p-6">
                    <p className="font-bold text-orange-700 text-sm mb-2">
                      Physical (PET)
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Weight Lifting & Running</li>
                      <li>• Followed by DV & Medical</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Schedule */}
        <section className="mb-20 bg-gray-900 p-10 rounded-3xl text-white">
          <h3 className="text-2xl font-bold mb-8 text-center uppercase tracking-widest text-orange-400">
            Preparation Insights
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4 border-l-4 border-orange-500 pl-6">
                <div>
                  <h4 className="font-bold text-lg">Focus on Science</h4>
                  <p className="text-gray-400">
                    Unlike SSC, RRB places high weightage on General Science
                    (Class 10 level NCERT).
                  </p>
                </div>
              </div>
              <div className="flex gap-4 border-l-4 border-orange-500 pl-6">
                <div>
                  <h4 className="font-bold text-lg">
                    Regional Language Advantage
                  </h4>
                  <p className="text-gray-400">
                    Tests are usually available in 15 different Indian
                    languages.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md">
              <h4 className="font-bold mb-4 text-orange-300">
                Negative Marking:
              </h4>
              <p className="text-sm text-gray-300 mb-4">
                Standard 1/3rd deduction for every incorrect answer across all
                RRB CBTs.
              </p>
              <div className="bg-orange-600/20 p-4 rounded-lg border border-orange-500/30">
                <p className="text-xs italic font-bold">
                  Accuracy is more important than speed in Railways exams due to
                  the normalization process.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RRBPage;
