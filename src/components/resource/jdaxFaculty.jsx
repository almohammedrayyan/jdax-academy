import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Prakash from "../../assets/prakash.png";
import Alice from "../../assets/alice.png";
import Ariva from "../../assets/ariva.png";
import Gokul from "../../assets/gokul.png";
import Hari from "../../assets/hari.jpg";
import Jaya from "../../assets/jaya.png";
import Khader from "../../assets/khader.png";
import Koushik from "../../assets/koushik.png";
import Mohan from "../../assets/mohan.png";
import Riyaz from "../../assets/riyaz.png";
import Saravanan from "../../assets/saravanan.png";
import Vignesh from "../../assets/vignesh.png";
import Vimal from "../../assets/vimal.png";
import Arun from "../../assets/arun.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JdaxFaculty = () => {
  const TEXT_LIMIT = 20;

  const [selectedMember, setSelectedMember] = useState(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000, // transition speed
    slidesToShow: 4, // adjust as needed
    slidesToScroll: 1,
    autoplay: true, // enables auto scroll
    autoplaySpeed: 3000, // delay between slides (ms)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const facultyList = [
    {
      name: "Prakash K",
      role: "Academic and UPSC Coordinator",
      img: Prakash,
      text: "Serving as Academic and UPSC Coordinator at JDAX Academy, He brings unparalleled UPSC expertise with nine years of teaching experience and the extraordinary achievement of clearing  UPSC CSE Prelims eight times continuously (2014-2021), UPSC IFOS Mains four times reaching Interview twice, and UPSC CAPF Interview once, alongside TNPSC Group I Mains thrice. His deep examination understanding extends to question paper setting and reviewing for UPSC Prelims & Mains, development of comprehensive R&D frameworks for CSE, and creation of study materials for publication. Specializing in Current Affairs, Indian Polity, Environment, and related subjects, he combines his extensive firsthand exam experience with academic coordination to provide aspirants with strategic, exam-oriented mentorship that transforms preparation approaches and maximizes success potential",
    },
    {
      name: "Abdul Khadar",
      role: "Senior Faculty",
      img: Riyaz,
      text: "A Post Graduate in History and Assistant Professor at Loyola College, Chennai, Abdul Khadar brings exceptional academic credentials to JDAX Academy, having cleared UGC NET three times consecutively and appeared for UPSC Civil Services Mains thrice and TNPSC Group I Mains thrice, reaching the interview stage once. With five years at Manithaneyam IAS Academy and three years at Aram IAS Academy as senior History faculty, he has established himself as the top educator in the TNPSC category on UNACADEMY, reaching thousands of aspirants through digital platforms. He specializes in Indian History & Culture, World History, Indian Society, Geography, and Indian Polity for UPSC and TNPSC examinations, while also serving as an expert for History Optional in UPSC CSE Mains. His unique blend of academic excellence, competitive exam experience, and proven teaching success across traditional and online platforms makes him an invaluable mentor for civil services aspirants.",
    },
    {
      name: "Reyaz A",
      role: "Senior Faculty",
      img: Khader,
      text: "As a Senior Faculty at JDAX Academy, Reyaz A brings a decade of teaching excellence and strategic leadership, having served as former Director of KPR IAS Academy, Coimbatore. His impressive competitive exam credentials include appearing for UPSC CSE Mains four times and reaching Interview once, alongside TNPSC Group I Mains thrice, providing authentic insights into the examination process. With extensive teaching experience across premier institutions including Anna IAS Academy (Bharathiar University), Shankar IAS Academy, and Officers IAS Academy Chennai. Specializing in Indian Polity, Economy, Environment, Geography, Tamil Optional, and UPSC Interview Guidance, he combines proven mentoring success with firsthand examination experience to transform aspirants into successful civil servants ",
    },
    {
      name: "Gokul Prasadh KS",
      role: "Senior Faculty",
      img: Gokul,
      text: "Holding BCA and MA in Political Science & International Relations, Gokul Prasadh brings exceptional UPSC expertise to JDAX Academy, having appeared for UPSC CSE Mains four times and reached Personality Test (Interview) twice. With five years of teaching experience across premier coaching hubs in Coimbatore, Chennai, and Delhi, he combines firsthand examination insights with pedagogical excellence. An accomplished author, he has published two comprehensive compilation books on Indian History—Modern India History and Ancient & Medieval Indian History—which serve as valuable resources for UPSC aspirants. His unique blend of competitive exam experience, multi-city teaching exposure, and scholarly publications enables him to provide aspirants with authentic, exam-oriented guidance rooted in both personal journey and academic rigor.",
    },
    {
      name: "Mohanapriya Sundar",
      role: "Senior Faculty",
      img: Mohan,
      text: "A B.Tech Computer Science graduate, Mohanapriya Sundar brings over five years of specialized teaching experience to JDAX Academy, uniquely combining technical expertise with literary scholarship. His engineering background enables him to deliver in-depth instruction in Science & Technology for UPSC Prelims and Mains, while his versatility extends to Ethics & Integrity (UPSC & TNPSC), Tamil Literature (UPSC Optional), and General English (TNPSC). An accomplished author, he has published comprehensive works including Tamil Society, Its Culture and Heritage,Basics of Indian Polity, Administration and Governance of States with Specific Reference to Tamil Nadu, and Protected Areas of India. His rare combination of technical education, multi-disciplinary teaching proficiency, and scholarly contributions makes him an invaluable resource for both UPSC and TNPSC aspirants.",
    },
    {
      name: "S. Vimalraj",
      role: "Senior Faculty",
      img: Vimal,
      text: "A B.E graduate from Coimbatore Institute of Technology, Vimalraj brings exceptional UPSC expertise to JDAX Academy, having appeared for UPSC CSE Mains four times (2018-2022) with consistent scores between 681-702 marks. His remarkable achievement includes ranking among the Top 10 marks in History Optional at All India level in 2021 (276/500), demonstrating mastery of the subject. With teaching experience at Chinmaya Academy, Iklas IAS Academy, and Raja's Cracking IAS Academy, he specializes in History Optional and Economy for UPSC aspirants. His unique framework for teaching History combines in-depth comprehensive knowledge with evolving UPSC trends, utilizing multiple sources to provide both conceptual clarity and factual precision. His transition from engineering (Thermax Limited, 2015-2018) to civil services preparation enriches his analytical approach to teaching",
    },
    {
      name: "Vigneshwaran Manickam",
      role: "Senior Faculty",
      img: Vignesh,
      text: "With over 10 years of national teaching experience across New Delhi and Chennai coaching academies, Vigneshwaran Manickam brings exceptional UPSC credentials including six Mains attempts, three UPSC IAS Interviews, two IFoS Interviews, TNPSC Interviews thrice, and the rare distinction of clearing five highly competitive exams. Holding B.Tech (ECE), MBA, MA (History), and MA (Tamil Literature), he recently appeared for both UPSC CSE and IFoS Interviews in March 2024, writing all papers in Tamil Medium with Tamil Literature Optional. His expertise spans Indian Economy, Governance, Social Issues, Indian Society, Essay, Science & Technology, and Current Affairs, with a unique ability to analyze exam patterns and relate General Studies with contemporary events. He has guided numerous aspirants through Personality Tests and transforms students through his interactive, exam-oriented teaching approach.",
    },
    {
      name: "R. Jayamurugan",
      role: "Senior Faculty",
      img: Jaya,
      text: "He brings exceptional credentials with multidisciplinary expertise in Physics, Criminology, Sociology, and Psychology. An All India Best Cadet (Air Wing NCC, 2007) with Air Force Academy training at Dundigal, he holds the distinction of being an All India Rank Holder in CDS (UPSC), having cleared the exam six consecutive times, while qualifying for Civil Services five times (2012-2016) and UGC-NET in Sociology (2016). Recommended by Bangalore SSB (2012), he specializes in SSB Interview Training for defence aspirants and brings comprehensive coaching expertise in personality development and leadership growth. His unique blend of defence background, competitive exam mastery, and multidisciplinary academic foundation makes him an invaluable mentor for both defence and civil services aspirants at JDAX Academy.",
    },
    {
      name: "A. Saravanan",
      role: "Senior Faculty",
      img: Saravanan,
      text: "An M.Sc in Chemistry with B.Ed and M.Lib.I.Sc qualifications, Saravanan brings extensive multi-platform teaching expertise to JDAX Academy, having trained aspirants across Veranda Race, Dexter Academy, Terzaghi Institute, and the Tamil Nadu Government's AIM TN YouTube channel. Specializing in Science, Geography, and Science & Technology for TNPSC exams, he combines academic rigor with practical exam insights gained from appearing in TNPSC Group I Mains and Group II Mains (twice). His proven track record includes clearing TNUSRB SI & PC exams multiple times and RRB exams twice, demonstrating his command over competitive exam patterns. With experience in both traditional classroom settings and online platforms like Adda 247 Tamil, he delivers accessible, exam-focused Science education that demystifies complex concepts for TNPSC aspirants.",
    },
    {
      name: "B. Hari Theva",
      role: "Senior Faculty",
      img: Hari,
      text: "With dedicated civil services preparation journey and a B.Tech from National Engineering College, Hari Theva brings authentic, experience-driven mentorship to JDAX Academy. Currently pursuing M.A Economics from IGNOU, he has served as Senior Consultant for Economics and Geography with Tamil Nadu Model Schools and taught across premier institutions including Kurukshetra IAS Academy, Officers IAS Academy, Ganesh IAS Academy, and Shri Rajiv Gandhi IAS Academy. Specializing in Economics, Geography, Political Science, Ethics, and Essay Writing for UPSC and TNPSC exams, he transforms challenging subjects into accessible learning through case studies, current affairs integration, and map-based activities. ",
    },
    {
      name: "Dr. D. Alice Ligoria",
      role: "",
      img: Alice,
      text: "A UGC-NET qualified Ph.D. in English Literature with over four years of post-doctoral teaching experience across premier institutions including SRM, Loyola College, Panimalar Engineering College, and Government College of Engineering. At JDAX Academy, she specializes in English Language and Grammar for UPSC, TNPSC, SSC, and Banking competitive examinations, bringing expertise in Communicative English, Professional Communication, and Soft Skills development. Her academic rigor is complemented by extensive research publications in international and national journals, curriculum development experience, and proven proficiency in question paper setting for competitive exams. With a strong foundation in outcome-based education and student-centric pedagogy, she transforms English from a challenging subject into an accessible skill through structured grammar instruction and practical communication techniques",
    },
    {
      name: "Arivazhagan P",
      role: "Senior Faculty",
      img: Ariva,
      text: "With over a decade of teaching experience since 2014, Arivazhagan brings a unique blend of technical precision and pedagogical excellence to JDAX Academy. An M.E in Engineering Design from Government College of Technology, he specializes in Quantitative Aptitude, Reasoning, History, and Tamil Nadu Culture & Administration for UPSC, TNPSC, SSC, and Banking exams. His distinctive approach combines classroom teaching with digital outreach through his YouTube channel Arivu's Aptitude, where he delivers concept-based learning with shortcuts and tricks. Having cleared the TNPSC Chief Minister Programme Interview (2024) and appeared twice in TNPSC Group I & II Mains, he offers authentic mentorship rooted in personal exam experience. His administrative coordination expertise and commitment to social awareness campaigns reflect his mission to democratize competitive exam education for aspirants from all backgrounds.",
    },
    {
      name: "A. S. Arun Vijay",
      role: "Senior Faculty",
      img: Arun,
      text: "With a decade of teaching excellence since 2015, Arun Vijay brings unparalleled expertise to JDAX Academy, having cleared UPSC Civil Services Mains (2014, 2016), TNPSC Group I Mains (2019), TNPSC Group II Mains (2023), RBI Grade B Mains (2016), and SSC CGL Tier II multiple times. His extensive experience includes serving as Director at Vivekanandha IAS Academy and Senior Faculty at District Employment Centre, Erode. Specializing in Indian Polity, Indian Economy, Tamil Nadu Development Administration, and Current Affairs, he reaches aspirants both in classroom and online, mentoring over 3,400 subscribers through his Telegram group. His proven track record across multiple competitive exams and leadership in organizing district-level educational initiatives makes him an invaluable guide for UPSC, TNPSC, and SSC aspirants.",
    },
    {
      name: "V. Koushik Srinivas",
      role: "TNPSC, SSC & BANKING COORDINATOR",
      img: Koushik,
      text: "A UPSC Civil Services Interview qualifier (2019) and TNPSC Group I Mains achiever (2021), Koushik serves as the TNPSC, SSC, and Banking Exams Coordinator at JDAX Academy. With over four years of teaching experience and a B.Tech from SASTRA University, he expertly handles Indian National Movement, Tamil Nadu Development Administration, Aptitude & Reasoning, and Social Issues. His dual role as coordinator and educator enables him to design comprehensive strategies while delivering classroom excellence, providing aspirants with authentic mentorship rooted in his own competitive exam journey.",
    },
  ];
  return (
    <div>
      <section className="bg-gray-50 py-12 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#431aa0]">
          JDAX Faculty Team
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyList.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
            >
              {/* TOP GRID: IMAGE + NAME */}
              <div className="grid grid-cols-[96px_1fr] gap-4 items-center">
                {/* Image Wrapper (NO CUTTING) */}
                <div className="w-24 h-24 rounded-full border-4 border-yellow-400 overflow-hidden flex items-center justify-center bg-white">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>

                {/* Name & Role */}
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>

              {/* BOTTOM GRID: DESCRIPTION */}
              <div className="mt-4">
                <p className="text-sm text-gray-700">
                  {member.text.slice(0, TEXT_LIMIT)}
                  <span
                    onClick={() => setSelectedMember(member)}
                    className="ml-2 text-blue-600 font-medium cursor-pointer"
                  >
                    ... Read more
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                className="
          bg-white rounded-xl relative w-full max-w-2xl
          p-4 md:p-6
          max-h-[80vh] md:max-h-none
          overflow-y-auto
        "
                initial={{ scale: 0.85, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.85, y: 40 }}
                transition={{ type: "spring", stiffness: 120 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-2 right-3 text-gray-500 text-xl"
                >
                  ✕
                </button>

                {/* HEADER */}
                <div className="flex gap-4 items-center mb-4">
                  {/* Image (smaller on mobile) */}
                  <div
                    className="
            w-20 h-20 md:w-28 md:h-28
            rounded-full border-4 border-yellow-400
            overflow-hidden flex items-center justify-center bg-white
          "
                  >
                    <img
                      src={selectedMember.img}
                      alt={selectedMember.name}
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg md:text-2xl font-semibold text-blue-900">
                      {selectedMember.name}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      {selectedMember.role}
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {selectedMember.text}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default JdaxFaculty;
