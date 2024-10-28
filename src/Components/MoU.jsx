import React from "react";
import "../Styles/MoU.css";

function MoU({ data }) {
    return (
        <div id="MOU">
            <h1 className="heading">MoUs</h1>
            <div className="table-container">
                <table className="mou-table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Nature</th>
                            <th>Purpose/Title</th>
                            <th>Signed on</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.nature}</td>
                                <td>{item.title}</td>
                                <td>{item.signed}</td>
                                <td>{item.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MoU;
