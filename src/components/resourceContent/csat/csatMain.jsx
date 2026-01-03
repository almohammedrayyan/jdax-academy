import React from "react";
import CSATHero from "./castHero";
import CSATNavigation from "./castNavigation";
import CSATOverview from "./csatOverview";
import CSATTopicSections from "./csat-topic-section";
import CSATWeightageChart from "./csatWeighted";
import CSATStrategy from "./csatStrategy";

const CsatMain = () => {
  return (
    <div>
      <CSATHero />
      <CSATNavigation />
      <CSATOverview />
      <CSATWeightageChart />
      <CSATTopicSections />
      <CSATStrategy />
    </div>
  );
};

export default CsatMain;
