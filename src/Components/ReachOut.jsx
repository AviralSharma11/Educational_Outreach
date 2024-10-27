import React from "react";
import "../Styles/ReachOut.css";

function ReachOut(){
    return(
        <div id ="reach-out">
            <div className="footer">
                <div className="footer-container">
                    {/* Logo and Reach Out Section */}
                    <div className="footer-section logo-and-contact">
                        <img src="/Images/IITI_logo.png" alt="IIT Indore Logo" className="footer-logo" />
                    </div>
                    <div className ="footer-container rotu">
                        <h3>REACH OUT TO US</h3>
                        <div className="footer-content">
                            <p>Educational Outreach<br />
                            8th Floor, West Wing, Abhinandan Bhavan<br />
                            Indian Institute of Technology Indore<br />
                            Khandwa Road, Simrol, Indore 453552<br />
                            Madhya Pradesh, India<br />
                            Tel No: +91 07316605179<br />
                            Email: eooffice@iiti.ac.in
                            </p>
                        </div>
                    </div>
            
                    {/* Quick Links Section */}
                    <div className="footer-section quick-links">
                        <h3>QUICK LINKS</h3>
                        <ul>
                        <li><a href="https://academic.iiti.ac.in/">Academic</a></li>
                        <li><a href="https://rnd.iiti.ac.in/">Research</a></li>
                        <li><a href="https://www.iiti.ac.in/departments">Departments</a></li>
                        <li><a href="https://www.iiti.ac.in/page/campus-facilities">Campus Facilities</a></li>
                        </ul>
                    </div>
            
                    {/*Social Media Section */}
                    <div className="footer-section social-media">
                        <h3>SOCIAL MEDIA</h3>
                        <div className="social-icons">
                        <a href="https://www.linkedin.com/company/101453191/admin/feed/posts/"><img src="/Images/LinkedIN.png" alt="LinkedIn" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReachOut;