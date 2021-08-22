import React from 'react';
import './styles/navbar.scss'


function NavBar(props) {
  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><i className="fab fa-opencart"/> E-DUKAAN</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#avbarSupportedContent" aria-controls="avbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                 data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
            </li> */}
          </div>
          <ul className="d-flex align-items-center navbar-nav">
            <li className='nav-item'>
              <a className="nav-link active login-btn" aria-current="page" href="#"><i className="far fa-user"/>Login</a>
            </li>
            <li className='nav-item'>
              <a className="nav-link active cart-btn" aria-current="page" href="#"><i className="fad fa-shopping-cart"/></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;