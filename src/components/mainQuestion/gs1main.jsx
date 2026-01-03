import React from "react";
import MainsPYQTemplate from "./pyq-main";

export default function MainsGS1PYQPage() {
  return (
    <MainsPYQTemplate
      paperNumber="GS1"
      paperTitle="Mains GS Paper 1"
      paperSubtitle="Culture, History, Society & Geography"
      colorScheme={{
        from: "green",
        to: "emerald",
        accent: "green",
        light: "green",
      }}
      urlPrefix="YOUR_GS1_FILE_ID_FOR"
    />
  );
}
