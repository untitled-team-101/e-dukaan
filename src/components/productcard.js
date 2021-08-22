import React from 'react';

function Productcard({image, title, adjective, rating, price}) {
  return (
    <div className="card rounded mb-3 mx-sm-0 col-md-6">
      <div className="row g-0">
        <div className="col-md-4" style={{backgroundImage: 'url('+image+')', backgroundPosition: 'center', backgroundSize: "cover"}}>
        </div>
        <div className="col-md-7 offset-md-1">
          <div className="card-body" style={{textAlign: "left"}}>
            <h2 className="card-title">{title}</h2>
            <span className="badge bg-primary">{adjective}</span>
            <div className='row'>
              <h3>{price}</h3>
            </div>
            <div className='d-flex'>
              {
                [...Array(rating)].map((value, index, array) => {
                  return (
                    <i className="fas fa-star rating"/>
                  );
                })
              }
            </div>
            <div className='row mt-3'>
              <button className='btn btn-primary'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productcard;