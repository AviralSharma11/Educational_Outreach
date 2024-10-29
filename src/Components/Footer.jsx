import React from "react";
import "../Styles/Footer.css";

function Footer({searchQuery}){
    return(
      <footer style={{ backgroundColor: '#d3d8d8', padding: '10px', textAlign: 'center' }}>
        <p>© 2024 Educational Outreach, IIT Indore</p>
      </footer>
    );
}

export default Footer;