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
    font-size: 1.3em;
    opacity: 0.95;
    font-weight: 300;
    letter-spacing: 1px;
    color: #f0eafc;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 20px;
}

.back-btn {
    display: inline-block;
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
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
    box-shadow: 0 8px 20px rgba(245, 87, 108, 0.4);
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
    font-size: 1.1em;
    line-height: 1.8;
    color: #555;
    margin-bottom: 15px;
}

.intro-highlights {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 25px;
}

.intro-highlight-item {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    border-left: 4px solid #f5576c;
}

.intro-highlight-item h4 {
    color: #f5576c;
    margin-bottom: 8px;
}

.intro-highlight-item p {
    color: #666;
    font-size: 0.9em;
    margin: 0;
}

/* MAIN TILES GRID */
.tnpsc-tiles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 35px;
    margin: 40px 0;
}

.tnpsc-tile {
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 10px 35px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-left: 6px solid #f5576c;
}

.tnpsc-tile::before {
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

.tnpsc-tile:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(245, 87, 108, 0.2);
}

.tnpsc-tile:hover::before {
    opacity: 1;
}

.tile-number {
    position: absolute;
    top: 25px;
    right: 25px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #f093fb, #f5576c);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.3em;
}

.tile-icon {
    font-size: 3.5em;
    margin-bottom: 20px;
    display: block;
    position: relative;
    z-index: 1;
}

.tile-title {
    font-size: 1.8em;
    color: #2c3e50;
    margin-bottom: 15px;
    font-weight: 600;
    position: relative;
    z-index: 1;
}

.tile-subtitle {
    font-size: 1.05em;
    color: #f5576c;
    margin-bottom: 20px;
    font-style: italic;
    position: relative;
    z-index: 1;
}

.tile-description {
    color: #666;
    line-height: 1.8;
    margin-bottom: 25px;
    font-size: 0.95em;
    position: relative;
    z-index: 1;
}

.tile-features {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 20px;
    margin: 20px 0;
    position: relative;
    z-index: 1;
}

.tile-features h4 {
    color: #f5576c;
    margin-bottom: 12px;
    font-size: 1.1em;
}

.tile-features ul {
    list-style: none;
    padding: 0;
}

.tile-features li {
    padding: 6px 0;
    padding-left: 22px;
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
    border-bottom: 3px solid #f5576c;
}

.detail-content h3 {
    font-size: 1.6em;
    color: #34495e;
    margin: 35px 0 20px 0;
    font-weight: 600;
}

.detail-content h4 {
    font-size: 1.3em;
    color: #f5576c;
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

.exam-table {
    width: 100%;
    border-collapse: collapse;
    margin: 25px 0;
    background: white;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    border-radius: 10px;
    overflow: hidden;
}

.exam-table thead {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
}

.exam-table th {
    padding: 15px;
    text-align: left;
    font-weight: 600;
}

.exam-table td {
    padding: 15px;
    border-bottom: 1px solid #e9ecef;
}

.exam-table tbody tr:hover {
    background: #f8f9fa;
}

.comparison-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin: 30px 0;
}

.comparison-card {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 12px;
    border-left: 4px solid #f5576c;
    transition: all 0.3s ease;
}

.comparison-card:hover {
    transform: translateX(5px);
    box-shadow: 0 8px 20px rgba(245, 87, 108, 0.15);
}

.comparison-card h4 {
    color: #f5576c;
    margin-bottom: 12px;
    font-size: 1.2em;
}

.comparison-card p {
    color: #666;
    font-size: 0.95em;
    margin: 0;
}

.section-nav {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 25px;
    margin: 30px 0;
}

.section-nav h4 {
    color: #f5576c;
    margin-bottom: 15px;
}

.section-nav-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
}

.section-nav-item {
    background: white;
    padding: 12px;
    border-radius: 8px;
    border-left: 3px solid #f5576c;
    font-size: 0.9em;
    color: #555;
    transition: all 0.3s ease;
}

