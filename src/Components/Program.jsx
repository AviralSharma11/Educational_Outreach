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
                    img = {programDetails[0].imgURL}
                    detail = {programDetails[0].content}
                />
                <ProgramCard 
                    img = {programDetails[0].imgURL}
                    detail = {programDetails[0].content}
                />
                <ProgramCard 
                    img = {programDetails[0].imgURL}
                    detail = {programDetails[0].content}
                />
                <ProgramCard 
                    img = {programDetails[0].imgURL}
                    detail = {programDetails[0].content}
                />
                <ProgramCard 
                    img = {programDetails[0].imgURL}
                    detail = {programDetails[0].content}
                />
                <ProgramCard 
                    img = {programDetails[0].imgURL}
                    detail = {programDetails[0].content}
                />
            </div>
        </div>
    );
}