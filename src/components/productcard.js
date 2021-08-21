import React from 'react';
import rating from '../img/rating.svg';

function Productcard({image, title, adjective, rating, price}) {
  return (
    <div className="card rounded mx-md-5 mb-3 mx-sm-0 col-md-5">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start"/>
        </div>
        <div className="col-md-7 offset-md-1">
          <div className="card-body" style={{textAlign: "left"}}>
            <h2 className="card-title">{title}</h2>
            <span className="badge bg-primary">{adjective}</span>
            <div className='row'>
              <h3>{price}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productcard;