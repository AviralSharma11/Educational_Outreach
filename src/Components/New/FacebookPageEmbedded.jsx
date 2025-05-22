import React, { useEffect } from 'react';
import '../../Styles/New/FacebookPageEmbed.css';

const FacebookPageEmbed = () => {
    useEffect(() => {
        // Load Facebook SDK script
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: 'your-app-id', // Optional, only if you use Facebook login
                xfbml: true,
                version: 'v14.0',
            });
            window.FB.XFBML.parse();
        };

        (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }, []);

    return (
<div className="facebook-container">
  <h2 className="facebook-title">Facebook</h2>
  <div className="facebook-title-underline"></div>
  <div
    className="fb-page"
    data-href="https://www.facebook.com/p/IIT-Indore-100064798209779/"
    data-tabs="timeline"
    data-width="500"
    data-height="700"
    data-small-header="false"
    data-adapt-container-width="true"
    data-hide-cover="false"
    data-show-facepile="true"
  ></div>

  {/* Embed YouTube Video Below */}
  <div className="youtube-video">
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/pmaKaMiRHd4"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
</div>

    );
};

export default FacebookPageEmbed;
