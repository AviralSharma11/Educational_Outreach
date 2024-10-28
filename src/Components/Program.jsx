import React from "react";
import "../Styles/Program.css";
import ProgramCard from "./ProgramCard";
import programDetails from "../List/programDetails";

export default function Program(){
    return(
        <div id="Program" >
            <h1 className="heading">Our Programs</h1>
            <div className="programs">
                <ProgramCard 
                    img = {programDetails[0].imgURL}
                    detail = {programDetails[0].content}
                />
                <ProgramCard 
                    img = {programDetails[1].imgURL}
                    detail = {programDetails[1].content}
                />
                <ProgramCard 
                    img = {programDetails[2].imgURL}
                    detail = {programDetails[2].content}
                />
                <ProgramCard 
                    img = {programDetails[3].imgURL}
                    detail = {programDetails[3].content}
                />
                <ProgramCard 
                    img = {programDetails[4].imgURL}
                    detail = {programDetails[4].content}
                />
                <ProgramCard 
                    img = {programDetails[5].imgURL}
                    detail = {programDetails[5].content}
                />
                <ProgramCard 
                    img = {programDetails[6].imgURL}
                    detail = {programDetails[6].content}
                />
                <ProgramCard 
                    img = {programDetails[7].imgURL}
                    detail = {programDetails[7].content}
                />
            </div>
        </div>
    );
}