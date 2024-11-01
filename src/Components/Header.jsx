import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import "../Styles/Header.css";

function Header({ setSearchQuery }) { 
  const [searchValue, setSearchValue] = useState("");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
    

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

  // Function to handle Home click
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
    closeMenu();
  };

  const handleProgramClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
        document.getElementById("Program").scrollIntoView({ behavior: "smooth" });
    } else {
        navigate("/");
        setTimeout(() => {
            const programSection = document.getElementById("Program");
            if (programSection) {
                programSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 100); 
    }
    closeMenu();
};

const handleCooperationEngagementClick = (e) => {
  e.preventDefault();
  if (location.pathname === "/") {
      document.getElementById("MOU").scrollIntoView({ behavior: "smooth" });
  } else {
      navigate("/");
      setTimeout(() => {
          const mouSection = document.getElementById("MOU");
          if (mouSection) {
              mouSection.scrollIntoView({ behavior: "smooth" });
          }
      }, 100);
  }
  closeMenu();
};

const handleNewsActivitiesClick = (e) => {
  e.preventDefault();
  if (location.pathname === "/") {
      document.getElementById("News").scrollIntoView({ behavior: "smooth" });
  } else {
      navigate("/");
      setTimeout(() => {
          const newsSection = document.getElementById("News");
          if (newsSection) {
              newsSection.scrollIntoView({ behavior: "smooth" });
          }
      }, 100); 
  }
  closeMenu();
};

const toggleModal = () => {
  setIsModalOpen(!isModalOpen);
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
            {/* Navbar buttons */}
            <div className="nav-item sep">
              <a href="/" onClick={handleHomeClick}>Home</a>
            </div>

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
            {/* DropDown Menu */}
            <div className="dropdown-content">
              <a href="#" className="sub" onClick={toggleModal}>Educational Outreach</a>
              <a href="/our_people" className="sub" >
                Our People
              </a>
              <a href="/iit-indore" className="sub" onClick={closeMenu}>IIT Indore</a>
              <a href="https://www.iiti.ac.in/page/campus-facilities" className="" style={{fontWeight: 500}} onClick={closeMenu}>Campus Life</a>
            </div>
          </div>
          {/* programs */}
          <div className="nav-item sep">
            <a href="#Program" onClick={handleProgramClick}>
              Programs
            </a>
          </div>

          <div className="nav-item sep">
            <a href="#MOU" onClick={handleCooperationEngagementClick}>
              Cooperation & Engagements
            </a>
          </div>

          <div className="nav-item sep"><a href="https://academic.iiti.ac.in/" onClick={closeMenu}>Academics & Research</a></div>

          <div className="nav-item">
            <a href="#News" onClick={handleNewsActivitiesClick}>
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
      {isModalOpen && (
        <div className="abouteo">
            <h1 className="heading">About Educational Outreach:</h1>
            <div className="details">
                <p>Educational outreach refers to efforts made by educational institutions, organizations, or
                  individuals to engage with communities beyond their immediate academic setting. These efforts
                  aim to share knowledge, resources, and opportunities with various groups, such as students,
                  teachers, parents, and the general public, to promote learning, skill development, and awareness</p>

                <p> <span style={{fontWeight: 700}}>Our Vision:</span> Leverage the academic expertise of IIT Indore to develop
                  collaboration with external institutes, industry and society for capacity
                  building, research and skill development</p>

                  <p>Develop and deliver academic programs for industry professionals :
                  Executive degree and certificate programs, skill development workshops
                  (CEP)</p>

                  <p>Collaborate with external institute to augment the expertise for delivering
                  academic programs required for industry and society (Collaborative
                  programs with IIM-I, RRCAT,)</p>

                <p> Develop and deliver the academic programs for quality improvement in
                  technical education (QIP,GSP) and school education (PM-SHRI,
                  Teacher Training, )</p>
                  <button
                            onClick={toggleModal}
                            className="close"
                        >
                            X
                        </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
