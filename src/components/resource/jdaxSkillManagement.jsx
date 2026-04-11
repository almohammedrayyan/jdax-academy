import React, { useState, useEffect } from "react";
import nanada from "../../assets/nanda.png";
import nanada1 from "../../assets/inpect.png";
import nanada2 from "../../assets/bernad.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JdaxManagement from "./jdaxManagement";

const JdaxSkillManagement = () => {
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
      name: "Dr. Bernard D' Samy",
      role: "Professor Emeritus, Loyola Institute",
      icon: nanada2,
    },
  ];

  return (
    <>
      <JdaxManagement />

      <div className="bg-white py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#431aa0] px-4">
          JDAX Academic & Skill Council | HR Team
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-6 px-4">
          JDAX Human Resource Team for Academic and Skill Council provides
          timely guidance and supports from various former and present civil
          servants, and educationists; as well as special talks of motivation,
          experience. Members include
        </p>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 px-4">
          Our core philosophy and educational framework is encapsulated in the
          mnemonic "JDAX's{" "}
          <span className="font-semibold">"RISE TO SERVE"</span> which
          highlights the key components of our transformative approach:
        </p>

        <div className="overflow-hidden">
          <Slider {...settings}>
            {skillList.map((faculty, index) => (
              <div key={index} className="px-2">
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
      </div>
    </>
  );
};

export default JdaxSkillManagement;
