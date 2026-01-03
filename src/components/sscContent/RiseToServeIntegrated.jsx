import React from "react";
import "./rise.css";
const RiseToServeIntegrated = () => {
  // FAQ Accordion
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement;
      const isActive = faqItem.classList.contains("active");

      // Close all FAQs
      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active");
      });

      // Open clicked FAQ if it wasn't active
      if (!isActive) {
        faqItem.classList.add("active");
      }
    });
  });

  // Scroll to Top Button
  const scrollTopBtn = document.getElementById("scrollTop");

  window?.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  scrollTopBtn?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add animation on scroll
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

  // Observe all cards and sections
  document
    .querySelectorAll(
      ".card, .benefit-card, .testimonial-card, .guarantee-card, .pricing-card"
    )
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.6s ease";
      observer.observe(el);
    });

  return (
    <div>
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>RISE TO SERVE INTEGRATED BATCH</h1>
          <p className="tagline">
            For SSC, Banking, Railways & Other Regulatory Bodies
          </p>
          <p style={{ fontSize: "1.8rem", fontWeight: 600, margin: "2rem 0" }}>
            Your Gateway to Government Services: One Course. Multiple
            Opportunities. Guaranteed Success.
          </p>
          <div className="cta-buttons">
            <a href="#enrollment" className="btn btn-primary">
              <i className="fas fa-rocket"></i> Enroll Now
            </a>
            <a href="#pricing" className="btn btn-secondary">
              <i className="fas fa-info-circle"></i> View Programs
            </a>
          </div>
        </div>
      </section>

      <section id="why-choose" className="why-choose">
        <div className="container">
          <div className="section-header">
            <h2 style={{ color: "white" }}>Why Choose Our Integrated Batch?</h2>
            <p style={{ color: "white" }}>
              Are you preparing for multiple government exams? Tired of
              enrolling in separate coaching programs? JDAX Academy brings you
              the Ultimate Integrated Batch - a comprehensive preparation
              program designed to help you excel in SSC, Banking, and Railway
              exams simultaneously. Our integrated approach saves you time,
              money, and effort while maximizing your chances of success.
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-book"></i>
              </div>
              <h3>Common Syllabus Overlap</h3>
              <p>
                70-80% syllabus overlap across government exams saves time and
                effort
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Similar Exam Pattern</h3>
              <p>
                Computer-based tests with objective questions across all exams
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-sync-alt"></i>
              </div>
              <h3>Complementary Preparation</h3>
              <p>Studying for one exam enhances your preparation for others</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h3>Year-Round Opportunities</h3>
              <p>
                Multiple exams throughout the year = more chances to succeed
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Strategic Time Management</h3>
              <p>
                Expert guidance on preparing for multiple exams simultaneously
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="exams" className="exams-covered">
        <div className="container">
          <div className="section-header">
            <h2 style={{ color: "white" }}>
              Exams Covered Under Integrated Batch
            </h2>
            <p style={{ color: "white" }}>
              Comprehensive coverage of all major government examinations
            </p>
          </div>

          <div className="exam-category">
            <h3>
              <i className="fas fa-file-alt"></i> SSC Examinations
            </h3>
            <ul>
              <li>
                <strong>SSC CGL (Combined Graduate Level)</strong> - For Group B
                & C posts
              </li>
              <li>
                <strong>SSC CHSL (Combined Higher Secondary Level)</strong> -
                For candidates with 10+2 qualifications
              </li>
              <li>
                <strong>SSC MTS (Multi-Tasking Staff)</strong> - For various
                government departments
              </li>
            </ul>
          </div>

          <div className="exam-category">
            <h3>
              <i className="fas fa-university"></i> Banking & Financial
              Institutions
            </h3>
            <ul>
              <li>
                <strong>IBPS PO/Clerk/SO</strong> - For Public Sector Banks &
                Regional Rural Banks
              </li>
              <li>
                <strong>SBI PO/Clerk</strong> - For State Bank of India
                positions
              </li>
              <li>
                <strong>RBI Grade B/Assistant</strong> - For Reserve Bank of
                India
              </li>
              <li>
                <strong>NABARD Grade A/B</strong> - For National Bank for
                Agriculture and Rural Development
              </li>
              <li>
                <strong>IBPS RRB</strong> - For Regional Rural Banks
              </li>
            </ul>
          </div>

          <div className="exam-category">
            <h3>
              <i className="fas fa-train"></i> Railway Recruitment Board (RRB)
            </h3>
            <ul>
              <li>
                <strong>RRB NTPC</strong> - For Non-Technical Popular Categories
              </li>
              <li>
                <strong>RRB Group D</strong> - For Level 1 positions
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="course-highlights">
        <div className="container">
          <div className="section-header">
            <h2 style={{ color: "white" }}>Course Highlights</h2>
            <p style={{ color: "white" }}>
              Everything you need to excel in government examinations
            </p>
          </div>
          <div className="highlights-grid">
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <div style={{ color: "white" }}>
                <h4 style={{ color: "white" }}>
                  400+ Hours of Classroom Training
                </h4>
                <p>Covering all subjects for Tier 1, Tier 2, and Mains exams</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-edit"></i>
              </div>
              <div style={{ color: "white" }}>
                <h4 style={{ color: "white" }}>200+ Hours of Test Practice</h4>
                <p>Real-time online exam simulation</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <div style={{ color: "white" }}>
                <h4 style={{ color: "white" }}>Expert Faculty</h4>
                <p>
                  Including working professionals from SSC and Banking sectors
                </p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-book-reader"></i>
              </div>
              <div style={{ color: "white" }}>
                <h4 style={{ color: "white" }}>Comprehensive Study Material</h4>
                <p>Covering all exams with updated content</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-clipboard-check"></i>
              </div>
              <div style={{ color: "white" }}>
                <h4 style={{ color: "white" }}>Regular Mock Tests</h4>
                <p>With detailed performance analysis</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-user-graduate"></i>
              </div>
              <div style={{ color: "white" }}>
                <h4 style={{ color: "white" }}>Personalized Mentoring</h4>
                <p>Track your progress with dedicated mentors</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-question-circle"></i>
              </div>
              <div style={{ color: "white" }}>
                <h4 style={{ color: "white" }}>Doubt Clearing Sessions</h4>
                <p>Regular sessions to resolve all your queries</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-newspaper"></i>
              </div>
              <div style={{ color: "white" }}>
                <h4 style={{ color: "white" }}>
                  Daily Current Affairs Updates
                </h4>
                <p>Stay updated with latest news and events</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-home"></i>
              </div>
              <div style={{ color: "white" }}>
                <h4 style={{ color: "white" }}>Residential Facility</h4>
                <p>Available for outstation students</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-video"></i>
              </div>
              <div style={{ color: "white" }}>
                <h4 style={{ color: "white" }}>Online Access</h4>
                <p>Recorded lectures and study materials available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="fee-structure">
        <div className="container">
          <div className="section-header">
            <h2 style={{ color: "white" }}>Course Fee Structure</h2>
            <p style={{ color: "white" }}>
              Affordable pricing with maximum value - Choose the program that
              fits your goals
            </p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card featured">
              <div className="pricing-header">
                <h3>Integrated Batch</h3>
                <p className="duration">12 Months Program</p>
                <div className="pricing-price">
                  ₹40,000<span>/-</span>
                </div>
                <p>SSC + Banking + RRB</p>
              </div>
              <div className="pricing-body">
                <ul className="pricing-features">
                  <li>
                    <i className="fas fa-check-circle"></i> All SSC Examinations
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> All Banking
                    Examinations
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> All RRB Examinations
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> 400+ Hours Training
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> 200+ Hours Test
                    Practice
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Complete Study
                    Material
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Expert Faculty
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Personalized
                    Mentoring
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Online & Offline
                    Access
                  </li>
                </ul>
                <a href="#enrollment" className="btn btn-primary">
                  Enroll Now
                </a>
              </div>
            </div>

            <div className="pricing-card">
              <div className="pricing-header">
                <h3>SSC Exams Only</h3>
                <p className="duration">10 Months Program</p>
                <div className="pricing-price">
                  ₹25,000<span>/-</span>
                </div>
                <p>Tier 1 + Tier 2</p>
              </div>
              <div className="pricing-body">
                <ul className="pricing-features">
                  <li>
                    <i className="fas fa-check-circle"></i> SSC CGL Coverage
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> SSC CHSL Coverage
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> SSC MTS Coverage
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Both Tier 1 & Tier 2
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Complete Study
                    Material
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Regular Mock Tests
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Doubt Clearing
                    Sessions
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Online Access
                  </li>
                </ul>
                <a href="#enrollment" className="btn btn-primary">
                  Enroll Now
                </a>
              </div>
            </div>

            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Banking Exams Only</h3>
                <p className="duration">10 Months Program</p>
                <div className="pricing-price">
                  ₹25,000<span>/-</span>
                </div>
                <p>Prelims + Mains</p>
              </div>
              <div className="pricing-body">
                <ul className="pricing-features">
                  <li>
                    <i className="fas fa-check-circle"></i> IBPS PO/Clerk/SO
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> SBI PO/Clerk
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> RBI Grade
                    B/Assistant
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> NABARD Coverage
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Both Prelims & Mains
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Complete Study
                    Material
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Regular Mock Tests
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Online Access
                  </li>
                </ul>
                <a href="#enrollment" className="btn btn-primary">
                  Enroll Now
                </a>
              </div>
            </div>

            <div className="pricing-card">
              <div className="pricing-header">
                <h3>RRB Exams Only</h3>
                <p className="duration">6 Months Program</p>
                <div className="pricing-price">
                  ₹20,000<span>/-</span>
                </div>
                <p>NTPC + Group D</p>
              </div>
              <div className="pricing-body">
                <ul className="pricing-features">
                  <li>
                    <i className="fas fa-check-circle"></i> RRB NTPC Coverage
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> RRB Group D Coverage
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Complete Study
                    Material
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Regular Mock Tests
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Doubt Clearing
                    Sessions
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Online Access
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Current Affairs
                    Updates
                  </li>
                </ul>
                <a href="#enrollment" className="btn btn-primary">
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="guarantees">
        <div className="container">
          <div className="section-header">
            <h2 style={{ color: "white" }}>Our Commitment to Your Success</h2>
            <p style={{ color: "white" }}>
              We stand behind our promise with these guarantees and benefits
            </p>
          </div>
          <div className="guarantee-grid">
            <div className="guarantee-card">
              <div className="guarantee-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="guarantee-content">
                <h3>Money-Back Guarantee</h3>
                <p>
                  If you attend all classes, complete all assignments, and don't
                  qualify in any exam within the course duration, we'll refund
                  your fees (Terms & Conditions Apply)
                </p>
              </div>
            </div>

            <div className="guarantee-card">
              <div className="guarantee-icon">
                <i className="fas fa-redo"></i>
              </div>
              <div className="guarantee-content">
                <h3>Free Repeat Program</h3>
                <p>
                  Didn't clear in first attempt? Join our next batch absolutely
                  free until you succeed
                </p>
              </div>
            </div>

            <div className="guarantee-card">
              <div className="guarantee-icon">
                <i className="fas fa-headset"></i>
              </div>
              <div className="guarantee-content">
                <h3>Lifetime Support</h3>
                <p>
                  Get access to our doubt-clearing sessions and mentorship even
                  after course completion
                </p>
              </div>
            </div>

            <div className="guarantee-card">
              <div className="guarantee-icon">
                <i className="fas fa-book-open"></i>
              </div>
              <div className="guarantee-content">
                <h3>Free Study Material Updates</h3>
                <p>
                  Receive all syllabus updates and new study materials at no
                  additional cost
                </p>
              </div>
            </div>

            <div className="guarantee-card">
              <div className="guarantee-icon">
                <i className="fas fa-user-friends"></i>
              </div>
              <div className="guarantee-content">
                <h3>Small Batch Sizes</h3>
                <p>
                  Maximum 30 students per batch to ensure personalized attention
                  for every student
                </p>
              </div>
            </div>

            <div className="guarantee-card">
              <div className="guarantee-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <div className="guarantee-content">
                <h3>Interview Preparation</h3>
                <p>
                  Free personality development and interview guidance sessions
                  for qualified candidates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="enrollment" className="enrollment-process">
        <div className="container">
          <div className="section-header">
            <h2 style={{ color: "white" }}>Simple Enrollment Process</h2>
            <p style={{ color: "white" }}>Get started in just 5 easy steps</p>
          </div>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-content">
                <h3>Register Your Interest</h3>
                <p>
                  Fill out our online registration form or visit our center.
                  Provide your basic details, educational qualifications, and
                  target exams.
                </p>
              </div>
              <div className="step-number">1</div>
            </div>

            <div className="process-step">
              <div className="step-content">
                <h3>Attend Free Demo Class</h3>
                <p>
                  Experience our teaching methodology firsthand. Interact with
                  faculty, understand course structure, and get a feel of our
                  learning environment.
                </p>
              </div>
              <div className="step-number">2</div>
            </div>

            <div className="process-step">
              <div className="step-content">
                <h3>Counseling Session</h3>
                <p>
                  Meet with our academic counselor to discuss your goals, choose
                  the right program, and create a personalized study plan.
                </p>
              </div>
              <div className="step-number">3</div>
            </div>

            <div className="process-step">
              <div className="step-content">
                <h3>Complete Enrollment</h3>
                <p>
                  Submit required documents, complete fee payment (flexible
                  installment options available), and receive your study kit.
                </p>
              </div>
              <div className="step-number">4</div>
            </div>

            <div className="process-step">
              <div className="step-content">
                <h3>Begin Your Journey</h3>
                <p>
                  Access online portal, attend orientation session, meet your
                  mentor, and start your preparation with confidence!
                </p>
              </div>
              <div className="step-number">5</div>
            </div>
          </div>
        </div>
      </section>

      <section className="faqs">
        <div className="container">
          <div className="section-header">
            <h2 style={{ color: "white" }}>Frequently Asked Questions</h2>
            <p style={{ color: "white" }}>Got questions? We've got answers!</p>
          </div>
          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-question">
                <span>
                  Can I really prepare for multiple exams simultaneously?
                </span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Absolutely! Government exams share 70-80% common syllabus
                  including Quantitative Aptitude, Reasoning, English, and
                  General Awareness. Our Integrated Batch is specifically
                  designed to leverage this overlap. Our expert faculty will
                  guide you on time management and exam-specific strategies to
                  prepare efficiently for multiple exams without getting
                  overwhelmed.
                </div>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>
                  What is the duration of the Integrated Batch program?
                </span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  The Integrated Batch (covering SSC, Banking, and Railways) is
                  a comprehensive 12-month program with 400+ hours of classroom
                  training and 200+ hours of test practice. Individual programs
                  range from 6-10 months depending on the exam category you
                  choose.
                </div>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>
                  Are online classes available for outstation students?
                </span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Yes! All our classes are available in both online and offline
                  modes. You get access to live interactive classes, recorded
                  lectures that you can watch anytime, downloadable study
                  materials, and online mock tests. Additionally, we offer
                  residential facilities for outstation students who prefer
                  classroom learning.
                </div>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>Is there any installment facility for fee payment?</span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Yes, we understand financial constraints and offer flexible
                  installment options. You can pay the course fee in 2-4
                  installments depending on the program chosen. Contact our
                  admission counselor for detailed payment plans and special
                  discounts for early bird registrations.
                </div>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>
                  What if I miss some classes? Will I get recorded lectures?
                </span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Absolutely! Every live className is recorded and made
                  available on your student portal within 24 hours. You can
                  watch these recordings unlimited times throughout your course
                  duration. Additionally, faculty members are available during
                  doubt-clearing sessions to address any concepts you missed.
                </div>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>
                  How many mock tests are provided? Are they similar to actual
                  exams?
                </span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  We conduct 100+ mock tests covering all exam patterns - from
                  subject-wise tests to full-length simulations. Our mock tests
                  are designed by experts who have thoroughly analyzed previous
                  year papers and current exam trends. They replicate the actual
                  computer-based test environment, including question difficulty
                  level, time management challenges, and marking schemes.
                </div>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>
                  What makes JDAX Academy different from other coaching
                  institutes?
                </span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Our unique integrated approach, small batch sizes (max 30
                  students), expert faculty including working professionals from
                  government sectors, personalized mentoring system, and
                  comprehensive study material set us apart. We also offer a
                  Money-Back Guarantee and Free Repeat Program - showing our
                  confidence in our teaching methodology and commitment to
                  student success.
                </div>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>
                  Do you provide study material, or do I need to buy books
                  separately?
                </span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Comprehensive study material covering all subjects and exams
                  is included in your course fee. You'll receive printed books,
                  digital PDFs, practice question banks, previous year papers,
                  and current affairs compilations. All materials are regularly
                  updated to reflect latest exam patterns. No need to purchase
                  additional books!
                </div>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>
                  Can I switch from one program to another during the course?
                </span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Yes, we offer flexibility to upgrade your program. For
                  example, if you enrolled for SSC only and later decide to
                  prepare for Banking exams too, you can upgrade to the
                  Integrated Batch by paying the difference amount. Contact our
                  academic team for smooth transitions between programs.
                </div>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>What is the success rate of your students?</span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  We maintain an impressive 87% success rate, with over 450
                  students securing government positions in the last few years.
                  However, success ultimately depends on your dedication,
                  regular attendance, and consistent practice. Our role is to
                  provide the best guidance, resources, and environment - and we
                  excel at that! Your sincere effort combined with our expert
                  coaching is the winning formula.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="next-steps">
        <div className="container">
          <div className="next-steps-content">
            <h2>Ready to Begin Your Government Service Journey?</h2>
            <p>
              Don't wait for the "right time" - Start now and make your dreams
              come true!
            </p>

            <div className="urgency-banner">
              <i className="fas fa-clock"></i>
              <span>
                Limited Seats Available! New Batch Starting Soon - Register Now
                to Secure Your Spot
              </span>
            </div>

            <div className="cta-buttons">
              <a href="#enrollment" className="btn btn-primary">
                <i className="fas fa-rocket"></i> Enroll in Integrated Batch
              </a>
              <a href="#contact" className="btn btn-secondary">
                <i className="fas fa-calendar-check"></i> Book Free Demo Class
              </a>
            </div>

            <div
              style={{
                marginTop: "3rem",
                padding: "2rem",
                background: "var(--light-bg)",
                borderRadius: "15px",
              }}
            >
              <h3
                style={{ color: "var(--primary-blue)", marginBottom: "1rem" }}
              >
                Your Next Steps:
              </h3>
              <div
                style={{
                  display: "grid",
                  gap: "1rem",
                  textAlign: "left",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                <p
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <span
                    style={{
                      background: "var(--gradient-primary)",
                      color: "white",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                    }}
                  >
                    1
                  </span>
                  <span>
                    Register online or call us to book your free demo className
                  </span>
                </p>
                <p
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <span
                    style={{
                      background: "var(--gradient-primary)",
                      color: "white",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                    }}
                  >
                    2
                  </span>
                  <span>
                    Attend the demo and meet with our academic counselor
                  </span>
                </p>

                <p
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <span
                    style={{
                      background: "var(--gradient-primary)",
                      color: "white",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                    }}
                  >
                    3
                  </span>
                  <span>Choose your program and complete the enrollment</span>
                </p>

                <p
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <span
                    style={{
                      background: "var(--gradient-primary)",
                      color: "white",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                    }}
                  >
                    4
                  </span>
                  <span>
                    Start your journey towards a prestigious government job!
                  </span>
                </p>
              </div>
            </div>

            <p
              style={{
                marginTop: "2rem",
                fontSize: "1.1rem",
                color: "var(--text-dark)",
                fontWeight: 600,
              }}
            >
              Join thousands of successful aspirants who chose JDAX Academy for
              their government exam preparation!
            </p>
          </div>
        </div>
      </section>
      <button className="scroll-top" id="scrollTop">
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default RiseToServeIntegrated;
