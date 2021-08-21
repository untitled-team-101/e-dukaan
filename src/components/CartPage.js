import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart} from "../Redux/cart/Actions";

function CartPage() {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch()
  if(products.length === 0)
    return "Nothing in cart"
  return (
    <>
      {
        products.map((product, indx) => {
          return <div key={indx}>
            <div>{product.name}</div>
            <div>Rs. {product.price}/-</div>
            <button onClick={()=>dispatch(removeFromCart(product))}>Remove from cart</button>
          </div>
        })
      }
    </>
  );
}

export default CartPage;
