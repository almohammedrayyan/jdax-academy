import React from "react";
import AboutUs from "../components/About";
import Blog from "../components/Blog";
import ContactUs from "../components/Contact";
import YouTube from "../components/Video";
import Header from "../components/Header";
import Footer from "../components/Footer";

const YouTubePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Static Header */}
      <Header />

      {/* Page content will be injected here */}
      <main className="flex-grow">
        <YouTube />
      </main>

      {/* Static Footer */}
      <Footer />
    </div>
  );
};

export default YouTubePage;
