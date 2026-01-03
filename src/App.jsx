import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import AboutPages from "./pages/aboutPages";
import CoursePages from "./pages/course";
import YouTubePage from "./pages/youtube";
import TestimonailPages from "./pages/testimonial";
import BlogPages from "./pages/blog";
import ContactPages from "./pages/contact";
import Gallery from "./pages/galleryPages";
import CourseUpsc from "./components/courseUpsc";
import CivilPage from "./pages/civilPage/civilPage";
import CivilSsc from "./pages/civilPage/civilssc";
import CivilRailway from "./pages/civilPage/civilRailway";
import CivilBanking from "./pages/civilPage/civilBanking";
import CivilTnpsc from "./pages/civilPage/civilTnpsc";
import ResouceAffair from "./pages/resource/resourceAffair";
import StudyPages from "./pages/resource/studyPages";
import FreePages from "./pages/resource/freePages";
import ToolPage from "./pages/resource/toolPage";
import TestimonialPage from "./pages/aspirant/testimoniaPage";
import StudentJourneyPage from "./pages/aspirant/student-journey";
import CallToAction from "./pages/calltoaction";
import CourseFinder from "./pages/Call/courseFinder";
import CareerFinder from "./pages/Call/careerFinder";
import CareerPage from "./pages/careerpage/careerePage";
import UpscCourse from "./components/upscContent/UpscCourse";
import Peadology from "./components/upscContent/peadalogy";
import CoursePage from "./pages/civilPage/coursePage";
import Peadology1 from "./pages/peadology/peadology1";
import Peadology2 from "./pages/peadology/peadology2";
import Peadology3 from "./pages/peadology/peadology3";
import Peadology4 from "./pages/peadology/peadology4";
import Tnpsc1 from "./pages/TNPSC/tnpsc1";
import Tnpsc2 from "./pages/TNPSC/tnpsc2";
import MainPage from "./pages/resource/mainPage";
import Gs2 from "./pages/gs/gs2";
import GS3 from "./pages/gs/gs3";
import GS4 from "./pages/gs/gs4";
import PrelimPage from "./pages/resource/prelimQuestionPage";
import CsatPage from "./pages/resource/csatPrelimQuestionPage";
import Gs1MainPage from "./pages/resource/gs1MainPage";
import Gs2MainPage from "./pages/resource/gs1MainPage2";
import Gs3MainPage from "./pages/resource/gs1MainPage3";
import Gs4MainPage from "./pages/resource/gs1MainPage4";
import PYQHero from "./components/prelimQuestion/pyqhero";
import PYQHub from "./pages/resource/pyqHub";
import TnpscResource from "./pages/TNPSC/tnpscResource";
import TnpscSyllabusResource from "./pages/TNPSC/tnpscSyllabus";
import WhereToStudyPage from "./pages/TNPSC/whereToStudypage";
import TnpscPolicyPage from "./pages/TNPSC/tnpscPolicyPage";
import TNPSCPYQPage from "./pages/TNPSC/tnpscPQYPage";
import Group1MainsPYQPage from "./components/TnpscResources/pyq/group1-mains/page";
import Group1PrelimsPYQPage from "./components/TnpscResources/pyq/group1-prelims/page";
import Group2MainsPYQPage from "./components/TnpscResources/pyq/group2-mains/page";
import Group2PrelimsPYQPage from "./components/TnpscResources/pyq/group2-prelims/page";
import Group4PYQPage from "./components/TnpscResources/pyq/group4/page";
import PQYTNPSC from "./pages/TNPSC/pqyTnpsc";
import RiseToServe from "./pages/civilPage/riseToserver";
import Jdax from "./pages/aboutJdax/jdax";
import Commit from "./pages/aboutJdax/commitPage";
import JdaxManagementPage from "./pages/aboutJdax/jdaxManagement";
import JdaxFacultyPage from "./pages/aboutJdax/jdaxFaculty";
import JdaxSkillPage from "./pages/aboutJdax/jdaxSkillPage";
import WhyChooseJdax from "./pages/aboutJdax/whyChoseJdax";
import Prospect from "./pages/aboutJdax/prospect";
import EligibilityCriteriaPage from "./components/upscMainContent/eligibility-criteria";
import CareerServicesPage from "./components/upscMainContent/career-services";
import MainsGuidePage from "./components/upscMainContent/main-guide";
import InterviewGuidePage from "./components/upscMainContent/interview-guide";
import PrelimsGuidePage from "./components/upscMainContent/prelims-guide";
import ExamStagesTimelinePage from "./components/upscMainContent/exam-stage-timeline";
import WhatIsUPSCPage from "./components/upscMainContent/what-new-to-upsc";
import WhatNewPage from "./pages/UpscMainContentPage/page7";
import TimelineStage from "./pages/UpscMainContentPage/page6";
import InterviewGuide from "./pages/UpscMainContentPage/page5";
import PrelimsGuide from "./pages/UpscMainContentPage/page4";
import MainsGuide from "./pages/UpscMainContentPage/page3";
import CareerService from "./pages/UpscMainContentPage/page2";
import Eligibility from "./pages/UpscMainContentPage/page1";
import InitiativeEcosystemPage from "./pages/UpscMainContentPage/initiativePage";
import UpscPeadlogyInitiative from "./pages/UpscMainContentPage/upscPeadlogyInitiative";
import TnpscFrameworkPage from "./pages/TNPSC/tnpscFrameworkPage";
import SSCPage from "./components/sscContent/SSCPage";
import BankingPage from "./components/sscContent/BankingPage";
import RRBPage from "./components/sscContent/RRBPage";
import RegulatoryPage from "./components/sscContent/RegulatoryPage";
import Ssc from "./pages/ssb/sspage";
import Banking from "./pages/ssb/banking";
import RRB from "./pages/ssb/rrb";
import Regulatory from "./pages/ssb/regulartory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/about" element={<AboutPages />} />
      <Route path="/courses" element={<CoursePages />} />
      <Route path="/courses/upsc" element={<CivilPage />} />
      <Route path="/courses/ssc" element={<CivilSsc />} />
      <Route path="/course/RiseToServe" element={<RiseToServe />} />
      <Route path="/courses/railway" element={<CivilRailway />} />
      <Route path="/courses/banking" element={<CivilBanking />} />
      <Route path="/courses/tnpsc" element={<CivilTnpsc />} />
      <Route path="/resources/affair" element={<ResouceAffair />} />
      <Route path="/resources/study-materials" element={<StudyPages />} />
      <Route path="/resources/study-main-materials" element={<MainPage />} />
      <Route path="/resources/pqy-prelims" element={<PrelimPage />} />
      <Route path="/resource/csat-prelims" element={<CsatPage />} />
      <Route path="/resource/gs1main" element={<Gs1MainPage />} />
      <Route path="/resource/gs2main" element={<Gs2MainPage />} />
      <Route path="/resource/gs3main" element={<Gs3MainPage />} />
      <Route path="/resource/gs4main" element={<Gs4MainPage />} />
      <Route path="/pyq" element={<PYQHub />} />
      <Route path="/resource/tnpsc-page" element={<TnpscResource />} />
      <Route
        path="/resource/tnpsc-syllabus"
        element={<TnpscSyllabusResource />}
      />
      <Route path="/resource/where-study" element={<WhereToStudyPage />} />
      <Route path="/resource/tnpsc-policy" element={<TnpscPolicyPage />} />
      <Route path="/resource/tnpsc-pyq" element={<TNPSCPYQPage />} />
      {/* <Route
        path="/resource/group-one-main-pyq"
        element={<Group1MainsPYQPage />}
      />
      <Route
        path="/resource/group-one-prelim-pyq"
        element={<Group1PrelimsPYQPage />}
      />
      <Route
        path="/resource/group-two-main-pyq"
        element={<Group2MainsPYQPage />}
      />
      <Route
        path="/resource/group-two-prelim-pyq"
        element={<Group2PrelimsPYQPage />}
      />
      <Route path="/resource/group-4-pyq" element={<Group4PYQPage />} /> */}
      <Route path="/resource/group-one-main-pyq" element={<PQYTNPSC />} />
      <Route path="/resource/group-one-prelim-pyq" element={<PQYTNPSC />} />
      <Route path="/resource/group-two-main-pyq" element={<PQYTNPSC />} />
      <Route path="/resource/group-two-prelim-pyq" element={<PQYTNPSC />} />
      <Route path="/resource/group-4-pyq" element={<PQYTNPSC />} />

      <Route path="/resources/free-classes" element={<FreePages />} />
      <Route path="/course/upsc/upsc-service-course" element={<CoursePage />} />
      <Route path="/course/upsc/peadology-service" element={<Peadology />} />
      <Route path="/courses/upsc/pedagogy/ecosystem" element={<Peadology1 />} />
      <Route path="/courses/upsc/pedagogy/prelims" element={<Peadology2 />} />
      <Route path="/courses/upsc/pedagogy/mains" element={<Peadology3 />} />
      <Route path="/courses/upsc/pedagogy/interview" element={<Peadology4 />} />
      <Route path="/courses/tnpsc/new-to-start" element={<Tnpsc1 />} />
      <Route path="/courses/tnpsc/group-exams" element={<Tnpsc2 />} />
      <Route
        path="/courses/tnpsc/learning-framework"
        element={<TnpscFrameworkPage />}
      />

      <Route path="/mains/gs2" element={<Gs2 />} />
      <Route path="/mains/gs3" element={<GS3 />} />
      <Route path="/mains/gs4" element={<GS4 />} />
      <Route path="/resources/blog" element={<BlogPages />} />
      <Route path="/resources/tools" element={<ToolPage />} />

      <Route path="/aspirant/testimonial" element={<TestimonialPage />} />
      <Route
        path="/aspirant/student-journey"
        element={<StudentJourneyPage />}
      />
      <Route path="/call-to-action" element={<CallToAction />} />
      <Route path="/course-comparison" element={<CourseFinder />} />
      <Route path="/course-finder" element={<CareerFinder />} />
      <Route path="/video" element={<YouTubePage />} />
      {/* <Route path="/testimonials" element={<TestimonailPages />} /> */}
      <Route path="/blog" element={<BlogPages />} />
      <Route path="/contact" element={<ContactPages />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/careers" element={<CareerPage />} />
      <Route path="/about-jdax" element={<Jdax />} />
      <Route path="/commitment" element={<Commit />} />
      <Route path="/jdax-management" element={<JdaxManagementPage />} />
      <Route path="/jdax-faculty" element={<JdaxFacultyPage />} />
      <Route path="/jdax-skill" element={<JdaxSkillPage />} />
      <Route path="/why-choose" element={<WhyChooseJdax />} />
      <Route path="/prospect" element={<Prospect />} />
      <Route
        path="/new-to-upsc/eligibility-criteria"
        element={<Eligibility />}
      />
      <Route path="/new-to-upsc/career-services" element={<CareerService />} />
      <Route path="/new-to-upsc/mains-guide" element={<MainsGuide />} />
      <Route path="/new-to-upsc/interview-guide" element={<InterviewGuide />} />
      <Route path="/new-to-upsc/prelims-guide" element={<PrelimsGuide />} />
      <Route
        path="/new-to-upsc/exam-stages-timeline"
        element={<TimelineStage />}
      />
      <Route path="/new-to-upsc/what-is-upsc-cse" element={<WhatNewPage />} />
      <Route
        path="/initiative-ecosystem"
        element={<InitiativeEcosystemPage />}
      />
      <Route
        path="/course/upsc/upsc-peadology"
        element={<UpscPeadlogyInitiative />}
      />
      <Route path="/ssc" element={<Ssc />} />
      <Route path="/banking" element={<Banking />} />
      <Route path="/rrb" element={<RRB />} />
      <Route path="/regulatory" element={<Regulatory />} />
    </Routes>
  );
}

export default App;
