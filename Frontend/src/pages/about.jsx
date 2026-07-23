import React from "react";
import "./about.css";
import {
  Sparkles,
  Globe,
  Shield,
  Target,
  Users,
  
} from "lucide-react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

import member1 from "../assets/image1.png";
import member2 from "../assets/image2.png";
import member3 from "../assets/image5.png";
import member4 from "../assets/image3.png";

const team = [
  {
    image: member1,
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    desc: "Former Head of AI at LinkedIn. Stanford CS PhD.",
  },
  {
    image: member2,
    name: "James Okafor",
    role: "CTO & Co-Founder",
    desc: "Built recruiting systems at Google for 8 years. MIT graduate.",
  },
  {
    image: member3,
    name: "Anika Mehta",
    role: "VP of Product",
    desc: "Led product at Hired and Glassdoor. Design-first thinker.",
  },
  {
    image: member4,
    name: "David Park",
    role: "Head of AI Research",
    desc: "PhD in NLP from Carnegie Mellon. Ex-OpenAI researcher.",
  },
];

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="overlay"></div>

      <div className="about-content">
        <span className="story-badge">
          ✨ Our Story
        </span>

        <h1>
          We believe everyone deserves
          <br />
          <span>work they love</span>
        </h1>

        <p>
          FuturePath was founded in 2022 with a single mission: use AI to remove
          the friction between talented people and the opportunities they
          deserve.
        </p>
      </div>

      <div className="aboutstats-container">
        <div className="aboutstat-card">
          <h2>2022</h2>
          <p>Founded</p>
        </div>

        <div className="aboutstat-card">
          <h2>100K+</h2>
          <p>Placements Made</p>
        </div>

        <div className="aboutstat-card">
          <h2>48</h2>
          <p>Countries Reached</p>
        </div>

        <div className="aboutstat-card">
          <h2>4.9★</h2>
          <p>App Store Rating</p>
        </div>
      </div>

      <div className="missionsection">
        <div className="mission-left">

            <div className="mission-badge">
            <Target size={18} />
            <span>Our Mission</span>
            </div>

            <h2>
            The hiring process is broken.
            <br />
            We're fixing it with AI.
            </h2>

            <p>
            Traditional job boards dump thousands of irrelevant listings on
            candidates and pray something sticks. Recruiters sort through
            mountains of unqualified applications. Both sides waste months.
            </p>

            <p>
            FuturePath uses state-of-the-art AI to understand what candidates are
            actually capable of — not just what keywords appear on their resume —
            and match them with roles where they'll genuinely thrive.
            </p>

            <p>
            The result: employers fill roles 60% faster. Candidates land jobs
            with 40% higher starting salaries. Everyone wins.
            </p>

        </div>

        <div className="mission-right">

            <div className="mission-card">
            <div className="icon">
                <Sparkles size={26} />
            </div>

            <h3>AI-First</h3>

            <p>
                We believe AI should augment human potential, not replace it.
                Every feature starts with the question: does this genuinely help
                people find better work?
            </p>
            </div>

            <div className="mission-card">
            <div className="icon">
                <Users size={26} />
            </div>

            <h3>Candidate-Centered</h3>

            <p>
                Job seekers aren't widgets — they're people with aspirations. We
                design every experience around their dignity and success.
            </p>
            </div>

            <div className="mission-card">
            <div className="icon">
                <Globe size={26} />
            </div>

            <h3>Globally Inclusive</h3>

            <p>
                Great talent exists everywhere. We're building tools that make
                world-class careers accessible regardless of geography.
            </p>
            </div>

            <div className="mission-card">
            <div className="icon">
                <Shield size={26} />
            </div>

            <h3>Privacy by Default</h3>

            <p>
                Your data belongs to you. We never sell candidate information and
                apply privacy-preserving design to every product decision.
            </p>
            </div>

        </div>
    </div>

    <div className="team-section">

      <div className="team-header">

        <div className="team-badge">
          <Users size={18} />
          <span>The Team</span>
        </div>

        <h2>Built by people who've been there</h2>

      </div>

      <div className="team-grid">

        {team.map((member, index) => (
          <div className="team-card" key={index}>

            <img
              src={member.image}
              alt={member.name}
              className="team-image"
            />

            <h3>{member.name}</h3>

            <h4>{member.role}</h4>

            <p>{member.desc}</p>

            <div className="team-socials">
              <a href="#">
                <FaLinkedin/>
              </a>

              <a href="#">
                <FaTwitter/>
              </a>
            </div>

          </div>
        ))}

      </div>
    </div>
    <div className="join-section">
  <div className="join-card">

    <h2>Join the FuturePath team</h2>

    <p>
      We're a team of 60+ people across SF, London, and Singapore.
      We're hiring across engineering, design, and growth.
    </p>

    <button className="join-btn">
      View Open Positions
    </button>

  </div>
</div>
    
    </section>

  );
};

export default AboutSection;
