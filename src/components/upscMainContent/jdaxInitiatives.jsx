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
    margin-bottom: 60px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.1);
}

.intro-section h2 {
    font-size: 2.2em;
    color: #2c3e50;
    margin-bottom: 20px;
    border-bottom: 3px solid #667eea;
    padding-bottom: 15px;
}

.intro-section p {
    font-size: 1.1em;
    line-height: 1.8;
    color: #555;
}

/* INITIATIVE CARDS - THE IMPRESSIVE DESIGN! */
.initiatives-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin: 40px 0;
}

.initiative-card {
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

.initiative-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);
}

.initiative-card::before {
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

.initiative-number {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    font-weight: 700;
    backdrop-filter: blur(10px);
}

.initiative-icon {
    font-size: 4em;
    margin-bottom: 20px;
    display: block;
    position: relative;
    z-index: 1;
}

.initiative-title {
    font-size: 2em;
    margin-bottom: 15px;
    font-weight: 700;
    position: relative;
    z-index: 1;
}

.initiative-subtitle {
    font-size: 1.2em;
    margin-bottom: 20px;
    opacity: 0.9;
    font-style: italic;
    position: relative;
    z-index: 1;
}

.initiative-description {
    font-size: 1.05em;
    line-height: 1.7;
    margin-bottom: 25px;
    position: relative;
    z-index: 1;
}

.initiative-highlights {
    background: rgba(255,255,255,0.15);
    border-radius: 10px;
    padding: 20px;
    margin: 20px 0;
    backdrop-filter: blur(10px);
    position: relative;
    z-index: 1;
}

.initiative-highlights h4 {
    font-size: 1.1em;
    margin-bottom: 15px;
    font-weight: 600;
}

.initiative-highlights ul {
    list-style: none;
    padding: 0;
}

.initiative-highlights li {
    padding: 8px 0;
    padding-left: 25px;
    position: relative;
}

.initiative-highlights li:before {
    content: '✓';
    position: absolute;
    left: 0;
    font-weight: bold;
    color: #fff;
}

.explore-btn {
    display: inline-block;
    background: white;
    color: #667eea;
    padding: 12px 30px;
    border-radius: 25px;
    font-weight: 700;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    font-size: 1em;
    position: relative;
    z-index: 1;
}

.explore-btn:hover {
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

.key-features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin: 30px 0;
}

.feature-card {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 25px;
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

.guest-speakers {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 25px 0;
}

.speaker-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    transition: all 0.3s ease;
}

.speaker-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.speaker-card h4 {
    margin-bottom: 8px;
    font-size: 1.2em;
    color: white;
}

.speaker-card p {
    font-size: 0.95em;
    opacity: 0.9;
    color: white;
    margin: 0;
}

.topics-list {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 25px;
    margin: 25px 0;
}

.topics-list h4 {
    color: #667eea;
    margin-bottom: 15px;
}

.topics-list ul {
    list-style: none;
    padding: 0;
}

.topics-list li {
    padding: 12px;
    background: white;
    margin: 10px 0;
    border-radius: 8px;
    border-left: 3px solid #667eea;
    transition: all 0.3s ease;
}

.topics-list li:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.video-section {
    background: linear-gradient(135deg, #e8eaf6 0%, #c5cae9 100%);
    border-radius: 15px;
    padding: 30px;
    margin: 30px 0;
}

.video-section h3 {
    color: #3f51b5;
    margin-bottom: 20px;
}

.video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.video-card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    transition: all 0.3s ease;
}

.video-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(63, 81, 181, 0.2);
}

.video-card h4 {
    color: #3f51b5;
    margin-bottom: 10px;
}

