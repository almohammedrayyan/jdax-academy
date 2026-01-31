import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

.stats-bar {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 40px 20px;
    background: #f8f9fa;
    border-bottom: 4px solid #667eea;
}

.stat-item {
    text-align: center;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.07);
    transition: transform 0.3s ease;
}

.stat-item:hover {
    transform: translateY(-5px);
}

.stat-number {
    font-size: 2.5em;
    font-weight: 700;
    color: #667eea;
    display: block;
    margin-bottom: 10px;
}

.stat-label {
    color: #666;
    font-size: 0.95em;
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

/* ENHANCED FEATURED UPSC SECTION - THE SPECTACULAR STAR! */
.featured-section {
    background: linear-gradient(135deg, #f5576c 0%, #f093fb 100%);
    border-radius: 25px;
    padding: 50px;
    margin: 60px auto;
    max-width: 1200px;
    box-shadow: 0 20px 60px rgba(245, 87, 108, 0.3);
    position: relative;
    overflow: hidden;
}

.featured-section::before {
    content: '⭐';
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 6em;
    opacity: 0.15;
    animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.15; }
    50% { transform: scale(1.1); opacity: 0.25; }
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
    box-shadow: 0 4px 15px rgba(255,255,255,0.3);
}

.featured-section h2 {
    font-size: 3em;
    color: white;
    margin-bottom: 15px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.featured-section .subtitle {
    font-size: 1.3em;
    color: rgba(255,255,255,0.95);
    margin-bottom: 40px;
}

/* PREVIEW TILES - THE IMPRESSIVE ADDITION! */
.preview-tiles-section {
    background: rgba(255,255,255,0.15);
    border-radius: 15px;
    padding: 30px;
    margin: 30px 0;
    backdrop-filter: blur(10px);
}

.preview-tiles-header {
    text-align: center;
    color: white;
    font-size: 1.5em;
    font-weight: 600;
    margin-bottom: 25px;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
}

.preview-tiles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    margin-bottom: 20px;
}

.preview-tile {
    background: white;
    border-radius: 12px;
    padding: 20px;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    border-left: 4px solid #f5576c;
}

.preview-tile:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.preview-tile-number {
    display: inline-block;
    background: linear-gradient(135deg, #f5576c, #f093fb);
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    font-weight: 700;
    margin-right: 10px;
    font-size: 0.9em;
}

.preview-tile-icon {
    font-size: 2em;
    margin-bottom: 10px;
    display: block;
}

.preview-tile-title {
    color: #2c3e50;
    font-weight: 600;
    font-size: 1.1em;
    margin-bottom: 8px;
    line-height: 1.3;
}

.preview-tile-desc {
    color: #666;
    font-size: 0.9em;
    line-height: 1.5;
}

/* BENEFIT CARDS */
.featured-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    margin: 30px 0;
}

.featured-card {
    background: rgba(255,255,255,0.95);
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    transition: all 0.3s ease;
}

.featured-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 35px rgba(0,0,0,0.2);
}

.featured-card h4 {
    color: #f5576c;
    margin-bottom: 12px;
    font-size: 1.3em;
    display: flex;
    align-items: center;
    gap: 10px;
}

.featured-card p {
    color: #555;
    line-height: 1.7;
    font-size: 0.95em;
}

.featured-btn {
    display: inline-block;
    background: white;
    color: #f5576c;
    padding: 18px 45px;
    border-radius: 30px;
    font-weight: 700;
    font-size: 1.2em;
    margin-top: 30px;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    box-shadow: 0 8px 25px rgba(255,255,255,0.3);
}

.featured-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 35px rgba(255,255,255,0.5);
    background: rgba(255,255,255,1);
}

.section-title {
    font-size: 2.5em;
    color: #2c3e50;
    margin: 50px 0 30px 0;
    padding-bottom: 15px;
    border-bottom: 3px solid #667eea;
}

.intro-text {
    font-size: 1.1em;
    line-height: 1.8;
    color: #34495e;
    margin-bottom: 40px;
}

.exam-categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 25px;
    margin: 40px 0;
}

.exam-card {
    background: white;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.08);
    transition: all 0.3s ease;
    position: relative;
    border-left: 5px solid #667eea;
}

.exam-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(102, 126, 234, 0.15);
}

.exam-card .icon {
    font-size: 2.5em;
    margin-bottom: 15px;
    display: block;
}

.exam-card h3 {
    font-size: 1.5em;
    color: #2c3e50;
    margin-bottom: 12px;
    font-weight: 600;
}

.exam-card .description {
    color: #555;
    margin-bottom: 18px;
    line-height: 1.7;
    font-size: 0.95em;
}

.exam-stats {
    background: #f8f9fa;
    padding: 12px;
    border-radius: 8px;
    margin: 15px 0;
}

.exam-stats p {
    margin: 6px 0;
    color: #666;
    font-size: 0.9em;
}

.exam-stats strong {
    color: #667eea;
}

.learn-more-btn {
    display: inline-block;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 10px 25px;
    border-radius: 25px;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    font-size: 0.95em;
    width: 100%;
}

.learn-more-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

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
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

.highlight-box ul {
    margin-left: 20px;
    color: #555;
}

.highlight-box li {
    margin: 10px 0;
    line-height: 1.7;
}

