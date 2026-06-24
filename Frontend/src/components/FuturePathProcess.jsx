import React from "react";
import "./FuturePathProcess.css";
import {
  FiUsers,
  FiUpload,
  FiStar,
  FiCheckCircle,
} from "react-icons/fi";

const steps = [
  {
    id: "01",
    icon: <FiUsers />,
    title: "Create Profile",
    description:
      "Build your professional profile with skills, experience, and career goals.",
  },
  {
    id: "02",
    icon: <FiUpload />,
    title: "Upload Your CV",
    description:
      "Let our AI parse and enrich your resume for maximum discoverability.",
  },
  {
    id: "03",
    icon: <FiStar />,
    title: "Get AI Matches",
    description:
      "Receive curated job recommendations tailored to your exact profile.",
  },
  {
    id: "04",
    icon: <FiCheckCircle />,
    title: "Apply & Get Hired",
    description:
      "One-click apply to roles, track applications, and land your next role.",
  },
];

const FuturePathProcess = () => {
  return (
    <section className="process-section">
      <div className="process-header">
        <span className="process-badge">✓ Simple Process</span>

        <h2>How FuturePath works</h2>

        <p>
          From signup to offer letter in four straightforward steps.
        </p>
      </div>

      <div className="process-timeline">
        {steps.map((step) => (
          <div className="process-card" key={step.id}>
            <div className="icon-box">{step.icon}</div>

            <span className="step-number">
              STEP {step.id}
            </span>

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FuturePathProcess;