import React from "react";
import "../../Styles/OurPeople.css";
import people from "../../List/people";
import Team from "./Team";

export default function TeamMain() {


    return (
        <div id="our-people">
            <h1 className="heading">Our People</h1>
            <div className="people">
                {people.map((person, index) => (
                    <Team
                        key={index}
                        img={person.imgURL}
                        detail={person.content}
                        position={person.position}
                        contact={person.contact_no}
                        email={person.email_id ? person.email_id : null}
                        address={person.address}
                    />
                ))}
            </div>
        </div>  
    );
}
