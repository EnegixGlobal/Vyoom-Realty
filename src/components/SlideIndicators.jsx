import React from "react";
import "../styles/SlideIndicator.css";

const SlideIndicators = ({ currentSlide, setCurrentSlide, totalSlides }) => {
  return (
    <div className="slide-indicators">
      {[...Array(totalSlides)].map((_, idx) => (
        <button
          key={idx}
          className={idx === currentSlide ? "active" : "inactive"}
          onClick={() => setCurrentSlide(idx)}
        ></button>
      ))}
    </div>
  );
}

export default SlideIndicators;
