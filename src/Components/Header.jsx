import {React, useState} from "react";
import "../Styles/Header.css";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      {/* Header Top */}
      <div className="Navbar">
        <div className="header">
            {/* Logo */}
            <div className="logo">
              <img src="/Images/logo.png" alt="Education Outreach" />
            </div>
            
            {/* Hamburger Icon for Mobile */}
            <button className="hamburger" onClick={toggleMenu}>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>

            <div className={`icons ${isMenuOpen ? "open" : ""}`}>
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
        <div className={`navMenu ${isMenuOpen ? "open" : ""}`}>
            <div className="nav-item sep dropdown">
                About
                <div className="dropdown-content">
                    <a href="#" className="sub">Educational Outreach</a>
                    <a href="#People" className="sub" onClick={(e) => {
                      e.preventDefault(); 
                      document.getElementById("People").scrollIntoView({ behavior: "smooth" });
                      }}>
                        Our People
                    </a>
                    <a href="/iit-indore" className="sub">IIT Indore</a>
                    <a href="#" className="" style={{fontWeight: 500}}>Campus Life</a>
                </div>
            </div>
            <div className="nav-item sep">
                <a href="#Program" onClick={(e) => {
                  e.preventDefault(); 
                  document.getElementById("Program").scrollIntoView({ behavior: "smooth" });
                }}>
                    Programs
                </a>
            </div>
            <div className="nav-item sep">
                <a href="#MOU" onClick={(e) => {
                  e.preventDefault(); 
                  document.getElementById("MOU").scrollIntoView({ behavior: "smooth" });
                  }}>
                    Cooperation & Engagements
                </a>
            </div>
            <div className="nav-item sep"><a href="https://academic.iiti.ac.in/">Academics & Research</a></div>
            <div className="nav-item ">
              <a href="#News" onClick={(e) => {
                  e.preventDefault(); 
                  document.getElementById("News").scrollIntoView({ behavior: "smooth" });
                }}>
                News & Events
              </a>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default Header;
