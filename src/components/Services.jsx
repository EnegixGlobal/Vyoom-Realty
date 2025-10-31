import React from "react";
import "../styles/Services.css";

const Services = () => {
const services = [
  {
    id: 1,
    image:
      "https://estimatorflorida.com/wp-content/uploads/2022/03/how-to-build-a-commercial-building.jpg",
    title: "COMMERCIAL DESIGN", // modern office interior
  },
  {
    id: 2,
    image:
      "https://www.stonelam.com/wp-content/uploads/2025/02/The-Mall-of-Ranchi-A-Dream-Realized-in-Timeless-Facade-Design.jpg",
    title: "MALLS ", // shopping mall atrium design
  },
  {
    id: 3,
    image:
      "https://www.iointeriors.in/assets/img/the-perfect-boutique-retail-interior-design-for-small-fashion-businesses.webp",
    title: "RETAIL DESIGN", // modern store front
  },
  {
    id: 4,
    image:
      "https://vastuhouse.in/wp-content/uploads/2023/08/Residential-architects-in-Pune.jpg",
    title: "RESIDENTIAL ", // stylish living room
  },
  {
    id: 5,
    image:
      "https://cdn.decoist.com/wp-content/uploads/2019/03/Farm-house-in-Western-Australia-with-modern-rustic-vibe.jpg",
    title: "FARM HOUSES", // farmhouse exterior
  },
  {
    id: 6,
    image:
      "https://images.squarespace-cdn.com/content/v1/5edbbcf3253cf824ff6fd101/1747137773054-EP8UM8CO4UCBJSEU7RMT/screenshot-2022-02-24-at-16-56-14.png",
    title: "HOSPITALITY DESIGN", // modern interior lighting design
  },
];



  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">SERVICES</h2>
          <p className="services-description">
            At Vyoom, we offer a wide range of architectural and interior design
            services that blend creativity, functionality, and innovation. From
            commercial, mall, and retail designs that enhance efficiency and
            appeal, to residential and farmhouse projects that exude comfort and
            elegance — every creation reflects our commitment to excellence. Our
            hospitality designs redefine luxury through ambiance and spatial
            harmony, crafting environments that are both visually striking and
            deeply human in purpose.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
                <div className="service-overlay"></div>
                <h3 className="service-title">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;