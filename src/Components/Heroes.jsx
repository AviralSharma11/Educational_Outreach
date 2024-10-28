import React from "react";
import "../Styles/Heroes.css";

function Heroes() {
  return (
    <div className="heroes">
      <video autoPlay loop muted id="video">
        <source
          src="/Videos/IIT Indore Campus Tour - 2023 _ Drone View.mp4"
          type="video/mp4"
        />
      </video>
      <div className="achievement-banner">
        <div className="rankBanner">
          <div className="achievement">
            <div className="rank-icon">
              <p>#16</p>
            </div>
            <p className="description">
              Engineering Institute in India NIRF 2024
            </p>
          </div>

          <div className="achievement">
            <div className="rank-icon">
              <p>#33</p>
            </div>
            <p className="description">Overall Institute in India NIRF 2024</p>
          </div>
        </div>
        <div className="motto">
          <p>वसुधैव कुटुम्बकम्</p>
          <p className="translation">"The world is one family"</p>
        </div>
      </div>
    </div>
  );
}

export default Heroes;
