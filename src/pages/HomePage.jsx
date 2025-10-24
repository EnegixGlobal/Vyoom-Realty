import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Mission from "../components/Mission";
import AffordableSection from "../components/AffordableSection";
import ClientLogos from "../components/ClientLogos";
import BenefitsSection from "../components/BenefitsSection";
import ResidentialSection from "../components/ResidentialSection";
import UpcomingSection from "../components/UpcomingSection";
import WhatWeOfferSection from "../components/WhatWeOfferSection";
import SuccessStories from "../components/SuccessStories";
import Footer from "../components/Footer";
import PlayVideoSection from "../components/PlayVideoSection";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section with Carousel */}
      <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        <ImageCarousel />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "0 1rem",
            zIndex: 20,
          }}
        >
          <Navbar />
          <HeroSection />
        </div>
      </div>

      {/* Mission Section */}
      <Mission />

      {/* Affordable Section */}
      <AffordableSection />

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Play Video Section */}
      <PlayVideoSection />

      {/* Residential Section */}
      <ResidentialSection />

      {/*Upcoming Section */}
      <UpcomingSection />

      {/*WhatWeOffer Section */}
      <WhatWeOfferSection />

      {/* SuccessStories Section */}
      <SuccessStories />
      
      {/* Footer Section */}
      <Footer/>
    </div>
  );
};

export default HomePage;
