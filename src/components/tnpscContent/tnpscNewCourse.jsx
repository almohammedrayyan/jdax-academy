import React, { useState, useEffect } from "react";

const styles = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.7;
    color: #2c3e50;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 80px 20px;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: moveBackground 20s linear infinite;
}

@keyframes moveBackground {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
}

.hero-content {
    position: relative;
    z-index: 1;
    max-width: 1000px;
    margin: 0 auto;
}

.hero h1 {
    font-size: 3.2em;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    font-weight: 700;
}

.hero .tagline {
    font-size: 1.3em;
    opacity: 0.95;
    font-weight: 300;
    letter-spacing: 1px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 20px;
}

.back-btn {
    display: inline-block;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 12px 25px;
    border-radius: 25px;
    font-weight: 600;
    margin-bottom: 30px;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    font-size: 1em;
}

.back-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

.intro-section {
    background: white;
    border-radius: 15px;
    padding: 40px;
    margin-bottom: 50px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.1);
    border-left: 8px solid #667eea;
}

.intro-section h2 {
    color: #667eea;
    font-size: 2em;
    margin-bottom: 20px;
}

.intro-section p {
    font-size: 1.1em;
    line-height: 1.8;
    color: #555;
}

/* COURSE TILES */
.courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 35px;
    margin: 40px 0;
}

.course-tile {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    padding: 40px;
    color: white;
    position: relative;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
    transition: all 0.3s ease;
    cursor: pointer;
}

.course-tile::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 30px 30px;
    animation: movePattern 15s linear infinite;
}

@keyframes movePattern {
    0% { transform: translate(0, 0) rotate(0deg); }
    100% { transform: translate(30px, 30px) rotate(360deg); }
}

.course-tile:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);
}

.course-badge {
    display: inline-block;
    background: rgba(255,255,255,0.25);
    padding: 8px 20px;
    border-radius: 20px;
    font-size: 0.85em;
    font-weight: 700;
    margin-bottom: 20px;
    backdrop-filter: blur(10px);
    position: relative;
    z-index: 1;
}

.course-icon {
    font-size: 3.5em;
    margin-bottom: 20px;
    display: block;
    position: relative;
    z-index: 1;
}

.course-title {
    font-size: 1.8em;
    margin-bottom: 15px;
    font-weight: 700;
    position: relative;
    z-index: 1;
}

.course-subtitle {
    font-size: 1.1em;
    margin-bottom: 20px;
    opacity: 0.95;
    font-style: italic;
    position: relative;
    z-index: 1;
}

.course-meta {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    padding: 20px;
    background: rgba(255,255,255,0.15);
    border-radius: 12px;
    backdrop-filter: blur(10px);
    position: relative;
    z-index: 1;
}

.meta-item h4 {
    font-size: 0.9em;
    opacity: 0.9;
    margin-bottom: 5px;
}

.meta-item p {
    font-size: 1.3em;
    font-weight: 700;
    margin: 0;
}

.course-highlights {
    background: rgba(255,255,255,0.15);
    border-radius: 12px;
    padding: 20px;
    margin: 20px 0;
    backdrop-filter: blur(10px);
    position: relative;
    z-index: 1;
}

.course-highlights h4 {
    margin-bottom: 12px;
    font-size: 1.1em;
}

.course-highlights ul {
    list-style: none;
    padding: 0;
}

.course-highlights li {
    padding: 6px 0;
    padding-left: 22px;
    position: relative;
    font-size: 0.95em;
}

.course-highlights li:before {
    content: '✓';
    position: absolute;
    left: 0;
    font-weight: bold;
}

.explore-course-btn {
    display: inline-block;
    background: white;
    color: #667eea;
    padding: 12px 30px;
    border-radius: 25px;
    font-weight: 700;
    margin-top: 10px;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    font-size: 1em;
    position: relative;
    z-index: 1;
}

.explore-course-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(255,255,255,0.3);
}

/* DETAIL PAGE STYLES */
.detail-content {
    background: white;
    border-radius: 15px;
    padding: 40px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.1);
    margin-bottom: 40px;
}

.detail-content h2 {
    font-size: 2.2em;
    color: #2c3e50;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 3px solid #667eea;
}

.detail-content h3 {
    font-size: 1.6em;
    color: #34495e;
    margin: 35px 0 20px 0;
    font-weight: 600;
}

.detail-content h4 {
    font-size: 1.3em;
    color: #667eea;
    margin: 25px 0 15px 0;
    font-weight: 600;
}

.detail-content p {
    line-height: 1.8;
    margin-bottom: 20px;
    color: #555;
}

.detail-content ul {
    margin: 15px 0 15px 25px;
    line-height: 1.8;
}

.detail-content li {
    margin: 10px 0;
    color: #555;
}

