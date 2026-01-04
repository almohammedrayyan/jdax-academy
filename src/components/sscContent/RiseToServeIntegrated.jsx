import React, { useState } from "react";
import "./rise.css";
import {
  ShieldCheck,
  RefreshCcw,
  Headphones,
  BookOpen,
  Users,
  Award,
} from "lucide-react";
import { Monitor, CalendarCheck, Clock } from "lucide-react";

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
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "Can I really prepare for multiple exams simultaneously?",
      answer: `Absolutely! Government exams share 70-80% common syllabus including Quantitative Aptitude, Reasoning, English, and General Awareness. Our Integrated Batch is specifically designed to leverage this overlap. Our expert faculty will guide you on time management and exam-specific strategies to prepare efficiently for multiple exams without getting overwhelmed.`,
    },
    {
      question: "What is the duration of the Integrated Batch program?",
      answer: `The Integrated Batch (covering SSC, Banking, and Railways) is a comprehensive 12-month program with 400+ hours of classroom training and 200+ hours of test practice. Individual programs range from 6-10 months depending on the exam category you choose.`,
    },
    {
      question: "Are online classes available for outstation students?",
      answer: `Yes! All our classes are available in both online and offline modes. You get access to live interactive classes, recorded lectures that you can watch anytime, downloadable study materials, and online mock tests. Additionally, we offer residential facilities for outstation students who prefer classroom learning.`,
    },
    {
      question: "Is there any installment facility for fee payment?",
      answer: `Yes, we understand financial constraints and offer flexible installment options. You can pay the course fee in 2-4 installments depending on the program chosen. Contact our admission counselor for detailed payment plans and special discounts for early bird registrations.`,
    },
    {
      question: "What if I miss some classes? Will I get recorded lectures?",
      answer: `Absolutely! Every live class is recorded and made available on your student portal within 24 hours. You can watch these recordings unlimited times throughout your course duration. Additionally, faculty members are available during doubt-clearing sessions to address any concepts you missed.`,
    },
    {
      question:
        "How many mock tests are provided? Are they similar to actual exams?",
      answer: `We conduct 100+ mock tests covering all exam patterns - from subject-wise tests to full-length simulations. Our mock tests are designed by experts who have thoroughly analyzed previous year papers and current exam trends. They replicate the actual computer-based test environment, including question difficulty level, time management challenges, and marking schemes.`,
    },
    {
      question:
        "What makes JDAX Academy different from other coaching institutes?",
      answer: `Our unique integrated approach, small batch sizes (max 30 students), expert faculty including working professionals from government sectors, personalized mentoring system, and comprehensive study material set us apart. We also offer a Money-Back Guarantee and Free Repeat Program - showing our confidence in our teaching methodology and commitment to student success.`,
    },
    {
      question:
        "Do you provide study material, or do I need to buy books separately?",
      answer: `Comprehensive study material covering all subjects and exams is included in your course fee. You'll receive printed books, digital PDFs, practice question banks, previous year papers, and current affairs compilations. All materials are regularly updated to reflect latest exam patterns. No need to purchase additional books!`,
    },
    {
      question: "Can I switch from one program to another during the course?",
      answer: `Yes, we offer flexibility to upgrade your program. For example, if you enrolled for SSC only and later decide to prepare for Banking exams too, you can upgrade to the Integrated Batch by paying the difference amount. Contact our academic team for smooth transitions between programs.`,
    },
    {
      question: "What is the success rate of your students?",
      answer: `We maintain an impressive 87% success rate, with over 450 students securing government positions in the last few years. However, success ultimately depends on your dedication, regular attendance, and consistent practice. Our role is to provide the best guidance, resources, and environment - and we excel at that! Your sincere effort combined with our expert coaching is the winning formula.`,
    },
  ];

  return (
    <div>
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>RISE TO SERVE INTEGRATED BATCH</h1>
          <p className="tagline">
            For SSC, Banking, Railways & Other Regulatory Bodies
          </p>
          <p
            style={{
              fontSize: "1.8rem",
              margin: "2rem 0",
            }}
          >
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4">
            {/* Benefit 1 */}
            <div className="bg-white p-5 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-transform duration-300">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-7 h-7 text-blue-500 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Common Syllabus Overlap
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                70-80% syllabus overlap across government exams saves time and
                effort
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-5 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-transform duration-300">
              <div className="flex items-center gap-3 mb-2">
                <Monitor className="w-7 h-7 text-blue-500 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Similar Exam Pattern
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Computer-based tests with objective questions across all exams
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-5 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-transform duration-300">
              <div className="flex items-center gap-3 mb-2">
                <RefreshCcw className="w-7 h-7 text-blue-500 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Complementary Preparation
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Studying for one exam enhances your preparation for others
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white p-5 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-transform duration-300">
              <div className="flex items-center gap-3 mb-2">
                <CalendarCheck className="w-7 h-7 text-blue-500 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Year-Round Opportunities
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Multiple exams throughout the year = more chances to succeed
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white p-5 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-transform duration-300">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-7 h-7 text-blue-500 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Strategic Time Management
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
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
            <p style={{ color: "white", textAlign: "center" }}>
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
            <p
              style={{
                color: "white",

                textAlign: "center",
              }}
            >
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
            <p style={{ color: "white", textAlign: "center" }}>
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
            <p style={{ color: "white", textAlign: "center" }}>
              We stand behind our promise with these guarantees and benefits
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4">
            {/* Card 1 */}
            <div className="bg-white p-5 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-transform duration-300">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-7 h-7 text-yellow-400 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Money-Back Guarantee
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                If you attend all classes, complete all assignments, and don't
                qualify in any exam within the course duration, we'll refund
                your fees (Terms & Conditions Apply)
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-5 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-transform duration-300">
              <div className="flex items-center gap-3 mb-2">
                <RefreshCcw className="w-7 h-7 text-yellow-400 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Free Repeat Program
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Didn't clear in first attempt? Join our next batch absolutely
                free until you succeed
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-5 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-transform duration-300">
              <div className="flex items-center gap-3 mb-2">
                <Headphones className="w-7 h-7 text-yellow-400 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Lifetime Support
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get access to our doubt-clearing sessions and mentorship even
                after course completion
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-5 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-transform duration-300">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-7 h-7 text-yellow-400 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Free Study Material Updates
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Receive all syllabus updates and new study materials at no
                additional cost
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-5 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-transform duration-300">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-7 h-7 text-yellow-400 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Small Batch Sizes
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Maximum 30 students per batch to ensure personalized attention
                for every student
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-5 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-transform duration-300">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-7 h-7 text-yellow-400 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Interview Preparation
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Free personality development and interview guidance sessions for
                qualified candidates
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="enrollment" className="enrollment-process">
        <div className="container">
          <div className="section-header">
            <h2 style={{ color: "white" }}>Simple Enrollment Process</h2>
            <p style={{ color: "white", textAlign: "center" }}>
              Get started in just 5 easy steps
            </p>
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
            <p style={{ color: "white", textAlign: "center" }}>
              Got questions? We've got answers!
            </p>
          </div>

          <div className="faq-container space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item border rounded-lg overflow-hidden"
              >
                {/* Question */}
                <div
                  className="faq-question flex justify-between items-center p-4 cursor-pointer bg-gray-100"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <i
                    className={`fas fa-chevron-down transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  ></i>
                </div>

                {/* Answer */}
                <div
                  className={`faq-answer overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="faq-answer-content p-4 text-gray-700">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
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
