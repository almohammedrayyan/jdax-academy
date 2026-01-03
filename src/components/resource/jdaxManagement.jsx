import React from "react";
import Father1 from "../../assets/father1.png";
import Father2 from "../../assets/father2.png";
import Father3 from "../../assets/father3.png";
import Father4 from "../../assets/father4.png";
import Father5 from "../../assets/father5.png";
import Father6 from "../../assets/father6.png";
import Father7 from "../../assets/seb.png";
import Father8 from "../../assets/seb1.png";
import Father9 from "../../assets/seb3.png";
import Father10 from "../../assets/seb4.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* -------------------- DATA -------------------- */
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

const core2 = [
  {
    name: "Rev. Fr. A. L. Anthony Sebastian",
    role: "Director of JDAX",
    image: Father7,
  },
  {
    name: "Rev. Fr. Joseph Arockia Jeyakumar",
    role: "Rector, St Thomas Shrine, Little Mount",
    image: Father8,
  },
  {
    name: "Rev. Fr. Joe Bala",
    role: "Financial Administrator, Archdiocese of Madras-Mylapore",
    image: Father5,
  },
  {
    name: "Rev. Fr. Jose V. Thomas",
    role: "Parish Priest, Namazvarnagar",
    image: Father9,
  },
  {
    name: "Rev. Fr. E. Arulappa",
    role: "Rector, Annai Vilankanni Shrine, Besant Nagar",
    image: Father10,
  },
];

const JdaxManagement = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }, // Mobile
      },
    ],
  };

  const Card = ({ image, title, role }) => (
    <div
      className="bg-white p-5 rounded-xl shadow hover:shadow-lg
                    flex flex-col items-center text-center gap-3
                    md:flex-row md:text-left md:items-center md:gap-4"
    >
      <img
        src={image}
        alt={title}
        className="w-20 h-20 rounded-full border-4 border-yellow-400 flex-shrink-0"
      />

      <div>
        <p className="text-base font-bold text-blue-900 leading-snug">
          {title}
        </p>
        <p className="text-sm font-bold text-gray-700 leading-tight">{role}</p>
      </div>
    </div>
  );

  return (
    <div>
      {/* MANAGEMENT TEAM */}
      <section className="bg-gray-50 py-10 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#431aa0]">
          JDAX Management Team
        </h2>

        <Slider {...settings}>
          {core.map((m, i) => (
            <div key={i} className="px-4">
              <Card image={m.img} title={m.title} role={m.role} />
            </div>
          ))}
        </Slider>
      </section>

      {/* CORE COMMITTEE */}
      <section className="bg-gray-50 py-10 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#431aa0]">
          JDAX Core Committee Team
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          “JDAX Core Committee is the core team that plans and executes all the
          courses at JDAX and its smooth operations…”
        </p>

        <Slider {...settings}>
          {core2.map((m, i) => (
            <div key={i} className="px-4">
              <Card image={m.image} title={m.name} role={m.role} />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default JdaxManagement;