.info-box {
    background: linear-gradient(135deg, #e3f2fd 0%, #90caf9 100%);
    border-left: 5px solid #2196f3;
    padding: 25px;
    border-radius: 10px;
    margin: 25px 0;
}

.info-box h4 {
    color: #0d47a1;
    margin-bottom: 15px;
    font-size: 1.3em;
}

.success-box {
    background: linear-gradient(135deg, #e8f5e9 0%, #a5d6a7 100%);
    border-left: 5px solid #4caf50;
    padding: 25px;
    border-radius: 10px;
    margin: 25px 0;
}

.success-box h4 {
    color: #1b5e20;
    margin-bottom: 15px;
    font-size: 1.3em;
}

.highlight-box {
    background: linear-gradient(135deg, #fff8e1 0%, #ffe082 100%);
    border-left: 5px solid #ffa726;
    padding: 25px;
    border-radius: 10px;
    margin: 25px 0;
}

.highlight-box h4 {
    color: #e65100;
    margin-bottom: 15px;
    font-size: 1.3em;
}

.warning-box {
    background: linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%);
    border-left: 5px solid #e91e63;
    padding: 25px;
    border-radius: 10px;
    margin: 25px 0;
}

.warning-box h4 {
    color: #880e4f;
    margin-bottom: 15px;
    font-size: 1.3em;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin: 30px 0;
}

.feature-card {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 12px;
    border-left: 4px solid #667eea;
    transition: all 0.3s ease;
}

.feature-card:hover {
    transform: translateX(5px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.15);
}

.feature-card h4 {
    color: #667eea;
    margin-bottom: 12px;
    font-size: 1.2em;
}

.feature-card p {
    color: #666;
    font-size: 0.95em;
    margin: 0;
}

.price-box {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    margin: 30px 0;
}

.price-box h3 {
    color: white;
    margin-bottom: 15px;
}

.price-amount {
    font-size: 3em;
    font-weight: 700;
    margin: 20px 0;
}

.price-duration {
    font-size: 1.2em;
    opacity: 0.9;
}

.footer {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 50px 20px;
    text-align: center;
    margin-top: 60px;
}

.footer-content {
    max-width: 800px;
    margin: 0 auto;
}

.footer h3 {
    font-size: 2em;
    margin-bottom: 15px;
}

.cta-button {
    display: inline-block;
    background: white;
    color: #667eea;
    padding: 15px 40px;
    border-radius: 30px;
    font-weight: 700;
    font-size: 1.1em;
    margin-top: 20px;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
}

.cta-button:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(255,255,255,0.3);
}

.scroll-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    font-size: 1.5em;
    box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
    z-index: 1000;
    border: none;
}

.scroll-top.visible {
    opacity: 1;
    visibility: visible;
}

.scroll-top:hover {
    transform: translateY(-3px);
}