.section-nav-item:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
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
    
    .tnpsc-tiles-grid {
        grid-template-columns: 1fr;
    }
    
    .comparison-grid {
        grid-template-columns: 1fr;
    }
    
    .intro-highlights {
        grid-template-columns: 1fr;
    }
}
`;

// Hub Component
const Hub = ({ onNavigate }) => {
  const tnpscTiles = [
    {
      id: "overview",
      number: "1",
      icon: "📋",
      title: "TNPSC Exams Overview",
      subtitle: "Complete Guide to State Civil Services",
      description:
        "Comprehensive overview covering recruited services, vacancies, eligibility, syllabus, reservation policy, fee structure, and comparison with UPSC CSE.",
      features: [
        "Recruited Services & Posts across all Groups",
        "Last 4 Years Vacancy Trends",
        "Eligibility & Fee Structure Details",
        "Reservation & PSTM Policy",
        "Comparison with UPSC CSE",
      ],
    },
    {
      id: "group1",
      number: "2",
      icon: "🏛️",
      title: "TNPSC GROUP 1",
      subtitle: "Higher Administrative Roles",
      description:
        "Detailed information about Group 1 examination covering Assistant Commissioner, Deputy Collector, and other prestigious administrative positions.",
      features: [
        "Physical Requirements",
        "Complete Examination Plan",
        "Prelims & Mains Syllabus",
        "Paper-wise Detailed Coverage",
        "Interview & Selection Process",
      ],
    },
    {
      id: "group2",
      number: "3",
      icon: "💼",
      title: "TNPSC GROUP 2 & 2A",
      subtitle: "Executive & Ministerial Roles",
      description:
        "Comprehensive guide to Group 2 (Descriptive) and Group 2A (Objective) examinations for executive and ministerial positions in Tamil Nadu government.",
      features: [
        "Group 2 vs Group 2A Differences",
        "Examination Scheme & Pattern",
        "Detailed Mains Syllabus",
        "Unit-wise Coverage",
        "Selection Procedure",
      ],
    },
    {
      id: "group4",
      number: "4",
      icon: "📝",
      title: "TNPSC GROUP 4",
      subtitle: "Clerical & Support Roles",
      description:
        "Single-stage objective examination for various clerical positions. Complete guide to Part A Tamil eligibility test and Part B General Studies.",
      features: [
        "Single Stage Examination",
        "Tamil Eligibility-cum-Scoring Test",
        "General Studies Coverage",
        "Exemptions for Differently Abled",
        "Certificate Verification Process",
      ],
    },
  ];

  return (
    <>
      <div className="hero" style={{ background: "#182334ff" }}>
        <div className="hero-content">
          <h1>New to TNPSC? Start Here</h1>
          <p className="tagline">
            Tamil Nadu Public Service Commission - Complete Examination Guide
          </p>
        </div>
      </div>

      <div className="container">
        <div className="intro-box">
          <h2>Welcome to TNPSC Preparation</h2>
          <p>
            The Tamil Nadu Public Service Commission (TNPSC) conducts
            examinations to recruit candidates for various state government
            services. Our comprehensive guide covers everything you need to know
            about TNPSC examinations across different groups.
          </p>

          <div className="intro-highlights">
            <div className="intro-highlight-item">
              <h4>Group 1</h4>
              <p style={{ textAlign: "center" }}>Higher Administrative Roles</p>
            </div>
            <div className="intro-highlight-item">
              <h4>Group 2/2A</h4>
              <p style={{ textAlign: "center" }}>
                Executive & Ministerial Roles
              </p>
            </div>
            <div className="intro-highlight-item">
              <h4>Group 4</h4>
              <p style={{ textAlign: "center" }}>Clerical & Support Roles</p>
            </div>
          </div>
        </div>

        <div className="tnpsc-tiles-grid">
          {tnpscTiles.map((tile) => (
            <div
              key={tile.id}
              className="tnpsc-tile"
              onClick={() => onNavigate(tile.id)}
            >
              <div className="tile-number">{tile.number}</div>
              <span className="tile-icon">{tile.icon}</span>
              <h3 className="tile-title">{tile.title}</h3>
              <p className="tile-subtitle">{tile.subtitle}</p>
              <p className="tile-description">{tile.description}</p>

              <div className="tile-features">
                <h4>What's Covered:</h4>
                <ul>
                  {tile.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="footer">
        <div className="footer-content">
          <h3>Begin Your TNPSC Journey</h3>
          <p>
            Explore comprehensive information about each examination group and
            start your preparation with confidence.
          </p>
          <button className="cta-button">Explore JDAX TNPSC Programs</button>
        </div>
      </div> */}
    </>
  );
};

// Overview Component - 10 Sections
const Overview = ({ onNavigate }) => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>📋 TNPSC Exams Overview</h1>
          <p className="tagline">
            Complete Guide to Tamil Nadu State Civil Services
          </p>
        </div>
      </div>

      <div className="container">
        <button className="back-btn" onClick={() => onNavigate("hub")}>
          ← Back to TNPSC Hub
        </button>

        <div className="section-nav">
          <h4>Quick Navigation - 10 Essential Sections:</h4>
          <div className="section-nav-grid">
            <div className="section-nav-item">
              1. Recruited Services & Posts
            </div>
            <div className="section-nav-item">2. Last 4 Years Vacancies</div>
            <div className="section-nav-item">3. Eligibility Conditions</div>
            <div className="section-nav-item">4. Prelims GS Syllabus</div>
            <div className="section-nav-item">5. Reservation Policy</div>
            <div className="section-nav-item">6. PSTM Eligibility</div>
            <div className="section-nav-item">7. Fee Structure</div>
            <div className="section-nav-item">8. UPSC Comparison</div>
            <div className="section-nav-item">9. Recent Trends</div>
            <div className="section-nav-item">10. Official Updates</div>
          </div>
        </div>

        <div className="detail-content">
          <h2>Overview of TNPSC Examinations</h2>

          <div className="success-box">
            <h4>Purpose & Structure</h4>
            <p>
              <strong>Purpose:</strong> To recruit candidates for state
              government services in Tamil Nadu.
            </p>
            <p>
              <strong>Exam Levels:</strong> Group 1 (Higher Administrative
              Roles), Group 2 (Executive and Ministerial Roles), and Group 4
              (Clerical and Support Roles).
            </p>
            <p>
              <strong>Overlap with UPSC CSE:</strong> Polity, History,
              Geography, and Current Affairs.
            </p>
          </div>

          <h3>
            1. Recruited Services and Posts in TNPSC Group I, II, IIA and IV
            Exams
          </h3>

          <div className="info-box">
            <h4>Group 1 Services</h4>
            <p>
              <strong>Higher Administrative Positions including:</strong>
            </p>
            <ul>
              <li>Assistant Commissioner (various departments)</li>
              <li>Deputy Collector</li>
              <li>District Employment Officer</li>
              <li>Assistant Director (various departments)</li>
              <li>Other prestigious administrative roles</li>
            </ul>
          </div>

          <div className="info-box">
            <h4>Group 2 & 2A Services</h4>
            <p>
              <strong>Executive and Ministerial Positions including:</strong>
            </p>
            <ul>
              <li>Assistant Section Officer</li>
              <li>Revenue Inspector</li>
              <li>Various departmental executive roles</li>
              <li>Ministerial support positions</li>
            </ul>
          </div>

          <div className="info-box">
            <h4>Group 4 Services</h4>
            <p>
              <strong>Clerical and Support Positions including:</strong>
            </p>
            <ul>
              <li>Junior Assistant</li>
              <li>Typist</li>
              <li>Bill Collector</li>
              <li>Steno-Typist</li>
              <li>Field Surveyor</li>
              <li>Village Administrative Officer (VAO)</li>
            </ul>
          </div>

          <h3>2. Last Four Years Vacancies in TNPSC (Group 1, 2/2A, and 4)</h3>

          <div className="highlight-box">
            <h4>Vacancy Trends</h4>
            <p>
              TNPSC conducts regular recruitments across all groups. The number
              of vacancies varies based on departmental requirements and
              government decisions. Recent years have seen significant
              recruitment drives, particularly in Group 2/2A and Group 4
              categories.
            </p>
            <p>
              <strong>Note:</strong> For exact vacancy numbers, please refer to
              official TNPSC notifications for each examination year.
            </p>
          </div>

          <h3>3. Eligibility Conditions of Group 1, 2, 2A and 4</h3>

          <div className="comparison-grid">
            <div className="comparison-card">
              <h4>Group 1 Eligibility</h4>
              <p>
                <strong>Educational:</strong> Bachelor's Degree from recognized
                university
              </p>
              <p>
                <strong>Age:</strong> 21-32 years (relaxations as per rules)
              </p>
              <p>
                <strong>Language:</strong> Tamil language proficiency mandatory
              </p>
            </div>

            <div className="comparison-card">
              <h4>Group 2/2A Eligibility</h4>
              <p>
                <strong>Educational:</strong> Bachelor's Degree from recognized
                university
              </p>
              <p>
                <strong>Age:</strong> 18-30 years (relaxations as per rules)
              </p>
              <p>
                <strong>Language:</strong> Tamil language proficiency mandatory
              </p>
            </div>

            <div className="comparison-card">
              <h4>Group 4 Eligibility</h4>
              <p>
                <strong>Educational:</strong> SSLC or equivalent (varies by
                post)
              </p>
              <p>
                <strong>Age:</strong> 18-30 years (relaxations as per rules)
              </p>
              <p>
                <strong>Language:</strong> Tamil proficiency essential
              </p>
            </div>
          </div>

          <h3>4. Prelims General Studies Syllabus in Group 1, 2, 2A and 4</h3>

          <div className="success-box">
            <h4>Common Prelims GS Topics</h4>
            <ul>
              <li>
                <strong>History:</strong> Ancient, Medieval, and Modern History
                with specific reference to Tamil Nadu
              </li>
              <li>
                <strong>Geography:</strong> Indian Geography and Tamil Nadu
                Geography, Environment
              </li>
              <li>
                <strong>Polity:</strong> Indian Constitution, Governance, Public
                Policy
              </li>
              <li>
                <strong>Economy:</strong> Indian Economy with specific reference
                to Tamil Nadu
              </li>
              <li>
                <strong>Science & Technology:</strong> Developments and
                applications
              </li>
              <li>
                <strong>Current Affairs:</strong> National and Tamil Nadu
                specific
              </li>
              <li>
                <strong>Tamil Literature & Culture:</strong> Heritage, society,
                and cultural aspects
              </li>
            </ul>
          </div>

          <h3>5. Reservation Policy</h3>

          <div className="info-box">
            <h4>Community-based Reservation</h4>
            <ul>
              <li>
                <strong>SC (Scheduled Castes):</strong> 15%
              </li>
              <li>
                <strong>SCA (Scheduled Caste Arunthathiyar):</strong> 3%
              </li>
              <li>
                <strong>ST (Scheduled Tribes):</strong> 1%
              </li>
              <li>
                <strong>BC (Backward Classes):</strong> 26.5%
              </li>
              <li>
                <strong>BCM (Backward Classes Muslims):</strong> 3.5%
              </li>
              <li>
                <strong>MBC (Most Backward Classes):</strong> 20.0%
              </li>
              <li>
                <strong>EWS (Economically Weaker Sections):</strong> As per
                Tamil Nadu government norms
              </li>
            </ul>
          </div>

          <div className="success-box">
            <h4>Special Reservations</h4>
            <p>
              <strong>PwBD (Persons with Benchmark Disabilities):</strong>{" "}
              Reservation for eligible differently-abled candidates as per
              government norms.
            </p>
            <p>
              <strong>Women Reservation:</strong> 30% reservation for women in
              all categories following the reservation for each communal
              category as well as open category.
            </p>
          </div>

          <h3>6. PSTM Eligibility</h3>

          <div className="warning-box">
            <h4>PSTM (Persons Studied in Tamil Medium) Reservation - 20%</h4>
            <p>
              <strong>Horizontal Reservation:</strong> 20% of total vacancies
              reserved for PSTM candidates across all categories.
            </p>

            <p>
              <strong>Eligibility Criteria:</strong>
            </p>
            <ul>
              <li>
                All subjects must be studied in Tamil medium for the prescribed
                qualification
              </li>
              <li>
                Medium of instruction must be Tamil as certified by the
                institution
              </li>
              <li>
                PSTM Certificate required from school/college/university signed
                by head of institution
              </li>
              <li>
                Part Tamil medium education (e.g., SSLC in Tamil but Degree in
                English) NOT eligible
              </li>
            </ul>

            <p>
              <strong>Applicable Requirements:</strong>
            </p>
            <ul>
              <li>
                <strong>Group 1:</strong> Degree must be completed in Tamil
                medium
              </li>
              <li>
                <strong>Group 2/2A:</strong> Degree must be completed in Tamil
                medium
              </li>
              <li>
                <strong>Group 4/VAO:</strong> SSLC or HSC must be completed in
                Tamil medium
              </li>
            </ul>
          </div>

          <h3>7. Fee Structure for Group 1, 2, 2A and 4</h3>

          <table className="exam-table">
            <thead>
              <tr>
                <th>Examination</th>
                <th>Prelims Fee</th>
                <th>Mains Fee</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Group 1</td>
                <td>₹100</td>
                <td>₹200</td>
                <td>₹300</td>
              </tr>
              <tr>
                <td>Group 2</td>
                <td>₹100</td>
                <td>₹150</td>
                <td>₹250</td>
              </tr>
              <tr>
                <td>Group 2A</td>
                <td>₹100</td>
                <td>₹150</td>
                <td>₹250</td>
              </tr>
              <tr>
                <td>Group 4</td>
                <td>₹100</td>
                <td>-</td>
                <td>₹100</td>
              </tr>
            </tbody>
          </table>

          <div className="success-box">
            <h4>Fee Exemptions</h4>
            <p>
              <strong>Exempted Categories:</strong> SC/ST/PwBD/Women candidates
              are exempted from paying examination fees.
            </p>
          </div>

          <h3>8. Comparison with UPSC CSE</h3>

          <div className="comparison-grid">
            <div className="comparison-card">
              <h4>Similarities</h4>
              <ul style={{ margin: "10px 0", padding: "0 0 0 20px" }}>
                <li>
                  Overlap in syllabus (Polity, History, Geography, Current
                  Affairs)
                </li>
                <li>Objective-type Preliminary Examination</li>
                <li>Competitive selection process</li>
                <li>Career in public administration</li>
              </ul>
            </div>

            <div className="comparison-card">
              <h4>Differences</h4>
              <ul style={{ margin: "10px 0", padding: "0 0 0 20px" }}>
                <li>TNPSC focuses on Tamil Nadu-specific topics</li>
                <li>No optional subjects in TNPSC exams</li>
                <li>Shorter selection process (No Mains for Group 2A & 4)</li>
                <li>Tamil language proficiency mandatory</li>
                <li>State-level appointments vs National-level</li>
              </ul>
            </div>
          </div>

          <h3>9. Recent Trends</h3>

          <div className="highlight-box">
            <h4>Emerging Patterns in TNPSC Examinations</h4>
            <ul>
              <li>
                <strong>Tamil Language Proficiency:</strong> Mandatory for all
                TNPSC exams with increasing emphasis
              </li>
              <li>
                <strong>Current Affairs Focus:</strong> Greater weightage to
                Tamil Nadu-specific current developments
              </li>
              <li>
                <strong>Technology Integration:</strong> Online application and
                examination processes
              </li>
              <li>
                <strong>PSTM Reservation:</strong> 20% horizontal reservation
                ensuring opportunities for Tamil medium students
              </li>
              <li>
                <strong>Women Participation:</strong> 30% reservation
                encouraging greater female representation
              </li>
            </ul>
          </div>

          <h3>10. Official Updates and Notifications</h3>

          <div className="info-box">
            <h4>Stay Updated with Official Sources</h4>
            <p>
              <strong>Official TNPSC Website:</strong>{" "}
              <a
                href="https://www.tnpsc.gov.in"
                target="_blank"
                style={{ color: "#2196f3", fontWeight: "bold" }}
              >
                www.tnpsc.gov.in
              </a>
            </p>
            <p>
              <strong>Tamil Nadu Government Gazette:</strong> Official
              publication for government notifications
            </p>
            <p>
              <strong>TNPSC Notification PDFs:</strong> Available on the
              official website with detailed information about:
            </p>
            <ul>
              <li>Examination dates and schedules</li>
              <li>Vacancy details and post descriptions</li>
              <li>Application procedures and deadlines</li>
              <li>Syllabus changes and updates</li>
              <li>Result announcements and cut-off marks</li>
            </ul>
          </div>

          <div className="success-box">
            <h4>Important Reminder</h4>
            <p>
              Always verify information from official TNPSC sources. This guide
              provides a comprehensive overview, but specific details may change
              with each examination notification. Regularly check the official
              website for the most current and accurate information.
            </p>
          </div>
        </div>
      </div>
      {/* 
      <div className="footer">
        <div className="footer-content">
          <h3>Ready to Start Your TNPSC Preparation?</h3>
          <p>
            Explore detailed information about specific group examinations and
            begin your journey.
          </p>
          <button className="cta-button" onClick={() => onNavigate("hub")}>
            Explore Group Exams
          </button>
        </div>
      </div> */}
    </>
  );
};

// Group 1 Component
const Group1 = ({ onNavigate }) => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>🏛️ TNPSC GROUP 1 Examination</h1>
          <p className="tagline">
            Higher Administrative Roles in Tamil Nadu Government
          </p>
        </div>
      </div>

      <div className="container">
        <button className="back-btn" onClick={() => onNavigate("hub")}>
          ← Back to TNPSC Hub
        </button>

        <div className="detail-content">
          <h2>TNPSC Group 1 Examination - Detailed Information</h2>

          <h3>Physical Requirements</h3>
          <div className="info-box">
            <h4>Important Note on Physical Standards</h4>
            <p>
              Certain posts under Group 1 may have specific physical
              requirements such as height, chest measurements, or physical
              fitness standards. Candidates should carefully check the official
              notification for post-specific physical requirements before
              applying.
            </p>
          </div>

          <h3>Plan of Examination</h3>

          <div className="success-box">
            <h4>
              Stage 1: Preliminary Examination (Objective Type - Screening Test)
            </h4>
            <ul>
              <li>
                Objective-type questions testing general knowledge and aptitude
              </li>
              <li>
                <strong>Important:</strong> Marks obtained in Preliminary
                Examination are NOT counted for final merit list
              </li>
              <li>
                <strong>Qualification:</strong> Candidates qualifying for Main
                Examination will be 20 times the number of vacancies, subject to
                reservation rules
              </li>
            </ul>
          </div>

          <div className="highlight-box">
            <h4>
              Stage 2: Main Examination (Written Examination and Interview)
            </h4>
            <p>
              <strong>Components:</strong>
            </p>
            <ul>
              <li>Paper I: Objective Type (Screening for Mains)</li>
              <li>Paper II: Descriptive Type (Counted for ranking)</li>
              <li>Paper III: Descriptive Type (Counted for ranking)</li>
              <li>Paper IV: Descriptive Type (Counted for ranking)</li>
              <li>
                Interview/Personality Test: 100 marks (Counted for ranking)
              </li>
            </ul>

            <p style={{ marginTop: "15px" }}>
              <strong>Interview Call:</strong>
            </p>
            <ul>
              <li>
                5 or more vacancies: 2 times the number of vacancies admitted to
                interview
              </li>
              <li>
                4 or fewer vacancies: 3 times the number of vacancies admitted
                to interview
              </li>
            </ul>
          </div>

          <div className="warning-box">
            <h4>Final Selection</h4>
            <p>
              <strong>Ranking Basis:</strong> Total marks obtained in Paper II +
              Paper III + Paper IV + Interview
            </p>
            <p>
              Candidates are selected based on cumulative performance in the
              Main Examination (Papers II, III, IV) and Interview, subject to
              reservation policy and availability of vacancies.
            </p>
          </div>

          <h3>Examination Syllabus</h3>

          <h4>Paper I - Preliminary Screening</h4>
          <div className="info-box">
            <h4>Objective Type (Multiple Choice Questions)</h4>
            <p>
              Covers general knowledge, current affairs, aptitude, and reasoning
              to screen candidates for the Main Examination.
            </p>
            <p>
              <strong>Note:</strong> This paper is only for qualification to
              Mains; marks not counted in final merit.
            </p>
          </div>

          <h4>Paper II - Main Examination</h4>
          <div className="success-box">
            <h4>Descriptive Type (Counted for Ranking)</h4>
            <p>Comprehensive coverage of:</p>
            <ul>
              <li>Indian History with specific reference to Tamil Nadu</li>
              <li>Indian National Movement and Constitution</li>
              <li>Geography of India and Tamil Nadu</li>
              <li>Indian Polity and Governance</li>
              <li>Economic and Social Development</li>
              <li>General Science and Technology</li>
            </ul>
          </div>

          <h4>Paper III - Main Examination</h4>
          <div className="success-box">
            <h4>Descriptive Type (Counted for Ranking)</h4>
            <p>In-depth study of:</p>
            <ul>
              <li>Tamil Literature and Culture</li>
              <li>Tamil Society and Heritage</li>
              <li>Tamil Nadu Economy and Development</li>
              <li>Current Affairs related to Tamil Nadu</li>
              <li>Administrative and Governance issues</li>
            </ul>
          </div>

          <h4>Paper IV - Main Examination</h4>
          <div className="success-box">
            <h4>Descriptive Type (Counted for Ranking)</h4>
            <p>Advanced topics including:</p>
            <ul>
              <li>General English and comprehension</li>
              <li>Aptitude and Mental Ability</li>
              <li>Essay writing on contemporary topics</li>
              <li>Analytical and problem-solving questions</li>
              <li>Administrative decision-making scenarios</li>
            </ul>
          </div>

          <h4>Personality Test / Interview - 100 Marks</h4>
          <div className="highlight-box">
            <h4>Interview Assessment</h4>
            <p>
              <strong>Evaluation Criteria:</strong>
            </p>
            <ul>
              <li>General awareness and current knowledge</li>
              <li>Analytical and decision-making ability</li>
              <li>Communication skills and clarity of expression</li>
              <li>Personality traits suitable for administrative roles</li>
              <li>
                Understanding of Tamil Nadu's socio-economic and cultural
                landscape
              </li>
              <li>Ethical values and integrity</li>
            </ul>
            <p style={{ marginTop: "15px" }}>
              <strong>Duration:</strong> Typically 30-45 minutes
            </p>
            <p>
              <strong>Panel:</strong> Expert board comprising senior officers
              and subject matter experts
            </p>
          </div>

          <h3>Preparation Strategy</h3>

          <div className="comparison-grid">
            <div className="comparison-card">
              <h4>For Prelims</h4>
              <p>
                Focus on MCQ practice, current affairs, general knowledge, and
                aptitude. Regular mock tests essential.
              </p>
            </div>

            <div className="comparison-card">
              <h4>For Mains</h4>
              <p>
                Develop answer writing skills, in-depth subject knowledge, and
                Tamil Nadu-specific understanding.
              </p>
            </div>

            <div className="comparison-card">
              <h4>For Interview</h4>
              <p>
                Stay updated with current affairs, work on communication,
                develop administrative perspective.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="footer">
        <div className="footer-content">
          <h3>Excel in TNPSC Group 1</h3>
          <p>
            Comprehensive preparation with expert guidance for higher
            administrative roles.
          </p>
          <button className="cta-button">Explore JDAX Group 1 Programs</button>
        </div>
      </div> */}
    </>
  );
};

// Group 2/2A Component
const Group2 = ({ onNavigate }) => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>💼 TNPSC GROUP 2 & 2A Examination</h1>
          <p className="tagline">
            Executive & Ministerial Roles in Tamil Nadu Government
          </p>
        </div>
      </div>

      <div className="container">
        <button className="back-btn" onClick={() => onNavigate("hub")}>
          ← Back to TNPSC Hub
        </button>

        <div className="detail-content">
          <h2>TNPSC Group 2 and 2A Examination - Detailed Information</h2>

          <h3>1. Plan of Examination</h3>

          <div className="warning-box">
            <h4>Two Different Examination Streams</h4>
            <p>
              <strong>Group 2:</strong> Descriptive type Main Examination
              (Written answers required)
            </p>
            <p>
              <strong>Group 2A:</strong> Objective type Main Examination
              (Multiple choice questions)
            </p>
            <p>
              Both groups share the same Preliminary Examination but differ in
              their Main Examination pattern.
            </p>
          </div>

          <h3>2. Scheme of Examination</h3>

          <div className="success-box">
            <h4>Common Preliminary Examination</h4>
            <p>
              <strong>Paper 1:</strong> Objective Type - General Studies
            </p>
            <p>
              This screening test is common for both Group 2 and Group 2A
              aspirants.
            </p>
            <p>
              <strong>Note:</strong> Preliminary marks not counted for final
              merit; only for qualification to Mains.
            </p>
          </div>

          <div className="info-box">
            <h4>Group 2 - Main Examination</h4>
            <p>
              <strong>Paper 2:</strong> Descriptive Type - General Studies
              (Degree Standard)
            </p>
            <p>
              <strong>Total Marks:</strong> 300 Marks
            </p>
            <p>
              <strong>Format:</strong> Written answers requiring detailed
              explanation and analysis
            </p>
          </div>

          <div className="info-box">
            <h4>Group 2A - Main Examination</h4>
            <p>
              <strong>Paper 2:</strong> Objective Type - 200 Questions / 300
              Marks
            </p>
            <p>
              <strong>Part A:</strong> General Studies (Degree Standard) - 100
              Questions / 150 Marks
            </p>
            <p>
              <strong>Format:</strong> Multiple choice questions
            </p>
          </div>

          <h3>3. Group II Mains Examination Syllabus</h3>

          <div className="highlight-box">
            <h4>
              Paper 2 (Descriptive Type): General Studies Syllabus - 300 Marks
            </h4>
          </div>

          <div className="comparison-grid">
            <div className="comparison-card">
              <h4>Unit I (40 Marks)</h4>
              <p>
                Modern History of India with specific reference to Tamil Nadu
              </p>
            </div>

            <div className="comparison-card">
              <h4>Unit II (30 Marks)</h4>
              <p>Tamil Society – Culture and Heritage</p>
            </div>

            <div className="comparison-card">
              <h4>Unit III (50 Marks)</h4>
              <p>
                Social Issues in India with specific reference to Tamil Nadu
              </p>
            </div>

            <div className="comparison-card">
              <h4>Unit IV (40 Marks)</h4>
              <p>Science and Technology in Development</p>
            </div>

            <div className="comparison-card">
              <h4>Unit V (60 Marks)</h4>
              <p>
                Constitution, Polity and Governance in India with specific
                reference to Tamil Nadu
              </p>
            </div>

            <div className="comparison-card">
              <h4>Unit VI (40 Marks)</h4>
              <p>
                Geography of India, Environment, Biodiversity and Disaster
                Management with reference to Tamil Nadu
              </p>
            </div>

            <div className="comparison-card">
              <h4>Unit VII (40 Marks)</h4>
              <p>Indian Economy with specific reference to Tamil Nadu</p>
            </div>
          </div>

          <h3>4. Group II A Mains Examination Syllabus</h3>

          <div className="highlight-box">
            <h4>Paper 2 (Objective Type): 200 Questions / 300 Marks</h4>
            <p>
              <strong>Part A:</strong> General Studies (Degree Standard) - 100
              Questions / 150 Marks
            </p>
          </div>

          <div className="comparison-grid">
            <div className="comparison-card">
              <h4>Unit I (30 Questions)</h4>
              <p>
                Modern History of Tamil Nadu, Tamil Society – Culture and
                Heritage
              </p>
            </div>

            <div className="comparison-card">
              <h4>Unit II (45 Questions)</h4>
              <p>Administration of States with reference to Tamil Nadu</p>
            </div>

            <div className="comparison-card">
              <h4>Unit III (20 Questions)</h4>
              <p>Science and Technology in Development</p>
            </div>

            <div className="comparison-card">
              <h4>Unit IV (30 Questions)</h4>
              <p>Tamil Nadu Economy and Social Issues in Tamil Nadu</p>
            </div>

            <div className="comparison-card">
              <h4>Unit V (25 Questions)</h4>
              <p>
                Geography of Tamil Nadu, Environment, Biodiversity and Disaster
                Management in Tamil Nadu
              </p>
            </div>
          </div>

          <h3>Key Differences: Group 2 vs Group 2A</h3>

          <table className="exam-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Group 2</th>
                <th>Group 2A</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Exam Type</strong>
                </td>
                <td>Descriptive (Written Answers)</td>
                <td>Objective (MCQs)</td>
              </tr>
              <tr>
                <td>
                  <strong>Total Marks</strong>
                </td>
                <td>300 Marks</td>
                <td>300 Marks (200 Questions)</td>
              </tr>
              <tr>
                <td>
                  <strong>Format</strong>
                </td>
                <td>Long-form answers, analysis, essays</td>
                <td>Multiple choice questions</td>
              </tr>
              <tr>
                <td>
                  <strong>Skill Required</strong>
                </td>
                <td>Answer writing, expression, depth</td>
                <td>Quick thinking, accuracy, elimination</td>
              </tr>
              <tr>
                <td>
                  <strong>Time Management</strong>
                </td>
                <td>Quality over quantity</td>
                <td>Speed with accuracy</td>
              </tr>
            </tbody>
          </table>

          <h3>Preparation Strategy</h3>

          <div className="success-box">
            <h4>For Group 2 (Descriptive)</h4>
            <ul>
              <li>
                Develop strong answer writing skills with proper structure
              </li>
              <li>Practice writing within time limits</li>
              <li>Build depth in each topic with examples from Tamil Nadu</li>
              <li>Master analytical and evaluative answer approaches</li>
              <li>Regular answer writing practice essential</li>
            </ul>
          </div>

          <div className="success-box">
            <h4>For Group 2A (Objective)</h4>
            <ul>
              <li>Focus on MCQ practice and elimination techniques</li>
              <li>Build speed with accuracy through mock tests</li>
              <li>Cover breadth of syllabus with factual accuracy</li>
              <li>Practice previous years' objective questions</li>
              <li>Time management crucial for 200 questions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="footer">
        <div className="footer-content">
          <h3>Master Group 2 & 2A Examinations</h3>
          <p>
            Choose your stream and prepare with focused strategy for success.
          </p>
          <button className="cta-button">
            Explore JDAX Group 2/2A Programs
          </button>
        </div>
      </div> */}
    </>
  );
};

// Group 4 Component
const Group4 = ({ onNavigate }) => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>📝 TNPSC GROUP 4 Examination</h1>
          <p className="tagline">
            Clerical & Support Roles in Tamil Nadu Government
          </p>
        </div>
      </div>

      <div className="container">
        <button className="back-btn" onClick={() => onNavigate("hub")}>
          ← Back to TNPSC Hub
        </button>

        <div className="detail-content">
          <h2>TNPSC Group 4 Examination - Detailed Information</h2>

          <h3>1. Plan of Examination</h3>

          <div className="success-box">
            <h4>Single Stage Examination</h4>
            <p>
              <strong>Format:</strong> Objective Type (Multiple Choice
              Questions)
            </p>
            <p>
              <strong>Important:</strong> No Main Examination or Interview for
              Group 4
            </p>
            <p>
              Selection is based entirely on performance in the single-stage
              objective examination.
            </p>
          </div>

          <h3>2. Scheme of Examination</h3>

          <div className="info-box">
            <h4>Two-Part Examination Structure</h4>

            <p>
              <strong>Part A: Tamil Eligibility-cum-Scoring Test</strong>
            </p>
            <ul>
              <li>Tests Tamil language proficiency</li>
              <li>Marks count toward final ranking</li>
              <li>Questions in Tamil only</li>
            </ul>

            <p style={{ marginTop: "15px" }}>
              <strong>Part B: General Studies</strong>
            </p>
            <ul>
              <li>Covers various subjects at SSLC/HSC standard</li>
              <li>Marks count toward final ranking</li>
              <li>Questions in both Tamil and English</li>
            </ul>
          </div>

          <h3>3. Important Notes</h3>

          <div className="warning-box">
            <h4>Critical Examination Rules</h4>

            <p>
              <strong>Part B Evaluation Condition:</strong>
            </p>
            <p>
              Part B will be evaluated ONLY if the candidate secures a minimum
              of <strong>40% (60 marks)</strong> in Part A.
            </p>
            <p>
              This means candidates must first qualify in the Tamil Eligibility
              test before their General Studies paper is evaluated.
            </p>

            <p style={{ marginTop: "15px" }}>
              <strong>Ranking Basis:</strong>
            </p>
            <p>
              Total marks from <strong>Part A + Part B</strong> will be
              considered for final ranking and selection.
            </p>
          </div>

          <div className="info-box">
            <h4>Language of Questions</h4>
            <ul>
              <li>
                <strong>Part A (Tamil Eligibility-cum-Scoring Test):</strong>{" "}
                Questions will be in Tamil only
              </li>
              <li>
                <strong>Part B (General Studies):</strong> Questions will be in
                both Tamil and English (bilingual)
              </li>
            </ul>
          </div>

          <h3>Exemption for Differently Abled Candidates</h3>

          <div className="highlight-box">
            <h4>Special Provision for PwBD Candidates</h4>
            <p>
              <strong>Differently Abled candidates</strong> (irrespective of
              disability percentage) who studied English in Board/University can
              opt for <strong>General English (SSLC Standard)</strong> instead
              of the Tamil Eligibility-cum-Scoring Test.
            </p>
            <p style={{ marginTop: "10px" }}>
              This exemption ensures equal opportunity for differently-abled
              candidates who may have studied in English medium due to
              availability of facilities.
            </p>
          </div>

          <h3>Selection Procedure</h3>

          <div className="success-box">
            <h4>Multi-Stage Selection Process</h4>

            <p>
              <strong>Step 1: Written Examination</strong>
            </p>
            <p>
              Candidates appear for the single-stage objective examination (Part
              A + Part B).
            </p>

            <p style={{ marginTop: "15px" }}>
              <strong>Step 2: Onscreen Certificate Verification</strong>
            </p>
            <ul>
              <li>Candidates shortlisted based on examination marks</li>
              <li>Selection subject to rule of reservation</li>
              <li>Preliminary verification of documents online</li>
            </ul>

            <p style={{ marginTop: "15px" }}>
              <strong>Step 3: Physical Certificate Verification</strong>
            </p>
            <ul>
              <li>Register number-wise list published on TNPSC website</li>
              <li>
                Original certificates supporting online application claims
                verified
              </li>
              <li>
                Thorough scrutiny of educational and community certificates
              </li>
              <li>
                Age proof, PSTM certificate (if applicable), and other documents
                checked
              </li>
            </ul>

            <p style={{ marginTop: "15px" }}>
              <strong>Step 4: Counselling</strong>
            </p>
            <ul>
              <li>Eligible candidates admitted after document verification</li>
              <li>Rank-based counselling for post allocation</li>
              <li>
                Candidates choose posts based on preference and availability
              </li>
            </ul>
          </div>

          <h3>Syllabus Coverage</h3>

          <div className="comparison-grid">
            <div className="comparison-card">
              <h4>Part A: Tamil</h4>
              <p>
                Grammar, comprehension, vocabulary, and language proficiency at
                SSLC/HSC level
              </p>
            </div>

            <div className="comparison-card">
              <h4>Part B: General Studies</h4>
              <p>
                Science, History, Geography, Polity, Economy, Current Affairs at
                SSLC/HSC standard
              </p>
            </div>
          </div>

          <h3>Preparation Strategy</h3>

          <div className="highlight-box">
            <h4>Keys to Success in Group 4</h4>
            <ul>
              <li>
                <strong>Tamil Proficiency is Critical:</strong> Must score
                minimum 40% in Part A to qualify
              </li>
              <li>
                <strong>Focus on Basics:</strong> Syllabus is at SSLC/HSC level
                - master fundamentals
              </li>
              <li>
                <strong>Practice MCQs:</strong> Speed and accuracy essential in
                objective examination
              </li>
              <li>
                <strong>Current Affairs:</strong> Stay updated with Tamil
                Nadu-specific developments
              </li>
              <li>
                <strong>Mock Tests:</strong> Regular practice to build speed and
                identify weak areas
              </li>
              <li>
                <strong>Document Preparation:</strong> Keep all certificates
                ready for verification stage
              </li>
            </ul>
          </div>

          <div className="warning-box">
            <h4>Common Mistakes to Avoid</h4>
            <ul>
              <li>
                Neglecting Tamil preparation assuming it's easy - many
                candidates fail to qualify in Part A
              </li>
              <li>
                Not practicing time management - inability to complete all
                questions
              </li>
              <li>Overlooking Tamil Nadu-specific topics in General Studies</li>
              <li>
                Incomplete or incorrect documents during verification leading to
                disqualification
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="footer">
        <div className="footer-content">
          <h3>Succeed in Group 4 Examination</h3>
          <p>
            Single-stage objective exam with focused preparation for clerical
            and support roles.
          </p>
          <button className="cta-button">Explore JDAX Group 4 Programs</button>
        </div>
      </div> */}
    </>
  );
};

// Main TnpscNew Component
const TnpscNew = () => {
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
      case "overview":
        return <Overview onNavigate={setCurrentPage} />;
      case "group1":
        return <Group1 onNavigate={setCurrentPage} />;
      case "group2":
        return <Group2 onNavigate={setCurrentPage} />;
      case "group4":
        return <Group4 onNavigate={setCurrentPage} />;
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

export default TnpscNew;
