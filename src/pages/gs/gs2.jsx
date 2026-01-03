import React from "react";

import Gs2Overview from "../../components/mainGs/Gs2/overviewGs2";
import Gs2Navigation from "../../components/mainGs/Gs2/navigationGs2";
import Gs2TopicSections from "../../components/mainGs/Gs2/tpoicGs2";
import Gs2Resources from "../../components/mainGs/Gs2/resourceGs2";
import Gs2CommonMistakes from "../../components/mainGs/Gs2/mistakeGs2";
import GS280_20Rule from "../../components/mainGs/Gs2/eightGs2";
import GS2Hero from "../../components/mainGs/Gs2/heroGs2";
import GS2PaperArchitecture from "../../components/mainGs/Gs2/papaerGs2";

const Gs2 = () => {
  return (
    <div>
      <GS2Hero />
      <Gs2Navigation />
      <Gs2Overview />
      <GS2PaperArchitecture />
      <Gs2TopicSections />
      <GS280_20Rule />
      <Gs2Resources />
      <Gs2CommonMistakes />
    </div>
  );
};

export default Gs2;
