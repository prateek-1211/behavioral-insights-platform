from flask import Flask, jsonify, request
from flask_cors import CORS
from insights.analytics import generate_insights
from insights.automation import get_workflow_status

app = Flask(__name__)
CORS(app)

@app.route("/api/insights", methods=["GET"])
def insights():
    insights_data = generate_insights()
    return jsonify(insights_data)

@app.route("/api/workflows", methods=["GET"])
def workflows():
    status = get_workflow_status()
    return jsonify(status)

if __name__ == "__main__":
    app.run(debug=True)
