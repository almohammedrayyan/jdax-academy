import React from "react";
import MainsPYQTemplate from "./pyq-main";

export default function MainsGS2PYQPage() {
  return (
    <MainsPYQTemplate
      paperNumber="GS2"
      paperTitle="Mains GS Paper 2"
      paperSubtitle="Polity, Governance & International Relations"
      colorScheme={{
        from: "purple",
        to: "fuchsia",
        accent: "purple",
        light: "purple",
      }}
      urlPrefix="YOUR_GS2_FILE_ID_FOR"
    />
  );
}
