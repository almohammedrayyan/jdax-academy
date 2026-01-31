import React from "react";

import Gs2Overview from "../../components/mainGs/Gs2/overviewGs2";
import Gs2Navigation from "../../components/mainGs/Gs2/navigationGs2";
import Gs2TopicSections from "../../components/mainGs/Gs2/tpoicGs2";
import Gs2Resources from "../../components/mainGs/Gs2/resourceGs2";
import Gs2CommonMistakes from "../../components/mainGs/Gs2/mistakeGs2";
import GS280_20Rule from "../../components/mainGs/Gs2/eightGs2";
import GS2Hero from "../../components/mainGs/Gs2/heroGs2";
import GS2PaperArchitecture from "../../components/mainGs/Gs2/papaerGs2";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Gs2 = () => {
  return (
    <div
    // className="
    //       min-h-screen
    //       bg-[#d3d3ff]
    //       p-4                /* base padding for mobile */
    //       sm:p-6             /* small screens */
    //       md:p-8             /* tablets */
    //       lg:p-12            /* laptops */
    //       xl:p-14            /* desktops */
    //       box-border
    //     "
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Static Header */}
        <Header />

        {/* Page content will be injected here */}
        <main className="flex-grow">
          <div>
            <GS2Hero />
            <Gs2Overview />
            <GS2PaperArchitecture />
            <Gs2TopicSections />
            <GS280_20Rule />
            <Gs2Resources />
            <Gs2CommonMistakes />
          </div>
        </main>

        {/* Static Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Gs2;