@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.2em;
    }
    
    .courses-grid {
        grid-template-columns: 1fr;
    }
    
    .features-grid {
        grid-template-columns: 1fr;
    }
    
    .course-meta {
        flex-direction: column;
        gap: 15px;
    }
}
`;

// Hub Component
const Hub = ({ onNavigate }) => {
  const courses = [
    {
      id: "integrated",
      badge: "COMPREHENSIVE",
      icon: "🎯",
      title: "GROUP 1/2/2A/4 INTEGRATED BATCH",
      subtitle: "Complete Preparation for All TNPSC Groups",
      duration: "11 Months",
      investment: "₹49,000",
      highlights: [
        "Comprehensive GS Coverage (Prelims & Mains)",
        "Aptitude & Mental Ability Training",
        "Rise to Excel Test Series",
        "20+ Full-length Mock Tests",
        "Complete Study Resources",
      ],
    },
    {
      id: "mains",
      badge: "SPECIALIZED",
      icon: "✍️",
      title: "GROUP 2/2A EXCLUSIVE MAINS PROGRAMME",
      subtitle: "Focused Mains Preparation for Success",
      duration: "6 Months",
      investment: "₹25,000",
      highlights: [
        "Concept-Based Learning",
        "Full Syllabus Coverage",
        "Regular Tests & Assessments",
        "Mains Answer Writing Practice",
        "Performance Analytics",
      ],
    },
    {
      id: "group4",
      badge: "FOUNDATION",
      icon: "📚",
      title: "GROUP 4 EXCLUSIVE CLASSROOM PROGRAM",
      subtitle: "Solid Foundation for Group 4 Success",
      duration: "4 Months",
      investment: "₹6,999",
      highlights: [
        "Samacheer Content Focus",
        "Continuous Prelims Practice Tests",
        "Individual Mentoring",
        "Motivational Sessions",
        "Exam Strategy Orientation",
      ],
    },
  ];

  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>JDAX TNPSC Courses</h1>
          <p className="tagline">
            Structured Programs for Tamil Nadu Civil Services Excellence
          </p>
        </div>
      </div>

      <div className="container">
        <div className="intro-section">
          <h2>Choose Your Path to TNPSC Success</h2>
          <p>
            JDAX Academy offers specialized TNPSC courses designed to meet the
            unique requirements of different aspirant groups. Whether you're
            aiming for higher administrative roles through Group 1, executive
            positions via Group 2/2A, or clerical positions through Group 4, we
            have the perfect program for you.
          </p>
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <div
              key={course.id}
              className="course-tile"
              onClick={() => onNavigate(course.id)}
            >
              <span className="course-badge">{course.badge}</span>
              <span className="course-icon">{course.icon}</span>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-subtitle">{course.subtitle}</p>

              <div className="course-meta">
                <div className="meta-item">
                  <h4>Duration</h4>
                  <p>{course.duration}</p>
                </div>
                <div className="meta-item">
                  <h4>Investment</h4>
                  <p>{course.investment}</p>
                </div>
              </div>

              <div className="course-highlights">
                <h4>Key Features:</h4>
                <ul>
                  {course.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <button className="explore-course-btn">
                Explore Course Details →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="footer">
        <div className="footer-content">
          <h3>Ready to Begin Your TNPSC Journey?</h3>
          <p>
            Choose the course that aligns with your goals and start your
            preparation with expert guidance.
          </p>
          <button className="cta-button">Contact JDAX Academy</button>
        </div>
      </div> */}
    </>
  );
};

// Integrated Batch Component
const IntegratedBatch = ({ onNavigate }) => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>🎯 GROUP 1/2/2A/4 INTEGRATED BATCH</h1>
          <p className="tagline">Your Complete TNPSC Preparation Solution</p>
        </div>
      </div>

      <div className="container">
        <button className="back-btn" onClick={() => onNavigate("hub")}>
          ← Back to Courses
        </button>

        <div className="detail-content">
          <h2>Why Integrated TNPSC Batch is Required?</h2>

          <div className="warning-box">
            <h4>The Challenge Aspirants Face</h4>
            <p>
              Most TNPSC aspirants struggle with{" "}
              <strong>fragmented preparation</strong> - preparing for different
              groups separately, leading to confusion, wasted effort, and
              suboptimal results. The syllabus overlap between Group 1, 2/2A,
              and 4 is significant (70-80%), yet traditional coaching treats
              them as completely separate examinations.
            </p>
          </div>

          <div className="success-box">
            <h4>The JDAX Solution: Integrated Approach</h4>
            <p>
              Our Integrated Batch recognizes that{" "}
              <strong>
                preparing for multiple TNPSC groups simultaneously is not just
                possible - it's strategically superior
              </strong>
              . By mastering the common foundation once and adding
              group-specific elements, you multiply your success chances while
              optimizing your time and effort.
            </p>
          </div>

          <h3>Why This Integration Makes Perfect Sense</h3>

          <div className="features-grid">
            <div className="feature-card">
              <h4>📊 70-80% Syllabus Overlap</h4>
              <p>
                General Studies, Aptitude, Current Affairs, Tamil - all common
                across groups. Learn once, apply everywhere.
              </p>
            </div>

            <div className="feature-card">
              <h4>⏰ Time Optimization</h4>
              <p>
                Instead of preparing 3-4 separate times, build one strong
                foundation and add specific requirements for each group.
              </p>
            </div>

            <div className="feature-card">
              <h4>🎯 Multiple Success Opportunities</h4>
              <p>
                Appear for Group 1, 2/2A, and 4 in the same year - maximize your
                chances of selection.
              </p>
            </div>

            <div className="feature-card">
              <h4>💡 Strategic Flexibility</h4>
              <p>
                Start with strong fundamentals, then choose which groups to
                focus on based on your progress and interests.
              </p>
            </div>

            <div className="feature-card">
              <h4>📈 Progressive Difficulty</h4>
              <p>
                Group 4 → Group 2/2A → Group 1 difficulty progression helps
                build confidence systematically.
              </p>
            </div>

            <div className="feature-card">
              <h4>💰 Cost-Effective</h4>
              <p>
                One comprehensive program instead of 3-4 separate courses -
                better value for complete preparation.
              </p>
            </div>
          </div>

          <h3>About the Course</h3>

          <div className="price-box">
            <h3>Course Investment</h3>
            <div className="price-amount">₹49,000</div>
            <div className="price-duration">
              11 Months Comprehensive Program
            </div>
          </div>

          <div className="info-box">
            <h4>A High-Impact Course for Determined Aspirants</h4>
            <p>
              Crafted for aspirants determined to succeed in TNPSC Group 1,
              Group 2/2A, and Group 4 examinations. This program ensures
              complete preparation through structured learning, consistent
              practice, and expert guidance.
            </p>
          </div>

          <h3>Comprehensive Program Features</h3>

          <div className="features-grid">
            <div className="feature-card">
              <h4>📚 Comprehensive GS Coverage</h4>
              <p>
                Detailed classes for General Studies (Prelims & Mains) based on
                the updated TNPSC syllabus covering all groups comprehensively.
              </p>
            </div>

            <div className="feature-card">
              <h4>🧠 Aptitude & Mental Ability Training</h4>
              <p>
                Concept-based learning and regular problem-solving sessions to
                strengthen analytical skills crucial for all TNPSC exams.
              </p>
            </div>

            <div className="feature-card">
              <h4>🎯 Prelims Focus - Rise to Excel Test Series</h4>
              <p>
                Specialized test series to improve accuracy and speed, essential
                for clearing the preliminary screening across all groups.
              </p>
            </div>

            <div className="feature-card">
              <h4>✍️ Mains Preparation</h4>
              <p>
                Step-by-step answer writing training to enhance presentation and
                content quality for Group 1 and Group 2 Mains examinations.
              </p>
            </div>

            <div className="feature-card">
              <h4>📖 Study Resources</h4>
              <p>
                Well-curated materials covering static and current affairs
                portions comprehensively, eliminating need for multiple sources.
              </p>
            </div>

            <div className="feature-card">
              <h4>📝 20+ Full-Length Mock Tests</h4>
              <p>
                Simulating the real TNPSC exam pattern for thorough practice and
                performance evaluation across all group formats.
              </p>
            </div>
          </div>

          <h3>What You'll Master</h3>

          <div className="success-box">
            <h4>Complete Syllabus Mastery</h4>
            <ul>
              <li>
                <strong>General Studies:</strong> History, Geography, Polity,
                Economy with Tamil Nadu focus
              </li>
              <li>
                <strong>Tamil Language:</strong> Grammar, literature,
                comprehension at all required levels
              </li>
              <li>
                <strong>Science & Technology:</strong> Concepts and current
                developments
              </li>
              <li>
                <strong>Current Affairs:</strong> National and Tamil Nadu
                specific updates
              </li>
              <li>
                <strong>Aptitude & Reasoning:</strong> Quantitative aptitude and
                logical reasoning
              </li>
              <li>
                <strong>Answer Writing:</strong> Structured responses for Mains
                examinations
              </li>
            </ul>
          </div>

          <h3>Learning Progression: 11-Month Journey</h3>

          <div className="highlight-box">
            <h4>Month 1-3: Foundation Building</h4>
            <p>
              Comprehensive coverage of fundamental concepts across all
              subjects. Focus on NCERT and Samacheer syllabus. Basic to
              intermediate level questions practice.
            </p>
          </div>

          <div className="highlight-box">
            <h4>Month 4-6: Advanced Concepts & Application</h4>
            <p>
              Deep dive into advanced topics. Current affairs integration.
              Answer writing practice begins. Regular weekly tests for all
              groups.
            </p>
          </div>

          <div className="highlight-box">
            <h4>Month 7-9: Intensive Practice & Refinement</h4>
            <p>
              Full-length mock tests. Group-specific preparation intensifies.
              Performance analytics and personalized feedback. Weak area
              identification and improvement.
            </p>
          </div>

          <div className="highlight-box">
            <h4>Month 10-11: Final Preparation & Exam Readiness</h4>
            <p>
              Multiple full-length tests simulating exact exam conditions.
              Revision of entire syllabus. Last-minute current affairs. Exam
              strategy and time management perfection.
            </p>
          </div>

          <h3>Ideal For</h3>

          <div className="features-grid">
            <div className="feature-card">
              <h4>🎓 Fresh Graduates</h4>
              <p>
                Seeking a structured and intensive TNPSC preparation journey
                with expert guidance from the beginning.
              </p>
            </div>

            <div className="feature-card">
              <h4>💼 Working Professionals</h4>
              <p>
                Planning to shift towards full-time preparation and need
                comprehensive coverage to compensate for limited study time.
              </p>
            </div>

            <div className="feature-card">
              <h4>🌟 First-Time Aspirants</h4>
              <p>
                Dedicated candidates aiming to build a strong foundation for
                Group 1, 2/2A, and 4 exams simultaneously.
              </p>
            </div>

            <div className="feature-card">
              <h4>🔄 Repeat Aspirants</h4>
              <p>
                Those who want to strengthen their fundamentals and adopt a more
                integrated, efficient preparation strategy.
              </p>
            </div>
          </div>

          <h3>Success Pathway</h3>

          <div className="success-box">
            <h4>How This Course Multiplies Your Success Chances</h4>
            <p>
              <strong>Scenario 1 - Traditional Approach:</strong> Prepare for
              Group 1 only → One shot per year → If unsuccessful, restart
              preparation
            </p>
            <p>
              <strong>Scenario 2 - JDAX Integrated Approach:</strong> Prepare
              comprehensively → Appear for Group 1, 2/2A, and 4 → Multiple
              selection opportunities in same year → Higher probability of
              success
            </p>

            <p style={{ marginTop: "20px" }}>
              <strong>Additional Advantage:</strong> Even if you aim for Group 1
              but get selected in Group 2/2A or 4, you enter government service
              and can prepare for promotions or future Group 1 exams from a
              position of stability.
            </p>
          </div>

          <h3>Why JDAX Integrated Batch Stands Out</h3>

          <div className="info-box">
            <h4>Unique Value Propositions</h4>
            <ul>
              <li>
                <strong>Proven Methodology:</strong> Systematic integration of
                common topics with group-specific requirements
              </li>
              <li>
                <strong>Expert Faculty:</strong> Trainers who understand the
                nuances of all TNPSC groups
              </li>
              <li>
                <strong>Continuous Assessment:</strong> Regular tests across all
                group patterns to track multi-dimensional progress
              </li>
              <li>
                <strong>Personalized Guidance:</strong> Individual mentoring to
                help you prioritize groups based on your strengths
              </li>
              <li>
                <strong>Comprehensive Resources:</strong> One-stop solution
                eliminating need for multiple books and sources
              </li>
              <li>
                <strong>Peer Learning:</strong> Interact with aspirants
                targeting different groups, enriching your perspective
              </li>
              <li>
                <strong>Flexibility:</strong> Freedom to focus more on specific
                groups as exams approach based on your preparation level
              </li>
            </ul>
          </div>

          <div className="warning-box">
            <h4>Investment in Your Future</h4>
            <p>
              At ₹49,000 for 11 months, this works out to approximately ₹4,450
              per month for comprehensive preparation covering multiple TNPSC
              groups. Compare this to:
            </p>
            <ul>
              <li>Separate courses for each group: ₹75,000 - ₹1,00,000+</li>
              <li>
                Cost of repeated attempts due to inadequate preparation:
                Immeasurable
              </li>
              <li>
                Value of entering government service one year earlier: First
                year salary alone (₹3-6 lakhs)
              </li>
            </ul>
            <p style={{ marginTop: "15px" }}>
              <strong>
                This isn't an expense - it's a high-ROI investment in your
                government service career.
              </strong>
            </p>
          </div>
        </div>
      </div>
      {/* 
      <div className="footer">
        <div className="footer-content">
          <h3>Join the Integrated Batch Today</h3>
          <p>
            Maximize your TNPSC success chances with comprehensive, integrated
            preparation.
          </p>
          <button className="cta-button">Enroll Now</button>
        </div>
      </div> */}
    </>
  );
};

// Mains Programme Component
const MainsProgramme = ({ onNavigate }) => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>✍️ GROUP 2/2A EXCLUSIVE MAINS PROGRAMME</h1>
          <p className="tagline">Specialized Training for Mains Excellence</p>
        </div>
      </div>

      <div className="container">
        <button className="back-btn" onClick={() => onNavigate("hub")}>
          ← Back to Courses
        </button>

        <div className="detail-content">
          <h2>Why Exclusive Mains Programme is Required?</h2>

          <div className="warning-box">
            <h4>The Mains Challenge</h4>
            <p>
              Clearing TNPSC Prelims is just the first hurdle.{" "}
              <strong>Most aspirants fail at the Mains stage</strong>
              despite having good knowledge because:
            </p>
            <ul>
              <li>Lack of structured answer writing practice</li>
              <li>
                Inability to present knowledge effectively in limited time
              </li>
              <li>Poor understanding of what examiners expect</li>
              <li>
                Inadequate practice with descriptive (Group 2) and objective
                (Group 2A) Mains patterns
              </li>
            </ul>
          </div>

          <div className="success-box">
            <h4>The Solution: Focused Mains Training</h4>
            <p>
              Our <strong>Exclusive Mains Programme</strong> addresses the
              specific requirements of Group 2 and 2A Mains examinations.
              Whether you've already cleared Prelims or are preparing
              simultaneously, this 6-month intensive program transforms your
              knowledge into high-scoring answers.
            </p>
          </div>

          <h3>Why Mains Requires Specialized Preparation</h3>

          <div className="features-grid">
            <div className="feature-card">
              <h4>📝 Different Skill Set</h4>
              <p>
                Prelims tests knowledge recall; Mains tests understanding,
                analysis, and expression - requiring entirely different
                preparation approach.
              </p>
            </div>

            <div className="feature-card">
              <h4>⏱️ Time Management Critical</h4>
              <p>
                Writing quality answers within strict time limits is a skill
                that must be practiced repeatedly under exam conditions.
              </p>
            </div>

            <div className="feature-card">
              <h4>🎯 Examiner Psychology</h4>
              <p>
                Understanding what examiners look for in answers - structure,
                keywords, examples, clarity - is crucial for high scores.
              </p>
            </div>

            <div className="feature-card">
              <h4>📊 Both Formats Covered</h4>
              <p>
                Group 2 (Descriptive) and Group 2A (Objective Mains) require
                different strategies - our program covers both comprehensively.
              </p>
            </div>
          </div>

          <h3>About the Programme</h3>

          <div className="price-box">
            <h3>Programme Investment</h3>
            <div className="price-amount">₹25,000</div>
            <div className="price-duration">
              6 Months Intensive Mains Training
            </div>
          </div>

          <div className="info-box">
            <h4>Tailor-Made for Mains Success</h4>
            <p>
              A course crafted specifically for aspirants determined to succeed
              in TNPSC Group 2 and Group 2A MAINS examinations, ensuring
              complete preparation through structured learning, consistent
              practice, and expert guidance.
            </p>
          </div>

          <h3>Comprehensive Programme Features</h3>

          <div className="features-grid">
            <div className="feature-card">
              <h4>📚 Concept-Based Learning</h4>
              <p>
                Topic-wise clarity in Polity, History, Economy, Geography,
                Science, Current Affairs, and Reasoning with Mains focus.
              </p>
            </div>

            <div className="feature-card">
              <h4>📖 Full Syllabus Coverage</h4>
              <p>
                Complete preparation for both Group 2 (Descriptive) and Group 2A
                (Objective) Mains based on latest TNPSC syllabus.
              </p>
            </div>

            <div className="feature-card">
              <h4>📝 Regular Tests & Assessments</h4>
              <p>
                Unit tests, mock tests, and full-length exams simulating real
                TNPSC Mains patterns for both groups.
              </p>
            </div>

            <div className="feature-card">
              <h4>✍️ Mains Answer Writing Practice</h4>
              <p>
                Continuous evaluation with detailed feedback to improve
                structure, presentation, and content quality.
              </p>
            </div>

            <div className="feature-card">
              <h4>📊 Performance Analytics</h4>
              <p>
                Personalized reports to track progress, identify improvement
                areas, and compare with peer performance.
              </p>
            </div>

            <div className="feature-card">
              <h4>👨‍🏫 Mentorship & Motivation</h4>
              <p>
                One-on-one guidance and strategy sessions by experienced faculty
                who understand Mains examination nuances.
              </p>
            </div>
          </div>

          <h3>Tests Conducted</h3>

          <div className="success-box">
            <h4>Objective Type Tests</h4>
            <p>
              <strong>For Group 2A Aspirants:</strong>
            </p>
            <ul>
              <li>Covers General Studies, Aptitude & Mental Ability</li>
              <li>200 questions format as per actual exam pattern</li>
              <li>Time-bound practice to improve speed and accuracy</li>
              <li>Topic-wise and full-syllabus tests</li>
            </ul>
          </div>

          <div className="highlight-box">
            <h4>Descriptive Type Tests</h4>
            <p>
              <strong>For Group 2 Aspirants:</strong>
            </p>
            <ul>
              <li>Focused training in essay writing and comprehension</li>
              <li>Unit-wise answer writing based on 7 units of syllabus</li>
              <li>
                Precise answers matching TNPSC's evolving question patterns
              </li>
              <li>
                Evaluation focusing on content, structure, and presentation
              </li>
            </ul>
          </div>

          <h3>Why Group 2/2A Focused Programme?</h3>

          <div className="info-box">
            <h4>Strategic Advantages</h4>
            <ul>
              <li>
                <strong>Targeted Preparation:</strong> Focuses exclusively on
                what's needed for Group 2/2A Mains - no dilution
              </li>
              <li>
                <strong>Executive Positions:</strong> Group 2/2A offers
                excellent officer-level positions with good career growth
              </li>
              <li>
                <strong>Shorter Process:</strong> No interview for Group 2A;
                faster selection compared to Group 1
              </li>
              <li>
                <strong>High Success Rate:</strong> More vacancies in Group 2/2A
                compared to Group 1
              </li>
              <li>
                <strong>Work-Life Balance:</strong> Better balance compared to
                higher administrative roles
              </li>
              <li>
                <strong>Career Progression:</strong> Excellent opportunities for
                departmental promotions and exams
              </li>
            </ul>
          </div>

          <h3>Programme Progression: 6-Month Journey</h3>

          <div className="highlight-box">
            <h4>Month 1-2: Concept Strengthening</h4>
            <p>
              Topic-wise detailed classes covering all 7 units. Building strong
              conceptual foundation. Introduction to answer writing techniques.
              Weekly unit tests.
            </p>
          </div>

          <div className="highlight-box">
            <h4>Month 3-4: Practice Intensive Phase</h4>
            <p>
              Daily answer writing practice. Mock tests in both objective and
              descriptive formats. Performance analysis and feedback. Current
              affairs integration with static topics.
            </p>
          </div>

          <div className="highlight-box">
            <h4>Month 5-6: Exam Readiness</h4>
            <p>
              Full-length Mains simulation tests. Time management perfection.
              Revision of entire syllabus. Final doubt clearing and strategy
              refinement.
            </p>
          </div>

          <h3>Ideal For</h3>

          <div className="features-grid">
            <div className="feature-card">
              <h4>🎓 Graduates Targeting Officer Roles</h4>
              <p>
                Aiming for Group 2/2A officer-level positions in Tamil Nadu
                Government with focused preparation.
              </p>
            </div>

            <div className="feature-card">
              <h4>💼 Working Professionals</h4>
              <p>
                Managing part-time or flexible preparation alongside current
                job, needing structured guidance.
              </p>
            </div>

            <div className="feature-card">
              <h4>🌟 Prelims-Cleared Aspirants</h4>
              <p>
                Those who've cleared Prelims and need intensive Mains
                preparation to convert it to selection.
              </p>
            </div>

            <div className="feature-card">
              <h4>🎯 Serious First-Timers</h4>
              <p>
                First-time aspirants who want disciplined, structured guidance
                specifically for Mains from the start.
              </p>
            </div>
          </div>

          <h3>What Makes This Programme Special</h3>

          <div className="success-box">
            <h4>Unique Differentiators</h4>
            <ul>
              <li>
                <strong>Dual Format Mastery:</strong> Equal focus on both Group
                2 (Descriptive) and 2A (Objective) Mains
              </li>
              <li>
                <strong>Answer Writing Lab:</strong> Dedicated sessions for
                practicing and perfecting answer writing
              </li>
              <li>
                <strong>Personalized Feedback:</strong> Every answer evaluated
                with specific improvement suggestions
              </li>
              <li>
                <strong>Current Affairs Integration:</strong> Continuous updates
                linked to static syllabus topics
              </li>
              <li>
                <strong>Peer Learning:</strong> Group discussions on important
                topics enhancing understanding
              </li>
              <li>
                <strong>Resource Optimization:</strong> Curated materials
                eliminating need for multiple reference books
              </li>
            </ul>
          </div>

          <div className="warning-box">
            <h4>Value Proposition</h4>
            <p>
              <strong>₹25,000 for 6 months = ₹4,167 per month</strong> for
              specialized Mains training that can be the difference between
              selection and rejection.
            </p>
            <p style={{ marginTop: "10px" }}>
              Consider that Group 2/2A positions offer starting salaries of
              ₹35,000-50,000 per month. This programme investment pays for
              itself in the first month of your government service.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="footer">
        <div className="footer-content">
          <h3>Master Mains, Secure Your Selection</h3>
          <p>
            Join the exclusive programme designed specifically for Group 2/2A
            Mains success.
          </p>
          <button className="cta-button">Enroll in Mains Programme</button>
        </div>
      </div> */}
    </>
  );
};

// Group 4 Programme Component
const Group4Programme = ({ onNavigate }) => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>📚 GROUP 4 EXCLUSIVE CLASSROOM PROGRAM</h1>
          <p className="tagline">
            Build Your Foundation for Government Service
          </p>
        </div>
      </div>

      <div className="container">
        <button className="back-btn" onClick={() => onNavigate("hub")}>
          ← Back to Courses
        </button>

        <div className="detail-content">
          <h2>Why Group 4 Foundation Programme is Essential?</h2>

          <div className="warning-box">
            <h4>The Group 4 Reality</h4>
            <p>
              Many aspirants underestimate Group 4 preparation, thinking "it's
              just SSLC level." This misconception leads to{" "}
              <strong>
                disappointment when they fail to qualify in the Tamil
                eligibility test or score poorly in General Studies
              </strong>
              . Group 4 requires:
            </p>
            <ul>
              <li>
                <strong>Strong Tamil proficiency</strong> (40% minimum
                mandatory)
              </li>
              <li>
                <strong>Solid fundamentals</strong> across all SSLC/HSC subjects
              </li>
              <li>
                <strong>Speed and accuracy</strong> in objective format
              </li>
              <li>
                <strong>Current affairs knowledge</strong> with Tamil Nadu focus
              </li>
            </ul>
          </div>

          <div className="success-box">
            <h4>The Foundation Advantage</h4>
            <p>
              Our <strong>Group 4 Exclusive Programme</strong> doesn't just
              prepare you for the exam - it builds a
              <strong>rock-solid foundation</strong> that serves you throughout
              your government service career. Many Group 4 employees later clear
              Group 2/2A or even Group 1 using this strong foundation.
            </p>
          </div>

          <h3>Why Foundation Building is Crucial</h3>

          <div className="features-grid">
            <div className="feature-card">
              <h4>🎯 Entry to Government Service</h4>
              <p>
                Group 4 is the gateway to Tamil Nadu government service - stable
                job, good benefits, career growth opportunities.
              </p>
            </div>

            <div className="feature-card">
              <h4>📚 Strong Basics = Future Success</h4>
              <p>
                Solid fundamentals built here help in future departmental exams
                and higher group preparations.
              </p>
            </div>

            <div className="feature-card">
              <h4>⚡ Quick Selection Process</h4>
              <p>
                Single-stage exam means faster selection compared to Group 1/2 -
                enter service sooner.
              </p>
            </div>

            <div className="feature-card">
              <h4>💼 Work-Study Balance</h4>
              <p>
                Once in service, you can prepare for higher groups while earning
                salary and gaining experience.
              </p>
            </div>
          </div>

          <h3>About the Programme</h3>

          <div className="price-box">
            <h3>Programme Investment</h3>
            <div className="price-amount">₹6,999</div>
            <div className="price-duration">4 Months Foundation Building</div>
          </div>

          <div className="info-box">
            <h4>Foundation for Confidence and Success</h4>
            <p>
              Our Group 4 course builds a rock-solid foundation in all core
              subjects, helping beginners approach TNPSC exams with confidence
              and clarity. Designed specifically for those taking their first
              steps toward government service.
            </p>
          </div>

          <h3>Comprehensive Programme Benefits</h3>

          <div className="features-grid">
            <div className="feature-card">
              <h4>📖 Concept-Focused Classes</h4>
              <p>
                Designed around Samacheer content and state priorities, ensuring
                alignment with TNPSC's question patterns.
              </p>
            </div>

            <div className="feature-card">
              <h4>📝 Continuous Prelims Practice Tests</h4>
              <p>
                Regular tests to improve accuracy, retention, and speed in
                objective format crucial for Group 4 success.
              </p>
            </div>

            <div className="feature-card">
              <h4>👨‍🏫 Individual Mentoring</h4>
              <p>
                Personal guidance to build strong study habits, overcome
                weaknesses, and ensure steady progress.
              </p>
            </div>

            <div className="feature-card">
              <h4>💪 Motivational Sessions</h4>
              <p>
                Regular motivation and exam strategy orientation to keep you
                focused and confident throughout preparation.
              </p>
            </div>
          </div>

          <h3>Why Group 4 is Your Smart Career Move</h3>

          <div className="success-box">
            <h4>Strategic Career Benefits</h4>
            <ul>
              <li>
                <strong>Immediate Employment:</strong> Enter government service
                within months of graduation
              </li>
              <li>
                <strong>Job Security:</strong> Permanent government position
                with complete job security
              </li>
              <li>
                <strong>Regular Income:</strong> Start earning
                ₹25,000-35,000/month immediately
              </li>
              <li>
                <strong>Benefits Package:</strong> Medical, pension, leave
                benefits from day one
              </li>
              <li>
                <strong>Career Growth:</strong> Promotions to higher grades
                within the same service
              </li>
              <li>
                <strong>Exam Opportunities:</strong> Prepare for Group 2/2A/1
                while in service
              </li>
              <li>
                <strong>Work Experience:</strong> Understand government
                functioning from inside
              </li>
              <li>
                <strong>Age Advantage:</strong> Start young, retire with full
                benefits
              </li>
            </ul>
          </div>

          <h3>What You'll Master in 4 Months</h3>

          <div className="highlight-box">
            <h4>Part A: Tamil Eligibility-cum-Scoring</h4>
            <ul>
              <li>Tamil Grammar fundamentals (SSLC/HSC level)</li>
              <li>Comprehension and vocabulary building</li>
              <li>Previous years' question patterns</li>
              <li>Achieving 40%+ consistently (mandatory qualification)</li>
            </ul>
          </div>

          <div className="highlight-box">
            <h4>Part B: General Studies</h4>
            <ul>
              <li>
                <strong>Science:</strong> Physics, Chemistry, Biology basics
              </li>
              <li>
                <strong>History:</strong> Indian history with Tamil Nadu focus
              </li>
              <li>
                <strong>Geography:</strong> India and Tamil Nadu geography
              </li>
              <li>
                <strong>Polity:</strong> Constitution, governance, rights
              </li>
              <li>
                <strong>Economy:</strong> Basic economic concepts
              </li>
              <li>
                <strong>Current Affairs:</strong> Tamil Nadu developments
              </li>
            </ul>
          </div>

          <h3>Programme Timeline: 4-Month Journey</h3>

          <div className="info-box">
            <h4>Month 1: Building Blocks</h4>
            <p>
              <strong>Focus:</strong> Tamil grammar basics, Science
              fundamentals, Basic history and geography
            </p>
            <p>
              <strong>Practice:</strong> Simple MCQs, Basic comprehension
            </p>
          </div>

          <div className="info-box">
            <h4>Month 2: Concept Strengthening</h4>
            <p>
              <strong>Focus:</strong> Tamil literature, Polity basics, Economy
              concepts, Advanced science
            </p>
            <p>
              <strong>Practice:</strong> Unit tests, Speed building exercises
            </p>
          </div>

          <div className="info-box">
            <h4>Month 3: Practice Intensive</h4>
            <p>
              <strong>Focus:</strong> Current affairs, Revision of all topics,
              Mock test series begins
            </p>
            <p>
              <strong>Practice:</strong> Full-length tests, Time management
            </p>
          </div>

          <div className="info-box">
            <h4>Month 4: Exam Readiness</h4>
            <p>
              <strong>Focus:</strong> Final revision, Weak area improvement,
              Exam strategy
            </p>
            <p>
              <strong>Practice:</strong> Multiple mocks, Speed accuracy balance
            </p>
          </div>

          <h3>Ideal For</h3>

          <div className="features-grid">
            <div className="feature-card">
              <h4>🎓 School & College Students</h4>
              <p>
                Those studying in final years or fresh graduates wanting to
                start government service early.
              </p>
            </div>

            <div className="feature-card">
              <h4>🌟 Early-Stage Aspirants</h4>
              <p>
                Beginners to competitive exams needing structured guidance and
                strong foundation building.
              </p>
            </div>

            <div className="feature-card">
              <h4>🎯 First-Time Candidates</h4>
              <p>
                Those appearing for TNPSC for the first time and want to start
                with achievable goals.
              </p>
            </div>

            <div className="feature-card">
              <h4>💼 Career Starters</h4>
              <p>
                Anyone wanting immediate government employment while building
                foundation for future growth.
              </p>
            </div>
          </div>

          <h3>Why JDAX Group 4 Programme Works</h3>

          <div className="success-box">
            <h4>Proven Success Methodology</h4>
            <ul>
              <li>
                <strong>Samacheer Alignment:</strong> Content directly from
                Tamil Nadu state board ensuring familiarity
              </li>
              <li>
                <strong>Tamil Focus:</strong> Special emphasis on crossing the
                40% Tamil eligibility barrier
              </li>
              <li>
                <strong>Small Batches:</strong> Individual attention ensuring no
                student is left behind
              </li>
              <li>
                <strong>Regular Assessment:</strong> Continuous testing to track
                progress and build confidence
              </li>
              <li>
                <strong>Doubt Clearing:</strong> Dedicated sessions for clearing
                even basic doubts
              </li>
              <li>
                <strong>Study Material:</strong> Complete notes eliminating need
                for multiple books
              </li>
              <li>
                <strong>Mock Tests:</strong> Simulating exact exam conditions
                for comfort on exam day
              </li>
            </ul>
          </div>

          <h3>The Smart Investment</h3>

          <div className="warning-box">
            <h4>Unbeatable Value for Money</h4>
            <p>
              <strong>₹6,999 for 4 months = ₹1,750 per month</strong>
            </p>
            <p style={{ marginTop: "10px" }}>
              This is less than what many people spend on coffee! And it can
              change your entire career trajectory.
            </p>
            <p style={{ marginTop: "10px" }}>
              <strong>Return on Investment:</strong>
            </p>
            <ul>
              <li>Starting salary after selection: ₹25,000-35,000/month</li>
              <li>First year earnings: ₹3-4 lakhs</li>
              <li>35-year career earnings: ₹1-2 crores+</li>
              <li>Pension for life after retirement</li>
            </ul>
            <p style={{ marginTop: "15px", fontWeight: "bold" }}>
              ₹6,999 investment → Lifetime of government service security!
            </p>
          </div>

          <h3>Beyond Group 4: Your Career Pathway</h3>

          <div className="highlight-box">
            <h4>The Smart Career Ladder</h4>
            <p>
              <strong>Year 1:</strong> Clear Group 4 with JDAX foundation →
              Enter service
            </p>
            <p>
              <strong>Year 2-3:</strong> Gain experience, understand system,
              earn salary
            </p>
            <p>
              <strong>Year 4-5:</strong> Prepare for Group 2/2A while in service
              → Promotion
            </p>
            <p>
              <strong>Year 6+:</strong> Target Group 1 or departmental
              promotions → Higher positions
            </p>
            <p style={{ marginTop: "15px", fontWeight: "bold" }}>
              Starting with Group 4 doesn't limit you - it gives you a stable
              platform to reach higher!
            </p>
          </div>
        </div>
      </div>

      {/* <div className="footer">
        <div className="footer-content">
          <h3>Start Your Government Service Journey</h3>
          <p>
            Build your foundation with Group 4 and open doors to a secure,
            rewarding career.
          </p>
          <button className="cta-button">Join Group 4 Programme</button>
        </div>
      </div> */}
    </>
  );
};

// Main TnpscNewCourse Component
const TnpscNewCourse = () => {
  const [currentPage, setCurrentPage] = useState("hub");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "hub":
        return <Hub onNavigate={setCurrentPage} />;
      case "integrated":
        return <IntegratedBatch onNavigate={setCurrentPage} />;
      case "mains":
        return <MainsProgramme onNavigate={setCurrentPage} />;
      case "group4":
        return <Group4Programme onNavigate={setCurrentPage} />;
      default:
        return <Hub onNavigate={setCurrentPage} />;
    }
  };

  return (
    <>
      <style>{styles}</style>
      {renderPage()}
      <button
        className={`scroll-top ${showScrollTop ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        ↑
      </button>
    </>
  );
};

export default TnpscNewCourse;
