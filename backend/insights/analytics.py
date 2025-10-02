import random

def generate_insights():
    # Sample auto-generated insights
    patterns = ["Pattern A", "Pattern B", "Pattern C"]
    insights = []
    for p in patterns:
        insights.append({
            "pattern": p,
            "impact_score": round(random.uniform(0, 1), 2),
            "recommendation": f"Action for {p}"
        })
    return insights
