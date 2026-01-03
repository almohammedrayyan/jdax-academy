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

/* SECTION HEADERS */
.section-header {
    background: white;
    border-radius: 15px;
    padding: 30px;
    margin: 50px 0 30px 0;
    box-shadow: 0 8px 30px rgba(0,0,0,0.1);
    border-left: 8px solid #667eea;
}

.section-header h2 {
    font-size: 2.2em;
    color: #667eea;
    margin-bottom: 10px;
}

.section-header p {
    font-size: 1.1em;
    color: #666;
    line-height: 1.7;
}

/* INITIATIVE TILES ON HUB */
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
    border-left: 6px solid #667eea;
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
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
    opacity: 0;
    transition: all 0.3s ease;
}

.initiative-tile:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.2);
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
    background: linear-gradient(135deg, #667eea, #764ba2);
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
    font-size: 1.6em;
    color: #2c3e50;
    margin-bottom: 10px;
    font-weight: 600;
    position: relative;
    z-index: 1;
}

.tile-subtitle {
    font-size: 1.05em;
    color: #667eea;
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

.tile-highlights {
    background: #f8f9fa;
    border-radius: 10px;
    padding: 15px;
    margin: 15px 0;
    position: relative;
    z-index: 1;
}

.tile-highlights h4 {
    color: #667eea;
    font-size: 1em;
    margin-bottom: 10px;
}

.tile-highlights ul {
    list-style: none;
    padding: 0;
}

.tile-highlights li {
    padding: 5px 0;
    padding-left: 20px;
    position: relative;
    font-size: 0.9em;
    color: #555;
}

.tile-highlights li:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #667eea;
    font-weight: bold;
}

/* FEATURED INTERVIEW TILE */
.featured-interview {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    border-radius: 20px;
    padding: 50px;
    margin: 40px 0;
    box-shadow: 0 20px 60px rgba(245, 87, 108, 0.3);
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
}

.featured-interview::before {
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

.featured-interview:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 70px rgba(245, 87, 108, 0.4);
}

.featured-badge {
    display: inline-block;
    background: white;
    color: #f5576c;
    padding: 10px 25px;
    border-radius: 30px;
    font-weight: 700;
    font-size: 0.9em;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.featured-interview h2 {
    font-size: 2.8em;
    color: white;
    margin-bottom: 15px;
    position: relative;
    z-index: 1;
}

.featured-interview .tagline-text {
    font-size: 1.4em;
    color: rgba(255,255,255,0.95);
    margin-bottom: 25px;
    position: relative;
    z-index: 1;
}

.featured-description {
    font-size: 1.1em;
    color: white;
    line-height: 1.8;
    margin-bottom: 30px;
    position: relative;
    z-index: 1;
}

.pillars-preview {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 25px 0;
    position: relative;
    z-index: 1;
}

.pillar-mini {
    background: rgba(255,255,255,0.2);
    backdrop-filter: blur(10px);
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    transition: all 0.3s ease;
}

.pillar-mini:hover {
    background: rgba(255,255,255,0.3);
    transform: scale(1.05);
}

.pillar-mini h4 {
    color: white;
    margin-bottom: 8px;
    font-size: 1.1em;
}

.pillar-mini p {
    color: rgba(255,255,255,0.9);
    font-size: 0.9em;
    margin: 0;
}

.explore-interview-btn {
    display: inline-block;
    background: white;
    color: #f5576c;
    padding: 18px 45px;
    border-radius: 30px;
    font-weight: 700;
    font-size: 1.2em;
    margin-top: 20px;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    position: relative;
    z-index: 1;
}

.explore-interview-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(255,255,255,0.4);
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

.pillars-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin: 30px 0;
}

.pillar-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
    transition: all 0.3s ease;
}

.pillar-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
}

.pillar-card h3 {
    color: white;
    margin-bottom: 15px;
    font-size: 1.5em;
}

.pillar-card p {
    color: rgba(255,255,255,0.95);
    line-height: 1.7;
    margin: 0;
}

.journey-flow {
    background: #f8f9fa;
    border-radius: 15px;
    padding: 40px;
    margin: 30px 0;
    text-align: center;
}

.journey-steps {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 30px 0;
}

.journey-step {
    flex: 1;
    min-width: 150px;
    margin: 10px;
}

