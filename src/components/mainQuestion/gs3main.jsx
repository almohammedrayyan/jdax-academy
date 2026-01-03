import React from "react";
import MainsPYQTemplate from "./pyq-main";

export default function MainsGS3PYQPage() {
  return (
    <MainsPYQTemplate
      paperNumber="GS3"
      paperTitle="Mains GS Paper 3"
      paperSubtitle="Economy, Science, Technology, Environment & Security"
      colorScheme={{
        from: "cyan",
        to: "teal",
        accent: "cyan",
        light: "cyan",
      }}
      urlPrefix="YOUR_GS3_FILE_ID_FOR"
    />
  );
}
