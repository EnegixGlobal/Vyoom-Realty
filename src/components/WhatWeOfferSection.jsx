import React from "react";
import "../styles/WhatWeOfferSection.css";
import { MapPin, IdCard, Home, BookOpen } from "lucide-react";

const WhatWeOfferSection = () => {
  const offerings = [
    {
      id: 1,
      icon: <MapPin size={48} />,
      title: "Residential Plots",
      description: ["20X30 Residential Plot", "30X40 Residential Plot"],
    },
    {
      id: 2,
      icon: <IdCard size={48} />,
      title: "Interest Free Loan",
      description: [
        "Interest free loan from 50,000/- to 100,000/- after obtaining allotment letter",
      ],
    },
    {
      id: 3,
      icon: <Home size={48} />,
      title: "Construction Loan",
      description: [
        "Construction loan from 500,000/- to 10,00,000/- after registration process",
      ],
    },
    {
      id: 4,
      icon: <BookOpen size={48} />,
      title: "Education Aid & Scholarships",
      description: ["Education Aid & Scholarships"],
    },
  ];

  return (
    <section className="what-we-offer-section mt-20">
      <div className="what-we-offer-container">
        <div className="left-content">
          <p className="section-subtitle">WHAT WE OFFER</p>
          <h2 className="section-title">MISSION SHG</h2>
          <p className="mission-description">
            MISSION SHG for promoting affordable rural housing and agricultural
            land development through members, SHG Groups, private land owners/
            developers for Economically weak section, Low Income Group and
            Middle Income Group category with Non-Profit motive only for the
            members of SHG's but not public.
          </p>
        </div>

        <div className="right-content">
          <div className="offerings-grid">
            {offerings.map((offering) => (
              <div key={offering.id} className="offering-card">
                <div className="offering-icon">{offering.icon}</div>
                <h3 className="offering-title">{offering.title}</h3>
                {offering.description.map((desc, index) => (
                  <p key={index} className="offering-description">
                    {desc}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
