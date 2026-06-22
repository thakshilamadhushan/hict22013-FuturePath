import { useState } from "react";
import "./BrowseByIndustry.css";

const industries = [
  {
    id: 1,
    name: "Software Dev",
    jobs: "12,400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    iconBg: "#EEF2FF",
    iconColor: "#6366F1",
  },
  {
    id: 2,
    name: "Data Science",
    jobs: "5,200",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    iconBg: "#EFF6FF",
    iconColor: "#3B82F6",
  },
  {
    id: 3,
    name: "UI/UX Design",
    jobs: "3,800",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
    iconBg: "#FDF4FF",
    iconColor: "#A855F7",
  },
  {
    id: 4,
    name: "Marketing",
    jobs: "4,100",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    iconBg: "#FFF0F6",
    iconColor: "#EC4899",
  },
  {
    id: 5,
    name: "Finance",
    jobs: "6,700",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    iconBg: "#ECFDF5",
    iconColor: "#10B981",
  },
  {
    id: 6,
    name: "Cybersecurity",
    jobs: "2,900",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    iconBg: "#FFF5F5",
    iconColor: "#EF4444",
  },
  {
    id: 7,
    name: "Networking",
    jobs: "1,800",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    iconBg: "#ECFDF5",
    iconColor: "#14B8A6",
  },
  {
    id: 8,
    name: "Engineering",
    jobs: "7,300",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
    iconBg: "#FFFBEB",
    iconColor: "#F59E0B",
  },
  {
    id: 9,
    name: "Healthcare",
    jobs: "4,500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    iconBg: "#FFF0F6",
    iconColor: "#F43F5E",
  },
];

const AllFieldsCard = () => (
  <div className="industry-card all-fields-card">
    <div className="icon-wrapper all-fields-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    </div>
    <span className="card-name all-fields-name">All Fields</span>
    <span className="card-jobs all-fields-jobs">50K+ jobs</span>
  </div>
);

export default function BrowseByIndustry() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="browse-section">
      <div className="browse-header">
        <h2 className="browse-title">Browse by industry</h2>
        <a href="#" className="all-categories-link">
          All categories
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

      <div className="industry-grid">
        {industries.map((industry) => (
          <div
            key={industry.id}
            className={`industry-card${hovered === industry.id ? " hovered" : ""}`}
            onMouseEnter={() => setHovered(industry.id)}
            onMouseLeave={() => setHovered(null)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && alert(`${industry.name} clicked`)}
          >
            <div
              className="icon-wrapper"
              style={{ background: industry.iconBg, color: industry.iconColor }}
            >
              {industry.icon}
            </div>
            <span className="card-name">{industry.name}</span>
            <span className="card-jobs">{industry.jobs} jobs</span>
          </div>
        ))}

        <AllFieldsCard />
      </div>
    </section>
  );
}
