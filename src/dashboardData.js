// 
const dashboardData = {
  categories: [
    {
      id: 1,
      name: "Cloud Security Dashboard",
      widgets: [
        { id: 101, name: "IAM Overview", text: "Summary of identity and access management" }
      ],
      availableWidgets: [
        { id: 101, name: "IAM Overview", text: "Summary of identity and access management" },
        { id: 102, name: "Encryption Status", text: "Tracks encryption coverage across assets" },
        { id: 103, name: "Misconfigurations", text: "Highlights top cloud misconfigurations" },
        { id: 104, name: "Asset Inventory", text: "List of discovered cloud resources" }
      ]
    },
    {
      id: 2,
      name: "Security Analytics",
      widgets: [
        { id: 201, name: "Intrusion Attempts", text: "Count of intrusion attempts detected" },
        { id: 202, name: "Malware Detections", text: "Summary of malware alerts" }
      ],
      availableWidgets: [
        { id: 201, name: "Intrusion Attempts", text: "Count of intrusion attempts detected" },
        { id: 202, name: "Malware Detections", text: "Summary of malware alerts" },
        { id: 203, name: "Phishing Reports", text: "Tracks phishing incidents reported" },
        { id: 204, name: "Network Anomalies", text: "Unusual traffic patterns detected" },
        { id: 205, name: "Access Violations", text: "Unauthorized access attempts logged" }
      ]
    },
    {
      id: 3,
      name: "Infrastructure Metrics",
      widgets: [
        { id: 301, name: "Server Uptime", text: "Uptime percentage of servers" },
        { id: 302, name: "Database Health", text: "Monitors DB performance indicators" }
      ],
      availableWidgets: [
        { id: 301, name: "Server Uptime", text: "Uptime percentage of servers" },
        { id: 302, name: "Database Health", text: "Monitors DB performance indicators" },
        { id: 303, name: "Storage Utilization", text: "Tracks disk usage trends" },
        { id: 304, name: "API Response Times", text: "Latency of critical API endpoints" },
        { id: 305, name: "Container Status", text: "Running vs failed container count" }
      ]
    },
    {
      id: 4,
      name: "Regulatory Compliance",
      widgets: [
        { id: 401, name: "GDPR Compliance", text: "Status of GDPR requirements" }
      ],
      availableWidgets: [
        { id: 401, name: "GDPR Compliance", text: "Status of GDPR requirements" },
        { id: 402, name: "PCI DSS Score", text: "Payment card industry compliance score" },
        { id: 403, name: "HIPAA Checks", text: "Healthcare compliance status" },
        { id: 404, name: "Audit Evidence", text: "List of compliance audit evidence" }
      ]
    },
    {
      id: 5,
      name: "DevOps Performance",
      widgets: [
        { id: 501, name: "Build Success Rate", text: "Percentage of successful builds" },
        { id: 502, name: "Release Velocity", text: "Number of releases per sprint" }
      ],
      availableWidgets: [
        { id: 501, name: "Build Success Rate", text: "Percentage of successful builds" },
        { id: 502, name: "Release Velocity", text: "Number of releases per sprint" },
        { id: 503, name: "CI/CD Failures", text: "Tracks pipeline failure frequency" },
        { id: 504, name: "Code Coverage", text: "Percentage of tested code" },
        { id: 505, name: "Deployment Rollbacks", text: "Count of deployment rollbacks" }
      ]
    }
  ]
};

export default dashboardData;
