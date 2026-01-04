import React from "react";
import GS3Overview from "../../components/mainGs/GS3/overviewGs3";
import GS3Navigation from "../../components/mainGs/GS3/navigationGs3";
import GS3PaperArchitecture from "../../components/mainGs/GS3/papaerGs3";
import GS3TopicSections from "../../components/mainGs/GS3/tpoicGs3";
import GS380_20Rule from "../../components/mainGs/GS3/eightGs3";
import GS3Resources from "../../components/mainGs/GS3/resourceGs3";
import GS3CommonMistakes from "../../components/mainGs/GS3/mistakeGs3";
import GS3Hero from "../../components/mainGs/GS3/heroGs3";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const GS3 = () => {
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
        {/* Static Header */}
        <Header />

        {/* Page content will be injected here */}
        <main className="flex-grow">
          <div>
            <GS3Hero />
            {/* <GS3Navigation /> */}
            <GS3Overview />
            <GS3PaperArchitecture />
            <GS3TopicSections />
            <GS380_20Rule />
            <GS3Resources />
            <GS3CommonMistakes />
          </div>
        </main>

        {/* Static Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default GS3;
