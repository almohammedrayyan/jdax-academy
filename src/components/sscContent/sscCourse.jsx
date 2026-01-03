import React, { useEffect } from "react";
import "./sscCourse.css";
const SscCourse = () => {
  useEffect(() => {
    /* ---------------------------
       1. Smooth Scroll for Anchors
    ---------------------------- */
    const handleAnchorClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((a) => a.addEventListener("click", handleAnchorClick));

    /* ---------------------------
       2. Scroll Animation Observer
    ---------------------------- */
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      ".card, .table-container, .info-box, .highlight-box"
    );

    animatedElements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.6s ease-out";
      observer.observe(el);
    });

    /* ---------------------------
       3. Highlight Current Section
    ---------------------------- */
    const onScroll = () => {
      const sections = document.querySelectorAll(".section");
      const navLinks = document.querySelectorAll(".nav-menu a");

      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.style.background =
          "linear-gradient(135deg, #f5f7fa 0%, #e8edf2 100%)";
        link.style.color = "var(--text-dark)";

        if (link.getAttribute("href") === `#${current}`) {
          link.style.background = "var(--primary-gradient)";
          link.style.color = "white";
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    /* ---------------------------
       Cleanup on Unmount
    ---------------------------- */
    return () => {
      anchors.forEach((a) => a.removeEventListener("click", handleAnchorClick));
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <h1>🎯 Complete Guide to SSC, Banking, RRB & Regulatory Exams</h1>
          <p>Your Comprehensive Resource for Government Job Examinations</p>
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-number">50,000+</div>
              <div className="stat-label" style={{ color: "white" }}>
                Annual Vacancies
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label" style={{ color: "white" }}>
                Major Exams
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label" style={{ color: "white" }}>
                Verified Information
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Always</div>
              <div className="stat-label" style={{ color: "white" }}>
                Up-to-Date
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="nav-container">
        <ul className="nav-menu">
          <li>
            <a href="#ssc">📚 SSC Exams</a>
          </li>
          <li>
            <a href="#banking">🏦 Banking Exams</a>
          </li>
          <li>
            <a href="#rrb">🚂 RRB Exams</a>
          </li>
          <li>
            <a href="#regulatory">⚖️ Regulatory Bodies</a>
          </li>
        </ul>
      </nav>

      <section id="ssc" className="section">
        <div className="section-header">
          <h2 style={{ color: "white" }}>
            📚 I. SSC EXAMS (Staff Selection Commission)
          </h2>
          <p style={{ color: "white", textAlign: "center" }}>
            One of India's Largest Recruiting Agencies for Group B & C
            Government Posts
          </p>
        </div>

        <div className="info-box">
          <h4>📋 What is Staff Selection Commission (SSC)?</h4>
          <p>
            <strong>Constitutional Foundation:</strong>
          </p>
          <ul>
            <li>✓ Based on Article 320 of the Constitution of India</li>
            <li>
              ✓ Established following the 47th Report (1967-68) of Parliament's
              Estimates Committee
            </li>
            <li>✓ Purpose: Take over lower category recruitment from UPSC</li>
            <li>✓ One of India's largest recruiting agencies</li>
            <li>✓ Conducts 7 major All-India Open Competitive Examinations</li>
          </ul>
        </div>

        <div className="highlight-box">
          <h3>📢 Current Mandate</h3>
          <p>
            <strong>Recruitment for:</strong>
          </p>
          <span className="badge badge-primary">Group 'B' (Non-Gazetted)</span>
          <span className="badge badge-primary">Group 'C' (Non-Technical)</span>
          <span className="badge badge-success">
            Group 'B' (Gazetted) - AAO/AAuO (since 2016)
          </span>
        </div>

        <h3 className="subsection-header">
          🎓 Major SSC Examinations Conducted
        </h3>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon">📝</div>
            <h3>Combined Graduate Level (CGL)</h3>
            <div className="card-content">
              <p>
                <strong>Highly Competitive:</strong>
              </p>
              <p className="stat-value">30L+</p>
              <p className="stat-title">Typical Annual Applicants</p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">📖</div>
            <h3>Combined Higher Secondary Level (CHSL)</h3>
            <div className="card-content">
              <p>
                <strong>Highly Competitive:</strong>
              </p>
              <p className="stat-value">50L+</p>
              <p className="stat-title">Typical Annual Applicants</p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">🔧</div>
            <h3>Junior Engineer (JE)</h3>
            <div className="card-content">
              <p>
                <strong>Specializations:</strong>
              </p>
              <ul>
                <li>Civil Engineering</li>
                <li>Mechanical Engineering</li>
                <li>Electrical Engineering</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">👮</div>
            <h3>Sub-Inspector (CPO)</h3>
            <div className="card-content">
              <p>
                <strong>For:</strong>
              </p>
              <ul>
                <li>Delhi Police</li>
                <li>CAPFs (Central Armed Police Forces)</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">🌐</div>
            <h3>Junior/Senior Hindi Translator (JHT)</h3>
            <div className="card-content">
              <p>Translation services for various government departments</p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">⌨️</div>
            <h3>Stenographer Grade 'C' & 'D'</h3>
            <div className="card-content">
              <p>Stenography positions across government offices</p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">👥</div>
            <h3>Multi Tasking Staff (MTS)</h3>
            <div className="card-content">
              <p>
                <strong>Highly Popular:</strong>
              </p>
              <p className="stat-value">50L+</p>
              <p className="stat-title">Typical Annual Applicants</p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">🛡️</div>
            <h3>Constable (GD)</h3>
            <div className="card-content">
              <p>General Duty Constable in CAPFs and Other Forces</p>
            </div>
          </div>
        </div>

        <div className="table-container">
          <h3>📅 SSC Annual Exam Calendar - Typical Schedule</h3>
          <div className="info-box">
            <p>
              <strong>📌 Note:</strong> The following table shows the typical
              months when SSC exams are conducted annually. Actual dates may
              vary each year. Always check the official SSC website for current
              notifications and exact dates.
            </p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Exam Name</th>
                <th>Typical Notification Period</th>
                <th>Application Period</th>
                <th>Typical Exam Period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Selection Post (Multiple Phases)</strong>
                </td>
                <td>Usually in June</td>
                <td>Around 3 weeks in June</td>
                <td className="calendar-highlight">Typically in July-August</td>
              </tr>
              <tr>
                <td>
                  <strong>Stenographer Grade C & D</strong>
                </td>
                <td>Usually in June</td>
                <td>Around 3 weeks in June</td>
                <td className="calendar-highlight">Typically in August</td>
              </tr>
              <tr>
                <td>
                  <strong>Combined Hindi Translators (JHT)</strong>
                </td>
                <td>Usually in June</td>
                <td>Around 3 weeks in June</td>
                <td className="calendar-highlight">Typically in August</td>
              </tr>
              <tr>
                <td>
                  <strong>Combined Graduate Level (CGL)</strong>
                </td>
                <td>Usually in June</td>
                <td>Approximately 3-4 weeks</td>
                <td className="calendar-highlight">
                  Typically in August-September
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Sub-Inspector (CPO)</strong>
                </td>
                <td>Usually in June</td>
                <td>Around 3 weeks in June-July</td>
                <td className="calendar-highlight">
                  Typically in November-December
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Combined Higher Secondary Level (CHSL)</strong>
                </td>
                <td>Usually in June</td>
                <td>Around 3-4 weeks</td>
                <td className="calendar-highlight">Typically in September</td>
              </tr>
              <tr>
                <td>
                  <strong>MTS & Havaldar (CBIC & CBN)</strong>
                </td>
                <td>Usually in June</td>
                <td>Around 3-4 weeks</td>
                <td className="calendar-highlight">Typically in October</td>
              </tr>
              <tr>
                <td>
                  <strong>Junior Engineer (JE)</strong>
                </td>
                <td>Usually in June-July</td>
                <td>Around 3 weeks</td>
                <td className="calendar-highlight">
                  Typically in October-November
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Constable (GD)</strong>
                </td>
                <td>Usually in October</td>
                <td>Around 3-4 weeks in Oct-Nov</td>
                <td className="calendar-highlight">
                  Typically in January-February (next year)
                </td>
              </tr>
            </tbody>
          </table>
          <div className="info-box success">
            <h4>🎯 Planning Your Preparation</h4>
            <p>
              Use this calendar to plan your preparation throughout the year.
              Most SSC exams follow a similar pattern annually, with
              notifications typically released in the same months. This allows
              aspirants to prepare strategically and manage multiple exam
              preparations simultaneously.
            </p>
          </div>
        </div>

        <div className="table-container">
          <h3>📋 SSC Exam Pattern Overview</h3>
          <table>
            <thead>
              <tr>
                <th>Tier/Stage</th>
                <th>CGL</th>
                <th>CHSL</th>
                <th>MTS/SI/Constable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Tier 1</strong>
                </td>
                <td>
                  <strong>
                    Single Paper (1 Hour, 100 Questions, 200 Marks)
                  </strong>
                  <br />
                  • General Intelligence & Reasoning (25 Qns/50 Marks)
                  <br />
                  • General Awareness (25 Qns/50 Marks)
                  <br />
                  • Quantitative Aptitude (25 Qns/50 Marks)
                  <br />• English Comprehension (25 Qns/50 Marks)
                </td>
                <td>
                  <strong>Part-wise Structure (100 Questions/200 Marks)</strong>
                  <br />
                  • Part I: English Language (25Q/50M)
                  <br />
                  • Part II: General Intelligence (25Q/50M)
                  <br />
                  • Part III: Quantitative Aptitude (25Q/50M)
                  <br />• Part IV: General Awareness (25Q/50M)
                </td>
                <td>
                  <strong>Session-based Pattern</strong>
                  <br />
                  Session I:
                  <br />
                  • Numerical and Mathematical Ability
                  <br />
                  • Reasoning Ability and Problem Solving
                  <br />
                  Session II:
                  <br />
                  • General Awareness
                  <br />• English Language and Comprehension
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Tier 2</strong>
                </td>
                <td>
                  <strong>Session 1 (2 Hours 15 Minutes):</strong>
                  <br />
                  <strong>Section 1 (180 Marks):</strong>
                  <br />
                  • Module-I: Mathematical Abilities (30Q/90M)
                  <br />
                  • Module-II: Reasoning & General Intelligence (30Q/90M)
                  <br />
                  <strong>Section 2 (210 Marks):</strong>
                  <br />
                  • Module-I: English Language (45Q/135M)
                  <br />
                  • Module-II: General Awareness (25Q/75M)
                  <br />
                  <strong>Section 3 (60 Marks):</strong>
                  <br />
                  • Module-I: Computer Knowledge (20Q/60M)
                  <br />
                  <strong>Session 2 (15 Minutes):</strong>
                  <br />• Module-II: Data Entry Speed Test
                </td>
                <td>
                  <strong>Session I (2 Hours 15 Minutes):</strong>
                  <br />
                  <strong>Section I:</strong>
                  <br />
                  • Mathematical Abilities (30Q/90M)
                  <br />
                  • Reasoning & General Intelligence (30Q/90M)
                  <br />
                  <strong>Section II:</strong>
                  <br />
                  • English Language (40Q/135M)
                  <br />
                  • General Awareness (20Q/75M)
                  <br />
                  <strong>Section III:</strong>
                  <br />
                  • Computer Knowledge (15Q/45M)
                  <br />
                  <strong>Session II:</strong>
                  <br />• Skill Test/Typing Test Module
                </td>
                <td>
                  • Skill Test/Typing Test
                  <br />
                  OR
                  <br />
                  • PST (Physical Standard Test)
                  <br />
                  • PET (Physical Efficiency Test)
                  <br />• DME (Detailed Medical Examination)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="banking" className="section">
        <div
          className="section-header"
          style={{ background: "var(--success-gradient)" }}
        >
          <h2>🏦 II. BANKING EXAMS</h2>
          <p>Gateway to Lucrative and Stable Careers in the Banking Sector</p>
        </div>

        <div className="info-box">
          <h4>💼 About Banking Exams in India</h4>
          <p>
            Banking exams in India are highly competitive and serve as a gateway
            to lucrative and stable careers in the banking sector. These exams
            are conducted by various recruiting institutions to fill vacancies
            in public sector banks, private banks, and regional rural banks
            (RRBs).
          </p>
          <p>
            <strong>Career Opportunities:</strong> Probationary Officers (PO),
            Clerks, Specialist Officers (SO), Assistant Managers, and more.
          </p>
          <p>
            <strong>Benefits:</strong> Attractive salaries, job security, career
            growth opportunities, and prestigious positions.
          </p>
        </div>

        <h3 className="subsection-header banking-header">
          🏛️ Major Recruiting Institutions
        </h3>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon">🏦</div>
            <h3>Institute of Banking Personnel Selection (IBPS)</h3>
            <div className="card-content">
              <p>
                Conducts exams for public sector banks (except SBI) and RRBs
              </p>
              <p>
                <strong>Annual Vacancies:</strong> 20,000-25,000
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">🏛️</div>
            <h3>State Bank of India (SBI)</h3>
            <div className="card-content">
              <p>Conducts its own exams for SBI and associate banks</p>
              <p>
                <strong>Annual Vacancies:</strong> 5,000-10,000
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">🏢</div>
            <h3>Reserve Bank of India (RBI)</h3>
            <div className="card-content">
              <p>Grade B Officers and Assistants</p>
              <p>
                <strong>Annual Vacancies:</strong> 200-300
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">🌾</div>
            <h3>NABARD</h3>
            <div className="card-content">
              <p>Grade A and Grade B Officers</p>
              <p>
                <strong>Annual Vacancies:</strong> 150-200
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">💳</div>
            <h3>Private Banks</h3>
            <div className="card-content">
              <p>HDFC, ICICI, Axis Bank conduct their own recruitment exams</p>
              <p>
                <strong>Varies by bank</strong>
              </p>
            </div>
          </div>
        </div>

        <div
          className="highlight-box"
          style={{ background: "var(--success-gradient)" }}
        >
          <h3>🏦 What is IBPS?</h3>
          <p>
            The <strong>Institute of Banking Personnel Selection (IBPS)</strong>{" "}
            is an autonomous body responsible for recruiting personnel for
            public sector banks (except State Bank of India) and regional rural
            banks (RRBs) in India.
          </p>
          <p>
            <strong>Established:</strong> 1984
          </p>
          <p>
            <strong>Purpose:</strong> Streamline recruitment process for banking
            jobs and ensure transparency and fairness
          </p>
        </div>

        <h3 className="subsection-header banking-header">📊 Why IBPS?</h3>
        <div className="card-grid">
          <div className="card">
            <div className="card-content">
              <h4>✓ Centralized Recruitment</h4>
              <p>
                Conducts common exams for multiple banks, reducing duplication
                of efforts and costs
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h4>✓ Standardized Process</h4>
              <p>
                Ensures a fair and transparent selection process for all
                candidates
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h4>✓ Wide Reach</h4>
              <p>
                Conducts exams for various levels (PO, Clerk, SO, RRB) across
                India
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h4>✓ Efficiency</h4>
              <p>Simplifies the recruitment process for participating banks</p>
            </div>
          </div>
        </div>

        <div className="table-container">
          <h3>📝 Exams Conducted by IBPS</h3>
          <table>
            <thead>
              <tr>
                <th>Exam Name</th>
                <th>Posts Offered</th>
                <th>Participating Banks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>IBPS PO (Probationary Officer)</strong>
                </td>
                <td>Probationary Officer in Public Sector Banks</td>
                <td>All PSBs (except SBI)</td>
              </tr>
              <tr>
                <td>
                  <strong>IBPS Clerk</strong>
                </td>
                <td>Clerk in Public Sector Banks</td>
                <td>All PSBs (except SBI)</td>
              </tr>
              <tr>
                <td>
                  <strong>IBPS SO (Specialist Officer)</strong>
                </td>
                <td>
                  Specialist Officers (IT, Marketing, HR, Law, Agriculture,
                  etc.)
                </td>
                <td>All PSBs (except SBI)</td>
              </tr>
              <tr>
                <td>
                  <strong>IBPS RRB</strong>
                </td>
                <td>
                  Officer Scale I, II, III & Office Assistant (Multipurpose)
                </td>
                <td>Regional Rural Banks (RRBs)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="info-box">
          <h4>🏛️ Why Does SBI Have Its Own Exams Instead of IBPS?</h4>
          <p>
            The <strong>State Bank of India (SBI)</strong> is the largest public
            sector bank in India and operates independently. Here's why:
          </p>
          <ul>
            <li>
              <strong>Scale and Autonomy:</strong> SBI is much larger than other
              PSBs and has a unique organizational structure. It prefers to
              manage its recruitment process independently.
            </li>
            <li>
              <strong>Higher Standards:</strong> SBI exams are considered more
              challenging than IBPS exams, reflecting the bank's emphasis on
              selecting top-tier talent.
            </li>
            <li>
              <strong>Customized Recruitment:</strong> SBI tailors its exams to
              assess skills specific to its operations and requirements.
            </li>
            <li>
              <strong>Brand Identity:</strong> SBI maintains its distinct
              identity by conducting its own recruitment process.
            </li>
          </ul>
        </div>

        <div className="table-container">
          <h3>📅 IBPS Annual Exam Calendar - Typical Schedule</h3>
          <div className="info-box">
            <p>
              <strong>📌 Note:</strong> The following table shows the typical
              months when IBPS exams are conducted annually. Actual dates are
              announced by IBPS each year. Always check the official IBPS
              website for current notifications and exact dates.
            </p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Exam Name</th>
                <th>Post/Position</th>
                <th>Typical Prelims Period</th>
                <th>Typical Mains Period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan={4}
                  style={{
                    background: "var(--success-gradient)",
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  IBPS PO/MT & SO
                </td>
              </tr>
              <tr>
                <td>
                  <strong>IBPS PO</strong>
                </td>
                <td>Probationary Officers/Management Trainees</td>
                <td className="calendar-highlight">Typically in August</td>
                <td className="calendar-highlight">Usually in October</td>
              </tr>
              <tr>
                <td>
                  <strong>IBPS SO</strong>
                </td>
                <td>Specialist Officers</td>
                <td className="calendar-highlight">Typically in August</td>
                <td className="calendar-highlight">Usually in November</td>
              </tr>
              <tr>
                <td>
                  <strong>IBPS Clerk</strong>
                </td>
                <td>Customer Service Associates (CSA)</td>
                <td className="calendar-highlight">Typically in October</td>
                <td className="calendar-highlight">Usually in November</td>
              </tr>
              <tr>
                <td
                  colspan="4"
                  style={{
                    background: "var(--orange-gradient)",
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  IBPS RRB (Regional Rural Banks)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>IBPS RRB Officer Scale I</strong>
                </td>
                <td>Officer Scale I</td>
                <td className="calendar-highlight">Typically in November</td>
                <td className="calendar-highlight">Usually in December</td>
              </tr>
              <tr>
                <td>
                  <strong>IBPS RRB Officer Scale II & III</strong>
                </td>
                <td>Officer Scale II and III</td>
                <td>Single Exam (No Prelims)</td>
                <td className="calendar-highlight">Usually in December</td>
              </tr>
              <tr>
                <td>
                  <strong>IBPS RRB Office Assistant</strong>
                </td>
                <td>Office Assistants (Multipurpose)</td>
                <td className="calendar-highlight">Typically in December</td>
                <td className="calendar-highlight">
                  Usually in January-February (next year)
                </td>
              </tr>
            </tbody>
          </table>
          <div className="info-box success">
            <h4>🎯 Planning Your IBPS Exam Preparation</h4>
            <p>
              IBPS follows a consistent annual calendar, allowing aspirants to
              plan their preparation well in advance. The exam cycle typically
              runs from August to February, with notifications usually released
              2-3 months before the exam dates.
            </p>
          </div>
        </div>

        <div className="table-container">
          <h3>📅 SBI Annual Exam Calendar - Typical Schedule</h3>
          <div className="info-box">
            <p>
              <strong>📌 Note:</strong> The following table shows the typical
              schedule when SBI exams are conducted annually. Actual dates are
              announced by SBI each year. Always check the official SBI website
              for current notifications and exact dates.
            </p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Post</th>
                <th>Activity</th>
                <th>Typical Period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  rowspan="4"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea15 0%, #764ba215 100%)",
                    fontWeight: "bold",
                  }}
                >
                  <strong>SBI Probationary Officer (PO)</strong>
                </td>
                <td>Notification</td>
                <td className="calendar-highlight">Usually in June</td>
              </tr>
              <tr>
                <td>Phase-I: Preliminary Examination</td>
                <td className="calendar-highlight">Typically in July-August</td>
              </tr>
              <tr>
                <td>Phase-II: Main Examination</td>
                <td className="calendar-highlight">
                  Usually in September-October
                </td>
              </tr>
              <tr>
                <td>Phase-III: Psychometric Test & Interview/Group Exercise</td>
                <td className="calendar-highlight">
                  Typically in October-November
                </td>
              </tr>
              <tr>
                <td
                  rowspan="4"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea15 0%, #764ba215 100%)",
                    fontWeight: "bold",
                  }}
                >
                  <strong>SBI Clerk (Junior Associates)</strong>
                </td>
                <td>Notification</td>
                <td className="calendar-highlight">Usually in August</td>
              </tr>
              <tr>
                <td>Online Application Period</td>
                <td className="calendar-highlight">Typically around 3 weeks</td>
              </tr>
              <tr>
                <td>Preliminary Examination</td>
                <td className="calendar-highlight">Usually in September</td>
              </tr>
              <tr>
                <td>Main Examination</td>
                <td className="calendar-highlight">Typically in November</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box success">
            <h4>🎯 Planning Your SBI Exam Preparation</h4>
            <p>
              SBI typically releases notifications for PO and Clerk exams
              annually, usually in the June-August period. The complete
              selection process spans several months, allowing candidates to
              prepare systematically for each phase.
            </p>
          </div>
        </div>

        <div className="table-container">
          <h3>📋 Banking Exam Pattern</h3>
          <h4 style={{ color: "var(--text-dark)", margin: "20px 0 15px 0" }}>
            Prelims Exam Pattern
          </h4>
          <table>
            <thead>
              <tr>
                <th>Exam</th>
                <th>Subjects</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>SBI PO/Clerk, IBPS PO/Clerk, RBI Assistant</strong>
                  <br />
                  (100 Questions - 100 Marks - 1 Hour)
                </td>
                <td>
                  1. English Language
                  <br />
                  2. Numerical Ability/Quantitative Aptitude
                  <br />
                  3. Reasoning Ability
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    IBPS RRB Office Assistant/Officer Scale I, II, III
                  </strong>
                </td>
                <td>
                  1. Numerical Ability
                  <br />
                  2. Reasoning Ability
                </td>
              </tr>
            </tbody>
          </table>

          <h4 style={{ color: "var(--text-dark)", margin: "30px 0 15px 0" }}>
            Mains Exam Pattern
          </h4>
          <table>
            <thead>
              <tr>
                <th>Exam</th>
                <th>Subjects</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>SBI Clerk, IBPS Clerk, RBI Assistant</strong>
                </td>
                <td>
                  1. General/Financial Awareness
                  <br />
                  2. General English
                  <br />
                  3. Quantitative Aptitude
                  <br />
                  4. Reasoning Ability & Computer Aptitude
                </td>
              </tr>
              <tr>
                <td>
                  <strong>SBI PO, IBPS PO, RRB Mains</strong>
                  <br />
                  (250 Marks)
                </td>
                <td>
                  1. General/Economy/Banking Awareness
                  <br />
                  2. English/Hindi Language
                  <br />
                  3. Numerical Ability
                  <br />
                  4. Reasoning & Computer Aptitude
                  <br />
                  5. Descriptive Test
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="subsection-header banking-header">
          🎯 SBI & IBPS PO Selection Process
        </h3>
        <div className="process-flow">
          <div className="process-step" data-step="1">
            <h4>Phase 1: Prelims Exam</h4>
            <p>
              Acts as a screening round. Candidates must clear sectional and
              overall cut-offs to qualify for Mains.
            </p>
          </div>
          <div className="process-step" data-step="2">
            <h4>Phase 2: Mains Exam</h4>
            <p>
              Includes objective and descriptive tests (250 Marks). Must clear
              sectional and overall cut-offs.
            </p>
          </div>
          <div className="process-step" data-step="3">
            <h4>Phase 3: Final Stage</h4>
            <p>
              Psychometric Test/Group Exercise/Personal Interview. Final merit
              list based on combined scores.
            </p>
          </div>
        </div>

        <div
          className="highlight-box"
          style={{ background: "var(--blue-gradient)" }}
        >
          <h3>✅ Eligibility Criteria</h3>
          <p>
            <strong>Age Limit:</strong> Not below 21 years and not above 30
            years (age calculated as of April 1st of the exam year)
          </p>
          <p>
            <strong>Essential Academic Qualifications:</strong> Graduation in
            any discipline from a recognized University or any equivalent
            qualification recognized as such by the Central Government (as on
            the date specified in the official notification).
          </p>
        </div>

        <div className="info-box">
          <h4>🎓 Conclusion</h4>
          <p>
            Banking exams in India, conducted by institutions like IBPS, SBI,
            RBI, and NABARD, offer a wide range of career opportunities for
            aspirants. With thousands of vacancies annually and a structured
            recruitment process, these exams are a gateway to a rewarding career
            in the banking sector.
          </p>
          <p>
            <strong>Key to Success:</strong> Thorough preparation and
            understanding of exam patterns are essential whether you aim to
            become a Probationary Officer, Clerk, or Specialist Officer.
          </p>
        </div>
      </section>

      <section id="rrb" className="section">
        <div
          className="section-header"
          style={{ background: "var(--orange-gradient)" }}
        >
          <h2>🚂 III. RAILWAY RECRUITMENT BOARD (RRB) EXAMS</h2>
          <p>
            Gateway to Indian Railways - One of the World's Largest Railway
            Networks
          </p>
        </div>

        <div className="info-box">
          <h4>🚆 About Railway Recruitment Board (RRB)</h4>
          <p>
            Railway Recruitment Boards (RRBs) are responsible for recruiting
            personnel for various Group C and Group D posts in Indian Railways.
            With multiple regional boards across India, RRB conducts exams for
            technical and non-technical positions in one of the world's largest
            railway networks.
          </p>
          <p>
            <strong>Career Opportunities:</strong> Assistant Loco Pilot (ALP),
            Non-Technical Popular Categories (NTPC), Group D positions, and
            various other railway posts.
          </p>
        </div>

        <h3 className="subsection-header rrb-header">
          🎓 Major RRB Examinations
        </h3>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon">🚂</div>
            <h3>RRB ALP (Assistant Loco Pilot)</h3>
            <div className="card-content">
              <p>
                Technical position responsible for assisting train drivers and
                maintaining locomotives
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">📚</div>
            <h3>RRB NTPC (Non-Technical Popular Categories)</h3>
            <div className="card-content">
              <p>
                <strong>Graduate Posts:</strong> Level 4, 5, 6
              </p>
              <p>
                <strong>Undergraduate Posts:</strong> Level 2, 3
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">👷</div>
            <h3>RRB Group D</h3>
            <div className="card-content">
              <p>
                Entry-level positions including Track Maintainer, Helper,
                Assistant Pointsman, and other support staff
              </p>
            </div>
          </div>
        </div>

        <div className="table-container">
          <h3>📅 RRB Annual Exam Calendar - Typical Schedule</h3>
          <div className="info-box">
            <p>
              <strong>📌 Note:</strong> The following table shows the typical
              schedule when RRB exams are conducted. Actual dates are announced
              by respective RRBs each year. Always check the official RRB
              websites for current notifications and exact dates.
            </p>
          </div>
          <table>
            <thead>
              <tr>
                <th>RRB Exams</th>
                <th>Typical Application Period</th>
                <th>Typical Exam Period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>RRB ALP</strong>
                  <br />
                  (Assistant Loco Pilot)
                </td>
                <td className="calendar-highlight">Usually in April-May</td>
                <td className="calendar-highlight">
                  Typically held later in the year
                </td>
              </tr>
              <tr>
                <td>
                  <strong>RRB NTPC</strong>
                  <br />
                  <span className="badge badge-primary">
                    Graduate Posts (Level 4, 5, 6)
                  </span>
                </td>
                <td className="calendar-highlight">
                  Usually in September-October
                </td>
                <td className="calendar-highlight">
                  Typically in June-July (next year)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>RRB NTPC</strong>
                  <br />
                  <span className="badge badge-success">
                    Undergraduate Posts (Level 2, 3)
                  </span>
                </td>
                <td className="calendar-highlight">
                  Usually in September-October
                </td>
                <td className="calendar-highlight">
                  Typically announced later
                </td>
              </tr>
              <tr>
                <td>
                  <strong>RRB Group D</strong>
                </td>
                <td className="calendar-highlight">
                  Usually in December-March
                </td>
                <td className="calendar-highlight">
                  Typically in July-September or November-December
                </td>
              </tr>
            </tbody>
          </table>
          <div className="info-box success">
            <h4>🎯 Planning Your RRB Exam Preparation</h4>
            <p>
              RRB exams are usually announced well in advance, giving candidates
              several months to prepare. The application periods typically last
              4-6 weeks, and exams are conducted in multiple shifts over several
              days or weeks to accommodate large numbers of candidates.
            </p>
          </div>
        </div>

        <div className="info-box">
          <h4>📢 Important Notes</h4>
          <ul>
            <li>
              <strong>Multiple Phases:</strong> RRB exams typically consist of
              multiple phases including Computer Based Tests (CBT), Physical
              Tests, Document Verification, and Medical Examination.
            </li>
            <li>
              <strong>Regional Boards:</strong> There are 21 RRBs across India,
              each handling recruitment for specific railway zones.
            </li>
            <li>
              <strong>Application Process:</strong> All applications are
              submitted online through the official RRB websites.
            </li>
            <li>
              <strong>Exam Pattern:</strong> CBTs include sections on General
              Awareness, Mathematics, General Intelligence & Reasoning, and
              General Science.
            </li>
          </ul>
        </div>
      </section>

      <section id="regulatory" className="section">
        <div
          className="section-header"
          style={{ background: "var(--green-gradient)" }}
        >
          <h2>⚖️ IV. OTHER REGULATORY BODIES EXAMS IN INDIA</h2>
          <p>
            Specialized Exams for Finance, Insurance, and Governance Sectors
          </p>
        </div>

        <div className="info-box">
          <h4>🏛️ About Regulatory Bodies Exams</h4>
          <p>
            Regulatory bodies in India conduct exams to recruit candidates for
            specialized roles in sectors like finance, insurance, and
            governance. These exams are highly competitive and often share
            similarities with banking and SSC exams in terms of structure,
            syllabus, and preparation strategies.
          </p>
          <p>
            <strong>Key Benefits:</strong> Prestigious positions, excellent
            career growth, competitive salaries, and opportunity to work in
            critical regulatory and development sectors.
          </p>
        </div>

        <h3 className="subsection-header regulatory-header">
          🏢 Major Regulatory Bodies and Their Exams
        </h3>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon">🏦</div>
            <h3>Reserve Bank of India (RBI)</h3>
            <div className="card-content">
              <p>
                <strong>Exams:</strong> RBI Grade B Officer, RBI Assistant
              </p>
              <p>
                <strong>Roles:</strong> Monetary policy implementation, banking
                regulation, financial stability
              </p>
              <p>
                <strong>Annual Vacancies:</strong> 200-300 (Grade B)
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">📈</div>
            <h3>Securities and Exchange Board of India (SEBI)</h3>
            <div className="card-content">
              <p>
                <strong>Exams:</strong> SEBI Grade A Officer
              </p>
              <p>
                <strong>Roles:</strong> Regulation of securities markets,
                investor protection, market development
              </p>
              <p>
                <strong>Annual Vacancies:</strong> 100-150
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">🛡️</div>
            <h3>Insurance Regulatory and Development Authority (IRDAI)</h3>
            <div className="card-content">
              <p>
                <strong>Exams:</strong> IRDAI Assistant Manager
              </p>
              <p>
                <strong>Roles:</strong> Regulation of insurance sector,
                protection of policyholders' interests
              </p>
              <p>
                <strong>Annual Vacancies:</strong> 50-100
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">🌾</div>
            <h3>
              National Bank for Agriculture and Rural Development (NABARD)
            </h3>
            <div className="card-content">
              <p>
                <strong>Exams:</strong> NABARD Grade A and Grade B Officers
              </p>
              <p>
                <strong>Roles:</strong> Agricultural and rural development,
                financing, supervision of RRBs
              </p>
              <p>
                <strong>Annual Vacancies:</strong> 150-200
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">👥</div>
            <h3>Employees' Provident Fund Organisation (EPFO)</h3>
            <div className="card-content">
              <p>
                <strong>Exams:</strong> EPFO Enforcement Officer/Accounts
                Officer
              </p>
              <p>
                <strong>Roles:</strong> Administration of provident funds and
                pension schemes
              </p>
              <p>
                <strong>Annual Vacancies:</strong> 200-300
              </p>
            </div>
          </div>
        </div>

        <div className="table-container">
          <h3>📅 RBI Grade B Exam - Typical Schedule</h3>
          <div className="info-box">
            <p>
              <strong>📌 Note:</strong> RBI Grade B exam is typically conducted
              annually. The schedule shown below represents the usual
              examination pattern. Always check the official RBI website for
              current notifications and exact dates.
            </p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Phase</th>
                <th>Typical Exam Period</th>
                <th>Typical Vacancy Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Phase I (Prelims)</strong>
                </td>
                <td className="calendar-highlight">Usually in October</td>
                <td
                  rowspan="2"
                  style={{
                    textAlign: "center",
                    verticalAlign: "middle",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    background:
                      "linear-gradient(135deg, #667eea15 0%, #764ba215 100%)",
                  }}
                >
                  100-150 positions annually
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Phase II (Mains)</strong>
                </td>
                <td className="calendar-highlight">Typically in December</td>
              </tr>
              <tr>
                <td>
                  <strong>Phase III (Interview)</strong>
                </td>
                <td className="calendar-highlight">
                  Usually in February-March (next year)
                </td>
                <td style={{ textAlign: "center" }}>Final selection phase</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box success">
            <h4>🎯 RBI Grade B Recruitment Pattern</h4>
            <p>
              The RBI Grade B exam is one of the most prestigious banking exams
              in India. The notification is typically released in the second
              half of the year, with the complete selection process spanning
              several months. Vacancies generally range from 100-150 positions
              across various streams including General, DEPR, and DSIM.
            </p>
          </div>
        </div>

        <h3 className="subsection-header regulatory-header">
          📊 Exam Structure and Sync with Banking and SSC Exams
        </h3>

        <div className="table-container">
          <h3>1️⃣ RBI Grade B Officer</h3>
          <table>
            <thead>
              <tr>
                <th>Phase</th>
                <th>Subjects</th>
                <th>Sync with Other Exams</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Phase 1 (Prelims)</strong>
                </td>
                <td>
                  • General Awareness
                  <br />
                  • English Language
                  <br />
                  • Quantitative Aptitude
                  <br />• Reasoning Ability
                </td>
                <td>Similar to IBPS PO and SSC CGL Prelims</td>
              </tr>
              <tr>
                <td>
                  <strong>Phase 2 (Mains)</strong>
                </td>
                <td>
                  • Economic and Social Issues
                  <br />
                  • English (Writing Skills)
                  <br />• Finance and Management
                </td>
                <td>
                  Focus on descriptive and specialized knowledge, similar to SSC
                  CGL Tier 3
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Interview</strong>
                </td>
                <td>Personality test and domain knowledge</td>
                <td>Final stage assessment</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-container">
          <h3>2️⃣ SEBI Grade A Officer</h3>
          <table>
            <thead>
              <tr>
                <th>Phase</th>
                <th>Subjects</th>
                <th>Sync with Other Exams</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Phase 1 (Prelims)</strong>
                </td>
                <td>
                  • General Awareness
                  <br />
                  • English Language
                  <br />
                  • Quantitative Aptitude
                  <br />• Reasoning Ability
                </td>
                <td>Similar to IBPS PO and SSC CGL Prelims</td>
              </tr>
              <tr>
                <td>
                  <strong>Phase 2 (Mains)</strong>
                </td>
                <td>
                  • Paper 1: Securities Markets (MCQs + Descriptive)
                  <br />• Paper 2: Stream-specific (Finance, Legal, IT, etc.)
                </td>
                <td>
                  Specialized papers similar to SSC CGL Tier 2 and IBPS SO
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Interview</strong>
                </td>
                <td>Domain knowledge and personality assessment</td>
                <td>Final stage assessment</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-container">
          <h3>3️⃣ NABARD Grade A and B Officers</h3>
          <table>
            <thead>
              <tr>
                <th>Phase</th>
                <th>Subjects</th>
                <th>Sync with Other Exams</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Phase 1 (Prelims)</strong>
                </td>
                <td>
                  • Reasoning Ability
                  <br />
                  • English Language
                  <br />
                  • Quantitative Aptitude
                  <br />• General Awareness
                </td>
                <td>Similar to IBPS PO and SSC CGL Prelims</td>
              </tr>
              <tr>
                <td>
                  <strong>Phase 2 (Mains)</strong>
                </td>
                <td>
                  • Paper 1: General English (Descriptive)
                  <br />• Paper 2: Economic and Social Issues, Agriculture,
                  Rural Development
                </td>
                <td>
                  Descriptive and specialized papers, similar to SSC CGL and RBI
                  Grade B Mains
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Interview</strong>
                </td>
                <td>Focus on domain knowledge and personality</td>
                <td>Final stage assessment</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-container">
          <h3>4️⃣ IRDAI Assistant Manager</h3>
          <table>
            <thead>
              <tr>
                <th>Phase</th>
                <th>Subjects</th>
                <th>Sync with Other Exams</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Phase 1 (Prelims)</strong>
                </td>
                <td>
                  • Reasoning Ability
                  <br />
                  • English Language
                  <br />
                  • Quantitative Aptitude
                  <br />• General Awareness
                </td>
                <td>Similar to IBPS PO and SSC CGL Prelims</td>
              </tr>
              <tr>
                <td>
                  <strong>Phase 2 (Mains)</strong>
                </td>
                <td>
                  • Paper 1: English (Descriptive)
                  <br />• Paper 2: Insurance and Financial Markets
                </td>
                <td>
                  Specialized papers, similar to SEBI Grade A and SSC CGL Tier 2
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Interview</strong>
                </td>
                <td>Domain knowledge and personality assessment</td>
                <td>Final stage assessment</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-container">
          <h3>5️⃣ EPFO Enforcement Officer/Accounts Officer</h3>
          <table>
            <thead>
              <tr>
                <th>Phase</th>
                <th>Subjects</th>
                <th>Sync with Other Exams</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Phase 1 (Prelims)</strong>
                </td>
                <td>
                  • Reasoning Ability
                  <br />
                  • English Language
                  <br />
                  • Quantitative Aptitude
                  <br />• General Awareness
                </td>
                <td>Similar to IBPS PO and SSC CGL Prelims</td>
              </tr>
              <tr>
                <td>
                  <strong>Phase 2 (Mains)</strong>
                </td>
                <td>
                  • Social Security in India
                  <br />• English (Descriptive)
                </td>
                <td>Descriptive papers, similar to SSC CGL</td>
              </tr>
              <tr>
                <td>
                  <strong>Interview</strong>
                </td>
                <td>Focus on domain knowledge and personality</td>
                <td>Final stage assessment</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="subsection-header regulatory-header">
          🔄 Key Similarities with Banking and SSC Exams
        </h3>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon">📚</div>
            <h3>Similar Syllabus</h3>
            <div className="card-content">
              <ul>
                <li>Quantitative Aptitude</li>
                <li>Reasoning Ability</li>
                <li>English Language</li>
                <li>General Awareness</li>
                <li>
                  Descriptive Writing in Mains (similar to SSC CGL Tier 3)
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">📊</div>
            <h3>Tiered Exam Structure</h3>
            <div className="card-content">
              <p>Most regulatory exams follow a two or three-tier structure:</p>
              <ul>
                <li>Prelims</li>
                <li>Mains</li>
                <li>Interview</li>
              </ul>
              <p>Similar to IBPS and SSC</p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">🎯</div>
            <h3>Specialized Knowledge</h3>
            <div className="card-content">
              <p>Domain-specific papers include:</p>
              <ul>
                <li>Finance & Economics</li>
                <li>Insurance</li>
                <li>Agriculture & Rural Development</li>
                <li>Securities Markets</li>
              </ul>
              <p>Similar to IBPS SO and SSC CGL Tier 2</p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">🔄</div>
            <h3>Preparation Overlap</h3>
            <div className="card-content">
              <p>
                Candidates preparing for banking or SSC exams can easily
                transition to regulatory exams by focusing on additional
                domain-specific topics.
              </p>
            </div>
          </div>
        </div>

        <div
          className="highlight-box"
          style={{ background: "var(--green-gradient)" }}
        >
          <h3>💡 Key Takeaways for Aspirants</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <div>
              <h4>1️⃣ Common Preparation</h4>
              <p>
                Focus on Quantitative Aptitude, Reasoning, English, and General
                Awareness for all exams
              </p>
            </div>
            <div>
              <h4>2️⃣ Specialized Preparation</h4>
              <p>
                Study domain-specific topics like Finance, Insurance, and
                Agriculture for regulatory exams
              </p>
            </div>
            <div>
              <h4>3️⃣ Descriptive Writing</h4>
              <p>Practice essay and letter writing for mains exams</p>
            </div>
            <div>
              <h4>4️⃣ Time Management</h4>
              <p>Allocate time wisely between sections during the exam</p>
            </div>
          </div>
        </div>

        <div className="info-box">
          <h4>🎓 Conclusion</h4>
          <p>
            Regulatory body exams in India, such as those conducted by RBI,
            SEBI, NABARD, IRDAI, and EPFO, offer excellent career opportunities
            in specialized fields. Their exam structure and syllabus are closely
            aligned with banking and SSC exams, making it easier for aspirants
            to prepare for multiple exams simultaneously.
          </p>
          <p>
            <strong>Success Strategy:</strong> With consistent preparation and a
            strategic approach, candidates can crack these exams and build
            rewarding careers in the regulatory sector.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SscCourse;
