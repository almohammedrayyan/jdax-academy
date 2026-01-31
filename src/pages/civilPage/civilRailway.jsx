import React from "react";
import CourseUpsc from "../../components/courseUpsc";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CourseTnpsc from "../../components/courseTnpsc";
import CourseRailway from "../../components/courseRailway";

const CivilRailway = () => {
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
          <CourseRailway />
        </main>

        {/* Static Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default CivilRailway;
