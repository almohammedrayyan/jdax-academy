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
      <JdaxManagement />

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
    </>
  );
};

export default JdaxSkillManagement;
