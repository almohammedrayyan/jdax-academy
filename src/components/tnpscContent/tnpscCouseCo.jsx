import React from "react";
import "./tnpscCourseCon.css";
const TnpscCourseCo = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Master Your TNPSC Journey</h1>
          <p className="hero-subtitle" style={{ textAlign: "center" }}>
            Transform Your Dreams into Reality with Expert-Led Courses
          </p>
          <div className="hero-badge">
            <i className="fas fa-graduation-cap"></i> Premium Courses Available
          </div>
        </div>
      </div>

      {/* Courses */}
      <div className="container">
        <div className="courses-grid">
          {/* ---------------- COURSE 1 ---------------- */}
          <div className="course-cards">
            <div className="course-header">
              <span className="course-badge">Comprehensive Program</span>
              <h2 className="course-title">
                TNPSC GROUP 1/2/2A/4 INTEGRATED BATCH
              </h2>

              <div className="course-meta">
                <div className="meta-item">
                  <div className="meta-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="meta-label">Duration</div>
                  <div className="meta-value">11 Months</div>
                </div>

                <div className="meta-item">
                  <div className="meta-icon">
                    <i className="fas fa-rupee-sign"></i>
                  </div>
                  <div className="meta-label">Investment</div>
                  <div className="meta-value">49,000/-</div>
                </div>
              </div>
            </div>

            <div className="course-body">
              <p className="course-about">
                A high-impact course crafted for aspirants determined to succeed
                in TNPSC Group 1, Group 2/2A, and Group 4 examinations. This
                program ensures complete preparation through structured
                learning, consistent practice, and expert guidance.
              </p>

              <div className="section-title">
                <i className="fas fa-star"></i>
                <span>Program Features</span>
              </div>

              <ul className="features-list">
                <li>
                  <strong>Comprehensive GS Coverage:</strong> Detailed classes
                  for General Studies (Prelims & Mains) based on the updated
                  TNPSC syllabus.
                </li>
                <li>
                  <strong>Aptitude and Mental Ability Training:</strong>{" "}
                  Concept-based learning and regular problem-solving sessions to
                  strengthen analytical skills.
                </li>
                <li>
                  <strong>Prelims Focus:</strong> Rise to Excel Test Series to
                  improve accuracy and speed.
                </li>
                <li>
                  <strong>Mains Preparation:</strong> Step-by-step answer
                  writing training to enhance presentation and content quality.
                </li>
                <li>
                  <strong>Study Resources:</strong> Well-curated materials
                  covering static and current affairs portions comprehensively.
                </li>
                <li>
                  <strong>Mock Tests:</strong> 20+ full-length tests simulating
                  the real TNPSC exam pattern for thorough practice and
                  performance evaluation.
                </li>
              </ul>

              <div className="ideal-for">
                <div className="section-title">
                  <i className="fas fa-users"></i>
                  <span>Ideal For</span>
                </div>
                <ul>
                  <li>
                    Graduates seeking a structured and intensive TNPSC
                    preparation journey.
                  </li>
                  <li>
                    Working professionals planning to shift towards full-time
                    preparation.
                  </li>
                  <li>
                    Dedicated first-time aspirants aiming to build a strong
                    foundation for Group 1, 2/2A, and 4 exams.
                  </li>
                </ul>
              </div>

              <div class="center-container">
                <button class="cta-button">Enroll Now</button>
              </div>
            </div>
          </div>

          {/* ---------------- COURSE 2 ---------------- */}
          <div className="course-cards">
            <div className="course-header">
              <span className="course-badge">Mains Exclusive</span>
              <h2 className="course-title">
                TNPSC GROUP 2/2A EXCLUSIVE MAINS PROGRAMME
              </h2>

              <div className="course-meta">
                <div className="meta-item">
                  <div className="meta-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="meta-label">Duration</div>
                  <div className="meta-value">6 Months</div>
                </div>

                <div className="meta-item">
                  <div className="meta-icon">
                    <i className="fas fa-rupee-sign"></i>
                  </div>
                  <div className="meta-label">Investment</div>
                  <div className="meta-value">25,000/-</div>
                </div>
              </div>
            </div>

            <div className="course-body">
              <p className="course-about">
                A tailor-made course crafted for aspirants determined to succeed
                in TNPSC Group 2 and Group 2A MAINS examinations by ensuring
                complete preparation through structured learning, consistent
                practice, and expert guidance.
              </p>

              <div className="section-title">
                <i className="fas fa-star"></i>
                <span>Program Features</span>
              </div>

              <ul className="features-list">
                <li>
                  <strong>Concept-Based Learning:</strong> Topic-wise clarity in
                  Polity, History, Economy, Geography, Science, Current Affairs,
                  and Reasoning.
                </li>
                <li>
                  <strong>Full Syllabus Coverage:</strong> Complete preparation
                  for both Group 2 and Group 2A Mains based on the latest TNPSC
                  syllabus.
                </li>
                <li>
                  <strong>Regular Tests & Assessments:</strong> Unit tests, mock
                  tests, and full-length exams simulating real TNPSC patterns.
                </li>
                <li>
                  <strong>Mains Answer Writing Practice:</strong> Continuous
                  evaluation with feedback to improve structure, presentation,
                  and content.
                </li>
                <li>
                  <strong>Performance Analytics:</strong> Personalized reports
                  to track progress and identify improvement areas.
                </li>
                <li>
                  <strong>Mentorship & Motivation:</strong> One-on-one guidance
                  and strategy sessions by experienced faculty.
                </li>
              </ul>

              <div className="tests-section">
                <div className="section-title">
                  <i className="fas fa-clipboard-check"></i>
                  <span>Tests Conducted</span>
                </div>

                <div className="test-type">
                  <strong>Objective Type Tests:</strong> Covers General Studies,
                  Aptitude & Mental Ability.
                </div>

                <div className="test-type">
                  <strong>Descriptive Type Tests:</strong> Focused training in
                  essay writing, comprehension, and precise answers based on
                  TNPSC's evolving question patterns.
                </div>
              </div>

              <div className="ideal-for">
                <div className="section-title">
                  <i className="fas fa-users"></i>
                  <span>Ideal For</span>
                </div>
                <ul>
                  <li>
                    Graduates aiming for Group 2/2A officer-level posts in Tamil
                    Nadu Government.
                  </li>
                  <li>
                    Working professionals managing part-time or flexible
                    preparation.
                  </li>
                  <li>
                    Serious first-time aspirants looking for structured,
                    disciplined guidance.
                  </li>
                </ul>
              </div>

              <div class="center-container">
                <button class="cta-button">Enroll Now</button>
              </div>
            </div>
          </div>

          {/* ---------------- COURSE 3 ---------------- */}
          <div className="course-cards">
            <div className="course-header">
              <span className="course-badge">Beginner Friendly</span>
              <h2 className="course-title">
                TNPSC GROUP 4 EXCLUSIVE CLASSROOM PROGRAM
              </h2>

              <div className="course-meta">
                <div className="meta-item">
                  <div className="meta-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="meta-label">Duration</div>
                  <div className="meta-value">4 Months</div>
                </div>

                <div className="meta-item">
                  <div className="meta-icon">
                    <i className="fas fa-rupee-sign"></i>
                  </div>
                  <div className="meta-label">Investment</div>
                  <div className="meta-value">6,999/-</div>
                </div>
              </div>
            </div>

            <div className="course-body">
              <p className="course-about">
                Our Group 4 course builds a rock-solid foundation in all core
                subjects, helping beginners approach TNPSC exams with confidence
                and clarity.
              </p>

              <div className="section-title">
                <i className="fas fa-star"></i>
                <span>Programme Benefits</span>
              </div>

              <ul className="features-list">
                <li>
                  <strong>Concept-Focused Classes:</strong> Designed around
                  Samacheer content and state priorities to build strong
                  fundamentals.
                </li>
                <li>
                  <strong>Continuous Prelims Practice Tests:</strong> Regular
                  tests to improve accuracy and retention for exam success.
                </li>
                <li>
                  <strong>Individual Mentoring:</strong> Personalized guidance
                  to build strong study habits and ensure steady progress.
                </li>
                <li>
                  <strong>Motivational Sessions:</strong> Regular motivation and
                  exam strategy orientation to keep students focused and
                  confident.
                </li>
              </ul>

              <div className="ideal-for">
                <div className="section-title">
                  <i className="fas fa-users"></i>
                  <span>Ideal For</span>
                </div>
                <ul>
                  <li>
                    School & college students starting their TNPSC preparation
                    journey.
                  </li>
                  <li>
                    Early-stage aspirants looking to build a strong foundation.
                  </li>
                  <li>
                    First-time candidates who need structured guidance and
                    mentorship.
                  </li>
                </ul>
              </div>

              <div class="center-container">
                <button class="cta-button">Enroll Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    </>
  );
};

export default TnpscCourseCo;
