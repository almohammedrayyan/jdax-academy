import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StudyMaterial from "../../components/resource/studyMaterial";
import Gs1 from "../gs/gs1";
import PrelimsPYQPage from "../../components/prelimQuestion/prelimQuestion";

const PrelimPage = () => {
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
          <PrelimsPYQPage />
        </main>

        {/* Static Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default PrelimPage;
