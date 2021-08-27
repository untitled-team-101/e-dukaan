import React from 'react';
import './styles/navbar.scss'
import {useDispatch, useSelector} from "react-redux";
import {showLoginPopup} from "../Redux/user/Actions";
import Login from "./Login";
import {Link} from "react-router-dom";

function NavBar() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  return (<>
      <div className="of-hidden">
        <nav className="navbar w-100 sticky-top navbar-dark bg-primary">
          <div className="container-fluid row">
            <div className="col-lg-2 col-md-3 col-4">
              <Link className="nav-link active login-btn" aria-current="page" to="#"
                //  onClick={() => dispatch(showLoginPopup())}
                    data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="far fa-user"/>
                {
                  user.loggedIn ? "profile" : "login"
                }
              </Link>
              {
                user.popup ?
                  ""
                  : ""
              }
            </div>
            <div className="col-lg-8 col-md-6 col-6"><Link className="navbar-brand brand-name-nav" to="#">
              <i className="fab fa-opencart"/> E-DUKAAN</Link>
            </div>
            <div className="col-lg-2 col-md-3 col-2">
              <Link to='/cart' className="nav-link active cart-btn" aria-current="page">
                <i className="fad fa-shopping-cart"/>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <Login/>
    </>
  );
}

export default NavBar;
