import React, { useState, useEffect } from "react";
import "../Styles/Heroes.css";

function Achievement({ targetValue, description }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startValue = 0;
    const duration = 1000; 
    const stepTime = Math.abs(Math.floor(duration / targetValue));

    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);

      if (startValue === targetValue) {
        clearInterval(counter);
      }
    }, stepTime);

    return () => clearInterval(counter); 
  }, [targetValue]);

  return (
    <div className="achievement">
      <div className="rank-icon">
        <p>#{count}</p>
      </div>
      <p className="description">{description}</p>
    </div>
  );
}

function Heroes() {
  return (
    <div>
      <div className="heroes">
        <video autoPlay loop muted id="video">
          <source
            src="/Videos/IIT Indore Campus Tour - 2023 _ Drone View.mp4"
            type="video/mp4"
          />
        </video>
        <div className="achievement-banner">
          <div className="rankBanner">
          <Achievement targetValue={16} description="Engineering Institute in India NIRF 2024" />
          <Achievement targetValue={33} description="Overall Institute in India NIRF 2024" />
          </div>
          <div className="motto">
            <p>वसुधैव कुटुम्बकम्</p>
            <p className="translation">"The world is one family"</p>
          </div>
        </div>
      </div>
      <div className="about">
        <h1>Welcome to Education Outreach Initiative of IIT Indore!</h1>
        <h3>Empowering Community to Learn, Grow, and Thrive</h3>
      </div>
  </div>
  );
}

export default Heroes;
