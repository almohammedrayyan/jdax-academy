import React, { useState } from "react";
import { motion } from "framer-motion";
import peerImage from "../../assets/33.png";
import mentorImage from "../../assets/39.png";
import {
  BookOpen,
  Brain,
  ClipboardCheck,
  Globe,
  Handshake,
  Layers,
  MessageCircle,
  ShieldCheck,
  Sliders,
  UserCheck,
  Users,
} from "lucide-react";
const WhyChooseJdax1 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const whyJdaxPoints = [
    "India's first institute to implement incremental syllabus approach",
    "Only institute in India integrating mindfulness techniques into education",
    "Pioneering the 5E Teaching Model for competitive exam preparation",
    "Democratizing access to quality civil services preparation",
    "Comprehensive character development through diverse activities",
    "Expert faculty from universities and industries",
    "Modern infrastructure with ICT-enabled classrooms",
    "Holistic approach combining academics with personal development",
    "Strong mentorship program with cognitive-behavioral techniques",
    "Regular assessment and feedback for continuous improvement",
  ];
  const items = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Responsible Education & Democratisation of Civil Services",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Inclusive Learning Environment",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      title: "Student-Centric Active Learning Strategies",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-orange-600" />,
      title: "Extra Support through Mentorship",
    },
    {
      icon: <Layers className="w-8 h-8 text-indigo-600" />,
      title: "Tailored Learning Modules",
    },
    {
      icon: <Brain className="w-8 h-8 text-pink-600" />,
      title: "Ongoing Mindfulness Practices",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-teal-600" />,
      title: "Structured Assessment and Analysis",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-red-600" />,
      title: "Engagement and Regular Feedback",
    },
    {
      icon: <Sliders className="w-8 h-8 text-yellow-600" />,
      title: "Realistic and Flexible Approach",
    },
    {
      icon: <Handshake className="w-8 h-8 text-cyan-600" />,
      title: "Valuable Buddy System",
    },
    {
      icon: <Globe className="w-8 h-8 text-emerald-600" />,
      title: "360° Character Development",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <>
      <div className="py-12 px-4 md:px-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          JDAX Philosophy
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Our core philosophy and educational framework is encapsulated in the
          mnemonic "JDAX's{" "}
          <span className="font-semibold">"RISE TO SERVE"</span> which
          highlights the key components of our transformative approach:
        </p>
      </div>
      <motion.div
        className="space-y-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="flex items-start gap-4 p-6 rounded-2xl shadow-sm border hover:shadow-md transition bg-white"
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <div>
              <h3 className="text-lg mb-1">
                <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                  {item.title.charAt(0)}
                </span>
                {item.title.slice(1)}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 text-center"
          >
            Why Choose JDAX Academy?
          </motion.h2>

          {/* Accordion */}
          <div className="space-y-4">
            {whyJdaxPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-gray-300 rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 hover:bg-gray-100 transition"
                >
                  {/* Text */}
                  <span className="flex-1 text-center text-lg md:text-xl font-medium text-blue-800">
                    {point}
                  </span>

                  {/* Icon */}
                  <span className="ml-4 text-2xl font-bold text-blue-800">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-blue-50 py-12 sm:py-16 px-4 sm:px-6 md:px-20">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Student Support & Mentorship
        </motion.h2>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <motion.img
              src={mentorImage}
              alt="1-on-1 Mentorship"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-xs sm:max-w-sm rounded-xl shadow-md object-cover"
            />

            <h3 className="text-lg sm:text-xl font-semibold text-yellow-500">
              1-on-1 Mentorship
            </h3>

            <p className="text-sm sm:text-base text-gray-700 max-w-sm">
              Personalized sessions to guide, motivate, and track progress.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <motion.img
              src={peerImage}
              alt="Peer Learning Groups"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-xs sm:max-w-sm rounded-xl shadow-md object-cover"
            />

            <h3 className="text-lg sm:text-xl font-semibold text-yellow-500">
              Peer Learning Groups
            </h3>

            <p className="text-sm sm:text-base text-gray-700 max-w-sm">
              Small focused groups to foster collaborative learning and
              discipline.
            </p>
          </motion.div>
        </div>
      </section>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        JDAX Commitment
      </h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        JDAX Academy is dedicated to fostering a nurturing and empowering
        environment for all students. We believe that our "Rise to Serve"
        approach will not only facilitate a smooth academic experience but also
        enhance overall learning outcomes. We look forward to welcoming you to
        our academy and supporting you on your unforgettable life journey to
        success.
        <span className="font-semibold"> RISE TO SERVE</span>.
      </p>
    </>
  );
};

export default WhyChooseJdax1;
