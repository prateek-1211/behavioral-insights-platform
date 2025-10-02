import React, { useEffect, useState } from "react";
import { fetchInsights } from "../api/backend";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function PatternGallery() {
  const [patterns, setPatterns] = useState([]);

  useEffect(() => {
    fetchInsights().then(data => setPatterns(data));
  }, []);

  return (
    <div className="card">
      <h2>Pattern Recognition Gallery</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={patterns}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="pattern" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="impact_score" fill="#4f46e5" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
