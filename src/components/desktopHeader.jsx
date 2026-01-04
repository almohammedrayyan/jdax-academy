import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function DesktopMenu({ isScrolled }) {
  const menuRef = useRef(null);

  const [openMenu, setOpenMenu] = useState(null); // courses | resources | about
  const [openLevel2, setOpenLevel2] = useState(null);
  const [openLevel3, setOpenLevel3] = useState(null);

  const closeAll = () => {
    setOpenMenu(null);
    setOpenLevel2(null);
    setOpenLevel3(null);
  };

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) closeAll();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const textColor = isScrolled ? "text-yellow-400" : "text-[#0d1117]";

  return (
    <nav
      ref={menuRef}
      className="hidden md:flex items-center space-x-8 text-lg"
    >
      {/* FIND YOUR COURSE */}
      <MenuButton
        label="Find Your Course"
        open={openMenu === "courses"}
        onEnter={() => setOpenMenu("courses")}
        color={textColor}
      >
        <Dropdown>
          <SideItem
            label="Beginner's Guide"
            onEnter={() => setOpenLevel2("beginner")}
          >
            {openLevel2 === "beginner" && (
              <SideDropdown>
                <MenuLink to="/resources/affair">
                  Competitive Exams Overview
                </MenuLink>
                <MenuLink to="/initiative-ecosystem">JDAX Initiatives</MenuLink>
              </SideDropdown>
            )}
          </SideItem>

          <SideItem label="UPSC" onEnter={() => setOpenLevel2("upsc")}>
            {openLevel2 === "upsc" && (
              <SideDropdown>
                <MenuLink to="/courses/upsc">New to UPSC</MenuLink>
                <MenuLink to="/course/upsc/upsc-service-course">
                  JDAX UPSC Courses
                </MenuLink>
                <MenuLink to="/course/upsc/upsc-peadology">
                  Pedagogy & Initiatives
                </MenuLink>
              </SideDropdown>
            )}
          </SideItem>

          <SideItem label="TNPSC" onEnter={() => setOpenLevel2("tnpsc")}>
            {openLevel2 === "tnpsc" && (
              <SideDropdown>
                <MenuLink to="/courses/tnpsc/new-to-start">
                  New to TNPSC
                </MenuLink>
                <MenuLink to="/courses/tnpsc/group-exams">
                  JDAX TNPSC Courses
                </MenuLink>
                <MenuLink to="/courses/tnpsc/learning-framework">
                  Learning Framework
                </MenuLink>
              </SideDropdown>
            )}
          </SideItem>

          {/* SSC / BANKING / RRB */}
          <SideItem
            label="SSC / Banking / RRB"
            onEnter={() => setOpenLevel2("ssc")}
          >
            {openLevel2 === "ssc" && (
              <SideDropdown>
                <MenuLink to="/courses/ssc">
                  New to SSC / Banking / RRB
                </MenuLink>
                <MenuLink to="/course/RiseToServe">
                  JDAX SSC / Banking / RRB Courses
                </MenuLink>
              </SideDropdown>
            )}
          </SideItem>
        </Dropdown>
      </MenuButton>

      {/* FREE RESOURCES */}
      <MenuButton
        label="Free Resources"
        open={openMenu === "resources"}
        onEnter={() => {
          setOpenMenu("resources");
          setOpenLevel2(null);
          setOpenLevel3(null);
        }}
        color={textColor}
      >
        <Dropdown>
          {/* UPSC RESOURCE */}
          <SideItem
            label="UPSC Resource"
            onEnter={() => {
              setOpenLevel2("upscResource");
              setOpenLevel3(null);
            }}
          >
            {openLevel2 === "upscResource" && (
              <SideDropdown wide>
                {/* LEVEL 3 – SYLLABUS */}
                <SideItem
                  label="Syllabus Download"
                  onEnter={() => setOpenLevel3("syllabus")}
                >
                  {openLevel3 === "syllabus" && (
                    <SideDropdown wide>
                      <div className="font-semibold px-3 py-1">
                        Prelims Syllabus
                      </div>
                      <MenuLink to="/resources/study-materials?tab=0">
                        GS Syllabus
                      </MenuLink>
                      <MenuLink to="/resources/study-materials?tab=1">
                        CSAT Syllabus
                      </MenuLink>

                      <div className="font-semibold px-3 py-1 mt-2">
                        Mains Syllabus
                      </div>
                      <MenuLink to="/resources/study-main-materials">
                        GS Syllabus 1
                      </MenuLink>
                      <MenuLink to="/mains/gs2">GS Syllabus 2</MenuLink>
                      <MenuLink to="/mains/gs3">GS Syllabus 3</MenuLink>
                      <MenuLink to="/mains/gs4">GS Syllabus 4</MenuLink>
                    </SideDropdown>
                  )}
                </SideItem>

                {/* LEVEL 3 – PYQ */}
                <SideItem
                  label="Previous Year Questions"
                  onEnter={() => setOpenLevel3("pyq")}
                >
                  {openLevel3 === "pyq" && (
                    <SideDropdown wide>
                      <div className="font-semibold px-3 py-1">Prelims</div>
                      <MenuLink to="/resources/pqy-prelims">GS Papers</MenuLink>
                      <MenuLink to="/resource/csat-prelims">
                        CSAT Papers
                      </MenuLink>

                      <div className="font-semibold px-3 py-1 mt-2">Mains</div>
                      <MenuLink to="/resource/gs1main">GS Paper 1</MenuLink>
                      <MenuLink to="/resource/gs2main">GS Paper 2</MenuLink>
                      <MenuLink to="/resource/gs3main">GS Paper 3</MenuLink>
                      <MenuLink to="/resource/gs4main">GS Paper 4</MenuLink>
                    </SideDropdown>
                  )}
                </SideItem>
              </SideDropdown>
            )}
          </SideItem>

          {/* TNPSC RESOURCE */}
          <SideItem
            label="TNPSC Resource"
            onEnter={() => setOpenLevel2("tnpscResource")}
          >
            {openLevel2 === "tnpscResource" && (
              <SideDropdown>
                <MenuLink to="/resource/tnpsc-syllabus">Syllabus</MenuLink>
                <MenuLink to="/resource/tnpsc-pyq">
                  Previous Question Papers
                </MenuLink>
                <MenuLink to="/resource/where-study">Where to Study</MenuLink>
                <MenuLink to="/resource/tnpsc-policy">Policy Notes</MenuLink>
              </SideDropdown>
            )}
          </SideItem>
        </Dropdown>
      </MenuButton>

      {/* ASPIRANT */}
      <Link
        className={`font-medium ${textColor}`}
        to="/aspirant/student-journey"
      >
        Aspirant
      </Link>

      {/* ABOUT */}
      <MenuButton
        label="About JDAX"
        open={openMenu === "about"}
        onEnter={() => setOpenMenu("about")}
        color={textColor}
      >
        <Dropdown>
          <MenuLink to="/about-jdax">Our Story</MenuLink>
          <MenuLink to="/commitment">JDAX Management</MenuLink>
          <MenuLink to="/jdax-faculty">JDAX Faculty Team</MenuLink>
          <MenuLink to="/why-choose">Why Choose JDAX</MenuLink>
          <MenuLink to="/prospect">JDAX Prospectus & Pamphlets</MenuLink>
          <MenuLink to="/gallery">Gallery</MenuLink>
        </Dropdown>
      </MenuButton>
    </nav>
  );
}

