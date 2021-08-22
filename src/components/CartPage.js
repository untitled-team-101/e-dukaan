import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decreaseCount, increaseCount, removeFromCart} from "../Redux/cart/Actions";

function CartPage() {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch()
  if (products.length === 0)
    return "Nothing in cart"
  const totalPrice = products.reduce((prev, curr, ind, array)=>{
    return prev + (curr.price * curr.count);
  }, 0)
  return (
    <>
      <div>
        {
          products.map((product, ind) => {
            return <div key={ind}>
              <div>{product.name}</div>
              <div>Rs. {product.price}/-</div>
              <button onClick={() => dispatch(removeFromCart(product))}>Remove from cart</button><br/>
              {product.price * product.count}
              <button onClick={() => dispatch(decreaseCount(product))}>-</button>
              {product.count}
              <button onClick={() => dispatch(increaseCount(product))}>+</button>
            </div>
          })
        }
      </div>
      <div>
        {totalPrice}
      </div>
    </>
  );
}

export default CartPage;
