import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Group1MainsPYQPage from "../../components/TnpscResources/pyq/group1-mains/page";
import Group1PrelimsPYQPage from "../../components/TnpscResources/pyq/group1-prelims/page";
import Group2MainsPYQPage from "../../components/TnpscResources/pyq/group2-mains/page";
import Group2PrelimsPYQPage from "../../components/TnpscResources/pyq/group2-prelims/page";
import Group4PYQPage from "../../components/TnpscResources/pyq/group4/page";

const PQYTNPSC = () => {
  const location = useLocation();
  const path = location.pathname;

  const renderContent = () => {
    switch (path) {
      case "/resource/group-one-main-pyq":
        return <Group1MainsPYQPage />;

      case "/resource/group-one-prelim-pyq":
        return <Group1PrelimsPYQPage />;

      case "/resource/group-two-main-pyq":
        return <Group2MainsPYQPage />;

      case "/resource/group-two-prelim-pyq":
        return <Group2PrelimsPYQPage />;

      case "/resource/group-4-pyq":
        return <Group4PYQPage />;

      default:
        return <div className="p-6">Page not found</div>;
    }
  };

  return (
    <div
    // className="
    //   min-h-screen
    //   bg-[#d3d3ff]
    //   p-4 sm:p-6 md:p-8 lg:p-12 xl:p-14
    //   box-border
    // "
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <Header />

        <main className="flex-grow">{renderContent()}</main>

        <Footer />
      </div>
    </div>
  );
};

export default PQYTNPSC;
