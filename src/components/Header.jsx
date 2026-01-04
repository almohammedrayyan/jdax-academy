import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import img from "../assets/images.png";
import { Menu, User, X, ChevronRight } from "lucide-react";
import DesktopMenu from "./desktopHeader";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track open menus with state
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [openMenus, setOpenMenus] = useState({
    courses: false,
    resources: false,
    aspirant: false,
    upsc: false,
    tnpscCourse: false,
    cseMaterial: false,
    syllabus: false,
    pyq: false,
    prelimsPYQ: false,
    mainsPYQ: false,
    tnpsc: false,
    ssb: false,
    aboutUs: false,
    new: false,
  });

  // Scroll handler for header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle submenu visibility
  const toggleMenu = (key) => {
    setOpenMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Close all menus when mobile menu is closed
  useEffect(() => {
    if (!mobileMenuOpen) {
      setOpenMenus({
        upsc: false,
        tnpscCourse: false,
        cseMaterial: false,
        syllabusDownload: false,
        syllabus: false,
        pyq: false,
        prelimsPYQ: false,
        mainsPYQ: false,
        tnpsc: false,
        ssb: false,
      });
    }
  }, [mobileMenuOpen]);
  const [openCourses, setOpenCourses] = useState(false);
  const [openFreeResource, setOpenFreeResource] = useState(false);
  const [openStory, setOpenStory] = useState(false);

  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [activeSubSubMenu, setActiveSubSubMenu] = useState(null);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenCourses(false);
        setOpenFreeResource(false);
        setOpenStory(false);
        setActiveSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Overlay behind mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Header */}
      <div
        className={`fixed left-0 w-full z-50 flex justify-center transition-all duration-500 ${
          isScrolled ? "top-[25px]" : "top-0"
        }`}
      >
        <header
          className={`transition-all duration-500 ease-in-out backdrop-blur-md rounded-none ${
            isScrolled
              ? "bg-gradient-to-r from-[#0d1117] to-[#431aa0] py-2 w-full md:w-[90%] md:rounded-2xl shadow-md"
              : "bg-white/90 py-4 w-full md:w-[100%]"
          }`}
        >
          <div className="flex justify-between items-center px-4 md:px-6">
            {/* Logo and hamburger */}
            <div className="flex items-center cursor-pointer">
              <Menu
                color={isScrolled ? "#dfe228" : undefined}
                onClick={() => setMobileMenuOpen(true)}
                className="mr-3"
              />
              <Link to="/" className="flex items-center">
                <img
                  src={img}
                  alt="Logo"
                  className="h-[50px] w-[100px] object-contain"
                />
                <span
                  className={`text-2xl font-bold ${
                    isScrolled ? "text-yellow-400" : "text-[#0d1117]"
                  } ml-[-1.5rem]`}
                >
                  JD Academy of eXcellence
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <DesktopMenu isScrolled={isScrolled} />

            {/* Login Button */}
            {/* Student Login - Desktop */}
            <button
              className={`hidden md:flex font-semibold px-4 py-2 rounded-full shadow transition-all duration-300 mr-2 items-center ${
                isScrolled
                  ? "bg-yellow-400 text-[#0f172a] hover:bg-yellow-500 blink"
                  : "bg-white text-blue-600 hover:bg-gray-100"
              }`}
              onClick={() => window.open("https://jdax.co.in", "_blank")}
            >
              <User className="w-5 h-5 mr-2" />
              Student Login
            </button>

            {/* Student Login - Mobile Icon */}
            <button
              className={`md:hidden p-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? "bg-yellow-400 text-[#0f172a]"
                  : "bg-white text-blue-600"
              }`}
              onClick={() => window.open("https://jdax.co.in", "_blank")}
              aria-label="Student Login"
            >
              <User className="w-6 h-6" />
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] z-50 transform transition-transform duration-300 bg-gradient-to-b from-[#0d1117] to-[#431aa0] py-6 px-5 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-yellow-400">Menu</h2>
          <X
            color="#dfe228"
            className="cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          />
        </div>

        <div className="overflow-y-auto max-h-[calc(100vh-72px)] hide-scrollbar space-y-6 text-white pb-16">
          {/* Mobile menu items */}
          {/* Courses */}
          <p className="font-semibold text-yellow-300">Find Your Course</p>
          <div
            className="flex justify-between items-center cursor-pointer hover:text-yellow-300"
            onClick={() => toggleMenu("new")}
          >
            <span>Beginner's Guide</span>
            <ChevronRight
              size={18}
              className={`transition-transform ${
                openMenus.upsc ? "rotate-90" : ""
              }`}
            />
          </div>

          {openMenus.new && (
            <div className="ml-5 space-y-2 text-white">
              <Link
                to="/resources/affair"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Competitive Exams Overview
              </Link>
              <Link
                to="/initiative-ecosystem"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                JDAX Competitive Exams Initiatives
              </Link>

              {/* CSE Material */}
            </div>
          )}
          <div
            className="flex justify-between items-center cursor-pointer hover:text-yellow-300"
            onClick={() => toggleMenu("upsc")}
          >
            <span>UPSC</span>
            <ChevronRight
              size={18}
              className={`transition-transform ${
                openMenus.upsc ? "rotate-90" : ""
              }`}
            />
          </div>

          {openMenus.upsc && (
            <div className="ml-5 space-y-2 text-white">
              <Link
                to="/courses/upsc"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                New To UPSC ? Start Here
              </Link>
              <Link
                to="/course/upsc/upsc-service-course"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                JDAX UPSC Courses
              </Link>

              {/* CSE Material */}
              <Link
                to="/course/upsc/upsc-peadology"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                JDAX's UPSC Pedagogy & Initiatives
              </Link>
            </div>
          )}

          <div
            className="flex justify-between items-center cursor-pointer hover:text-yellow-300"
            onClick={() => toggleMenu("tnpscCourse")}
          >
            <span>TNPSC</span>
            <ChevronRight
              size={18}
              className={`transition-transform ${
                openMenus.tnpscCourse ? "rotate-90" : ""
              }`}
            />
          </div>
          {openMenus.tnpscCourse && (
            <div className="ml-5 space-y-2 text-white">
              <Link
                to="/courses/tnpsc/new-to-start"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                New To Start TNPSC
              </Link>
              <Link
                to="/courses/tnpsc/group-exams"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                JDAX TNPSC Courses
              </Link>
              <Link
                to="/courses/tnpsc/learning-framework"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                JDAX TNPSC Learning Framework
              </Link>
              {/* CSE Material */}
            </div>
          )}
          <div
            className="flex justify-between items-center cursor-pointer hover:text-yellow-300"
            onClick={() => toggleMenu("ssb")}
          >
            <span>SSC / Banking / RRB</span>
            <ChevronRight
              size={18}
              className={`transition-transform ${
                openMenus.tnpscCourse ? "rotate-90" : ""
              }`}
            />
          </div>
          {openMenus.ssb && (
            <div className="ml-5 space-y-2 text-white">
              <Link
                to="/courses/ssc"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                New To SSC/ Banking/ RRB - Start Here
              </Link>
              <Link
                to="/course/RiseToServe"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                JDAX SSC / BANKING / RRB - Courses
              </Link>

              {/* CSE Material */}
            </div>
          )}
          {/* Resources */}
          <p className="font-semibold text-yellow-300 mt-6">Resources</p>

          <div
            className="flex justify-between items-center cursor-pointer hover:text-yellow-300"
            onClick={() => toggleMenu("cseMaterial")}
          >
            <span>UPSC Resources</span>
            <ChevronRight
              size={16}
              className={`transition-transform ${
                openMenus.cseMaterial ? "rotate-90" : ""
              }`}
            />
          </div>

          {openMenus.cseMaterial && (
            <div className="ml-5 space-y-2 text-white">
              {/* Syllabus */}
              <div
                className="flex justify-between items-center cursor-pointer hover:text-yellow-300"
                onClick={() => toggleMenu("syllabus")}
              >
                <span>Syllabus Download</span>
                <ChevronRight
                  size={14}
                  className={`transition-transform ${
                    openMenus.syllabus ? "rotate-90" : ""
                  }`}
                />
              </div>
              {openMenus.syllabus && (
                <div className="ml-5 space-y-2 text-white">
                  {/* Prelims */}
                  <Link
                    className="w-full text-left font-semibold hover:text-yellow-300"
                    onClick={() =>
                      setOpenSubMenu(
                        openSubMenu === "prelims" ? null : "prelims"
                      )
                    }
                  >
                    Prelims Syllabus
                  </Link>

                  {openSubMenu === "prelims" && (
                    <div className="ml-4 space-y-1 text-sm">
                      <Link
                        to="/resources/study-materials?tab=0"
                        className="block hover:text-yellow-300"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        GS Syllabus
                      </Link>

                      <Link
                        to="/resources/study-materials?tab=1"
                        className="block hover:text-yellow-300"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        CSAT Syllabus
                      </Link>
                    </div>
                  )}

                  {/* Mains */}
                  <button
                    className="w-full text-left font-semibold hover:text-yellow-300 mt-2"
                    onClick={() =>
                      setOpenSubMenu(openSubMenu === "mains" ? null : "mains")
                    }
                  >
                    Mains Syllabus
                  </button>

                  {openSubMenu === "mains" && (
                    <div className="ml-4 space-y-1 text-sm">
                      <Link
                        to="/resources/study-main-materials"
                        className="block hover:text-yellow-300"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        GS Syllabus 1
                      </Link>

                      <Link
                        to="/mains/gs2"
                        className="block hover:text-yellow-300"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        GS Syllabus 2
                      </Link>

                      <Link
                        to="/mains/gs3"
                        className="block hover:text-yellow-300"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        GS Syllabus 3
                      </Link>

                      <Link
                        to="/mains/gs4"
                        className="block hover:text-yellow-300"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        GS Syllabus 4
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Previous Year Question Papers */}
              <div
                className="flex justify-between items-center cursor-pointer hover:text-yellow-300 mt-2"
                onClick={() => toggleMenu("pyq")}
              >
                <Link to="/pyq" className="block hover:text-yellow-300">
                  Previous Year Question Papers
                </Link>
                <ChevronRight
                  size={14}
                  className={`transition-transform ${
                    openMenus.pyq ? "rotate-90" : ""
                  }`}
                />
              </div>

              {openMenus.pyq && (
                <div className="ml-5 space-y-2 text-white">
                  {/* Prelims PYQ */}
                  <div
                    className="flex justify-between items-center cursor-pointer hover:text-yellow-300"
                    onClick={() => toggleMenu("prelimsPYQ")}
                  >
                    <span>Prelims PYQs</span>
                    <ChevronRight
                      size={12}
                      className={`transition-transform ${
                        openMenus.prelimsPYQ ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                  {openMenus.prelimsPYQ && (
                    <div className="ml-5 space-y-1 text-white">
                      <Link
                        to="/resources/pqy-prelims"
                        className="block hover:text-yellow-300"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        GS Papers
                      </Link>
                      <Link
                        to="/resource/csat-prelims"
                        className="block hover:text-yellow-300"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        CSAT Papers
                      </Link>
                    </div>
                  )}

                  {/* Mains PYQ */}
                  <div
                    className="flex justify-between items-center cursor-pointer hover:text-yellow-300"
                    onClick={() => toggleMenu("mainsPYQ")}
                  >
                    <span>Mains PYQs</span>
                    <ChevronRight
                      size={12}
                      className={`transition-transform ${
                        openMenus.mainsPYQ ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                  {openMenus.mainsPYQ && (
                    <div className="ml-5 space-y-1 text-white">
                      <Link
                        to="/resource/gs1main"
                        className="block hover:text-yellow-300"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        GS Paper 1
                      </Link>
                      <Link
                        to="/resource/gs2main"
                        className="block hover:text-yellow-300"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        GS Paper 2
                      </Link>
                      <Link
                        to="/resource/gs3main"
                        className="block hover:text-yellow-300"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        GS Paper 3
                      </Link>
                      <Link
                        to="/resource/gs4main"
                        className="block hover:text-yellow-300"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        GS Paper 4
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          <div
            className="flex justify-between items-center cursor-pointer hover:text-yellow-300"
            onClick={() => toggleMenu("tnpsc")}
          >
            <Link
              to="/resource/tnpsc-page"
              className="block hover:text-yellow-300"
            >
              TNPSC Resource
            </Link>
            <ChevronRight
              size={16}
              className={`transition-transform ${
                openMenus.tnpsc ? "rotate-90" : ""
              }`}
            />
          </div>

          {openMenus.tnpsc && (
            <div className="ml-5 space-y-2 text-white">
              <Link
                to="/resource/tnpsc-syllabus"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Syllabus
              </Link>

              <Link
                to="/resource/tnpsc-pyq"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Previous Question Paper
              </Link>

              <Link
                to="/resource/where-study"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                JDAX TNPSC Where to study
              </Link>

              <Link
                to="/resource/tnpsc-policy"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                JDAX TNPSC Policy Notes
              </Link>
            </div>
          )}

          {/* About JDAX */}
          <p className="font-semibold text-yellow-300 mt-6">Aspirant</p>
          <Link
            to="/aspirant/student-journey"
            className="block hover:text-yellow-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Aspirant
          </Link>
          <p className="font-semibold text-yellow-300 mt-6">About Jdax</p>

          <div
            className="flex justify-between items-center cursor-pointer hover:text-yellow-300 mt-2"
            onClick={() => toggleMenu("aboutUs")}
          >
            <span>About JDAX</span>
            <ChevronRight
              size={14}
              className={`transition-transform ${
                openMenus.aboutUs ? "rotate-90" : ""
              }`}
            />
          </div>

          {openMenus.aboutUs && (
            <div className="ml-5 space-y-2 text-white">
              <Link
                to="/about-jdax"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Story (Founder’s Vision)
              </Link>

              <Link
                to="/commitment"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Commitment & Philosophy
              </Link>

              {/* <Link
                to="/jdax-management"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                JDAX Management Team
              </Link> */}

              <Link
                to="/jdax-faculty"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                JDAX Faculty Team
              </Link>

              <Link
                to="/jdax-skill"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                JDAX Academic & Skill Council Team
              </Link>

              <Link
                to="/why-choose"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Choose JDAX?
              </Link>

              <Link
                to="/prospect"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                JDAX Prospectus & Pamphlets Download
              </Link>
              <Link
                to="/gallery"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              {/* <Link
                to="/careers"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Careers (Join JDAX Team)
              </Link> */}
            </div>
          )}
          <div className="h-16" />
        </div>
      </div>
    </>
  );
}
