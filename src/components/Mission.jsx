import React, { useState } from "react";
import "../styles/Mission.css";

// Card Component
const Card = ({ image, title, count }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-overlay">
        <div className="card-title">{title}</div>
      </div>
      <div className="card-hover-overlay">
        <div className="card-count">{count}</div>
        <div className="card-hover-bottom">
          <div className="card-hover-title">{title}</div>
          <div className="card-hover-subtitle">WHAT WE DO</div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const MissionSection = () => {
  const cards = [
    {
      id: 1,
      title: "Residential Plots",
      count: "01",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
    {
      id: 2,
      title: "Scholarship for Education",
      count: "02",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    },
    {
      id: 3,
      title: "Interest Free Loans",
      count: "03",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    },
    {
      id: 4,
      title: "Insurance and others",
      count: "04",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    },
  ];

  return (
    <>
      <div className="mission-section">
        <div className="container">
          <div className="mission-header">
            <div className="mission-label">OUR MISSION</div>
            <h1 className="mission-title">
              VYOOM's mission to empower
              <br />
              communities through education,
              <br />
              employment, and{" "}
              <span className="highlight">
                sustainable
                <br />
                development
              </span>
            </h1>
            <div className="founder-info">
              <div className="founder-name">SALMA SIDDIQA</div>
              <div className="founder-title">Founder & Chairperson</div>
              <div className="company-name">VYOOM</div>
            </div>
          </div>

          <div className="cards-grid">
            {cards.map((card) => (
              <Card
                key={card.id}
                image={card.image}
                title={card.title}
                count={card.count}
              />
            ))}
          </div>

          <div className="read-more-container">
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionSection;
