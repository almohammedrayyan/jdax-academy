import React from "react";
import nanada from "../../assets/nanda.png";
import nanada1 from "../../assets/inpect.png";
import nanada2 from "../../assets/bernad.png";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JdaxManagement from "./jdaxManagement";
const JdaxSkillManagement = () => {
  const AlphaIcon = ({ name }) => (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg">
      {name.charAt(6).toUpperCase()}
    </div>
  );

  const skillList = [
    {
      name: "Mr. Nandakumar, IRS",
      role: "Additional Commissioner, Income Tax",
      icon: nanada,
    },
    {
      name: "Mr. Alexander, IPS",
      role: "Former Director General of Police (DGP), Tamil Nadu",
      icon: nanada1,
    },
    {
      name: "Dr. Bernard D’ Samy",
      role: "Professor Emeritus, Loyola Institute",
      icon: nanada2,
    },
  ];
  const facultyList = [
    { name: "Prof. Prasanna Ganesh", role: "CSAT, Polity, Economy Faculty" },
    { name: "Prof. Kaviya Manoharan", role: "Environment Faculty" },
    { name: "Prof. Kaviyadharshini", role: "Geography Faculty" },
    { name: "Mr. Soundar", role: "CSAT Faculty" },
    {
      name: "Prof. Stephen Arockiasamy",
      role: "Current Affairs Faculty – 5 years experience",
    },
    {
      name: "Prof. Yugaselvi Gopinath",
      role: "Senior Faculty – 9 years experience",
    },
    {
      name: "Prof. Navaneethan",
      role: "Mentoring Aspirants – 7 years experience",
    },
    {
      name: "Prof. Muthukumar",
      role: "CSAT Trainer, Aptitude & History Faculty",
    },
    {
      name: "Prof. Dr. Muthuraman",
      role: "Medieval Indian & TN History, Asst. Prof., Loyola College",
    },
    {
      name: "Prof. Sirajudheen",
      role: "TNPSC – General Science Faculty (6 years)",
    },
    {
      name: "Prof. Hareesh",
      role: "Contemporary India, Asst. Prof., Loyola College",
    },
    { name: "Prof. Jeevith", role: "Faculty – 3 years experience" },
    {
      name: "Prof. Dr. Guru",
      role: "Asst. Prof., International Relations, Loyola College",
    },
    { name: "Prof. Sindhu", role: "Tamil Faculty – 3 years experience" },
    {
      name: "Prof. Sanjana Rajendran",
      role: "Geography Faculty – 3 years experience",
    },
    {
      name: "Prof. Karunya Jeeva",
      role: "TN Administration Faculty – 3 years",
    },
    { name: "Prof. Monika", role: "Geography & Modern Indian History Faculty" },
    { name: "Prof. Karthik", role: "Modern India Faculty" },
    { name: "Prof. Selvarathinam", role: "Economics & World History Faculty" },
    { name: "Prof. Ahilan", role: "Modern Indian History Faculty" },
    {
      name: "Prof. Shafiq Ahmed",
      role: "Internal Security & Indian History Faculty",
    },
    { name: "Prof. Sathya Kalaivani", role: "Geography & Environment Faculty" },
  ];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }, // Mobile
      },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };
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
      <div className="bg-white py-12 px-4 md:px-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#431aa0]">
          JDAX Academic & Skill Council | HR Team
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          JDAX Human Resource Team for Academic and Skill Council provides
          timely guidance and supports from various former and present civil
          servants, and educationists; as well as special talks of motivation,
          experience.” Members include
        </p>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Our core philosophy and educational framework is encapsulated in the
          mnemonic "JDAX's{" "}
          <span className="font-semibold">"RISE TO SERVE"</span> which
          highlights the key components of our transformative approach:
        </p>
        <Slider {...settings}>
          {skillList.map((faculty, index) => (
            <div key={index} className="px-3">
              <div className="h-full rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                <img
                  src={faculty.icon}
                  alt={faculty.name}
                  className="h-20 w-20 rounded-full object-cover mb-4 mx-auto"
                />
                <h3 className="text-center font-semibold text-lg">
                  {faculty.name}
                </h3>
                <p className="text-center text-sm text-gray-600 mt-1">
                  {faculty.role}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="bg-white py-12 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          JDAX Visiting Faculty
        </h2>
        <p className="text-center text-gray-600 max-w-4xl mx-auto mb-10">
          JDAX Visiting Faculty Team consists of well-experienced, eminent and
          efficient teachers to guide and shape aspirants to crack competitive,
          eligibility and entrance examinations.
        </p>

        <Slider {...settings}>
          {facultyList.map((faculty, index) => (
            <div key={index} className="px-3">
              <div className="h-full rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-4 mb-4">
                  <AlphaIcon name={faculty.name} />
                  <div>
                    <h3 className="font-semibold text-lg">{faculty.name}</h3>
                    <p className="text-sm text-gray-600">{faculty.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <JdaxManagement />
    </>
  );
};

export default JdaxSkillManagement;
