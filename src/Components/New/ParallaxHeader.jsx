import React, { useState } from 'react';
import '../../Styles/New/ParallaxHeader.css';

const ParallaxHeader = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setIsDropdownVisible(!isDropdownVisible);
    };
    
    return (
        <header className="parallax-header">
            <div 
    className="logo-section" 
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    style={{ cursor: 'pointer' }}
>
    <img src="/Images/IITI_Logo.png" alt="IIT Indore Logo" className="logo-image" />
    <span className="header-title">Educational Outreach</span>
</div>


            <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li className="home-menu" onClick={toggleDropdown}>
                        <span className='homer'>Home</span>
                        {isDropdownVisible && (
                            <div className="dropdown-content">
                                <a href="#about" onClick={closeMenu}>Educational Outreach</a>
                                <a href="#our-people" onClick={closeMenu}>Our People</a>
                                <a href="https://www.iiti.ac.in/" target="_blank" rel="noreferrer" onClick={closeMenu}>IIT Indore</a>
                                <a href="https://www.iiti.ac.in/page/campus-facilities" target="_blank" rel="noreferrer" onClick={closeMenu}>Campus Life</a>
                            </div>
                        )}
                    </li>
                    <li><a href="#programs" onClick={closeMenu}>Programs</a></li>
                    <li><a href="#MOU" onClick={closeMenu}>Cooperation & Engagements</a></li>
                    <li><a href="https://academic.iiti.ac.in/" target="_blank" rel="noreferrer" onClick={closeMenu}>Academic</a></li>
                    <li><a href='https://rnd.iiti.ac.in/' onClick={closeMenu}>Research</a></li>
                    <li><a href="#news" onClick={closeMenu}>Announcements</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default ParallaxHeader;
