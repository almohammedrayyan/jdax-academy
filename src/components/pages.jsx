import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import AboutUs from "./About";
import ContactUs from "./Contact";
import Footer from "./Footer";
import banner from "../assets/banner.jpeg";

const LandingPage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Custom Large Popup Modal */}
      {open && (
        <div style={styles.overlay} onClick={handleClose}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            {/* White Top Header Area */}
            <div style={styles.modalHeader}>
              <button
                style={styles.closeButton}
                onClick={handleClose}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#e0e0e0")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <img
              src={banner}
              alt="Promotion Banner"
              style={styles.popupImage}
            />
          </div>
        </div>
      )}

      {/* Main Landing Content */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <Hero />
        <AboutUs />
        <ContactUs />

        {/* Footer with thick white border on all sides */}
        <div style={styles.footerWrapper}>
          <Footer />
        </div>
      </div>
    </>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.85)", // Slightly darker for focus
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    padding: "20px", // Prevents modal from touching screen edges on mobile
  },
  modal: {
    position: "relative",
    backgroundColor: "white",
    borderRadius: "20px",
    // Increased Width Settings
    maxWidth: "850px",
    width: "95%",
    overflow: "hidden",
    boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
    borderTop: "12px solid white", // Thicker white top border
  },
  modalHeader: {
    height: "50px",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0 20px",
  },
  closeButton: {
    background: "#f0f0f0",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#000",
    transition: "all 0.2s ease",
  },
  popupImage: {
    width: "100%",
    height: "auto",
    display: "block",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
  },
  footerWrapper: {
    border: "15px solid white", // Strong white border on all sides
    boxShadow: "inset 0 0 10px rgba(0,0,0,0.05)", // Optional: subtle shadow to define border
  },
};

export default LandingPage;
