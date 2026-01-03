import React, { useState, useEffect } from "react";

// Styles
const styles = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    overflow-x: hidden;
}

.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 80px 20px 100px;
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
    font-size: 3.5em;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    animation: fadeInDown 1s ease;
}

.hero p {
    font-size: 1.3em;
    margin-bottom: 20px;
    opacity: 0.95;
    animation: fadeInUp 1s ease 0.3s backwards;
}

@keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

.container {
}

.back-btn {
    display: inline-block;
    background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
    color: white;
    padding: 12px 25px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    margin-bottom: 30px;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
}

.back-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
}

.section-title {
    text-align: center;
    font-size: 2.5em;
    color: #7C3AED;
    margin-bottom: 50px;
}

.courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
}

.course-card {
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.course-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #8B5CF6, #7C3AED, #6D28D9);
}

.course-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 50px rgba(139, 92, 246, 0.2);
}

.course-icon {
    font-size: 3em;
    margin-bottom: 20px;
    display: block;
}

.course-card h3 {
    font-size: 1.8em;
    color: #7C3AED;
    margin-bottom: 15px;
}

.course-card .subtitle {
    color: #666;
    font-size: 1.1em;
    margin-bottom: 20px;
}

.course-card .description {
    color: #555;
    margin-bottom: 20px;
    flex-grow: 1;
    line-height: 1.8;
}

.course-highlights {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
}

.course-highlights h4 {
    color: #7C3AED;
    margin-bottom: 12px;
    font-size: 1.1em;
}

.course-highlights ul {
    list-style: none;
    padding: 0;
}

.course-highlights li {
    padding: 6px 0;
    color: #555;
    font-size: 0.95em;
}

.course-highlights li::before {
    content: "✓ ";
    color: #10b981;
    font-weight: bold;
    margin-right: 8px;
}

.meta-info {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin: 20px 0;
}

.meta-badge {
    background: linear-gradient(135deg, #8B5CF6, #7C3AED);
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.9em;
}

.meta-badge.free {
    background: linear-gradient(135deg, #10b981, #059669);
}

.meta-badge.price {
    background: linear-gradient(135deg, #f59e0b, #d97706);
}

.learn-more-btn {
    display: inline-block;
    background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
    color: white;
    padding: 15px 30px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease;
    margin-top: auto;
    cursor: pointer;
    border: none;
}

.learn-more-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
    background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%);
}

.course-detail {
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    margin-bottom: 40px;
}

.course-detail h2 {
    font-size: 2.5em;
    color: #7C3AED;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
}

.course-detail h3 {
    font-size: 1.8em;
    color: #6D28D9;
    margin: 30px 0 15px;
}

.course-detail p {
    line-height: 1.8;
    margin-bottom: 15px;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 25px 0;
}

.feature-item {
    background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
    padding: 20px;
    border-radius: 12px;
    display: flex;
    align-items: start;
    gap: 12px;
    transition: all 0.3s ease;
}

.feature-item:hover {
    background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
    transform: translateX(5px);
}

.feature-icon {
    font-size: 1.5em;
    flex-shrink: 0;
}

.feature-text {
    font-size: 0.95em;
    line-height: 1.6;
}

.feature-text strong {
    color: #7C3AED;
    display: block;
    margin-bottom: 5px;
}

.highlight-box {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    border-left: 5px solid #f59e0b;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
}

.highlight-box.success {
    background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
    border-left-color: #10b981;
}

.highlight-box h4 {
    color: #92400e;
    margin-bottom: 10px;
    font-size: 1.2em;
}

.highlight-box.success h4 {
    color: #065f46;
}

.highlight-box p {
    color: #78350f;
    line-height: 1.7;
}

.highlight-box.success p {
    color: #064e3b;
}

.ideal-for {
    background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
    padding: 25px;
    border-radius: 12px;
    margin-top: 25px;
}

.ideal-for h3 {
    color: #6D28D9;
    margin-bottom: 15px;
    font-size: 1.3em;
}

.ideal-for ul {
    list-style: none;
    padding: 0;
}

.ideal-for li {
    padding: 10px 0 10px 35px;
    position: relative;
    font-size: 1.05em;
    color: #4b5563;
}

.ideal-for li::before {
    content: '👤';
    position: absolute;
    left: 0;
    font-size: 1.2em;
}

.accordion {
    margin: 30px 0;
}

.accordion-item {
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    margin-bottom: 12px;
    overflow: hidden;
}

.accordion-button {
    width: 100%;
    padding: 18px 25px;
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    border: none;
    text-align: left;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 600;
    color: #374151;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
}

.accordion-button:hover {
    background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
    color: #7C3AED;
}

.accordion-button.active {
    background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
    color: white;
}

.accordion-icon {
    transition: transform 0.3s ease;
    font-size: 1.2em;
}

.accordion-button.active .accordion-icon {
    transform: rotate(180deg);
}

.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
}

.accordion-content.active {
    max-height: 3000px;
}

.accordion-body {
    padding: 25px;
    line-height: 1.8;
    background: white;
}

.accordion-body ul {
    list-style: none;
    padding-left: 0;
    margin: 15px 0;
}

.accordion-body ul li {
    padding: 8px 0 8px 30px;
    position: relative;
    color: #4b5563;
}

