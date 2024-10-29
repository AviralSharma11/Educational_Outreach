import React, { useEffect, useRef, useState } from "react";
import "../Styles/ReachOut.css";

export default function ReachOut({ searchQuery, onMatchFound }) {
    const footerRef = useRef(null);

    useEffect(() => {
        if (searchQuery) {
            if (footerRef.current) {
                const firstHighlighted = footerRef.current.querySelector(".highlight");
                if (firstHighlighted) {
                    firstHighlighted.scrollIntoView({ behavior: "smooth", block: "center" });
                    onMatchFound(true); 
                } else {
                    onMatchFound(false); 
                }
            }
        } else {
            onMatchFound(true); 
        }
    }, [searchQuery, onMatchFound]);

    const highlightText = (text) => {
        if (!searchQuery) return <span>{text}</span>;

        const regex = new RegExp(`(${searchQuery})`, "gi");
        const parts = text.split(regex);
        return parts.map((part, index) =>
            regex.test(part) ? (
                <span key={index} className="highlight">{part}</span>
            ) : (
                <span key={index}>{part}</span>
            )
        );
    };

    const links = {
        "Academic": "https://academic.iiti.ac.in/",
        "Research": "https://rnd.iiti.ac.in/",
        "Departments": "https://iiti.ac.in/departments",
        "Campus Facilities": "https://www.iiti.ac.in/page/campus-facilities"
    };

    return (
        <div id="reach-out" ref={footerRef}>
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-section logo-and-contact">
                        <img src="/Images/IITI_logo.png" alt="IIT Indore Logo" className="footer-logo" />
                    </div>
                    <div className="footer-container rotu">
                        <h3>REACH OUT TO US</h3>
                        <div className="footer-content">
                            <p>
                                {highlightText("Educational Outreach")}<br />
                                {highlightText("8th Floor, West Wing, Abhinandan Bhavan")}<br />
                                {highlightText("Indian Institute of Technology Indore")}<br />
                                {highlightText("Khandwa Road, Simrol, Indore 453552")}<br />
                                {highlightText("Madhya Pradesh, India")}<br />
                                {highlightText("Tel No: +91 07316605179")}<br />
                                {highlightText("Email: eooffice@iiti.ac.in")}
                            </p>
                        </div>
                    </div>
                    <div className="footer-section quick-links">
                        <h3>{highlightText("QUICK LINKS")}</h3>
                        <ul>
                        {["Academic", "Research", "Departments", "Campus Facilities"].map((link, index) => (
                            <li key={index}>
                                <a href={links[link]}>
                                    {highlightText(link)}
                                </a>
                            </li>
                        ))}

                        </ul>
                    </div>
                    <div className="footer-section social-media">
                        <h3>{highlightText("SOCIAL MEDIA")}</h3>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/company/101453191/admin/feed/posts/">
                                <img src="/Images/LinkedIN.png" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                </div>
                <span style={{paddingBottom: "15px"}}><em>© 2024 Educational Outreach, IIT Indore</em></span>
            </div>
        </div>
    );
}
