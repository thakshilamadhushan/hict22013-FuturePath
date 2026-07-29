import "./jobseekerDashboard.css";
import {
  FaRegFileAlt,
  FaCalendarAlt,
  FaAward,
  FaEye,
  FaSearch,
  FaChevronRight,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaRegFileAlt />,
    number: 24,
    title: "Applications",
    sub: "+3 this week",
    color: "#5b4dff",
  },
  {
    icon: <FaCalendarAlt />,
    number: 6,
    title: "Interviews",
    sub: "2 upcoming",
    color: "#8b5cf6",
  },
  {
    icon: <FaAward />,
    number: 2,
    title: "Offers",
    sub: "1 pending review",
    color: "#16a34a",
  },
  {
    icon: <FaEye />,
    number: 318,
    title: "Profile Views",
    sub: "+47 this week",
    color: "#2563eb",
  },
];

const applications = [
  {
    logo: "S",
    color: "#7c3aed",
    company: "Stripe",
    title: "Senior Frontend Engineer",
    applied: "Applied Jan 28",
    match: "97%",
    status: "Interview",
    statusColor: "#2563eb",
  },
  {
    logo: "D",
    color: "#4338ca",
    company: "DeepMind",
    title: "AI / ML Research Engineer",
    applied: "Applied Jan 25",
    match: "91%",
    status: "Applied",
    statusColor: "#64748b",
  },
  {
    logo: "F",
    color: "#ec4899",
    company: "Figma",
    title: "Product Designer",
    applied: "Applied Jan 20",
    match: "89%",
    status: "Offer",
    statusColor: "#16a34a",
  },
  {
    logo: "Ap",
    color: "#1f2937",
    company: "Apple",
    title: "iOS Engineer",
    applied: "Applied Jan 18",
    match: "88%",
    status: "Screening",
    statusColor: "#f59e0b",
  },
  {
    logo: "Sp",
    color: "#16a34a",
    company: "Spotify",
    title: "Data Scientist",
    applied: "Applied Jan 12",
    match: "81%",
    status: "Rejected",
    statusColor: "#ef4444",
  },
];

const interviews = [
  {
    logo: "S",
    color: "#7c3aed",
    title: "Sr. Frontend Eng.",
    company: "Stripe",
    date: "Feb 3",
    time: "10:00 AM",
    type: "Technical",
  },
  {
    logo: "A",
    color: "#1e293b",
    title: "iOS Engineer",
    company: "Apple",
    date: "Feb 6",
    time: "2:00 PM",
    type: "HR Screen",
  },
  {
    logo: "F",
    color: "#ec4899",
    title: "Product Designer",
    company: "Figma",
    date: "Feb 10",
    time: "11:30 AM",
    type: "Final Round",
  },
];

const recommendations = [
  {
    logo: "S",
    color: "#7c3aed",
    title: "Senior Frontend Engineer",
    company: "Stripe",
    salary: "$130K - $180K",
    match: "97%",
  },
  {
    logo: "D",
    color: "#4338ca",
    title: "AI / ML Research Engineer",
    company: "DeepMind",
    salary: "$160K - $220K",
    match: "91%",
  },
  {
    logo: "F",
    color: "#ec4899",
    title: "Product Designer",
    company: "Figma",
    salary: "$110K - $150K",
    match: "89%",
  },
  {
    logo: "SN",
    color: "#2563eb",
    title: "Data Platform Engineer",
    company: "Snowflake",
    salary: "$145K - $195K",
    match: "85%",
  },
];

const skills = [
  {
    name: "TypeScript",
    level: 90,
    required: 95,
    color: "#fbbf24",
    gap: "-5pts gap",
  },
  {
    name: "System Design",
    level: 62,
    required: 85,
    color: "#fb7185",
    gap: "-23pts gap",
  },
  {
    name: "GraphQL",
    level: 70,
    required: 80,
    color: "#f59e0b",
    gap: "-10pts gap",
  },
  {
    name: "AWS",
    level: 55,
    required: 80,
    color: "#ef4444",
    gap: "-25pts gap",
  },
  {
    name: "Python",
    level: 78,
    required: 78,
    color: "#10b981",
    gap: "✓ Met",
  },
];

