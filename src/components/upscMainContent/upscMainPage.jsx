import React from "react";

import { TopicCard } from "../topicCard";
import {
  BookOpen,
  Calendar,
  FileCheck,
  Users,
  Award,
  Shield,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function UpscMainPage() {
  const sectionA = [
    {
      number: 1,
      title: "What is UPSC Civil Services Exam?",
      description:
        "Understand the prestigious UPSC CSE, its significance, and why it's India’s toughest competitive examination.",
      readTime: "4-minute read",
      href: "/new-to-upsc/what-is-upsc-cse",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      number: 2,
      title: "Exam Stages and Timeline",
      description:
        "Complete overview of the 3-stage process: Prelims, Mains, and Interview with detailed timeline and preparation duration.",
      readTime: "5-minute read",
      href: "/new-to-upsc/exam-stages-timeline",
      icon: <Calendar className="w-6 h-6" />,
    },
  ];

  const sectionB = [
    {
      number: 3,
      title: "Understanding Prelims",
      description:
        "Detailed guide to UPSC Prelims: paper structure, syllabus breakdown, negative marking, qualifying criteria, and preparation strategy.",
      readTime: "7-minute read",
      href: "/new-to-upsc/prelims-guide",
      icon: <FileCheck className="w-6 h-6" />,
    },
    {
      number: 4,
      title: "Understanding Mains",
      description:
        "Master the Main Examination: 9 papers, essay writing, optional subjects, answer writing techniques, and time management.",
      readTime: "8-minute read",
      href: "/new-to-upsc/mains-guide",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      number: 5,
      title: "Personality Test Guide",
      description:
        "Crack the UPSC Interview: structure, assessment criteria, types of questions, scoring pattern, success strategies, and common mistakes.",
      readTime: "6-minute read",
      href: "/new-to-upsc/interview-guide",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const sectionC = [
    {
      number: 6,
      title: "Career Services & Prospects",
      description:
        "Explore 24 UPSC career services including IAS, IPS, IFS, IRS and more. Learn about service selection factors and career prospects.",
      readTime: "7-minute read",
      href: "/new-to-upsc/career-services",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: 7,
      title: "Eligibility Criteria",
      description:
        "Complete eligibility requirements: age limits, educational qualifications, attempt limits, fees, reservation policy, and physical standards.",
      readTime: "5-minute read",
      href: "/new-to-upsc/eligibility-criteria",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-block mb-4">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
            <Shield className="w-10 h-10 text-white" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          🎯 New to UPSC?{" "}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Start Here
          </span>
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Your Complete Beginner&apos;s Roadmap to the UPSC Civil Services
          Examination
        </p>

        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Whether you&apos;re taking your first step toward becoming an IAS,
          IPS, or IFS officer, this comprehensive guide will walk you through
          everything you need to know.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[
          { number: "24", label: "Career Services" },
          { number: "3", label: "Exam Stages" },
          { number: "2025", label: "Total Marks" },
          { number: "32", label: "Max Age (Gen)" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              {stat.number}
            </div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Section A */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="text-purple-600">Section A:</span> Understand the
          Exam
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {sectionA.map((topic, index) => (
            <TopicCard key={topic.number} {...topic} delay={index * 0.1} />
          ))}
        </div>
      </section>

      {/* Section B */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="text-purple-600">Section B:</span> Dive into Each
          Stage
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {sectionB.map((topic, index) => (
            <TopicCard key={topic.number} {...topic} delay={index * 0.1} />
          ))}
        </div>
      </section>

      {/* Section C */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="text-purple-600">Section C:</span> Career &
          Eligibility
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {sectionC.map((topic, index) => (
            <TopicCard key={topic.number} {...topic} delay={index * 0.1} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-10 text-white text-center shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Preparation?
        </h2>

        <p className="text-lg mb-8 text-purple-100 max-w-2xl mx-auto">
          Take the next step in your UPSC journey with JDAX Academy&apos;s
          expert guidance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/course-finder"
            className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:scale-105 transition"
          >
            Which Exam Fits You?
          </Link>
          <Link
            to="course-comparison"
            className="px-8 py-4 bg-purple-700 rounded-xl font-bold hover:bg-purple-800 transition"
          >
            Compare All Exams
          </Link>
          <Link className="px-8 py-4 border-2 border-white rounded-xl font-bold hover:bg-white hover:text-purple-600 transition">
            Talk to Counselor
          </Link>
        </div>
      </section>
    </div>
  );
}
