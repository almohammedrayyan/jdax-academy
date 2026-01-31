import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  GraduationCap,
  Users,
  Shield,
  HardHat,
  Keyboard,
} from "lucide-react";

const SSCPage = () => {
  const exams = [
    {
      title: "CGL",
      sub: "Combined Graduate Level",
      icon: User,
      color: "bg-blue-600",
      description: "30L+ Typical Annual Applicants",
    },
    {
      title: "CHSL",
      sub: "Higher Secondary Level",
      icon: GraduationCap,
      color: "bg-indigo-600",
      description: "50L+ Typical Annual Applicants",
    },
    {
      title: "MTS",
      sub: "Multi Tasking Staff",
      icon: Users,
      color: "bg-purple-600",
      description: "Highly Popular Entry Level",
    },
    {
      title: "CPO",
      sub: "Sub-Inspector",
      icon: Shield,
      color: "bg-red-600",
      description: "Delhi Police & CAPFs",
    },
    {
      title: "JE",
      sub: "Junior Engineer",
      icon: HardHat,
      color: "bg-orange-600",
      description: "Civil, Mechanical, Electrical",
    },
    {
      title: "Steno",
      sub: "Grades C & D",
      icon: Keyboard,
      color: "bg-teal-600",
      description: "Stenography Services",
    },
  ];

  const navLinks = [
    { name: "Hub Home", path: "/courses/ssc" },
    { name: "SSC Exams", path: "/ssc" },
    { name: "Banking", path: "/banking" },
    { name: "RRB", path: "/rrb" },
    { name: "Regulatory", path: "/regulatory" },
  ];
  const navigate = useNavigate();
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

      <header className="bg-blue-gradient py-20 px-4 text-white mt-5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight">
            I. SSC EXAMS (Staff Selection Commission)
          </h1>
          <p
            className="text-xl opacity-90 text-center"
            style={{ textAlign: "center" }}
          >
            Comprehensive Roadmap and Detailed Pattern for India's Premier
            Recruiting Agency.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Intro */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                <i className="fas fa-info-circle"></i> About SSC Recruitment
              </h3>
              <ul className="space-y-4 text-blue-800">
                <li className="flex gap-3">
                  <i className="fas fa-check-circle mt-1 text-blue-600"></i>{" "}
                  <span>
                    Statutory Body under the Department of Personnel and
                    Training (DoPT).
                  </span>
                </li>
                <li className="flex gap-3">
                  <i className="fas fa-check-circle mt-1 text-blue-600"></i>{" "}
                  <span>
                    Primary role: Recruitment for Group B & C Non-Technical
                    posts in Ministries.
                  </span>
                </li>
                <li className="flex gap-3">
                  <i className="fas fa-check-circle mt-1 text-blue-600"></i>{" "}
                  <span>
                    Ensures a merit-based selection through multi-tier
                    competitive exams.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://picsum.photos/seed/ssc-hq/600/400"
                className="rounded-2xl shadow-xl"
                alt="SSC Administration"
              />
            </div>
          </div>
        </section>

        {/* Detailed Pattern Table (Matching Uploaded Image exactly) */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
              Comparative Exam Pattern
            </h2>
            <p className="text-gray-500 italic">
              Official tier-wise breakdown structure
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-2xl border border-gray-200">
            <table className="w-full text-left border-collapse min-w-[950px]">
              <thead className="bg-[#6b66d1] text-white uppercase text-sm font-bold tracking-wider">
                <tr>
                  <th className="p-6 border-r border-white/20 w-1/6">
                    TIER/STAGE
                  </th>
                  <th className="p-6 border-r border-white/20 w-1/4">CGL</th>
                  <th className="p-6 border-r border-white/20 w-1/4">CHSL</th>
                  <th className="p-6 w-1/3">MTS/SI/CONSTABLE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {/* Tier 1 Row */}
                <tr className="align-top">
                  <td className="p-6 font-bold text-gray-900 bg-gray-50 border-r border-gray-200">
                    Tier 1
                  </td>
                  <td className="p-6 border-r border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-3">
                      Single Paper (1 Hour, 100 Questions, 200 Marks)
                    </h4>
                    <ul className="space-y-2 text-[13px] text-gray-700">
                      <li className="flex items-start gap-1">
                        •{" "}
                        <span>
                          General Intelligence & Reasoning (25 Qns/50 Marks)
                        </span>
                      </li>
                      <li className="flex items-start gap-1">
                        • <span>General Awareness (25 Qns/50 Marks)</span>
                      </li>
                      <li className="flex items-start gap-1">
                        • <span>Quantitative Aptitude (25 Qns/50 Marks)</span>
                      </li>
                      <li className="flex items-start gap-1">
                        • <span>English Comprehension (25 Qns/50 Marks)</span>
                      </li>
                    </ul>
                  </td>
                  <td className="p-6 border-r border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-3">
                      Part-wise Structure (100 Questions/200 Marks)
                    </h4>
                    <ul className="space-y-2 text-[13px] text-gray-700">
                      <li className="flex items-start gap-1">
                        • <span>Part I: English Language (25Q/50M)</span>
                      </li>
                      <li className="flex items-start gap-1">
                        • <span>Part II: General Intelligence (25Q/50M)</span>
                      </li>
                      <li className="flex items-start gap-1">
                        • <span>Part III: Quantitative Aptitude (25Q/50M)</span>
                      </li>
                      <li className="flex items-start gap-1">
                        • <span>Part IV: General Awareness (25Q/50M)</span>
                      </li>
                    </ul>
                  </td>
                  <td className="p-6">
                    <h4 className="font-bold text-gray-800 mb-3">
                      Session-based Pattern
                    </h4>
                    <div className="space-y-4 text-[13px] text-gray-700">
                      <div>
                        <p className="font-semibold text-gray-900">
                          Session I:
                        </p>
                        <ul className="ml-2">
                          <li>• Numerical and Mathematical Ability</li>
                          <li>• Reasoning Ability and Problem Solving</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Session II:
                        </p>
                        <ul className="ml-2">
                          <li>• General Awareness</li>
                          <li>• English Language and Comprehension</li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
                {/* Tier 2 Row */}
                <tr className="align-top">
                  <td className="p-6 font-bold text-gray-900 bg-gray-50 border-r border-gray-200">
                    Tier 2
                  </td>
                  <td className="p-6 border-r border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-2">
                      Session 1 (2 Hours 15 Minutes):
                    </h4>
                    <div className="space-y-3 text-[13px] text-gray-700">
                      <div>
                        <p className="font-semibold text-gray-900">
                          Section 1 (180 Marks):
                        </p>
                        <ul className="ml-2">
                          <li>• Module-I: Mathematical Abilities (30Q/90M)</li>
                          <li>
                            • Module-II: Reasoning & General Intelligence
                            (30Q/90M)
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Section 2 (210 Marks):
                        </p>
                        <ul className="ml-2">
                          <li>• Module-I: English Language (45Q/135M)</li>
                          <li>• Module-II: General Awareness (25Q/75M)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Section 3 (60 Marks):
                        </p>
                        <ul className="ml-2">
                          <li>• Module-I: Computer Knowledge (20Q/60M)</li>
                        </ul>
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-800 mt-4 mb-1">
                      Session 2 (15 Minutes):
                    </h4>
                    <p className="text-[13px] text-gray-700 ml-2">
                      • Module-II: Data Entry Speed Test
                    </p>
                  </td>
                  <td className="p-6 border-r border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-2">
                      Session I (2 Hours 15 Minutes):
                    </h4>
                    <div className="space-y-3 text-[13px] text-gray-700">
                      <div>
                        <p className="font-semibold text-gray-900">
                          Section I:
                        </p>
                        <ul className="ml-2">
                          <li>• Mathematical Abilities (30Q/90M)</li>
                          <li>• Reasoning & General Intelligence (30Q/90M)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Section II:
                        </p>
                        <ul className="ml-2">
                          <li>• English Language (40Q/135M)</li>
                          <li>• General Awareness (20Q/75M)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Section III:
                        </p>
                        <ul className="ml-2">
                          <li>• Computer Knowledge (15Q/45M)</li>
                        </ul>
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-800 mt-4 mb-1">
                      Session II:
                    </h4>
                    <p className="text-[13px] text-gray-700 ml-2">
                      • Skill Test/Typing Test Module
                    </p>
                  </td>
                  <td className="p-6">
                    <ul className="space-y-3 text-[13px] font-medium text-gray-700">
                      <li className="flex items-start gap-1">
                        • <span>Skill Test/Typing Test</span>
                      </li>
                      <li className="font-bold text-gray-400">OR</li>
                      <li className="flex items-start gap-1">
                        • <span>PST (Physical Standard Test)</span>
                      </li>
                      <li className="flex items-start gap-1">
                        • <span>PET (Physical Efficiency Test)</span>
                      </li>
                      <li className="flex items-start gap-1">
                        • <span>DME (Detailed Medical Examination)</span>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Exams Grid Summary */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 uppercase tracking-wide">
            Popular Career Paths
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {exams.map((exam) => {
              const Icon = exam.icon; // 👈 important

              return (
                <div
                  key={exam.title}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-300 transition-all card-hover"
                >
                  <div
                    className={`${exam.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {exam.title}
                  </h3>

                  <p className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wider">
                    {exam.sub}
                  </p>

                  <p className="text-gray-500">{exam.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Calendar */}
        <section className="mb-20 overflow-hidden rounded-3xl shadow-xl border border-gray-200">
          <div className="bg-gray-900 text-white p-6 flex justify-between items-center">
            <h3 className="text-xl font-bold" style={{ color: "white" }}>
              📅 Typical Annual Exam Calendar
            </h3>
            <span className="bg-indigo-600 px-3 py-1 rounded-full text-xs">
              Estimate
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="p-4 font-bold text-gray-700">Exam Name</th>
                  <th className="p-4 font-bold text-gray-700">Notification</th>
                  <th className="p-4 font-bold text-gray-700">
                    Tentative Exam
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: "CGL", notif: "June", exam: "September-October" },
                  { name: "CHSL", notif: "April", exam: "July-August" },
                  {
                    name: "MTS & Havaldar",
                    notif: "June",
                    exam: "September-October",
                  },
                  {
                    name: "Selection Post",
                    notif: "February",
                    exam: "May-June",
                  },
                ].map((row) => (
                  <tr
                    key={row.name}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4 font-semibold text-gray-900">
                      {row.name}
                    </td>
                    <td className="p-4 text-gray-600">{row.notif}</td>
                    <td className="p-4">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {row.exam}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SSCPage;
