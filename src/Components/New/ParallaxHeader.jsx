import React, { useEffect, useState } from 'react';
import '../../Styles/New/ParallaxHeader.css';

const ParallaxHeader = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isHeaderVisible, setHeaderVisible] = useState(true);
    let lastScrollY = window.pageYOffset;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;

            if (currentScrollY > lastScrollY) {
                // Scrolling Down
                setHeaderVisible(false);
            } else {
                // Scrolling Up
                setHeaderVisible(true);
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


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
        <header className={`parallax-header ${isHeaderVisible ? 'visible' : 'hidden'}`}>
            <div className="logo-section">
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
                    <li><a href="https://academic.iiti.ac.in/" target="_blank" rel="noreferrer" onClick={closeMenu}>Academic & Research</a></li>
                    <li><a href="#news" onClick={closeMenu}>Announcements</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default ParallaxHeader;
