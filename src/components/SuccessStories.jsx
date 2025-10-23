import React from "react";
import "../styles/SuccessStories.css";

const SuccessStories = () => {
  return (
    <section className="success-stories">
      <div className="content">
        <h4 className="mission-subtitle">MISSION SHG</h4>
        <h2 className="title">SUCCESS STORIES</h2>
        <p className="description">
          We have empowered thousands of rural and urban Members of Self Help
          Groups who unanimously came together to support each other financially
          and socially, by helping them achieve economic self-sufficiency
          through SHG’s. Thousands of our members have successfully obtained
          residential plots/houses from various projects like Tipu Town, Planet
          T, Tipu Sultan Residency, Hyder Ali Town, Ajmer Nagar, Mysore Simha
          City, etc. and have become successful entrepreneurs by starting
          businesses in{" "}
          <strong>
            agriculture, handicrafts, tailoring, marketing, food processing, and
            more
          </strong>
          , significantly improving their quality of life through mutual trust,
          pooled savings, interest-free micro lending mechanism and achieved
          financial independence.
        </p>

        <div className="cta-container">
          <a href="#contact" className="cta-btn">
            Join Us, Secure Your Future & Transform Lives
          </a>
        </div>

        <p className="footer-text">
          Empower yourself with financial security, educational aid, and
          lifestyle benefits. Become a valued member today. Tipu Sultan Trust
          India is here to guide you every step of the way.{" "}
          <strong>For more details, contact us now.</strong>
        </p>
      </div>
    </section>
  );
};

export default SuccessStories;
