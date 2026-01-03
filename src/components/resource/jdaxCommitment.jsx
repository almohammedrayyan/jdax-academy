import React from "react";
import {
  ShieldCheck,
  Users,
  BookOpen,
  UserCheck,
  Layers,
  Brain,
  ClipboardCheck,
  MessageCircle,
  Sliders,
  Handshake,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Responsible Education & Democratisation of Civil Services",
    desc: "At JDAX, we are committed to building trust through responsible education that democratizes access to civil services preparation. We believe in making quality education accessible to all, regardless of background, fostering a culture of integrity and social responsibility in future public servants.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Inclusive Learning Environment",
    desc: "At the core of our educational philosophy is a commitment to fostering an inclusive learning environment that feels like a welcoming home for all students. We provide homely meals catering to diverse dietary preferences, ensuring every student feels valued and cared for. Our hassle-free accommodation, located in the heart of the city, offers easy access to essential amenities and promotes a strong sense of community. Additionally, our peaceful, tech-enabled classrooms are designed to enhance the learning experience, equipped with modern resources that facilitate interactive and engaging learning..",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-purple-600" />,
    title: "Student-Centric Active Learning Strategies",
    desc: "At the forefront of educational innovation, our institute proudly stands as India's first to adopt and develop a comprehensive framework focused on student-centric active learning strategies tailored for competitive examinations. Central to our approach is the 5E Teaching Model, which encompasses five key phases: Engage, Explore, Explain, Elaborate, and Evaluate.",
  },
  {
    icon: <UserCheck className="w-8 h-8 text-orange-600" />,
    title: "Extra Support through Mentorship",
    desc: "We offer scheduled weekly and monthly mentorship sessions that utilize evidence-based practices to enhance student learning and development. In addition to one-on-one mentorship, we promote team-based study groups that leverage the power of collaborative learning. Our mentorship framework is grounded in cognitive-behavioral techniques, which help students set realistic goals, develop effective study habits, and overcome academic challenges.",
  },
  {
    icon: <Layers className="w-8 h-8 text-indigo-600" />,
    title: "Tailored Learning Modules",
    desc: "The Tailored Learning Modules initiative provides personalized educational experiences designed to meet the unique needs of each student, particularly those entering mid-term. As India's first institute to implement an incremental syllabus approach, we break down the curriculum into manageable segments, allowing students to build their knowledge progressively.",
  },
  {
    icon: <Brain className="w-8 h-8 text-pink-600" />,
    title: "Ongoing Mindfulness Practices",
    desc: "As the only institute in India dedicated to integrating mindfulness techniques into education, we focus on managing stress and enhancing concentration through our innovative research-oriented CDP (Consistency, Discipline, and Perseverance) program. This holistic approach is designed to harmonize the Body, Mind, and Soul, fostering resilience and well-being.",
  },
  {
    icon: <ClipboardCheck className="w-8 h-8 text-teal-600" />,
    title: "Structured Assessment and Analysis",
    desc: "The Structured Assessment and Analysis initiative provides a comprehensive framework for evaluating student progress and enhancing learning outcomes. We implement regular assessments through weekly, monthly, sub-topic-wise, and subject-wise mock tests. In addition to traditional assessments, we incorporate Research and Development (R&D) based discussions of previous years' questions (PYQs) for all courses.",
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-red-600" />,
    title: "Engagement and Regular Feedback",
    desc: "The Engagement and Regular Feedback initiative is a dynamic approach designed to foster continuous improvement and active participation among students and parents. Utilizing quantitative methods (such as surveys and questionnaires), qualitative methods (including focus groups and unscheduled mentorships) and regular feedback loops, we provide deeper insights into the emotional factors influencing student engagement.",
  },
  {
    icon: <Sliders className="w-8 h-8 text-yellow-600" />,
    title: "Realistic and Flexible Approach",
    desc: "We maintain a practical and adaptable approach to education, ensuring our methodologies remain relevant and effective for diverse learning styles and changing examination patterns.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-cyan-600" />,
    title: "Valuable Buddy System",
    desc: "The Valuable Buddy System is designed to foster a supportive and inclusive environment by pairing new students with current students. This initiative provides essential guidance and mentorship while helping newcomers navigate the challenges of adapting to a new academic and social landscape.",
  },
  {
    icon: <Globe className="w-8 h-8 text-emerald-600" />,
    title: "360° Character Development",
    desc: "The Emphasis on 360° Character Development is a holistic approach aimed at nurturing well-rounded individuals through diverse character-shaping activities. This initiative includes engaging debates, thought-provoking discussions, and vibrant celebration programs featuring singing, dancing, and skit performances.",
  },
];

export default function JdaxCommitment() {
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
    <div className="bg-white py-12 px-4 md:px-16">
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

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Our core philosophy and educational framework is encapsulated in the
        mnemonic "JDAX's <span className="font-semibold">"RISE TO SERVE"</span>{" "}
        which highlights the key components of our transformative approach:
      </p>
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
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
