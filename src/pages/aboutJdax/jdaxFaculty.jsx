import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JdaxManagement from "../../components/resource/jdaxManagement";
import JdaxFaculty from "../../components/resource/jdaxFaculty";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const JdaxFacultyPage = () => {
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
  const AlphaIcon = ({ name }) => (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg">
      {name.charAt(6).toUpperCase()}
    </div>
  );
  return (
    <div
      className="
          min-h-screen 
          bg-[#d3d3ff]
          p-4                /* base padding for mobile */
          sm:p-6             /* small screens */
          md:p-8             /* tablets */
          lg:p-12            /* laptops */
          xl:p-14            /* desktops */
          box-border
        "
      style={{ marginTop: "50px" }}
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Static Header */}
        <Header />

        {/* Page content will be injected here */}
        <main className="flex-grow">
          <JdaxFaculty />
          <div className="bg-white py-12 px-4 md:px-16">
            <h2 className="text-3xl font-bold text-center mb-4">
              JDAX Visiting Faculty
            </h2>
            <p className="text-center text-gray-600 max-w-4xl mx-auto mb-10">
              JDAX Visiting Faculty Team consists of well-experienced, eminent
              and efficient teachers to guide and shape aspirants to crack
              competitive, eligibility and entrance examinations.
            </p>

            <Slider {...settings}>
              {facultyList.map((faculty, index) => (
                <div key={index} className="px-3">
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
        </main>

        {/* Static Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default JdaxFacultyPage;
