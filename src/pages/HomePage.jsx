import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Mission from "../components/Mission";
import AffordableSection from "../components/AffordableSection";

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section with Carousel */}
      <div className="relative w-full h-screen">
        <ImageCarousel />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 lg:px-12 z-20">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      
      {/* Mission Section */}
      <Mission />
      
      {/* Affordable Section */}
      <AffordableSection />
    </div>
  );
};

export default HomePage;
