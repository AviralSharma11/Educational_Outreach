<<<<<<< HEAD
import React, { useState } from "react";
=======
import {React, useState} from "react";
>>>>>>> 47db7ae6012d7fb5283cb7c481603677395246de
import "../Styles/Header.css";
import { useSearch } from "./Search";

function Header({ setSearchQuery }) { 
  const [searchValue, setSearchValue] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchValue);
  };

<<<<<<< HEAD
=======
function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
>>>>>>> 47db7ae6012d7fb5283cb7c481603677395246de
  return (
    <div>
      {/* Header Top */}
      <div className="Navbar">
        <div className="header">
<<<<<<< HEAD
          {/* Logo */}
          <div className="logo">
            <img src="/Images/logo.png" alt="Education Outreach" />
          </div>
          <div className="icons">
            {/* Navbar buttons */}
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
              <form onSubmit={handleSearchSubmit}> {/* Use form to handle submit */}
                <input
                  type="text"
                  placeholder="Search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)} // Capture input value
                  required
                />
                <button type="submit">
                  <img src="/Images/SearchButton.png" alt="Search" />
                </button>
              </form>
            </div>
          </div>
=======
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
>>>>>>> 47db7ae6012d7fb5283cb7c481603677395246de
        </div>
        {/* Navigation Menu */}
<<<<<<< HEAD
        {/* ... (rest of your code) */}
=======
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
            <div className="nav-item sep"><a href="">Academics & Research</a></div>
            <div className="nav-item ">
              <a href="#News" onClick={(e) => {
                  e.preventDefault(); 
                  document.getElementById("News").scrollIntoView({ behavior: "smooth" });
                }}>
                News & Events
              </a>
            </div>
            
        </div>
>>>>>>> 47db7ae6012d7fb5283cb7c481603677395246de
      </div>
    </div>
  );
}

export default Header;