.highlight-box p {
    color: #555;
    line-height: 1.8;
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

.warning-box {
    background: linear-gradient(135deg, #fff3e0 0%, #ffcc80 100%);
    border-left: 5px solid #ff9800;
    padding: 25px;
    border-radius: 10px;
    margin: 25px 0;
}

.warning-box h4 {
    color: #e65100;
    margin-bottom: 15px;
    font-size: 1.3em;
}

.key-points {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 25px 0;
}

.point-card {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    border-left: 4px solid #667eea;
    transition: all 0.3s ease;
}

.point-card:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
}

.point-card h4 {
    color: #667eea;
    margin-bottom: 10px;
    font-size: 1.2em;
}

.point-card p {
    color: #666;
    font-size: 0.95em;
    margin: 0;
}

.venn-explanation {
    background: #f8f9fa;
    padding: 30px;
    border-radius: 15px;
    margin: 30px 0;
    text-align: center;
}

.venn-text {
    font-size: 1.1em;
    color: #667eea;
    font-weight: 600;
    margin-top: 20px;
    font-style: italic;
}

.faq-section {
    background: white;
    border-radius: 15px;
    padding: 40px;
    margin: 40px 0;
    box-shadow: 0 8px 30px rgba(0,0,0,0.08);
}

.faq-item {
    margin: 30px 0;
    padding-bottom: 30px;
    border-bottom: 2px solid #f0f0f0;
}

.faq-item:last-child {
    border-bottom: none;
}

.faq-section {
  // max-width: 800px;
  margin: auto;
}

.faq-item {
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 20px;
  background: #fff;
}

.faq-question {
  padding: 16px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.faq-answer {

  padding: 0 16px 16px;
  color: #555;
}

.educators-section {
    background: linear-gradient(135deg, #e8eaf6 0%, #c5cae9 100%);
    border-radius: 15px;
    padding: 40px;
    margin: 40px 0;
}

.educators-section h3 {
    color: #3f51b5;
    margin-bottom: 20px;
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
    text-decoration: none;
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
    
    .featured-section {
        padding: 30px 20px;
    }
    
    .featured-section h2 {
        font-size: 2em;
    }
    
    .preview-tiles-grid {
        grid-template-columns: 1fr;
    }
    
    .exam-categories-grid {
        grid-template-columns: 1fr;
    }
    
    .key-points {
        grid-template-columns: 1fr;
    }
    
    .stats-bar {
        grid-template-columns: 1fr;
    }
    
    .featured-grid {
        grid-template-columns: 1fr;
    }
}
`;

// Hub Component with ENHANCED FEATURED UPSC Section
const Hub = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const message = encodeURIComponent(
    "Hello, Im seeking expert mentorship and structured guidance for UPSC, TNPSC, SSC, Banking, and RRB competitive exam preparation.",
  );

  const upscPreviewTiles = [
    {
      number: 1,
      icon: "⚖️",
      title: "Civil Services vs Public Services",
      desc: "Understand the critical distinction between elite administrative cadre and broader government employment",
    },
    {
      number: 2,
      icon: "🎯",
      title: "Three Core Functions",
      desc: "Policy formulation, resource management, and governance continuity explained",
    },
    {
      number: 3,
      icon: "💰",
      title: "Career Proposition",
      desc: "Complete salary structure from ₹1.2L to ₹4L+ per month across 35-year career",
    },
    {
      number: 4,
      icon: "🏠",
      title: "Total Compensation Package",
      desc: "Housing, transport, healthcare, pension - non-monetary benefits worth lakhs monthly",
    },
    {
      number: 5,
      icon: "⭐",
      title: "Why Choose Civil Services",
      desc: "Impact at scale, diverse challenges, work-life balance, prestige, and career growth",
    },
    {
      number: 6,
      icon: "📋",
      title: "UPSC Examination Structure",
      desc: "Complete breakdown: Prelims, Mains (9 papers), Interview - from application to selection",
    },
    {
      number: 7,
      icon: "🎓",
      title: "JDAX Academy Programs",
      desc: "Foundation 365, Mains Mastery, Optional Excellence - your pathway to IAS success",
    },
  ];

  const otherExams = [
    {
      id: "school",
      icon: "🎓",
      title: "School-Level Exams",
      description:
        "NTSE, Olympiads, KVPY - Early talent identification with scholarships.",
      stats: "Foundation for Excellence",
      impact: "Scholarships up to ₹1.25L/year",
    },
    {
      id: "engineering",
      icon: "⚙️",
      title: "Engineering (JEE)",
      description: "Gateway to IITs, NITs through JEE Main and Advanced.",
      stats: "13 lakh candidates annually",
      impact: "0.5% IIT selection",
    },
    {
      id: "medical",
      icon: "🏥",
      title: "Medical (NEET)",
      description: "Single entrance for all MBBS/BDS programs nationwide.",
      stats: "20 lakh candidates annually",
      impact: "8% MBBS selection",
    },
    {
      id: "management",
      icon: "💼",
      title: "Management (CAT)",
      description: "IIM and premier B-school admissions.",
      stats: "2.5 lakh candidates",
      impact: "2% IIM selection",
    },
    {
      id: "law",
      icon: "⚖️",
      title: "Law (CLAT)",
      description: "National Law Universities entrance examination.",
      stats: "60,000 candidates",
      impact: "4% NLU selection",
    },
    {
      id: "banking",
      icon: "🏦",
      title: "Banking & Finance",
      description: "IBPS, SBI, RBI for secure banking careers.",
      stats: "15,000-20,000 vacancies",
      impact: "High job security",
    },
    {
      id: "ssc",
      icon: "📋",
      title: "SSC Exams",
      description: "Central government posts through CGL, CHSL, MTS.",
      stats: "40,000-50,000 vacancies",
      impact: "Diverse opportunities",
    },
    {
      id: "railways",
      icon: "🚂",
      title: "Railways (RRB)",
      description: "India's largest employer - multiple categories.",
      stats: "100,000+ vacancies",
      impact: "Massive recruitment",
    },
    {
      id: "defence",
      icon: "🎖️",
      title: "Defence Services",
      description: "NDA, CDS, AFCAT for armed forces.",
      stats: "5,000-7,000 vacancies",
      impact: "Serve the nation",
    },
    {
      id: "teaching",
      icon: "👨‍🏫",
      title: "Teaching Exams",
      description: "CTET, TET, UGC NET for education careers.",
      stats: "Variable vacancies",
      impact: "Shape futures",
    },
  ];

  const faqs = [
    {
      question: "Is coaching necessary for competitive exams?",
      answer:
        "While self-study can work for highly disciplined individuals, coaching provides structured curriculum, expert guidance, peer learning, and accountability. For exams like UPSC with vast syllabus and low selection rates, quality coaching significantly improves success probability by providing strategic preparation frameworks and eliminating trial-and-error learning.",
    },
    {
      question: "What is the optimal preparation timeline for UPSC?",
      answer:
        "Most successful candidates require 12-18 months of focused preparation. First-timers benefit from starting 18-24 months before their target attempt. However, the timeline varies based on educational background, current knowledge base, and daily study hours available. Working professionals might need 2-3 years with part-time preparation.",
    },
    {
      question: "Can working professionals prepare for civil services?",
      answer:
        "Absolutely. Many successful IAS officers were working professionals. It requires disciplined time management (3-4 hours daily), strategic preparation, and often weekend-intensive coaching. The key is consistency and efficient use of limited preparation time with focused study plans.",
    },
    {
      question: "What is the age limit for UPSC?",
      answer:
        "General category: 21-32 years (6 attempts), OBC: 21-35 years (9 attempts), SC/ST: 21-37 years (unlimited attempts until age limit). Age is calculated as on August 1st of the examination year. There are relaxations for PwD, ex-servicemen, and certain other categories as per government norms.",
    },
  ];

  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>Competitive Exams in India</h1>
          <p className="tagline">A Comprehensive Guide for Aspirants</p>
        </div>
      </div>

      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-number">100M+</span>
          <span className="stat-label">Annual Test Takers</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">50+</span>
          <span className="stat-label">Major Examinations</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">3</span>
          <span className="stat-label">Career Tiers</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">200K+</span>
          <span className="stat-label">Annual Govt Jobs</span>
        </div>
      </div>

      {/* ENHANCED FEATURED UPSC SECTION - THE SPECTACULAR STAR! */}
      <div className="container">
        <div className="featured-section">
          <span className="featured-badge">🏆 JDAX ACADEMY SPECIALTY</span>
          <h2>🏛️ UPSC Civil Services</h2>
          <p className="subtitle">
            India's Most Prestigious Examination - Transform Your Life Through
            Public Service
          </p>

          {/* PREVIEW TILES - THE IMPRESSIVE NEW ADDITION! */}
          <div className="preview-tiles-section">
            <div className="preview-tiles-header">
              📚 What You'll Learn in Our Complete UPSC Guide
            </div>
            <div className="preview-tiles-grid">
              {upscPreviewTiles.map((tile) => (
                <div
                  key={tile.number}
                  className="preview-tile"
                  onClick={() => onNavigate("civil")}
                >
                  <div>
                    <span className="preview-tile-number">{tile.number}</span>
                    <span className="preview-tile-icon">{tile.icon}</span>
                  </div>
                  <div className="preview-tile-title">{tile.title}</div>
                  <div className="preview-tile-desc">{tile.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* QUICK BENEFIT CARDS */}
          <div className="featured-grid">
            <div className="featured-card">
              <h4>💰 Lifetime Earnings</h4>
              <p>
                Starting ₹1.2L/month, reaching ₹4L+ at senior levels. Total
                career earnings exceed ₹5 crore with pension benefits.
              </p>
            </div>
            <div className="featured-card">
              <h4>🏠 Premium Benefits</h4>
              <p>
                Government housing worth ₹30-50K/month, official vehicles,
                healthcare for family, and lifetime pension.
              </p>
            </div>
            <div className="featured-card">
              <h4>⚡ Impact at Scale</h4>
              <p>
                Your decisions affect millions. Formulate policies, manage
                budgets in crores, lead transformative projects.
              </p>
            </div>
            <div className="featured-card">
              <h4>🎯 JDAX Programs</h4>
              <p>
                <strong>Foundation 365</strong> (₹99,000) •{" "}
                <strong>Mains Mastery</strong> (₹40,000) •{" "}
                <strong>Optional Excellence</strong> (₹25,000)
              </p>
            </div>
          </div>

          <button className="featured-btn" onClick={() => onNavigate("civil")}>
            Explore Complete UPSC Guide →
          </button>
        </div>

        <h2 className="section-title">Understanding Competitive Exams</h2>
        <p className="intro-text">
          Competitive examinations in India serve as meritocratic gateways to
          educational opportunities and professional careers. These standardized
          assessments evaluate candidates on predetermined criteria, with
          limited seats creating intense competition. The examination ecosystem
          operates across three distinct tiers:{" "}
          <strong>school-level talent identification</strong> (ages 10-18),
          <strong>professional education gateways</strong>{" "}
          (undergraduate/postgraduate admissions), and{" "}
          <strong>government services recruitment</strong>
          (our primary focus area). With over 100 million annual test-takers
          competing for approximately 200,000 quality opportunities, these exams
          shape millions of aspirations and career trajectories.
        </p>

        <h2 className="section-title">Other Competitive Examinations</h2>
        <div className="exam-categories-grid">
          {otherExams.map((exam) => (
            <div key={exam.id} className="exam-card">
              <span className="icon">{exam.icon}</span>
              <h3>{exam.title}</h3>
              <p className="description">{exam.description}</p>
              <div className="exam-stats">
                <p>
                  <strong>Volume:</strong> {exam.stats}
                </p>
                <p>
                  <strong>Impact:</strong> {exam.impact}
                </p>
              </div>
              <button
                className="learn-more-btn"
                onClick={() => onNavigate(exam.id)}
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="faq-item"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="faq-question">
                  {faq.question}
                  <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                </div>

                {isOpen && (
                  <div className="faq-answer" style={{ minHeight: "75px" }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* For Educators Section */}
        <div className="educators-section">
          <h3>📚 For Educators & Researchers</h3>
          <p style={{ color: "#555", lineHeight: "1.8" }}>
            This guide is designed as an academic resource for understanding
            India's competitive examination ecosystem. It employs a{" "}
            <strong>taxonomy-based framework</strong> to categorize examinations
            by purpose and target demographic, supported by empirical data on
            candidate volumes, selection rates, and career outcomes. For
            institutional partnerships, curriculum integration, or research
            collaboration opportunities, please contact JDAX Academy. We welcome
            dialogue with educational institutions seeking to enhance their
            students' competitive examination readiness through evidence-based
            pedagogical approaches.
          </p>
        </div>
        <section className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-10 text-white text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Preparation?
          </h2>

          <p className="text-lg mb-8 text-purple-100 max-w-2xl mx-auto">
            Take the next step in your UPSC journey with JDAX Academy&apos;s
            expert guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/course-finder"
              className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:scale-105 transition"
            >
              Which Exam Fits You?
            </Link>
            <Link
              to="course-comparison"
              className="px-8 py-4 bg-purple-700 rounded-xl font-bold hover:bg-purple-800 transition"
            >
              Compare All Exams
            </Link>
            <a
              href={`https://wa.me/6379923050?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white rounded-xl font-bold hover:bg-white hover:text-purple-600 transition"
            >
              Talk to Counselor
            </a>
          </div>
        </section>
      </div>

      {/* <div className="footer">
        <div className="footer-content">
          <h3>Begin Your Journey to Excellence</h3>
          <p>
            Choose your path and let JDAX Academy guide you to success with
            expert mentorship, comprehensive preparation, and our proven "RISE
            TO SERVE" methodology.
          </p>
          <button className="cta-button">Explore Our Programs</button>
        </div>
      </div> */}
    </>
  );
};

// COMPREHENSIVE UPSC/Civil Services Component - THE MASTERPIECE!
const CivilServices = ({ onNavigate }) => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>🏛️ Civil Services Examination</h1>
          <p className="tagline">
            India's Most Prestigious Career Path - Complete Institutional
            Analysis
          </p>
        </div>
      </div>

      <div className="container">
        <button className="back-btn" onClick={() => onNavigate("hub")}>
          ← Back to All Exams
        </button>

        <div className="detail-content">
          <h2>Decoding Civil Services: Institutional Analysis</h2>

          <h3>Conceptual Framework</h3>
          <p>
            <strong>Civil Services</strong> constitute the permanent executive
            machinery of government—a professional administrative cadre
            responsible for policy implementation, public resource management,
            and governance continuity across political transitions. Unlike
            political leadership that changes with elections, civil servants
            provide institutional memory and administrative expertise that
            ensures continuity in governance, making them the backbone of
            democratic governance in India.
          </p>

          <div className="venn-explanation">
            <h4 style={{ color: "#667eea", marginBottom: "20px" }}>
              Understanding the Distinction
            </h4>
            <div style={{ fontSize: "3em", marginBottom: "20px" }}>
              <span style={{ color: "#f5576c" }}>◯</span>
              <span style={{ color: "#667eea", marginLeft: "-20px" }}>◉</span>
            </div>
            <p className="venn-text">
              All Civil Services are Public Services | Not all Public Services
              are Civil Services
            </p>
            <p style={{ marginTop: "15px", color: "#666" }}>
              The inner circle (Civil Services) represents the elite
              administrative cadre. The outer circle represents all government
              employees. This fundamental distinction shapes career
              trajectories, responsibilities, and societal impact.
            </p>
          </div>

          <h3>Comparative Taxonomy: Civil Services vs Public Services</h3>
          <table className="exam-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Civil Services</th>
                <th>Public Services (Broader)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Scope</strong>
                </td>
                <td>Elite administrative cadre (IAS, IPS, IFS, IRS)</td>
                <td>All government employment sectors</td>
              </tr>
              <tr>
                <td>
                  <strong>Selection Process</strong>
                </td>
                <td>Highly competitive UPSC CSE (0.1-2% selection)</td>
                <td>Varies by position (2-15% typically)</td>
              </tr>
              <tr>
                <td>
                  <strong>Primary Functions</strong>
                </td>
                <td>
                  Policy formulation, high-level governance, decision-making
                </td>
                <td>Service delivery, operational execution</td>
              </tr>
              <tr>
                <td>
                  <strong>Examples</strong>
                </td>
                <td>District Magistrate, Commissioner, Secretary</td>
                <td>Teachers, doctors, clerks, engineers, police constables</td>
              </tr>
              <tr>
                <td>
                  <strong>Authority Level</strong>
                </td>
                <td>District to National level (policy makers)</td>
                <td>Operational to managerial levels</td>
              </tr>
              <tr>
                <td>
                  <strong>Career Ceiling</strong>
                </td>
                <td>Cabinet Secretary (apex administrative position)</td>
                <td>Department head or senior manager (typically)</td>
              </tr>
              <tr>
                <td>
                  <strong>Training</strong>
                </td>
                <td>
                  Specialized training at LBSNAA (IAS) and service academies
                </td>
                <td>Job-specific or departmental training</td>
              </tr>
              <tr>
                <td>
                  <strong>Posting Pattern</strong>
                </td>
                <td>
                  All-India mobility, diverse postings across states/ministries
                </td>
                <td>Usually within specific department/state</td>
              </tr>
            </tbody>
          </table>

          <div className="highlight-box">
            <h4>📋 Applied Example: Rural Healthcare Initiative</h4>
            <p>
              <strong>Scenario:</strong> Launching a ₹10 crore rural healthcare
              program across 20 villages
            </p>

            <p style={{ marginTop: "15px" }}>
              <strong>Civil Servant Role (District Magistrate - IAS):</strong>
            </p>
            <ul>
              <li>Sanctions ₹10 crore budget allocation from district funds</li>
              <li>
                Identifies 20 target villages based on demographic analysis and
                need assessment
              </li>
              <li>
                Coordinates inter-departmental resources (Health, PWD,
                Education)
              </li>
              <li>Sets performance metrics and monitors implementation</li>
              <li>
                Reports progress to state government and evaluates program
                impact
              </li>
            </ul>

            <p style={{ marginTop: "15px" }}>
              <strong>Public Servants Role (Execution Team):</strong>
            </p>
            <ul>
              <li>
                <strong>Medical Officers:</strong> Staff and operate Primary
                Health Centers
              </li>
              <li>
                <strong>Civil Engineers:</strong> Design and construct
                healthcare facility buildings
              </li>
              <li>
                <strong>Health Workers:</strong> Provide frontline medical
                services and outreach
              </li>
              <li>
                <strong>Teachers:</strong> Conduct health awareness programs in
                schools
              </li>
              <li>
                <strong>Clerks:</strong> Process documentation, maintain
                records, handle logistics
              </li>
            </ul>

            <p
              style={{
                marginTop: "15px",
                fontWeight: "bold",
                color: "#e65100",
              }}
            >
              Key Distinction: Civil servants design, oversee, and evaluate
              systems; public servants operate within these systems to deliver
              services.
            </p>
          </div>

          <h3>Three Core Functions of Civil Services</h3>
          <div className="key-points">
            <div className="point-card">
              <h4>1. Policy Formulation</h4>
              <p>
                Translate political vision into actionable administrative
                frameworks. Draft legislation, design schemes, and create
                implementation roadmaps that balance feasibility with political
                objectives.
              </p>
            </div>
            <div className="point-card">
              <h4>2. Resource Management</h4>
              <p>
                Allocate and oversee deployment of public resources—financial,
                human, and material. Ensure optimal utilization while
                maintaining fiscal discipline and accountability.
              </p>
            </div>
            <div className="point-card">
              <h4>3. Governance Continuity</h4>
              <p>
                Provide institutional stability across political transitions.
                Maintain administrative expertise, procedural knowledge, and
                operational continuity regardless of electoral outcomes.
              </p>
            </div>
          </div>

          <h2>Civil Services Career Proposition: Data-Driven Analysis</h2>

          <h3>Compensation Structure (7th Pay Commission)</h3>
          <table className="exam-table">
            <thead>
              <tr>
                <th>Service Years</th>
                <th>Grade</th>
                <th>Basic Pay (₹/month)</th>
                <th>Total Emoluments*</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0-4 years</td>
                <td>Junior Time Scale</td>
                <td>₹56,100</td>
                <td>~₹1.2 lakh</td>
              </tr>
              <tr>
                <td>4-9 years</td>
                <td>Senior Time Scale</td>
                <td>₹67,700</td>
                <td>~₹1.5 lakh</td>
              </tr>
              <tr>
                <td>9-13 years</td>
                <td>Junior Administrative Grade</td>
                <td>₹78,800</td>
                <td>~₹1.8 lakh</td>
              </tr>
              <tr>
                <td>13-17 years</td>
                <td>Selection Grade</td>
                <td>₹1,18,500</td>
                <td>~₹2.5 lakh</td>
              </tr>
              <tr>
                <td>17-25 years</td>
                <td>Senior Administrative Grade</td>
                <td>₹1,44,200</td>
                <td>~₹3 lakh</td>
              </tr>
              <tr>
                <td>25-30 years</td>
                <td>Higher Administrative Grade</td>
                <td>₹2,05,400</td>
                <td>~₹3.5 lakh</td>
              </tr>
              <tr>
                <td>30+ years</td>
                <td>Apex Scale (Secretary level)</td>
                <td>₹2,25,000</td>
                <td>~₹4 lakh</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: "0.95em", color: "#666", marginTop: "10px" }}>
            *Total emoluments include: Basic pay + Dearness Allowance (DA) +
            House Rent Allowance (HRA) + Transport Allowance + Other allowances
          </p>

          <div className="info-box">
            <h4>💡 Lifetime Earnings Perspective</h4>
            <p>
              A civil servant joining at age 24-25 and retiring at 60
              accumulates approximately <strong>₹5-7 crore</strong> in total
              earnings (excluding post-retirement pension). This includes salary
              progression, allowances, and benefits over a 35-year career.
              Post-retirement pension provides 50% of last drawn salary for
              life, adding significant long-term financial security.
            </p>
          </div>

          <h3>Total Compensation Package: Non-Monetary Benefits</h3>
          <div className="key-points">
            <div className="point-card">
              <h4>🏠 Housing</h4>
              <p>
                Type VI-VIII government quarters in prime locations (market
                rental value: ₹30-50K/month in metros, ₹15-25K in tier-2
                cities). Subsidized rent at nominal rates.
              </p>
            </div>
            <div className="point-card">
              <h4>🚗 Transport</h4>
              <p>
                Official vehicles with driver for senior positions. Fuel,
                maintenance, and driver salary borne by government. Estimated
                value: ₹25-40K/month.
              </p>
            </div>
            <div className="point-card">
              <h4>🏥 Healthcare</h4>
              <p>
                CGHS medical facilities for entire family including parents.
                Coverage for all medical treatments at government hospitals and
                empaneled private facilities.
              </p>
            </div>
            <div className="point-card">
              <h4>💰 Pension</h4>
              <p>
                Defined benefit pension at 50% of last drawn salary. Unlike
                private sector NPS, guaranteed monthly income for life with DA
                adjustments matching active employees.
              </p>
            </div>
            <div className="point-card">
              <h4>🛡️ Job Security</h4>
              <p>
                Lifetime employment security except in cases of proven
                misconduct. Protection from arbitrary termination ensures career
                stability and long-term planning.
              </p>
            </div>
            <div className="point-card">
              <h4>📚 Leave Benefits</h4>
              <p>
                30 days earned leave + 20 days half-pay leave + 8 days casual
                leave annually. Accumulated leave encashment on retirement.
                Study leave for higher education.
              </p>
            </div>
            <div className="point-card">
              <h4>✈️ Travel</h4>
              <p>
                LTC (Leave Travel Concession) for family travel across India.
                International deputation opportunities. First-class travel
                entitlement for official purposes.
              </p>
            </div>
            <div className="point-card">
              <h4>🎓 Children's Education</h4>
              <p>
                Access to Kendriya Vidyalayas and central government schools.
                Educational loan facilities at subsidized rates. Study grant
                allowances for higher education.
              </p>
            </div>
          </div>

          <h3>Why Choose Civil Services? Comprehensive Motivation Analysis</h3>

          <div className="success-box">
            <h4>🎯 Impact at Scale</h4>
            <p>
              As a civil servant, your decisions cascade across millions of
              lives. A district magistrate oversees 15-30 lakh citizens. Your
              policy choices in agriculture affect farmer incomes. Your
              education initiatives shape children's futures. Your
              infrastructure decisions determine economic growth trajectories.
              Few careers offer this magnitude of societal impact.
            </p>
          </div>

          <div className="success-box">
            <h4>🌟 Diverse Challenges & Continuous Learning</h4>
            <p>
              Civil services offer unparalleled professional diversity. You
              might manage disaster relief operations one month, formulate
              industrial policy the next, and oversee election administration
              subsequently. Exposure spans sectors: agriculture, healthcare,
              education, urban planning, law enforcement, revenue
              administration, and international diplomacy. Each posting brings
              new domains, preventing career stagnation.
            </p>
          </div>

          <div className="success-box">
            <h4>⚖️ Work-Life Integration</h4>
            <p>
              Despite demanding responsibilities, civil services offer better
              work-life balance than many private sector careers. Defined
              working hours (exceptions during crises), generous leave
              provisions, and institutional support systems enable family time.
              Sundays and gazetted holidays are generally respected except for
              essential services. Transfer policies consider family welfare and
              children's education.
            </p>
          </div>

          <div className="success-box">
            <h4>🏛️ Prestige & Social Standing</h4>
            <p>
              Civil servants, particularly IAS/IPS officers, command respect
              across Indian society. The position carries inherent authority
              that transcends wealth. District Collectors are often the most
              influential figures in their jurisdictions. This social capital
              facilitates administrative effectiveness and provides personal
              satisfaction beyond monetary compensation.
            </p>
          </div>

          <div className="success-box">
            <h4>🎓 Career Progression & Stability</h4>
            <p>
              Promotion is time-bound with merit consideration. You're assured
              of reaching senior positions (₹2+ lakh/month) by mid-career. No
              risk of technological obsolescence or industry downturns. Your
              expertise in governance remains relevant throughout your career.
              Post-retirement opportunities include advisory roles, academic
              positions, and international organizations.
            </p>
          </div>

          <h3>UPSC Civil Services Examination: Structure & Pattern</h3>

          <div className="warning-box">
            <h4>📊 Selection Statistics (Reality Check)</h4>
            <p>
              <strong>Annual Candidates:</strong> 10-12 lakh register, 4-5 lakh
              appear for Prelims
            </p>
            <p>
              <strong>Prelims Clearance:</strong> ~15,000 qualify (0.3% of
              registrants)
            </p>
            <p>
              <strong>Mains Clearance:</strong> ~2,000 reach Interview (0.04% of
              registrants)
            </p>
            <p>
              <strong>Final Selection:</strong> ~1,000 appointed (0.02% of
              registrants)
            </p>
            <p style={{ marginTop: "15px", fontWeight: "bold" }}>
              Success Rate: Approximately 1 in 1,000 candidates who register
              ultimately get selected. This extreme competition demands
              strategic preparation, expert guidance, and unwavering commitment.
            </p>
          </div>

          <h4>Examination Stages:</h4>

          <div className="info-box">
            <h4>Stage 1: Preliminary Examination (Objective)</h4>
            <ul>
              <li>
                <strong>Paper I - General Studies:</strong> 200 marks, 2 hours
                (100 questions)
                <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
                  <li>
                    Current events, Indian History, Geography, Polity, Economy,
                    Environment, Science
                  </li>
                </ul>
              </li>
              <li>
                <strong>Paper II - CSAT:</strong> 200 marks, 2 hours (80
                questions) - Qualifying nature (33% required)
                <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
                  <li>
                    Comprehension, Logical reasoning, Analytical ability,
                    Decision making, Problem solving
                  </li>
                </ul>
              </li>
              <li>
                <strong>Negative Marking:</strong> 1/3 marks deducted for wrong
                answers
              </li>
              <li>
                <strong>Purpose:</strong> Screening test; marks don't count
                toward final merit
              </li>
            </ul>
          </div>

          <div className="info-box">
            <h4>Stage 2: Main Examination (Descriptive)</h4>
            <ul>
              <li>
                <strong>Paper A:</strong> Qualifying paper on Indian language
                (300 marks)
              </li>
              <li>
                <strong>Paper B:</strong> English (300 marks) - Qualifying
              </li>
              <li>
                <strong>Paper I:</strong> Essay (250 marks)
              </li>
              <li>
                <strong>Paper II:</strong> General Studies I - Indian Heritage,
                History, Geography (250 marks)
              </li>
              <li>
                <strong>Paper III:</strong> General Studies II - Governance,
                Polity, Social Justice (250 marks)
              </li>
              <li>
                <strong>Paper IV:</strong> General Studies III - Technology,
                Economy, Environment, Security (250 marks)
              </li>
              <li>
                <strong>Paper V:</strong> General Studies IV - Ethics,
                Integrity, Aptitude (250 marks)
              </li>
              <li>
                <strong>Paper VI & VII:</strong> Optional Subject (250+250 = 500
                marks)
              </li>
              <li>
                <strong>Total:</strong> 1,750 marks counted toward merit
              </li>
              <li>
                <strong>Duration:</strong> 3 hours per paper
              </li>
            </ul>
          </div>

          <div className="info-box">
            <h4>Stage 3: Personality Test (Interview)</h4>
            <ul>
              <li>
                <strong>Marks:</strong> 275 marks
              </li>
              <li>
                <strong>Duration:</strong> 30-45 minutes typically
              </li>
              <li>
                <strong>Panel:</strong> UPSC Board comprising 4-5 senior
                officials
              </li>
              <li>
                <strong>Assessment:</strong> Personality traits, intellectual
                curiosity, balanced judgment, leadership qualities, social
                cohesion
              </li>
              <li>
                <strong>Coverage:</strong> DAF (Detailed Application Form),
                current affairs, Optional subject, general awareness
              </li>
            </ul>
          </div>

          <div className="highlight-box">
            <h4>📅 Examination Calendar & Attempts</h4>
            <ul>
              <li>
                <strong>Prelims:</strong> Usually conducted in May/June
              </li>
              <li>
                <strong>Mains:</strong> September/October (5-6 months after
                Prelims)
              </li>
              <li>
                <strong>Interview:</strong> February-May (4-5 months after
                Mains)
              </li>
              <li>
                <strong>Final Results:</strong> May/June (approximately 12-14
                months from Prelims)
              </li>
              <li>
                <strong>Age Limit:</strong> 21-32 years for General category
                (calculated as on August 1st)
              </li>
              <li>
                <strong>Attempts Allowed:</strong> 6 for General, 9 for OBC,
                Unlimited for SC/ST (within age limit)
              </li>
            </ul>
          </div>

          <h2>JDAX Academy: Your UPSC Success Partner</h2>

          <div className="success-box">
            <h4>🎯 Our RISE TO SERVE Philosophy</h4>
            <p>
              We believe civil services preparation is not just about clearing
              an examination—it's about transforming yourself into a leader
              capable of serving society with integrity, competence, and
              compassion. Our pedagogy emphasizes:
            </p>
            <ul>
              <li>
                <strong>Conceptual Clarity:</strong> Deep understanding over
                rote memorization
              </li>
              <li>
                <strong>Analytical Thinking:</strong> Developing
                multi-dimensional perspectives on issues
              </li>
              <li>
                <strong>Answer Writing Excellence:</strong> Translating
                knowledge into scoring answers
              </li>
              <li>
                <strong>Ethical Foundation:</strong> Building character
                alongside academic preparation
              </li>
              <li>
                <strong>Current Affairs Integration:</strong> Connecting static
                knowledge with contemporary developments
              </li>
            </ul>
          </div>

          <h3>Our UPSC Programme Portfolio</h3>

          <div className="key-points">
            <div className="point-card">
              <h4>Foundation 365 - ₹99,000</h4>
              <p>
                11-month intensive programme covering complete GS (Prelims +
                Mains), CSAT, and Optional subject. Ideal for first-time
                aspirants seeking comprehensive preparation.
              </p>
            </div>
            <div className="point-card">
              <h4>Mains Mastery 365 - ₹40,000</h4>
              <p>
                Advanced programme for second-year aspirants. Focuses on
                advanced answer writing, Optional excellence, and interview
                preparation with personal mentorship.
              </p>
            </div>
            <div className="point-card">
              <h4>Optional Excellence - ₹25,000</h4>
              <p>
                Specialized coaching in Tamil Literature, Political Science,
                Sociology, History. 300+ hours of expert instruction with 40+
                evaluated answers.
              </p>
            </div>
            <div className="point-card">
              <h4>Interview Guidance - FREE</h4>
              <p>
                Comprehensive personality development for Mains-qualified
                candidates. Mock interviews with serving IAS/IPS officers, DAF
                analysis, and communication training.
              </p>
            </div>
          </div>

          <div className="highlight-box">
            <h4>🎓 Why Choose JDAX Academy for UPSC?</h4>
            <ul>
              <li>
                <strong>Expert Faculty:</strong> Experienced educators with
                proven track records in UPSC coaching
              </li>
              <li>
                <strong>Comprehensive Coverage:</strong> Every aspect from
                foundational concepts to advanced answer writing
              </li>
              <li>
                <strong>Personalized Mentorship:</strong> Individual attention
                and customized guidance based on your strengths/weaknesses
              </li>
              <li>
                <strong>Test Series:</strong> Regular assessment through Prelims
                and Mains test series with detailed evaluation
              </li>
              <li>
                <strong>Current Affairs:</strong> Daily, weekly, and monthly
                current affairs coverage integrated with static topics
              </li>
              <li>
                <strong>Study Materials:</strong> Meticulously curated resources
                aligned with UPSC requirements
              </li>
              <li>
                <strong>Small Batch Sizes:</strong> Ensuring quality interaction
                and doubt clearance
              </li>
              <li>
                <strong>Interview Preparation:</strong> FREE comprehensive
                programme for Mains-qualified students
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

