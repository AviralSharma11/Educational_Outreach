import React, { useEffect, useState } from 'react';
import '../../Styles/New/ParallaxHeader.css';

const ParallaxHeader = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.parallax-header');
            header.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="parallax-header">
            <div className="logo-section">
                <img src="/Images/IITI_Logo.png" alt="IIT Indore Logo" className="logo-image" />
                <span className="header-title">Educational Outreach</span>
            </div>

            <div 
                className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className={`navbar ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li
                        className="home-menu"
                        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
                    >
                        <span>Home</span>
                        <ul className={`dropdown ${isDropdownVisible ? 'show' : ''}`}>
                            <li><a href="#about">Educational Outreach</a></li>
                            <li><a href="#our-people">Our People</a></li>
                            <li><a href="https://www.iiti.ac.in/">IIT Indore</a></li>
                            <li><a href="https://www.iiti.ac.in/page/campus-facilities">Campus Life</a></li>
                        </ul>
                    </li>
                    <li><a href="#programs">Programs</a></li>
                    <li><a href="#MOU">Cooperation & Engagements</a></li>
                    <li><a href="https://academic.iiti.ac.in/">Academic & Research</a></li>
                    <li><a href="#news">Announcements</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default ParallaxHeader;
