import React from "react";
import "../Styles/Header.css";

function Header() {
  return (
    <div>
      {/* Header Top */}
      <div className="header">
        <div className="logo">
          <img src="" alt="Education Outreach" />
          <span>Education Outreach</span>
        </div>
        <div className="icons">
          <div className="nav-item sep">Home</div>
          <div className="nav-item sep">IIT Indore</div>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button type="submit">
              <img src="" alt="Search" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="navMenu">
        <div className="nav-item sep">About</div>
        <div className="nav-item sep">Programs</div>
        <div className="nav-item sep">Cooperation & Engagements</div>
        <div className="nav-item sep">Academics & Research</div>
        <div className="nav-item sep">News & Events</div>
        <div className="nav-item">Reach Us</div>
      </div>
    </div>
  );
}

export default Header;