/* ----------------- SMALL COMPONENTS ----------------- */

const MenuButton = ({ label, open, onEnter, color, children }) => (
  <div className="relative" onMouseEnter={onEnter}>
    <div
      className={`flex items-center gap-1 cursor-pointer font-medium ${color}`}
    >
      {label}
      <ChevronDown
        className={`w-4 h-4 transition ${open ? "rotate-180" : ""}`}
      />
    </div>
    {open && children}
  </div>
);

const Dropdown = ({ children }) => (
  <div className="absolute left-0 mt-3 bg-white rounded-xl shadow-xl p-4 min-w-[260px] space-y-1 z-50">
    {children}
  </div>
);

const SideItem = ({ label, onEnter, children }) => (
  <div className="relative" onMouseEnter={onEnter}>
    <div className="px-3 py-2 rounded-md hover:bg-gray-100 flex justify-between font-semibold cursor-pointer">
      {label} <span>▸</span>
    </div>
    {children}
  </div>
);

const SideDropdown = ({ children, wide }) => (
  <div
    className={`absolute left-full top-0 ml-2 bg-white rounded-xl shadow-xl p-4 space-y-1 z-50 ${
      wide ? "min-w-[320px]" : "min-w-[260px]"
    }`}
  >
    {children}
  </div>
);

const MenuLink = ({ to, children }) => (
  <Link
    to={to}
    className="block px-3 py-2 rounded-md hover:bg-gray-100 font-medium"
  >
    {children}
  </Link>
);
