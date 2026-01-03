import React from "react";
import { Link } from "react-router-dom";

const HubPage = () => {
  const hubs = [
    {
      title: "SSC Exams",
      description: "Group B & C recruitment for Central Government ministries.",
      path: "/ssc",
      color: "bg-blue-gradient",
      icon: "fa-book-open",
      subTopics: [
        "CGL",
        "CHSL",
        "MTS",
        "CPO",
        "Stenographer",
        "Junior Engineer",
      ],
    },
    {
      title: "Banking Exams",
      description: "Careers in IBPS, SBI, RBI, and Nationalized Banks.",
      path: "/banking",
      color: "bg-success-gradient",
      icon: "fa-building-columns",
      subTopics: [
        "IBPS PO/Clerk",
        "SBI PO/Clerk",
        "RBI Assistant",
        "Specialist Officer",
      ],
    },
    {
      title: "RRB Exams",
      description: "Technical and Non-Technical positions in Indian Railways.",
      path: "/rrb",
      color: "bg-orange-gradient",
      icon: "fa-train",
      subTopics: ["NTPC", "ALP", "Group D", "JE (Railways)"],
    },
    {
      title: "Regulatory Bodies",
      description: "Specialized roles in finance and governance sectors.",
      path: "/regulatory",
      color: "bg-green-gradient",
      icon: "fa-scale-balanced",
      subTopics: ["RBI Grade B", "SEBI Grade A", "NABARD", "IRDAI", "EPFO"],
    },
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="bg-primary-gradient pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#fff"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Complete Exam Guide Hub
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Your roadmap to success in SSC, Banking, Railways, and Regulatory
            Body examinations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 text-white">
              <div className="text-3xl font-bold mb-1">50K+</div>
              <div className="text-sm opacity-80 uppercase tracking-wider">
                Annual Vacancies
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 text-white">
              <div className="text-3xl font-bold mb-1">15+</div>
              <div className="text-sm opacity-80 uppercase tracking-wider">
                Major Boards
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 text-white">
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm opacity-80 uppercase tracking-wider">
                Verified Info
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 text-white">
              <div className="text-3xl font-bold mb-1">Live</div>
              <div className="text-sm opacity-80 uppercase tracking-wider">
                Exam Calendars
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Exam Path
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {hubs.map((hub) => (
            <Link to={hub.path} key={hub.title} className="group block h-full">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 h-full border border-gray-100">
                <div
                  className={`${hub.color} p-10 flex flex-col items-center justify-center text-white relative`}
                >
                  <i
                    className={`fas ${hub.icon} text-6xl mb-4 group-hover:scale-110 transition-transform`}
                  ></i>
                  <h3 className="text-3xl font-bold">{hub.title}</h3>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20"></div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {hub.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                      Popular Sub-topics
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {hub.subTopics.map((topic) => (
                        <span
                          key={topic}
                          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center text-indigo-600 font-bold group-hover:gap-4 gap-2 transition-all">
                    Explore Full Guide <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              A Unified Strategy for All Competitive Exams
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              While each board has its own pattern, the core syllabus often
              overlaps. Our hub helps you identify these commonalities to
              optimize your preparation time.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-600 text-white p-2 rounded-lg">
                  <i className="fas fa-check"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Unified Syllabus Analysis
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Compare Quant, Reasoning, and English topics across boards.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-indigo-600 text-white p-2 rounded-lg">
                  <i className="fas fa-check"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Dynamic Exam Calendars
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Typical schedules for notification and exams updated
                    annually.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://picsum.photos/seed/examstudy/800/600"
              alt="Student Studying"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HubPage;
