import React from "react";
import { Link } from "react-router-dom";

const RegulatoryPage = () => {
  const bodies = [
    {
      name: "RBI Grade B",
      icon: "fa-building-columns",
      role: "Monetary policy & regulation",
      focus: "Finance & Management",
    },
    {
      name: "SEBI Grade A",
      icon: "fa-chart-line",
      role: "Securities markets regulation",
      focus: "Securities Market",
    },
    {
      name: "NABARD Grade A",
      icon: "fa-wheat-awn",
      role: "Agri & Rural development",
      focus: "ESI & Agriculture",
    },
    {
      name: "IRDAI Assistant Mgr",
      icon: "fa-shield-heart",
      role: "Insurance sector regulation",
      focus: "Insurance Knowledge",
    },
    {
      name: "EPFO Enforcement",
      icon: "fa-users-gear",
      role: "Social security & PF",
      focus: "Social Security",
    },
  ];
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

      <header className="bg-green-gradient py-20 px-4 text-white mt-5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase">
            ⚖️ IV. REGULATORY BODIES EXAMS
          </h1>
          <p className="text-xl opacity-90 " style={{ textAlign: "center" }}>
            High-Level Specialist Exams for Finance, Insurance, and Governance
            Sectors.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Intro */}
        <section className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Prestigious Roles, Competitive Standards
          </h2>
          <p className="text-gray-600 text-lg">
            Regulatory exams are often compared to UPSC in terms of complexity.
            They require a blend of general aptitude (like Banking) and deep
            domain-specific knowledge.
          </p>
        </section>

        {/* Major Boards Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bodies.map((body) => (
              <div
                key={body.name}
                className="bg-white p-8 rounded-3xl shadow-xl border-l-8 border-emerald-500 card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="text-emerald-600 text-3xl mb-4">
                    <i className={`fas ${body.icon}`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {body.name}
                  </h3>
                  <p className="text-emerald-700 font-medium text-sm mb-4 italic">
                    {body.role}
                  </p>
                  <div className="bg-gray-100 p-3 rounded-lg text-xs font-bold text-gray-500 uppercase tracking-widest">
                    Focus: {body.focus}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Preparation Overlap (The Hub Strategy) */}
        <section className="mb-20">
          <div className="bg-emerald-900 text-white p-12 rounded-3xl flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-6">
                The Hub Strategy: Preparation Overlap
              </h3>
              <p className="opacity-80 mb-6">
                If you are already preparing for Banking (IBPS PO) or SSC CGL,
                you are 70% ready for Regulatory exams.
              </p>
              <div className="space-y-3">
                <div className="flex gap-3 items-center">
                  <i className="fas fa-check text-emerald-400"></i> Common Phase
                  1 (Prelims) pattern.
                </div>
                <div className="flex gap-3 items-center">
                  <i className="fas fa-check text-emerald-400"></i> Similar
                  English & Reasoning difficulty.
                </div>
                <div className="flex gap-3 items-center">
                  <i className="fas fa-check text-emerald-400"></i> Overlap in
                  General Awareness sections.
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-white/10 p-8 rounded-2xl backdrop-blur-md">
              <h4 className="font-bold text-xl mb-4">
                Required "Delta" Preparation:
              </h4>
              <p className="text-sm opacity-90 mb-4">
                Candidates only need to focus on these additional topics:
              </p>
              <ul className="grid grid-cols-2 gap-3 text-xs uppercase font-bold tracking-wider">
                <li className="bg-emerald-700 p-2 rounded text-center">
                  Economics
                </li>
                <li className="bg-emerald-700 p-2 rounded text-center">
                  Social Issues
                </li>
                <li className="bg-emerald-700 p-2 rounded text-center">
                  Finance
                </li>
                <li className="bg-emerald-700 p-2 rounded text-center">
                  Mgmt. Principles
                </li>
                <li className="bg-emerald-700 p-2 rounded text-center">
                  Insurance Law
                </li>
                <li className="bg-emerald-700 p-2 rounded text-center">
                  Social Security
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion Table (Detailed RBI Example) */}
        <section>
          <div className="bg-white border rounded-3xl overflow-hidden shadow-xl">
            <div className="bg-gray-50 border-b p-6">
              <h4 className="font-bold text-xl">
                Detailed RBI Grade B Recruitment Pattern
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-emerald-50 text-emerald-800">
                  <tr>
                    <th className="p-4">Phase</th>
                    <th className="p-4">Subjects</th>
                    <th className="p-4">Similarity</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-sm">
                  <tr>
                    <td className="p-4 font-bold">Phase 1 (Prelims)</td>
                    <td className="p-4">GA, English, Quant, Reasoning</td>
                    <td className="p-4 italic">
                      Similar to IBPS PO Mains difficulty
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">Phase 2 (Mains)</td>
                    <td className="p-4">
                      Economic & Social Issues, Finance & Mgmt, English
                      Descriptive
                    </td>
                    <td className="p-4 italic">High specialization focus</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">Phase 3 (Interview)</td>
                    <td className="p-4">Personality and domain knowledge</td>
                    <td className="p-4 italic">Core personality assessment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RegulatoryPage;
