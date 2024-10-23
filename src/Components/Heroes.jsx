import React from "react";
import "../Styles/Heroes.css";

function Heroes() {
  return (
    <div>
      <video autoPlay loop muted id="video" className="heroes">
        <source
          src="/Videos/IIT Indore Campus Tour - 2023 _ Drone View.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Heroes;
