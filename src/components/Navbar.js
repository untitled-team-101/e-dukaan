import React from 'react';
import './styles/navbar.scss'
import {useDispatch, useSelector} from "react-redux";
import {showLoginPopup} from "../Redux/user/Actions";
import Login from "./Login";
import {Link} from "react-router-dom";

function NavBar() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><i className="fab fa-opencart"/> E-DUKAAN</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#avbarSupportedContent" aria-controls="avbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="avbarSupportedContent">
          <ul className="d-flex align-items-center navbar-nav">
            <li className='nav-item'>
              <a className="nav-link active login-btn" aria-current="page" href="#"
                 onClick={() => dispatch(showLoginPopup())}>
                <i className="far fa-user"/>
                {
                  user.loggedIn ? "profile" : "login"
                }
              </a>
              {
                user.popup ?
                  <Login/>
                  : ""
              }
            </li>
            <li className='nav-item'>

              <Link to='/cart'>
                <a className="nav-link active cart-btn" aria-current="page" href="#"><i
                  className="fad fa-shopping-cart"/></a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
