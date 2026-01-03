import React, { useRef, useState } from "react";
import { BookOpen, BarChart3, ListTree, Target } from "lucide-react";

import { SyllabusOverview } from "../resourceContent/upsccoursePage/syllabus-overview";
import { WeightageChart } from "../resourceContent/upsccoursePage/weightedPart";
import { TopicSections } from "../resourceContent/upsccoursePage/topicBreakdown";
import { StudyStrategy } from "../resourceContent/upsccoursePage/strategicSyllabus";
import { HeroMaterial } from "../resourceContent/upsccoursePage/material1";
import "./studyMaterial.css";
import CsatMain from "../resourceContent/csat/csatMain";

const StudyMaterial = () => {
  const overviewRef = useRef(null);
  const weightRef = useRef(null);
  const topicRef = useRef(null);
  const strategyRef = useRef(null);
  const [tab, setTab] = useState(0);

  return (
    <div>
      <div
        className="absolute z-20"
        style={{
          top: "5rem", // 80px from top
          right: "2.5rem", // 40px from right
        }}
      >
        <button
          onClick={() => setTab(tab === 1 ? 0 : 1)}
          className="rounded-full font-bold text-white shadow-2xl tracking-wide flex items-center justify-center"
          style={{
            backgroundColor: "#dc2626f2",
            padding: "18px 32px",
            fontSize: "1rem",
            minWidth: "100px",
            minHeight: "70px",
            border: "3px solid #ffffff33",
            letterSpacing: "1px",
            boxShadow: "0 8px 20px rgba(220, 38, 38, 0.6)",
            textAlign: "center",
            whiteSpace: "nowrap",
            marginTop: "20px",
            marginRight: "20px",
          }}
        >
          {tab === 0
            ? "View Prelims CSAT Syllabus"
            : "View Prelims GS Syllabus"}
        </button>
      </div>

      {tab === 0 && (
        <div>
          {/* Passing setTab and tab to HeroMaterial is optional, add if you want child toggle */}
          <HeroMaterial />

          <div className="nav-div">
            <div className="nav-buttonss">
              <button
                onClick={() =>
                  overviewRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                <BookOpen size={18} />
                <span>Overview</span>
              </button>

              <button
                onClick={() =>
                  weightRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                <BarChart3 size={18} />
                <span>Weightage</span>
              </button>

              <button
                onClick={() =>
                  topicRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                <ListTree size={18} />
                <span>Topics</span>
              </button>

              <button
                onClick={() =>
                  strategyRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Target size={18} />
                <span>Strategy</span>
              </button>
            </div>
          </div>

          {/* Sections */}
          <SyllabusOverview refProp={overviewRef} />
          <WeightageChart refProp={weightRef} />
          <TopicSections refProp={topicRef} />
          <StudyStrategy refProp={strategyRef} />
        </div>
      )}

      {tab === 1 && (
        <div>
          {/* Pass setTab & tab if CSAT page should toggle tab internally */}
          <CsatMain />
        </div>
      )}
    </div>
  );
};

export default StudyMaterial;
