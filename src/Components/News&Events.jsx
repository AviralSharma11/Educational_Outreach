import React from "react";
import "../Styles/News$Events.css";
import EventCards from "./EventCards";
import events from "../List/events";

export default function News$Events(){
    return(
        <div id="News" >
            <h1 className="heading">News and Activities</h1>
            <div className="news">
                <EventCards 
                    img = {events[0].imgURL}
                    detail = {events[0].content}
                />
                <EventCards 
                    img = {events[0].imgURL}
                    detail = {events[0].content}
                />
                <EventCards 
                    img = {events[0].imgURL}
                    detail = {events[0].content}
                />
                <EventCards 
                    img = {events[0].imgURL}
                    detail = {events[0].content}
                />
                <EventCards 
                    img = {events[0].imgURL}
                    detail = {events[0].content}
                />
                <EventCards 
                    img = {events[0].imgURL}
                    detail = {events[0].content}
                />
            </div>
        </div>
    );
}