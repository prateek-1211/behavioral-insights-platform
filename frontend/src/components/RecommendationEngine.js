import React, { useEffect, useState } from "react";
import { fetchInsights } from "../api/backend";

export default function RecommendationEngine() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetchInsights().then(data => setRecommendations(data));
  }, []);

  return (
    <div className="card">
      <h2>Recommendation Engine</h2>
      <ul>
        {recommendations.map((rec, idx) => (
          <li key={idx} className="recommendation">
            <strong>{rec.pattern}</strong>: {rec.recommendation}
          </li>
        ))}
      </ul>
    </div>
  );
}