.step-icon {
    font-size: 3em;
    margin-bottom: 10px;
}

.step-title {
    font-size: 1.2em;
    font-weight: 600;
    color: #667eea;
    margin-bottom: 5px;
}

.step-subtitle {
    font-size: 0.9em;
    color: #666;
}

.arrow {
    font-size: 2em;
    color: #667eea;
    margin: 0 10px;
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
    
    .initiatives-grid {
        grid-template-columns: 1fr;
    }
    
    .pillars-preview {
        grid-template-columns: 1fr;
    }
    
    .pillars-grid {
        grid-template-columns: 1fr;
    }
    
    .journey-steps {
        flex-direction: column;
    }
    
    .arrow {
        transform: rotate(90deg);
    }
}
`;

// Hub Component
const Hub = ({ onNavigate }) => {
  const prelimsInitiatives = [
    {
      id: 1,
      icon: "📈",
      title: "Increments to Invincible",
      subtitle: "Daily UPSC Prelims Mastery Initiative",
      description:
        "Embrace the KAIZEN philosophy - 1% daily improvement leading to 37x growth. 30 questions daily building invincible preparation through consistent incremental progress.",
      highlights: [
        "30 questions daily (Easy-Medium-Hard)",
        "UPSC PYQ-aligned patterns",
        "Detailed explanations",
        "Zero repetition policy",
        "Sustainable excellence",
      ],
    },
    {
      id: 2,
      icon: "📚",
      title: "Basic to Brilliance (B2B)",
      subtitle: "NCERT Foundation Test Series",
      description:
        "Transform NCERT fundamentals into UPSC excellence. 2000+ questions elevating basic knowledge to prelims-level analytical thinking with comprehensive coverage.",
      highlights: [
        "Complete NCERT coverage",
        "2000+ UPSC-pattern questions",
        "Progressive learning model",
        "PYQ integration",
        "Detailed explanations",
      ],
    },
    {
      id: 3,
      icon: "🎯",
      title: "Rise to Excel",
      subtitle: "Ultimate Prelims Test Series",
      description:
        "Master the syllabus, build confidence, ace the exam. Strategic subject orientation, test discussions, PYQ analysis, and 5 full offline mocks.",
      highlights: [
        "Subject orientation videos",
        "Test orientation classes",
        "PYQ integration",
        "Comprehensive discussions",
        "5 offline mock tests",
      ],
    },
  ];

  const mainsInitiatives = [
    {
      id: 1,
      icon: "🔄",
      title: "Integrate to Impact (3I)",
      subtitle: "360° Learning Methodology",
      description:
        "One topic, multiple dimensions. Integrate current affairs, analytical thinking, and communication through editorials, prelims questions, mains answers, essays, and ethics.",
      highlights: [
        "Current affairs editorials",
        "Prelims integration",
        "Mains answer frameworks",
        "Essay techniques",
        "Ethics case studies",
      ],
    },
    {
      id: 2,
      icon: "✍️",
      title: "Master the Mains",
      subtitle: "Answer Writing Workshop",
      description:
        "Crack the 90-second examiner psychology. Master IMPACT introductions, PEEL body, directive words, data integration, and RISE conclusions.",
      highlights: [
        "90-second psychology",
        "IMPACT formula",
        "PEEL & DIPLOMAT methods",
        "Directive word mastery",
        "RISE conclusion framework",
      ],
    },
    {
      id: 3,
      icon: "📝",
      title: "Emulate to Assimilate",
      subtitle: "Comprehensive Answer Practice System",
      description:
        "Three-phase transformation: Daily PYQ practice → Syllabus coverage → Mock mains tests. Systematic journey from emulation to independent excellence.",
      highlights: [
        "Daily PYQ practice",
        "Deep syllabus coverage",
        "Advanced techniques",
        "Full-length mock tests",
        "Performance analytics",
      ],
    },
  ];

  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>UPSC Pedagogy & Delivery Initiatives</h1>
          <p className="tagline">
            Comprehensive Excellence Across Prelims, Mains & Interview
          </p>
        </div>
      </div>

      <div className="container">
        {/* SECTION I: PRELIMS MASTERY */}
        <div className="section-header">
          <h2>I. PRELIMS MASTERY INITIATIVES</h2>
          <p>
            Building invincible prelims preparation through daily discipline,
            NCERT excellence, and comprehensive test practice.
          </p>
        </div>

        <div className="initiatives-grid">
          {prelimsInitiatives.map((initiative) => (
            <div key={initiative.id} className="initiative-tile">
              <div className="tile-number">{initiative.id}</div>
              <span className="tile-icon">{initiative.icon}</span>
              <h3 className="tile-title">{initiative.title}</h3>
              <p className="tile-subtitle">{initiative.subtitle}</p>
              <p className="tile-description">{initiative.description}</p>
              <div className="tile-highlights">
                <h4>Key Features:</h4>
                <ul>
                  {initiative.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION II: MAINS EXCELLENCE */}
        <div className="section-header">
          <h2>II. MAINS EXCELLENCE INITIATIVES</h2>
          <p>
            Transforming knowledge into high-scoring answers through
            integration, strategic frameworks, and systematic practice.
          </p>
        </div>

        <div className="initiatives-grid">
          {mainsInitiatives.map((initiative) => (
            <div key={initiative.id} className="initiative-tile">
              <div className="tile-number">{initiative.id}</div>
              <span className="tile-icon">{initiative.icon}</span>
              <h3 className="tile-title">{initiative.title}</h3>
              <p className="tile-subtitle">{initiative.subtitle}</p>
              <p className="tile-description">{initiative.description}</p>
              <div className="tile-highlights">
                <h4>Key Features:</h4>
                <ul>
                  {initiative.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION III: INTERVIEW TRANSFORMATION - FEATURED */}
        <div className="section-header">
          <h2>III. INTERVIEW TRANSFORMATION INITIATIVE</h2>
          <p>
            Complete personality transformation journey preparing you for the
            final frontier of UPSC examination.
          </p>
        </div>

        <div
          className="featured-interview"
          onClick={() => onNavigate("interview")}
        >
          <span className="featured-badge">🎯 FINAL FRONTIER</span>
          <h2>Reflect. Transform. Conquer.</h2>
          <p className="tagline-text">
            Your Personality Transformation Journey to UPSC Success
          </p>
          <p className="featured-description">
            Comprehensive Personality Test preparation featuring expert mock
            interview panels conducted by serving IAS, IPS, IFS, and other civil
            servants. Complete transformation through our proven four-pillar
            approach.
          </p>

          <div className="pillars-preview">
            <div className="pillar-mini">
              <h4>1. Mirror Within</h4>
              <p>Reflect on your identity</p>
            </div>
            <div className="pillar-mini">
              <h4>2. Craft Your Opinion</h4>
              <p>Current affairs mastery</p>
            </div>
            <div className="pillar-mini">
              <h4>3. Articulate with Diplomacy</h4>
              <p>Transform communication</p>
            </div>
            <div className="pillar-mini">
              <h4>4. Face the Board</h4>
              <p>Conquer with excellence</p>
            </div>
          </div>

          <button className="explore-interview-btn">
            Explore Complete Journey →
          </button>
        </div>
      </div>

      {/* <div className="footer">
                <div className="footer-content">
                    <h3>Master Every Stage of UPSC</h3>
                    <p>From Prelims mastery through Mains excellence to Interview transformation - comprehensive preparation for complete success.</p>
                    <button className="cta-button">Start Your Journey</button>
                </div>
            </div> */}
    </>
  );
};

// Interview Transformation Detail Page
const InterviewTransformation = ({ onNavigate }) => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>🎯 Reflect. Transform. Conquer.</h1>
          <p className="tagline">
            Your Personality Transformation Journey to UPSC Success
          </p>
        </div>
      </div>

      <div className="container">
        <button className="back-btn" onClick={() => onNavigate("hub")}>
          ← Back to All Initiatives
        </button>

        <div className="detail-content">
          <h2>JDAX UPSC Mock Interview Programme</h2>
          <p>
            A comprehensive personality transformation initiative designed to
            prepare aspirants for the final frontier of the UPSC examination.
            Through our four-pillar approach, we guide candidates from
            self-discovery to interview excellence, ensuring they face the board
            with confidence and competence.
          </p>

          <div className="success-box">
            <h4>Programme Overview</h4>
            <p>
              JDAX UPSC Mock Interview is a comprehensive personality
              transformation initiative designed to prepare aspirants for the
              final frontier of the UPSC examination. Through our four-pillar
              approach, we guide candidates from self-discovery to interview
              excellence, ensuring they face the board with confidence and
              competence.
            </p>
          </div>

          <h3>The Four Pillars of Transformation</h3>

          <div className="pillars-grid">
            <div className="pillar-card">
              <h3>1. Mirror Within</h3>
              <p>
                <strong>Reflect on Your Identity</strong>
                <br />
                <br />
                Deep self-awareness and identity exploration. Understand your
                strengths, values, experiences, and what makes you unique.
                Comprehensive analysis of your Detailed Application Form (DAF)
                to identify key talking points, potential questions, and areas
                requiring preparation.
              </p>
            </div>

            <div className="pillar-card">
              <h3>2. Craft Your Opinion</h3>
              <p>
                <strong>Current Affairs & Socio-Political Discourse</strong>
                <br />
                <br />
                Develop informed, balanced opinions on contemporary issues.
                Master current affairs across national and international
                domains. Learn to analyze policies, understand multiple
                perspectives, and articulate well-reasoned positions on complex
                socio-political matters.
              </p>
            </div>

            <div className="pillar-card">
              <h3>3. Articulate with Diplomacy</h3>
              <p>
                <strong>Transform Your Communication</strong>
                <br />
                <br />
                Master the art of diplomatic communication - expressing strong
                opinions while respecting alternative viewpoints. Body language
                training, voice modulation, pause management, and confidence
                building. Learn to communicate with clarity, empathy, and
                administrative maturity.
              </p>
            </div>

            <div className="pillar-card">
              <h3>4. Face the Board</h3>
              <p>
                <strong>Conquer with Excellence</strong>
                <br />
                <br />
                Real-time UPSC interview environment with panels of serving IAS,
                IPS, IFS officers. Experience actual interview pressure, receive
                personalized feedback, refine your approach, and build the
                confidence to face the board with excellence.
              </p>
            </div>
          </div>

          <h3>Journey Progression: Reflect → Transform → Conquer</h3>

          <div className="journey-flow">
            <div className="journey-steps">
              <div className="journey-step">
                <div className="step-icon">🪞</div>
                <div className="step-title">REFLECT</div>
                <div className="step-subtitle">
                  Discover Your Authentic Self
                </div>
              </div>

              <div className="arrow">→</div>

              <div className="journey-step">
                <div className="step-icon">🔄</div>
                <div className="step-title">TRANSFORM</div>
                <div className="step-subtitle">
                  Develop Diplomatic Communication
                </div>
              </div>

              <div className="arrow">→</div>

              <div className="journey-step">
                <div className="step-icon">🏆</div>
                <div className="step-title">CONQUER</div>
                <div className="step-subtitle">
                  Face the Board with Excellence
                </div>
              </div>
            </div>
          </div>

          <h3>Programme Highlights</h3>

          <div className="info-box">
            <h4>What Makes Our Programme Unique</h4>
            <ul>
              <li>
                <strong>Real-time UPSC Interview Environment:</strong>{" "}
                Experience authentic interview conditions that mirror the actual
                UPSC board
              </li>
              <li>
                <strong>Expert Mock Interview Panels:</strong> Conducted by
                serving IAS, IPS, IFS, and other civil servants who understand
                the examination from the inside
              </li>
              <li>
                <strong>Personalized Feedback and Mentoring:</strong> Detailed
                assessment of your performance with specific actionable
                improvements
              </li>
              <li>
                <strong>Comprehensive DAF Analysis:</strong> Deep dive into your
                background, identifying strengths to highlight and potential
                questions to prepare
              </li>
              <li>
                <strong>Current Affairs Mastery:</strong> Structured approach to
                developing informed opinions on contemporary national and global
                issues
              </li>
              <li>
                <strong>Diplomatic Communication Training:</strong> Learn to
                express views with administrative maturity, balancing conviction
                with respect
              </li>
              <li>
                <strong>Body Language & Confidence Building:</strong>{" "}
                Professional training in non-verbal communication, posture, eye
                contact, and presence
              </li>
              <li>
                <strong>Complete Personality Assessment:</strong> 360-degree
                evaluation of your readiness for the civil services interview
              </li>
            </ul>
          </div>

          <h3>Comprehensive Preparation Coverage</h3>

          <div className="highlight-box">
            <h4>Your Complete Interview Preparation Journey</h4>
            <ul>
              <li>
                <strong>DAF (Detailed Application Form) Analysis:</strong>{" "}
                Thorough examination of your educational background, work
                experience, hobbies, achievements, and other DAF entries to
                anticipate questions
              </li>
              <li>
                <strong>Current Affairs Discussions:</strong> Regular sessions
                covering national policies, international relations, economic
                developments, social issues, and governance matters
              </li>
              <li>
                <strong>Opinion Building Sessions:</strong> Structured approach
                to developing balanced, informed opinions on contentious and
                complex issues
              </li>
              <li>
                <strong>Mock Interview Boards:</strong> Multiple rounds with
                different panel compositions to experience varied questioning
                styles and board dynamics
              </li>
              <li>
                <strong>Feedback and Improvement Cycles:</strong> Detailed
                performance analysis after each mock, identifying specific areas
                for enhancement
              </li>
              <li>
                <strong>Communication Refinement:</strong> Voice training,
                articulation practice, pause management, and effective listening
                skills
              </li>
              <li>
                <strong>Stress Management Techniques:</strong> Methods to
                maintain composure under pressure and handle unexpected or
                provocative questions
              </li>
              <li>
                <strong>Administrative Perspective Development:</strong>{" "}
                Training to think from a civil servant's viewpoint - balancing
                multiple stakeholder interests
              </li>
            </ul>
          </div>

          <h3>Who Should Enroll?</h3>

          <div className="success-box">
            <h4>This Programme is Designed For:</h4>
            <ul>
              <li>
                UPSC aspirants who have cleared Mains and are preparing for the
                Personality Test
              </li>
              <li>
                Candidates seeking to transform their communication style and
                develop diplomatic articulation
              </li>
              <li>
                Aspirants looking for comprehensive preparation beyond just
                question-answer practice
              </li>
              <li>
                Those who want exposure to real civil servants and understand
                their perspective
              </li>
              <li>
                Candidates committed to complete personality transformation, not
                just interview preparation
              </li>
            </ul>
          </div>

          <h3>Expected Outcomes</h3>

          <div className="info-box">
            <h4>By the End of This Programme, You Will:</h4>
            <ul>
              <li>
                ✅ Possess deep self-awareness and the ability to present your
                authentic self confidently
              </li>
              <li>
                ✅ Have well-informed, balanced opinions on major national and
                international issues
              </li>
              <li>
                ✅ Communicate with diplomatic maturity, expressing conviction
                while respecting alternative views
              </li>
              <li>
                ✅ Demonstrate professional body language, voice modulation, and
                confident presence
              </li>
              <li>
                ✅ Handle unexpected questions and pressure situations with
                composure
              </li>
              <li>
                ✅ Think from an administrative perspective, considering
                multiple stakeholder interests
              </li>
              <li>
                ✅ Face the UPSC interview board with genuine confidence born
                from thorough preparation
              </li>
              <li>
                ✅ Embody the personality traits that UPSC seeks in future civil
                servants
              </li>
            </ul>
          </div>

          <div className="highlight-box">
            <h4>🎯 The JDAX Promise</h4>
            <p>
              We don't just prepare you for the interview - we transform your
              personality to become the civil servant that India needs. Our
              comprehensive approach ensures that when you face the board,
              you're not performing a rehearsed act but presenting your
              authentic, evolved self with confidence and competence.
            </p>
            <p style={{ marginTop: "15px", fontWeight: "bold" }}>
              Empowering aspirants to transform their personality and conquer
              their UPSC interview with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="footer">
        <div className="footer-content">
          <h3>🎯 Begin Your Transformation Journey</h3>
          <p>
            From self-discovery to diplomatic communication to board excellence
            - become the civil servant India needs.
          </p>
          <button className="cta-button">
            Enroll in Mock Interview Programme
          </button>
        </div>
      </div> */}
    </>
  );
};

// Main UpscPeadlogy Component
const UpscPeadlogy = () => {
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
    if (currentPage === "hub") {
      return <Hub onNavigate={setCurrentPage} />;
    } else if (currentPage === "interview") {
      return <InterviewTransformation onNavigate={setCurrentPage} />;
    }
    return <Hub onNavigate={setCurrentPage} />;
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

export default UpscPeadlogy;
