import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import img from "../assets/images.png";
import { Menu, User, X, ChevronRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track open menus with state
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
                  className={`text-lg font-bold ${
                    isScrolled ? "text-yellow-400" : "text-[#0d1117]"
                  } ml-[-1.5rem]`}
                >
                  JD Academy of eXcellence
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex space-x-6 items-center"
              ref={menuRef}
            >
              {/* Courses Dropdown */}
              <div className="relative">
                {/* Courses button */}
                <div
                  className={`cursor-pointer font-medium flex items-center space-x-2 ${
                    isScrolled ? "text-yellow-400" : "text-[#0d1117]"
                  }`}
                  onMouseEnter={() => {
                    setOpenFreeResource(false);
                    setOpenStory(false);
                    setOpenCourses(true);
                  }}
                  onClick={() => setOpenCourses((prev) => !prev)}
                >
                  <span>Find Your Course</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 transition-transform transform ${
                      openCourses ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Main dropdown */}
                {openCourses && (
                  <div className="absolute left-0 mt-3 min-w-[280px] bg-white text-black rounded-xl shadow-xl px-5 py-4 grid gap-3 text-sm z-50">
                    {/* UPSC */}
                    {/* <Link
                      to="/resources/affair"
                      className="font-bold px-2 py-1 rounded-md hover:bg-gray-100 flex justify-between items-center"
                    >
                      Beginner Guide (New)
                    </Link> */}
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveSubmenu("new")}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <Link className="font-bold px-2 py-1 rounded-md hover:bg-gray-100 flex justify-between items-center">
                        Beginner Guide (New){" "}
                        <span className="ml-2">&#9662;</span>
                      </Link>
                      {activeSubmenu === "new" && (
                        <div className="absolute left-full top-0 mt-0 min-w-[280px] bg-white text-black rounded-xl shadow-xl px-5 py-4 grid gap-3 text-sm z-50">
                          <Link
                            to="/resources/affair"
                            className="font-bold px-2 py-1 rounded-md hover:bg-gray-100"
                          >
                            Beginer New to upsc guide
                          </Link>
                          <Link
                            to="/initiative-ecosystem"
                            className="font-bold px-2 py-1 rounded-md hover:bg-gray-100"
                          >
                            JDAX Competitive Exams Initiatives
                          </Link>
                        </div>
                      )}
                    </div>
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveSubmenu("upsc")}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <Link className="font-bold px-2 py-1 rounded-md hover:bg-gray-100 flex justify-between items-center">
                        UPSC <span className="ml-2">&#9662;</span>
                      </Link>
                      {activeSubmenu === "upsc" && (
                        <div className="absolute left-full top-0 mt-0 min-w-[280px] bg-white text-black rounded-xl shadow-xl px-5 py-4 grid gap-3 text-sm z-50">
                          <Link
                            to="/courses/upsc"
                            className="font-bold px-2 py-1 rounded-md hover:bg-gray-100"
                          >
                            New To Upsc ? Start Here
                          </Link>
                          <Link
                            to="/course/upsc/upsc-service-course"
                            className="font-bold px-2 py-1 rounded-md hover:bg-gray-100"
                          >
                            JDAX UPSC Courses
                          </Link>
                          <Link
                            to="/course/upsc/upsc-peadology"
                            className="font-bold px-2 py-1 rounded-md hover:bg-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            JDAX's UPSC Pedagogy & Initiatives
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* TNPSC */}
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveSubmenu("tnpsc")}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <Link className="font-bold px-2 py-1 rounded-md hover:bg-gray-100 flex justify-between items-center">
                        TNPSC <span className="ml-2">&#9662;</span>
                      </Link>
                      {activeSubmenu === "tnpsc" && (
                        <div className="absolute left-full top-0 mt-0 min-w-[280px] bg-white text-black rounded-xl shadow-xl px-5 py-4 grid gap-3 text-sm z-50">
                          <Link
                            to="/courses/tnpsc/new-to-start"
                            className="font-bold px-2 py-1 rounded-md hover:bg-gray-100"
                          >
                            New to TNPSC
                          </Link>
                          <Link
                            to="/courses/tnpsc/group-exams"
                            className="font-bold px-2 py-1 rounded-md hover:bg-gray-100"
                          >
                            JDAX TNPSC Courses
                          </Link>
                          <Link
                            to="/courses/tnpsc/learning-framework"
                            className="font-bold px-2 py-1 rounded-md hover:bg-gray-100"
                          >
                            JDAX TNPSC Learning Framework
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* SSB */}
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveSubmenu("ssb")}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <Link className="font-bold px-2 py-1 rounded-md hover:bg-gray-100 flex justify-between items-center">
                        SSB <span className="ml-2">&#9662;</span>
                      </Link>
                      {activeSubmenu === "ssb" && (
                        <div className="absolute left-full top-0 mt-0 min-w-[280px] bg-white text-black rounded-xl shadow-xl px-5 py-4 grid gap-3 text-sm z-50">
                          <Link
                            to="/courses/ssc"
                            className="font-bold px-2 py-1 rounded-md hover:bg-gray-100"
                          >
                            New to SSB (Railway & Banking)
                          </Link>
                          <Link
                            to="/course/RiseToServe"
                            className="font-bold px-2 py-1 rounded-md hover:bg-gray-100"
                          >
                            Rise to Integrated Service
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                {/* Courses Button */}
                <div
                  className={`cursor-pointer font-medium flex items-center space-x-2 ${
                    isScrolled ? "text-yellow-400" : "text-[#0d1117]"
                  }`}
                  onMouseEnter={() => {
                    setOpenCourses(false);
                    setOpenFreeResource(true);
                  }}
                  onClick={() => setOpenFreeResource((prev) => !prev)}
                >
                  <span>Free Resource</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 transition-transform transform ${
                      openFreeResource ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Main Dropdown */}
                {openFreeResource && (
                  <div className="absolute left-0 mt-3 min-w-[280px] bg-white text-black rounded-xl shadow-xl px-5 py-4 grid gap-3 text-sm z-50">
                    {/* UPSC */}
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveSubmenu("upsc")}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      {/* <Link
                        to="/resources/affair"
                        className="font-bold px-2 py-1 rounded-md hover:bg-gray-100 flex justify-between items-center"
                      >
                        Beginner Guide (New)
                        <span className="ml-2">&#9662;</span>
                      </Link> */}
                    </div>

                    {/* UPSC CSE Material */}
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveSubmenu("cseMaterial")}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <Link
                        // to="/courses/upsc-cse-material"
                        className="font-bold px-2 py-1 rounded-md hover:bg-gray-100 flex justify-between items-center"
                      >
                        UPSC CSE Material
                        <span className="ml-2">&#9662;</span>
                      </Link>

                      {activeSubmenu === "cseMaterial" && (
                        <div
                          className="absolute left-full top-0 mt-0 min-w-[280px] bg-white text-black rounded-xl shadow-xl px-3 py-4 grid gap-3 text-sm z-50"
                          onMouseEnter={() => setActiveSubmenu("cseMaterial")}
                          onMouseLeave={() => setActiveSubmenu(null)}
                        >
                          {/* Syllabus Download */}
                          <div
                            className="relative"
                            onMouseEnter={() =>
                              setActiveSubmenu("syllabusDownload")
                            }
                            onMouseLeave={() => setActiveSubmenu("cseMaterial")}
                          >
                            <Link
                              to="#"
                              className="font-bold px-2 py-1 rounded-md hover:bg-gray-100 flex justify-between items-center"
                            >
                              Syllabus Download{" "}
                              <span className="ml-2">&#9662;</span>
                            </Link>
                            {activeSubmenu === "syllabusDownload" && (
                              <div className="absolute left-full top-0 mt-0 min-w-[280px] bg-white text-black rounded-xl shadow-xl px-5 py-4 grid gap-3 text-sm z-50">
                                <Link
                                  to="/resources/study-materials"
                                  className="font-bold px-2 py-1 rounded-md hover:bg-gray-100"
                                >
                                  Prelims Syllabus
                                </Link>
                                <Link
                                  to="/resources/study-main-materials"
                                  className="font-bold px-2 py-1 rounded-md hover:bg-gray-100"
                                >
                                  Mains Syllabus
                                </Link>
                              </div>
                            )}
                          </div>

                          {/* Previous Year Question Paper */}
                          <div
                            className="relative"
                            onMouseEnter={() =>
                              setActiveSubmenu("prevYearQPaper")
                            }
                            onMouseLeave={() => setActiveSubmenu("cseMaterial")}
                          >
                            <Link
                              to="/pyq"
                              className="font-bold px-2 py-1 rounded-md hover:bg-gray-100 flex justify-between items-center"
                            >
                              Previous Year Question Paper{" "}
                              <span className="ml-2">&#9662;</span>
                            </Link>

                            {activeSubmenu === "prevYearQPaper" && (
                              <div className="absolute left-full top-0 mt-0 min-w-[280px] bg-white text-black rounded-xl shadow-xl px-5 py-4 grid gap-3 text-sm z-50">
                                {/* Prelims PYQ */}
                                <div
                                  className="relative"
                                  onMouseEnter={() =>
                                    setActiveSubmenu("prelimsPYQ")
                                  }
                                  onMouseLeave={() =>
                                    setActiveSubmenu("prevYearQPaper")
                                  }
                                >
                                  <Link
                                    to="#"
                                    className="font-bold px-2 py-1 rounded-md hover:bg-gray-100 flex justify-between items-center"
                                  >
                                    Prelims PYQ{" "}
                                    <span className="ml-2">&#9662;</span>
                                  </Link>
                                  {activeSubmenu === "prelimsPYQ" && (
                                    <div className="absolute left-full top-0 mt-0 min-w-[280px] bg-white text-black rounded-xl shadow-xl px-5 py-4 grid gap-3 text-sm z-50">
                                      <Link
                                        to="/resources/pqy-prelims"
                                        className="font-bold px-2 py-1 rounded-md hover:bg-gray-100"
                                      >
                                        GS Papers
                                      </Link>
                                      <Link
                                        to="/resource/csat-prelims"
                                        className="font-bold px-2 py-1 rounded-md hover:bg-gray-100"
                                      >
                                        CSAT Papers
                                      </Link>
                                    </div>
                                  )}
                                </div>

                                {/* Mains PYQ */}
                                <div
                                  className="relative"
                                  onMouseEnter={() =>
                                    setActiveSubmenu("mainsPYQ")
                                  }
                                  onMouseLeave={() =>
                                    setActiveSubmenu("prevYearQPaper")
                                  }
                                >
                                  <Link
                                    to="#"
                                    className="font-bold px-2 py-1 rounded-md hover:bg-gray-100 flex justify-between items-center"
                                  >
                                    Mains PYQ{" "}
                                    <span className="ml-2">&#9662;</span>
                                  </Link>
                                  {activeSubmenu === "mainsPYQ" && (
                                    <div className="absolute left-full top-0 mt-0 min-w-[280px] bg-white text-black rounded-xl shadow-xl px-5 py-4 grid gap-3 text-sm z-50">
                                      <Link
                                        to="/resource/gs1main"
                                        className="font-bold px-2 py-1 rounded-md hover:bg-gray-100"
                                      >
                                        GS Paper 1
                                      </Link>
                                      <Link
                                        to="/resource/gs2main"
                                        className="font-bold px-2 py-1 rounded-md hover:bg-gray-100"
                                      >
                                        GS Paper 2
                                      </Link>
                                      <Link
                                        to="/resource/gs3main"
                                        className="font-bold px-2 py-1 rounded-md hover:bg-gray-100"
                                      >
                                        GS Paper 3
                                      </Link>
                                      <Link
                                        to="/resource/gs4main"
                                        className="font-bold px-2 py-1 rounded-md hover:bg-gray-100"
                                      >
                                        GS Paper 4
                                      </Link>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* TNPSC / SSB */}
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveSubmenu("ssb")}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <Link
                        to="/resource/tnpsc-page"
                        className="font-bold px-2 py-1 rounded-md hover:bg-gray-100 flex justify-between items-center"
                      >
                        Tnpsc Resource <span className="ml-2">&#9662;</span>
                      </Link>

                      {activeSubmenu === "ssb" && (
                        <div className="absolute left-full top-0 mt-0 min-w-[280px] bg-white text-black rounded-xl shadow-xl px-5 py-4 grid gap-3 text-sm z-50">
                          <Link
                            to="/resource/tnpsc-syllabus"
                            className="font-bold px-2 py-1 rounded-md hover:bg-gray-100"
                          >
                            Syllabus
                          </Link>
                          <Link
                            to="/resource/tnpsc-pyq"
                            className="font-bold px-2 py-1 rounded-md hover:bg-gray-100"
                          >
                            Previous Question Paper
                          </Link>
                          <Link
                            to="/resource/where-study"
                            className="font-bold px-2 py-1 rounded-md hover:bg-gray-100"
                          >
                            JDAX TNPSC where to study
                          </Link>
                          <Link
                            to="/resource/tnpsc-policy"
                            className="font-bold px-2 py-1 rounded-md hover:bg-gray-100"
                          >
                            JDAX TNPSC policy notes
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                {/* Courses Button */}
                <div
                  className={`cursor-pointer font-medium flex items-center space-x-2 ${
                    isScrolled ? "text-yellow-400" : "text-[#0d1117]"
                  }`}
                  onMouseEnter={() => {
                    // setOpenCourses(false);
                    // setOpenFreeResource(true);
                  }}
                  // onClick={() => setOpenFreeResource((prev) => !prev)}
                >
                  <Link to={"/aspirant/student-journey"}>Aspirant</Link>
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 transition-transform transform ${
                      openFreeResource ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg> */}
                </div>
              </div>
              <div className="relative">
                {/* Courses Button */}
                <div
                  className={`cursor-pointer font-medium flex items-center space-x-2 ${
                    isScrolled ? "text-yellow-400" : "text-[#0d1117]"
                  }`}
                  onMouseEnter={() => {
                    setOpenCourses(false);
                    setOpenFreeResource(false);
                    setOpenStory(true);
                  }}
                  onClick={() => setOpenStory((prev) => !prev)}
                >
                  <span>About Jdax</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 transition-transform transform ${
                      openStory ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Main Dropdown */}
                {openStory && (
                  <div className="absolute left-0 mt-3 min-w-[280px] bg-white text-black rounded-xl shadow-xl px-5 py-4 grid gap-3 text-sm z-50">
                    {/* UPSC */}
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveSubmenu("story")}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <Link
                        to="/about-jdax"
                        className="font-bold px-2 py-1 rounded-md hover:bg-gray-100 flex justify-between items-center"
                      >
                        Our Story
                      </Link>
                      <Link
                        to="/commitment"
                        className="font-bold px-2 py-1 rounded-md hover:bg-gray-100 flex justify-between items-center"
                      >
                        Our Commitments and philosophy
                      </Link>
                      {/* <Link
                        to="/jdax-management"
                        className="font-bold px-2 py-1 rounded-md hover:bg-gray-100 flex justify-between items-center"
                      >
                        JDAX Management Team
                      </Link> */}
                      <Link
                        to="/jdax-faculty"
                        className="font-bold px-2 py-1 rounded-md hover:bg-gray-100 flex justify-between items-center"
                      >
                        JDAX Faculty Team
                      </Link>
                      <Link
                        to="/jdax-skill"
                        className="font-bold px-2 py-1 rounded-md hover:bg-gray-100 flex justify-between items-center"
                      >
                        JDAX Academic and skill Council
                      </Link>
                      <Link
                        to="/why-choose"
                        className="font-bold px-2 py-1 rounded-md hover:bg-gray-100 flex justify-between items-center"
                      >
                        Why Choose Jdax
                      </Link>
                      <Link
                        to="/gallery"
                        className="font-bold px-2 py-1 rounded-md hover:bg-gray-100 flex justify-between items-center"
                      >
                        Gallery
                      </Link>
                      <Link
                        to="/prospect"
                        className="font-bold px-2 py-1 rounded-md hover:bg-gray-100 flex justify-between items-center"
                      >
                        JDAX Prospect and Pampers
                      </Link>
                      {/* <Link
                        to="/careers"
                        className="font-bold px-2 py-1 rounded-md hover:bg-gray-100 flex justify-between items-center"
                      >
                        Careers(JDAX Team)
                      </Link> */}
                    </div>
                  </div>
                )}
              </div>
            </nav>

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
            <span>Beginer Guide (new)</span>
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
                Beginer New To Upsc Guide
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
                New To Upsc ? Start Here
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
                New To Start Tnpsc
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
            <span>SSC, Banking, and Railways</span>
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
                New To SSC, Banking, Railways
              </Link>
              <Link
                to="/course/RiseToServe"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                RISE TO SERVE INTEGRATED BATCH
              </Link>

              {/* CSE Material */}
            </div>
          )}
          {/* Resources */}
          <p className="font-semibold text-yellow-300 mt-6">Resources</p>
          {/* <Link
            to="/resources/affair"
            className="block hover:text-yellow-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Beginners Guide (New)
          </Link> */}

          <div
            className="flex justify-between items-center cursor-pointer hover:text-yellow-300"
            onClick={() => toggleMenu("cseMaterial")}
          >
            <span>UPSC CSE Material</span>
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
                <div className="ml-5 space-y-1 text-white">
                  <Link
                    to="/resources/study-materials"
                    className="block hover:text-yellow-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Prelims Syllabus
                  </Link>
                  <Link
                    to="/resources/study-main-materials"
                    className="block hover:text-yellow-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Mains Syllabus
                  </Link>
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
                to="/gallery"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>

              <Link
                to="/prospect"
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                JDAX Prospectus & Pamphlet Download
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
