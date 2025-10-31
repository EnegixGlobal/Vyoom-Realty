import React from "react";
import "../styles/BenefitsSection.css";
import Design14 from "../assets/images/design-14.jpg";
import Design15 from "../assets/images/design-15.jpg";

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-container" aria-label="Benefits of Mission SHG">
        {/* Left Side - Images */}
        <div className="benefits-left">
          <div className="image-stack">
            <img
              src={Design14}
              alt="Mission SHG community engagement"
              className="stack-image"
              loading="lazy"
              decoding="async"
            />
            <img
              src={Design15}
              alt="Mission SHG development initiatives"
              className="stack-image"
              loading="lazy"
              decoding="async"
            />
          </div>
          <a
            href="#mission-shg"
            className="join-btn-left"
          >
            Join MISSION SHG
          </a>
        </div>
        

        {/* Right Side - Text */}
        <div className="benefits-right" id="mission-shg">
          <span className="subtitle">MISSION SHG</span>
          <h1 className="title">Benefits of Joining MISSION SHG</h1>
          <p className="motto">
            <strong>
              Our Moto “Together, we can build a stronger, self-sufficient and
              great Nation”
            </strong>
          </p>

          <h2 className="focus-title">Our Focus Areas :</h2>
          <ul className="focus-list">
            <li>Affordable Housing / Plot Purchase Facility on Installments</li>
            <li>Employment Opportunity under Sultan E-Drive</li>
            <li>Access to Microfinance and Interest-Free Loans</li>
            <li>Skill Development and Vocational Training</li>
            <li>
              Support for Starting and Growing Small and Medium Businesses
            </li>
            <li>Improved Financial Literacy and Independence</li>
            <li>
              A Strong Network of Like-Minded Individuals for Mutual Support
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
