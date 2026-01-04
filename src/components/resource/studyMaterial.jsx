import React, { useRef, useState, useEffect } from "react";
import { BookOpen, BarChart3, ListTree, Target } from "lucide-react";
import { useSearchParams } from "react-router-dom";

import { SyllabusOverview } from "../resourceContent/upsccoursePage/syllabus-overview";
import { WeightageChart } from "../resourceContent/upsccoursePage/weightedPart";
import { TopicSections } from "../resourceContent/upsccoursePage/topicBreakdown";
import { StudyStrategy } from "../resourceContent/upsccoursePage/strategicSyllabus";
import { HeroMaterial } from "../resourceContent/upsccoursePage/material1";
import CsatMain from "../resourceContent/csat/csatMain";
import "./studyMaterial.css";

const StudyMaterial = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabIndexFromUrl = Number(searchParams.get("tab")) || 0;
  const [tab, setTab] = useState(tabIndexFromUrl);

  const overviewRef = useRef(null);
  const weightRef = useRef(null);
  const topicRef = useRef(null);
  const strategyRef = useRef(null);

  // Sync tab state with URL query param whenever it changes externally
  useEffect(() => {
    setTab(tabIndexFromUrl);
  }, [tabIndexFromUrl]);

  // Function to switch tab and update URL
  const handleTabSwitch = (newTab) => {
    setTab(newTab);
    setSearchParams({ tab: newTab });
  };

  return (
    <div>
      {/* Toggle Button */}
      <div
        className="absolute z-20"
        style={{
          top: "5rem",
          right: "2.5rem",
        }}
      >
        <button
          onClick={() => handleTabSwitch(tab === 0 ? 1 : 0)}
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

      {/* Prelims GS / Mains Content */}
      {tab === 0 && (
        <div>
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

          <SyllabusOverview refProp={overviewRef} />
          <WeightageChart refProp={weightRef} />
          <TopicSections refProp={topicRef} />
          <StudyStrategy refProp={strategyRef} />
        </div>
      )}

      {/* Prelims CSAT Content */}
      {tab === 1 && <CsatMain />}
    </div>
  );
};

export default StudyMaterial;
