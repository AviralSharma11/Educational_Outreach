import React from "react";
import "../Styles/ReachOut.css";

export default function ReachOut() {

    const links = {
        "Academic": "https://academic.iiti.ac.in/",
        "Research": "https://rnd.iiti.ac.in/",
        "Departments": "https://iiti.ac.in/departments",
        "Campus Facilities": "https://www.iiti.ac.in/page/campus-facilities"
    };

    return (
        <div id="reach-out">
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-section logo-and-contact">
                        <img src="/Images/IITI_logo.png" alt="IIT Indore Logo" className="footer-logo" />
                    </div>
                    <div className="footer-container rotu">
                        <h3>REACH OUT TO US</h3>
                        <div className="footer-content">
                            <p>
                                {"Educational Outreach"}<br />
                                {"8th Floor, West Wing, Abhinandan Bhavan"}<br />
                                {"Indian Institute of Technology Indore"}<br />
                                {"Khandwa Road, Simrol, Indore 453552"}<br />
                                {"Madhya Pradesh, India"}<br />
                                {"Tel No: +91 07316605179"}<br />
                                {"Email: eooffice@iiti.ac.in"}
                            </p>
                        </div>
                    </div>
                    <div className="footer-section quick-links">
                        <h3>{"QUICK LINKS"}</h3>
                        <ul>
                        {["Academic", "Research", "Departments", "Campus Facilities"].map((link, index) => (
                            <li key={index}>
                                <a href={links[link]}>
                                    {link}
                                </a>
                            </li>
                        ))}

                        </ul>
                    </div>
                    <div className="footer-section social-media">
                        <h3>{"SOCIAL MEDIA"}</h3>
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
