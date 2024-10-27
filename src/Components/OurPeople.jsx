import React from "react";
import "../Styles/OurPeople.css"
import people from "../List/people"
import PeopleCard from "./PeopleCard";

export default function OurPeople(){
    return(
        <div id="People" >
            <h1 className="heading">Our People</h1>
            <div className="people">
                <PeopleCard 
                    img = {people[0].imgURL}
                    detail = {people[0].content}
                    position = {people[0].position}
                />
                <PeopleCard 
                    img = {people[0].imgURL}
                    detail = {people[0].content}
                    position = {people[0].position}
                />
                <PeopleCard 
                    img = {people[0].imgURL}
                    detail = {people[0].content}
                    position = {people[0].position}
                />
                <PeopleCard 
                    img = {people[0].imgURL}
                    detail = {people[0].content}
                    position = {people[0].position}
                />
                <PeopleCard 
                    img = {people[0].imgURL}
                    detail = {people[0].content}
                    position = {people[0].position}
                />
            </div>
        </div>
    );
}