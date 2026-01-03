import React from "react";
import "./resourceContent.css";
const ResourceContent = () => {
  return (
    <div className="container">
      <div className="headerPart">
        <h1 className="headerCom">Competitive Exams in India</h1>
        <p className="tagline">Your Evidence-Based Guide to Career Success</p>
      </div>
      <div className="nav-buttons">
        <button
          onClick={() =>
            document
              .getElementById("introduction")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Introduction
        </button>

        <button
          onClick={() =>
            document
              .getElementById("definition")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Definition
        </button>

        <button
          onClick={() =>
            document
              .getElementById("taxonomy")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Taxonomy
        </button>

        <button
          onClick={() =>
            document
              .getElementById("civil-services")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Civil Services
        </button>

        <button
          onClick={() =>
            document
              .getElementById("civil-career")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Civil Career
        </button>

        <button
          onClick={() =>
            document
              .getElementById("jdax")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          JDAX
        </button>

        <button
          onClick={() =>
            document
              .getElementById("faq")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          FAQ
        </button>

        <button
          onClick={() =>
            document
              .getElementById("academic-perspective")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Academic Perspective
        </button>
      </div>

      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-number">3Cr+</span>
          <span className="stat-label">Annual Test Takers</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">250+</span>
          <span className="stat-label">Active Examinations</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">0.1-5%</span>
          <span className="stat-label">Selection Rate</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">₹50K-2.5L</span>
          <span className="stat-label">Monthly Salary Range</span>
        </div>
      </div>

      <div className="content">
        <section id="introduction">
          <h2>Understanding the Competitive Examination Ecosystem</h2>
          <p>
            India's competitive examination system represents one of the world's
            largest meritocratic selection mechanisms, annually processing over
            30 million candidates across diverse sectors. These standardized
            assessments serve as gatekeepers to premier educational
            institutions, government positions, and professional opportunities.
          </p>
        </section>

        <section id="definition">
          <h2>What Are Competitive Exams?</h2>

          <div className="definition-box">
            <h3 style={{ marginTop: 0, color: "#667eea" }}>
              Academic Definition
            </h3>
            <p>
              <strong>Competitive examinations</strong> are standardized
              assessment instruments designed to rank candidates based on merit
              for limited opportunities. Unlike criterion-referenced evaluations
              (pass/fail), these are norm-referenced tests where performance is
              measured relative to peer groups.
            </p>
          </div>

          <div className="highlight-box">
            <h3>The Competitive Element: A Statistical Perspective</h3>
            <p>
              The term "competitive" stems from the fundamental selection ratio
              disparity:
            </p>
            <ul>
              <li>
                <strong>Applicant-to-Seat Ratio:</strong> Often exceeds 100:1 in
                premier examinations
              </li>
              <li>
                <strong>Relative Ranking System:</strong> Absolute scores matter
                less than percentile ranks
              </li>
              <li>
                <strong>Zero-Sum Dynamics:</strong> One candidate's success
                directly impacts others' probability
              </li>
              <li>
                <strong>Cutoff Variability:</strong> Determined by cohort
                performance, not predetermined standards
              </li>
            </ul>
          </div>

          <div className="academic-note">
            <h4>📊 Research Insight</h4>
            <p>
              <strong>UPSC Success Probability Model:</strong> With 1 million
              applicants and 1,000 vacancies, assuming equal preparedness, each
              candidate has a 0.1% baseline probability. However, quality
              preparation increases individual odds by 40-60x, demonstrating the
              impact of structured learning interventions.
            </p>
          </div>

          <h3>Three Core Functions</h3>
          <div className="key-points">
            <div className="point-card">
              <h4>1. Selection Mechanism</h4>
              <p>
                Identifies optimal candidates from large applicant pools using
                multi-stage filtering (prelims → mains → interview)
              </p>
            </div>
            <div className="point-card">
              <h4>2. Merit Validation</h4>
              <p>
                Provides objective, standardized assessment independent of
                institutional affiliations or geographic location
              </p>
            </div>
            <div className="point-card">
              <h4>3. Human Capital Sorting</h4>
              <p>
                Allocates talent to roles requiring specific cognitive
                abilities, knowledge domains, and aptitudes
              </p>
            </div>
          </div>
        </section>

        <section id="taxonomy">
          <h2>Examination Taxonomy: A Strategic Framework</h2>

          <div className="exam-category">
            <h3>🎓 Tier 1: School-Level Talent Identification (Ages 10-18)</h3>
            <table>
              <thead>
                <tr>
                  <th>Examination</th>
                  <th>Purpose</th>
                  <th>Impact Factor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>NTSE</strong>
                  </td>
                  <td>National talent scholarship (₹1.25L/year)</td>
                  <td>Early academic recognition</td>
                </tr>
                <tr>
                  <td>
                    <strong>Olympiads</strong>
                  </td>
                  <td>Subject mastery + international exposure</td>
                  <td>University admissions advantage</td>
                </tr>
                <tr>
                  <td>
                    <strong>KVPY</strong>
                  </td>
                  <td>Science research aptitude</td>
                  <td>IISc/IISER pathways</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="exam-category">
            <h3>⚙️ Tier 2: Professional Education Gateways</h3>
            <table>
              <thead>
                <tr>
                  <th>Domain</th>
                  <th>Primary Exam</th>
                  <th>Annual Candidates</th>
                  <th>Selection Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Engineering</strong>
                  </td>
                  <td>JEE Main/Advanced</td>
                  <td>13 lakh</td>
                  <td>11% (Main), 0.5% (IITs)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Medical</strong>
                  </td>
                  <td>NEET UG</td>
                  <td>20 lakh</td>
                  <td>8% (MBBS seats)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Management</strong>
                  </td>
                  <td>CAT</td>
                  <td>2.5 lakh</td>
                  <td>2% (IIMs)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Law</strong>
                  </td>
                  <td>CLAT</td>
                  <td>60,000</td>
                  <td>4% (NLUs)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="exam-category" style={{ borderLeftColor: "#f5576c" }}>
            <h3>🏛️ Tier 3: Government Services (JDAX Focus Area)</h3>
            <p>
              <strong>Market Characteristics:</strong> High job security,
              defined career progression, pension benefits, and societal
              prestige drive demand despite moderate initial compensation.
            </p>

            <table>
              <thead>
                <tr>
                  <th>Service Category</th>
                  <th>Key Examinations</th>
                  <th>Vacancies (Annual)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Civil Services</strong>
                  </td>
                  <td>UPSC CSE, State PSCs</td>
                  <td>
                    1,000-2,000 (UPSC)
                    <br />
                    3,000-5,000 (States)
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Banking & Finance</strong>
                  </td>
                  <td>IBPS, SBI, RBI</td>
                  <td>15,000-20,000</td>
                </tr>
                <tr>
                  <td>
                    <strong>Central Services</strong>
                  </td>
                  <td>SSC (CGL, CHSL, MTS)</td>
                  <td>40,000-50,000</td>
                </tr>
                <tr>
                  <td>
                    <strong>Railways</strong>
                  </td>
                  <td>RRB (NTPC, Group D, ALP)</td>
                  <td>100,000+</td>
                </tr>
                <tr>
                  <td>
                    <strong>Defence</strong>
                  </td>
                  <td>NDA, CDS, AFCAT</td>
                  <td>5,000-7,000</td>
                </tr>
                <tr>
                  <td>
                    <strong>Teaching</strong>
                  </td>
                  <td>CTET, State TETs, UGC NET</td>
                  <td>Variable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="civil-services">
          <h2>Decoding Civil Services: Institutional Analysis</h2>

          <h3>Conceptual Framework</h3>
          <p>
            <strong>Civil Services</strong> constitute the permanent executive
            machinery of government—a professional administrative cadre
            responsible for policy implementation, public resource management,
            and governance continuity across political transitions.
          </p>

          <div className="venn-diagram">
            <svg
              width="400"
              height="300"
              viewBox="0 0 400 300"
              style={{ maxWidth: "100%", height: "auto" }}
            >
              <circle
                cx="200"
                cy="150"
                r="120"
                fill="#f5576c"
                opacity="0.3"
                stroke="#f5576c"
                stroke-width="3"
              />
              <circle
                cx="200"
                cy="150"
                r="70"
                fill="#667eea"
                opacity="0.4"
                stroke="#667eea"
                stroke-width="3"
              />
              <text
                x="200"
                y="140"
                text-anchor="middle"
                font-size="16"
                font-weight="bold"
                fill="#333"
              >
                Civil Services
              </text>
              <text
                x="200"
                y="160"
                text-anchor="middle"
                font-size="14"
                fill="#666"
              >
                (IAS, IPS, IFS)
              </text>
              <text
                x="200"
                y="250"
                text-anchor="middle"
                font-size="16"
                font-weight="bold"
                fill="#333"
              >
                Public Services
              </text>
              <text
                x="200"
                y="270"
                text-anchor="middle"
                font-size="13"
                fill="#666"
              >
                (All Government Employees)
              </text>
            </svg>
            <p className="venn-text">
              All Civil Services are Public Services | Not all Public Services
              are Civil Services
            </p>
          </div>

          <h3>Comparative Taxonomy</h3>
          <table>
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
                <td>Elite administrative cadre</td>
                <td>All government employment</td>
              </tr>
              <tr>
                <td>
                  <strong>Selection</strong>
                </td>
                <td>Highly competitive (0.1-2%)</td>
                <td>Varies (2-15% typically)</td>
              </tr>
              <tr>
                <td>
                  <strong>Functions</strong>
                </td>
                <td>Policy formulation & governance</td>
                <td>Service delivery & operations</td>
              </tr>
              <tr>
                <td>
                  <strong>Examples</strong>
                </td>
                <td>IAS, IPS, IFS, IRS</td>
                <td>Teachers, doctors, clerks, engineers</td>
              </tr>
              <tr>
                <td>
                  <strong>Authority Level</strong>
                </td>
                <td>District to National (decision-makers)</td>
                <td>Operational to managerial</td>
              </tr>
              <tr>
                <td>
                  <strong>Career Ceiling</strong>
                </td>
                <td>Cabinet Secretary (apex)</td>
                <td>Department head (typically)</td>
              </tr>
            </tbody>
          </table>

          <div className="highlight-box" style={{ color: "black" }}>
            <h4>Applied Example: Rural Healthcare Initiative</h4>
            <ul>
              <li>
                <strong>Civil Servant (District Magistrate - IAS):</strong>{" "}
                Sanctions ₹10 crore budget, identifies 20 target villages,
                coordinates inter-departmental resources
              </li>
              <li>
                <strong>Public Servants (Execution Team):</strong>
                <ul>
                  <li>Medical Officers: Staff health centers</li>
                  <li>Engineers: Construct facilities</li>
                  <li>Teachers: Run health awareness programs</li>
                  <li>Clerks: Process documentation</li>
                </ul>
              </li>
            </ul>
            <p style={{ marginTop: "15px" }}>
              <strong>Key Distinction:</strong> Civil servants design and
              oversee systems; public servants operate within them.
            </p>
          </div>
        </section>

        <section id="civil-career">
          <h2>Civil Services Career Proposition: Data-Driven Analysis</h2>

          <h3>Compensation Structure (7th Pay Commission)</h3>
          <table>
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
                <td>0-4</td>
                <td>Junior Time Scale</td>
                <td>56,100</td>
                <td>~1.2 lakh</td>
              </tr>
              <tr>
                <td>4-9</td>
                <td>Senior Time Scale</td>
                <td>67,700</td>
                <td>~1.5 lakh</td>
              </tr>
              <tr>
                <td>9-13</td>
                <td>Junior Administrative Grade</td>
                <td>78,800</td>
                <td>~1.8 lakh</td>
              </tr>
              <tr>
                <td>13-17</td>
                <td>Selection Grade</td>
                <td>1,18,500</td>
                <td>~2.5 lakh</td>
              </tr>
              <tr>
                <td>25+</td>
                <td>Higher Administrative Grade+</td>
                <td>2,25,000</td>
                <td>~4 lakh</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: "0.95em", color: "#666" }}>
            *Includes basic pay + DA + HRA + allowances
          </p>

          <h3>Total Compensation Package (Non-Monetary)</h3>
          <div className="key-points">
            <div className="point-card">
              <h4>Housing</h4>
              <p>
                Type VI-VIII government quarters (value: ₹30-50K/month in
                metros)
              </p>
            </div>
            <div className="point-card">
              <h4>Transportation</h4>
              <p>Official vehicle + fuel + driver (value: ₹40-60K/month)</p>
            </div>
            <div className="point-card">
              <h4>Healthcare</h4>
              <p>CGHS coverage for entire family (value: ₹10-15K/month)</p>
            </div>
            <div className="point-card">
              <h4>Pension</h4>
              <p>50% of last drawn salary (lifelong post-retirement income)</p>
            </div>
            <div className="point-card">
              <h4>Security</h4>
              <p>Permanent employment; retrenchment-proof career</p>
            </div>
            <div className="point-card">
              <h4>Social Capital</h4>
              <p>Institutional authority, policy influence, public respect</p>
            </div>
          </div>

          <h3>Why Choose Civil Services? Motivation Analysis</h3>

          <div className="comparison-sections">
            <div className="comparison-card civil-services">
              <h4>Intrinsic Motivators</h4>
              <ul>
                <li>
                  <strong>Impact Scale:</strong> Decisions affecting millions
                </li>
                <li>
                  <strong>Autonomy:</strong> Administrative discretion in
                  implementation
                </li>
                <li>
                  <strong>Mastery:</strong> Diverse domain expertise development
                </li>
                <li>
                  <strong>Purpose:</strong> Direct contribution to
                  nation-building
                </li>
              </ul>
            </div>

            <div className="comparison-card public-services">
              <h4>Extrinsic Motivators</h4>
              <ul>
                <li>
                  <strong>Job Security:</strong> Constitutional employment
                  protection
                </li>
                <li>
                  <strong>Financial Stability:</strong> Predictable income +
                  pension
                </li>
                <li>
                  <strong>Social Status:</strong> "Collector Sahib/Madam"
                  prestige
                </li>
                <li>
                  <strong>Work-Life Balance:</strong> Regulated working hours
                  (generally)
                </li>
              </ul>
            </div>
          </div>

          <div className="quote">
            "The power to sanction a bridge isn't about the structure—it's about
            connecting isolated communities to markets, schools, and hospitals.
            That signature changes lives."
            <br />
            <br />— IAS Officer, Rural Development
          </div>
        </section>

        <section id="jdax">
          <h2>JDAX Academy: Our Pedagogical Approach</h2>

          <p>
            At JDAX, we employ evidence-based teaching methodologies aligned
            with cognitive learning principles:
          </p>

          <div className="key-points">
            <div className="point-card">
              <h4>Spaced Repetition Systems</h4>
              <p>
                Content review scheduled at optimal retention intervals
                (1-7-30-90 day cycles)
              </p>
            </div>
            <div className="point-card">
              <h4>Active Recall Testing</h4>
              <p>
                Regular mock exams simulating actual test conditions for
                retrieval practice
              </p>
            </div>
            <div className="point-card">
              <h4>Interleaved Learning</h4>
              <p>
                Mixed-topic sessions enhancing discrimination between concepts
              </p>
            </div>
            <div className="point-card">
              <h4>Metacognitive Training</h4>
              <p>
                Self-assessment skills, time management strategies, error
                analysis protocols
              </p>
            </div>
            <div className="point-card">
              <h4>Personalized Learning Paths</h4>
              <p>
                Diagnostic assessments creating individual strength-weakness
                matrices
              </p>
            </div>
            <div className="point-card">
              <h4>Peer Learning Communities</h4>
              <p>
                Collaborative study groups leveraging social learning theory
              </p>
            </div>
          </div>

          <h3>Course Portfolio</h3>
          <table>
            <thead>
              <tr>
                <th>Program</th>
                <th>Target Examination</th>
                <th>Duration</th>
                <th>Success Rate*</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Civil Services Foundation</strong>
                </td>
                <td>UPSC CSE Prelims + Mains</td>
                <td>18 months</td>
                <td>45%</td>
              </tr>
              <tr>
                <td>
                  <strong>TNPSC Integrated</strong>
                </td>
                <td>Group 1, 2, 2A, 4</td>
                <td>12 months</td>
                <td>52%</td>
              </tr>
              <tr>
                <td>
                  <strong>Banking Excellence</strong>
                </td>
                <td>IBPS PO/Clerk, SBI, RBI</td>
                <td>6 months</td>
                <td>38%</td>
              </tr>
              <tr>
                <td>
                  <strong>SSC Fast Track</strong>
                </td>
                <td>CGL, CHSL, MTS</td>
                <td>4-6 months</td>
                <td>41%</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: "0.95em", color: "#666" }}>
            *Prelims qualification rate (industry average: 15-20%)
          </p>

          <div className="highlight-box">
            <h3>Our Mission: RISE TO SERVE</h3>
            <p>
              <strong>R</strong>igorous preparation | <strong>I</strong>nclusive
              access | <strong>S</strong>tudent-centric pedagogy |{" "}
              <strong>E</strong>thical values
            </p>
            <p style={{ marginTop: "15px" }}>
              We believe meritocracy should be accessible to all socioeconomic
              backgrounds—our scholarship programs support 15% of students from
              underrepresented communities.
            </p>
          </div>
        </section>

        <section id="faq">
          <h2>Frequently Asked Questions</h2>

          <h3>Q: Is coaching necessary for competitive exams?</h3>
          <p>
            <strong>Evidence-based answer:</strong> Coaching provides structured
            learning, reducing information asymmetry. Meta-analysis shows
            coached candidates have 2.5-3x higher success rates in preliminary
            clearance. However, self-study with quality resources can
            succeed—discipline and strategy matter more than coaching per se.
          </p>

          <h3>Q: What is the optimal preparation timeline for UPSC?</h3>
          <p>
            <strong>Statistical insight:</strong> Average successful candidate:
            18-24 months full-time preparation | Median attempts: 2-3 | Daily
            study hours: 8-10. Starting early (during graduation) spreads
            cognitive load and reduces pressure.
          </p>

          <h3>Q: Can working professionals prepare for civil services?</h3>
          <p>
            <strong>Practical answer:</strong> Yes, but with trade-offs.
            Part-time preparation (4-5 hours/day) extends timeline to 2-3 years.
            Success rate is lower (15-20% vs. 40-45% full-time) but improves
            with weekend intensive programs and disciplined routines.
          </p>

          <h3>Q: What is the age limit for UPSC?</h3>
          <div style={{ marginLeft: "20px" }}>
            <p>
              <strong>General:</strong> 21-32 years (6 attempts)
            </p>
            <p>
              <strong>OBC:</strong> 21-35 years (9 attempts)
            </p>
            <p>
              <strong>SC/ST:</strong> 21-37 years (unlimited attempts)
            </p>
            <p style={{ marginTop: "10px", color: "#666" }}>
              <em>Age calculated as on January 1 of the examination year</em>
            </p>
          </div>
        </section>

        <section id="academic-perspective">
          <h2>For Educators & Researchers</h2>

          <div className="academic-note">
            <h4>📚 Academic Contributions</h4>
            <p>
              India's competitive examination system offers rich research
              opportunities in:
            </p>
            <ul>
              <li>
                <strong>Educational Psychology:</strong> High-stakes testing
                effects, motivation theories, stereotype threat
              </li>
              <li>
                <strong>Labor Economics:</strong> Public sector wage premiums,
                human capital allocation, credentialism
              </li>
              <li>
                <strong>Sociology:</strong> Social mobility pathways,
                caste/className dynamics in selection, meritocracy critique
              </li>
              <li>
                <strong>Public Policy:</strong> Administrative efficiency,
                bureaucratic effectiveness, reservation policies
              </li>
            </ul>
          </div>

          <p>We welcome collaborations with academic institutions for:</p>
          <ul>
            <li>
              Longitudinal studies tracking career trajectories of exam cohorts
            </li>
            <li>
              Pedagogical intervention experiments (A/B testing teaching
              methods)
            </li>
            <li>Psychometric validation of assessment instruments</li>
            <li>Policy research on examination reform and accessibility</li>
          </ul>

          <p style={{ marginTop: "20px" }}>
            <strong>Research Partnerships:</strong> Contact us at
            research@jdaxacademy.com for collaboration proposals.
          </p>
        </section>
      </div>

      <div className="cta-section">
        <h2>Begin Your Journey to Public Service</h2>
        <p style={{ fontSize: "1.2em", margin: "25px 0",textAlign:"center" }}>
          Every civil servant started where you are today. The difference? They
          took the first step.
        </p>

        <a href="/free-demo" className="cta-button">
          Book Free Demo Class
        </a>
        <a href="/career-quiz" className="cta-button">
          Take Career Assessment
        </a>
        <a href="/contact" className="cta-button">
          Speak with Counselor
        </a>

        <p style={{ marginTop: "40px", fontSize: "1.1em", opacity: "0.95",textAlign:"center" }}>
          📞 WhatsApp: +91-98765-43210 | 📧 info@jdaxacademy.com
        </p>
      </div>
    </div>
  );
};

export default ResourceContent;
