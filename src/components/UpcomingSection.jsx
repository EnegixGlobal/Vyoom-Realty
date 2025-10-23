import React from "react";
import "../styles/UpcomingSection.css";
import img1 from "../assets/images/image-18.png"
import img2 from "../assets/images/image-21.png"
import img3 from "../assets/images/image-23.png"

const ResidentialSection = () => {
  const properties = [
    {
      id: 1,
      image: img1,
      title: "4 bedroom / 2 baths",
      subtitle: "Upcoming",
      location: "Tipu Town Mysore",
    },
    {
      id: 2,
      image: img2,
      title: "3 bedroom / 2 baths",
      subtitle: "Spaces",
      location: "Tipu Town Mysore",
    },
    {
      id: 3,
      image: img3,
      title: "2 bedroom / 1 bath",
      subtitle: "Spaces",
      location: "Tipu Town Mysore",
    },
  ];

  return (
    <section className="upcoming-section">
      <div className="upcoming-container">
        <div className="upcoming-header">
          <p className="upcoming-subtitle">OUR PROPERTIES</p>
          <h2 className="upcoming-title">Upcoming Residential Plots</h2>
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
