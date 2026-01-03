// src/pages/AboutUs.jsx
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import GalleryPage from "./gallery";
import { Link } from "react-router-dom";
import imageOne from "../assets/onetwo.jpg";
import image from "../assets/images1.png";
import Prakash from "../assets/prakash.png";
import Alice from "../assets/alice.png";
import Ariva from "../assets/ariva.png";
import Gokul from "../assets/gokul.png";
import Hari from "../assets/hari.jpg";
import Jaya from "../assets/jaya.png";
import Khader from "../assets/khader.png";
import Koushik from "../assets/koushik.png";
import Mohan from "../assets/mohan.png";
import Riyaz from "../assets/riyaz.png";
import Saravanan from "../assets/saravanan.png";
import Vignesh from "../assets/vignesh.png";
import Vimal from "../assets/vimal.png";
import Arun from "../assets/arun.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Father1 from "../assets/father1.png";
import Father2 from "../assets/father2.png";
import Father3 from "../assets/father3.png";
import Father4 from "../assets/father4.png";
import Father5 from "../assets/father5.png";
import Father6 from "../assets/father6.png";
import Four from "../assets/4.png";
import peerImage from "../assets/33.png";
import mentorImage from "../assets/39.png";
import testimonial from "../testimonial.json";
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
export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const facultyList = [
    { name: "Prakash K", role: "Academic and UPSC Coordinator", img: Prakash },
    { name: "Abdul Khadar", role: "Senior Faculty", img: Riyaz },
    { name: "Reyaz A", role: "Senior Faculty", img: Khader },
    { name: "Gokul Prasadh KS", role: "Senior Faculty", img: Gokul },
    { name: "Mohanapriya Sundar", role: "Senior Faculty", img: Mohan },
    { name: "S. Vimalraj", role: "Senior Faculty", img: Vimal },
    { name: "Vigneshwaran Manickam", role: "Senior Faculty", img: Vignesh },
    { name: "R. Jayamurugan", role: "Senior Faculty", img: Jaya },
    { name: "A. Saravanan", role: "Senior Faculty", img: Saravanan },
    { name: "B. Hari Theva", role: "Senior Faculty", img: Hari },
    { name: "Dr. D. Alice Ligoria", role: "", img: Alice },
    { name: "Arivazhagan P", role: "Senior Faculty", img: Ariva },
    { name: "A. S. Arun Vijay", role: "Senior Faculty", img: Arun },
    {
      name: "V. Koushik Srinivas",
      role: "TNPSC, SSC & BANKING COORDINATOR",
      img: Koushik,
    },
  ];

  const core = [
    {
      img: Father1,
      title: "Most Rev. Dr. George Antonysamy",
      role: "Archbishop of Madras-Mylapore; Patron & Chairman of JDAX",
    },
    {
      img: Father2,
      title: "Rev. Fr. G J Anthonysamy",
      role: "Vicar General, Archdiocese of Madras-Mylapore",
    },
    {
      img: Father3,
      title: "Rev. Fr. M V Jacob",
      role: "Episcopal Vicar, Archdiocese of Madras-Mylapore",
    },
    {
      img: Father4,
      title: "Rev. Fr. Peter Thumma",
      role: "Episcopal Vicar, Archdiocese of Madras-Mylapore",
    },
    {
      img: Father5,
      title: "Rev. Fr. Joe Bala",
      role: "Financial Administrator, Archdiocese of Madras-Mylapore",
    },
    {
      img: Father6,
      title: "Rev. Fr. Henry Felix",
      role: "Administrator of Properties, Archdiocese of Madras-Mylapore",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000, // transition speed
    slidesToShow: 4, // adjust as needed
    slidesToScroll: 1,
    autoplay: true, // enables auto scroll
    autoplaySpeed: 3000, // delay between slides (ms)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  function truncateText(text, maxChars) {
    if (text.length <= maxChars) return text;
    let truncated = text.substr(0, maxChars);
    // Cut off last incomplete word
    truncated = truncated.substr(0, truncated.lastIndexOf(" "));
    return truncated + "...";
  }
  const upscAspirants = testimonial.filter((t) =>
    t.role.toLowerCase().includes("upsc")
  );
  const tnpscAspirants = testimonial.filter((t) =>
    t.role.toLowerCase().includes("tnpsc")
  );
  const interleavedTestimonials = [];
  const maxLength = Math.max(upscAspirants.length, tnpscAspirants.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < upscAspirants.length)
      interleavedTestimonials.push(upscAspirants[i]);
    if (i < tnpscAspirants.length)
      interleavedTestimonials.push(tnpscAspirants[i]);
  }
  return (
    <>
      <div className="bg-white text-gray-800">
        {/* Hero Section */}

        {/* Mission & Vision */}

        <section className="py-8 sm:py-16 px-4 sm:px-6 md:px-20 bg-gray-50">
          {/* Motto */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
            {/* Globe */}
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden"
              style={{
                background: "white",
                border: "2px solid #fff",
                boxShadow:
                  "inset -4px -4px 8px rgba(0,0,0,0.2), inset 4px 4px 8px rgba(255,255,255,0.6), 0 4px 8px rgba(0,0,0,0.3)",
              }}
            >
              <img
                src={image}
                alt="Motto"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="text-xl sm:text-3xl font-semibold text-center sm:text-left text-[#0f398f]">
              Motto: Governance And Leadership
            </span>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex justify-center md:justify-start"
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                src={imageOne}
                alt="Mission"
                className="rounded-2xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-none h-auto md:h-[400px] object-cover"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col space-y-10 text-center md:text-left"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f398f] mb-3">
                  Vision
                </h2>
                <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
                  We Aspire To Build An Integrated, Inclusive, Fraternal, Human
                  Society With Appropriate Stress On Justice, Peace & Noble
                  Concerns
                </p>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f398f] mb-3">
                  Mission
                </h2>
                <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
                  Towards Creating Impactful Decision Makers with Sharp
                  Intellectual Potentials, Comprising Intellectual Wisdom,
                  Ethical Consciousness, Creative Social & Personal Commitment
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="bg-white py-8 px-4 sm:px-6 md:px-20  border-gray-200">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center max-w-7xl mx-auto">
            {/* TEXT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative text-center md:text-left"
            >
              <h2
                className="font-bold text-[#0f398f] mb-6
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              >
                Director's Message
              </h2>

              <p
                className="relative text-gray-700 leading-relaxed
        text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
        px-2 sm:px-0"
              >
                {/* Opening Quote */}
                <span
                  className="absolute -top-4 -left-2 md:-left-6"
                  style={{
                    fontSize: "70px",
                    lineHeight: "0.7",
                    WebkitTextStroke: "2px #facc15",
                    color: "transparent",
                    fontWeight: "bold",
                  }}
                >
                  “
                </span>
                JDAX is a unique academic unit initiated by the Archdiocese of
                Madras-Mylapore. It has its main centre at Santhome, near the
                iconic Santhome Cathedral, Chennai. It primarily focuses on
                providing learning opportunities to all young aspirants to
                become leaders in their respective fields and serve the nation
                as agents of social change.
                {/* Closing Quote */}
                <span
                  className="absolute -bottom-6 -right-2 md:-right-6"
                  style={{
                    fontSize: "70px",
                    lineHeight: "0.7",
                    WebkitTextStroke: "2px #facc15",
                    color: "transparent",
                    fontWeight: "bold",
                  }}
                >
                  ”
                </span>
              </p>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex justify-center md:justify-end"
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                src={Four}
                alt="Director"
                className="rounded-xl shadow-md w-full
          max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
          md:h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </section>
        <section className="bg-gray-50 py-8 px-6 md:px-20">
          <h2 className="text-5xl font-bold text-blue-900 text-center mb-10">
            JDAX Consultative Council
          </h2>

          <Slider
            infinite={true}
            speed={600}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                },
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {core.map((member, i) => (
              <div key={i} className="px-4">
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
                  <img
                    src={member.img}
                    alt={member.title}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-yellow-400"
                  />
                  <h3 className="text-xl font-semibold text-blue-900">
                    {member.title}
                  </h3>
                  <p className="text-gray-600" style={{ textAlign: "center" }}>
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        <section className="bg-white py-16 px-6 md:px-20 mb-16">
          <h2 className="text-5xl font-bold text-blue-900 text-center mb-10">
            JDAX Faculty Team
          </h2>

          <Slider {...settings} className="!px-8">
            {" "}
            {/* <-- add padding here */}
            {facultyList.map((f, i) => (
              <div key={i} className="px-4">
                {" "}
                {/* horizontal gap */}
                <div className="bg-white rounded-xl shadow p-4 text-center hover:shadow-md transition">
                  <img
                    src={f.img}
                    alt={f.name}
                    className="w-20 h-20 rounded-full mx-auto mb-2 border-2 border-yellow-400"
                  />
                  <h3
                    className="font-semibold text-blue-800"
                    style={{ textAlign: "center" }}
                  >
                    {f.name}
                  </h3>
                  <p
                    className="text-sm text-gray-600"
                    style={{ textAlign: "center" }}
                  >
                    {f.role}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        <section className="bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold text-blue-900 mb-10 text-center"
            >
              Why Choose JDAX Academy?
            </motion.h2>

            <div className="space-y-4">
              {whyJdaxPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border border-gray-300 rounded-lg overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-blue-800 bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <span
                      className="flex-1 text-2xl"
                      style={{
                        textAlign: "center",
                        textTransform: "capitalize",
                      }}
                    >
                      {point}
                    </span>
                    <span className="text-2xl">
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

        <section className="bg-gray-50 py-8 px-6 md:px-20">
          <GalleryPage />
        </section>
        <section className="bg-white py-8 px-6 md:px-20 mb-16">
          <h2 className="text-5xl font-bold text-blue-900 text-center mb-10">
            JDAX Aspirant Testimonial
          </h2>

          <Slider {...settings} className="!px-8">
            {interleavedTestimonials.map((f, i) => (
              <div key={i} className="px-4">
                <div
                  className="
            bg-white 
            rounded-xl 
            shadow 
            hover:shadow-md 
            transition
            min-h-[220px] 
            flex 
            flex-col 
            p-5
            space-y-2
          "
                >
                  <h3 className="font-semibold text-blue-800 text-lg">
                    {f.name}
                  </h3>

                  <p className="text-sm text-gray-500">{f.role}</p>

                  <p
                    className="text-sm text-gray-700"
                    style={{ textAlign: "left" }}
                  >
                    {truncateText(f.text, 200)}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        {/* <section className="bg-white py-16 px-6 md:px-20 text-center">
          <motion.h2
            className="text-3xl font-bold text-blue-900 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Careers @ JDAX
          </motion.h2>
          <p className="text-gray-700 mb-6" style={{ textAlign: "center" }}>
            Passionate about education and mentorship? Join our dynamic team.
          </p>
          <Link
            to="/careers"
            className="inline-block bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-500 transition"
          >
            View Openings
          </Link>
        </section> */}
      </div>
    </>
  );
}
