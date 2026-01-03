import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function CSATWeightageChart() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState("trend");

  // 5-year trend data (2020-2024)
  const trendData = [
    {
      year: "2020",
      Comprehension: 43,
      "Interpersonal Skills": 0,
      "Logical Reasoning": 19,
      "Decision Making": 0,
      "Mental Ability": 12.5,
      Numeracy: 18,
      "Data Interpretation": 18,
    },
    {
      year: "2021",
      Comprehension: 42,
      "Interpersonal Skills": 0,
      "Logical Reasoning": 18,
      "Decision Making": 0,
      "Mental Ability": 11,
      Numeracy: 19,
      "Data Interpretation": 19,
    },
    {
      year: "2022",
      Comprehension: 44,
      "Interpersonal Skills": 0,
      "Logical Reasoning": 17,
      "Decision Making": 1,
      "Mental Ability": 12,
      Numeracy: 18,
      "Data Interpretation": 18,
    },
    {
      year: "2023",
      Comprehension: 41,
      "Interpersonal Skills": 0,
      "Logical Reasoning": 20,
      "Decision Making": 0,
      "Mental Ability": 13,
      Numeracy: 19,
      "Data Interpretation": 17,
    },
    {
      year: "2024",
      Comprehension: 43,
      "Interpersonal Skills": 0,
      "Logical Reasoning": 19,
      "Decision Making": 0,
      "Mental Ability": 12,
      Numeracy: 18,
      "Data Interpretation": 18,
    },
  ];

  // Topic distribution data
  const distributionData = [
    { name: "Comprehension", value: 42.5, questions: "32-36" },
    { name: "Logical Reasoning", value: 18.5, questions: "13-17" },
    { name: "Numeracy", value: 18.5, questions: "13-16" },
    { name: "Data Interpretation", value: 18, questions: "12-15" },
    { name: "Mental Ability", value: 12, questions: "8-12" },
    { name: "Decision Making", value: 0.5, questions: "0-1" },
    { name: "Interpersonal Skills", value: 0, questions: "0" },
  ];

  const COLORS = [
    "#dc2626",
    "#f59e0b",
    "#3b82f6",
    "#10b981",
    "#8b5cf6",
    "#ec4899",
    "#6b7280",
  ];

  return (
    <section ref={ref} className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 text-center mb-8">
          📊 Question Distribution & Trends
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("trend")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "trend"
                ? "bg-red-600 text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            5-Year Trends (2020-2024)
          </button>
          <button
            onClick={() => setActiveTab("distribution")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "distribution"
                ? "bg-red-600 text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Topic Distribution
          </button>
        </div>

        {/* Chart Content */}
        {activeTab === "trend" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 text-center text-gray-600">
              <p className="text-lg">
                Questions asked per topic across 5 years
              </p>
            </div>
            <ResponsiveContainer width="100%" height={500}>
              <BarChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis
                  label={{
                    value: "Number of Questions",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="Comprehension" fill="#dc2626" />
                <Bar dataKey="Logical Reasoning" fill="#f59e0b" />
                <Bar dataKey="Numeracy" fill="#3b82f6" />
                <Bar dataKey="Data Interpretation" fill="#10b981" />
                <Bar dataKey="Mental Ability" fill="#8b5cf6" />
                <Bar dataKey="Decision Making" fill="#ec4899" />
                <Bar dataKey="Interpersonal Skills" fill="#6b7280" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        )}

        {activeTab === "distribution" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-center mb-4">
                Average Question Distribution
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {distributionData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-center mb-4">
                Question Range per Topic
              </h3>
              <div className="space-y-4">
                {distributionData.map((topic, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-gray-800">
                          {topic.name}
                        </span>
                        <span className="text-sm font-bold text-gray-600">
                          {topic.questions} Q
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="h-3 rounded-full transition-all duration-1000"
                          style={{
                            width: `${topic.value}%`,
                            backgroundColor: COLORS[index % COLORS.length],
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
