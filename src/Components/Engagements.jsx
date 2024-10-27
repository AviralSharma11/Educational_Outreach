import React from 'react';
import '../Styles/Engagements.css';

const mouData = [
  {
    id: 1,
    nature: 'MoU',
    title: 'Madhya Pradesh State Skill Development and Employment Generation Board (MPSSDEGB)',
    signedOn: '4/10/2023',
    duration: '5 Years',
  },
  {
    id: 2,
    nature: 'MoU',
    title: 'Sant Shiromani Ravidas Global Skill Park',
    signedOn: '4/10/2023',
    duration: '5 Years',
  },
  {
    id: 3,
    nature: 'MoU',
    title: 'VECV (Research collaboration between IIT and VECV)',
    signedOn: '31/07/2023',
    duration: '5 Years',
  },
  {
    id: 4,
    nature: 'MoU',
    title: 'VECV (Executive MTech program in Electric Vehicle Technology by IIT and VECV employees)',
    signedOn: '31/07/2023',
    duration: '5 Years',
  },
  {
    id: 5,
    nature: 'MoU',
    title: 'Dept of Technical Education and Skill Development and Employment (Part Time Ph.D.)',
    signedOn: '28/08/2023',
    duration: '5 Years',
  },
  {
    id: 6,
    nature: 'MoU',
    title: 'Dept of Technical Education and Skill Development and Employment (Inbound UG students)',
    signedOn: '28/08/2023',
    duration: '5 Years',
  },
];

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
              {mouData.map((mou) => (
                <tr key={mou.id}>
                  <td>{mou.id}</td>
                  <td>{mou.nature}</td>
                  <td>{mou.title}</td>
                  <td>{mou.signedOn}</td>
                  <td>{mou.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
