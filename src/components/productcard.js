import React from 'react';
import {addToCart} from "../Redux/cart/Actions";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";


function ProductCard({product}) {
  const dispatch = useDispatch()
  return (
    <div className="card rounded mb-3 mx-sm-0 col-md-6">
      <div className="row g-0 h-100">
        <div className="col-md-4"
             style={{
               backgroundImage: 'url(' + product.image + ')',
               backgroundPosition: 'center',
               backgroundSize: "contain",
               backgroundRepeat: "no-repeat"
             }}>
        </div>
        <div className="col-md-7 offset-md-1">
          <div className="card-body" style={{textAlign: "left"}}>
            <Link to={'/product/' + product.id}>
              <h2 className="card-title">{product.title}</h2>
            </Link>
            <span className="badge bg-primary">{product.adjective}</span>
            <div className='row'>
              <h3>{product.price}</h3>
            </div>
            <div className='d-flex'>
              {
                [...Array(product.rating)].map((value, index, array) => {
                  return (
                    <i className="fas fa-star rating"/>
                  );
                })
              }
            </div>
            <div className='row mt-3'>
              <button className='btn btn-primary' onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;