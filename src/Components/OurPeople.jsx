import React from "react";
import "../Styles/OurPeople.css"
import people from "../List/people"
import PeopleCard from "./PeopleCard";

export default function OurPeople() {
    return (
        <div id="People" >
            <h1 className="heading">Our People</h1>
            <div className="people">
                {people.map((person, index) => (
                    <PeopleCard
                        key={index} 
                        img={person.imgURL}
                        detail={person.content}
                        position={person.position}
                    />
                ))}
            </div>
        </div>
    );
}