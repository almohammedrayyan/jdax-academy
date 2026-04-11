import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JdaxFaculty from "../../components/resource/jdaxFaculty";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JdaxFacultyPage = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesToShow = windowWidth < 480 ? 1 : windowWidth < 1024 ? 2 : 3;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
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
  const AlphaIcon = ({ name }) => (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg">
      {name.charAt(6).toUpperCase()}
    </div>
  );
  return (
    <div
      // className="
      //     min-h-screen
      //     bg-[#d3d3ff]
      //     p-4                /* base padding for mobile */
      //     sm:p-6             /* small screens */
      //     md:p-8             /* tablets */
      //     lg:p-12            /* laptops */
      //     xl:p-14            /* desktops */
      //     box-border
      //   "
      style={{ marginTop: "50px" }}
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Static Header */}
        <Header />

        {/* Page content will be injected here */}
        <main className="flex-grow">
          <JdaxFaculty />
          <div className="bg-white py-12">
            <h2 className="text-3xl font-bold text-center mb-4 px-4">
              JDAX Visiting Faculty
            </h2>
            <p className="text-center text-gray-600 max-w-4xl mx-auto mb-10 px-4">
              JDAX Visiting Faculty Team consists of well-experienced, eminent
              and efficient teachers to guide and shape aspirants to crack
              competitive, eligibility and entrance examinations.
            </p>
            <div className="overflow-hidden">
              <Slider {...settings}>
                {facultyList.map((faculty, index) => (
                  <div key={index} className="px-2">
                    <div className="h-full rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                      <div className="flex items-center gap-4 mb-4">
                        <AlphaIcon name={faculty.name} />
                        <div>
                          <h3 className="font-semibold text-lg">
                            {faculty.name}
                          </h3>
                          <p className="text-sm text-gray-600">{faculty.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </main>

        {/* Static Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default JdaxFacultyPage;
