import React from "react";
import AboutUs from "../components/About";
import Blog from "../components/Blog";
import ContactUs from "../components/Contact";
import Testimonial from "../components/Testimonials";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TestimonailPages = () => {
  return (
    <div
    // className="
    //   min-h-screen
    //   bg-[#d3d3ff]
    //   p-4                /* base padding for mobile */
    //   sm:p-6             /* small screens */
    //   md:p-8             /* tablets */
    //   lg:p-12            /* laptops */
    //   xl:p-14            /* desktops */
    //   box-border
    // "
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Static Header */}
        <Header />

        {/* Page content will be injected here */}
        <main className="flex-grow">
          <Testimonial />
        </main>

        {/* Static Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default TestimonailPages;
