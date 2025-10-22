import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Mission from "../components/Mission";
import AffordableSection from "../components/AffordableSection";

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Carousel Section */}
      <div className="relative w-full h-screen">
        <ImageCarousel />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-12 z-20">
          <Navbar />
          <HeroSection />
        </div>
        
        <Mission />
        <AffordableSection />
          
      </div>
    </div>
  );
};


export default HomePage;
