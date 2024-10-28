import React, { useEffect, useRef } from "react";
import "../Styles/ReachOut.css";

function ReachOut({ searchQuery }) {
    const footerRef = useRef(null);

    useEffect(() => {
        if (searchQuery && footerRef.current) {
            const sections = footerRef.current.querySelectorAll(".footer-content, .quick-links h3, .quick-links li");
            for (const section of sections) {
                if (section.textContent.toLowerCase().includes(searchQuery.toLowerCase())) {
                    section.scrollIntoView({ behavior: "smooth", block: "center" });
                    break; // Stop at the first match
                }
            }
        }
    }, [searchQuery]);

    const highlightText = (text) => {
        if (!searchQuery) return text;
        const regex = new RegExp(`(${searchQuery})`, "gi");
        const parts = text.split(regex);
        return parts.map((part, index) => (
            regex.test(part) ? <span key={index} className="highlight">{part}</span> : part
        ));
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
                                <li key={index}>{highlightText(link)}</li>
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
            </div>
        </div>
    );
}

export default ReachOut;
