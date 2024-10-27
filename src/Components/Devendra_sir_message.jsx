import React from "react";
import '../Styles/Devandra_sir_message.css';

export default function Devandra_sir_message() {
    return (
        <div>
            <div className="msg-container" id="msg-cont">
                <div className="row msg-box">
                    <div className="msg-column-left">
                        <img className="msg-img-fluid" src="/Images/devendra_sir copy.jpg" alt="Prof. Suhas S. Joshi"  />
                    </div>
                    <div className="msg-column-right">
                        <h3 className="msg-font-weight-darker" id="msg-head">Communities are our priority!</h3>
                        <p className="msg-text-muted">
                            Aximintia dolupta quatis essiminienit faciam dis utam rest fugitatis solor moditas mo blaborrum apicab illa simolorrunda vendigendus
                            alit vendaerro ium quidendis doluptaerume dolore ium Otatibus andaecte nima nobit la eum dit aut voloraecti dipisin cuptatinum
                            identiates et moluptat
                        </p>
                        <p className="msg-my-1 p-1 msg-font-weight-darker msg-text-body" id="msg-head">
                            Prof. Devendra Deshmukh <br /> IIT Indore
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
