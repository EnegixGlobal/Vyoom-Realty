import React from "react";
import "../styles/ClientLogos.css";

const clientImages = [
  "https://mediumpurple-marten-843600.hostingersite.com/wp-content/uploads/2023/06/client-20-copyright.png",
  "https://mediumpurple-marten-843600.hostingersite.com/wp-content/uploads/2023/06/client-15-copyright.png",
  "https://mediumpurple-marten-843600.hostingersite.com/wp-content/uploads/2023/06/client-18-copyright.png",
  "https://mediumpurple-marten-843600.hostingersite.com/wp-content/uploads/2023/06/client-22-copyright.png",
  "https://mediumpurple-marten-843600.hostingersite.com/wp-content/uploads/2023/06/client-16-copyright.png",
  "https://mediumpurple-marten-843600.hostingersite.com/wp-content/uploads/2023/06/client-14-copyright.png",
];

const ClientLogos = () => {
  return (
    <section className="client-section">
      <div className="client-container">
        {clientImages.map((src, index) => (
          <div className="client-logo" key={index}>
            <img src={src} alt={`Client ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;
