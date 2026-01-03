import React, { useEffect } from "react";
import "./tnpsc.css";
const Tnpsc = () => {
  useEffect(() => {
    /* -----------------------------------------
       1️⃣ Smooth Scroll for Navigation
    ------------------------------------------ */
    const navLinks = document.querySelectorAll(".nav-item a");

    const handleNavClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute("href"));
      if (!target) return;

      const offset = 80;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    };

    navLinks.forEach((link) => link.addEventListener("click", handleNavClick));

    /* -----------------------------------------
       2️⃣ Scroll-To-Top Button Visibility
    ------------------------------------------ */
    const scrollTopBtn = document.getElementById("scrollTop");

    const handleScrollTopVisibility = () => {
      if (window.pageYOffset > 300) {
        scrollTopBtn?.classList.add("visible");
      } else {
        scrollTopBtn?.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScrollTopVisibility);

    /* -----------------------------------------
       3️⃣ Scroll-To-Top Smooth Behavior
    ------------------------------------------ */
    const handleScrollTopClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollTopBtn?.addEventListener("click", handleScrollTopClick);

    /* -----------------------------------------
       4️⃣ Active Navigation Highlighting
    ------------------------------------------ */
    const handleActiveNav = () => {
      let current = "";
      const sections = document.querySelectorAll(".section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.style.background = "";
        link.style.color = "#667eea";

        if (link.getAttribute("href") === `#${current}`) {
          link.style.background =
            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
          link.style.color = "white";
        }
      });
    };

    window.addEventListener("scroll", handleActiveNav);

    /* -----------------------------------------
       5️⃣ Animation on Scroll (Intersection Observer)
    ------------------------------------------ */
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

    const animatedElements = document.querySelectorAll(".subsection, .card");

    animatedElements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });

    /* -----------------------------------------
       Cleanup All Event Listeners
    ------------------------------------------ */
    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleNavClick)
      );
      window.removeEventListener("scroll", handleScrollTopVisibility);
      window.removeEventListener("scroll", handleActiveNav);
      scrollTopBtn?.removeEventListener("click", handleScrollTopClick);
    };
  }, []);

  return (
    <div>
      <div class="hero">
        <h1>🏛️ Complete TNPSC Examination Guide</h1>
        <p>
          Your Comprehensive Resource for Tamil Nadu Public Service Commission
          Exams
        </p>
        <p>
          Groups 1, 2, 2A & 4 | Complete Syllabus, Eligibility, Selection
          Process & More
        </p>
      </div>

     <nav class="sticky-nav">
  <div class="nav-container">

    <button class="nav-btn" onclick="location.href='#section1'">
      🎯 New to TNPSC?
    </button>

    <button class="nav-btn" onclick="location.href='#section2'">
      📚 Group 1 Exam
    </button>

    <button class="nav-btn" onclick="location.href='#section3'">
      📝 Group 2 & 2A Exam
    </button>

    <button class="nav-btn" onclick="location.href='#section4'">
      ✍️ Group 4 Exam
    </button>

  </div>
</nav>


      <section id="section1" class="section">
        <div class="section-header">
          <h2>🎯 NEW TO TNPSC? START HERE</h2>
          <p>
            Everything you need to know about Tamil Nadu Public Service
            Commission examinations
          </p>
        </div>

        <div class="subsection">
          <h3>📋 Overview of TNPSC Exams</h3>
          <div class="card-grid">
            <div class="card">
              <h4>🎯 Purpose</h4>
              <p>
                To recruit candidates for state government services in Tamil
                Nadu.
              </p>
            </div>
            <div class="card">
              <h4>📊 Exam Levels</h4>
              <ul>
                <li>
                  <strong>Group 1:</strong> Higher Administrative Roles
                </li>
                <li>
                  <strong>Group 2:</strong> Executive and Ministerial Roles
                </li>
                <li>
                  <strong>Group 4:</strong> Clerical and Support Roles
                </li>
              </ul>
            </div>
            <div class="card">
              <h4>🔄 Overlap with UPSC CSE</h4>
              <ul>
                <li>Polity</li>
                <li>History</li>
                <li>Geography</li>
                <li>Current Affairs</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="subsection">
          <h3>
            🏢 Recruited Services and Posts in TNPSC Group I, II, IIA and IV
            Exams
          </h3>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>Group 1</th>
                  <th>Group 2</th>
                  <th>Group 2A</th>
                  <th>Group 4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Purpose</strong>
                  </td>
                  <td>
                    To recruit candidates for prestigious administrative roles
                    such as Deputy Collector, Deputy Superintendent of Police,
                    Assistant Commissioner, and District Officer.
                  </td>
                  <td>
                    To recruit candidates for executive and ministerial roles
                    such as Subordinate Judge, Municipal Commissioner, and
                    Assistant Section Officer.
                  </td>
                  <td>
                    To recruit candidates for ministerial and non-interview
                    posts.
                  </td>
                  <td>
                    To recruit candidates for clerical and support roles such as
                    Village Administrative Officer (VAO), Junior Assistant, and
                    Typist.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Key Posts</strong>
                  </td>
                  <td>
                    1. Deputy Collector
                    <br />
                    2. Deputy Superintendent of Police (DSP)
                    <br />
                    3. Assistant Commissioner (Commercial Taxes)
                    <br />
                    4. District Registrar
                    <br />
                    5. District Employment Officer
                    <br />
                    6. District Officer (Fire and Rescue Services)
                    <br />
                    7. Assistant Director of Rural Development
                    <br />
                    8. Assistant Commissioner (Panchayats)
                  </td>
                  <td>
                    1. Assistant Inspector of Labour
                    <br />
                    2. Deputy Commercial Tax Officer
                    <br />
                    3. Sub Registrar, Grade-II
                    <br />
                    4. Municipal Commissioner
                    <br />
                    5. Assistant Section Officer
                    <br />
                    6. Junior Employment Officer
                    <br />
                    7. Special Assistant (Vigilance)
                    <br />
                    8. Forester
                  </td>
                  <td>
                    1. Senior Inspector of Co-operative Societies
                    <br />
                    2. Audit Inspector
                    <br />
                    3. Assistant in Commercial Taxes, Revenue, Civil Supplies,
                    Police, etc.
                    <br />
                    4. Assistant Inspector of Local Fund Audit
                    <br />
                    5. Handloom Inspector
                    <br />
                    6. Assistant Inspector of Hindu Religious and Charitable
                    Endowments
                    <br />
                    7. Junior Accountant
                  </td>
                  <td>
                    1. Village Administrative Officer
                    <br />
                    2. Junior Assistant
                    <br />
                    3. Typist
                    <br />
                    4. Steno-Typist
                    <br />
                    5. Personal Assistant to Chairman
                    <br />
                    6. Personal Clerk to MD/GM
                    <br />
                    7. Private Secretary (Grade-III)
                    <br />
                    8. Junior Executive
                    <br />
                    9. Receptionist
                    <br />
                    10. Laboratory Assistant
                    <br />
                    11. Bill Collector
                    <br />
                    12. Forest Guard and Forest Watcher
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="subsection">
          <h3>
            📊 Typical Vacancies in TNPSC Group 1, Group 2/2A, and Group 4
          </h3>
          <div class="info-box success">
            <strong>📈 Vacancy Trends:</strong> This table shows the typical
            vacancy ranges for different TNPSC groups based on recent
            recruitment patterns, helping you understand annual recruitment
            trends.
          </div>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>TNPSC Group</th>
                  <th>Typical Annual Vacancy Range</th>
                  <th>Recruitment Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Group 1</strong>
                  </td>
                  <td>60-100 positions</td>
                  <td>Usually conducted annually</td>
                </tr>
                <tr>
                  <td>
                    <strong>Group 2</strong>
                  </td>
                  <td>500-1,500 positions</td>
                  <td>Typically held annually</td>
                </tr>
                <tr>
                  <td>
                    <strong>Group 2A</strong>
                  </td>
                  <td>600-1,800 positions</td>
                  <td>Generally conducted annually</td>
                </tr>
                <tr>
                  <td>
                    <strong>Group 4</strong>
                  </td>
                  <td>4,000-11,000 positions</td>
                  <td>Usually conducted annually</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="info-box">
            <strong>📌 Note:</strong> Actual vacancies may vary each year based
            on government requirements. Always check the official TNPSC website
            for the most current notification and exact vacancy numbers.
          </div>
        </div>

        <div class="subsection">
          <h3>✅ Eligibility Conditions</h3>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>Group 1</th>
                  <th>Group 2 and 2A</th>
                  <th>Group 4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Nationality</strong>
                  </td>
                  <td>Indian Citizen</td>
                  <td>Indian Citizen</td>
                  <td>Indian Citizen</td>
                </tr>
                <tr>
                  <td>
                    <strong>Age Limit</strong>
                  </td>
                  <td>
                    <strong>Minimum:</strong> 21 years
                    <br />
                    <strong>Maximum:</strong> 34 years
                    <br />
                    (age calculated as of July 1st of the exam year)
                  </td>
                  <td>
                    <strong>Minimum:</strong> 18 years
                    <br />
                    <strong>Maximum:</strong> 32 years
                    <br />
                    (post-wise permissible relaxation of the maximum age limit)
                  </td>
                  <td>
                    <strong>Minimum:</strong> 18 years
                    <br />
                    <strong>Maximum:</strong> 32 years
                    <br />
                    (post-wise permissible relaxation of the maximum age limit)
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Age Relaxation</strong>
                  </td>
                  <td>
                    Up to 5 years for MBCs/DCs, BC(OBCM)s, BCMs, SCs, SC(A)s,
                    STs, Destitute Widows of all Communities, Persons with
                    Benchmark Disability, and Ex-Servicemen.
                  </td>
                  <td>
                    Up to 5 years for MBCs/DCs, BC(OBCM)s, BCMs, SCs, SC(A)s,
                    STs, Destitute Widows of all Communities, Persons with
                    Benchmark Disability, and Ex-Servicemen.
                  </td>
                  <td>
                    Up to 5 years for MBCs/DCs, BC(OBCM)s, BCMs, SCs, SC(A)s,
                    STs, Destitute Widows of all Communities, Persons with
                    Benchmark Disability, and Ex-Servicemen.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Educational Qualification</strong>
                  </td>
                  <td>A degree from a recognized university.</td>
                  <td>A degree from a recognized university.</td>
                  <td>
                    - Minimum 10th pass for certain posts like VAO
                    <br />- Degree for certain posts like Junior Assistant and
                    Typist
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="subsection">
          <h3>📚 Prelims General Studies Syllabus in Group 1, 2, 2A and 4</h3>
          <div class="info-box">
            <strong>📌 Important:</strong> The level of syllabus varies across
            groups. Group 1, 2, and 2A are at Degree Standard, while Group 4 is
            at SSLC Standard.
          </div>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>Group 1</th>
                  <th>Group 2 and 2A</th>
                  <th>Group 4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Level of Syllabus</strong>
                  </td>
                  <td>
                    <span class="badge badge-primary">Degree Standard</span>
                  </td>
                  <td>
                    <span class="badge badge-primary">Degree Standard</span>
                  </td>
                  <td>
                    <span class="badge badge-info">SSLC Standard</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Total Questions</strong>
                  </td>
                  <td>175 Questions (Part A)</td>
                  <td>75 Questions</td>
                  <td>75 Questions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4>📖 Topic-wise Distribution</h4>
          <div class="card-grid">
            <div class="card">
              <h4>Group 1 (175 Questions)</h4>
              <ul>
                <li>General Science: 10 Questions</li>
                <li>Geography of India: 10 Questions</li>
                <li>History and Culture of India and INM: 25 Questions</li>
                <li>Indian Polity: 40 Questions</li>
                <li>
                  Indian Economy and Development Administration in Tamil Nadu:
                  50 Questions
                </li>
                <li>
                  History, Culture, Heritage, and Socio-Political Movements of
                  Tamil Nadu: 40 Questions
                </li>
                <li>Aptitude: 15 Questions</li>
                <li>Reasoning: 10 Questions</li>
              </ul>
            </div>
            <div class="card">
              <h4>Group 2 & 2A (75 Questions Each)</h4>
              <ul>
                <li>General Science: 5 Questions</li>
                <li>Geography of India: 5 Questions</li>
                <li>History and Culture of India and INM: 10 Questions</li>
                <li>Indian Polity: 15 Questions</li>
                <li>
                  Indian Economy and Development Administration in Tamil Nadu:
                  20 Questions
                </li>
                <li>
                  History, Culture, Heritage, and Socio-Political Movements of
                  Tamil Nadu: 20 Questions
                </li>
                <li>Aptitude: 15 Questions</li>
                <li>Reasoning: 10 Questions</li>
              </ul>
            </div>
            <div class="card">
              <h4>Group 4 (75 Questions)</h4>
              <ul>
                <li>General Science: 5 Questions</li>
                <li>Geography of India: 5 Questions</li>
                <li>History and Culture of India and INM: 10 Questions</li>
                <li>Indian Polity: 15 Questions</li>
                <li>
                  Indian Economy and Development Administration in Tamil Nadu:
                  20 Questions
                </li>
                <li>
                  History, Culture, Heritage, and Socio-Political Movements of
                  Tamil Nadu: 20 Questions
                </li>
                <li>Aptitude: 15 Questions</li>
                <li>Reasoning: 10 Questions</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="subsection">
          <h3>🎯 Reservation Policy</h3>
          <div class="card-grid">
            <div class="card">
              <h4>👥 Community Reservation</h4>
              <ul>
                <li>SC: 15%</li>
                <li>SCA: 3%</li>
                <li>ST: 1%</li>
                <li>BC: 26.5%</li>
                <li>BCM: 3.5%</li>
                <li>MBC: 20.0%</li>
                <li>EWS: As per Tamil Nadu government norms</li>
              </ul>
            </div>
            <div class="card">
              <h4>♿ PwBD Reservation</h4>
              <p>
                Reservation for Persons with Benchmark Disabilities as per
                government norms.
              </p>
            </div>
            <div class="card">
              <h4>👩 Women Reservation</h4>
              <p>
                <strong>30% reservation for women</strong> in all categories
                following the reservation for each communal category as well as
                open category.
              </p>
            </div>
          </div>
        </div>

        <div class="subsection">
          <h3>📜 PSTM Eligibility</h3>
          <div class="highlight-box">
            <h4>🎓 PSTM (Persons Studied in Tamil Medium) Reservation</h4>
            <p>
              <strong>20% of the total vacancies</strong> in TNPSC exams are
              reserved for PSTM candidates on a horizontal reservation basis,
              across all categories (General, SC, ST, OBC, etc.).
            </p>
          </div>

          <div class="info-box">
            <h4>✅ Eligibility Criteria:</h4>
            <ul class="styled-list">
              <li>
                Candidates must have studied all subjects in Tamil medium for
                the prescribed qualification (e.g., SSLC, HSC, Degree, Diploma,
                or Postgraduate Degree).
              </li>
              <li>
                The medium of instruction must be Tamil, as certified by the
                institution where the candidate studied.
              </li>
              <li>
                Candidates must obtain a PSTM Certificate from their school,
                college, or university, signed by the head of the institution.
              </li>
              <li>
                Candidates who studied only a part of their education in Tamil
                medium (e.g., SSLC in Tamil but Degree in English) are{" "}
                <strong>not eligible</strong> for PSTM reservation.
              </li>
            </ul>
          </div>

          <h4>📋 Applicable Exams:</h4>
          <div class="card-grid">
            <div class="card">
              <h4>Group 1</h4>
              <p>Degree must be completed in Tamil medium.</p>
            </div>
            <div class="card">
              <h4>Group 2/2A</h4>
              <p>Degree must be completed in Tamil medium.</p>
            </div>
            <div class="card">
              <h4>Group 4/VAO</h4>
              <p>SSLC or HSC must be completed in Tamil medium.</p>
            </div>
          </div>
        </div>

        <div class="subsection">
          <h3>💰 Fee Structure</h3>
          <div class="card-grid">
            <div class="card">
              <h4>Group 1</h4>
              <p>
                <strong>₹100</strong> (Prelims) + <strong>₹200</strong> (Mains)
              </p>
              <p class="badge badge-success">Total: ₹300</p>
            </div>
            <div class="card">
              <h4>Group 2</h4>
              <p>
                <strong>₹100</strong> (Prelims) + <strong>₹150</strong> (Mains)
              </p>
              <p class="badge badge-success">Total: ₹250</p>
            </div>
            <div class="card">
              <h4>Group 4</h4>
              <p>
                <strong>₹100</strong> (Single Stage)
              </p>
              <p class="badge badge-success">Total: ₹100</p>
            </div>
          </div>
          <div class="info-box success">
            <strong>🎁 Exempted Categories:</strong> SC/ST/PwBD/Women candidates
            are exempted from paying the examination fee.
          </div>
        </div>

        <div class="subsection">
          <h3>⚖️ Comparison with UPSC CSE</h3>
          <div class="card-grid">
            <div class="card">
              <h4>✅ Similarities</h4>
              <ul>
                <li>
                  Overlap in syllabus (Polity, History, Geography, and Current
                  Affairs)
                </li>
                <li>Objective-type Preliminary Exam</li>
                <li>Multiple stages of examination</li>
                <li>Focus on General Studies and Current Affairs</li>
              </ul>
            </div>
            <div class="card">
              <h4>🔄 Differences</h4>
              <ul>
                <li>TNPSC focuses more on Tamil Nadu-specific topics</li>
                <li>No optional subjects in TNPSC exams</li>
                <li>
                  Shorter selection process (No Main Exam for Group 2 and Group
                  4)
                </li>
                <li>Tamil language proficiency is mandatory</li>
                <li>Different age limits and eligibility criteria</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="subsection">
          <h3>📈 Recent Trends</h3>
          <div class="info-box warning">
            <h4>🔥 Key Trend</h4>
            <p>
              <strong>Tamil Language Proficiency:</strong> Mandatory for all
              TNPSC exams. Candidates must demonstrate proficiency in Tamil
              language to be eligible for selection.
            </p>
          </div>
        </div>

        <div class="subsection">
          <h3>🔔 Notifications and Updates</h3>
          <div class="card-grid">
            <div class="card">
              <h4>🌐 Official TNPSC Website</h4>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.tnpsc.gov.in"
                  target="_blank"
                  style={{ color: "#667eea" }}
                >
                  www.tnpsc.gov.in
                </a>
              </p>
              <p>
                Check for latest notifications, exam schedules, and results.
              </p>
            </div>
            <div class="card">
              <h4>📰 Tamil Nadu Government Gazette</h4>
              <p>
                Official government gazette publications for TNPSC notifications
                and announcements.
              </p>
            </div>
            <div class="card">
              <h4>📄 TNPSC Notification PDFs</h4>
              <p>
                Detailed notification PDFs available on the official website
                with complete information about exams, eligibility, and
                syllabus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="section2" class="section">
        <div class="section-header">
          <h2>📚 MORE ABOUT TNPSC GROUP 1 EXAM</h2>
          <p>Detailed information about the prestigious Group 1 examination</p>
        </div>

        <div class="subsection">
          <h3>🏋️ Physical Requirements</h3>
          <div class="info-box" style={{ color: "black" }}>
            <p>
              <strong>Note:</strong> Physical requirements are post-specific and
              will be mentioned in the official notification for each post.
              Candidates should refer to the detailed notification for specific
              physical standards required for different posts under Group 1.
            </p>
          </div>
        </div>

        <div class="subsection">
          <h3>📋 Plan of Examination</h3>

          <div class="stage-box">
            <h4>Stage 1: Preliminary Examination</h4>
            <p>
              <strong>Type:</strong> Objective type (Screening Test)
            </p>
            <ul class="styled-list">
              <li>
                Marks obtained in the Preliminary Examination are{" "}
                <strong>not counted</strong> for the final merit list.
              </li>
              <li>
                Candidates qualifying for the Main Examination will be{" "}
                <strong>20 times the number of vacancies</strong>, subject to
                the rule of reservation.
              </li>
            </ul>
          </div>

          <div class="stage-box">
            <h4>Stage 2: Main Examination</h4>
            <p>
              <strong>Components:</strong> Written Examination + Interview
            </p>
          </div>

          <div class="table-container">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Paper</th>
                  <th>Subject</th>
                  <th>Marks</th>
                  <th>Type</th>
                  <th>Counted for Ranking</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Paper I</strong>
                  </td>
                  <td>Mandatory Tamil Paper</td>
                  <td>100</td>
                  <td>Qualifying</td>
                  <td>❌ No</td>
                </tr>
                <tr>
                  <td>
                    <strong>Paper II</strong>
                  </td>
                  <td>General Studies</td>
                  <td>250</td>
                  <td>Descriptive</td>
                  <td>✅ Yes</td>
                </tr>
                <tr>
                  <td>
                    <strong>Paper III</strong>
                  </td>
                  <td>General Studies</td>
                  <td>250</td>
                  <td>Descriptive</td>
                  <td>✅ Yes</td>
                </tr>
                <tr>
                  <td>
                    <strong>Paper IV</strong>
                  </td>
                  <td>General Studies</td>
                  <td>250</td>
                  <td>Descriptive</td>
                  <td>✅ Yes</td>
                </tr>
                <tr>
                  <td>
                    <strong>Interview</strong>
                  </td>
                  <td>Personality Test</td>
                  <td>100</td>
                  <td>Oral</td>
                  <td>✅ Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="info-box" style={{ color: "black" }}>
            <h4>📊 Selection Criteria:</h4>
            <ul class="styled-list">
              <li>
                Marks obtained in{" "}
                <strong>
                  Paper II, Paper III, Paper IV, and the Interview
                </strong>{" "}
                are counted for ranking.
              </li>
              <li>
                The number of candidates admitted to the interview will depend
                on the number of vacancies:
                <ul style={{ marginTop: "10px" }}>
                  <li>
                    <strong>5 or more vacancies:</strong> 2 times the number of
                    vacancies
                  </li>
                  <li>
                    <strong>4 or fewer vacancies:</strong> 3 times the number of
                    vacancies
                  </li>
                </ul>
              </li>
              <li>
                <strong>Final Selection:</strong> Based on the total marks
                obtained in Paper II, Paper III, Paper IV, and the Interview.
              </li>
            </ul>
          </div>
        </div>

        <div class="subsection">
          <h3>📖 Examination Syllabus</h3>

          <div class="highlight-box">
            <h4>
              Paper I - Qualifying Paper: Mandatory Tamil Paper (SSLC Standard)
            </h4>
            <p>
              <span class="badge badge-warning">100 Marks</span>{" "}
              <span class="badge badge-info">Qualifying Paper</span>
            </p>
            <p>
              This paper is mandatory and qualifying in nature. Marks are not
              counted for final ranking.
            </p>
          </div>

          <div class="card">
            <h4>Paper II - General Studies (Degree Standard)</h4>
            <p>
              <span class="badge badge-primary">250 Marks</span>
            </p>
            <h4 style={{ marginTop: "20px" }}>Topics Covered:</h4>
            <ul class="styled-list">
              <li>
                <strong>Unit I:</strong> Modern History of India and Indian
                Culture
              </li>
              <li>
                <strong>Unit II:</strong> Social Issues in India and Tamil Nadu
              </li>
              <li>
                <strong>Unit III:</strong> Ethics and Integrity
              </li>
            </ul>
          </div>

          <div class="card">
            <h4>Paper III - General Studies (Degree Standard)</h4>
            <p>
              <span class="badge badge-primary">250 Marks</span>
            </p>
            <h4 style={{ marginTop: "20px" }}>Topics Covered:</h4>
            <ul class="styled-list">
              <li>
                <strong>Unit I:</strong> Indian Polity and Emerging Political
                Trends across the World affecting India
              </li>
              <li>
                <strong>Unit II:</strong> Role and Impact of Science and
                Technology in the Development of India
              </li>
              <li>
                <strong>Unit III:</strong> Tamil Society – Its Culture and
                Heritage
              </li>
            </ul>
          </div>

          <div class="card">
            <h4>Paper IV - General Studies (Degree Standard)</h4>
            <p>
              <span class="badge badge-primary">250 Marks</span>
            </p>
            <h4 style={{ marginTop: "20px" }}>Topics Covered:</h4>
            <ul class="styled-list">
              <li>
                <strong>Unit I:</strong> General Geography and Geography of
                India with Special Reference to Tamil Nadu
              </li>
              <li>
                <strong>Unit II:</strong> Environment, Biodiversity, and
                Disaster Management
              </li>
              <li>
                <strong>Unit III:</strong> Indian Economy – Current Economic
                Trends and Impact of Global Economy on India
              </li>
            </ul>
          </div>

          <div class="card">
            <h4>Personality Test / Interview</h4>
            <p>
              <span class="badge badge-success">100 Marks</span>
            </p>
            <p>
              The interview assesses the candidate's personality, communication
              skills, knowledge, and suitability for administrative positions.
            </p>
          </div>
        </div>
      </section>

      <section id="section3" class="section">
        <div class="section-header">
          <h2>📝 MORE ABOUT TNPSC GROUP 2 AND 2A EXAM</h2>
          <p>Complete details about Group 2 and Group 2A examinations</p>
        </div>

        <div class="subsection">
          <h3>📋 Plan of Examination</h3>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Stage</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Stages of Examination</strong>
                  </td>
                  <td>
                    (i) Common Preliminary Examination
                    <br />
                    (ii) Separate Main Examination for Group II and Group IIA
                    Services
                    <br />
                    [(iii) Endurance Test for the post of Forester in Forest
                    Department and TAFCORN]
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Preliminary Examination</strong>
                  </td>
                  <td>
                    • Serves as a screening test only
                    <br />• Marks obtained in the Preliminary Examination will{" "}
                    <strong>not be counted</strong> for determining the final
                    order of merit
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Main Examination</strong>
                  </td>
                  <td>
                    • For Group II and Group IIA Services, the number of
                    candidates admitted will be in the ratio of{" "}
                    <strong>1:10</strong>
                    <br />
                    • Consists of two papers:
                    <br />
                    &nbsp;&nbsp;- Paper I: Qualifying in nature
                    <br />
                    &nbsp;&nbsp;- Paper II: Marks obtained will be counted for
                    ranking
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Final Selection</strong>
                  </td>
                  <td>
                    • Based on marks obtained in Paper II of the Main
                    Examination, subject to the rule of reservation of
                    appointments
                    <br />• Rank list will be published based on Paper II marks
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Certificate Verification</strong>
                  </td>
                  <td>
                    • Candidates will be admitted to Onscreen Certificate
                    Verification in the ratio of:
                    <br />
                    &nbsp;&nbsp;- <strong>1:3</strong> for General Turn category
                    <br />
                    &nbsp;&nbsp;- <strong>1:2</strong> for all Reserved
                    categories
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="subsection">
          <h3>📊 Scheme of Examination</h3>

          <h4>Group II Examination Scheme</h4>
          <div class="table-container">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Paper</th>
                  <th>Subject</th>
                  <th>Type</th>
                  <th>Marks</th>
                  <th>Standard</th>
                  <th>Counted for Ranking</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Paper I</strong>
                  </td>
                  <td>Mandatory Tamil Paper</td>
                  <td>Objective</td>
                  <td>100</td>
                  <td>SSLC Standard</td>
                  <td>❌ No (Qualifying)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Paper II</strong>
                  </td>
                  <td>General Studies</td>
                  <td>Descriptive</td>
                  <td>300</td>
                  <td>Degree Standard</td>
                  <td>✅ Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 style={{ marginTop: "40px" }}>Group IIA Examination Scheme</h4>
          <div class="table-container">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Paper</th>
                  <th>Subject</th>
                  <th>Type</th>
                  <th>Questions</th>
                  <th>Marks</th>
                  <th>Standard</th>
                  <th>Counted for Ranking</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Paper I</strong>
                  </td>
                  <td>Mandatory Tamil Paper</td>
                  <td>Objective</td>
                  <td>-</td>
                  <td>100</td>
                  <td>SSLC Standard</td>
                  <td>❌ No (Qualifying)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Paper II</strong>
                  </td>
                  <td>General Studies</td>
                  <td>Objective</td>
                  <td>200</td>
                  <td>300</td>
                  <td>Degree Standard</td>
                  <td>✅ Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="subsection">
          <h3>📚 Group II Mains Examination Syllabus</h3>
          <div class="highlight-box">
            <h4>
              Paper 2: Descriptive Type - General Studies Syllabus (Degree
              Standard)
            </h4>
            <p>
              <span class="badge badge-primary">Total Marks: 300</span>
            </p>
          </div>

          <div class="card-grid">
            <div class="card">
              <h4>Unit I</h4>
              <p>
                <strong>
                  Modern History of India with specific reference to Tamil Nadu
                </strong>
              </p>
              <p>
                <span class="badge badge-success">40 Marks</span>
              </p>
            </div>
            <div class="card">
              <h4>Unit II</h4>
              <p>
                <strong>Tamil Society – Culture and Heritage</strong>
              </p>
              <p>
                <span class="badge badge-success">30 Marks</span>
              </p>
            </div>
            <div class="card">
              <h4>Unit III</h4>
              <p>
                <strong>
                  Social Issues in India with specific reference to Tamil Nadu
                </strong>
              </p>
              <p>
                <span class="badge badge-success">50 Marks</span>
              </p>
            </div>
            <div class="card">
              <h4>Unit IV</h4>
              <p>
                <strong>Science and Technology in Development</strong>
              </p>
              <p>
                <span class="badge badge-success">40 Marks</span>
              </p>
            </div>
            <div class="card">
              <h4>Unit V</h4>
              <p>
                <strong>
                  Constitution, Polity and Governance in India with specific
                  reference to Tamil Nadu
                </strong>
              </p>
              <p>
                <span class="badge badge-success">60 Marks</span>
              </p>
            </div>
            <div class="card">
              <h4>Unit VI</h4>
              <p>
                <strong>
                  Geography of India, Environment, Biodiversity and Disaster
                  Management in India with specific reference to Tamil Nadu
                </strong>
              </p>
              <p>
                <span class="badge badge-success">40 Marks</span>
              </p>
            </div>
            <div class="card">
              <h4>Unit VII</h4>
              <p>
                <strong>
                  Indian Economy with specific reference to Tamil Nadu
                </strong>
              </p>
              <p>
                <span class="badge badge-success">40 Marks</span>
              </p>
            </div>
          </div>
        </div>

        <div class="subsection">
          <h3>📚 Group IIA Mains Examination Syllabus</h3>
          <div class="highlight-box">
            <h4>Paper 2: Objective Type (200 Questions / 300 Marks)</h4>
            <p>
              <span class="badge badge-primary">
                Part A - General Studies (Degree Standard)
              </span>
            </p>
            <p>
              <span class="badge badge-info">100 Questions / 150 Marks</span>
            </p>
          </div>

          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Unit</th>
                  <th>Topics</th>
                  <th>Questions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Unit I</strong>
                  </td>
                  <td>
                    Modern History of Tamil Nadu, Tamil Society – Culture and
                    Heritage
                  </td>
                  <td>30 Questions</td>
                </tr>
                <tr>
                  <td>
                    <strong>Unit II</strong>
                  </td>
                  <td>Administration of States with reference to Tamil Nadu</td>
                  <td>45 Questions</td>
                </tr>
                <tr>
                  <td>
                    <strong>Unit III</strong>
                  </td>
                  <td>Science and Technology in Development</td>
                  <td>20 Questions</td>
                </tr>
                <tr>
                  <td>
                    <strong>Unit IV</strong>
                  </td>
                  <td>Tamil Nadu Economy and Social Issues in Tamil Nadu</td>
                  <td>30 Questions</td>
                </tr>
                <tr>
                  <td>
                    <strong>Unit V</strong>
                  </td>
                  <td>
                    Geography of Tamil Nadu, Environment, Biodiversity and
                    Disaster Management in Tamil Nadu
                  </td>
                  <td>25 Questions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="section4" class="section">
        <div class="section-header">
          <h2>✍️ MORE ABOUT TNPSC GROUP 4 EXAM</h2>
          <p>
            Everything about the Group 4 examination for clerical and support
            roles
          </p>
        </div>

        <div class="subsection">
          <h3>📋 Plan of Examination</h3>
          <div class="info-box success" style={{ color: "black" }}>
            <h4>✅ Single Stage Examination</h4>
            <p>
              <strong>Type:</strong> Objective type (No Main Exam or Interview)
            </p>
            <p>
              Group 4 examination consists of only one stage - the written
              examination. There is no separate Main Examination or Interview
              stage.
            </p>
          </div>
        </div>

        <div class="subsection">
          <h3>📊 Scheme of Examination</h3>
          <div class="table-container">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Part</th>
                  <th>Subject</th>
                  <th>Type</th>
                  <th>Questions</th>
                  <th>Marks</th>
                  <th>Standard</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Part A</strong>
                  </td>
                  <td>Tamil Eligibility-cum-Scoring Test</td>
                  <td>Objective</td>
                  <td>100</td>
                  <td>150</td>
                  <td>SSLC Standard</td>
                </tr>
                <tr>
                  <td>
                    <strong>Part B</strong>
                  </td>
                  <td>General Studies, Aptitude and Reasoning</td>
                  <td>Objective</td>
                  <td>100</td>
                  <td>150</td>
                  <td>SSLC Standard</td>
                </tr>
                <tr>
                  <td colspan="3">
                    <strong>Total</strong>
                  </td>
                  <td>
                    <strong>200</strong>
                  </td>
                  <td>
                    <strong>300</strong>
                  </td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="card-grid" style={{ marginTop: "30px" }}>
            <div class="card">
              <h4>Part A - Tamil Eligibility-cum-Scoring Test</h4>
              <p>
                <span class="badge badge-info">100 Questions | 150 Marks</span>
              </p>
              <ul>
                <li>
                  Questions will be in <strong>Tamil only</strong>
                </li>
                <li>Tests Tamil language proficiency</li>
                <li>SSLC Standard</li>
                <li>Marks counted for ranking</li>
              </ul>
            </div>
            <div class="card">
              <h4>Part B - General Studies</h4>
              <p>
                <span class="badge badge-primary">
                  100 Questions | 150 Marks
                </span>
              </p>
              <ul>
                <li>
                  Questions in both <strong>Tamil and English</strong>
                </li>
                <li>General Studies (75 Questions)</li>
                <li>Aptitude (15 Questions)</li>
                <li>Reasoning (10 Questions)</li>
                <li>SSLC Standard</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="subsection">
          <h3>⚠️ Important Note</h3>
          <div class="info-box warning" style={{ color: "black" }}>
            <h4>🎯 Part B Evaluation Criteria</h4>
            <ul class="styled-list">
              <li>
                <strong>Part B will be evaluated only if</strong> the candidate
                secures a minimum of <strong>40% (60 marks)</strong> in Part A.
              </li>
              <li>
                <strong>Ranking:</strong> Total marks from Part A and Part B
                will be considered for ranking.
              </li>
            </ul>
          </div>

          <div class="info-box" style={{ color: "black" }}>
            <h4>🌐 Language of Questions</h4>
            <ul class="styled-list">
              <li>
                <strong>Part A (Tamil Eligibility-cum-Scoring Test):</strong>{" "}
                Questions will be in <strong>Tamil only</strong>
              </li>
              <li>
                <strong>Part B:</strong> Questions will be in both{" "}
                <strong>Tamil and English</strong>
              </li>
            </ul>
          </div>
        </div>

        <div class="subsection">
          <h3>♿ Exemption for Differently Abled Candidates</h3>
          <div class="highlight-box">
            <h4>🎓 Special Provision</h4>
            <p>
              <strong>Differently Abled candidates</strong> (irrespective of
              disability percentage) who studied English in Board/University can
              opt for <strong>General English (SSLC Standard)</strong> instead
              of the Tamil Eligibility-cum-Scoring Test.
            </p>
          </div>
          <div class="info-box success" style={{ color: "black" }}>
            <p>
              This provision ensures that differently abled candidates who may
              face difficulties with the Tamil language test can still
              participate in the examination by choosing the English
              alternative.
            </p>
          </div>
        </div>

        <div class="subsection">
          <h3>✅ Selection Procedure</h3>

          <div class="stage-box">
            <h4>Stage 1: Written Examination</h4>
            <p>
              Candidates will be shortlisted for onscreen certificate
              verification based on marks obtained in the written examination
              and subject to the rule of reservation of appointments.
            </p>
          </div>

          <div class="stage-box">
            <h4>Stage 2: Onscreen Certificate Verification</h4>
            <p>
              After onscreen verification, eligible candidates will proceed to
              physical certificate verification.
            </p>
          </div>

          <div class="stage-box">
            <h4>Stage 3: Physical Certificate Verification</h4>
            <ul class="styled-list">
              <li>
                A register number-wise list of candidates for physical
                verification will be published on the Commission's website.
              </li>
              <li>
                Original certificates supporting the claims made in the online
                application will be thoroughly verified.
              </li>
            </ul>
          </div>

          <div class="stage-box">
            <h4>Stage 4: Counselling</h4>
            <ul class="styled-list">
              <li>
                After document scrutiny, eligible candidates will be admitted to
                the next stage.
              </li>
              <li>
                Candidates will participate in counselling based on their rank.
              </li>
            </ul>
          </div>

          <div class="info-box success" style={{ color: "black" }}>
            <h4>🎯 Final Selection</h4>
            <p>
              Final selection is based on the marks obtained in the written
              examination (Part A + Part B), subject to successful verification
              of documents and counselling.
            </p>
          </div>
        </div>
      </section>

      <div class="scroll-top" id="scrollTop">
        ↑
      </div>
    </div>
  );
};

export default Tnpsc;
