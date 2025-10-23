import React from "react";
import "../styles/AffordableSection.css";

const AffordableSection = () => {
  return (
    <section className="affordable-section">
      <div className="afcontainer">
        {/* Left Column - Image */}
        <div className="column left-column">
          <div className="image-wrapper">
            <img
              src="https://mediumpurple-marten-843600.hostingersite.com/wp-content/uploads/2025/03/Untitled-design-2025-03-13T113810.377.png"
              alt="Affordable Housing"
              className="hero-image"
            />
            <h3 className="image-heading">We Make Dreams Come True</h3>
          </div>
        </div>

        {/* Right Column - Text */}
        <div className="column right-column">
          <div className="text-content">
            <span className="subtitle">Modern architecture</span>
            <h1 className="title">Affordable Rural Housing</h1>
            <p className="description">
              KCDF turning dreams of millions of owning a house into reality, by
              providing affordable residential plots and interest-free loans for
              plots and house construction.
            </p>

            {/* Features */}
            <div className="features">
              <div className="feature">
                <span className="feature-number">01.</span>
                <span className="feature-text">Residential Plots</span>
              </div>
              <div className="divider"></div>
              <div className="feature">
                <span className="feature-number">02.</span>
                <span className="feature-text">Home Construction</span>
              </div>
            </div>

            <a href="/about-us" className="btn-affordable">
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffordableSection;
