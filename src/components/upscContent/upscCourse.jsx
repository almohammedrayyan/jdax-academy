import React, { useEffect, useState } from "react";
import "./upscCourse.css";
import Header from "../Header";
import { motion } from "framer-motion";
const UpscCourse = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionToggle = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  // ----------------------------
  // 📌 2. Smooth Scrolling
  // ----------------------------
  useEffect(() => {
    const navBtns = document.querySelectorAll(".nav-btn");

    const handleScroll = (e, btn) => {
      e.preventDefault();
      const targetId = btn.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        const offsetTop = targetEl.offsetTop - 20;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    };

    navBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => handleScroll(e, btn));
    });

    return () => {
      navBtns.forEach((btn) =>
        btn.removeEventListener("click", (e) => handleScroll(e, btn))
      );
    };
  }, []);

  // ----------------------------
  // 📌 3. Scroll-to-top Button
  // ----------------------------
  useEffect(() => {
    const scrollTopBtn = document.getElementById("scrollTop");

    const onScroll = () => {
      if (window.pageYOffset > 300) {
        scrollTopBtn?.classList.add("visible");
      } else {
        scrollTopBtn?.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", onScroll);

    scrollTopBtn?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // ----------------------------
  // 📌 4. Animation on Scroll (Observer)
  // ----------------------------
  useEffect(() => {
    const cards = document.querySelectorAll(".course-card, .comparison-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-white text-gray-800 min-h-screen">
        {/* Hero Banner */}

        {/* TAB CONTENT */}
        <div className="mt-10 px-2 md:px-20" style={{ padding: "0px" }}>
          <div className="hero">
            <div className="hero-content">
              <h1>🎯 Transform Your UPSC Journey</h1>
              <p>
                Comprehensive coaching programs designed to guide you from
                foundation to final selection
              </p>
              <p style={{ fontSize: "1.1em", marginTop: "20px" }}>
                Choose the perfect pathway tailored to your preparation stage
                and aspirations
              </p>
            </div>
          </div>

          <div className="container">
            <div className="quick-nav">
              <div className="nav-buttons">
                <a href="#foundation365" className="nav-btn">
                  📚 Foundation 365
                </a>
                <a href="#mastery365" className="nav-btn">
                  🎓 Mastery 365
                </a>
                <a href="#optional" className="nav-btn">
                  ✨ Optional Excellence
                </a>
                <a href="#interview" className="nav-btn">
                  💼 Interview Guidance
                </a>
                <a href="#early" className="nav-btn">
                  🌱 Early Foundation
                </a>
              </div>
            </div>

            <div className="course-card" id="foundation365">
              <div className="course-header">
                <div className="course-title">
                  <h2>
                    <span className="course-icon">📚</span>
                    FOUNDATION 365
                  </h2>
                  <p className="course-subtitle">
                    1-Year GS + CSAT Intensive Programme + Optional Paper
                  </p>
                </div>
                <div className="course-meta">
                  <span className="meta-badge">⏱️ 11 Months</span>
                  <span className="meta-badge price">💰 ₹99,000/-</span>
                </div>
              </div>

              <div className="course-description">
                <strong>🚀 An accelerated powerhouse</strong> covering General
                Studies (Prelims + Mains), CSAT, and Optional Subject
                (complimentary)—designed for dedicated aspirants targeting their
                upcoming attempt with unwavering focus and complete dedication.
              </div>

              <div className="features-grid">
                <div className="feature-item">
                  <span className="feature-icon">📖</span>
                  <div className="feature-text">
                    <strong>Complete GS Coverage</strong>
                    Comprehensive General Studies for Prelims & Mains
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🎯</span>
                  <div className="feature-text">
                    <strong>CSAT Mastery</strong>
                    Strategic quantitative & logical reasoning training
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✨</span>
                  <div className="feature-text">
                    <strong>Optional Foundation</strong>
                    Complimentary Optional subject coaching
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📝</span>
                  <div className="feature-text">
                    <strong>Study Materials</strong>
                    Comprehensive, meticulously curated resources
                  </div>
                </div>
              </div>

              <div className="accordion">
                <h3 className="accordion-header">
                  🎓 Prelims Mastery Initiatives
                </h3>

                <div className="accordion-item">
                  <button
                    className="accordion-button"
                    onClick={() => handleAccordionToggle("i2i")}
                  >
                    <span>
                      <strong>I2I:</strong> Increments to Invincible - Daily
                      Prelims Testing
                    </span>
                    <span className="accordion-icon">▼</span>
                  </button>

                  <div
                    className={`accordion-content ${
                      openAccordion === "i2i" ? "active" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      <h4>🌟 Embracing KAIZEN—Continuous Improvement</h4>
                      <p>
                        30 meticulously crafted daily questions (10 Easy + 12
                        Medium + 8 Hard) aligned with UPSC patterns, rooted in
                        NCERTs, accompanied by conceptual explanations.
                      </p>
                      <div className="highlight-box">
                        <h4>💡 Key Philosophy</h4>
                        <p>
                          Build invincible mastery through consistent 1% daily
                          improvements compounding into exam-day excellence.
                        </p>
                      </div>
                      <ul>
                        <li>
                          Structured difficulty progression for skill building
                        </li>
                        <li>UPSC-aligned question patterns</li>
                        <li>NCERT-rooted conceptual clarity</li>
                        <li>Daily habit formation for consistency</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <button
                    className="accordion-button"
                    onClick={() => handleAccordionToggle("rise")}
                  >
                    <span>
                      <strong>Rise to Excel:</strong> Ultimate Prelims Test
                      Series
                    </span>
                    <span className="accordion-icon">▼</span>
                  </button>
                  <div
                    className={`accordion-content ${
                      openAccordion === "rise" ? "active" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      <h4>
                        🎯 Master the Syllabus. Build Confidence. Ace the Exam.
                      </h4>
                      <p>
                        <strong>Comprehensive Testing Ecosystem:</strong>
                      </p>
                      <ul>
                        <li>
                          <strong>Strategic Subject Orientation:</strong>{" "}
                          Recorded video lectures providing conceptual clarity
                          and subject interlinkages
                        </li>
                        <li>
                          <strong>Test Orientation Classes:</strong> Pre-test
                          online sessions for topic revision, strategy
                          discussion, and PYQ analysis
                        </li>
                        <li>
                          <strong>Post-Test Discussions:</strong> Comprehensive
                          doubt-clearing, mistake analysis, and strategy
                          refinement
                        </li>
                        <li>
                          <strong>Real Exam Simulation:</strong> Offline
                          full-mock tests (GS Forenoon + CSAT Afternoon)
                          replicating actual exam pressure
                        </li>
                      </ul>
                      <div className="highlight-box">
                        <h4>🌟 Unique Coverage Features</h4>
                        <p>
                          • Subtopic-wise tests with integrated current affairs
                          (not scattered month-wise)
                          <br />
                          • Full subject tests completed one month before
                          Prelims for revision time
                          <br />
                          • Specialized topics: Political Systems, Human
                          Geography, Economic Survey
                          <br />• Balanced CSAT focus: Quantitative aptitude,
                          logical reasoning, comprehension
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="accordion-header">
                  📝 Mains Mastery Initiatives
                </h3>

                <div className="accordion-item">
                  <button
                    className="accordion-button"
                    onClick={() => handleAccordionToggle("mains")}
                  >
                    <span>
                      <strong>Master the Mains:</strong> Answer Writing Workshop
                    </span>
                    <span className="accordion-icon">▼</span>
                  </button>

                  <div
                    className={`accordion-content ${
                      openAccordion === "mains" ? "active" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      <h4>⚡ Crack the 90-Second Examiner Psychology</h4>
                      <p>Intensive skills workshop training aspirants in:</p>
                      <ul>
                        <li>
                          <strong>IMPACT Formula:</strong> Hook examiners with
                          powerful introductions
                        </li>
                        <li>
                          <strong>PEEL Framework:</strong> Structure
                          evidence-based, logical body content
                        </li>
                        <li>
                          <strong>Directive Word Mastery:</strong> Execute
                          Enumerate, Elucidate, Discuss, Evaluate, Critically
                          Analyse with precision
                        </li>
                        <li>
                          <strong>Data Integration:</strong> Transform static
                          knowledge into contemporary, dynamic answers
                        </li>
                        <li>
                          <strong>RISE Conclusion Framework:</strong> End with
                          clarity, conviction, and forward-thinking perspectives
                        </li>
                      </ul>
                      <div className="highlight-box">
                        <h4>🎓 Workshop Elements</h4>
                        <p>
                          Interactive exercises, UPSC PYQs (2017-2024) with
                          before-after transformations, paper-specific
                          strategies (GS1-4, Essays), and real-time answer
                          structuring sessions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ideal-for">
                <h3>👥 Ideal For:</h3>
                <ul>
                  <li>Graduates ready for intensive learning</li>
                  <li>
                    Working professionals transitioning to full-time preparation
                  </li>
                  <li>Serious first-time aspirants with complete dedication</li>
                </ul>
              </div>
            </div>

            <div className="course-card" id="mastery365">
              <div className="course-header">
                <div className="course-title">
                  <h2>
                    <span className="course-icon">🎓</span>
                    MASTERY 365
                  </h2>
                  <p className="course-subtitle">
                    Advanced Mentorship & Mastery Programme
                  </p>
                </div>
                <div className="course-meta">
                  <span className="meta-badge">⏱️ 11 Months</span>
                  <span className="meta-badge price">💰 ₹40,000/-</span>
                </div>
              </div>

              <div className="course-description">
                <strong>🌟 Advanced programme</strong> designed for aspirants
                who have completed foundational preparation and need strategic
                mentorship, advanced Optional coaching, and comprehensive
                interview readiness with balanced pacing that ensures thorough
                revision and exam excellence.
              </div>

              <div className="highlight-box">
                <h4>🎯 Why This Programme?</h4>
                <p>
                  For second-year aspirants who need personal mentorship,
                  advanced initiatives, Optional mastery, and interview
                  preparation to convert their foundation into final selection.
                </p>
              </div>

              <div className="features-grid">
                <div className="feature-item">
                  <span className="feature-icon">🤝</span>
                  <div className="feature-text">
                    <strong>Personal Mentorship</strong>
                    One-on-one guidance from experienced mentors
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📚</span>
                  <div className="feature-text">
                    <strong>Advanced Optional</strong>
                    Complete Optional syllabus with expert coaching
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🎯</span>
                  <div className="feature-text">
                    <strong>Strategic Initiatives</strong>
                    B2B, 3I, Emulate to Assimilate programs
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💼</span>
                  <div className="feature-text">
                    <strong>Interview Ready</strong>
                    Comprehensive personality test preparation
                  </div>
                </div>
              </div>

              <div className="accordion">
                <h3 className="accordion-header">🚀 Advanced Initiatives</h3>

                <div className="accordion-item">
                  <button
                    className="accordion-button"
                    onClick={() => handleAccordionToggle("b2b")}
                  >
                    <span>
                      <strong>B2B:</strong> Basic to Brilliance - NCERT
                      Foundation Test Series
                    </span>
                    <span className="accordion-icon">▼</span>
                  </button>
                  <div
                    className={`accordion-content ${
                      openAccordion === "b2b" ? "active" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      <h4>📖 From Fundamentals to Competitive Edge</h4>
                      <p>
                        Comprehensive test series strategically transforming
                        NCERT knowledge into Prelims-level problem-solving
                        ability through:
                      </p>
                      <ul>
                        <li>Systematic coverage of all NCERT textbooks</li>
                        <li>Conceptual questions testing deep understanding</li>
                        <li>
                          Progressive difficulty levels building confidence
                        </li>
                        <li>
                          Detailed explanations bridging textbook learning with
                          exam application
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <button
                    className="accordion-button"
                    onClick={() => handleAccordionToggle("3i")}
                  >
                    <span>
                      <strong>3I:</strong> Integrate to Impact - 360° Learning
                      Methodology
                    </span>
                    <span className="accordion-icon">▼</span>
                  </button>
                  <div
                    className={`accordion-content ${
                      openAccordion === "3i" ? "active" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      <h4>🔄 One Topic, Multiple Dimensions</h4>
                      <p>
                        Revolutionary approach integrating editorials, English
                        comprehension, Prelims questions, Mains answer
                        frameworks, essay techniques, and ethics case studies
                        into seamless learning.
                      </p>
                      <div className="highlight-box">
                        <h4>✨ Key Benefits</h4>
                        <p>
                          • Time-efficient preparation through integrated
                          learning
                          <br />
                          • Holistic perspective UPSC examiners reward
                          <br />
                          • Enhanced retention through multi-format exposure
                          <br />• Administrative thinking beyond examination
                          skills
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <button
                    className="accordion-button"
                    onClick={() => handleAccordionToggle("emu")}
                  >
                    <span>
                      <strong>Emulate to Assimilate:</strong> Comprehensive
                      Answer Practice System
                    </span>
                    <span className="accordion-icon">▼</span>
                  </button>
                  <div
                    className={`accordion-content ${
                      openAccordion === "emu" ? "active" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      <h4>📝 Three-Phase Transformation Journey</h4>
                      <p>
                        <strong>Phase 1: PYQ Mastery</strong>
                        <br />
                        Daily UPSC previous years' question practice with expert
                        feedback on structure, content depth, presentation
                        quality, and examiner expectations.
                      </p>

                      <p>
                        <strong>Phase 2: Syllabus Expansion</strong>
                        <br />
                        Complete syllabus coverage beyond past papers, linking
                        traditional topics with contemporary issues, developing
                        advanced presentation techniques.
                      </p>

                      <p>
                        <strong>Phase 3: Mock Mains Simulation</strong>
                        <br />
                        Full-length mains test series with actual exam
                        conditions, comprehensive evaluation, detailed
                        performance analytics, and personalized improvement
                        strategies.
                      </p>

                      <div className="highlight-box">
                        <h4>📊 Proven Impact</h4>
                        <p>
                          75-100 marks average improvement—often the difference
                          between selection and disappointment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ideal-for">
                <h3>👥 Ideal For:</h3>
                <ul>
                  <li>
                    Second-year aspirants with basic preparation completed
                  </li>
                  <li>
                    Those needing advanced Optional coaching with mentorship
                  </li>
                  <li>
                    Strategic learners targeting comprehensive Mains and
                    Interview excellence
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="course-card" id="optional">
            <div className="course-header">
              <div className="course-title">
                <h2>
                  <span className="course-icon">✨</span>
                  OPTIONAL EXCELLENCE SERIES
                </h2>
                <p className="course-subtitle">
                  Tamil Literature | Political Science | Sociology | History
                </p>
              </div>
              <div className="course-meta">
                <span className="meta-badge">⏱️ 8 Months (Jul-Feb)</span>
                <span className="meta-badge price">💰 ₹25,000/-</span>
              </div>
            </div>

            <div className="course-description">
              <strong>🎯 Specialized mastery programs</strong> delivering
              comprehensive Optional coverage, consistent answer-writing
              practice, previous years' question analysis, and customized exam
              strategies tailored to your chosen subject.
            </div>

            <div className="highlight-box">
              <h4>🎁 Special Offer</h4>
              <p>
                <strong>Complimentary with Foundation 365:</strong> Optional
                foundation included FREE for all Foundation 365 and Integrated
                Pathfinder students.
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-icon">📚</span>
                <div className="feature-text">
                  <strong>300+ Hours Instruction</strong>
                  Complete Paper 1 + Paper 2 coverage
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📝</span>
                <div className="feature-text">
                  <strong>40+ Evaluated Answers</strong>
                  Structured answer writing practice
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <div className="feature-text">
                  <strong>10-Year PYQ Analysis</strong>
                  Pattern recognition and strategy building
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎯</span>
                <div className="feature-text">
                  <strong>Subject-Specific Tests</strong>
                  Customized test series and evaluation
                </div>
              </div>
            </div>

            <div className="accordion">
              <div className="accordion-item">
                <button
                  className="accordion-button"
                  onClick={() => handleAccordionToggle("what")}
                >
                  <span>📖 What's Included in Each Subject</span>
                  <span className="accordion-icon">▼</span>
                </button>
                <div
                  className={`accordion-content ${
                    openAccordion === "what" ? "active" : ""
                  }`}
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        <strong>300+ hours</strong> of expert instruction
                        covering complete syllabus (Paper 1 + Paper 2)
                      </li>
                      <li>
                        <strong>Detailed concept clarification</strong> with
                        comprehensive notes
                      </li>
                      <li>
                        <strong>PYQ analysis</strong> of last 10 years for
                        pattern understanding
                      </li>
                      <li>
                        <strong>40+ evaluated answers</strong> with personalized
                        feedback
                      </li>
                      <li>
                        <strong>Subject-specific test series</strong> simulating
                        actual exam conditions
                      </li>
                      <li>
                        <strong>Personalized strategy sessions</strong> for
                        optimal scoring
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="highlight-box">
              <h4>💡 Note for Mastery 365 Students</h4>
              <p>
                Optional foundation in Year 1 (complimentary), advanced Optional
                excellence in Year 2 (included in Year 2 fees).
              </p>
            </div>

            <div className="ideal-for">
              <h3>👥 Ideal For:</h3>
              <ul>
                <li>Aspirants who've completed GS foundation</li>
                <li>Those needing focused Optional preparation</li>
                <li>
                  Candidates wanting to strengthen Optional scoring potential
                </li>
              </ul>
            </div>
          </div>

          <div className="course-card" id="interview">
            <div className="course-header">
              <div className="course-title">
                <h2>
                  <span className="course-icon">💼</span>
                  UPSC INTERVIEW GUIDANCE PROGRAMME
                </h2>
                <p className="course-subtitle">
                  JDAX's Reflect. Transform. Conquer.
                </p>
              </div>
              <div className="course-meta">
                <span className="meta-badge">⏱️ Post-Mains Result</span>
                <span
                  className="meta-badge price"
                  style={{
                    background: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
                  }}
                >
                  🎁 FREE
                </span>
              </div>
            </div>

            <div className="course-description">
              <strong>
                🌟 Your Personality Transformation Journey to UPSC Success
              </strong>{" "}
              - Comprehensive Personality Test preparation featuring expert mock
              interview panels, DAF analysis, current affairs discussions,
              confidence-building, body language training, and communication
              refinement.
            </div>

            <div
              className="journey-section"
              style={{
                background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                margin: "30px 0",
              }}
            >
              <h2>Your Transformation Journey</h2>
              <p className="journey-subtitle">
                From Self-Discovery to Interview Excellence
              </p>
              <div className="journey-flow">
                <div className="journey-step">
                  <div className="journey-step-title">REFLECT</div>
                  <div className="journey-step-subtitle">
                    Discover Your Self
                  </div>
                </div>
                <span className="arrow">→</span>
                <div className="journey-step">
                  <div className="journey-step-title">TRANSFORM</div>
                  <div className="journey-step-subtitle">
                    Develop Communication
                  </div>
                </div>
                <span className="arrow">→</span>
                <div className="journey-step">
                  <div className="journey-step-title">CONQUER</div>
                  <div className="journey-step-subtitle">Face the Board</div>
                </div>
              </div>
            </div>

            <h3
              style={{
                textAlign: "center",
                color: "#7C3AED",
                fontSize: "1.8em",
                margin: "30px 0 20px",
              }}
            >
              Four Pillars of Excellence
            </h3>
            <div className="pillars-section">
              <div className="pillar">
                <div className="pillar-number">1️⃣</div>
                <div className="pillar-title">Mirror Within</div>
                <div className="pillar-subtitle">Reflect on your identity</div>
              </div>
              <div className="pillar">
                <div className="pillar-number">2️⃣</div>
                <div className="pillar-title">Craft Your Opinion</div>
                <div className="pillar-subtitle">
                  Current affairs & socio-political discourse
                </div>
              </div>
              <div className="pillar">
                <div className="pillar-number">3️⃣</div>
                <div className="pillar-title">Articulate with Diplomacy</div>
                <div className="pillar-subtitle">
                  Transform your communication
                </div>
              </div>
              <div className="pillar">
                <div className="pillar-number">4️⃣</div>
                <div className="pillar-title">Face the Board</div>
                <div className="pillar-subtitle">Conquer with excellence</div>
              </div>
            </div>

            <div className="features-grid" style={{ marginTop: "30px" }}>
              <div className="feature-item">
                <span className="feature-icon">👨‍💼</span>
                <div className="feature-text">
                  <strong>Expert Mock Panels</strong>
                  Serving IAS, IPS, IFS officers conduct interviews
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📋</span>
                <div className="feature-text">
                  <strong>DAF Analysis</strong>
                  Detailed Application Form strategy and preparation
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💬</span>
                <div className="feature-text">
                  <strong>Communication Refinement</strong>
                  Diplomatic articulation and body language training
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎯</span>
                <div className="feature-text">
                  <strong>Real-Time Environment</strong>
                  Actual UPSC interview simulation
                </div>
              </div>
            </div>

            <div className="highlight-box">
              <h4>🌟 Program Highlights</h4>
              <p>
                • Real-time UPSC interview environment
                <br />
                • Personalized feedback and mentoring
                <br />
                • Expert guidance on diplomatic communication
                <br />
                • Comprehensive current affairs and opinion-building sessions
                <br />• Complete personality assessment and development
              </p>
            </div>

            <div className="ideal-for">
              <h3>👥 Ideal For:</h3>
              <ul>
                <li>Mains-qualified candidates preparing for final frontier</li>
                <li>Aspirants targeting holistic personality development</li>
                <li>Those needing expert guidance on interview skills</li>
              </ul>
            </div>
          </div>
          <div className="course-card" id="early">
            <div className="course-header">
              <div className="course-title">
                <h2>
                  <span className="course-icon">🌱</span>
                  EARLY FOUNDATION PATH
                </h2>
                <p className="course-subtitle">For School & College Students</p>
              </div>
              <div className="course-meta">
                <span className="meta-badge">⏱️ 1-4 Year Tracks</span>
                <span className="meta-badge price">💰 ₹5,000-8,000/year</span>
              </div>
            </div>

            <div className="course-description">
              <strong>🎯 Progressive UPSC readiness programs</strong> designed
              exclusively for school (Classes 11-12) and college students,
              systematically covering GS subjects, building NCERT foundations,
              developing analytical abilities, and nurturing administrative
              temperament—all while complementing regular academic studies.
            </div>

            <div
              className="highlight-box"
              style={{
                background: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",
                borderLeftColor: "#10b981",
              }}
            >
              <h4 style={{ color: "#065f46" }}>🎁 Risk-Free Investment</h4>
              <p style={{ color: "#064e3b" }}>
                <strong>Complete fee redeemable</strong> when you join our
                full-time Foundation 365 or MASTERY 365 programmes!
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-icon">📚</span>
                <div className="feature-text">
                  <strong>150 Hours Instruction</strong>
                  Expert-led comprehensive teaching annually
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✍️</span>
                <div className="feature-text">
                  <strong>50 Hours Testing</strong>
                  Rigorous evaluation and practice
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💡</span>
                <div className="feature-text">
                  <strong>Live Doubt Clearing</strong>
                  Weekly interactive sessions
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎓</span>
                <div className="feature-text">
                  <strong>Systematic Coverage</strong>
                  All GS subjects with current affairs integration
                </div>
              </div>
            </div>

            <div className="accordion">
              <div className="accordion-item">
                <button
                  className="accordion-button"
                  onClick={() => handleAccordionToggle("sub")}
                >
                  <span>📖 Subjects Covered Annually</span>
                  <span className="accordion-icon">▼</span>
                </button>
                <div
                  className={`accordion-content ${
                    openAccordion === "sub" ? "active" : ""
                  }`}
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        <strong>History:</strong> Ancient, Medieval, Modern
                        India
                      </li>
                      <li>
                        <strong>Geography:</strong> Physical, Human, Indian
                        Geography
                      </li>
                      <li>
                        <strong>Polity:</strong> Constitution, Governance,
                        Social Justice
                      </li>
                      <li>
                        <strong>Economy:</strong> Basic concepts, Economic
                        Development
                      </li>
                      <li>
                        <strong>Environment:</strong> Ecology, Climate Change,
                        Conservation
                      </li>
                      <li>
                        <strong>International Relations:</strong> Global affairs
                        and diplomacy
                      </li>
                      <li>
                        <strong>Science & Technology:</strong> Modern
                        developments and applications
                      </li>
                      <li>
                        <strong>Ethics:</strong> Integrity, aptitude, and values
                      </li>
                    </ul>
                    <p style={{ marginTop: "15px" }}>
                      <strong>Final Year Bonus:</strong> Answer writing and
                      current affairs integration workshops
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button
                  className="accordion-button"
                  onClick={() => handleAccordionToggle("ac")}
                >
                  <span>🏛️ Active Campus Partnerships</span>
                  <span className="accordion-icon">▼</span>
                </button>
                <div
                  className={`accordion-content ${
                    openAccordion === "ac" ? "active" : ""
                  }`}
                >
                  <div className="accordion-body">
                    <ul>
                      <li>Stella Maris College Chennai</li>
                      <li>Sathyabama University</li>
                      <li>Jeppiar Institute of Technology</li>
                      <li>Holy Cross College Trichy</li>
                      <li>St. Anne's College Madhavaram</li>
                      <li>Premier institutions across Tamil Nadu</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="ideal-for">
              <h3>👥 Ideal For:</h3>
              <ul>
                <li>Visionary students planning early for UPSC</li>
                <li>Engineering students (4-year track)</li>
                <li>Arts & Science undergraduates (3-year track)</li>
                <li>Classes 11-12 students exploring civil services</li>
              </ul>
            </div>
          </div>

          <div className="comparison-section">
            <h2>🎯 Choose Your Perfect Pathway</h2>
            <div className="comparison-grid">
              <div className="comparison-card">
                <div className="icon">🚀</div>
                <h3>First-Time Aspirants</h3>
                <p>
                  Start with <strong>Foundation 365</strong> for complete
                  coverage of GS, CSAT, and Optional with intensive preparation
                </p>
              </div>
              <div className="comparison-card">
                <div className="icon">📈</div>
                <h3>Second-Year Aspirants</h3>
                <p>
                  Choose <strong>Mastery 365</strong> for advanced mentorship,
                  Optional excellence, and interview preparation
                </p>
              </div>
              <div className="comparison-card">
                <div className="icon">✨</div>
                <h3>Optional Focus</h3>
                <p>
                  Enroll in <strong>Optional Excellence Series</strong> for
                  specialized subject mastery with expert guidance
                </p>
              </div>
              <div className="comparison-card">
                <div className="icon">🌱</div>
                <h3>Early Starters</h3>
                <p>
                  Begin with <strong>Early Foundation Path</strong> to build
                  strong fundamentals while continuing studies
                </p>
              </div>
              <div className="comparison-card">
                <div className="icon">💼</div>
                <h3>Mains-Qualified</h3>
                <p>
                  Join <strong>Interview Guidance</strong> program (FREE) for
                  comprehensive personality transformation
                </p>
              </div>
            </div>
          </div>

          <div className="footer">
            <div className="footer-content">
              <h3>🎯 Your Journey to UPSC Success Starts Here</h3>
              <p>
                Choose the programme that aligns with your preparation stage and
                aspirations. Each pathway is meticulously designed to guide you
                from where you are to where you want to be.
              </p>
              <p
                style={{
                  marginTop: "20px",
                  fontSize: "1.2em",
                  fontWeight: 600,
                }}
              >
                Transform Your Dreams into Reality
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpscCourse;
