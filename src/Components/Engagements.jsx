import React from 'react';
import '../Styles/Engagements.css'

export default function Engagements() {
  return (
    <>
      <div className="title-container">
        <h1 className="title">MoUs</h1>
      </div>
      <div className="table-container">
        <div className="table-responsive">
          <table className="table">
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
              <tr>
                <td>1</td>
                <td>MoU</td>
                <td>Madhya Pradesh State Skill Development and Employment Generation Board (MPSSDEGB)</td>
                <td>4/10/2023</td>
                <td>5 Years</td>
              </tr>
              <tr>
                <td>2</td>
                <td>MoU</td>
                <td>Sant Shiromani Ravidas Global Skill Park</td>
                <td>4/10/2023</td>
                <td>5 Years</td>
              </tr>
              <tr>
                <td>3</td>
                <td>MoU</td>
                <td>VECV (Research collaboration between IIT and VECV)</td>
                <td>31/07/2023</td>
                <td>5 Years</td>
              </tr>
              <tr>
                <td>4</td>
                <td>MoU</td>
                <td>VECV (Executive MTech program in Electric Vehicle Technology by IIT and VECV employees)</td>
                <td>31/07/2023</td>
                <td>5 Years</td>
              </tr>
              <tr>
                <td>5</td>
                <td>MoU</td>
                <td>Dept of Technical Education and Skill Development and Employment (Part Time Ph.D.)</td>
                <td>28/08/2023</td>
                <td>5 Years</td>
              </tr>
              <tr>
                <td>6</td>
                <td>MoU</td>
                <td>Dept of Technical Education and Skill Development and Employment (Inbound UG students)</td>
                <td>28/08/2023</td>
                <td>5 Years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
