import React, { useEffect, useState } from "react";
import { fetchWorkflows } from "../api/backend";

export default function WorkflowDesigner() {
  const [workflows, setWorkflows] = useState([]);

  useEffect(() => {
    fetchWorkflows().then(data => setWorkflows(data));
  }, []);

  return (
    <div>
      <h2>Automation Workflows</h2>
      <ul>
        {workflows.map((w, idx) => (
          <li key={idx}>{w.name} - Status: {w.status}</li>
        ))}
      </ul>
    </div>
  );
}
