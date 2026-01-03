import React, { useEffect } from "react";
import "./jdaxExe.css";

const JdaxExe = () => {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;

      reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  const handleCTA = (e) => {
    e.preventDefault();
    alert(
      "Thank you for your interest! Please contact JDAX to enroll in the Interview Transformation Initiative."
    );
  };

  return (
    <>
      {/* Program Highlights Section */}
      <div>
        {/* HERO SECTION */}
        <section
          style={{
            background: "#f5f5f5",
            padding: "80px 20px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div
              style={{
                display: "inline-block",
                background: "#ffd700",
                padding: "10px 20px",
                borderRadius: "25px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              <i className="fas fa-award"></i> Interview Transformation
              Initiative
            </div>

            <h1 style={{ fontSize: "42px", marginTop: "15px" }}>
              Reflect. Transform. Conquer.
            </h1>

            <p
              style={{
                fontSize: "20px",
                marginTop: "10px",
                fontStyle: "italic",
              }}
            >
              Your Personality Transformation Journey to UPSC Success
            </p>

            <p
              style={{
                marginTop: "20px",
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#444",
              }}
            >
              Comprehensive Personality Test preparation featuring expert mock
              interview panels conducted by serving IAS, IPS, IFS, and other
              civil servants, detailed DAF (Detailed Application Form) analysis,
              current affairs discussions, confidence-building sessions, body
              language training, and communication refinement.
            </p>
          </div>
        </section>

        {/* JOURNEY FLOW SECTION */}
        <section style={{ padding: "70px 20px", background: "white" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "32px", textAlign: "center" }}>
              Your Transformation Journey
            </h2>

            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                color: "#666",
                fontSize: "18px",
              }}
            >
              A systematic approach to mastering the UPSC Personality Test
              through three transformative stages
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "30px",
                marginTop: "50px",
              }}
            >
              {/* REFLECT */}
              <div
                style={{
                  padding: "25px",
                  borderRadius: "10px",
                  background: "#f8f9fa",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>
                  <i className="fas fa-mirror"></i>
                </div>
                <h3 style={{ fontSize: "24px" }}>REFLECT</h3>
                <p style={{ marginTop: "15px", color: "#555" }}>
                  Discover your authentic self and build self-awareness. Dive
                  deep into understanding your strengths, values, and
                  personality traits that define who you are.
                </p>
              </div>

              {/* TRANSFORM */}
              <div
                style={{
                  padding: "25px",
                  borderRadius: "10px",
                  background: "#f8f9fa",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>
                  <i className="fas fa-rocket"></i>
                </div>
                <h3 style={{ fontSize: "24px" }}>TRANSFORM</h3>
                <p style={{ marginTop: "15px", color: "#555" }}>
                  Develop diplomatic communication and informed opinions. Refine
                  your articulation, body language, and ability to express
                  complex ideas with clarity and confidence.
                </p>
              </div>

              {/* CONQUER */}
              <div
                style={{
                  padding: "25px",
                  borderRadius: "10px",
                  background: "#f8f9fa",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>
                  <i className="fas fa-trophy"></i>
                </div>
                <h3 style={{ fontSize: "24px" }}>CONQUER</h3>
                <p style={{ marginTop: "15px", color: "#555" }}>
                  Master the art of facing the interview board with excellence.
                  Step into the interview room with confidence, composure, and
                  the ability to handle any question with grace.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOUR PILLARS SECTION */}
        <section style={{ padding: "70px 20px", background: "#f5f7fc" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "32px", textAlign: "center" }}>
              Four Pillars of Excellence
            </h2>

            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                color: "#666",
                fontSize: "18px",
              }}
            >
              A comprehensive framework designed to build every aspect of your
              personality for UPSC success
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "30px",
                marginTop: "50px",
              }}
            >
              {/* PILLAR 1 */}
              <div
                style={{
                  padding: "25px",
                  borderRadius: "10px",
                  background: "white",
                  textAlign: "center",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                <div style={{ fontSize: "40px" }}>
                  <i className="fas fa-user-circle"></i>
                </div>
                <h3 style={{ fontSize: "24px", marginTop: "10px" }}>
                  Mirror Within
                </h3>
                <p style={{ marginTop: "10px", color: "#555" }}>
                  Reflect on your identity, understand your core values, and
                  build self-awareness through exercises and assessments.
                </p>
              </div>

              {/* PILLAR 2 */}
              <div
                style={{
                  padding: "25px",
                  borderRadius: "10px",
                  background: "white",
                  textAlign: "center",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                <div style={{ fontSize: "40px" }}>
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3 style={{ fontSize: "24px", marginTop: "10px" }}>
                  Craft Your Opinion
                </h3>
                <p style={{ marginTop: "10px", color: "#555" }}>
                  Engage with current affairs and socio-political discourse.
                  Develop informed, balanced perspectives.
                </p>
              </div>

              {/* PILLAR 3 */}
              <div
                style={{
                  padding: "25px",
                  borderRadius: "10px",
                  background: "white",
                  textAlign: "center",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                <div style={{ fontSize: "40px" }}>
                  <i className="fas fa-comments"></i>
                </div>
                <h3 style={{ fontSize: "24px", marginTop: "10px" }}>
                  Articulate with Diplomacy
                </h3>
                <p style={{ marginTop: "10px", color: "#555" }}>
                  Master communication. Learn to express ideas clearly,
                  logically, and diplomatically.
                </p>
              </div>

              {/* PILLAR 4 */}
              <div
                style={{
                  padding: "25px",
                  borderRadius: "10px",
                  background: "white",
                  textAlign: "center",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                <div style={{ fontSize: "40px" }}>
                  <i className="fas fa-chess-king"></i>
                </div>
                <h3 style={{ fontSize: "24px", marginTop: "10px" }}>
                  Face the Board
                </h3>
                <p style={{ marginTop: "10px", color: "#555" }}>
                  Experience real UPSC interview simulations and receive expert
                  panel feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="program-highlights">
          <div className="container">
            <h2 className="section-title">Program Highlights</h2>
            <p className="section-subtitle">
              Comprehensive features designed to ensure your complete
              personality development
            </p>

            <div className="highlights-grid">
              <div className="highlight-item reveal">
                <div className="highlight-icon">
                  <i className="fas fa-users-cog"></i>
                </div>
                <p className="highlight-text">
                  Real-time UPSC interview environment with authentic board
                  simulation
                </p>
              </div>

              <div className="highlight-item reveal">
                <div className="highlight-icon">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <p className="highlight-text">
                  Expert panels featuring serving IAS, IPS, IFS officers
                </p>
              </div>

              <div className="highlight-item reveal">
                <div className="highlight-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <p className="highlight-text">
                  Personalized feedback and one-on-one mentoring sessions
                </p>
              </div>

              <div className="highlight-item reveal">
                <div className="highlight-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <p className="highlight-text">
                  Expert guidance on diplomatic communication and body language
                </p>
              </div>

              <div className="highlight-item reveal">
                <div className="highlight-icon">
                  <i className="fas fa-newspaper"></i>
                </div>
                <p className="highlight-text">
                  Comprehensive current affairs and opinion-building sessions
                </p>
              </div>

              <div className="highlight-item reveal">
                <div className="highlight-icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <p className="highlight-text">
                  Detailed DAF (Detailed Application Form) analysis and
                  preparation
                </p>
              </div>

              <div className="highlight-item reveal">
                <div className="highlight-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <p className="highlight-text">
                  Confidence-building exercises and stress management techniques
                </p>
              </div>

              <div className="highlight-item reveal">
                <div className="highlight-icon">
                  <i className="fas fa-star"></i>
                </div>
                <p className="highlight-text">
                  Complete personality assessment and holistic development
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2 className="cta-title">Ready to Begin Your Transformation?</h2>
            <p className="cta-subtitle">
              Join JDAX's Interview Transformation Initiative and turn your UPSC
              dreams into reality
            </p>
            <a href="#" className="cta-button" onClick={handleCTA}>
              Start Your Journey <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </section>

        {/* Footer */}
      </div>
    </>
  );
};

export default JdaxExe;
