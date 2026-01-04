export const MENU = [
  {
    label: "Find Your Course",
    children: [
      {
        label: "Beginner's Guide",
        children: [
          { label: "Competitive Exams Overview", to: "/resources/affair" },
          {
            label: "JDAX Competitive Exams Initiatives",
            to: "/initiative-ecosystem",
          },
        ],
      },
      {
        label: "UPSC",
        children: [
          { label: "New To UPSC ? Start Here", to: "/courses/upsc" },
          {
            label: "JDAX UPSC Courses",
            to: "/course/upsc/upsc-service-course",
          },
          {
            label: "JDAX's UPSC Pedagogy & Initiatives",
            to: "/course/upsc/upsc-peadology",
          },
        ],
      },
      {
        label: "TNPSC",
        children: [
          { label: "New to TNPSC", to: "/courses/tnpsc/new-to-start" },
          { label: "JDAX TNPSC Courses", to: "/courses/tnpsc/group-exams" },
          {
            label: "JDAX TNPSC Learning Framework",
            to: "/courses/tnpsc/learning-framework",
          },
        ],
      },
      {
        label: "SSC / Banking / RRB",
        children: [
          {
            label: "New To SSC / Banking / RRB – Start Here",
            to: "/courses/ssc",
          },
          {
            label: "JDAX SSC / Banking / RRB – Courses",
            to: "/course/RiseToServe",
          },
        ],
      },
    ],
  },
  {
    label: "Free Resources",
    children: [
      {
        label: "UPSC Resources",
        children: [
          { label: "Syllabus", to: "/resources/study-materials" },
          { label: "Previous Year Question Papers", to: "/pyq" },
        ],
      },
      {
        label: "TNPSC Resources",
        children: [
          { label: "Syllabus", to: "/resource/tnpsc-syllabus" },
          { label: "Previous Question Paper", to: "/resource/tnpsc-pyq" },
          { label: "JDAX TNPSC Where to Study", to: "/resource/where-study" },
          { label: "JDAX TNPSC Policy Notes", to: "/resource/tnpsc-policy" },
        ],
      },
    ],
  },
  { label: "Aspirant", to: "/aspirant/student-journey" },
  {
    label: "About JDAX",
    children: [
      { label: "Our Story (Founder’s Vision)", to: "/about-jdax" },
      { label: "JDAX Management", to: "/jdax-skill" },
      { label: "JDAX Faculty Team", to: "/jdax-faculty" },
      { label: "Why Choose JDAX", to: "/why-choose" },
      { label: "JDAX Prospectus & Pamphlets", to: "/prospect" },
      { label: "Gallery", to: "/gallery" },
    ],
  },
];
