import "./EmployerDashboard.css";
import {
  FaUsers,
  FaCalendarAlt,
  FaCheckCircle,
  FaRegClock,
  FaPlus,
  FaBriefcase,
} from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";

const stats = [
  {
    icon: <FaUsers />,
    value: "342",
    title: "Total Applicants",
    sub: "+19 today",
    color: "#4f46e5",
  },
  {
    icon: <FaCalendarAlt />,
    value: "28",
    title: "Interviews Set",
    sub: "6 this week",
    color: "#8b5cf6",
  },
  {
    icon: <FaCheckCircle />,
    value: "7",
    title: "Offers Extended",
    sub: "3 accepted",
    color: "#10b981",
  },
  {
    icon: <FaRegClock />,
    value: "14d",
    title: "Time to Hire",
    sub: "↓ 3d faster",
    color: "#2563eb",
  },
];

const jobs = [
  {
    iconColor: "#7c3aed",
    title: "Senior Frontend Engineer",
    posted: "Posted Jan 15",
    applicants: 142,
    status: "Active",
    today: "+12 today",
  },
  {
    iconColor: "#2563eb",
    title: "Data Platform Engineer",
    posted: "Posted Jan 18",
    applicants: 89,
    status: "Active",
    today: "+5 today",
  },
  {
    iconColor: "#ec4899",
    title: "Product Designer",
    posted: "Posted Jan 20",
    applicants: 67,
    status: "Active",
    today: "+8 today",
  },
  {
    iconColor: "#ea580c",
    title: "DevOps Engineer",
    posted: "Posted Jan 10",
    applicants: 44,
    status: "Paused",
    today: "+2 today",
  },
];

const funnel = [
  {
    stage: "Applied",
    value: 45,
    height: 85,
    color: "#6366f1",
  },
  {
    stage: "Screening",
    value: 38,
    height: 75,
    color: "#6366f1",
  },
  {
    stage: "Interview",
    value: 28,
    height: 55,
    color: "#6366f1",
  },
  {
    stage: "Offer",
    value: 18,
    height: 35,
    color: "#818cf8",
  },
  {
    stage: "Hired",
    value: 13,
    height: 18,
    color: "#4f46e5",
  },
];

const candidates = [
  {
    name: "Priya Sharma",
    role: "Frontend Engineer",
    img: "https://i.pravatar.cc/150?img=32",
    skills: ["React", "TypeScript", "GraphQL"],
    match: "97%",
    status: "Interview",
  },
  {
    name: "Marcus Webb",
    role: "Data Scientist",
    img: "https://i.pravatar.cc/150?img=12",
    skills: ["Python", "Spark", "ML"],
    match: "93%",
    status: "Screening",
  },
  {
    name: "Sophie Laurent",
    role: "Product Designer",
    img: "https://i.pravatar.cc/150?img=47",
    skills: ["Figma", "Prototyping"],
    match: "91%",
    status: "Applied",
  },
  {
    name: "David Park",
    role: "DevOps Engineer",
    img: "https://i.pravatar.cc/150?img=18",
    skills: ["Kubernetes", "AWS", "Terraform"],
    match: "88%",
    status: "Applied",
  },
];

const insights = [
  {
    icon: "🚀",
    title: "AI Sourcing Active",
    text: "FuturePath is actively matching 1,240 candidates to your open roles in the background.",
  },
  {
    icon: "📊",
    title: "Response Rate",
    text: "Your team responds to candidate messages within 2.4 hours on average — top 10% of employers.",
  },
  {
    icon: "👥",
    title: "Acceptance Rate",
    text: "78% of your offers are accepted — up 12% since using FuturePath AI matching.",
  },
];

export default function EmployerDashboard() {
  return (
    <div className="employer-dashboard">
      {/* Header */}

      <div className="dashboard-header">
        <h1>Employer Dashboard</h1>

        <p>Manage your job posts, candidates and hiring pipeline.</p>
      </div>

      {/* Banner */}

      <div className="company-banner">
        <div className="company-left">
          <div className="company-logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-RO26oq304_-stFTTKg9p8g6_rEPqTMQ_rl6524WH70cXRQyv0rQeBs&s=10"/>
          </div>

          <div>
            <small>Employer Account 🏢</small>

            <h2>Stripe, Inc.</h2>

            <p>FinTech · San Francisco, CA · 8,000+ employees</p>
          </div>
        </div>

        <div className="company-right">
          <div className="active-posts">
            <h2>4</h2>

            <span>Active Posts</span>
          </div>

          <button>
            <FaPlus />
            Post a Job
          </button>
        </div>
      </div>

      {/* Stats */}

      <div className="employee-stats-grid">
        {stats.map((item, index) => (
          <div className="employee-stat-card" key={index}>
            <div className="employee-stat-icon" style={{ color: item.color }}>
              {item.icon}
            </div>
            <div className="employee-card-details">
              <h2>{item.value}</h2>
              <h4>{item.title}</h4>
              <p>{item.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom */}

      <div className="bottom-section">
        {/* Jobs */}

        <div className="employer-jobs-card">
          <div className="employer-section-header">
            <h3>Active Job Posts</h3>
            <button>
              <FaPlus />
              New Post
            </button>
          </div>

          {jobs.map((job, index) => (
            <div className="job-row" key={index}>
              <div className="job-left">
                <div
                  className="job-icon"
                  style={{
                    background: job.iconColor,
                  }}
                >
                  <FaBriefcase />
                </div>

                <div>
                  <h4>{job.title}</h4>

                  <p>{job.posted}</p>
                </div>
              </div>

              <div className="job-right">
                <h3>{job.applicants}</h3>

                <small>Applicants</small>
              </div>

              <div className="status-area">
                <span className={job.status === "Paused" ? "paused" : "active"}>
                  {job.status}
                </span>

                <small>{job.today}</small>
              </div>
            </div>
          ))}
        </div>

        {/* Funnel */}

        <div className="funnel-card">
          <h3>Hiring Funnel</h3>

          <p>Senior Frontend Engineer</p>

          <div className="chart">
            {funnel.map((item, index) => (
              <div className="bar-box" key={index}>
                <span>{item.value}</span>

                <div
                  className="bar"
                  style={{
                    height: item.height,
                    background: item.color,
                  }}
                />

                <small>{item.stage}</small>
              </div>
            ))}
          </div>

          <div className="legend">
            {funnel.map((item, index) => (
              <div className="legend-item" key={index}>
                <div
                  className="dot"
                  style={{
                    background: item.color,
                  }}
                />

                <span>{item.stage}</span>

                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="candidate-section">
        <div className="candidate-header">
          <h2>✨ AI-Ranked Top Candidates</h2>

          <span>Ranked by FuturePath AI match score</span>
        </div>

        <div className="candidate-grid">
          {candidates.map((candidate, index) => (
            <div className="candidate-card" key={index}>
              <div className="candidate-top">
                <img src={candidate.img} alt={candidate.name} />

                <div>
                  <h4>{candidate.name}</h4>

                  <small>{candidate.role}</small>
                </div>
              </div>

              <div className="skill-tags">
                {candidate.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>

              <div className="candidate-status">
                <span className="match">{candidate.match} match</span>

                <span className="status-text">{candidate.status}</span>
              </div>

              <div className="candidate-actions">
                <button className="advance-btn"><AiOutlineLike/> Advance</button>

                <button className="message-btn"><FiMessageSquare/> Message</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="insight-grid">
        {insights.map((item, index) => (
          <div className="insight-card" key={index}>
            <div className="insight-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
