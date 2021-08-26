import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decreaseCount, increaseCount, removeFromCart} from "../Redux/cart/Actions";
import './styles/cart.scss'
import {Link} from "react-router-dom";

function CartPage() {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch()
  if (products.length === 0)
    return "Nothing in cart"
  const totalPrice = products.reduce((prev, curr, ind, array) => {
    return prev + (curr.price * curr.count);
  }, 0)
  return (
    <>
      <div className="container">
        <div className="row d-md-flex d-none">
          <div className="col"/>
          <div className="col">Product</div>
          <div className="col">Price</div>
          <div className="col">Quantity</div>
          <div className="col">Amount</div>
          <div className="col">Remove</div>
        </div>
        {
          products.map((product, index) => {
            return <div className="row my-3 align-items-center" key={index}>
              <h5 className='d-md-none d-sm-block mb-3'>Product</h5>
              <div className="col-md d-flex justify-content-center align-items-center">
                <img className="p-img" src={product.image} alt={product.title}/>
              </div>
              <hr className="d-md-none d-sm-block mt-3"/>
              <div className="col-md">
                {product.title.length > 30 ? product.title.slice(0, 30) + "..." : product.title}
              </div>
              <hr className="d-md-none d-sm-block mt-3"/>
              <h6 className='d-md-none d-sm-block'>Price</h6>
              <div className="col-md">₹ {product.price}/-</div>
              <hr className="d-md-none d-sm-block mt-3"/>
              <h6 className='d-md-none d-sm-block'>Qty</h6>
              <div className="col-md">
                <div className="btn-group" role="group" aria-label="Basic example">
                  <span className="btn btn-sm btn-primary btn-rounded waves-effect waves-light c-btn ps-3"
                        onClick={() => dispatch(decreaseCount(product))}>-</span>
                  <span className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">{product.count}</span>
                  <span className="btn btn-sm btn-primary btn-rounded waves-effect waves-light c-btn pe-3"
                        onClick={() => dispatch(increaseCount(product))}>+</span>
                </div>
              </div>
              <hr className="d-md-none d-sm-block mt-3"/>
              <h6 className='d-md-none d-sm-block'>Amount</h6>
              <div className="col-md">₹ {product.price * product.count}/-</div>
              <hr className="d-md-none d-sm-block mt-3"/>
              <div className="col-md">
                <h6 className='d-md-none d-sm-block'>Remove</h6>
                <button className="btn-close" onClick={() => dispatch(removeFromCart(product))}/>
              </div>
              <hr className="d-md-none d-sm-block mt-3"/>
            </div>
          })
        }
        <div className='row d-flex justify-content-end align-items-center mt mt-4 mb-3'>
          <h5 className="col-2">Total</h5>
          <div className="col-2">₹ {totalPrice}/-</div>
          <div className="col-3">
            <Link to="/checkout">
              <button className="btn c-btn btn-primary ">Complete Purchase<i className="far fa-chevron-right"/></button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
