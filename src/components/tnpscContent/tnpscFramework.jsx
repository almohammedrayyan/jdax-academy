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
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
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
    font-size: 1.4em;
    opacity: 0.95;
    font-weight: 300;
    letter-spacing: 1px;
    margin-bottom: 15px;
}

.hero .subtitle {
    font-size: 1.1em;
    opacity: 0.9;
    font-style: italic;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 20px;
}

.intro-box {
    background: white;
    border-radius: 15px;
    padding: 40px;
    margin-bottom: 50px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.1);
    border-left: 8px solid #f5576c;
}

.intro-box h2 {
    color: #f5576c;
    font-size: 2em;
    margin-bottom: 20px;
}

.intro-box p {
    font-size: 1.15em;
    line-height: 1.8;
    color: #555;
}

.philosophy-highlight {
    background: linear-gradient(135deg, #fff8e1 0%, #ffe082 100%);
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
    border-left: 4px solid #ffa726;
}

.philosophy-highlight h3 {
    color: #e65100;
    font-size: 1.4em;
    margin-bottom: 10px;
}

.philosophy-highlight p {
    color: #666;
    font-size: 1.05em;
    margin: 0;
}

/* SECTION HEADERS */
.section-header {
    background: white;
    border-radius: 15px;
    padding: 30px;
    margin: 50px 0 30px 0;
    box-shadow: 0 8px 30px rgba(0,0,0,0.1);
    border-left: 8px solid #f5576c;
}

.section-header h2 {
    font-size: 2.2em;
    color: #f5576c;
    margin-bottom: 10px;
}

.section-header p {
    font-size: 1.1em;
    color: #666;
    line-height: 1.7;
}

/* INITIATIVE TILES */
.initiatives-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin: 30px 0 60px 0;
}

.initiative-tile {
    background: white;
    border-radius: 15px;
    padding: 35px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    border-left: 6px solid #f5576c;
    position: relative;
    overflow: hidden;
}

.initiative-tile::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(240, 147, 251, 0.05) 0%, rgba(245, 87, 108, 0.05) 100%);
    opacity: 0;
    transition: all 0.3s ease;
}

.initiative-tile:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(245, 87, 108, 0.2);
}

.initiative-tile:hover::before {
    opacity: 1;
}

.tile-number {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
    background: linear-gradient(135deg, #f093fb, #f5576c);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.2em;
}

.tile-icon {
    font-size: 3em;
    margin-bottom: 15px;
    display: block;
    position: relative;
    z-index: 1;
}

.tile-title {
    font-size: 1.5em;
    color: #2c3e50;
    margin-bottom: 10px;
    font-weight: 600;
    position: relative;
    z-index: 1;
}

.tile-subtitle {
    font-size: 0.95em;
    color: #f5576c;
    margin-bottom: 15px;
    font-style: italic;
    position: relative;
    z-index: 1;
}

.tile-description {
    color: #666;
    line-height: 1.7;
    margin-bottom: 20px;
    font-size: 0.95em;
    position: relative;
    z-index: 1;
}

.tile-features {
    background: #f8f9fa;
    border-radius: 10px;
    padding: 15px;
    margin: 15px 0;
    position: relative;
    z-index: 1;
}

.tile-features h4 {
    color: #f5576c;
    font-size: 1em;
    margin-bottom: 10px;
}

.tile-features ul {
    list-style: none;
    padding: 0;
}

.tile-features li {
    padding: 5px 0;
    padding-left: 20px;
    position: relative;
    font-size: 0.9em;
    color: #555;
}

.tile-features li:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #f5576c;
    font-weight: bold;
}

.tile-badge {
    display: inline-block;
    background: linear-gradient(135deg, #f093fb, #f5576c);
    color: white;
    padding: 6px 15px;
    border-radius: 20px;
    font-size: 0.75em;
    font-weight: 700;
    margin-bottom: 15px;
    position: relative;
    z-index: 1;
}

/* FEATURED MENTORSHIP SECTION */
.featured-mentorship {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    padding: 50px;
    margin: 40px 0;
    box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
    position: relative;
    overflow: hidden;
    color: white;
}

.featured-mentorship::before {
    content: '⭐';
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 5em;
    opacity: 0.2;
    animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.2; }
    50% { transform: scale(1.1); opacity: 0.3; }
}