.accordion-body ul li::before {
    content: '✦';
    position: absolute;
    left: 0;
    color: #8B5CF6;
    font-weight: bold;
}

.pathway-guide {
    background: white;
    border-radius: 20px;
    padding: 50px;
    margin: 60px 0;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
}

.pathway-guide h2 {
    color: #7C3AED;
    text-align: center;
    font-size: 2.2em;
    margin-bottom: 40px;
}

.pathway-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
}

.pathway-card {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    padding: 25px;
    border-radius: 15px;
    border-left: 4px solid #8B5CF6;
    transition: all 0.3s ease;
}

.pathway-card:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 20px rgba(139, 92, 246, 0.2);
}

.pathway-card .icon {
    font-size: 2em;
    margin-bottom: 10px;
}

.pathway-card h4 {
    color: #7C3AED;
    margin-bottom: 10px;
}

.footer {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 50px 20px;
    text-align: center;
}

.footer-content {
    max-width: 800px;
    margin: 0 auto;
}

.footer h3 {
    font-size: 2em;
    margin-bottom: 15px;
}

.scroll-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #8B5CF6, #7C3AED);
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
    box-shadow: 0 5px 20px rgba(139, 92, 246, 0.4);
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

.subjects-list {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
}

.subjects-list h4 {
    color: #7C3AED;
    margin-bottom: 12px;
}

