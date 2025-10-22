import React, { useState, useEffect } from "react";
import SlideIndicators from "../components/SlideIndicators.jsx";
import "../styles/ImageCarousel.css";

const leftImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=900&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=900&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=900&fit=crop",
];

const rightImages = [
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=900&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=900&fit=crop",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=900&fit=crop",
];

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = leftImages.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <div className="carousel-container">
      <div className="carousel-side left-side">
        {leftImages.map((img, idx) => (
          <div
            key={idx}
            className={`carousel-slide ${idx === currentSlide ? "active" : ""}`}
          >
            <img src={img} alt={`Left ${idx + 1}`} />
            <div className="overlay"></div>
          </div>
        ))}
      </div>

      <div className="carousel-side right-side">
        {rightImages.map((img, idx) => (
          <div
            key={idx}
            className={`carousel-slide ${idx === currentSlide ? "active" : ""}`}
          >
            <img src={img} alt={`Right ${idx + 1}`} />
            <div className="overlay"></div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      {/* <SlideIndicators
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        totalSlides={totalSlides}
      /> */}
    </div>
  );
};

export default ImageCarousel;
