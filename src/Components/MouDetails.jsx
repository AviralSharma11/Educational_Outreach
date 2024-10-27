import React from "react";
import "../Styles/MoU.css";

export default function MoUDetails({sno , nature , title , signed , duration}){
    return(
            <table className="mou">
            <tr>
                <td>{sno}</td>
                <td>{nature}</td>
                <td>{title}</td>
                <td>{signed}</td>
                <td>{duration}</td>
            </tr>
            </table>
    );
}