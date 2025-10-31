// import React, { useState } from "react";
// import "../styles/Services.css";

// // Card Component
// const Card = ({ image, title, count }) => {
//   return (
//     <div className="card">
//       <img src={image} alt={title} className="card-image" />
//       <div className="card-overlay">
//         <div className="card-title">{title}</div>
//       </div>
//       <div className="card-hover-overlay">
//         <div className="card-count">{count}</div>
//         <div className="card-hover-bottom">
//           <div className="card-hover-title">{title}</div>
//           <div className="card-hover-subtitle">WHAT WE DO</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Component
// const ServicesSection = () => {
// const cards = [
//   {
//     id: 1,
//     title: "Commercial Plots",
//     count: "01",
//     image:
//       "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80", // commercial area aerial
//   },
//   {
//     id: 2,
//     title: "Malls",
//     count: "02",
//     image:
//       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/4a/73/5e/caption.jpg?w=500&h=500&s=1", // shopping mall interior
//   },
//   {
//     id: 3,
//     title: "Retail",
//     count: "03",
//     image:
//       "https://images.unsplash.com/photo-1506617420156-8e4536971650?w=800&q=80", // retail store front
//   },
//   {
//     id: 4,
//     title: "Residential",
//     count: "04",
//     image:
//       "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80", // modern house
//   },
//   {
//     id: 5,
//     title: "Farm Houses",
//     count: "05",
//     image:
//       "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80", // farmhouse
//   },
// ];



//   return (
//     <>
//       <div className="mission-section">
//         <div className="container">
//           <div className="mission-header">
//             <div className="mission-label">OUR SERVICES</div>
//             <h1 className="mission-title">
//               VYOOM's mission to empower
//               <br />
//               communities through education,
//               <br />
//               employment, and{" "}
//               <span className="highlight">
//                 sustainable
//                 <br />
//                 development
//               </span>
//             </h1>
//             <div className="founder-info">
//               <div className="founder-name">SALMA SIDDIQA</div>
//               <div className="founder-title">Founder & Chairperson</div>
//               <div className="company-name">VYOOM</div>
//             </div>
//           </div>

//           <div className="cards-grid">
//             {cards.map((card) => (
//               <Card
//                 key={card.id}
//                 image={card.image}
//                 title={card.title}
//                 count={card.count}
//               />
//             ))}
//           </div>

//           <div className="read-more-container">
//             <button className="read-more-btn">Read More</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ServicesSection;



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