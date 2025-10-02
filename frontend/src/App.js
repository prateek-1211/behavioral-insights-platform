import React from "react";
import InsightsFeed from "./components/InsightsFeed";
import WorkflowDesigner from "./components/WorkflowDesigner";
import PatternGallery from "./components/PatternGallery";
import RecommendationEngine from "./components/RecommendationEngine";
import "./index.css";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Behavioral Insights Automation Platform</h1>
      <InsightsFeed />
      <PatternGallery />
      <RecommendationEngine />
      <WorkflowDesigner />
    </div>
  );
}

export default App;
