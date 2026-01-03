import React from "react";
import MainsPYQTemplate from "./pyq-main";

export default function MainsGS4PYQPage() {
  return (
    <MainsPYQTemplate
      paperNumber="GS4"
      paperTitle="Mains GS Paper 4"
      paperSubtitle="Ethics, Integrity & Aptitude"
      colorScheme={{
        from: "rose",
        to: "pink",
        accent: "rose",
        light: "rose",
      }}
      urlPrefix="YOUR_GS4_FILE_ID_FOR"
    />
  );
}
