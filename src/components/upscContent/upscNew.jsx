import React from "react";
import "./upsc.css";
const UpscNew = () => {
  return (
    <div class="max-w-[1200px] mx-auto p-5">
      <header>
        <h1>🎯 New to UPSC? Start Here</h1>
        <p>
          Your Complete Beginner's Guide to the UPSC Civil Services Examination
        </p>
      </header>

      <div class="quick-nav">
        <h3>Quick Navigation</h3>
        <div class="nav-links">
          <a href="#what-is-upsc">What is UPSC?</a>
          <a href="#stages-overview">Stages Overview</a>
          <a href="#prelims">Prelims</a>
          <a href="#mains">Mains</a>
          <a href="#interview">Interview</a>
          <a href="#services">Career Services</a>
          <a href="#eligibility">Eligibility</a>
        </div>
      </div>

      <div class="stats-dashboard">
        <div class="stat-card">
          <div class="stat-number">24</div>
          <div class="stat-label">Career Services</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">3</div>
          <div class="stat-label">Exam Stages</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">2025</div>
          <div class="stat-label">Total Marks</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">32</div>
          <div class="stat-label">Max Age (Gen)</div>
        </div>
      </div>

      <div id="what-is-upsc" class="section">
        <h2>What is UPSC Civil Services Exam?</h2>
        <p>
          The{" "}
          <strong>
            Union Public Service Commission (UPSC) Civil Services Examination
            (CSE)
          </strong>{" "}
          is one of India's most prestigious and competitive examinations. It
          serves as the gateway to the country's elite administrative services
          and is conducted annually by the Union Public Service Commission.
        </p>

        <div class="info-grid">
          <div class="info-card">
            <h4>🏛️ Conducted By</h4>
            <p>
              Union Public Service Commission (UPSC), established under Article
              315 of the Constitution of India
            </p>
          </div>
          <div class="info-card">
            <h4>🎯 Purpose</h4>
            <p>
              Recruitment to 24 All India and Central Services including IAS,
              IPS, IFS, and other Group A services
            </p>
          </div>
          <div class="info-card">
            <h4>📅 Frequency</h4>
            <p>
              Conducted once every year with notification typically released in
              February and Prelims in May/June
            </p>
          </div>
          <div class="info-card">
            <h4>🌟 Prestige Level</h4>
            <p>
              Highest civilian examination in India with selection ratio of
              approximately 0.1% (1 in 1000 candidates)
            </p>
          </div>
        </div>

        <div class="highlight-box">
          <h3>Why UPSC CSE is Special</h3>
          <ul>
            <li>
              Direct entry to India's most powerful administrative positions
            </li>
            <li>
              Opportunity to serve the nation and influence policy-making at the
              highest level
            </li>
            <li>
              Comprehensive examination testing knowledge, analytical ability,
              and personality
            </li>
            <li>Career stability with excellent compensation and benefits</li>
            <li>Prestige and social respect across the nation</li>
            <li>Diverse career paths across 24 different services</li>
          </ul>
        </div>

        <div class="alert-box alert-info">
          <strong>📊 Competition Level</strong>
          Approximately 10-12 lakh candidates register every year, but only
          800-1000 candidates are finally selected. This makes it one of the
          toughest examinations globally with a success rate of less than 0.1%.
        </div>
      </div>

      <div id="stages-overview" class="section">
        <h2>Stages and Syllabus Overview</h2>
        <p>
          The UPSC Civil Services Examination is a{" "}
          <strong>three-stage selection process</strong> designed to test
          candidates comprehensively across knowledge, application, and
          personality dimensions.
        </p>

        <div class="process-flow">
          <div class="stage-card">
            <div class="stage-number">1</div>
            <h3>Preliminary Examination</h3>
            <ul>
              <li>Objective Type (MCQ)</li>
              <li>2 Papers (400 Marks)</li>
              <li>Qualifying Nature (Screening)</li>
              <li>Negative Marking</li>
              <li>Duration: 2 Hours per paper</li>
              <li>Cutoff determines Mains eligibility</li>
            </ul>
          </div>

          <div class="stage-card">
            <div class="stage-number">2</div>
            <h3>Main Examination</h3>
            <ul>
              <li>Descriptive Type (Written)</li>
              <li>9 Papers (1750 Marks)</li>
              <li>Merit Ranking Basis</li>
              <li>No Negative Marking</li>
              <li>Duration: 3 Hours per paper</li>
              <li>Tests in-depth knowledge & writing</li>
            </ul>
          </div>

          <div class="stage-card">
            <div class="stage-number">3</div>
            <h3>Personality Test (Interview)</h3>
            <ul>
              <li>Personal Interview</li>
              <li>275 Marks</li>
              <li>Final Merit Ranking</li>
              <li>Board of Experts</li>
              <li>Duration: 30-45 minutes</li>
              <li>Personality & suitability test</li>
            </ul>
          </div>
        </div>

        <div class="alert-box alert-success">
          <strong>✅ Final Selection Formula</strong>
          Final Merit = Mains Score (1750 marks) + Interview Score (275 marks) ={" "}
          <strong>2025 Marks Total</strong>
          <br />
          <em>
            Note: Prelims marks are NOT counted for final merit ranking. Prelims
            only serves as a qualifying/screening test.
          </em>
        </div>

        <h3>Exam Timeline (Typical Annual Schedule)</h3>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Stage</th>
                <th>Timeline</th>
                <th>Duration</th>
                <th>Result Declaration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Notification Release</strong>
                </td>
                <td>February</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <strong>Prelims Exam</strong>
                </td>
                <td>May/June</td>
                <td>1 Day (2 Papers)</td>
                <td>July (6-8 weeks later)</td>
              </tr>
              <tr>
                <td>
                  <strong>Mains Exam</strong>
                </td>
                <td>September/October</td>
                <td>5 Days (9 Papers)</td>
                <td>January/February (3-4 months later)</td>
              </tr>
              <tr>
                <td>
                  <strong>Interview</strong>
                </td>
                <td>March-May</td>
                <td>30-45 min per candidate</td>
                <td>May/June (after all interviews)</td>
              </tr>
              <tr>
                <td>
                  <strong>Final Result</strong>
                </td>
                <td>May/June</td>
                <td>-</td>
                <td>Marks released in July/August</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="alert-box alert-warning">
          <strong>⏳ Total Time Investment</strong>
          From notification to final result, the entire UPSC CSE process takes
          approximately 15-16 months. Preparation typically requires 12-18
          months of dedicated study for most successful candidates.
        </div>
      </div>

      <div id="prelims" class="section">
        <h2>What is Prelims? (Preliminary Examination)</h2>
        <p>
          The Preliminary Examination, commonly called <strong>Prelims</strong>,
          is the first stage and acts as a <strong>screening test</strong> to
          shortlist candidates for the Main Examination. It consists of two
          objective-type papers conducted on the same day.
        </p>

        <h3>Paper Structure</h3>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Paper</th>
                <th>Subject</th>
                <th>Questions</th>
                <th>Marks</th>
                <th>Duration</th>
                <th>Nature</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span class="paper-badge">Paper-I</span>
                </td>
                <td>
                  <strong>General Studies (GS)</strong>
                </td>
                <td>100 MCQs</td>
                <td>200</td>
                <td>2 Hours</td>
                <td>Qualifying + Merit</td>
              </tr>
              <tr>
                <td>
                  <span class="paper-badge">Paper-II</span>
                </td>
                <td>
                  <strong>CSAT (Civil Services Aptitude Test)</strong>
                </td>
                <td>80 MCQs</td>
                <td>200</td>
                <td>2 Hours</td>
                <td>Qualifying Only (33% required)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Paper-I: General Studies - Detailed Syllabus</h3>
        <div class="info-grid">
          <div class="info-card">
            <h4>📜 Current Affairs & Events</h4>
            <p>
              National and International importance, significant events,
              personalities, and developments (15-20%)
            </p>
          </div>
          <div class="info-card">
            <h4>🏛️ Indian History & Culture</h4>
            <p>
              Ancient, Medieval, Modern Indian History, Art & Culture, Heritage,
              Architecture (18-20%)
            </p>
          </div>
          <div class="info-card">
            <h4>🌍 Geography</h4>
            <p>
              Indian & World Geography - Physical, Social, Economic Geography,
              Environment & Ecology (15-18%)
            </p>
          </div>
          <div class="info-card">
            <h4>⚖️ Polity & Governance</h4>
            <p>
              Constitution, Political System, Panchayati Raj, Public Policy,
              Rights Issues (15-18%)
            </p>
          </div>
          <div class="info-card">
            <h4>💰 Economy</h4>
            <p>
              Economic Development, Budget, Government Schemes, Basic Economics
              concepts (12-15%)
            </p>
          </div>
          <div class="info-card">
            <h4>🔬 Science & Technology</h4>
            <p>
              General Science, S&T Developments, IT, Space, Biotechnology,
              Environmental Science (15-18%)
            </p>
          </div>
        </div>

        <h3>Paper-II: CSAT - Detailed Syllabus</h3>
        <div class="info-grid">
          <div class="info-card">
            <h4>📖 Comprehension</h4>
            <p>
              Reading comprehension passages (4-6 passages) testing
              understanding and interpretation
            </p>
          </div>
          <div class="info-card">
            <h4>🧮 Quantitative Aptitude</h4>
            <p>
              Basic Numeracy, Data Interpretation, Graphs, Charts, Tables (10th
              standard level)
            </p>
          </div>
          <div class="info-card">
            <h4>🧠 Logical Reasoning</h4>
            <p>
              Analytical & Logical Reasoning, Decision Making, Problem Solving
            </p>
          </div>
          <div class="info-card">
            <h4>🔍 Mental Ability</h4>
            <p>
              Pattern recognition, Series completion, Coding-Decoding,
              Relationships
            </p>
          </div>
        </div>

        <h3>Negative Marking Pattern</h3>
        <div class="alert-box alert-warning">
          <strong>⚠️ Penalty for Wrong Answers</strong>
          <ul>
            <li>
              <strong>Paper-I (GS):</strong> 1/3rd penalty (0.66 marks deducted
              for each wrong answer)
            </li>
            <li>
              <strong>Paper-II (CSAT):</strong> 1/3rd penalty (0.66 marks
              deducted for each wrong answer)
            </li>
            <li>
              <strong>Unattempted questions:</strong> No penalty (0 marks)
            </li>
            <li>
              <strong>Strategy tip:</strong> Avoid wild guessing; attempt only
              when you can eliminate 2+ options
            </li>
          </ul>
        </div>

        <h3>Qualifying Criteria</h3>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Paper-I (GS) Cutoff</th>
                <th>Paper-II (CSAT) Requirement</th>
                <th>Typical Qualifying Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>General</strong>
                </td>
                <td>Merit-based cutoff</td>
                <td>Minimum 33% (66 marks)</td>
                <td>90-105 marks (out of 200)</td>
              </tr>
              <tr>
                <td>
                  <strong>OBC</strong>
                </td>
                <td>Merit-based cutoff (lower)</td>
                <td>Minimum 33% (66 marks)</td>
                <td>85-95 marks (out of 200)</td>
              </tr>
              <tr>
                <td>
                  <strong>SC/ST</strong>
                </td>
                <td>Merit-based cutoff (lower)</td>
                <td>Minimum 33% (66 marks)</td>
                <td>75-85 marks (out of 200)</td>
              </tr>
              <tr>
                <td>
                  <strong>EWS</strong>
                </td>
                <td>Merit-based cutoff</td>
                <td>Minimum 33% (66 marks)</td>
                <td>88-100 marks (out of 200)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="highlight-box">
          <h3>Key Points About Prelims</h3>
          <ul>
            <li>
              <strong>Screening Test Only:</strong> Prelims marks are NOT added
              to final merit ranking
            </li>
            <li>
              <strong>CSAT is Qualifying:</strong> You just need 33% in
              Paper-II; only Paper-I marks determine your rank
            </li>
            <li>
              <strong>Cutoff Varies:</strong> Changes every year based on
              difficulty level and number of vacancies
            </li>
            <li>
              <strong>Approximately 10,000-15,000</strong> candidates qualify
              for Mains (out of 4-5 lakh who appear)
            </li>
            <li>
              <strong>One-day exam:</strong> Both papers on same day (Morning:
              GS, Afternoon: CSAT)
            </li>
            <li>
              <strong>OMR Sheet based:</strong> Use of Blue/Black ballpoint pen
              only
            </li>
          </ul>
        </div>

        <div class="alert-box alert-info">
          <strong>📚 Preparation Strategy Tip</strong>
          Focus heavily on Paper-I (GS) as it determines your rank. For Paper-II
          (CSAT), aim for 70-80 marks to comfortably cross the 33% threshold.
          Practice time management as 2 hours for 100/80 questions is tight (1.2
          minutes per question).
        </div>
      </div>

      <div id="mains" class="section">
        <h2>What is Mains? (Main Examination)</h2>
        <p>
          The <strong>Main Examination</strong> is the second stage where
          candidates are tested through{" "}
          <strong>descriptive written papers</strong>. It's designed to assess
          the academic talent and understanding of candidates through
          conventional essay-type questions. This is where your{" "}
          <strong>merit rank is determined</strong>.
        </p>

        <h3>Complete Paper Structure (9 Papers)</h3>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Paper</th>
                <th>Subject</th>
                <th>Marks</th>
                <th>Duration</th>
                <th>Nature</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: "#fff9e6" }}>
                <td>
                  <span class="paper-badge">Paper-A</span>
                </td>
                <td>
                  <strong>Indian Language</strong> (from 8th Schedule)
                </td>
                <td>300</td>
                <td>3 Hours</td>
                <td>
                  <strong>Qualifying (25% required)</strong>
                </td>
              </tr>
              <tr style={{ background: "#fff9e6" }}>
                <td>
                  <span class="paper-badge">Paper-B</span>
                </td>
                <td>
                  <strong>English</strong>
                </td>
                <td>300</td>
                <td>3 Hours</td>
                <td>
                  <strong>Qualifying (25% required)</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="paper-badge">Paper-I</span>
                </td>
                <td>
                  <strong>Essay</strong>
                </td>
                <td>250</td>
                <td>3 Hours</td>
                <td>
                  <strong>Merit Paper</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="paper-badge">Paper-II</span>
                </td>
                <td>
                  <strong>General Studies-I</strong> (Indian Heritage & Culture,
                  History, Geography)
                </td>
                <td>250</td>
                <td>3 Hours</td>
                <td>
                  <strong>Merit Paper</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="paper-badge">Paper-III</span>
                </td>
                <td>
                  <strong>General Studies-II</strong> (Governance, Constitution,
                  Polity, Social Justice, International Relations)
                </td>
                <td>250</td>
                <td>3 Hours</td>
                <td>
                  <strong>Merit Paper</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="paper-badge">Paper-IV</span>
                </td>
                <td>
                  <strong>General Studies-III</strong> (Technology, Economic
                  Development, Bio-diversity, Security, Disaster Management)
                </td>
                <td>250</td>
                <td>3 Hours</td>
                <td>
                  <strong>Merit Paper</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="paper-badge">Paper-V</span>
                </td>
                <td>
                  <strong>General Studies-IV</strong> (Ethics, Integrity,
                  Aptitude)
                </td>
                <td>250</td>
                <td>3 Hours</td>
                <td>
                  <strong>Merit Paper</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="paper-badge">Paper-VI</span>
                </td>
                <td>
                  <strong>Optional Subject</strong> - Paper 1
                </td>
                <td>250</td>
                <td>3 Hours</td>
                <td>
                  <strong>Merit Paper</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="paper-badge">Paper-VII</span>
                </td>
                <td>
                  <strong>Optional Subject</strong> - Paper 2
                </td>
                <td>250</td>
                <td>3 Hours</td>
                <td>
                  <strong>Merit Paper</strong>
                </td>
              </tr>
              <tr style={{ background: "#e8f5e9" }}>
                <td colspan="2">
                  <strong>TOTAL (Merit Papers Only)</strong>
                </td>
                <td>
                  <strong>1750</strong>
                </td>
                <td>
                  <strong>21 Hours</strong>
                </td>
                <td>
                  <strong>Final Ranking</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="alert-box alert-success">
          <strong>✅ Important Note on Qualifying Papers</strong>
          Paper-A (Indian Language) and Paper-B (English) are qualifying in
          nature. You need to score at least 25% (75 marks out of 300) in each.
          These marks are NOT counted for merit ranking. Only the 7 merit papers
          (1750 marks) count towards final selection.
        </div>

        <h3>Detailed Syllabus Breakdown</h3>

        <h4>📝 Paper-I: Essay (250 Marks)</h4>
        <div class="info-card">
          <p>
            <strong>Format:</strong> Candidates may be required to write essays
            on multiple topics from a given list. Topics cover diverse areas
            including current affairs, social issues, economic matters,
            political scenarios, international relations, environmental
            concerns, science & technology, and philosophical themes.
          </p>
          <p>
            <strong>Key Skills Tested:</strong> Originality, coherent structure,
            logical flow, clarity of thought, balanced perspective, depth of
            knowledge, and quality of expression.
          </p>
          <p>
            <strong>Word Limit:</strong> Usually 1000-1200 words per essay (3-4
            essays in 3 hours)
          </p>
        </div>

        <h4>🏛️ Paper-II: General Studies-I (250 Marks)</h4>
        <div class="info-grid">
          <div class="info-card">
            <h4>Indian Heritage & Culture</h4>
            <p>
              Ancient to modern times, Art forms, Literature, Architecture,
              Philosophy
            </p>
          </div>
          <div class="info-card">
            <h4>Modern Indian History</h4>
            <p>
              From mid-18th century, Freedom struggle, Post-independence
              consolidation
            </p>
          </div>
          <div class="info-card">
            <h4>Indian Society</h4>
            <p>
              Salient features, Diversity, Social issues, Women's issues,
              Migration
            </p>
          </div>
          <div class="info-card">
            <h4>World Geography</h4>
            <p>
              Physical features, Resource distribution, Industries, Urbanization
              patterns
            </p>
          </div>
        </div>

        <h4>⚖️ Paper-III: General Studies-II (250 Marks)</h4>
        <div class="info-grid">
          <div class="info-card">
            <h4>Indian Constitution</h4>
            <p>
              Evolution, features, amendments, significant provisions, basic
              structure
            </p>
          </div>
          <div class="info-card">
            <h4>Governance & Institutions</h4>
            <p>
              Functions and responsibilities of Union & States, federal
              structure, decentralization
            </p>
          </div>
          <div class="info-card">
            <h4>Social Justice</h4>
            <p>
              Mechanisms, laws, institutions for vulnerable sections, welfare
              schemes
            </p>
          </div>
          <div class="info-card">
            <h4>International Relations</h4>
            <p>
              India's relations with neighbors, bilateral & multilateral
              groupings, global issues
            </p>
          </div>
        </div>

        <h4>💡 Paper-IV: General Studies-III (250 Marks)</h4>
        <div class="info-grid">
          <div class="info-card">
            <h4>Economic Development</h4>
            <p>
              Indian Economy, Planning, Mobilization of resources, Growth &
              Development
            </p>
          </div>
          <div class="info-card">
            <h4>Science & Technology</h4>
            <p>
              Developments and applications, effects in everyday life, IT,
              Computers, Robotics, Space, Biotechnology
            </p>
          </div>
          <div class="info-card">
            <h4>Environment & Bio-diversity</h4>
            <p>
              Conservation, Environmental pollution, Climate change, Disaster
              management
            </p>
          </div>
          <div class="info-card">
            <h4>Internal Security</h4>
            <p>
              Linkages between development and extremism, External state
              threats, Cyber security
            </p>
          </div>
        </div>

        <h4>🎯 Paper-V: General Studies-IV (250 Marks) - Ethics</h4>
        <div class="info-grid">
          <div class="info-card">
            <h4>Ethics & Morality</h4>
            <p>
              Concepts, determinants, consequences, dimensions of ethics,
              private and public relationships
            </p>
          </div>
          <div class="info-card">
            <h4>Attitude</h4>
            <p>
              Content, structure, function, influence on thought and behavior,
              moral and political attitudes
            </p>
          </div>
          <div class="info-card">
            <h4>Aptitude & Values</h4>
            <p>
              Integrity, Probity in governance, Emotional intelligence, Case
              studies on ethical dilemmas
            </p>
          </div>
          <div class="info-card">
            <h4>Public Service Values</h4>
            <p>
              Transparency, accountability, dedication to public service,
              tolerance, compassion
            </p>
          </div>
        </div>

        <h4>📚 Optional Subject (Papers VI & VII) - 500 Marks</h4>
        <p>
          Candidates must choose ONE optional subject from the list of 48
          subjects offered by UPSC:
        </p>

        <div class="alert-box alert-info">
          <strong>Popular Optional Subjects (with typical choices):</strong>
          <ul>
            <li>
              <strong>Humanities:</strong> History, Geography, Public
              Administration, Sociology, Psychology, Philosophy, Anthropology
            </li>
            <li>
              <strong>Sciences:</strong> Mathematics, Physics, Chemistry,
              Botany, Zoology, Geology, Statistics, Medical Science
            </li>
            <li>
              <strong>Engineering:</strong> Civil Engineering, Mechanical
              Engineering, Electrical Engineering, Chemical Engineering
            </li>
            <li>
              <strong>Commerce:</strong> Commerce & Accountancy, Management,
              Economics
            </li>
            <li>
              <strong>Languages:</strong> Literature of 20+ Indian and foreign
              languages
            </li>
            <li>
              <strong>Others:</strong> Law, Agriculture, Animal Husbandry,
              Forestry
            </li>
          </ul>
        </div>

        <h3>Mains Examination Key Features</h3>
        <div class="highlight-box">
          <h3>Critical Success Factors</h3>
          <ul>
            <li>
              <strong>Writing Skills:</strong> 175 marks worth of answers per
              day - speed and clarity are crucial
            </li>
            <li>
              <strong>Answer Presentation:</strong> Structure, headings,
              diagrams, flowcharts enhance scoring
            </li>
            <li>
              <strong>No Negative Marking:</strong> Attempt all questions; even
              partial answers fetch marks
            </li>
            <li>
              <strong>Word Limits:</strong> Strict adherence to word limits
              (10/15/20/25 markers) is essential
            </li>
            <li>
              <strong>Current Affairs Integration:</strong> Link static
              knowledge with contemporary examples
            </li>
            <li>
              <strong>Optional Subject Choice:</strong> Should align with
              interest, background, and scoring potential
            </li>
            <li>
              <strong>Five Consecutive Days:</strong> Requires high stamina and
              consistent performance
            </li>
          </ul>
        </div>

        <div class="alert-box alert-warning">
          <strong>⏰ Time Management Challenge</strong>
          You need to write 40-50 pages per paper (3 hours) with proper
          structure, examples, and analysis. This requires extensive practice
          through mock tests and answer writing practice. Most successful
          candidates write 10-15 full-length test series before the actual exam.
        </div>
      </div>

      <div id="interview" class="section">
        <h2>What is Personality Test? (Interview)</h2>
        <p>
          The <strong>Personality Test</strong>, commonly called the{" "}
          <strong>Interview</strong>, is the final stage of the UPSC Civil
          Services Examination. It carries <strong>275 marks</strong> and is
          conducted by a Board of competent and unbiased observers to assess the
          personal suitability of candidates for a career in public service.
        </p>

        <h3>Interview Structure</h3>
        <div class="info-grid">
          <div class="info-card">
            <h4>⏱️ Duration</h4>
            <p>
              Typically 30-45 minutes per candidate, though it can vary from 20
              minutes to over an hour
            </p>
          </div>
          <div class="info-card">
            <h4>👥 Board Composition</h4>
            <p>
              4-5 members including a Chairman (typically retired civil
              servants, academicians, or experts)
            </p>
          </div>
          <div class="info-card">
            <h4>📊 Marks Distribution</h4>
            <p>
              275 marks total, contributing ~13.5% to final merit (out of 2025
              total marks)
            </p>
          </div>
          <div class="info-card">
            <h4>📍 Location</h4>
            <p>Dholpur House, New Delhi - UPSC Headquarters</p>
          </div>
        </div>

        <h3>What is Assessed in the Interview?</h3>
        <p>
          The interview is NOT a knowledge test but a{" "}
          <strong>personality assessment</strong>. The Board evaluates:
        </p>

        <div class="info-grid">
          <div class="info-card">
            <h4>🎯 Mental Alertness</h4>
            <p>
              Presence of mind, quick thinking, ability to grasp questions, and
              respond appropriately under pressure
            </p>
          </div>
          <div class="info-card">
            <h4>🧠 Critical Powers of Assimilation</h4>
            <p>
              Ability to understand complex issues, synthesize information, and
              form balanced opinions
            </p>
          </div>
          <div class="info-card">
            <h4>💡 Clear & Logical Expression</h4>
            <p>
              Communication skills, clarity of thought, ability to articulate
              views coherently and convincingly
            </p>
          </div>
          <div class="info-card">
            <h4>🔍 Balance of Judgment</h4>
            <p>
              Objectivity, ability to see multiple perspectives, avoiding
              extreme views, mature thinking
            </p>
          </div>
          <div class="info-card">
            <h4>🌟 Variety & Depth of Interest</h4>
            <p>
              Awareness beyond academics, hobbies, cultural interests, social
              engagement, well-rounded personality
            </p>
          </div>
          <div class="info-card">
            <h4>🤝 Social Cohesion & Leadership</h4>
            <p>
              Team spirit, empathy, conflict resolution ability, leadership
              qualities, ethical conduct
            </p>
          </div>
          <div class="info-card">
            <h4>💪 Intellectual & Moral Integrity</h4>
            <p>
              Honesty, consistency in views, ethical grounding, value system,
              commitment to public service
            </p>
          </div>
          <div class="info-card">
            <h4>🎓 Academic Background</h4>
            <p>
              Understanding of chosen subjects, ability to apply knowledge to
              real-world problems
            </p>
          </div>
        </div>

        <h3>Types of Questions Asked</h3>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Question Category</th>
                <th>Examples</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>DAF-based</strong> (Detailed Application Form)
                </td>
                <td>
                  Questions on hometown, education, work experience, hobbies
                  mentioned in DAF
                </td>
                <td>Test honesty, depth of interests, consistency</td>
              </tr>
              <tr>
                <td>
                  <strong>Optional Subject</strong>
                </td>
                <td>Basic to advanced questions from your optional subject</td>
                <td>Test subject expertise and depth of preparation</td>
              </tr>
              <tr>
                <td>
                  <strong>Current Affairs</strong>
                </td>
                <td>
                  Recent national/international events, government policies,
                  judgments
                </td>
                <td>Test awareness and ability to form opinions</td>
              </tr>
              <tr>
                <td>
                  <strong>Abstract/Opinion-based</strong>
                </td>
                <td>
                  "What is success?", "Is democracy the best system?", Ethical
                  dilemmas
                </td>
                <td>Test critical thinking and value system</td>
              </tr>
              <tr>
                <td>
                  <strong>Problem-solving</strong>
                </td>
                <td>
                  How would you handle a specific administrative situation?
                </td>
                <td>Test practical wisdom and decision-making</td>
              </tr>
              <tr>
                <td>
                  <strong>Stress/Counter Questions</strong>
                </td>
                <td>
                  Challenging your previous answers, hypothetical scenarios
                </td>
                <td>Test composure, consistency, mental resilience</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Interview Assessment Criteria (UPSC Guidelines)</h3>
        <div class="highlight-box">
          <h3>Official UPSC Statement on Interview</h3>
          <p>
            <em>
              "The test is intended to judge the mental caliber of a candidate.
              In broad terms this is really an assessment of not only his
              intellectual qualities but also social traits and his interest in
              current affairs. Some of the qualities to be judged are mental
              alertness, critical powers of assimilation, clear and logical
              exposition, balance of judgment, variety and depth of interest,
              ability for social cohesion and leadership, intellectual and moral
              integrity."
            </em>
          </p>
        </div>

        <h3>Scoring Pattern & Impact</h3>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Score Range</th>
                <th>Typical Marks</th>
                <th>Impact on Final Rank</th>
                <th>Interpretation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Excellent</strong>
                </td>
                <td>200-275</td>
                <td>Can improve rank by 50-100 positions</td>
                <td>Outstanding personality, rare</td>
              </tr>
              <tr>
                <td>
                  <strong>Very Good</strong>
                </td>
                <td>180-200</td>
                <td>Can improve rank by 20-40 positions</td>
                <td>Strong performance</td>
              </tr>
              <tr>
                <td>
                  <strong>Good/Average</strong>
                </td>
                <td>140-180</td>
                <td>Neutral impact on rank</td>
                <td>Most candidates fall here</td>
              </tr>
              <tr>
                <td>
                  <strong>Below Average</strong>
                </td>
                <td>100-140</td>
                <td>Can drop rank by 20-40 positions</td>
                <td>Weak performance</td>
              </tr>
              <tr>
                <td>
                  <strong>Poor</strong>
                </td>
                <td>&lt;100</td>
                <td>Can drop rank by 50+ positions</td>
                <td>Very rare, significant issues</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="alert-box alert-success">
          <strong>✅ Good News for Candidates</strong>
          The interview can significantly boost your rank! Candidates with
          average Mains scores have secured top ranks with excellent interview
          performance. Average interview marks are around 155-165, so scoring
          180+ can be a game-changer.
        </div>

        <h3>Key Success Strategies</h3>
        <div class="info-grid">
          <div class="info-card">
            <h4>📋 Know Your DAF Inside Out</h4>
            <p>
              Every detail you filled in DAF can be questioned - hobbies,
              hometown, education, work experience
            </p>
          </div>
          <div class="info-card">
            <h4>🗣️ Practice Mock Interviews</h4>
            <p>
              Attend 10-15 mock interviews to get comfortable with the format
              and build confidence
            </p>
          </div>
          <div class="info-card">
            <h4>🎭 Be Authentic</h4>
            <p>
              Board can detect pretense - be genuine, honest, and yourself.
              Admit when you don't know
            </p>
          </div>
          <div class="info-card">
            <h4>⚖️ Have Balanced Views</h4>
            <p>
              Avoid extreme opinions, show ability to see multiple perspectives,
              acknowledge complexities
            </p>
          </div>
          <div class="info-card">
            <h4>📰 Stay Updated</h4>
            <p>
              Follow news till the last day, especially major national events
              and government initiatives
            </p>
          </div>
          <div class="info-card">
            <h4>😌 Stay Calm & Composed</h4>
            <p>
              Take a pause before answering, don't rush, maintain eye contact,
              sit with good posture
            </p>
          </div>
        </div>

        <div class="alert-box alert-warning">
          <strong>⚠️ Common Mistakes to Avoid</strong>
          <ul>
            <li>❌ Appearing arrogant or over-confident</li>
            <li>❌ Getting defensive when challenged</li>
            <li>❌ Giving vague, generic answers without substance</li>
            <li>❌ Pretending to know what you don't</li>
            <li>❌ Being completely unaware of major current events</li>
            <li>❌ Showing lack of interest in public service</li>
            <li>❌ Poor body language (fidgeting, avoiding eye contact)</li>
          </ul>
        </div>
      </div>

      <div id="services" class="section">
        <h2>Career Services (24 Services)</h2>
        <p>
          The UPSC Civil Services Examination offers entry to{" "}
          <strong>24 different All India Services and Central Services</strong>.
          Each service has its unique role, responsibilities, and career
          progression. Your final rank determines which service you can choose.
        </p>

        <div class="alert-box alert-info">
          <strong>📋 Service Allocation Process</strong>
          Services are allocated based on your final rank (Mains + Interview
          marks) and preferences filled by you. The top 3 services (IAS, IFS,
          IPS) are the most prestigious and typically go to top rankers.
          However, every service offers excellent career opportunities and the
          chance to serve the nation.
        </div>

        <h3>Complete List of 24 Services</h3>

        <div class="services-grid">
          <div class="service-card prestigious">
            <div class="service-number">1</div>
            <h4>Indian Administrative Service (IAS)</h4>
            <p>
              <strong>Role:</strong> District administration, policy
              formulation, implementation of government programs
            </p>
            <p>
              <strong>Prestige:</strong> Highest - District Collector, Secretary
              to Government
            </p>
            <span class="service-tag">MOST PRESTIGIOUS</span>
          </div>

          <div class="service-card prestigious">
            <div class="service-number">2</div>
            <h4>Indian Foreign Service (IFS)</h4>
            <p>
              <strong>Role:</strong> Diplomacy, representing India in foreign
              countries, international negotiations
            </p>
            <p>
              <strong>Prestige:</strong> Highest - Ambassadors, High
              Commissioners
            </p>
            <span class="service-tag">MOST PRESTIGIOUS</span>
          </div>

          <div class="service-card prestigious">
            <div class="service-number">3</div>
            <h4>Indian Police Service (IPS)</h4>
            <p>
              <strong>Role:</strong> Law and order, crime investigation,
              internal security
            </p>
            <p>
              <strong>Prestige:</strong> Highest - SP, DGP, CBI, Intelligence
              agencies
            </p>
            <span class="service-tag">MOST PRESTIGIOUS</span>
          </div>

          <div class="service-card">
            <div class="service-number">4</div>
            <h4>Indian Revenue Service (IRS-IT)</h4>
            <p>
              <strong>Role:</strong> Income Tax administration, tax collection,
              financial investigations
            </p>
            <p>
              <strong>Department:</strong> Income Tax Department
            </p>
            <span class="service-tag">CENTRAL SERVICE</span>
          </div>

          <div class="service-card">
            <div class="service-number">5</div>
            <h4>Indian Revenue Service (IRS-C&CE)</h4>
            <p>
              <strong>Role:</strong> Customs, Central Excise, GST, preventing
              smuggling
            </p>
            <p>
              <strong>Department:</strong> Central Board of Indirect Taxes
            </p>
            <span class="service-tag">CENTRAL SERVICE</span>
          </div>

          <div class="service-card">
            <div class="service-number">6</div>
            <h4>Indian Audit & Accounts Service (IA&AS)</h4>
            <p>
              <strong>Role:</strong> Auditing government accounts, financial
              accountability
            </p>
            <p>
              <strong>Department:</strong> CAG Office
            </p>
            <span class="service-tag">CENTRAL SERVICE</span>
          </div>

          <div class="service-card">
            <div class="service-number">7</div>
            <h4>Indian Defence Accounts Service (IDAS)</h4>
            <p>
              <strong>Role:</strong> Financial management of defence expenditure
            </p>
            <p>
              <strong>Department:</strong> Ministry of Defence
            </p>
            <span class="service-tag">CENTRAL SERVICE</span>
          </div>

          <div class="service-card">
            <div class="service-number">8</div>
            <h4>Indian Civil Accounts Service (ICAS)</h4>
            <p>
              <strong>Role:</strong> Accounts and financial management of civil
              ministries
            </p>
            <p>
              <strong>Department:</strong> Controller General of Accounts
            </p>
            <span class="service-tag">CENTRAL SERVICE</span>
          </div>

          <div class="service-card">
            <div class="service-number">9</div>
            <h4>Indian Railway Traffic Service (IRTS)</h4>
            <p>
              <strong>Role:</strong> Commercial operations, passenger services,
              freight management
            </p>
            <p>
              <strong>Department:</strong> Ministry of Railways
            </p>
            <span class="service-tag">CENTRAL SERVICE</span>
          </div>

          <div class="service-card">
            <div class="service-number">10</div>
            <h4>Indian Railway Personnel Service (IRPS)</h4>
            <p>
              <strong>Role:</strong> Human resource management in Railways
            </p>
            <p>
              <strong>Department:</strong> Ministry of Railways
            </p>
            <span class="service-tag">CENTRAL SERVICE</span>
          </div>

          <div class="service-card">
            <div class="service-number">11</div>
            <h4>Indian Railway Accounts Service (IRAS)</h4>
            <p>
              <strong>Role:</strong> Financial management, budgeting for
              Railways
            </p>
            <p>
              <strong>Department:</strong> Ministry of Railways
            </p>
            <span class="service-tag">CENTRAL SERVICE</span>
          </div>

          <div class="service-card">
            <div class="service-number">12</div>
            <h4>Indian Defence Estate Service (IDES)</h4>
            <p>
              <strong>Role:</strong> Management of defence land and estates
            </p>
            <p>
              <strong>Department:</strong> Ministry of Defence
            </p>
            <span class="service-tag">CENTRAL SERVICE</span>
          </div>

          <div class="service-card">
            <div class="service-number">13</div>
            <h4>Indian Information Service (IIS)</h4>
            <p>
              <strong>Role:</strong> Information dissemination, media
              management, public communication
            </p>
            <p>
              <strong>Department:</strong> Ministry of Information &
              Broadcasting
            </p>
            <span class="service-tag">CENTRAL SERVICE</span>
          </div>

          <div class="service-card">
            <div class="service-number">14</div>
            <h4>Indian Trade Service (ITS)</h4>
            <p>
              <strong>Role:</strong> International trade negotiations, export
              promotion
            </p>
            <p>
              <strong>Department:</strong> Ministry of Commerce
            </p>
            <span class="service-tag">CENTRAL SERVICE</span>
          </div>

          <div class="service-card">
            <div class="service-number">15</div>
            <h4>Indian Corporate Law Service (ICLS)</h4>
            <p>
              <strong>Role:</strong> Corporate affairs, company law enforcement
            </p>
            <p>
              <strong>Department:</strong> Ministry of Corporate Affairs
            </p>
            <span class="service-tag">CENTRAL SERVICE</span>
          </div>

          <div class="service-card">
            <div class="service-number">16</div>
            <h4>Indian Postal Service (IPoS)</h4>
            <p>
              <strong>Role:</strong> Postal operations, financial services
              through post offices
            </p>
            <p>
              <strong>Department:</strong> Department of Posts
            </p>
            <span class="service-tag">CENTRAL SERVICE</span>
          </div>

          <div class="service-card">
            <div class="service-number">17</div>
            <h4>Indian Ordnance Factories Service (IOFS)</h4>
            <p>
              <strong>Role:</strong> Management of ordnance factories, defence
              production
            </p>
            <p>
              <strong>Department:</strong> Ministry of Defence Production
            </p>
            <span class="service-tag">CENTRAL SERVICE</span>
          </div>

          <div class="service-card">
            <div class="service-number">18</div>
            <h4>Indian Communication Finance Service (ICFS)</h4>
            <p>
              <strong>Role:</strong> Financial management in telecom and IT
              sector
            </p>
            <p>
              <strong>Department:</strong> Ministry of Communications
            </p>
            <span class="service-tag">CENTRAL SERVICE</span>
          </div>

          <div class="service-card">
            <div class="service-number">19</div>
            <h4>Armed Forces Headquarters Civil Service (AFHCS)</h4>
            <p>
              <strong>Role:</strong> Civilian administration in military
              headquarters
            </p>
            <p>
              <strong>Department:</strong> Ministry of Defence
            </p>
            <span class="service-tag">CENTRAL SERVICE</span>
          </div>

          <div class="service-card">
            <div class="service-number">20</div>
            <h4>Railway Protection Force (RPF)</h4>
            <p>
              <strong>Role:</strong> Security of railway assets, passenger
              safety
            </p>
            <p>
              <strong>Department:</strong> Ministry of Railways
            </p>
            <span class="service-tag">CENTRAL SERVICE</span>
          </div>

          <div class="service-card">
            <div class="service-number">21</div>
            <h4>Indian Railway Engineering Service (IRSE)</h4>
            <p>
              <strong>Role:</strong> Railway infrastructure, track maintenance,
              engineering
            </p>
            <p>
              <strong>Department:</strong> Ministry of Railways
            </p>
            <span class="service-tag">CENTRAL SERVICE</span>
          </div>

          <div class="service-card">
            <div class="service-number">22</div>
            <h4>Indian Railway Electrical Service (IRES)</h4>
            <p>
              <strong>Role:</strong> Electrical systems, electrification
              projects
            </p>
            <p>
              <strong>Department:</strong> Ministry of Railways
            </p>
            <span class="service-tag">CENTRAL SERVICE</span>
          </div>

          <div class="service-card">
            <div class="service-number">23</div>
            <h4>Indian Railway Mechanical Service (IRMS)</h4>
            <p>
              <strong>Role:</strong> Rolling stock maintenance, locomotive
              operations
            </p>
            <p>
              <strong>Department:</strong> Ministry of Railways
            </p>
            <span class="service-tag">CENTRAL SERVICE</span>
          </div>

          <div class="service-card">
            <div class="service-number">24</div>
            <h4>Indian Railway Signal Service (IRSS)</h4>
            <p>
              <strong>Role:</strong> Signaling systems, train control, safety
              systems
            </p>
            <p>
              <strong>Department:</strong> Ministry of Railways
            </p>
            <span class="service-tag">CENTRAL SERVICE</span>
          </div>
        </div>

        <div class="highlight-box">
          <h3>Service Selection Factors</h3>
          <ul>
            <li>
              <strong>Rank:</strong> Your final merit rank is the primary
              determinant
            </li>
            <li>
              <strong>Preference:</strong> You submit a preference list;
              services allocated as per rank and availability
            </li>
            <li>
              <strong>Cadre:</strong> For IAS/IPS/IFS, you get a cadre (state)
              based on your rank
            </li>
            <li>
              <strong>Reservation:</strong> Reserved category candidates may get
              services based on reserved vacancies
            </li>
            <li>
              <strong>Physical Standards:</strong> IPS requires specific height
              and physical standards
            </li>
            <li>
              <strong>Technical Services:</strong> Some services (IRSE, IRES,
              IRMS, IRSS) require engineering background
            </li>
          </ul>
        </div>

        <div class="alert-box alert-success">
          <strong>💼 Career Prospects</strong>
          All services offer excellent career progression, job security,
          respectable salaries (7th Pay Commission), and pension benefits. While
          IAS/IPS/IFS are most sought after, many officers have had fulfilling
          careers in other services like IRS (both), IA&AS, and railway
          services.
        </div>
      </div>

      <div id="eligibility" class="section">
        <h2>Eligibility Criteria</h2>
        <p>
          Before applying for UPSC CSE, candidates must ensure they meet all
          eligibility requirements regarding{" "}
          <strong>
            age, educational qualification, nationality, number of attempts,
          </strong>{" "}
          and other conditions.
        </p>

        <h3>1. Age Limit (as on 1st August of exam year)</h3>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Minimum Age</th>
                <th>Maximum Age</th>
                <th>Age Relaxation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>General Category</strong>
                </td>
                <td>21 years</td>
                <td>32 years</td>
                <td>No relaxation</td>
              </tr>
              <tr>
                <td>
                  <strong>OBC (Non-Creamy Layer)</strong>
                </td>
                <td>21 years</td>
                <td>35 years</td>
                <td>+3 years</td>
              </tr>
              <tr>
                <td>
                  <strong>SC/ST</strong>
                </td>
                <td>21 years</td>
                <td>37 years</td>
                <td>+5 years</td>
              </tr>
              <tr>
                <td>
                  <strong>EWS (Economically Weaker Section)</strong>
                </td>
                <td>21 years</td>
                <td>32 years</td>
                <td>No relaxation</td>
              </tr>
              <tr>
                <td>
                  <strong>PwBD (Persons with Benchmark Disability)</strong>
                </td>
                <td>21 years</td>
                <td>42 years (General)</td>
                <td>
                  +10 years (General)
                  <br />
                  +13 years (OBC)
                  <br />
                  +15 years (SC/ST)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Ex-Servicemen</strong>
                </td>
                <td>21 years</td>
                <td>37 years (General)</td>
                <td>Military service + 3 years (subject to max 5 years)</td>
              </tr>
              <tr>
                <td>
                  <strong>Jammu & Kashmir Domicile (1980-1989)</strong>
                </td>
                <td>21 years</td>
                <td>37 years (General)</td>
                <td>+5 years (cumulative with category)</td>
              </tr>
              <tr>
                <td>
                  <strong>Defence Personnel (Certain operations)</strong>
                </td>
                <td>21 years</td>
                <td>35 years (General)</td>
                <td>+3 years (for specified operations)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="alert-box alert-warning">
          <strong>⚠️ Important Age Notes</strong>
          <ul>
            <li>
              Age is calculated as on{" "}
              <strong>1st August of the examination year</strong>
            </li>
            <li>
              For OBC candidates, the Non-Creamy Layer (NCL) certificate must be
              valid (issued in the financial year)
            </li>
            <li>
              Age relaxations are cumulative for PwBD candidates (e.g., SC+PwBD
              gets 5+10=15 years)
            </li>
            <li>
              Upper age limit is relaxable for Government servants up to 5 years
              (in accordance with their category)
            </li>
          </ul>
        </div>

        <h3>2. Educational Qualification</h3>
        <div class="info-card">
          <h4>🎓 Minimum Requirement</h4>
          <p>
            <strong>Bachelor's Degree</strong> in any discipline from a
            University incorporated by an Act of the Central or State
            Legislature or an equivalent qualification recognized by the
            Government of India.
          </p>
        </div>

        <div class="info-grid">
          <div class="info-card">
            <h4>✅ Eligible Degrees</h4>
            <p>
              All degrees: B.A., B.Sc., B.Com., B.Tech., MBBS, BDS, B.Pharma,
              B.E., BBA, BCA, etc. from UGC-recognized universities
            </p>
          </div>
          <div class="info-card">
            <h4>📚 Final Year Students</h4>
            <p>
              Candidates appearing in final year/semester can also apply. Degree
              must be completed by the time of interview
            </p>
          </div>
          <div class="info-card">
            <h4>🌍 Foreign Degrees</h4>
            <p>
              Degrees from foreign universities must be recognized as equivalent
              by the Association of Indian Universities (AIU)
            </p>
          </div>
          <div class="info-card">
            <h4>📖 Professional Qualifications</h4>
            <p>
              Professional qualifications like CA, ICWA, CS are also eligible if
              recognized as equivalent to degree
            </p>
          </div>
        </div>

        <div class="alert-box alert-info">
          <strong>📋 Technical Service Requirements</strong>
          For certain services like Indian Railway Services (IRSE, IRES, IRMS,
          IRSS) and IOFS, candidates must have an{" "}
          <strong>Engineering Degree</strong> in the relevant discipline. These
          requirements are mentioned in the detailed notification.
        </div>

        <h3>3. Number of Attempts</h3>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Maximum Attempts</th>
                <th>Age Limit</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>General Category</strong>
                </td>
                <td>6 attempts</td>
                <td>Up to 32 years</td>
                <td>No extension beyond 6 attempts</td>
              </tr>
              <tr>
                <td>
                  <strong>EWS (Economically Weaker Section)</strong>
                </td>
                <td>6 attempts</td>
                <td>Up to 32 years</td>
                <td>Same as General category</td>
              </tr>
              <tr>
                <td>
                  <strong>OBC (Non-Creamy Layer)</strong>
                </td>
                <td>9 attempts</td>
                <td>Up to 35 years</td>
                <td>Extra attempts + age relaxation</td>
              </tr>
              <tr>
                <td>
                  <strong>SC/ST</strong>
                </td>
                <td>Unlimited attempts</td>
                <td>Up to 37 years</td>
                <td>Can attempt till age limit</td>
              </tr>
              <tr>
                <td>
                  <strong>PwBD (General)</strong>
                </td>
                <td>9 attempts</td>
                <td>Up to 42 years</td>
                <td>Extra attempts due to age relaxation</td>
              </tr>
              <tr>
                <td>
                  <strong>PwBD + OBC</strong>
                </td>
                <td>Unlimited attempts</td>
                <td>Up to 45 years</td>
                <td>Combined benefit</td>
              </tr>
              <tr>
                <td>
                  <strong>PwBD + SC/ST</strong>
                </td>
                <td>Unlimited attempts</td>
                <td>Up to 47 years</td>
                <td>Combined benefit</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="alert-box alert-warning">
          <strong>⚠️ Attempt Counting Rules</strong>
          <ul>
            <li>
              An "attempt" is counted when you{" "}
              <strong>appear for Prelims</strong> (not just application)
            </li>
            <li>
              If you don't appear on exam day, it's NOT counted as an attempt
            </li>
            <li>
              For candidates who appeared before age relaxation rules, the
              number of attempts is calculated from the year of first appearance
            </li>
            <li>
              Change of category (e.g., Creamy Layer to NCL) affects future
              attempts, not past ones
            </li>
          </ul>
        </div>

        <h3>4. Examination Fee</h3>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Fee Amount</th>
                <th>Mode of Payment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>General / OBC / EWS - Male Candidates</strong>
                </td>
                <td>₹100</td>
                <td>
                  Online (Net Banking/Debit Card/Credit Card/UPI) or SBI Challan
                </td>
              </tr>
              <tr>
                <td>
                  <strong>All Women Candidates</strong>
                </td>
                <td>NIL (Exempted)</td>
                <td>No fee required</td>
              </tr>
              <tr>
                <td>
                  <strong>SC / ST Candidates</strong>
                </td>
                <td>NIL (Exempted)</td>
                <td>No fee required</td>
              </tr>
              <tr>
                <td>
                  <strong>PwBD Candidates</strong>
                </td>
                <td>NIL (Exempted)</td>
                <td>No fee required</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="alert-box alert-info">
          <strong>💡 Fee Refund Policy</strong>
          Candidates who appear for Prelims but fail to qualify will be refunded
          the fee after deduction of bank charges (₹25 typically). However, fees
          are non-refundable for candidates who don't appear or get
          disqualified.
        </div>

        <h3>5. Reservation Policy</h3>
        <p>
          The Government of India provides reservation for various categories in
          UPSC Civil Services as per constitutional provisions:
        </p>

        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Reservation Percentage</th>
                <th>Age Relaxation</th>
                <th>Attempts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Scheduled Caste (SC)</strong>
                </td>
                <td>15%</td>
                <td>+5 years</td>
                <td>Unlimited (till age limit)</td>
              </tr>
              <tr>
                <td>
                  <strong>Scheduled Tribe (ST)</strong>
                </td>
                <td>7.5%</td>
                <td>+5 years</td>
                <td>Unlimited (till age limit)</td>
              </tr>
              <tr>
                <td>
                  <strong>Other Backward Classes (OBC-NCL)</strong>
                </td>
                <td>27%</td>
                <td>+3 years</td>
                <td>9 attempts</td>
              </tr>
              <tr>
                <td>
                  <strong>Economically Weaker Section (EWS)</strong>
                </td>
                <td>10%</td>
                <td>No relaxation</td>
                <td>6 attempts</td>
              </tr>
              <tr>
                <td>
                  <strong>Persons with Benchmark Disability (PwBD)</strong>
                </td>
                <td>4% (Horizontal)</td>
                <td>+10 years (cumulative with category)</td>
                <td>9 (General) / Unlimited (SC/ST)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Categories of Disabilities Covered (PwBD)</h4>
        <div class="info-grid">
          <div class="info-card">
            <h4>👁️ Blindness & Low Vision</h4>
            <p>
              Blindness, Low Vision - with scribe facility and extra time (20
              minutes per hour)
            </p>
          </div>
          <div class="info-card">
            <h4>👂 Deaf & Hard of Hearing</h4>
            <p>Deaf, Hard of Hearing - specific accommodations in interview</p>
          </div>
          <div class="info-card">
            <h4>🦿 Locomotor Disability</h4>
            <p>
              Cerebral Palsy, Leprosy Cured, Dwarfism, Acid Attack Victims,
              Muscular Dystrophy
            </p>
          </div>
          <div class="info-card">
            <h4>🧠 Other Disabilities</h4>
            <p>
              Autism, Intellectual Disability, Specific Learning Disability,
              Mental Illness (as per RPWD Act 2016)
            </p>
          </div>
        </div>

        <div class="alert-box alert-success">
          <strong>✅ Important Points on Reservation</strong>
          <ul>
            <li>
              <strong>Horizontal Reservation:</strong> PwBD reservation is
              horizontal, meaning it's applied across all vertical categories
              (General, SC, ST, OBC, EWS)
            </li>
            <li>
              <strong>Certificate Validity:</strong> OBC-NCL certificate must be
              issued in the current financial year (after April 1st)
            </li>
            <li>
              <strong>EWS Income Limit:</strong> Annual family income should be
              less than ₹8 lakh for EWS category
            </li>
            <li>
              <strong>Service Allocation:</strong> Reservation percentages apply
              to service allocation; some services have specific requirements
            </li>
            <li>
              <strong>No Reservation in IFS:</strong> There's no reservation in
              promotions/deputation in the Indian Foreign Service
            </li>
          </ul>
        </div>

        <h3>6. Nationality Requirements</h3>
        <div class="info-grid">
          <div class="info-card">
            <h4>🇮🇳 For All Services</h4>
            <p>Must be a citizen of India</p>
          </div>
          <div class="info-card">
            <h4>🌍 For IPS & IFS (Special)</h4>
            <p>
              Must be a citizen of India only (no dual citizenship, PIO, OCI
              allowed even for other services)
            </p>
          </div>
          <div class="info-card">
            <h4>📋 Other Services (Limited)</h4>
            <p>
              Nepalese, Bhutanese, Tibetan refugees (before 1962), Indian origin
              from certain countries can apply for services OTHER than IAS, IFS,
              IPS
            </p>
          </div>
          <div class="info-card">
            <h4>📄 Certificate of Eligibility</h4>
            <p>
              Candidates in categories 3 must obtain Certificate of Eligibility
              from Government of India
            </p>
          </div>
        </div>

        <div class="alert-box alert-warning">
          <strong>⚠️ Physical Standards for IPS</strong>
          For the Indian Police Service, candidates must meet specific physical
          standards:
          <ul>
            <li>
              <strong>Height:</strong> Men - 165 cm (157.5 cm for ST/Scheduled
              Areas); Women - 150 cm (145 cm for ST/Scheduled Areas)
            </li>
            <li>
              <strong>Chest:</strong> Men - 84 cm with 5 cm expansion (Relaxed
              for certain categories)
            </li>
            <li>
              <strong>Vision:</strong> Better eye 6/6 or 6/9, Worse eye 6/12 or
              6/9 (correction allowed with certain limits)
            </li>
            <li>
              <strong>Other:</strong> No knock knees, flat feet, squint eyes, or
              color blindness
            </li>
          </ul>
          These standards are verified during the medical examination after the
          interview.
        </div>

        <h3>7. Other Important Conditions</h3>
        <div class="highlight-box">
          <h3>Additional Eligibility Points</h3>
          <ul>
            <li>
              <strong>Character:</strong> Candidates must be of good character
            </li>
            <li>
              <strong>Criminal Record:</strong> No conviction for moral
              turpitude or criminal offense
            </li>
            <li>
              <strong>Government Service:</strong> If already in government
              service, must have permission to apply (NOC)
            </li>
            <li>
              <strong>Bond/Service Agreement:</strong> Must have completed bond
              period if any
            </li>
            <li>
              <strong>Medical Fitness:</strong> Must be medically fit as per
              standards (verified post-interview)
            </li>
            <li>
              <strong>Multiple Applications:</strong> Can apply for only ONE
              exam in a year (only one application accepted)
            </li>
            <li>
              <strong>Fraud/Misconduct:</strong> Any false information leads to
              disqualification and ban
            </li>
          </ul>
        </div>
      </div>

      <div class="cta-section">
        <h2>Ready to Start Your UPSC Journey?</h2>
        <p>
          Now that you understand the UPSC Civil Services Examination, it's time
          to begin your preparation with dedication and strategy!
        </p>
        <a href="#what-is-upsc" class="cta-button">
          📚 Review This Guide Again
        </a>
      </div>

      <footer style={{ color: "black" }}>
        <h3>Need More Guidance?</h3>
        <p>
          <strong>Official UPSC Website:</strong>{" "}
          <a href="https://www.upsc.gov.in" target="_blank">
            www.upsc.gov.in
          </a>
        </p>
        <p>
          <strong>Helpline:</strong> 011-23385271, 011-23381125 (10:00 AM to
          5:00 PM on working days)
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:upsc-exam@nic.in">upsc-exam@nic.in</a>
        </p>
        <hr
          style={{
            margin: "20px 0",
            border: "none",
            borderTop: "1px solid #ddd",
          }}
        />
        <p
          style={{
            fontSize: "0.9em",
            color: "#888",
          }}
        >
          <strong>Disclaimer:</strong> This guide is for informational purposes
          only. Please refer to the official UPSC notification for the most
          accurate and updated information. Rules and regulations may change;
          always verify with official sources.
        </p>

        <p
          style={{
            marginTop: "15px",
            fontSize: "0.85em",
            color: "#999",
          }}
        >
          © 2025 UPSC Preparation Guide | All Information Compiled from Official
          UPSC Sources
        </p>
      </footer>
    </div>
  );
};

export default UpscNew;
