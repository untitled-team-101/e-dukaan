import React, {useEffect} from 'react';
import ProductCard from "./productcard";
import './styles/homepage.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectCategory} from "../Redux/products/Actions";
import {Link} from "react-router-dom";

function LandingPage() {
  const products = useSelector(state => state.products.chosenProducts)
  const categories = useSelector(state => state.products.allCategories)
  const dispatch = useDispatch()
  if (!products)
    return "No Product to show"
  else
    return (
      <div className='container'>
        <div className='row mt-5'>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
              <Link className="navbar-brand" to="#">Categories</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                      data-bs-target="#navbar2" aria-controls="navbar2"
                      aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
              </button>
              <div className="collapse navbar-collapse" id="navbar2">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {
                    categories.map((category, i)=>{
                      return <li className="nav-item dropdown" key={i}>
                        <div className="nav-link" onClick={() => dispatch(selectCategory(category))}>
                          {category}
                        </div>
                      </li>
                    })
                  }
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
                  <img src="https://source.unsplash.com/600x200?products" className="d-block w-100 rounded-3"
                       alt="..."/>
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
          {
            products.map((product, indx) => {
              return (
                <ProductCard product={product} key={indx}/>
              );
            })
          }
        </div>
      </div>
    );
}

export default LandingPage;
