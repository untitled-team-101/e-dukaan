import React, {useEffect} from 'react';
import Productcard from "./productcard";
import './styles/homepage.scss';

function LandingPage(props) {
  return (
    <div className='container'>
      <div className='row mt-5'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <a className="navbar-brand" href="#">Categories</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbar2" aria-controls="navbar2"
                    aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbar2">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                     data-bs-toggle="dropdown" aria-expanded="false">
                    Laptop
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
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                     data-bs-toggle="dropdown" aria-expanded="false">
                    Tablet
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
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                     data-bs-toggle="dropdown" aria-expanded="false">
                    Mobile
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
              </ul>

              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className='row my-5'>
        <div className='col-md-8'>
          <div id="carouselExampleControls" className="carousel slide rounded" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://source.unsplash.com/600x200?product" className="d-block w-100 rounded-3" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://source.unsplash.com/600x200?products" className="d-block w-100 rounded-3" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://source.unsplash.com/600x200?product,airpods" className="d-block w-100 rounded-3"
                     alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"/>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"/>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className='col-md-4'>
          <ul className="list-group">
            <li className="list-group-item">
              <div className='container d-flex justify-content-between align-items-center'>
                An item
                <span className="badge rounded-pill bg-danger">12</span>
              </div>
            </li>
            <li className="list-group-item">
              <div className='container d-flex justify-content-between align-items-center'>
                An item
                <span className="badge rounded-pill bg-danger">12</span>
              </div>
            </li>
            <li className="list-group-item">
              <div className='container d-flex justify-content-between align-items-center'>
                An item
                <span className="badge rounded-pill bg-danger">12</span>
              </div>
            </li>
            <li className="list-group-item">
              <div className='container d-flex justify-content-between align-items-center'>
                An item
                <span className="badge rounded-pill bg-danger">12</span>
              </div>
            </li>
            <li className="list-group-item">
              <div className='container d-flex justify-content-between align-items-center'>
                An item
                <span className="badge rounded-pill bg-danger">12</span>
              </div>
            </li>
            <li className="list-group-item">
              <div className='container d-flex justify-content-between align-items-center'>
                An item
                <span className="badge rounded-pill bg-danger">12</span>
              </div>
            </li>
            <li className="list-group-item">
              <div className='container d-flex justify-content-between align-items-center'>
                An item
                <span className="badge rounded-pill bg-danger">12</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='row gy-5 gx-0'>
        <Productcard image='https://source.unsplash.com/600x600?product' title='This is a title' adjective='bestseller' price={'₹'+300} rating={5}/>
        <Productcard image='https://source.unsplash.com/600x600?product'/>
        <Productcard image='https://source.unsplash.com/600x600?product'/>
        <Productcard image='https://source.unsplash.com/600x600?product'/>
      </div>
    </div>
  );
}

export default LandingPage;