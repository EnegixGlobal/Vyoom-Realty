import React from "react";
import "../styles/PlayVideoSection.css";
const PlayVideoSection = () => {
  return (
    <section className="play-video-section">
      <div className="overlay"></div>
      <div className="container">
        <div className="content">
          <div className="spacer huge"></div>
          <div className="spacer huge hide-on-mobile"></div>
          <div className="spacer large hide-on-mobile-tablet"></div>

          <div className="button-wrapper">
            <a href="https://www.youtube.com/" className="play-button">
              PLAY
            </a>
          </div>

          <div className="spacer large hide-on-mobile-tablet"></div>
          <div className="spacer huge hide-on-mobile"></div>
          <div className="spacer huge"></div>
        </div>
      </div>
    </section>
  );
};

export default PlayVideoSection;
