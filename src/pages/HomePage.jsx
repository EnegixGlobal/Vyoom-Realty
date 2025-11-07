import React from "react";
import showreel from "../assets/images/web showreel.mp4";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import AffordableSection from "../components/AffordableSection";
import ClientLogos from "../components/ClientLogos";
import BenefitsSection from "../components/BenefitsSection";
import ResidentialSection from "../components/ResidentialSection";
import UpcomingSection from "../components/UpcomingSection";
import WhatWeOfferSection from "../components/WhatWeOfferSection";
import SuccessStories from "../components/SuccessStories";
import Footer from "../components/Footer/Footer";
import PlayVideoSection from "../components/PlayVideoSection";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section with Carousel */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* 🔹 Background Video */}
        <video
          src={showreel}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        />

        {/* 🔹 Overlay */}
        <div className="absolute inset-0 bg-black/40 z-20"></div>

        {/* 🔹 Navbar & Hero */}
        <Navbar />
        <div className="absolute top-0 left-0 z-30 flex flex-col justify-center items-start w-full h-full">
          <HeroSection />
        </div>
      </div>

      {/* Services Section */}
      <Services />

      {/* Affordable Section */}
      <AffordableSection />

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Play Video Section */}
      <PlayVideoSection />

      {/* Residential Section */}
      {/* <ResidentialSection /> */}

      {/*Upcoming Section */}
      {/* <UpcomingSection /> */}

      {/*WhatWeOffer Section */}
      <WhatWeOfferSection />

      {/* SuccessStories Section */}
      <SuccessStories />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
