import React from "react";
import "../styles/ResidentialSection.css";
import img1 from "../assets/images/image-61.jpg"
import img2 from "../assets/images/image-62.jpg"
import img3 from "../assets/images/image-63.jpg"

const ResidentialSection = () => {
  const properties = [
    {
      id: 1,
      image: img1,
      title: "Modern minimalist",
      subtitle: "Spaces",
      type: "Plots",
      area: "20 x 30",
      location: "Tipu Town Mysore",
    },
    {
      id: 2,
      image: img2,
      title: "Suburban loft",
      subtitle: "Spaces",
      type: "Plots",
      area: "30 x 40",
      location: "Tipu Town Mysore",
    },
    {
      id: 3,
      image: img3,
      title: "Industrial-chic",
      subtitle: "Spaces",
      type: "Constructed House",
      area: "2900 sq ft",
      location: "Tipu Town Mysore",
    },
  ];

  return (
    <section className="residential-section">
      <div className="residential-container">
        <div className="residential-header">
          <p className="residential-subtitle">OUR PROPERTIES</p>
          <h2 className="residential-title">Available Residential Plots</h2>
        </div>

        <div className="properties-grid">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <div className="property-image-wrapper">
                <img
                  src={property.image}
                  alt={property.title}
                  className="property-image"
                />
              </div>
              <div className="property-content">
                <h3 className="property-title">{property.title}</h3>
                <p className="property-subtitle">{property.subtitle}</p>
                <div className="property-details">
                  <div className="detail-row">
                    <span className="detail-label">Type</span>
                    <span className="detail-value">{property.type}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Area</span>
                    <span className="detail-value">{property.area}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Location</span>
                    <span className="detail-value">{property.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResidentialSection;
