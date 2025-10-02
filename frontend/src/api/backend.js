const API_BASE = "http://localhost:5000/api";

export const fetchInsights = async () => {
    const res = await fetch(`${API_BASE}/insights`);
    return res.json();
};

export const fetchWorkflows = async () => {
    const res = await fetch(`${API_BASE}/workflows`);
    return res.json();
};
