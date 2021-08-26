import React from 'react';
import {useSelector} from "react-redux";

function OrderPage() {
  const orders = useSelector(state => state.orders);
  return (
    <div className="container">
      Your orders
      <hr/>
      {
        orders.map((order, i) => {
          return <div key={i}>
            order placed at { new Date(order.placeTime).toLocaleString() } <br/>
            { order.deliveryTime < Date.now() ? "will be delivered within " : "delivered on " }
            { new Date(order.deliveryTime).toLocaleString() }
            <hr/>
          </div>
        })
      }
    </div>
  );
}

export default OrderPage;
