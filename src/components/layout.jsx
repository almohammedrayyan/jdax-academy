import React from "react";
import { Outlet } from "react-router-dom";

import LandingPage from "./pages";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Static Header */}
      <Header />

      {/* Page content will be injected here */}
      <main className="flex-grow">
        <LandingPage />
      </main>

      {/* Static Footer */}
    </div>
  );
}