.video-card p {
    color: #666;
    font-size: 0.9em;
    margin: 0;
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
    
    .key-features-grid {
        grid-template-columns: 1fr;
    }
    
    .guest-speakers {
        grid-template-columns: 1fr;
    }
}
`;

// Hub Component
const Hub = ({ onNavigate }) => {
  const initiatives = [
    {
      id: "nurture",
      number: "1",
      icon: "🌱",
      title: "Nurture to Rise",
      subtitle: "The Civil Services Journey",
      description:
        "A comprehensive orientation program providing clear and practical insights into competitive exams and civil services. Designed to help you make informed decisions about your career path.",
      highlights: [
        "Complete syllabus and exam pattern orientation",
        "Expert guidance on what and how to study",
        "Mental and physical health maintenance strategies",
        "Early clarity to avoid common pitfalls",
        "Foundation for UPSC, TNPSC, SSC & Banking",
      ],
    },
    {
      id: "kyp",
      number: "2",
      icon: "👥",
      title: "Know Your Public Servant",
      subtitle: "KYP - Bridging Aspirations with Reality",
      description:
        "Exclusive live sessions with serving IAS, IFS, IPS officers and other public servants. Get authentic perspectives on public administration and career journeys.",
      highlights: [
        "Live sessions with 100+ aspirants",
        "Interactions with IAS, IFS, Income Tax officers",
        "Real-life career journey insights",
        "Practical governance beyond textbooks",
        "Collaboration with premier institutions",
      ],
    },
    {
      id: "debate",
      number: "3",
      icon: "💬",
      title: "The Civil Debate",
      subtitle: "Where Perspectives Meet Diplomacy",
      description:
        "A premier platform cultivating critical communication, diplomatic expression, and solution-focused thinking on national and global issues.",
      highlights: [
        "Diplomatic communication skills",
        "Critical thinking and analysis",
        "Current affairs mastery",
        "Mock policy discussions",
        "Competitive edge for interviews",
      ],
    },
  ];

  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>Competitive Exams Ecosystem Building Initiatives</h1>
          <p className="tagline">
            Engaging, Nurturing & Empowering Future Civil Servants
          </p>
        </div>
      </div>

      <div className="container">
        <div className="intro-section">
          <h2>Building Tomorrow's Civil Servants Today</h2>
          <p>
            These programs are designed to engage college students, school
            students, and all those interested in gaining knowledge about
            competitive examinations. We provide comprehensive orientation,
            real-world insights, and skill-building opportunities that go beyond
            traditional coaching to create a complete ecosystem for civil
            service preparation.
          </p>
        </div>

        <div className="initiatives-grid">
          {initiatives.map((initiative) => (
            <div
              key={initiative.id}
              className="initiative-card"
              onClick={() => onNavigate(initiative.id)}
            >
              <div className="initiative-number">{initiative.number}</div>
              <span className="initiative-icon">{initiative.icon}</span>
              <h3 className="initiative-title">{initiative.title}</h3>
              <p className="initiative-subtitle">{initiative.subtitle}</p>
              <p className="initiative-description">{initiative.description}</p>

              <div className="initiative-highlights">
                <h4>Key Features:</h4>
                <ul>
                  {initiative.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <button className="explore-btn">Explore Details →</button>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="footer">
        <div className="footer-content">
          <h3>Join Our Ecosystem Building Initiatives</h3>
          <p>
            Transform your preparation journey with comprehensive support,
            expert guidance, and real-world insights.
          </p>
          <button className="cta-button">Get Started Today</button>
        </div>
      </div> */}
    </>
  );
};

// Nurture to Rise Component
const NurtureToRise = ({ onNavigate }) => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>🌱 Nurture to Rise</h1>
          <p className="tagline">The Civil Services Journey</p>
        </div>
      </div>

      <div className="container">
        <button className="back-btn" onClick={() => onNavigate("hub")}>
          ← Back to All Initiatives
        </button>

        <div className="detail-content">
          <h2>Purpose: Informed Decision Making</h2>
          <p>
            This program provides clear and practical insights into competitive
            exams and civil services, laying the right foundation for those
            interested while creating awareness for others to guide friends,
            family, or future generations about this important career path.
          </p>

          <div className="success-box">
            <h4>Who Should Attend?</h4>
            <p>
              <strong>For those interested:</strong> It lays the right
              foundation to understand what these exams truly involve.
            </p>
            <p>
              <strong>For those not interested:</strong> It creates awareness so
              you can guide your friends, family, or future generations about
              this important career path.
            </p>
          </div>

          <h3>Why Relevant Coaching and Proper Guidance Are Essential</h3>
          <p>
            Competitive exams require a different approach than traditional
            academics. Here's why coaching and guidance matter:
          </p>

          <div className="key-features-grid">
            <div className="feature-card">
              <h4>Challenges in Education System</h4>
              <p>
                Schools and colleges focus on academics and marks, but
                competitive exams demand problem-solving and critical thinking
                skills that aren't traditionally taught.
              </p>
            </div>
            <div className="feature-card">
              <h4>Graduation vs Competitive Exams</h4>
              <p>
                Your graduation subjects may not align with exam syllabi.
                Engineering students may lack history or polity knowledge
                crucial for UPSC and TNPSC.
              </p>
            </div>
            <div className="feature-card">
              <h4>What and How to Study</h4>
              <p>
                Competitive exams cover vast syllabi. You need to know what to
                study, what to skip, and how deeply. We teach strategic
                preparation, not rote learning.
              </p>
            </div>
            <div className="feature-card">
              <h4>Exam Techniques</h4>
              <p>
                Memory techniques and tricks to remember important facts,
                historical years, constitutional articles - making a big
                difference in performance.
              </p>
            </div>
            <div className="feature-card">
              <h4>Physical & Mental Health</h4>
              <p>
                Preparing for competitive exams is a marathon, not a sprint. We
                guide you on staying physically fit and mentally strong
                throughout your journey.
              </p>
            </div>
          </div>

          <h3>Why Nurturing Before Coaching Is Important</h3>
          <p>
            Before diving into coaching, nurturing helps you gain clarity and
            avoid common pitfalls:
          </p>

          <div className="warning-box">
            <h4>Current Scenario for Students</h4>
            <ul>
              <li>
                <strong>Lack of Understanding:</strong> Many students start
                preparing without fully understanding what competitive exams
                entail
              </li>
              <li>
                <strong>Parental Pressure:</strong> Some pursue UPSC just
                because of family expectations, without knowing the reality
              </li>
              <li>
                <strong>Unethical Coaching Centres:</strong> Numerous centres
                promise success but fail to provide proper guidance, leading to
                frustration and wasted time
              </li>
            </ul>
          </div>

          <div className="success-box">
            <h4>Our Nurturing Advantage</h4>
            <p>
              <strong>Early Clarity:</strong> Our approach gives you early
              clarity, helping you decide if this path is right for you and
              giving you a significant head start over others who realize this
              later.
            </p>
          </div>

          <h3>What the Nurture to Rise Program Covers</h3>

          <div className="info-box">
            <h4>Comprehensive Exam Coverage</h4>
            <ul>
              <li>
                <strong>UPSC:</strong> Syllabus, exam pattern, preparation
                strategies, and subject-wise orientation
              </li>
              <li>
                <strong>TNPSC:</strong> State-specific topics including Tamil
                Nadu history, culture, and administration
              </li>
              <li>
                <strong>SSC & Banking:</strong> Reasoning, quantitative
                aptitude, and English language skills
              </li>
              <li>
                <strong>Incremental Approach:</strong> We start with the basics
                and gradually build your knowledge and skills systematically
              </li>
            </ul>
          </div>

          <div className="video-section">
            <h3>📺 Online YouTube Session Links</h3>
            <p>
              Here are the first four sessions of the program. These videos
              provide comprehensive orientation to competitive examinations:
            </p>

            <div className="video-grid">
              <div className="video-card">
                <h4>Session 1</h4>
                <p>Introduction to Competitive Exams</p>
              </div>
              <div className="video-card">
                <h4>Session 2</h4>
                <p>UPSC Examination Overview</p>
              </div>
              <div className="video-card">
                <h4>Session 3 (Live)</h4>
                <p>Preparation Strategies</p>
              </div>
              <div className="video-card">
                <h4>Session 4 (Live)</h4>
                <p>Subject Orientation & Tips</p>
              </div>
            </div>
          </div>

          <h3>Target Outcomes</h3>

          <div className="highlight-box">
            <h4>What You Will Achieve</h4>
            <ul>
              <li>
                <strong>Increased Awareness:</strong> Deep understanding of
                competitive examination ecosystem
              </li>
              <li>
                <strong>Enhanced Preparation Strategies:</strong> Proven methods
                for UPSC, TNPSC, SSC, Banking, and other exams
              </li>
              <li>
                <strong>Stronger Motivation:</strong> Clear vision and
                commitment to pursuing a career in civil services
              </li>
              <li>
                <strong>Informed Decision Making:</strong> Clarity on whether
                this career path aligns with your aspirations
              </li>
              <li>
                <strong>Strategic Advantage:</strong> Head start over peers who
                begin without proper orientation
              </li>
            </ul>
          </div>

          <div className="success-box">
            <h4>🎯 Program Impact</h4>
            <p>
              This program not only informs but also inspires students, guiding
              them on their journey to becoming successful civil servants. By
              providing early clarity and proper nurturing, we help you avoid
              the trial-and-error approach that wastes precious time and
              resources.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="footer">
        <div className="footer-content">
          <h3>Start Your Journey with Proper Nurturing</h3>
          <p>
            Join Nurture to Rise and build a strong foundation for your civil
            services career.
          </p>
          <button className="cta-button">Enroll Now</button>
        </div>
      </div> */}
    </>
  );
};

// Know Your Public Servant Component
const KnowYourPublicServant = ({ onNavigate }) => {
  const speakers = [
    {
      name: "Ms. Beno Zephine, IFS",
      role: "Diplomacy and International Relations",
    },
    { name: "Ms. Malathy D, IAS", role: "District Administration in India" },
    {
      name: "Mr. M. Dinesh Kumar",
      role: "Income Tax Officer - Revenue Administration",
    },
    {
      name: "Village Administrative Officers",
      role: "Grassroots Administration",
    },
  ];

  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>👥 Know Your Public Servant</h1>
          <p className="tagline">
            Bridging Aspirations with Real-World Public Service
          </p>
        </div>
      </div>

      <div className="container">
        <button className="back-btn" onClick={() => onNavigate("hub")}>
          ← Back to All Initiatives
        </button>

        <div className="detail-content">
          <h2>KYP Initiative Overview</h2>
          <p>
            At JDAX Academy, the <strong>Know Your Public Servant (KYP)</strong>{" "}
            initiative is a unique co-curricular experience designed to
            complement the preparation of aspirants across UPSC, TNPSC, SSC, and
            banking courses. This initiative connects students with serving
            public servants through exclusive live sessions, offering firsthand
            insights into the realities of public administration.
          </p>

          <div className="info-box">
            <h4>Broad Reach and Collaborative Impact</h4>
            <p>
              KYP regularly engages <strong>over 100+ aspirants</strong> from
              diverse competitive exam streams. Beyond JDAX, we collaborate with
              leading institutions such as{" "}
              <strong>Sathyabama University</strong> and
              <strong>Jeppiar Institute of Technology</strong>, creating a
              vibrant community of learners across Chennai.
            </p>
          </div>

          <h3>What Aspirants Gain from KYP</h3>

          <div className="key-features-grid">
            <div className="feature-card">
              <h4>Authentic Perspectives</h4>
              <p>
                Gain clarity on the roles and responsibilities of public
                servants across various administrative levels.
              </p>
            </div>
            <div className="feature-card">
              <h4>Real-Life Career Journeys</h4>
              <p>
                Learn from the experiences and challenges faced by officers in
                the field.
              </p>
            </div>
            <div className="feature-card">
              <h4>Practical Governance Insights</h4>
              <p>
                Understand the workings of government administration beyond
                textbooks.
              </p>
            </div>
            <div className="feature-card">
              <h4>Motivation and Guidance</h4>
              <p>
                Draw inspiration from public servants who exemplify dedication
                and service.
              </p>
            </div>
          </div>

          <h3>Distinguished Guests Who Have Shared Their Expertise</h3>

          <div className="guest-speakers">
            {speakers.map((speaker, idx) => (
              <div key={idx} className="speaker-card">
                <h4>{speaker.name}</h4>
                <p>{speaker.role}</p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: "20px", textAlign: "center", color: "#666" }}>
            Alongside these officers, professionals from various cadres have
            enriched the sessions with their diverse experiences.
          </p>

          <h3>Benefits of the KYP Initiative for Aspirants</h3>

          <div className="highlight-box">
            <h4>Comprehensive Learning Benefits</h4>
            <ul>
              <li>
                <strong>Enhanced Understanding of Public Service:</strong> Helps
                aspirants make informed career decisions by revealing the true
                scope and impact of public service roles
              </li>
              <li>
                <strong>Inspiration from Success Stories:</strong> Real journeys
                that encourage perseverance and commitment to the civil services
                path
              </li>
              <li>
                <strong>Exam Preparation Insights:</strong> Practical tips and
                strategies shared by public servants for cracking competitive
                exams
              </li>
              <li>
                <strong>Clarification of Common Misconceptions:</strong>{" "}
                Realistic views on work-life balance, salaries, perks, and
                day-to-day responsibilities
              </li>
              <li>
                <strong>Broader Career Vision:</strong> Awareness of career
                progression opportunities, departmental exams, and lateral entry
                possibilities
              </li>
            </ul>
          </div>

          <div className="success-box">
            <h4>🎯 Program Impact</h4>
            <p>
              The Know Your Public Servant (KYP) initiative enriches the
              learning journey of aspirants across multiple competitive exams,
              providing a vital link between academic preparation and the
              realities of public service. By interacting with serving officers,
              students gain invaluable insights that cannot be found in any
              textbook or coaching material.
            </p>
          </div>

          <div className="info-box">
            <h4>Interactive Sessions</h4>
            <p>
              Each KYP session is designed to be highly interactive, with
              dedicated time for Q&A where aspirants can ask questions directly
              to serving officers. This format ensures that students get
              personalized guidance and clarity on their specific concerns about
              civil service careers.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="footer">
        <div className="footer-content">
          <h3>Connect with Real Public Servants</h3>
          <p>
            Join KYP sessions to get authentic insights into public service
            careers from those who live it every day.
          </p>
          <button className="cta-button">Join Next Session</button>
        </div>
      </div> */}
    </>
  );
};

// The Civil Debate Component
const CivilDebate = ({ onNavigate }) => {
  const debateTopics = [
    "Balancing Economic Growth and Environmental Sustainability",
    "The Role of Technology in Enhancing Governance",
    "Reforming the Education System for Inclusive Development",
    "Data Privacy vs. National Security: Finding the Right Balance",
    "The Impact of Social Media on Public Opinion and Policy Making",
    "Decentralization: Empowering Local Governments for Better Administration",
  ];

  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>💬 The Civil Debate</h1>
          <p className="tagline">Where Perspectives Meet Diplomacy</p>
        </div>
      </div>

      <div className="container">
        <button className="back-btn" onClick={() => onNavigate("hub")}>
          ← Back to All Initiatives
        </button>

        <div className="detail-content">
          <h2>Program Overview</h2>
          <p>
            At JDAX Academy, <strong>The Civil Debate</strong> is a premier
            co-curricular initiative designed to cultivate critical skills
            essential for civil service aspirants—articulate communication,
            critical thinking, empathetic listening, and diplomatic expression.
            This structured debate platform encourages thoughtful, respectful,
            and solution-focused discussions on key national and global issues,
            preparing students for the complexities of public administration.
          </p>

          <div className="success-box">
            <h4>Unique Approach</h4>
            <p>
              Unlike conventional debate formats that prioritize winning
              arguments, The Civil Debate focuses on the
              <strong> quality of discourse</strong>, respect for alternative
              viewpoints, and the ability to present positions diplomatically
              and objectively. Participants are assessed not only on their
              knowledge and reasoning but also on their capacity to acknowledge
              valid points from opposing sides and propose practical,
              evidence-based solutions.
            </p>
          </div>

          <div className="info-box">
            <h4>Mirroring Real-World Demands</h4>
            <p>
              This approach mirrors the real-world demands on civil servants,
              who must navigate diverse opinions and complex policy challenges
              with tact and fairness. By participating in these debates,
              students develop the diplomatic temperament essential for
              effective governance.
            </p>
          </div>

          <h3>Example Debate Topics</h3>
          <p>
            To sharpen their skills, students engage in debates on a wide range
            of contemporary and relevant issues:
          </p>

          <div className="topics-list">
            <h4>Current Policy Issues</h4>
            <ul>
              {debateTopics.map((topic, idx) => (
                <li key={idx}>{topic}</li>
              ))}
            </ul>
          </div>

          <p style={{ marginTop: "20px", fontStyle: "italic", color: "#666" }}>
            These topics encourage multi-dimensional analysis and foster a
            deeper understanding of policy implications, preparing students to
            think like future administrators.
          </p>

          <h3>Benefits to Students</h3>

          <div className="key-features-grid">
            <div className="feature-card">
              <h4>Enhanced Communication Skills</h4>
              <p>
                Develop the ability to articulate complex ideas clearly and
                persuasively, a vital skill for civil service exams and
                professional life.
              </p>
            </div>
            <div className="feature-card">
              <h4>Improved Critical Thinking</h4>
              <p>
                Engage with multifaceted issues to sharpen analytical and
                nuanced reasoning abilities.
              </p>
            </div>
            <div className="feature-card">
              <h4>Diplomatic Temperament</h4>
              <p>
                Cultivate respectful disagreement and consensus-building skills,
                essential for effective governance.
              </p>
            </div>
            <div className="feature-card">
              <h4>Current Affairs Mastery</h4>
              <p>
                Deepen knowledge of national and global issues through rigorous
                preparation and discussion.
              </p>
            </div>
            <div className="feature-card">
              <h4>Confidence Building</h4>
              <p>
                Gain regular public speaking experience in a supportive,
                structured environment.
              </p>
            </div>
            <div className="feature-card">
              <h4>Networking Opportunities</h4>
              <p>
                Interact with guest experts and serving civil servants,
                expanding professional connections.
              </p>
            </div>
            <div className="feature-card">
              <h4>Practical Policy Experience</h4>
              <p>
                Simulate real policy discussions, preparing students for the
                challenges of public administration.
              </p>
            </div>
            <div className="feature-card">
              <h4>Competitive Edge</h4>
              <p>
                Acquire skills that provide a distinct advantage in civil
                service examinations, especially during interview stages.
              </p>
            </div>
          </div>

          <div className="highlight-box">
            <h4>Assessment Criteria</h4>
            <p>Participants are evaluated on:</p>
            <ul>
              <li>
                <strong>Content Quality:</strong> Depth of research and
                understanding of the topic
              </li>
              <li>
                <strong>Analytical Skills:</strong> Ability to present multiple
                perspectives and analyze implications
              </li>
              <li>
                <strong>Communication:</strong> Clarity, articulation, and
                persuasiveness
              </li>
              <li>
                <strong>Diplomatic Conduct:</strong> Respect for opposing views
                and ability to build consensus
              </li>
              <li>
                <strong>Solution Orientation:</strong> Practical, evidence-based
                policy recommendations
              </li>
            </ul>
          </div>

          <div className="success-box">
            <h4>🎯 Building Tomorrow's Leaders</h4>
            <p>
              By fostering a culture of respectful, evidence-based debate, The
              Civil Debate equips aspirants to become not only knowledgeable
              candidates but also thoughtful, articulate public servants capable
              of navigating India's complex policy landscape with diplomacy and
              integrity.
            </p>
          </div>

          <div className="warning-box">
            <h4>Interview Stage Advantage</h4>
            <p>
              The skills developed through The Civil Debate are particularly
              valuable during the UPSC interview stage, where candidates must
              demonstrate balanced thinking, diplomatic communication, and the
              ability to handle challenging questions with poise and clarity.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="footer">
        <div className="footer-content">
          <h3>Sharpen Your Diplomatic Communication</h3>
          <p>
            Join The Civil Debate to develop the articulation and diplomatic
            skills essential for civil service success.
          </p>
          <button className="cta-button">Participate in Debates</button>
        </div>
      </div> */}
    </>
  );
};

// Main InitiativeEcosystem Component
const InitiativeEcosystem = () => {
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
      case "nurture":
        return <NurtureToRise onNavigate={setCurrentPage} />;
      case "kyp":
        return <KnowYourPublicServant onNavigate={setCurrentPage} />;
      case "debate":
        return <CivilDebate onNavigate={setCurrentPage} />;
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

export default InitiativeEcosystem;
