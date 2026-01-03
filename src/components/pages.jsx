import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import AboutUs from "./About";
import Courses from "./Courses";
import YouTube from "./Video";
import Testimonial from "./Testimonials";
import Blog from "./Blog";
import ContactUs from "./Contact";
import Footer from "./Footer";
import AboutHome from "./AboutHome";

const LandingPage = () => {
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
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <Hero />
        <AboutUs />
        {/* <Courses />
      <YouTube />
      <Testimonial />
      <Blog /> */}
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