.featured-badge {
    display: inline-block;
    background: white;
    color: #667eea;
    padding: 10px 25px;
    border-radius: 30px;
    font-weight: 700;
    font-size: 0.9em;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.featured-mentorship h2 {
    font-size: 2.5em;
    margin-bottom: 15px;
    color: white;
    position: relative;
    z-index: 1;
}

.featured-mentorship .tagline-text {
    font-size: 1.3em;
    margin-bottom: 25px;
    opacity: 0.95;
    position: relative;
    z-index: 1;
}

.featured-description {
    font-size: 1.1em;
    line-height: 1.8;
    margin-bottom: 30px;
    position: relative;
    z-index: 1;
}

.mentorship-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 25px 0;
    position: relative;
    z-index: 1;
}

.mentorship-feature {
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(10px);
    padding: 25px;
    border-radius: 12px;
    transition: all 0.3s ease;
}

.mentorship-feature:hover {
    background: rgba(255,255,255,0.25);
    transform: scale(1.03);
}

.mentorship-feature h4 {
    color: white;
    margin-bottom: 10px;
    font-size: 1.1em;
}

.mentorship-feature p {
    color: rgba(255,255,255,0.9);
    font-size: 0.95em;
    margin: 0;
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

.footer {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
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
    color: #f5576c;
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
    background: linear-gradient(135deg, #f093fb, #f5576c);
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
    box-shadow: 0 5px 20px rgba(245, 87, 108, 0.4);
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
    
    .initiatives-grid {
        grid-template-columns: 1fr;
    }
    
    .mentorship-features {
        grid-template-columns: 1fr;
    }
}
`;

const TnpscFramework = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const leadershipInitiatives = [
    {
      id: 1,
      icon: "🎯",
      title: "Path to Service: TNPSC Orientation Series",
      subtitle: "Foundation for Future Civil Servants",
      badge: "FOUNDATIONAL",
      description:
        "An introductory foundation series designed to familiarize aspirants with the TNPSC examination process, service hierarchy, preparation approaches, and the ethical mindset of a public servant.",
      features: [
        "Complete TNPSC examination roadmap",
        "Service hierarchy and career pathways",
        "Strategic preparation approaches",
        "Ethical foundation for public service",
        "Aspirant-to-officer mindset transformation",
      ],
    },
    {
      id: 2,
      icon: "👥",
      title: "Administrator's Insight Sessions (AIS)",
      subtitle: "Learn from Serving Officers",
      badge: "EXPERIENTIAL",
      description:
        "Interactive dialogues with serving and retired state officers who share real-world experiences, departmental challenges, and administrative stories that inspire aspirants to think like future civil servants.",
      features: [
        "Direct interaction with IAS, IPS, IFS officers",
        "Real-world administrative challenges",
        "Departmental functioning insights",
        "Decision-making case studies",
        "Inspiration from actual service experiences",
      ],
    },
    {
      id: 3,
      icon: "💬",
      title: "Policy Dialogue Forum",
      subtitle: "Student-Led Governance Discussions",
      badge: "COLLABORATIVE",
      description:
        "A student-led discussion series on governance, development, and current affairs in Tamil Nadu—sharpening articulation, reasoning, and policy understanding through peer learning.",
      features: [
        "Tamil Nadu governance deep-dives",
        "Current affairs policy analysis",
        "Peer-to-peer learning environment",
        "Articulation and reasoning practice",
        "Multi-perspective policy understanding",
      ],
    },
  ];

  const prelimsInitiatives = [
    {
      id: 1,
      icon: "📅",
      title: "Daily Practice Module (DPM)",
      subtitle: "Consistency Builds Excellence",
      badge: "DAILY PRACTICE",
      description:
        "A consistent testing mechanism featuring 20–25 questions daily with detailed explanations, helping aspirants strengthen conceptual memory and improve question-solving speed systematically.",
      features: [
        "20-25 questions daily with explanations",
        "Conceptual memory strengthening",
        "Speed and accuracy development",
        "Integrated across all TNPSC programmes",
        "Cumulative progress tracking",
      ],
      integration:
        "Integrated In: All Group 1, Group 2/2A, and Group 4 programmes",
    },
    {
      id: 2,
      icon: "📊",
      title: "Weekly Prelims Test Series (WPTS)",
      subtitle: "Complete Mock Test Ecosystem",
      badge: "COMPREHENSIVE",
      description:
        "A complete mock test ecosystem simulating real exam conditions. Includes pre-test revision classes, post-test analysis, and doubt-clearing sessions for holistic preparation.",
      features: [
        "Subtopic-wise question sequencing",
        "Integrated current affairs with static subjects",
        "Tamil Nadu-specific governance coverage",
        "Pre-test revision + Post-test analysis",
        "Doubt-clearing sessions after every test",
      ],
    },
  ];

  const mainsInitiatives = [
    {
      id: 1,
      icon: "✍️",
      title: "Daily Answer Writing Programme (DAWP)",
      subtitle: "Transform Knowledge into Marks",
      badge: "DAILY WRITING",
      description:
        "A comprehensive writing improvement initiative that trains aspirants in content precision, structured arguments, and impactful conclusions—bridging the gap between knowledge and marks.",
      features: [
        "Directive word training (Explain, Evaluate, Discuss)",
        "Personalized evaluator feedback",
        "Content precision techniques",
        "Structured argument development",
        "Impactful conclusion strategies",
      ],
    },
    {
      id: 2,
      icon: "📝",
      title: "Mains Simulation",
      subtitle: "Real Exam Experience",
      badge: "SIMULATION",
      description:
        "Mains mock tests replicating TNPSC s evaluation style, followed by performance discussions and improvement mentoring to ensure exam readiness.",
      features: [
        "TNPSC evaluation style replication",
        "Full-length Mains mock tests",
        "Performance analysis discussions",
        "Improvement mentoring sessions",
        "Examiner perspective insights",
      ],
    },
  ];

  return (
    <>
      <style>{styles}</style>

      <div className="hero" style={{ background: "#431aa0" }}>
        <div className="hero-content">
          <h1>JDAX's TNPSC Learning Framework</h1>
          <p className="tagline">Beyond Coaching. Towards Transformation.</p>
          <p className="subtitle">"Learn. Apply. Excel."</p>
        </div>
      </div>

      <div className="container">
        <div className="intro-box">
          <h2>Our Transformative Philosophy</h2>
          <p>
            Every programme at JDAX Academy is designed around a single
            philosophy—<strong>"Learn. Apply. Excel."</strong>
            We focus not only on subject mastery but also on analytical
            reasoning, communication, and the mindset required for public
            service.
          </p>

          <div className="philosophy-highlight">
            <h3>What Makes JDAX Different?</h3>
            <p>
              We don't just prepare you for examinations—we transform you into
              the kind of civil servant Tamil Nadu needs. Through leadership
              development, performance enhancement, and personalized mentorship,
              we ensure you're not just exam-ready but service-ready.
            </p>
          </div>
        </div>

        {/* SECTION I: LEADERSHIP DEVELOPMENT INITIATIVES */}
        <div className="section-header">
          <h2>I. Leadership Development Initiatives</h2>
          <p>
            Building the administrative mindset and ethical foundation essential
            for public service excellence. These initiatives develop critical
            thinking, policy understanding, and the leadership qualities that
            distinguish great civil servants.
          </p>
        </div>

        <div className="initiatives-grid">
          {leadershipInitiatives.map((initiative) => (
            <div key={initiative.id} className="initiative-tile">
              <div className="tile-number">{initiative.id}</div>
              <span className="tile-badge">{initiative.badge}</span>
              <span className="tile-icon">{initiative.icon}</span>
              <h3 className="tile-title">{initiative.title}</h3>
              <p className="tile-subtitle">{initiative.subtitle}</p>
              <p className="tile-description">{initiative.description}</p>
              <div className="tile-features">
                <h4>Key Components:</h4>
                <ul>
                  {initiative.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION II: PRELIMS PERFORMANCE INITIATIVES */}
        <div className="section-header">
          <h2>II. Prelims Performance Initiatives</h2>
          <p>
            Systematic practice mechanisms that build speed, accuracy, and
            consistency—the three pillars of Prelims success. Daily practice
            combined with weekly comprehensive testing ensures complete exam
            readiness.
          </p>
        </div>

        <div className="initiatives-grid">
          {prelimsInitiatives.map((initiative) => (
            <div key={initiative.id} className="initiative-tile">
              <div className="tile-number">{initiative.id}</div>
              <span className="tile-badge">{initiative.badge}</span>
              <span className="tile-icon">{initiative.icon}</span>
              <h3 className="tile-title">{initiative.title}</h3>
              <p className="tile-subtitle">{initiative.subtitle}</p>
              <p className="tile-description">{initiative.description}</p>
              {initiative.integration && (
                <div
                  className="info-box"
                  style={{
                    marginTop: "15px",
                    padding: "12px",
                    fontSize: "0.9em",
                  }}
                >
                  <p style={{ margin: 0, color: "#0d47a1" }}>
                    <strong>{initiative.integration}</strong>
                  </p>
                </div>
              )}
              <div className="tile-features">
                <h4>Special Features:</h4>
                <ul>
                  {initiative.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION III: MAINS EXCELLENCE INITIATIVES */}
        <div className="section-header">
          <h2>III. Mains Excellence Initiatives</h2>
          <p>
            Bridging the critical gap between knowledge and marks through
            structured answer writing practice and authentic exam simulation.
            These initiatives ensure your understanding translates into
            high-scoring answers.
          </p>
        </div>

        <div className="initiatives-grid">
          {mainsInitiatives.map((initiative) => (
            <div key={initiative.id} className="initiative-tile">
              <div className="tile-number">{initiative.id}</div>
              <span className="tile-badge">{initiative.badge}</span>
              <span className="tile-icon">{initiative.icon}</span>
              <h3 className="tile-title">{initiative.title}</h3>
              <p className="tile-subtitle">{initiative.subtitle}</p>
              <p className="tile-description">{initiative.description}</p>
              <div className="tile-features">
                <h4>Components:</h4>
                <ul>
                  {initiative.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION IV: PERSONALIZED MENTORSHIP SYSTEM - FEATURED */}
        <div className="section-header">
          <h2>IV. Personalized Mentorship System</h2>
          <p>
            The cornerstone of JDAX's approach—individual attention that ensures
            accountability, motivation, and measurable progress throughout your
            preparation journey.
          </p>
        </div>

        <div className="featured-mentorship">
          <span className="featured-badge">⭐ PERSONALIZED ATTENTION</span>
          <h2>Personal Mentorship Track</h2>
          <p className="tagline-text">
            Every Aspirant Receives Individual Attention
          </p>
          <p className="featured-description">
            At JDAX, we believe that personalized guidance is the key to
            unlocking an aspirant's full potential. Our Personal Mentorship
            Track ensures that every student receives customized support,
            regular monitoring, and strategic guidance throughout their
            preparation journey.
          </p>

          <div className="mentorship-features">
            <div className="mentorship-feature">
              <h4>📋 Study Plan Design & Monitoring</h4>
              <p>
                Customized study schedules based on your strengths, weaknesses,
                and time availability. Regular monitoring ensures you stay on
                track and adjust strategies as needed.
              </p>
            </div>

            <div className="mentorship-feature">
              <h4>⏰ Time Management & Exam Strategy</h4>
              <p>
                Learn to optimize your preparation time, prioritize topics
                strategically, and develop exam-day strategies that maximize
                your scoring potential.
              </p>
            </div>

            <div className="mentorship-feature">
              <h4>📊 Regular Review Meetings</h4>
              <p>
                Weekly or bi-weekly one-on-one sessions to review progress,
                discuss challenges, clarify doubts, and refine your preparation
                approach based on performance data.
              </p>
            </div>

            <div className="mentorship-feature">
              <h4>🧘 Stress & Mindset Management</h4>
              <p>
                Preparation is as much mental as it is academic. We provide
                guidance on managing stress, maintaining motivation, and
                developing the resilience needed for long-term success.
              </p>
            </div>
          </div>

          <div className="success-box" style={{ marginTop: "30px" }}>
            <h4 style={{ color: "black", marginBottom: "15px" }}>
              Why Mentorship Matters
            </h4>
            <ul style={{ color: "rgba(8, 7, 7, 0.95)", lineHeight: "1.8" }}>
              <li>
                <strong>Accountability:</strong> Regular check-ins keep you
                consistent and focused
              </li>
              <li>
                <strong>Customization:</strong> Strategies tailored to your
                unique needs and circumstances
              </li>
              <li>
                <strong>Course Correction:</strong> Early identification and
                resolution of preparation gaps
              </li>
              <li>
                <strong>Motivation:</strong> Continuous encouragement during
                challenging phases
              </li>
              <li>
                <strong>Measurable Progress:</strong> Data-driven insights into
                your improvement trajectory
              </li>
            </ul>
          </div>
        </div>

        <div className="highlight-box" style={{ marginTop: "40px" }}>
          <h4>The JDAX Advantage: Integrated Framework</h4>
          <p>
            Our Learning Framework isn't a collection of disconnected
            initiatives—it's a carefully designed ecosystem where{" "}
            <strong>Leadership Development</strong> builds your mindset,{" "}
            <strong>Performance Initiatives</strong> sharpen your skills, and{" "}
            <strong>Personalized Mentorship</strong> ensures it all comes
            together for your unique journey to success.
          </p>
          <p style={{ marginTop: "15px" }}>
            <strong>This is what makes JDAX different:</strong> We don't just
            teach you what to study—we transform how you think, how you
            practice, and how you approach your entire civil services journey.
          </p>
        </div>
      </div>

      {/* <div className="footer">
        <div className="footer-content">
          <h3>Experience the JDAX Learning Framework</h3>
          <p>
            Beyond coaching. Beyond preparation. Towards transformation and
            excellence in Tamil Nadu civil services.
          </p>
          <button className="cta-button">Join JDAX Academy</button>
        </div>
      </div> */}

      <button
        className={`scroll-top ${showScrollTop ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        ↑
      </button>
    </>
  );
};

export default TnpscFramework;
