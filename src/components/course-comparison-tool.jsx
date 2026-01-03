import React, { useState } from "react";
import { Check, X, ArrowRight, Info } from "lucide-react";

const CourseComparisonTool = () => {
  const [selectedCourses, setSelectedCourses] = useState([
    "upsc",
    "tnpsc",
    "banking",
  ]);

  const allCourses = {
    upsc: {
      name: "UPSC Civil Services",
      fullName: "Union Public Service Commission",
      color: "bg-blue-600",
    },
    tnpsc: {
      name: "TNPSC Exams",
      fullName: "Tamil Nadu Public Service Commission",
      color: "bg-green-600",
    },
    banking: {
      name: "Banking Exams",
      fullName: "IBPS, SBI, RBI",
      color: "bg-purple-600",
    },
    ssc: {
      name: "SSC Exams",
      fullName: "Staff Selection Commission",
      color: "bg-orange-600",
    },
    railway: {
      name: "Railway Exams",
      fullName: "RRB NTPC, Group D, ALP",
      color: "bg-red-600",
    },
  };

  const comparisonData = {
    upsc: {
      minEducation: "Graduate (Any stream)",
      ageLimit: "21-32 years",
      examStages: "3 stages (Prelims, Mains, Interview)",
      duration: "12-18 months prep",
      difficulty: "Very High",
      vacancies: "800-1000 per year",
      salary: "₹56,100 - ₹2,50,000/month",
      examLanguage: "English & 22 Indian languages",
      attempts: "Up to 6 attempts (General)",
      jobProfile: "IAS, IPS, IFS, IRS Officers",
      workLocation: "All India Service",
      growth: "Excellent (Secretary level)",
      ourBatch: "UPSC Prelims Foundation",
      batchLink: "/courses/upsc",
    },
    tnpsc: {
      minEducation: "Graduate (for Group 1 & 2)",
      ageLimit: "18-32 years",
      examStages: "2-3 stages (depends on Group)",
      duration: "6-12 months prep",
      difficulty: "High",
      vacancies: "2000-3000 per year",
      salary: "₹25,000 - ₹1,50,000/month",
      examLanguage: "Tamil & English",
      attempts: "No limit on attempts",
      jobProfile: "DSP, Deputy Collector, VAO",
      workLocation: "Tamil Nadu State",
      growth: "Good (District level)",
      ourBatch: "TNPSC Group 2 Integrated",
      batchLink: "/courses/tnpsc",
    },
    banking: {
      minEducation: "Graduate (any stream)",
      ageLimit: "20-30 years",
      examStages: "3 stages (Prelims, Mains, Interview)",
      duration: "4-8 months prep",
      difficulty: "Medium to High",
      vacancies: "10,000-15,000 per year",
      salary: "₹23,000 - ₹70,000/month",
      examLanguage: "English & Hindi",
      attempts: "No limit on attempts",
      jobProfile: "PO, Clerk, SO positions",
      workLocation: "Pan India (transfers common)",
      growth: "Good (Scale VI, VII)",
      ourBatch: "Banking Fast Track",
      batchLink: "/courses/banking",
    },
    ssc: {
      minEducation: "10th to Graduate (varies)",
      ageLimit: "18-32 years",
      examStages: "2-4 stages (depends on exam)",
      duration: "6-10 months prep",
      difficulty: "Medium",
      vacancies: "50,000+ per year",
      salary: "₹18,000 - ₹80,000/month",
      examLanguage: "English & Hindi",
      attempts: "No limit on attempts",
      jobProfile: "Inspector, Assistant, Clerk",
      workLocation: "Central Govt (All India)",
      growth: "Steady promotion",
      ourBatch: "SSC CGL Foundation",
      batchLink: "/courses/ssc",
    },
    railway: {
      minEducation: "10th to Graduate (varies)",
      ageLimit: "18-33 years",
      examStages: "2-3 stages",
      duration: "4-8 months prep",
      difficulty: "Medium",
      vacancies: "60,000+ per year",
      salary: "₹18,000 - ₹60,000/month",
      examLanguage: "English & Hindi",
      attempts: "No limit on attempts",
      jobProfile: "Ticket Collector, ALP, Clerk",
      workLocation: "Indian Railways (transfers)",
      growth: "Good job security",
      ourBatch: "RRB NTPC Complete",
      batchLink: "/courses/railway",
    },
  };

  const comparisonRows = [
    { key: "minEducation", label: "Minimum Education", icon: "🎓" },
    { key: "ageLimit", label: "Age Limit", icon: "📅" },
    { key: "examStages", label: "Exam Stages", icon: "📝" },
    { key: "duration", label: "Preparation Time", icon: "⏱️" },
    { key: "difficulty", label: "Difficulty Level", icon: "📊" },
    { key: "vacancies", label: "Annual Vacancies", icon: "👥" },
    { key: "salary", label: "Salary Range", icon: "💰" },
    { key: "examLanguage", label: "Exam Language", icon: "🗣️" },
    { key: "attempts", label: "Number of Attempts", icon: "🔄" },
    { key: "jobProfile", label: "Job Profile", icon: "💼" },
    { key: "workLocation", label: "Work Location", icon: "📍" },
    { key: "growth", label: "Career Growth", icon: "📈" },
  ];

  const handleCourseToggle = (courseId) => {
    if (selectedCourses.includes(courseId)) {
      if (selectedCourses.length > 2) {
        setSelectedCourses(selectedCourses.filter((id) => id !== courseId));
      }
    } else {
      if (selectedCourses.length < 3) {
        setSelectedCourses([...selectedCourses, courseId]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto  mt-5">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Compare Government Exam Courses
          </h1>
          <p className="text-gray-600 text-lg">
            Find the perfect exam that matches your career goals
          </p>
        </div>

        {/* Course Selector */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-800">
              Select up to 3 exams to compare
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {Object.entries(allCourses).map(([id, course]) => (
              <button
                key={id}
                onClick={() => handleCourseToggle(id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCourses.includes(id)
                    ? `${course.color} text-white shadow-lg`
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {selectedCourses.includes(id) && (
                  <Check className="inline w-4 h-4 mr-2" />
                )}
                {course.name}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <th className="p-4 text-left font-semibold sticky left-0 bg-blue-600 z-10">
                    Comparison Factor
                  </th>
                  {selectedCourses.map((courseId) => (
                    <th
                      key={courseId}
                      className="p-4 text-center font-semibold min-w-64"
                    >
                      <div className="text-xl mb-1">
                        {allCourses[courseId].name}
                      </div>
                      <div className="text-sm opacity-90 font-normal">
                        {allCourses[courseId].fullName}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={row.key}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="p-4 font-semibold text-gray-700 sticky left-0 bg-inherit border-r z-10">
                      <span className="mr-2">{row.icon}</span>
                      {row.label}
                    </td>
                    {selectedCourses.map((courseId) => (
                      <td
                        key={courseId}
                        className="p-4 text-center text-gray-600"
                      >
                        {comparisonData[courseId][row.key]}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Our Course Row */}
                <tr className="bg-blue-50 border-t-2 border-blue-200">
                  <td className="p-4 font-bold text-blue-800 sticky left-0 bg-blue-50 z-10">
                    🎓 Our Recommended Course
                  </td>
                  {selectedCourses.map((courseId) => (
                    <td key={courseId} className="p-4 text-center">
                      <div className="font-semibold text-gray-800 mb-2">
                        {comparisonData[courseId].ourBatch}
                      </div>
                      <a
                        href={comparisonData[courseId].batchLink}
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                      >
                        View Details <ArrowRight className="w-4 h-4" />
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">
            Still confused? Let us help!
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Talk to our expert counselors for personalized guidance
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Book Free Counseling
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi, I need help choosing the right course"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseComparisonTool;
