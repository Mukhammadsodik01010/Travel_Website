import React from "react";

export default function About() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p>
        Little Lemon is a small team of travel lovers dedicated to helping you
        discover great destinations tailored to your interests.
      </p>

      <h2>Our Team</h2>
      <div className="team-grid">
        <div className="team-card">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
            alt="Team member"
          />
          <h3>Samira</h3>
          <p>Product Lead — travel researcher & UX</p>
        </div>
        <div className="team-card">
          <img
            src="https://images.unsplash.com/photo-1545996124-1c2d9f6a3f6f?w=400&q=80"
            alt="Team member"
          />
          <h3>Jae</h3>
          <p>Frontend Developer — React enthusiast</p>
        </div>
        <div className="team-card">
          <img
            src="https://images.unsplash.com/photo-1547586696-8b3b1b6a4e64?w=400&q=80"
            alt="Team member"
          />
          <h3>Diego</h3>
          <p>Content & Travel Guide</p>
        </div>
      </div>
    </div>
  );
}
