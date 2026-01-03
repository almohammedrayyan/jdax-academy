import React from "react";
import { Link } from "react-router-dom";

const BankingPage = () => {
  const navLinks = [
    { name: "Hub Home", path: "/courses/ssc" },
    { name: "SSC Exams", path: "/ssc" },
    { name: "Banking", path: "/banking" },
    { name: "RRB", path: "/rrb" },
    { name: "Regulatory", path: "/regulatory" },
  ];
  return (
    <div className="pt-20">
      <div className="hidden md:flex justify-center space-x-4">
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

      <header className="bg-success-gradient py-20 px-4 text-white mt-5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase">
            🏦 II. BANKING EXAMS
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Comprehensive Roadmap for Careers in IBPS, SBI, RBI and Regional
            Rural Banks.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Recruiting Boards */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center uppercase tracking-wider">
            Major Recruitment Channels
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-600 transition-all card-hover">
              <h3 className="text-2xl font-bold text-indigo-900 mb-2">IBPS</h3>
              <p className="text-sm text-gray-500 mb-4 italic">
                PO, Clerk, SO, RRB
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Centralized agency for 11+ Nationalized Banks and all Regional
                Rural Banks (RRBs) in India.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-blue-600 transition-all card-hover">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">SBI</h3>
              <p className="text-sm text-gray-500 mb-4 italic">
                Independent Recruitment
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                State Bank of India conducts its own exams for PO, Clerk (Junior
                Associates), and Specialist Officers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-emerald-600 transition-all card-hover">
              <h3 className="text-2xl font-bold text-emerald-900 mb-2">RBI</h3>
              <p className="text-sm text-gray-500 mb-4 italic">
                Assistant & Grade B
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Reserved Bank of India recruitment is the most prestigious in
                the banking sector with elite benefits.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-orange-600 transition-all card-hover">
              <h3 className="text-2xl font-bold text-orange-900 mb-2">
                Local Banks
              </h3>
              <p className="text-sm text-gray-500 mb-4 italic">
                IDBI, PNB, Private
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Various other banks might conduct separate notifications for
                specialized roles throughout the year.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Pattern Table for Banking */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Standardized Selection Pattern
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead className="bg-emerald-600 text-white uppercase text-sm font-bold">
                <tr>
                  <th className="p-6 border-r border-emerald-500/30">Phase</th>
                  <th className="p-6 border-r border-emerald-500/30">
                    Banking PO / Clerk (Prelims)
                  </th>
                  <th className="p-6">Banking PO / Clerk (Mains)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr className="align-top">
                  <td className="p-6 font-bold text-gray-900 bg-emerald-50 border-r border-gray-200">
                    Structure
                  </td>
                  <td className="p-6 border-r border-gray-200">
                    <p className="font-bold text-emerald-700 text-sm mb-2">
                      1 Hour | 100 Qs | 100 Marks
                    </p>
                    <ul className="text-xs text-gray-600 space-y-2">
                      <li className="flex justify-between border-b pb-1">
                        <span>English</span> <span>30 Marks</span>
                      </li>
                      <li className="flex justify-between border-b pb-1">
                        <span>Quant</span> <span>35 Marks</span>
                      </li>
                      <li className="flex justify-between border-b pb-1">
                        <span>Reasoning</span> <span>35 Marks</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-[10px] text-gray-400 font-bold uppercase">
                      Sectional Timing: 20 Mins Each
                    </p>
                  </td>
                  <td className="p-6">
                    <p className="font-bold text-emerald-700 text-sm mb-2">
                      3 Hours + | 200+ Marks
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Reasoning & Computer Aptitude</li>
                      <li>• General/Financial Awareness</li>
                      <li>• Data Analysis & Interpretation</li>
                      <li>• English Language</li>
                      <li className="font-bold text-indigo-600 mt-2">
                        • Descriptive Test (PO only)
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Career Comparison */}
        <section className="mb-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-gradient-to-br from-white to-emerald-50 p-10 rounded-3xl shadow-sm border border-emerald-100">
            <h3 className="text-2xl font-bold mb-6 text-emerald-900 flex items-center gap-3">
              <i className="fas fa-check-double"></i> Banking vs SSC
            </h3>
            <ul className="space-y-4">
              {[
                "Recruitment Speed: Banking is much faster (6-8 months start to finish).",
                "Syllabus: Banking focuses on high-level calculation and logical reasoning.",
                "Posting: Pan-India postings with regular transfers every 3 years.",
                "Work Profile: Customer-facing in Clerical/PO roles, backend in Regulatory.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-700 text-sm">
                  <i className="fas fa-arrow-right text-emerald-500 mt-1"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Key Preparation Pillars
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-emerald-600 text-3xl">
                  <i className="fas fa-stopwatch"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Speed and Accuracy
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Vital for Prelims. You need to clear sectional cut-offs in
                    very tight time limits.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-emerald-600 text-3xl">
                  <i className="fas fa-newspaper"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Financial Awareness
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Daily reading of business news and banking terminology is
                    mandatory for Mains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BankingPage;
