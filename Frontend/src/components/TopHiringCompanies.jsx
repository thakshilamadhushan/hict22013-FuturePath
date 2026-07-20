import { useState } from "react";
import { Search, Star, ArrowRight, Building2 } from "lucide-react";
import "./TopHiringCompanies.css";

const companies = [
  {
    name: "Google",
    industry: "Technology",
    jobs: 342,
    employees: "150,000+",
    rating: 4.8,
    color: "#4285F4",
  },
  {
    name: "Microsoft",
    industry: "Technology",
    jobs: 218,
    employees: "220,000+",
    rating: 4.6,
    color: "#5B4FE9",
  },
  {
    name: "Amazon",
    industry: "E-Commerce & Cloud",
    jobs: 507,
    employees: "1,500,000+",
    rating: 4.4,
    color: "#FF9900",
  },
  {
    name: "Meta",
    industry: "Social Media",
    jobs: 165,
    employees: "86,000+",
    rating: 4.3,
    color: "#1877F2",
  },
  {
    name: "Apple",
    industry: "Consumer Tech",
    jobs: 289,
    employees: "164,000+",
    rating: 4.7,
    color: "#111827",
  },
  {
    name: "Salesforce",
    industry: "CRM & SaaS",
    jobs: 143,
    employees: "79,000+",
    rating: 4.5,
    color: "#00A1E0",
  },
];

function StarRating({ rating }) {
  return (
    <div className="thc-stars">
      <div className="thc-stars-icons">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`thc-star ${i < Math.round(rating) ? "filled" : ""}`}
          />
        ))}
      </div>
      <span className="thc-stars-text">{rating.toFixed(1)} / 5.0</span>
    </div>
  );
}

export default function TopHiringCompanies() {
  const [search, setSearch] = useState("");

  const query = search.trim().toLowerCase();

  const filtered = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(query) ||
      company.industry.toLowerCase().includes(query)
  );

  return (
    <section className="thc-section">
      <div className="thc-container">

        {/* Header */}
        <div className="thc-header">
          <div className="thc-badge">
            <Building2 size={16} />
            Company Directory
          </div>

          <h1 className="thc-title">Top Hiring Companies</h1>

          <p className="thc-subtitle">
            Explore top companies actively recruiting talented professionals through FuturePath.
          </p>
        </div>

        {/* Search */}
        <div className="thc-search-wrap">
          <div className="thc-search-inner">
            <Search size={22} className="thc-search-icon" />
            <input
              type="text"
              aria-label="Search companies or industries"
              placeholder="Search companies or industries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="thc-search-input"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="thc-grid">
          {filtered.map((company) => (
            <div key={company.name} className="thc-card">
              <div className="thc-card-head">
                <div className="thc-card-logo" style={{ backgroundColor: company.color }}>
                  {company.name.charAt(0) || "?"}
                </div>

                <div>
                  <h3 className="thc-card-name">{company.name}</h3>
                  <p className="thc-card-industry">{company.industry}</p>
                </div>
              </div>

              <div className="thc-stats">
                <div className="thc-stat">
                  <div className="thc-stat-value">{company.jobs}</div>
                  <div className="thc-stat-label">Open Jobs</div>
                </div>

                <div className="thc-stat">
                  <div className="thc-stat-value">{company.employees}</div>
                  <div className="thc-stat-label">Employees</div>
                </div>

                <div className="thc-stat">
                  <div className="thc-stat-value">{company.rating.toFixed(1)}</div>
                  <div className="thc-stat-label">Rating</div>
                </div>
              </div>

              <StarRating rating={company.rating} />

              <button className="thc-card-btn">
                View Open Roles
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="thc-empty">No companies found.</div>
        )}
      </div>
    </section>
  );
}