import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../Redux/cart/Actions";

function ProductPage({match}) {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.allProducts);
  if(!products){
    return <div>
      loading products..
    </div>
  }
  const productId = match.params.id
  const product = products.filter(product => product.id.toString() === productId)[0]
  if(!product){
    return <div>
      product not found
    </div>
  }
  return (
    <div>
      <div>{product.title}</div>
      <div>{product.description}</div>
      <div>Rs. {product.price}/-</div>
      <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
    </div>
  );
}

export default ProductPage;
