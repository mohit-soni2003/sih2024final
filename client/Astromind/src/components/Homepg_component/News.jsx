import React from "react";
import "./News.css"
 
const News = () => {
  return (
    <div className="news-updates">
      {/* Background video */}
      <video autoPlay muted loop className="background-video">
        <source src="path_to_your_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content-overlay">
        <div className="news-section">
          <h2>News and Updates</h2>
          <div className="news-item">
            <h3>India going to launch the Gaganyaan in 25</h3>
            <button>READ MORE</button>
          </div>
          <div className="news-item">
            <h3>Light Pollution can be a problem for the SkyGazer</h3>
            <button>READ MORE</button>
          </div>
        </div>

        <div className="highlight-section">
          <img
            src="path_to_image.jpg"
            alt="GSLV 6 Launch"
            className="highlight-image"
          />
          <div className="highlight-text">
            <h3>India Launched GSLV 6</h3>
            <button>→</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

