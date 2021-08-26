import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clearCart} from "../Redux/cart/Actions";
import {Link} from "react-router-dom";
import {addOrder} from "../Redux/orders/Actions";

// sm md lg xl
function CheckoutPage() {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch()

  const productCount = products.reduce((a, product) => {
    return a + product.count
  }, 0)

  const totalPrice = products.reduce((prev, curr, ind, array) => {
    return prev + (curr.price * curr.count);
  }, 0)

  const placeOrder = (e) => {
    // dispatch(clearCart())
    dispatch(addOrder({
      products,
      totalPrice
    }))
    window.location.hash = "/orders"
    e.preventDefault()
  }

  return (
    <div className="container my-3">
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            <span className="badge bg-primary rounded-pill">{productCount}</span>
          </h4>
          <ul className="list-group mb-3">
            {
              products.map((product, i) => {
                return <li className="list-group-item d-flex justify-content-between lh-sm" key={i}>
                  <div>
                    <h6
                      className="my-0">{product.title.length > 15 ? product.title.slice(0, 15) + "..." : product.title}</h6>
                    <small className="text-muted">Qty: {product.count} x ₹ {product.price} </small>
                  </div>
                  <span className="text-muted">₹ {product.count * product.price}</span>
                </li>
              })
            }

            {/*// TODO: Add promo function*/}
            {/*<li className="list-group-item d-flex justify-content-between bg-light">*/}
            {/*  <div className="text-success">*/}
            {/*    <h6 className="my-0">Promo code</h6>*/}
            {/*    <small>EXAMPLECODE</small>*/}
            {/*  </div>*/}
            {/*  <span className="text-success">−$5</span>*/}
            {/*</li>*/}

            <li className="list-group-item d-flex justify-content-between">
              <span>Total (₹)</span>
              <strong> ₹ {totalPrice}</strong>
            </li>
          </ul>

          {/*<form className="card p-2">*/}
          {/*  <div className="input-group">*/}
          {/*    <input type="text" className="form-control" placeholder="Promo code"/>*/}
          {/*    <button type="submit" className="btn btn-secondary">Redeem</button>*/}
          {/*  </div>*/}
          {/*</form>*/}

        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" noValidate="" onSubmit={placeOrder}>
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="" required={true}/>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="" required={true}/>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="text" className="form-control" id="phone" placeholder="9876543210"/>
                <div className="invalid-feedback">
                  Please enter a valid phone number for shipping updates.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">Email <span
                  className="text-muted">(Optional)</span></label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required={true}/>
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address2" className="form-label">Address 2 <span
                  className="text-muted">(Optional)</span></label>
                <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
              </div>

              <div className="col-md-5">
                <label htmlFor="country" className="form-label">Country</label>
                <select className="form-select" id="country" required={true}>
                  <option value="">Choose...</option>
                  <option>India</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="zip" className="form-label">State</label>
                <input type="text" className="form-control" id="zip" placeholder="" required={true}/>
                <div className="invalid-feedback">
                  Zip code required.
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="zip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder="" required={true}/>
                <div className="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>

            <hr className="my-4"/>

            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="same-address"/>
              <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing
                address</label>
            </div>

            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="save-info"/>
              <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
            </div>

            <hr className="my-4"/>

            <h4 className="mb-3">Payment</h4>

            <div className="my-3">
              <div className="form-check">
                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked=""
                       required={true}/>
                <label className="form-check-label" htmlFor="credit">Credit card</label>
              </div>
              <div className="form-check">
                <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required={true}/>
                <label className="form-check-label" htmlFor="debit">Debit card</label>
              </div>
              <div className="form-check">
                <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required={true}/>
                <label className="form-check-label" htmlFor="paypal">PayPal</label>
              </div>
            </div>

            <div className="row gy-3">
              <div className="col-md-6">
                <label htmlFor="cc-name" className="form-label">Name on card</label>
                <input type="text" className="form-control" id="cc-name" placeholder="" required={true}/>
                <small className="text-muted">Full name as displayed on card</small>
                <div className="invalid-feedback">
                  Name on card is required
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="cc-number" className="form-label">Credit card number</label>
                <input type="text" className="form-control" id="cc-number" placeholder="" required={true}/>
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                <input type="text" className="form-control" id="cc-expiration" placeholder="" required={true}/>
                <div className="invalid-feedback">
                  Expiration date required
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="cc-cvv" className="form-label">CVV</label>
                <input type="text" className="form-control" id="cc-cvv" placeholder="" required={true}/>
                <div className="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>

            <hr className="my-4"/>
            <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