@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.5em;
    }
    
    .courses-grid {
        grid-template-columns: 1fr;
    }

    .pathway-guide {
        padding: 30px 20px;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }
    
    .course-detail h2 {
        font-size: 2em;
    }
}
`;

// Hub Component
const Hub = ({ onNavigate }) => {
  const courses = [
    {
      id: "foundation",
      icon: "🎯",
      title: "Foundation 365",
      subtitle: "1-Year GS + CSAT Intensive Programme",
      duration: "11 Months",
      price: "₹99,000",
      description:
        "An accelerated powerhouse covering General Studies (Prelims + Mains), CSAT, and Optional Subject (complimentary)—designed for dedicated aspirants with complete dedication.",
      highlights: [
        "Complete GS coverage for Prelims & Mains",
        "CSAT mastery with strategic training",
        "Optional subject coaching (complimentary)",
        "Prelims initiatives: I2I Daily Tests",
        "Mains answer writing training",
        "20+ full-length test series",
      ],
    },
    {
      id: "mastery",
      icon: "🚀",
      title: "Mains Mastery 365",
      subtitle: "Advanced Mentorship & Mastery Programme",
      duration: "11 Months",
      price: "₹40,000",
      description:
        "Advanced programme for aspirants who have completed foundational preparation and need strategic mentorship, advanced Optional coaching, and comprehensive interview readiness.",
      highlights: [
        "Personal one-on-one mentorship",
        "Advanced Optional coaching (complete syllabus)",
        "Complete Interview preparation",
        "Advanced initiatives: B2B NCERT Series",
        "3I Integrated Learning",
        "Comprehensive test series",
      ],
    },
    {
      id: "optional",
      icon: "📚",
      title: "Optional Excellence Series",
      subtitle: "Tamil | Political Science | Sociology | History",
      duration: "8 Months",
      price: "₹25,000",
      description:
        "Specialized mastery programs delivering comprehensive Optional coverage with consistent answer-writing practice and customized exam strategies.",
      highlights: [
        "300+ hours expert instruction",
        "Complete Paper 1 + Paper 2 coverage",
        "PYQ analysis (last 10 years)",
        "40+ evaluated answers",
        "Subject-specific test series",
        "FREE with Foundation 365",
      ],
    },
    {
      id: "interview",
      icon: "💼",
      title: "Interview Guidance Programme",
      subtitle: "FREE Personality Development",
      duration: "Post-Mains",
      price: "FREE",
      isFree: true,
      description:
        "Comprehensive Personality Test preparation featuring expert mock interview panels conducted by serving IAS, IPS, IFS officers with detailed DAF analysis.",
      highlights: [
        "Mock interviews with serving officers",
        "Personalized DAF analysis",
        "Current affairs discussions",
        "Communication refinement",
        "Video-recorded practice sessions",
        "Stress management techniques",
      ],
    },
    {
      id: "early",
      icon: "🌱",
      title: "Early Foundation Path",
      subtitle: "For School & College Students",
      duration: "1-4 Years",
      price: "₹5,000-₹8,000/year",
      description:
        "Progressive UPSC readiness programs for school and college students, systematically covering GS subjects while complementing regular academic studies.",
      highlights: [
        "150 hours annual instruction",
        "50 hours rigorous testing",
        "Weekly doubt-clearing sessions",
        "Complete GS subjects coverage",
        "Campus partnerships active",
        "Fee 100% redeemable",
      ],
    },
  ];

  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>Transform Your UPSC Journey</h1>
          <p>
            Comprehensive coaching programs designed for every stage of your
            civil services preparation
          </p>
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Our UPSC Coaching Programs</h2>

        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <span className="course-icon">{course.icon}</span>
              <h3>{course.title}</h3>
              <p className="subtitle">{course.subtitle}</p>
              <div className="meta-info">
                <span className="meta-badge">{course.duration}</span>
                <span
                  className={`meta-badge ${course.isFree ? "free" : "price"}`}
                >
                  {course.price}
                </span>
              </div>
              <p className="description">{course.description}</p>
              <div className="course-highlights">
                <h4>Key Highlights:</h4>
                <ul>
                  {course.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <button
                className="learn-more-btn"
                onClick={() => onNavigate(course.id)}
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div className="pathway-guide">
          <h2>🎯 Choose Your Perfect Pathway</h2>
          <div className="pathway-grid">
            <div className="pathway-card">
              <div className="icon">🚀</div>
              <h4>First-Time Aspirants</h4>
              <p>
                Start with <strong>Foundation 365</strong> for complete coverage
                with Optional subject included
              </p>
            </div>
            <div className="pathway-card">
              <div className="icon">📈</div>
              <h4>Second-Year Aspirants</h4>
              <p>
                Choose <strong>Mains Mastery 365</strong> for advanced
                mentorship and Optional excellence
              </p>
            </div>
            <div className="pathway-card">
              <div className="icon">✨</div>
              <h4>Optional Focus</h4>
              <p>
                Enroll in <strong>Optional Excellence</strong> for specialized
                subject mastery
              </p>
            </div>
            <div className="pathway-card">
              <div className="icon">🌱</div>
              <h4>College Students</h4>
              <p>
                Begin with <strong>Early Foundation</strong> to build strong
                fundamentals early
              </p>
            </div>
            <div className="pathway-card">
              <div className="icon">🎓</div>
              <h4>Mains-Qualified</h4>
              <p>
                Join <strong>Interview Guidance</strong> (FREE) for personality
                transformation
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-content">
          <h3>🎯 Your Journey to UPSC Success Starts Here</h3>
          <p>
            Choose the programme that aligns with your preparation stage and
            aspirations. Each pathway is meticulously designed to guide you from
            where you are to where you want to be.
          </p>
          <p style={{ marginTop: "20px", fontSize: "1.2em", fontWeight: 600 }}>
            Transform Your Dreams into Reality
          </p>
        </div>
      </div>
    </>
  );
};

// Foundation 365 Detail Page
const Foundation365 = ({ onNavigate }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>🎯 Foundation 365</h1>
          <p>1-Year GS + CSAT Intensive Programme with Optional</p>
        </div>
      </div>

      <div className="container">
        <button className="back-btn" onClick={() => onNavigate("hub")}>
          ← Back to All Courses
        </button>

        <div className="course-detail">
          <h2>
            <span className="course-icon">🎯</span>
            FOUNDATION 365
          </h2>
          <p className="subtitle">1-Year GS + CSAT Intensive Programme</p>

          <div className="meta-info">
            <span className="meta-badge">⏱️ 11 Months</span>
            <span className="meta-badge price">💰 ₹99,000/-</span>
          </div>

          <div className="highlight-box">
            <h4>🚀 Program Overview</h4>
            <p>
              <strong>An accelerated powerhouse</strong> covering General
              Studies (Prelims + Mains), CSAT, and Optional Subject
              (complimentary)—designed for dedicated aspirants targeting their
              upcoming attempt with unwavering focus and complete dedication.
            </p>
          </div>

          <h3>📚 What's Included</h3>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">📖</span>
              <div className="feature-text">
                <strong>Complete GS Coverage</strong>
                Comprehensive General Studies for both Prelims and Mains
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎯</span>
              <div className="feature-text">
                <strong>CSAT Mastery</strong>
                Strategic quantitative and logical reasoning training
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✨</span>
              <div className="feature-text">
                <strong>Optional Foundation</strong>
                Complete Optional subject coaching included FREE
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📝</span>
              <div className="feature-text">
                <strong>Prelims Initiatives</strong>
                I2I Daily Tests + Rise to Excel Test Series
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✍️</span>
              <div className="feature-text">
                <strong>Mains Training</strong>
                Comprehensive answer writing training
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📚</span>
              <div className="feature-text">
                <strong>Study Materials</strong>
                Comprehensive, meticulously curated resources
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📊</span>
              <div className="feature-text">
                <strong>Test Series</strong>
                20+ full-length test series
              </div>
            </div>
          </div>

          <div className="accordion">
            <div className="accordion-item">
              <button
                className={`accordion-button ${
                  activeAccordion === 0 ? "active" : ""
                }`}
                onClick={() => toggleAccordion(0)}
              >
                <span>📚 Complete Program Structure</span>
                <span className="accordion-icon">▼</span>
              </button>
              <div
                className={`accordion-content ${
                  activeAccordion === 0 ? "active" : ""
                }`}
              >
                <div className="accordion-body">
                  <h4>Comprehensive 11-Month Journey</h4>
                  <ul>
                    <li>
                      Complete General Studies covering History, Geography,
                      Polity, Economy, Environment, Science & Technology
                    </li>
                    <li>
                      CSAT training with quantitative aptitude, logical
                      reasoning, and comprehension
                    </li>
                    <li>
                      Optional subject foundation (complimentary) - choice of
                      Tamil Literature, Political Science, Sociology, or History
                    </li>
                    <li>
                      Prelims-focused initiatives including daily current
                      affairs and test series
                    </li>
                    <li>
                      Mains answer writing practice with personalized feedback
                    </li>
                    <li>Regular assessments and performance tracking</li>
                    <li>Study materials for all subjects</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <button
                className={`accordion-button ${
                  activeAccordion === 1 ? "active" : ""
                }`}
                onClick={() => toggleAccordion(1)}
              >
                <span>🎯 Prelims Initiatives</span>
                <span className="accordion-icon">▼</span>
              </button>
              <div
                className={`accordion-content ${
                  activeAccordion === 1 ? "active" : ""
                }`}
              >
                <div className="accordion-body">
                  <h4>I2I Daily Tests</h4>
                  <p>
                    Daily practice tests designed to build consistency and track
                    your progress systematically.
                  </p>

                  <h4>Rise to Excel Test Series</h4>
                  <p>
                    Comprehensive test series covering the entire Prelims
                    syllabus with detailed performance analysis and All India
                    ranking.
                  </p>

                  <ul>
                    <li>20+ full-length mock tests</li>
                    <li>Subject-wise tests for focused practice</li>
                    <li>Detailed solutions and explanations</li>
                    <li>Performance analytics and improvement strategies</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <button
                className={`accordion-button ${
                  activeAccordion === 2 ? "active" : ""
                }`}
                onClick={() => toggleAccordion(2)}
              >
                <span>✍️ Mains Answer Writing</span>
                <span className="accordion-icon">▼</span>
              </button>
              <div
                className={`accordion-content ${
                  activeAccordion === 2 ? "active" : ""
                }`}
              >
                <div className="accordion-body">
                  <ul>
                    <li>Regular answer writing practice sessions</li>
                    <li>
                      Personalized evaluation and feedback from experienced
                      faculty
                    </li>
                    <li>Model answers and best practices</li>
                    <li>
                      Strategy sessions on structuring answers effectively
                    </li>
                    <li>Coverage of all GS papers (GS1, GS2, GS3, GS4)</li>
                    <li>Integration of current affairs in answer writing</li>
                    <li>Focus on presentation, clarity, and content quality</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="ideal-for">
            <h3>👥 Ideal For:</h3>
            <ul>
              <li>Graduates ready for intensive full-time learning</li>
              <li>
                Working professionals transitioning to full-time UPSC
                preparation
              </li>
              <li>Serious first-time aspirants committed to success</li>
              <li>
                Students who want comprehensive preparation with Optional
                included
              </li>
            </ul>
          </div>

          <div className="highlight-box success">
            <h4>🎁 Special Offer</h4>
            <p>
              <strong>Optional Foundation is completely FREE</strong> with this
              programme! Get comprehensive coaching in your chosen Optional
              subject at no additional cost.
            </p>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-content">
          <h3>Ready to Begin Your UPSC Journey?</h3>
          <p>
            Foundation 365 provides the complete preparation ecosystem you need
            for UPSC success with everything included.
          </p>
        </div>
      </div>
    </>
  );
};

// Mains Mastery 365 Detail Page
const MainsMastery365 = ({ onNavigate }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>🚀 Mains Mastery 365</h1>
          <p>Advanced Mentorship & Mastery Programme</p>
        </div>
      </div>

      <div className="container">
        <button className="back-btn" onClick={() => onNavigate("hub")}>
          ← Back to All Courses
        </button>

        <div className="course-detail">
          <h2>
            <span className="course-icon">🚀</span>
            MAINS MASTERY 365
          </h2>
          <p className="subtitle">Advanced Mentorship & Mastery Programme</p>

          <div className="meta-info">
            <span className="meta-badge">⏱️ 11 Months</span>
            <span className="meta-badge price">💰 ₹40,000/-</span>
          </div>

          <div className="highlight-box">
            <h4>🎯 Program Overview</h4>
            <p>
              <strong>Our advanced programme</strong> designed for aspirants who
              have completed foundational preparation and need strategic
              mentorship, advanced Optional coaching, and comprehensive
              interview readiness with balanced pacing that ensures thorough
              revision and exam excellence.
            </p>
          </div>

          <h3>🌟 Why This Programme?</h3>
          <p>
            For second-year aspirants who need personal mentorship, advanced
            initiatives, Optional mastery, and interview preparation to convert
            their foundation into final selection.
          </p>

          <h3>📚 What's Included</h3>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">👨‍🏫</span>
              <div className="feature-text">
                <strong>Personal Mentorship</strong>
                One-on-one guidance from experienced mentors
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📖</span>
              <div className="feature-text">
                <strong>Advanced Optional</strong>
                Complete syllabus coverage for your Optional
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💼</span>
              <div className="feature-text">
                <strong>Interview Preparation</strong>
                Complete personality development and mock interviews
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📚</span>
              <div className="feature-text">
                <strong>B2B NCERT Series</strong>
                Back to Basics NCERT comprehensive coverage
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎓</span>
              <div className="feature-text">
                <strong>3I Integrated Learning</strong>
                Innovative integrated learning methodology
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✍️</span>
              <div className="feature-text">
                <strong>Answer Writing Programme</strong>
                Emulate to Assimilate advanced training
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📊</span>
              <div className="feature-text">
                <strong>Test Series</strong>
                Comprehensive Prelims + Mains + Optional tests
              </div>
            </div>
          </div>

          <div className="accordion">
            <div className="accordion-item">
              <button
                className={`accordion-button ${
                  activeAccordion === 0 ? "active" : ""
                }`}
                onClick={() =>
                  setActiveAccordion(activeAccordion === 0 ? null : 0)
                }
              >
                <span>🎯 Advanced Initiatives</span>
                <span className="accordion-icon">▼</span>
              </button>
              <div
                className={`accordion-content ${
                  activeAccordion === 0 ? "active" : ""
                }`}
              >
                <div className="accordion-body">
                  <h4>B2B NCERT Series (Back to Basics)</h4>
                  <p>
                    Comprehensive revision of NCERT concepts that form the
                    foundation of UPSC preparation.
                  </p>

                  <h4>3I Integrated Learning</h4>
                  <p>
                    Innovative approach integrating current affairs with static
                    topics for comprehensive understanding.
                  </p>

                  <h4>Emulate to Assimilate Answer Writing</h4>
                  <p>
                    Advanced answer writing programme focusing on quality,
                    presentation, and scoring potential through systematic
                    practice and evaluation.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <button
                className={`accordion-button ${
                  activeAccordion === 1 ? "active" : ""
                }`}
                onClick={() =>
                  setActiveAccordion(activeAccordion === 1 ? null : 1)
                }
              >
                <span>💼 Interview Preparation</span>
                <span className="accordion-icon">▼</span>
              </button>
              <div
                className={`accordion-content ${
                  activeAccordion === 1 ? "active" : ""
                }`}
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      Mock interviews with panel of experts including serving
                      officers
                    </li>
                    <li>Detailed DAF (Detailed Application Form) analysis</li>
                    <li>Personality development sessions</li>
                    <li>Current affairs discussions and contemporary issues</li>
                    <li>Communication skills refinement</li>
                    <li>Video-recorded sessions with feedback</li>
                    <li>
                      Group discussions on national and international affairs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="ideal-for">
            <h3>👥 Ideal For:</h3>
            <ul>
              <li>Second-year UPSC aspirants</li>
              <li>Those who've completed basic foundational preparation</li>
              <li>
                Aspirants needing advanced Optional coaching with personal
                mentorship
              </li>
              <li>
                Strategic learners targeting comprehensive Mains and Interview
                excellence
              </li>
            </ul>
          </div>

          <div className="highlight-box success">
            <h4>💡 Note on Optional Excellence</h4>
            <p>
              <strong>Year 1:</strong> Optional foundation provided
              complimentary
              <br />
              <strong>Year 2:</strong> Advanced Optional excellence included in
              programme fees
            </p>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-content">
          <h3>Elevate Your Preparation to Excellence</h3>
          <p>
            Mains Mastery 365 provides the advanced mentorship and strategic
            guidance needed for final selection.
          </p>
        </div>
      </div>
    </>
  );
};

// Optional Excellence Detail Page
const OptionalExcellence = ({ onNavigate }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>📚 Optional Excellence Series</h1>
          <p>Specialized Coaching for UPSC Optional Subjects</p>
        </div>
      </div>

      <div className="container">
        <button className="back-btn" onClick={() => onNavigate("hub")}>
          ← Back to All Courses
        </button>

        <div className="course-detail">
          <h2>
            <span className="course-icon">📚</span>
            OPTIONAL EXCELLENCE SERIES
          </h2>

          <div className="subjects-list">
            <h4>Available Optional Subjects:</h4>
            <p>
              <strong>
                Tamil Literature | Political Science | Sociology | History
              </strong>
            </p>
          </div>

          <div className="meta-info">
            <span className="meta-badge">⏱️ July to February (8 Months)</span>
            <span className="meta-badge price">💰 ₹25,000/- (Standalone)</span>
            <span className="meta-badge free">FREE with Foundation 365</span>
          </div>

          <div className="highlight-box">
            <h4>🎯 Program Overview</h4>
            <p>
              <strong>Specialized mastery programs</strong> delivering
              comprehensive Optional coverage, consistent answer-writing
              practice, previous years' question analysis, and customized exam
              strategies tailored to your chosen subject.
            </p>
          </div>

          <h3>📚 What's Included</h3>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">⏰</span>
              <div className="feature-text">
                <strong>300+ Hours Instruction</strong>
                Expert-led comprehensive teaching
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📖</span>
              <div className="feature-text">
                <strong>Complete Syllabus</strong>
                Paper 1 + Paper 2 detailed coverage
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔍</span>
              <div className="feature-text">
                <strong>PYQ Analysis</strong>
                Last 10 years question paper analysis
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✍️</span>
              <div className="feature-text">
                <strong>Answer Writing</strong>
                40+ evaluated answers with feedback
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📊</span>
              <div className="feature-text">
                <strong>Test Series</strong>
                Subject-specific comprehensive tests
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎯</span>
              <div className="feature-text">
                <strong>Strategy Sessions</strong>
                Personalized exam strategy guidance
              </div>
            </div>
          </div>

          <div className="accordion">
            <div className="accordion-item">
              <button
                className={`accordion-button ${
                  activeAccordion === 0 ? "active" : ""
                }`}
                onClick={() =>
                  setActiveAccordion(activeAccordion === 0 ? null : 0)
                }
              >
                <span>📖 Subject Coverage Details</span>
                <span className="accordion-icon">▼</span>
              </button>
              <div
                className={`accordion-content ${
                  activeAccordion === 0 ? "active" : ""
                }`}
              >
                <div className="accordion-body">
                  <h4>Comprehensive Syllabus Coverage</h4>
                  <ul>
                    <li>Complete Paper 1 with all topics and subtopics</li>
                    <li>Complete Paper 2 with systematic coverage</li>
                    <li>Detailed concept clarification sessions</li>
                    <li>Integration of current affairs where relevant</li>
                    <li>Subject-specific study materials and notes</li>
                    <li>Regular doubt-clearing sessions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <button
                className={`accordion-button ${
                  activeAccordion === 1 ? "active" : ""
                }`}
                onClick={() =>
                  setActiveAccordion(activeAccordion === 1 ? null : 1)
                }
              >
                <span>✍️ Answer Writing Practice</span>
                <span className="accordion-icon">▼</span>
              </button>
              <div
                className={`accordion-content ${
                  activeAccordion === 1 ? "active" : ""
                }`}
              >
                <div className="accordion-body">
                  <ul>
                    <li>Structured answer writing practice (40+ answers)</li>
                    <li>Personalized evaluation and detailed feedback</li>
                    <li>Model answers and best practices</li>
                    <li>Focus on presentation and content quality</li>
                    <li>Word limit management techniques</li>
                    <li>Scoring enhancement strategies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="highlight-box success">
            <h4>🎁 Complimentary Offer</h4>
            <p>
              <strong>Optional foundation included FREE</strong> for all
              Foundation 365 and Integrated Pathfinder students!
            </p>
          </div>

          <div className="ideal-for">
            <h3>👥 Ideal For:</h3>
            <ul>
              <li>
                Aspirants who've completed GS foundation and need focused
                Optional preparation
              </li>
              <li>
                Those wanting to strengthen their Optional scoring potential
              </li>
              <li>Students seeking expert guidance in specialized subjects</li>
              <li>
                Candidates targeting high Optional scores for competitive edge
              </li>
            </ul>
          </div>

          <div className="highlight-box">
            <h4>📝 Important Note</h4>
            <p>
              <strong>Mains Mastery 365:</strong> Optional foundation in Year 1
              (complimentary), advanced Optional excellence in Year 2 (included
              in Year 2 fees).
            </p>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-content">
          <h3>Master Your Optional Subject</h3>
          <p>
            Excellence in Optional can be your game-changer in UPSC Mains with
            our specialized coaching.
          </p>
        </div>
      </div>
    </>
  );
};

// Interview Guidance Detail Page
const InterviewGuidance = ({ onNavigate }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>💼 Interview Guidance Programme</h1>
          <p>FREE Personality Development for Mains-Qualified Candidates</p>
        </div>
      </div>

      <div className="container">
        <button className="back-btn" onClick={() => onNavigate("hub")}>
          ← Back to All Courses
        </button>

        <div className="course-detail">
          <h2>
            <span className="course-icon">💼</span>
            INTERVIEW GUIDANCE PROGRAMME
          </h2>
          <p className="subtitle">FREE Personality Development</p>

          <div className="meta-info">
            <span className="meta-badge free">💯 COMPLETELY FREE</span>
            <span className="meta-badge">📅 Post-Mains Result Declaration</span>
          </div>

          <div className="highlight-box success">
            <h4>🎁 Absolutely FREE Program</h4>
            <p>
              <strong>Comprehensive Personality Test preparation</strong> at
              absolutely no cost for all Mains-qualified candidates!
            </p>
          </div>

          <div className="highlight-box">
            <h4>🎯 Program Overview</h4>
            <p>
              Comprehensive Personality Test preparation featuring expert mock
              interview panels conducted by{" "}
              <strong>serving IAS, IPS, IFS, and other civil servants</strong>,
              detailed DAF (Detailed Application Form) analysis, current affairs
              discussions, confidence-building sessions, body language training,
              and communication refinement.
            </p>
          </div>

          <h3>📚 What's Included</h3>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">🎤</span>
              <div className="feature-text">
                <strong>Mock Interviews</strong>
                Sessions with serving officers and retired bureaucrats
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📋</span>
              <div className="feature-text">
                <strong>DAF Analysis</strong>
                Personalized Detailed Application Form review
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📰</span>
              <div className="feature-text">
                <strong>Current Affairs</strong>
                Contemporary issues discourse and discussions
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💬</span>
              <div className="feature-text">
                <strong>Communication Training</strong>
                Diplomatic communication and refinement
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🧘</span>
              <div className="feature-text">
                <strong>Stress Management</strong>
                Techniques for handling interview pressure
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📹</span>
              <div className="feature-text">
                <strong>Video Sessions</strong>
                Recorded practice with detailed feedback
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">👥</span>
              <div className="feature-text">
                <strong>Group Discussions</strong>
                National and international affairs debates
              </div>
            </div>
          </div>

          <div className="accordion">
            <div className="accordion-item">
              <button
                className={`accordion-button ${
                  activeAccordion === 0 ? "active" : ""
                }`}
                onClick={() =>
                  setActiveAccordion(activeAccordion === 0 ? null : 0)
                }
              >
                <span>🎤 Mock Interview Process</span>
                <span className="accordion-icon">▼</span>
              </button>
              <div
                className={`accordion-content ${
                  activeAccordion === 0 ? "active" : ""
                }`}
              >
                <div className="accordion-body">
                  <h4>Expert Panel</h4>
                  <ul>
                    <li>
                      Mock interviews conducted by serving IAS, IPS, IFS
                      officers
                    </li>
                    <li>
                      Retired bureaucrats with extensive interview experience
                    </li>
                    <li>Diverse panel representing different backgrounds</li>
                    <li>Real UPSC interview simulation environment</li>
                  </ul>

                  <h4>Interview Structure</h4>
                  <ul>
                    <li>Multiple mock interview sessions</li>
                    <li>Video recording of all sessions</li>
                    <li>Detailed feedback after each session</li>
                    <li>Progressive improvement tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <button
                className={`accordion-button ${
                  activeAccordion === 1 ? "active" : ""
                }`}
                onClick={() =>
                  setActiveAccordion(activeAccordion === 1 ? null : 1)
                }
              >
                <span>📋 DAF Analysis & Preparation</span>
                <span className="accordion-icon">▼</span>
              </button>
              <div
                className={`accordion-content ${
                  activeAccordion === 1 ? "active" : ""
                }`}
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      Comprehensive analysis of your Detailed Application Form
                    </li>
                    <li>Identification of potential question areas</li>
                    <li>
                      Preparation strategy for hobby, interests, and academic
                      background
                    </li>
                    <li>
                      Work experience and achievement discussion preparation
                    </li>
                    <li>Optional subject integration in personality test</li>
                    <li>Home state and district specific preparation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <button
                className={`accordion-button ${
                  activeAccordion === 2 ? "active" : ""
                }`}
                onClick={() =>
                  setActiveAccordion(activeAccordion === 2 ? null : 2)
                }
              >
                <span>🌟 Personality Development</span>
                <span className="accordion-icon">▼</span>
              </button>
              <div
                className={`accordion-content ${
                  activeAccordion === 2 ? "active" : ""
                }`}
              >
                <div className="accordion-body">
                  <ul>
                    <li>Confidence-building sessions and exercises</li>
                    <li>Body language and non-verbal communication training</li>
                    <li>Voice modulation and articulation improvement</li>
                    <li>Diplomatic and balanced response development</li>
                    <li>Handling tricky and stress questions</li>
                    <li>Developing administrative temperament</li>
                    <li>Ethical dilemma discussion and reasoning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="ideal-for">
            <h3>👥 Ideal For:</h3>
            <ul>
              <li>
                UPSC Mains-qualified candidates preparing for Personality Test
              </li>
              <li>Aspirants targeting holistic personality development</li>
              <li>Those seeking expert guidance from serving officers</li>
              <li>Candidates wanting comprehensive interview preparation</li>
            </ul>
          </div>

          <div className="highlight-box success">
            <h4>💡 Why This Programme?</h4>
            <p>
              The final hurdle of your UPSC journey deserves expert guidance.
              Our <strong>FREE programme</strong> ensures you're completely
              prepared to face the interview board with confidence, clarity, and
              the right administrative temperament.
            </p>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-content">
          <h3>Final Step to Your IAS Dream</h3>
          <p>
            Our FREE Interview Guidance Programme ensures you're fully prepared
            for the final hurdle with expert mentorship.
          </p>
        </div>
      </div>
    </>
  );
};

// Early Foundation Path Detail Page
const EarlyFoundation = ({ onNavigate }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>🌱 Early Foundation Path</h1>
          <p>For School & College Students - Build Your Future Early</p>
        </div>
      </div>

      <div className="container">
        <button className="back-btn" onClick={() => onNavigate("hub")}>
          ← Back to All Courses
        </button>

        <div className="course-detail">
          <h2>
            <span className="course-icon">🌱</span>
            EARLY FOUNDATION PATH
          </h2>
          <p className="subtitle">For School & College Students</p>

          <div className="meta-info">
            <span className="meta-badge">⏱️ 1-Year to 4-Year Tracks</span>
            <span className="meta-badge price">
              💰 ₹5,000 to ₹8,000 per year
            </span>
          </div>

          <div className="highlight-box success">
            <h4>🎁 Risk-Free Investment</h4>
            <p>
              <strong>Complete fee 100% redeemable</strong> when you join our
              full-time Foundation 365 or Mains Mastery 365 programmes!
            </p>
          </div>

          <div className="highlight-box">
            <h4>🎯 Program Overview</h4>
            <p>
              <strong>Progressive UPSC readiness programs</strong> designed
              exclusively for school (Classes 11-12) and college students,
              systematically covering GS subjects, building NCERT foundations,
              developing analytical abilities, and nurturing administrative
              temperament—all while complementing regular academic studies.
            </p>
          </div>

          <h3>📚 What's Included Annually</h3>
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
                Weekly interactive doubt-solving sessions
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📖</span>
              <div className="feature-text">
                <strong>History Coverage</strong>
                Ancient, Medieval, Modern Indian History
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌍</span>
              <div className="feature-text">
                <strong>Geography</strong>
                Physical, Human, and Indian Geography
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🏛️</span>
              <div className="feature-text">
                <strong>Polity</strong>
                Constitution, Governance, Social Justice
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💰</span>
              <div className="feature-text">
                <strong>Economy</strong>
                Basic concepts and Economic Development
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌿</span>
              <div className="feature-text">
                <strong>Environment</strong>
                Ecology, Climate Change, Conservation
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌐</span>
              <div className="feature-text">
                <strong>International Relations</strong>
                Global affairs and diplomacy
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔬</span>
              <div className="feature-text">
                <strong>Science & Technology</strong>
                Modern developments and applications
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⚖️</span>
              <div className="feature-text">
                <strong>Ethics</strong>
                Integrity, aptitude, and values
              </div>
            </div>
          </div>

          <div className="accordion">
            <div className="accordion-item">
              <button
                className={`accordion-button ${
                  activeAccordion === 0 ? "active" : ""
                }`}
                onClick={() =>
                  setActiveAccordion(activeAccordion === 0 ? null : 0)
                }
              >
                <span>📖 Subjects Covered Annually</span>
                <span className="accordion-icon">▼</span>
              </button>
              <div
                className={`accordion-content ${
                  activeAccordion === 0 ? "active" : ""
                }`}
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <strong>History:</strong> Ancient, Medieval, Modern India
                      with focus on NCERT foundation
                    </li>
                    <li>
                      <strong>Geography:</strong> Physical, Human, Indian
                      Geography comprehensive coverage
                    </li>
                    <li>
                      <strong>Polity:</strong> Constitution, Governance
                      structure, Social Justice issues
                    </li>
                    <li>
                      <strong>Economy:</strong> Basic concepts, Indian Economic
                      Development
                    </li>
                    <li>
                      <strong>Environment:</strong> Ecology, Climate Change,
                      Biodiversity, Conservation
                    </li>
                    <li>
                      <strong>International Relations:</strong> Global affairs,
                      India's foreign policy, diplomacy
                    </li>
                    <li>
                      <strong>Science & Technology:</strong> Modern
                      developments, applications in governance
                    </li>
                    <li>
                      <strong>Ethics:</strong> Integrity, aptitude, values, and
                      ethical reasoning
                    </li>
                  </ul>
                  <p style="margin-top: 15px;">
                    <strong>Final Year Bonus:</strong> Answer writing and
                    current affairs integration workshops to prepare for
                    full-time coaching
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <button
                className={`accordion-button ${
                  activeAccordion === 1 ? "active" : ""
                }`}
                onClick={() =>
                  setActiveAccordion(activeAccordion === 1 ? null : 1)
                }
              >
                <span>🏛️ Active Campus Partnerships</span>
                <span className="accordion-icon">▼</span>
              </button>
              <div
                className={`accordion-content ${
                  activeAccordion === 1 ? "active" : ""
                }`}
              >
                <div className="accordion-body">
                  <h4>Our Partner Institutions:</h4>
                  <ul>
                    <li>Stella Maris College Chennai</li>
                    <li>Sathyabama University</li>
                    <li>Jeppiar Institute of Technology</li>
                    <li>Holy Cross College Trichy</li>
                    <li>St. Anne's College Madhavaram</li>
                    <li>Premier institutions across Tamil Nadu</li>
                  </ul>
                  <p style="margin-top: 15px;">
                    We conduct on-campus classes at these institutions, making
                    UPSC preparation accessible and convenient for students.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <button
                className={`accordion-button ${
                  activeAccordion === 2 ? "active" : ""
                }`}
                onClick={() =>
                  setActiveAccordion(activeAccordion === 2 ? null : 2)
                }
              >
                <span>🎯 Track Options Available</span>
                <span className="accordion-icon">▼</span>
              </button>
              <div
                className={`accordion-content ${
                  activeAccordion === 2 ? "active" : ""
                }`}
              >
                <div className="accordion-body">
                  <h4>Choose Your Track Based on Your Academic Timeline:</h4>

                  <p>
                    <strong>4-Year Track:</strong> For Engineering students
                    (B.E./B.Tech)
                  </p>
                  <p>
                    <strong>3-Year Track:</strong> For Arts & Science
                    undergraduates (B.A./B.Sc./B.Com)
                  </p>
                  <p>
                    <strong>2-Year Track:</strong> For Classes 11-12 students
                    planning early
                  </p>
                  <p>
                    <strong>1-Year Track:</strong> For final year students
                    wanting foundation before full-time coaching
                  </p>

                  <p style="margin-top: 15px;">
                    Each track is designed to align with your academic schedule,
                    ensuring UPSC preparation complements your regular studies
                    without overwhelming you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ideal-for">
            <h3>👥 Ideal For:</h3>
            <ul>
              <li>Visionary students planning early for UPSC civil services</li>
              <li>
                Engineering students looking for 4-year systematic preparation
                track
              </li>
              <li>
                Arts & Science undergraduates wanting 3-year comprehensive
                foundation
              </li>
              <li>
                Classes 11-12 students exploring civil services as career option
              </li>
              <li>
                College students wanting to build UPSC foundation alongside
                academics
              </li>
            </ul>
          </div>

          <div className="highlight-box success">
            <h4>💎 Special Advantage</h4>
            <p>
              <strong>100% Fee Redeemable:</strong> Your entire investment in
              Early Foundation Path will be fully credited when you join our
              Foundation 365 or Mains Mastery 365 full-time programmes. It's a
              completely risk-free way to start your UPSC journey early!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// Main App Component
const UpscCoursePart = () => {
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
      case "foundation":
        return <Foundation365 onNavigate={setCurrentPage} />;
      case "mastery":
        return <MainsMastery365 onNavigate={setCurrentPage} />;
      case "optional":
        return <OptionalExcellence onNavigate={setCurrentPage} />;
      case "interview":
        return <InterviewGuidance onNavigate={setCurrentPage} />;
      case "early":
        return <EarlyFoundation onNavigate={setCurrentPage} />;
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

export default UpscCoursePart;
