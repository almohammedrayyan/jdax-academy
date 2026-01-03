import React from "react";
import GS3Overview from "../../components/mainGs/GS3/overviewGs3";
import GS3Navigation from "../../components/mainGs/GS3/navigationGs3";
import GS3PaperArchitecture from "../../components/mainGs/GS3/papaerGs3";
import GS3TopicSections from "../../components/mainGs/GS3/tpoicGs3";
import GS380_20Rule from "../../components/mainGs/GS3/eightGs3";
import GS3Resources from "../../components/mainGs/GS3/resourceGs3";
import GS3CommonMistakes from "../../components/mainGs/GS3/mistakeGs3";
import GS3Hero from "../../components/mainGs/GS3/heroGs3";

const GS3 = () => {
  return (
    <div>
      <GS3Hero />
      <GS3Navigation />
      <GS3Overview />
      <GS3PaperArchitecture />
      <GS3TopicSections />
      <GS380_20Rule />
      <GS3Resources />
      <GS3CommonMistakes />
    </div>
  );
};

export default GS3;