const pipeline = [
  {
    number: 24,
    title: "Applied",
    color: "#d1d5db",
  },
  {
    number: 12,
    title: "Screening",
    color: "#fbbf24",
  },
  {
    number: 6,
    title: "Interview",
    color: "#3b82f6",
  },
  {
    number: 2,
    title: "Offer",
    color: "#8b5cf6",
  },
  {
    number: 1,
    title: "Hired",
    color: "#10b981",
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Header */}

      <div className="top-header">
        <div>
          <h1>Job Seeker Dashboard</h1>
          <p>Track your job search, applications and AI insights.</p>
        </div>
      </div>

      {/* Welcome */}
      <div className="welcome-card">
        <div className="welcome-left">
          <img src="https://i.pravatar.cc/150?img=12" alt="" />

          <div>
            <small>Good Morning 👋</small>

            <h2>Alex Johnson</h2>

            <p>Senior Frontend Engineer · San Francisco, CA</p>
          </div>
        </div>

        <div className="welcome-right">
          <div className="progress-ring">
            <svg width="70" height="70">
              <circle
                cx="35"
                cy="35"
                r="28"
                stroke="#8b5cf6"
                strokeWidth="8"
                fill="none"
              />

              <circle
                cx="35"
                cy="35"
                r="28"
                stroke="white"
                strokeWidth="8"
                fill="none"
                strokeDasharray="176"
                strokeDashoffset="32"
                strokeLinecap="round"
                transform="rotate(-90 35 35)"
              />
            </svg>

            <span>82%</span>

            <p className="profiletag">Profile</p>
          </div>

          <button>
            <FaSearch />
            Browse Jobs
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="jobseeker-stats-grid">
        {stats.map((item, index) => (
          <div className="jobseeker-stat-card" key={index}>
            <div className="jobseeker-card-icon" style={{ color: item.color }}>
              {item.icon}
            </div>
            <div className="jobseeker-card-details">
              <h2>{item.number}</h2>
              <h4>{item.title}</h4>
              <p>{item.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="bottom-grid">
        {/* Applications */}

        <div className="applications">
          <div className="section-title">
            <h3>My Applications</h3>

            <button>
              Find more
              <FaChevronRight />
            </button>
          </div>

          {applications.map((job, index) => (
            <div className="job-item" key={index}>
              <div className="job-left">
                <div
                  className="logo"
                  style={{
                    background: job.color,
                  }}
                >
                  {job.logo}
                </div>

                <div>
                  <h4>{job.title}</h4>

                  <p>
                    {job.company} • {job.applied}
                  </p>
                </div>
              </div>

              <div className="job-right">
                <span className="match">{job.match} match</span>

                <span
                  className="status"
                  style={{
                    background: job.statusColor,
                  }}
                >
                  {job.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interviews */}

        <div className="interviews">
          <h3>Upcoming Interviews</h3>

          {interviews.map((item, index) => (
            <div className="interview-item" key={index}>
              <div className="job-left">
                <div
                  className="logo"
                  style={{
                    background: item.color,
                  }}
                >
                  {item.logo}
                </div>

                <div>
                  <h4>{item.title}</h4>

                  <p>{item.company}</p>
                </div>
              </div>

              <div className="schedule">
                <strong>{item.date}</strong>

                <small>{item.time}</small>

                <span>{item.type}</span>
              </div>
            </div>
          ))}

          <div className="next-interview">
            🔔 Next interview in <strong>4 days</strong>
            <br />
            Stripe Technical Round
          </div>
        </div>
      </div>

      <div className="extra-grid">
        {/* AI Recommendation */}
        <div className="recommend-card">
          <div className="section-title">
            <h3>✨ AI Recommendations</h3>

            <button>See all</button>
          </div>

          {recommendations.map((job, index) => (
            <div className="recommend-item" key={index}>
              <div className="job-left">
                <div className="logo" style={{ background: job.color }}>
                  {job.logo}
                </div>

                <div>
                  <h4>{job.title}</h4>

                  <p>
                    {job.company} • {job.salary}
                  </p>
                </div>
              </div>

              <div className="job-right">
                <span className="match">{job.match} match</span>

                <div className="bolt">⚡</div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Analysis */}
        <div className="skills-card">
          <h3>🎯 Skill Gap Analysis</h3>

          <p className="sub">vs. top job requirements in your field</p>

          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <div className="skill-head">
                <span>{skill.name}</span>

                <span>{skill.gap}</span>
              </div>

              <div className="progress">
                <div
                  className="progress-fill"
                  style={{
                    width: `${skill.level}%`,
                    background: skill.color,
                  }}
                />
              </div>

              <div className="skill-footer">
                <small>Your level: {skill.level}</small>

                <small>Required: {skill.required}</small>
              </div>
            </div>
          ))}

          {/*<button className="resource-btn">📖 View Learning Resources</button>*/}
        </div>
      </div>

      {/* Pipeline */}
      <div className="pipeline-card">
        <h3>📈 Application Pipeline</h3>

        <div className="pipeline-grid">
          {pipeline.map((item, index) => (
            <div className="pipe-item" key={index}>
              <h2>{item.number}</h2>

              <div
                className="pipe-icon"
                style={{
                  background: item.color,
                }}
              />

              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
