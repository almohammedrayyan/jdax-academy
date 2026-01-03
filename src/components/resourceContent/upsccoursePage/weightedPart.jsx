import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { BarChart3, PieChart as PieChartIcon } from "lucide-react";

const topicWeightage = [
  {
    topic: "Current Events",
    questions: "20-25",
    percentage: 25,
    color: "#3B82F6",
  },
  {
    topic: "Polity & Governance",
    questions: "25-30",
    percentage: 28,
    color: "#8B5CF6",
  },
  { topic: "History", questions: "15-20", percentage: 18, color: "#EF4444" },
  { topic: "Geography", questions: "15-18", percentage: 17, color: "#10B981" },
  {
    topic: "Economy & Social",
    questions: "20-25",
    percentage: 23,
    color: "#F59E0B",
  },
  {
    topic: "Environment",
    questions: "12-15",
    percentage: 14,
    color: "#06B6D4",
  },
  {
    topic: "General Science",
    questions: "12-18",
    percentage: 15,
    color: "#84CC16",
  },
];

const yearlyTrend = [
  {
    year: "2020",
    currentEvents: 22,
    polity: 28,
    history: 18,
    geography: 16,
    economy: 24,
    environment: 13,
    science: 15,
  },
  {
    year: "2021",
    currentEvents: 24,
    polity: 26,
    history: 17,
    geography: 18,
    economy: 22,
    environment: 14,
    science: 16,
  },
  {
    year: "2022",
    currentEvents: 23,
    polity: 29,
    history: 19,
    geography: 15,
    economy: 25,
    environment: 12,
    science: 14,
  },
  {
    year: "2023",
    currentEvents: 25,
    polity: 27,
    history: 16,
    geography: 17,
    economy: 23,
    environment: 15,
    science: 17,
  },
  {
    year: "2024",
    currentEvents: 24,
    polity: 30,
    history: 17,
    geography: 16,
    economy: 24,
    environment: 13,
    science: 16,
  },
];

export function WeightageChart({ refProp }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="weightage"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      ref={refProp}
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <BarChart3 className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Topic <span className="text-blue-600">Weightage Analysis</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strategic insights into question distribution patterns and topic
            prioritization for optimal preparation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full shadow-xl border-0 bg-white/80 backdrop-blur rounded-lg p-6"
          >
            <div className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
              <PieChartIcon className="w-6 h-6 text-blue-600" />
              <span>Topic Distribution</span>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={topicWeightage}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="percentage"
                    animationBegin={inView ? 0 : 10000}
                    animationDuration={1500}
                  >
                    {topicWeightage.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name, props) => [
                      `${value}% (${props.payload?.questions} questions)`,
                      props.payload?.topic,
                    ]}
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                  <Legend
                    verticalAlign="top"
                    align="right"
                    layout="vertical"
                    wrapperStyle={{ fontSize: 11 }}
                    iconType="circle"
                    formatter={(value, entry) => (
                      <span style={{ color: entry?.color }}>
                        {entry?.payload?.topic}
                      </span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-full shadow-xl border-0 bg-white/80 backdrop-blur rounded-lg p-6"
          >
            <div className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
              <BarChart3 className="w-6 h-6 text-green-600" />
              <span>Yearly Trends (2020-2024)</span>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearlyTrend} margin={{ bottom: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="year"
                    tick={{ fontSize: 10 }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 10 }}
                    tickLine={false}
                    label={{
                      value: "Questions",
                      angle: -90,
                      position: "insideLeft",
                      style: { textAnchor: "middle", fontSize: 11 },
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "11px",
                    }}
                  />
                  <Bar dataKey="polity" fill="#8B5CF6" name="Polity" />
                  <Bar
                    dataKey="currentEvents"
                    fill="#3B82F6"
                    name="Current Events"
                  />
                  <Bar dataKey="economy" fill="#F59E0B" name="Economy" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {topicWeightage.map((topic, index) => (
            <div
              key={topic.topic}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg rounded-lg bg-white p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: topic.color }}
                />
                <span
                  className="text-2xl font-bold"
                  style={{ color: topic.color }}
                >
                  {topic.percentage}%
                </span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                {topic.topic}
              </h3>
              <p className="text-sm text-gray-600">
                {topic.questions} questions
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
