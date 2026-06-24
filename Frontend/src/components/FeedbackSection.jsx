import React from "react";
import "./FeedbackSection.css";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Senior Software Engineer @ Stripe",
    image: "https://i.pravatar.cc/100?img=5",
    review:
      "FuturePath's AI matched me to a role I hadn't even considered. The CV analysis pointed out gaps I fixed in two weeks — then I got three offers.",
  },
  {
    id: 2,
    name: "Marcus Webb",
    role: "Data Scientist @ DeepMind",
    image: "https://i.pravatar.cc/100?img=12",
    review:
      "The salary insight dashboard alone saved me $30K in negotiations. I knew exactly what to ask for and why. This platform is genuinely different.",
  },
  {
    id: 3,
    name: "Sophie Laurent",
    role: "Product Designer @ Figma",
    image: "https://i.pravatar.cc/100?img=32",
    review:
      "Within two weeks of uploading my portfolio, I had four interviews scheduled. The match score feature helped me focus only on the best fits.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="badge">💬 Success Stories</span>

          <h2>Careers transformed by FuturePath</h2>

          <p>Real people. Real results. Real jobs they love.</p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>
              <div className="stars">★★★★★</div>

              <p className="review">“{item.review}”</p>

              <div className="user">
                <img src={item.image} alt={item.name} />

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;