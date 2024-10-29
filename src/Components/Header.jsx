import React, { useState, useEffect } from "react";
import "../Styles/Header.css";

function Header({ setSearchQuery }) { 
  const [searchValue, setSearchValue] = useState("");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchValue);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Close the menu 
  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    // Close the menu if clicking outside
    const handleClickOutside = (event) => {
      if (!event.target.closest('.Navbar')) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
            {/* Navbar buttons */}
            <div className="nav-item sep"><a href="/" onClick={closeMenu}>Home</a></div>
            <div className="nav-item sep"><a href="/iit-indore" onClick={closeMenu}>IIT Indore</a></div>
            <div className="nav-item sep">
              <a href="#reach-out" onClick={(e) => {
                e.preventDefault(); 
                document.getElementById("reach-out").scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}>
                Reach Us
              </a>
            </div>
            <form className="search-bar" onSubmit={handleSearchSubmit}>
              <input 
                type="text" 
                placeholder="Search" 
                value={searchValue} 
                onChange={(e) => setSearchValue(e.target.value)} 
              />
              <button type="submit">
                <img src="/Images/SearchButton.png" alt="Search" />
              </button>
            </form>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className={`navMenu ${isMenuOpen ? "open" : ""}`}>
          <div className="nav-item sep dropdown">
            About
            <div className="dropdown-content">
              <a href="#" className="sub" onClick={closeMenu}>Educational Outreach</a>
              <a href="#People" className="sub" onClick={(e) => {
                e.preventDefault(); 
                document.getElementById("People").scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}>
                Our People
              </a>
              <a href="/iit-indore" className="sub" onClick={closeMenu}>IIT Indore</a>
              <a href="#" className="" style={{fontWeight: 500}} onClick={closeMenu}>Campus Life</a>
            </div>
          </div>
          <div className="nav-item sep">
            <a href="#Program" onClick={(e) => {
              e.preventDefault(); 
              document.getElementById("Program").scrollIntoView({ behavior: "smooth" });
              closeMenu();
            }}>
              Programs
            </a>
          </div>
          <div className="nav-item sep">
            <a href="#MOU" onClick={(e) => {
              e.preventDefault(); 
              document.getElementById("MOU").scrollIntoView({ behavior: "smooth" });
              closeMenu();
            }}>
              Cooperation & Engagements
            </a>
          </div>
          <div className="nav-item sep"><a href="" onClick={closeMenu}>Academics & Research</a></div>
          <div className="nav-item">
            <a href="#News" onClick={(e) => {
              e.preventDefault(); 
              document.getElementById("News").scrollIntoView({ behavior: "smooth" });
              closeMenu();
            }}>
              News & Events
            </a>
          </div>
          <div className="hidden nav-item sep"><a href="/" onClick={closeMenu}>Home</a></div>
            <div className="hidden nav-item sep"><a href="/iit-indore" onClick={closeMenu}>IIT Indore</a></div>
            <div className="hidden nav-item sep">
              <a href="#reach-out" onClick={(e) => {
                e.preventDefault(); 
                document.getElementById("reach-out").scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}>
                Reach Us
              </a>
            </div>
            <form className="hidden search-bar" onSubmit={handleSearchSubmit}>
              <input 
                type="text" 
                placeholder="Search" 
                value={searchValue} 
                onChange={(e) => setSearchValue(e.target.value)} 
              />
              <button type="submit" onClick={closeMenu}>
                <img src="/Images/SearchButton.png" alt="Search" />
              </button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
