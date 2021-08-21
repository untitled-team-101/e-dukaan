import React from 'react';
import {addToCart} from "../Redux/cart/Actions";
import {useDispatch, useSelector} from "react-redux";

function LandingPage() {
  const products = useSelector(state => state.products.chosenProducts);
  const dispatch = useDispatch()
  if(!products)
    return "No Product to show"
  return (
    <>
      {
        products.map((product, indx) => {
          return <div key={indx}>
            <div>{product.name}</div>
            <div>Rs. {product.price}/-</div>
            <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
          </div>
        })
      }
    </>
  );
}

export default LandingPage;