// Simple Detail Pages for Other Exams
const SimpleExamDetail = ({ onNavigate, examData }) => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>
            {examData.icon} {examData.title}
          </h1>
          <p className="tagline">{examData.tagline}</p>
        </div>
      </div>

      <div className="container">
        <button className="back-btn" onClick={() => onNavigate("hub")}>
          ← Back to All Exams
        </button>

        <div className="detail-content">
          <h2>Overview</h2>
          <p>{examData.overview}</p>

          {examData.stats && (
            <div className="info-box">
              <h4>Key Statistics</h4>
              <ul>
                {examData.stats.map((stat, idx) => (
                  <li key={idx}>{stat}</li>
                ))}
              </ul>
            </div>
          )}

          {examData.highlights && (
            <div className="success-box">
              <h4>Key Highlights</h4>
              <ul>
                {examData.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}

          {examData.preparation && (
            <div className="warning-box">
              <h4>Preparation Strategy</h4>
              <ul>
                {examData.preparation.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="footer">
        <div className="footer-content">
          <h3>Excel in Your Chosen Path</h3>
          <p>
            JDAX Academy provides comprehensive guidance for various competitive
            examinations.
          </p>
        </div>
      </div>
    </>
  );
};

// Main BeginnerNew Component
const BeginnerNew = () => {
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

  const examDetailsData = {
    school: {
      icon: "🎓",
      title: "School-Level Examinations",
      tagline: "Early Talent Identification Programs (Ages 10-18)",
      overview:
        "School-level competitive examinations identify and nurture exceptional talent from early age. Programs like NTSE provide ₹1.25 lakh annual scholarships. Olympiads offer international exposure and university admission advantages. KVPY creates pathways to premier science institutions like IISc and IISERs.",
      stats: [
        "NTSE: ₹1.25L scholarship per year",
        "Olympiads: International representation opportunities",
        "KVPY: Direct admission to IISc/IISER",
        "Early recognition strengthens college applications",
      ],
      highlights: [
        "Foundation for academic excellence",
        "Scholarship opportunities",
        "Advanced problem-solving skills",
        "International exposure through Olympiads",
        "Preferred consideration at premier institutions",
      ],
      preparation: [
        "Start with NCERT mastery",
        "Regular practice with previous papers",
        "Develop speed and accuracy",
        "Participate in school competitions",
        "Join specialized coaching if needed",
      ],
    },
    engineering: {
      icon: "⚙️",
      title: "Engineering Entrance (JEE)",
      tagline: "Gateway to IITs, NITs, and Premier Engineering Institutions",
      overview:
        "JEE Main qualifies for NITs, IIITs, and state colleges. JEE Advanced is the gateway to 23 IITs. With 13 lakh annual candidates competing for limited seats, it demands rigorous preparation in Physics, Chemistry, and Mathematics.",
      stats: [
        "13 lakh candidates annually",
        "11% qualify JEE Main",
        "0.5% reach IITs via JEE Advanced",
        "Two attempts per year (January, April)",
        "Computer-based examination",
      ],
      highlights: [
        "Access to 23 IITs, 31 NITs",
        "Two-tier system: Main and Advanced",
        "Objective question format",
        "Strong PCM foundation required",
        "World-class technical education",
      ],
      preparation: [
        "Master NCERT thoroughly",
        "Practice 10,000+ problems",
        "Mock tests regularly",
        "Focus on conceptual clarity",
        "Time management crucial",
      ],
    },
    medical: {
      icon: "🏥",
      title: "Medical Entrance (NEET UG)",
      tagline: "Single Gateway to All Medical & Dental Programs",
      overview:
        "NEET UG is the mandatory entrance for MBBS, BDS, and AYUSH programs across India. With 20 lakh annual candidates and 8% selection rate for MBBS, it tests Physics, Chemistry, and Biology based on NCERT curriculum.",
      stats: [
        "20 lakh candidates annually",
        "8% MBBS selection rate",
        "Single exam for all medical colleges",
        "NCERT-based curriculum",
        "Pen-and-paper examination",
      ],
      highlights: [
        "Mandatory nationwide entrance",
        "Government and private college admissions",
        "NCERT syllabus focus",
        "High social prestige career",
        "Financial stability assured",
      ],
      preparation: [
        "NCERT is the bible",
        "Practice previous 15 years papers",
        "Biology requires memorization",
        "PCB integration important",
        "Daily revision essential",
      ],
    },
    management: {
      icon: "💼",
      title: "Management Entrance (CAT)",
      tagline: "Gateway to IIMs and Top B-Schools",
      overview:
        "CAT is conducted by IIMs for MBA admissions. Testing quantitative ability, verbal skills, and logical reasoning, it's accepted by 1000+ B-schools. Only 2% reach IIMs from 2.5 lakh annual candidates.",
      stats: [
        "2.5 lakh candidates",
        "2% IIM selection",
        "Computer-based test",
        "Three sections: QA, VARC, DILR",
        "Accepted by 1000+ institutions",
      ],
      highlights: [
        "20 IIMs plus FMS, XLRI, MDI",
        "Tests analytical skills",
        "Work experience beneficial",
        "Average IIM salary ₹25-30L",
        "High career ROI",
      ],
      preparation: [
        "6-12 months preparation",
        "Daily newspaper reading",
        "Mock tests crucial",
        "Time management key",
        "Mental math speed important",
      ],
    },
    law: {
      icon: "⚖️",
      title: "Law Entrance (CLAT)",
      tagline: "Gateway to National Law Universities",
      overview:
        "CLAT provides admission to 22 National Law Universities for 5-year BA LLB and 3-year LLB programs. Testing English, current affairs, legal reasoning, and logical ability, 60,000 candidates compete annually.",
      stats: [
        "60,000 candidates annually",
        "4% NLU selection",
        "Covers English, Current Affairs, Legal Reasoning",
        "Pen-and-paper examination",
        "22 NLUs participate",
      ],
      highlights: [
        "Access to premier law education",
        "Corporate law, litigation, judiciary pathways",
        "Strong current affairs emphasis",
        "Relatively shorter preparation time",
        "5-year integrated programs available",
      ],
      preparation: [
        "Current affairs crucial",
        "Reading comprehension practice",
        "Legal reasoning scenarios",
        "General knowledge building",
        "3-6 months sufficient",
      ],
    },
    banking: {
      icon: "🏦",
      title: "Banking & Finance Examinations",
      tagline: "IBPS, SBI, RBI - Secure Banking Careers",
      overview:
        "Banking exams offer PO, Clerk, and Specialist Officer positions in public sector banks. With 15,000-20,000 annual vacancies through IBPS and SBI, these provide job security and career growth in India's banking sector.",
      stats: [
        "15,000-20,000 annual vacancies",
        "IBPS common exam for multiple banks",
        "SBI separate recruitment",
        "RBI Grade A/B officers",
        "Three-tier: Prelims, Mains, Interview",
      ],
      highlights: [
        "High job security",
        "Defined career progression",
        "Attractive salary with increments",
        "Better work-life balance than private",
        "Pension and housing loan benefits",
      ],
      preparation: [
        "Quantitative aptitude crucial",
        "Banking awareness important",
        "English language skills",
        "Current affairs (6 months)",
        "Computer knowledge basic",
      ],
    },
    ssc: {
      icon: "📋",
      title: "SSC (Staff Selection Commission)",
      tagline: "Central Government Services Recruitment",
      overview:
        "SSC conducts CGL for graduate-level posts, CHSL for 10+2 level, and MTS for 10th pass candidates. With 40,000-50,000 annual vacancies across ministries, it offers diverse central government opportunities.",
      stats: [
        "40,000-50,000 annual vacancies",
        "CGL: Graduate level posts",
        "CHSL: 10+2 level posts",
        "Computer-based examination",
        "Four-tier selection process",
      ],
      highlights: [
        "Central government employment",
        "Diverse posts: Inspectors, Auditors, Tax Assistants",
        "Good salary (7th Pay Commission)",
        "Job security and benefits",
        "All-India posting opportunities",
      ],
      preparation: [
        "Quantitative aptitude focus",
        "English grammar important",
        "General awareness crucial",
        "Previous papers practice",
        "Speed and accuracy vital",
      ],
    },
    railways: {
      icon: "🚂",
      title: "Railway Recruitment Board",
      tagline: "India's Largest Employer - Massive Opportunities",
      overview:
        "RRB conducts NTPC for graduates, Group D for 10th pass, and ALP for technical positions. As India's largest employer with 100,000+ annual vacancies, Railways offers stable careers with excellent benefits.",
      stats: [
        "100,000+ annual vacancies",
        "NTPC: Graduate level",
        "Group D: 10th pass level",
        "ALP: Technical positions",
        "Computer-based tests",
      ],
      highlights: [
        "Massive recruitment numbers",
        "Job security as central government",
        "Free/concessional rail travel",
        "Medical and housing facilities",
        "Diverse technical and non-technical roles",
      ],
      preparation: [
        "General awareness important",
        "Mathematics and reasoning",
        "Technical subjects for ALP",
        "Current affairs focus",
        "Previous papers essential",
      ],
    },
    defence: {
      icon: "🎖️",
      title: "Defence Services Examinations",
      tagline: "NDA, CDS, AFCAT - Serve the Nation with Honor",
      overview:
        "Defence exams provide pathways to Indian Army, Navy, and Air Force. NDA for 10+2, CDS for graduates, AFCAT for Air Force. With 5,000-7,000 annual vacancies, these offer prestigious military careers combining service, adventure, and leadership.",
      stats: [
        "5,000-7,000 annual vacancies",
        "NDA: 10+2 students",
        "CDS: Graduates",
        "AFCAT: Air Force specific",
        "SSB interview crucial",
      ],
      highlights: [
        "Serve nation with pride",
        "World-class training at NDA, IMA, AFA",
        "Adventure and travel opportunities",
        "Excellent compensation and perks",
        "Leadership development",
        "Post-retirement benefits",
      ],
      preparation: [
        "Physical fitness mandatory",
        "General knowledge important",
        "Mathematics for NDA/AFCAT",
        "English language skills",
        "Personality development for SSB",
      ],
    },
    teaching: {
      icon: "👨‍🏫",
      title: "Teaching Eligibility Tests",
      tagline: "CTET, State TETs, UGC NET - Shape Future Generations",
      overview:
        "CTET qualifies for central government schools (Classes 1-8), State TETs for state schools, and UGC NET for college/university teaching and research. These certifications open doors to shaping India's educational future.",
      stats: [
        "Variable vacancies by state",
        "CTET: Lifetime validity",
        "State TETs: State-specific",
        "UGC NET: Junior Research Fellowship",
        "Growing demand for teachers",
      ],
      highlights: [
        "Lifetime CTET validity",
        "Job security in government schools",
        "Work-life balance",
        "Summer and winter vacations",
        "Pension benefits",
        "UGC NET offers JRF scholarship",
      ],
      preparation: [
        "Child pedagogy important",
        "Subject knowledge crucial",
        "Teaching methodology understanding",
        "Previous papers practice",
        "Current education policies",
      ],
    },
  };

  const renderPage = () => {
    if (currentPage === "hub") {
      return <Hub onNavigate={setCurrentPage} />;
    } else if (currentPage === "civil") {
      return <CivilServices onNavigate={setCurrentPage} />;
    } else {
      const examData = examDetailsData[currentPage];
      if (examData) {
        return (
          <SimpleExamDetail onNavigate={setCurrentPage} examData={examData} />
        );
      }
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

export default BeginnerNew;
