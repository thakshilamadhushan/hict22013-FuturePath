import React, { useMemo, useState } from "react";
import "./findJobs.css";

const JOBS = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    company: "Stripe",
    location: "San Francisco, CA",
    type: "Remote",
    tags: ["React", "TypeScript", "GraphQL"],
    salary: "$130K - $180K",
    daysAgo: "2d",
    match: 97,
  },
  {
    id: 2,
    title: "AI/ML Research Engineer",
    company: "DeepMind",
    location: "London, UK",
    type: "Full-Time",
    tags: ["Python", "PyTorch", "LLMs"],
    salary: "$160K - $220K",
    daysAgo: "1d",
    match: 91,
  },
  {
    id: 3,
    title: "Product Designer",
    company: "Figma",
    location: "New York, NY",
    type: "Hybrid",
    tags: ["Figma", "Prototyping", "Design Systems"],
    salary: "$110K - $150K",
    daysAgo: "3d",
    match: 89,
  },
  {
    id: 4,
    title: "Backend Engineer",
    company: "Datadog",
    location: "Remote",
    type: "Remote",
    tags: ["Go", "Kubernetes", "Databases"],
    salary: "$150K - $200K",
    daysAgo: "5d",
    match: 85,
  },
  {
    id: 5,
    title: "Data Platform Engineer",
    company: "Snowflake",
    location: "Remote, USA",
    type: "Remote",
    tags: ["SQL", "dbt", "Airflow"],
    salary: "$145K - $195K",
    daysAgo: "5d",
    match: 85,
  },
  {
    id: 6,
    title: "Growth Marketing Lead",
    company: "Notion",
    location: "Austin, TX",
    type: "Full-Time",
    tags: ["SEO", "Analytics", "Content"],
    salary: "$95K – $130K",
    daysAgo: "1d",
    match: 82,
  },
  {
    id: 7,
    title: "Security Analyst",
    company: "CrowdStrike",
    location: "Remote, Global",
    type: "Part-Time",
    tags: ["SIEM", "Incident Response", "Python"],
    salary: "$120K – $160K",
    daysAgo: "4d",
    match: 78,
  },
  {
    id: 8,
    title: "iOS Engineer",
    company: "Apple",
    location: "Cupertino, CA",
    type: "Full-Time",
    tags: ["Swift", "SwiftUI", "Objective-C"],
    salary: "$150K – $200K",
    daysAgo: "6d",
    match: 88,
  },
  {
    id: 9,
    title: "DevOps Engineer",
    company: "HashiCorp",
    location: "San Francisco, CA", 
    type: "Hybrid",
    tags: ["Terraform", "Kubernetes", "AWS"], 
    salary: "$135K – $175K",
    daysAgo: "7d",
    match: 76,
  },
  {
    id: 10,
    title: "Data Scientist",
    company: "Spotify",
    location: "Stockholm, SE", 
    type: "Full-Time",
    tags: ["Python", "Spark", "ML"],  
    salary: "$118K – $155K", 
    daysAgo: "2d",
    match: 81,
  },
  {
    id: 11,
    title: "UX Researcher",
    company: "Airbnb",
    location: "Remote, USA", 
    type: "Remote",
    tags: ["User Testing", "Research", "Figma"],  
    salary: "$105K – $140K", 
    daysAgo: "4d",
    match: 79,
  },
  {
    id: 12,
    title: "Cloud Architect",
    company: "Microsoft",
    location: "Redmond, WA", 
    type: "Hybrid",
    tags: ["Azure", "Kubernetes", "Terraform"],  
    salary: "$160K – $210K", 
    daysAgo: "1d",
    match: 90,
  },
];

const FILTERS = ["All", "Full-Time", "Part-Time", "Remote", "Hybrid"];

export default function FindJobs() {
  const SHOW_MARKERS = false; // toggle red-dot edit markers
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const loc = location.trim().toLowerCase();
    return JOBS.filter((job) => {
      if (
        activeFilter !== "All" &&
        activeFilter !== job.type &&
        !(activeFilter === "Remote" && job.type === "Remote")
      ) {
        return false;
      }
      if (q) {
        const inTitle = job.title.toLowerCase().includes(q);
        const inCompany = job.company.toLowerCase().includes(q);
        const inTags = job.tags.join(" ").toLowerCase().includes(q);
        if (!inTitle && !inCompany && !inTags) return false;
      }
      if (loc) {
        if (
          !job.location.toLowerCase().includes(loc) &&
          job.location.toLowerCase() !== "remote"
        )
          return false;
      }
      return true;
    });
  }, [query, location, activeFilter]);

  return (
    <div className="find-jobs-page">
      <header className="fj-header">
        <div className="fj-badge">Job Search</div>
        <h1>Find Your Perfect Role</h1>
        <p className="fj-sub">
          AI-matched opportunities based on your profile — 12 roles available
        </p>

        <form
          className="fj-search"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="fj-search-left">
            <input
              aria-label="job search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Job title, keywords, or company..."
            />
          </div>
          <div className="fj-search-mid">
            <input
              aria-label="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City or remote..."
            />
          </div>
          <button
            className="fj-search-btn"
            onClick={() => {}}
            aria-label="Search"
          >
            Search
          </button>
        </form>
      </header>

      <section className="fj-controls">
        <div className="fj-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`fj-filter ${activeFilter === f ? "active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="fj-count">{filtered.length} jobs found</div>
      </section>

      <main className="fj-grid">
        {filtered.map((job) => (
          <article key={job.id} className="fj-card">
            <div className="fj-card-left">
              <div className="fj-avatar">{job.company[0]}</div>
            </div>
            <div className="fj-card-body">
              <h3 className="fj-title">{job.title}</h3>
              <div className="fj-company">{job.company}</div>
              <div className="fj-tags">
                {job.tags.map((t) => (
                  <span key={t} className="fj-tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="fj-meta">
                <span className="fj-location">{job.location}</span>
                <span className="fj-age">{job.daysAgo} ago</span>
              </div>
            </div>

            <div className="fj-card-footer">
              <div className="fj-footer-left">
                {SHOW_MARKERS && (
                  <span className="fj-edit-dot" title="Edit salary" />
                )}
                <div className="fj-salary">{job.salary}</div>
                {SHOW_MARKERS && (
                  <span className="fj-edit-dot" title="Edit type" />
                )}
                <div className="fj-type">{job.type}</div>
              </div>
              <div className="fj-footer-right">
                {SHOW_MARKERS && (
                  <span className="fj-edit-dot" title="Edit match" />
                )}
                <div className="fj-match">{job.match}% match</div>
                {SHOW_MARKERS && (
                  <span className="fj-edit-dot" title="Edit apply button" />
                )}
                <button className="fj-apply">Apply</button>
              </div>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
