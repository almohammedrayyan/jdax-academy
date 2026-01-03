import React, { useState } from "react";
import {
  CheckCircle,
  ArrowRight,
  BookOpen,
  Target,
  Clock,
  Briefcase,
} from "lucide-react";

const CareerFinderQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const questions = [
    {
      id: "education",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      question: "What's your educational qualification?",
      options: [
        { value: "10th", label: "10th Pass" },
        { value: "12th", label: "12th Pass" },
        { value: "graduate", label: "Graduate (Any stream)" },
        { value: "postgrad", label: "Post Graduate" },
        { value: "professional", label: "Professional Degree" },
      ],
    },
    {
      id: "sector",
      icon: <Target className="w-8 h-8 text-blue-600" />,
      question: "Which sector interests you most?",
      options: [
        { value: "upsc", label: "Administrative Services (IAS/IPS)" },
        { value: "tnpsc", label: "State Government Jobs" },
        { value: "banking", label: "Banking & Finance" },
        { value: "railway", label: "Railways" },
        { value: "ssc", label: "SSC Exams" },
        { value: "notsure", label: "Not Sure Yet" },
      ],
    },
    {
      id: "time",
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      question: "How much time can you dedicate daily?",
      options: [
        { value: "less2", label: "Less than 2 hours" },
        { value: "2to4", label: "2-4 hours" },
        { value: "4to6", label: "4-6 hours" },
        { value: "fulltime", label: "6+ hours (Full-time)" },
      ],
    },
    {
      id: "status",
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      question: "What's your current work status?",
      options: [
        { value: "student", label: "Student" },
        { value: "working", label: "Working Professional" },
        { value: "preparing", label: "Preparing Full-time" },
        { value: "homemaker", label: "Homemaker" },
      ],
    },
  ];

  const calculateResult = (userAnswers) => {
    const { education, sector, time, status } = userAnswers;

    if (
      sector === "upsc" &&
      (education === "graduate" || education === "postgrad")
    ) {
      if (time === "fulltime" || time === "4to6") {
        return {
          course: "UPSC Prelims Foundation Course",
          duration: "12 months",
          description:
            "Comprehensive preparation for UPSC Civil Services with daily classes, test series, and current affairs.",
          successRate: "87%",
          link: "/courses/upsc-prelims",
        };
      } else {
        return {
          course: "UPSC Weekend Batch",
          duration: "18 months",
          description:
            "Perfect for working professionals. Weekend classes with recorded sessions.",
          successRate: "72%",
          link: "/courses/upsc-weekend",
        };
      }
    }

    if (sector === "tnpsc" && education === "graduate") {
      return {
        course: "TNPSC Group 2 Integrated Course",
        duration: "8 months",
        description:
          "Complete preparation for TNPSC Group 2 & 2A with Tamil/English medium options.",
        successRate: "91%",
        link: "/courses/tnpsc-group2",
      };
    }

    if (sector === "banking") {
      if (time === "less2" || status === "working") {
        return {
          course: "Banking Fast Track Program",
          duration: "4 months",
          description:
            "Quick preparation for IBPS PO/Clerk exams with flexible timing.",
          successRate: "85%",
          link: "/courses/banking-fasttrack",
        };
      } else {
        return {
          course: "Banking Comprehensive Course",
          duration: "6 months",
          description:
            "In-depth preparation for all banking exams including SBI, IBPS, and RBI.",
          successRate: "93%",
          link: "/courses/banking-comprehensive",
        };
      }
    }

    if (sector === "railway") {
      return {
        course: "RRB NTPC Complete Package",
        duration: "5 months",
        description:
          "Full preparation for Railway NTPC with practice tests and study material.",
        successRate: "88%",
        link: "/courses/rrb-ntpc",
      };
    }

    if (sector === "ssc") {
      return {
        course: "SSC CGL Foundation Course",
        duration: "6 months",
        description:
          "Comprehensive SSC CGL preparation with tier-wise approach.",
        successRate: "89%",
        link: "/courses/ssc-cgl",
      };
    }

    return {
      course: "Career Counseling Session",
      duration: "30 minutes",
      description:
        "Let our expert counselors guide you to find the perfect course based on your goals.",
      successRate: "100%",
      link: "/contact",
    };
  };

  const handleAnswer = (questionId, value) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const recommendation = calculateResult(newAnswers);
      setResult(recommendation);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  // RESULT VIEW
  if (result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
          <div className="text-center mb-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Perfect Match Found!
            </h2>
            <p className="text-gray-600">
              Based on your profile, here's our recommendation:
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-6 mb-6">
            <h3 className="text-2xl font-bold mb-3">{result.course}</h3>
            <p className="mb-4 opacity-90">{result.description}</p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <div className="font-semibold">Duration</div>
                <div className="text-lg">{result.duration}</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <div className="font-semibold">Success Rate</div>
                <div className="text-lg">{result.successRate}</div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => window.open(result.link, "_self")}
              className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              View Course Details <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={resetQuiz}
              className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Retake Quiz
            </button>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            Need help deciding?{" "}
            <a href="/contact" className="text-blue-600 font-semibold">
              Talk to our counselor
            </a>
          </div>
        </div>
      </div>
    );
  }

  // QUIZ VIEW
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>
              Question {currentStep + 1} of {questions.length}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">{currentQuestion.icon}</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(currentQuestion.id, option.value)}
              className="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium group-hover:text-blue-600">
                  {option.label}
                </span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition" />
              </div>
            </button>
          ))}
        </div>

        {/* Back Button */}
        {currentStep > 0 && (
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className="mt-6 text-gray-600 hover:text-gray-800 font-medium"
          >
            ← Back
          </button>
        )}
      </div>
    </div>
  );
};

export default CareerFinderQuiz;
