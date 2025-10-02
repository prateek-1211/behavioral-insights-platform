import React, { useEffect, useState } from "react";
import { fetchInsights } from "../api/backend";

export default function InsightsFeed() {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    fetchInsights().then(data => setInsights(data));
  }, []);

  return (
    <div>
      <h2>Auto-Generated Insights</h2>
      <ul>
        {insights.map((i, idx) => (
          <li key={idx}>
            {i.pattern} - Impact: {i.impact_score} - {i.recommendation}
          </li>
        ))}
      </ul>
    </div>
  );
}
