import React, { useState } from "react";
import "../Styles/Header.css";
import { useSearch } from "./Search";

function Header({ setSearchQuery }) { 
  const [searchValue, setSearchValue] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchValue);
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
        </div>
        {/* Navigation Menu */}
        {/* ... (rest of your code) */}
      </div>
    </div>
  );
}

export default Header;
