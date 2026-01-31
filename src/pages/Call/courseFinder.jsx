import React from "react";

import CourseComparisonTool from "../../components/course-comparison-tool";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const CourseFinder = () => {
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
      style={{ marginTop: "50px" }}
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Static Header */}
        <Header />

        {/* Page content will be injected here */}
        <main className="flex-grow">
          <CourseComparisonTool />
        </main>

        {/* Static Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default CourseFinder;
