import React from "react";
import GS4Overview from "../../components/mainGs/GS4/overviewGs4";
import GS4Navigation from "../../components/mainGs/GS4/navigationGs4";
import GS4PaperArchitecture from "../../components/mainGs/GS4/papaerGs4";
import GS4TopicSections from "../../components/mainGs/GS4/tpoicGs4";
import GS480_20Rule from "../../components/mainGs/GS4/eightGs4";
import GS4Resources from "../../components/mainGs/GS4/resourceGs4";
import GS4CommonMistakes from "../../components/mainGs/GS4/mistakeGs4";
import GS4Hero from "../../components/mainGs/GS4/heroGs4";

const GS4 = () => {
  return (
    <div>
      <GS4Hero />
      <GS4Navigation />
      <GS4Overview />
      <GS4PaperArchitecture />
      <GS4TopicSections />
      <GS480_20Rule />
      <GS4Resources />
      <GS4CommonMistakes />
    </div>
  );
};

export default GS4;
