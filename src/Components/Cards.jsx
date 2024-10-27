import React from 'react'
// import photo from './images.jpeg'
import config from './config.json'
// import './Card.css'

export default function Cards() {
    let cardArr=config;
  
  return (
    <div className="container">
    <div className='row px-5 my-5'>
    {cardArr.map((eachCard,index)=>(
      <div className="col-lg-3 col-sm-6 p-3">
      <div className='container'>
      <div className="card-container">
      <div className="card text-center hvr" id='card'>
        <img src={require('./'+eachCard.img+'.jpeg')} className="card-img-top" id='img' alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{eachCard.title}</h5>
            <p className="card-text"> Academic 
                                Programmes 
                                for Industry 
                                Professionals
            </p>
        </div>
        </div>
      </div>
      </div>
      </div>
      
  ))} 
  </div>
  </div>
  )
}



