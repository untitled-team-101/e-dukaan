import React from 'react';
import './styles/navbar.scss'


function NavBar(props) {
  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><i class="fab fa-opencart"></i> E-DUKAAN</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
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
          <form className="d-flex ">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-warning" type="submit"><i class="fal fa-search"></i></button>
              <a className="nav-link login-btn" aria-current="page" href="#"><i class="far fa-user"></i> <span class="login-500">Login</span></a>  
              <a className="nav-link cart-btn" aria-current="page" href="#"><i class="fad fa-shopping-cart"></i></a>  
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;