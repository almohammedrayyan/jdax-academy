import React from "react";
import HeroGs1 from "../../components/mainGs/GS1/heroGs1";
import GS1Overview from "../../components/mainGs/GS1/overviewGs1";
import GS1Navigation from "../../components/mainGs/GS1/navigationGs1";
import GS1PaperArchitecture from "../../components/mainGs/GS1/paperGs1";
import GS1EightyTwenty from "../../components/mainGs/GS1/eightGs1";
import GS1TopicSections from "../../components/mainGs/GS1/tpoicGs1";
import GS1Resources from "../../components/mainGs/GS1/resourceGs1";
import GS1CommonMistakes from "../../components/mainGs/GS1/mistakeGs1";

const Gs1 = () => {
  return (
    <div>
      <HeroGs1 />
      <GS1Overview />
      <GS1Navigation />
      <GS1PaperArchitecture />
      <GS1TopicSections />
      <GS1EightyTwenty />
      <GS1Resources />
      <GS1CommonMistakes />
    </div>
  );
};

export default Gs1;
