import React from 'react';
import '../Styles/Director_message.css';

export default function Director_message() {
  return (
    <div>
      <div className="container" id="cont">
        <div className="row box">
          <div className="column-left">
            <img className="img-fluid" src="/Images/Prof_Suhas_Joshi.png" alt="Prof. Suhas S. Joshi" />
          </div>
          <div className="column-right">
            <h3 className="font-weight-darker" id="head">Communities are our priority!</h3>
            <p className="text-muted">
              Aximintia dolupta quatis essiminienit faciam dis utam rest fugitatis solor moditas mo blaborrum apicab illa simolorrunda vendigendus
              alit vendaerro ium quidendis doluptaerume dolore ium Otatibus andaecte nima nobit la eum dit aut voloraecti dipisin cuptatinum
              identiates et moluptat
            </p>
            <p className="my-1 p-1 font-weight-darker text-body" id="head">
              Prof. Suhas S. Joshi <br /> Director, IIT Indore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
