import React from "react";
import "../Styles/Header.css";

function Header() {
  return (
    <div>
      {/* Header Top */}
      <div className="Navbar">
        <div className="header">
            {/* Logo */}
            <div className="logo">
            <img src="/Images/logo.png" alt="Education Outreach" />
            {/* <span>Education Outreach</span> */}
            </div>
            <div className="icons">
            {/*Navbar buttons */}
            <div className="nav-item sep"><a href="/">Home</a></div>
            <div className="nav-item sep"><a href="/iit-indore">IIT Indore</a></div>
            <div className="nav-item sep">
              <a href="#reach-out" onClick={(e) => {
                e.preventDefault(); 
                document.getElementById("reach-out").scrollIntoView({ behavior: "smooth" });
                }}>
                  Reach Us
              </a>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <button type="submit">
                <img src="/Images/SearchButton.png" alt="Search" />
                </button>
            </div>
            </div>
        </div>

        {/* Navigation Menu */}
        <div className="navMenu">
            <div className="nav-item sep dropdown">
                About
                <div className="dropdown-content">
                    <a href="#" className="sub">Educational Outreach</a>
                    <a href="#" className="sub">Our People</a>
                    <a href="/iit-indore" className="sub">IIT Indore</a>
                    <a href="#" className="" style={{fontWeight: 500}}>Campus Life</a>
                </div>
            </div>
            <div className="nav-item sep"><a href="">Programs</a></div>
            <div className="nav-item sep"><a href="">Cooperation & Engagements</a></div>
            <div className="nav-item sep"><a href="">Academics & Research</a></div>
            <div className="nav-item "><a href="">News & Events</a></div>
            
        </div>
      </div>
    </div>
  );
}

export default Header;
