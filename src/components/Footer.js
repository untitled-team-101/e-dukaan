import React from 'react';
import './styles/footer.scss'
import {Link} from 'react-router-dom'

function Footer(props) {
  return (
    <div>
    <div className="container-fluid" style={{backgroundColor:"#3e4551", padding:"30px 0px"}}>
    <div className="container text-white">
      <div className="row text-start">
        <div className="col-lg-3 col-sm-6">

          <h3>E-DUKAAN</h3>
          <div className="footer-decoration"/>
          <br />
          <p className="company-description font-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et delectus ullam quasi, aut harum magni</p>

        </div>
        <div className="col-lg-3 col-sm-6 "><h3>PRODUCTS</h3>
          <div className="footer-decoration"/>
          <br />
          <ul className="product-ul-footer font-small">
            <li className="product-li-footer"> <Link className="text-white text-decoration-none" to="/">Camera</Link></li>
            <li className="product-li-footer"><Link className="text-white text-decoration-none" to="/">Laptop</Link></li>
            <li className="product-li-footer"><Link className="text-white text-decoration-none" to="/">Grocery</Link></li>
            <li className="product-li-footer"><Link className="text-white text-decoration-none" to="/">Home Appliances</Link></li>
          </ul>
</div>
        <div className="col-lg-3 col-sm-6"><h3>USEFUL LINKS</h3>
          <div className="footer-decoration"></div>
          <br />
          <ul className="product-ul-footer font-small">
            <li className="product-li-footer"><Link className="text-white text-decoration-none" to="/">Your Account</Link></li>
            <li className="product-li-footer"><Link className="text-white text-decoration-none" to="/">Become an Affiliate</Link></li>
            <li className="product-li-footer"><Link className="text-white text-decoration-none" to="/">Shipping Rates</Link></li>
            <li className="product-li-footer"><Link className="text-white text-decoration-none" to="/">Help</Link></li>
          </ul></div>
        <div className="col-lg-3 col-sm-6"><h3>Contact</h3>
          <div className="footer-decoration"/>
          <br />
          <ul className="product-ul-footer font-small">
            <li className="product-li-footer"><i className="fad fa-briefcase"/> mumbai,India,400001.</li>
            <li className="product-li-footer"><i className="fas fa-envelope"/> edukaan@untitledteam.com</li>
            <li className="product-li-footer"><i className="fas fa-phone"/> +91 9876543210 </li>
            <li className="product-li-footer"><i className="fad fa-phone-office"/> 1800 1899 1714</li>
          </ul></div>
      </div>
      </div>
    </div>
    <nav className="navbar navbar-dark bg-primary">
    <div className="container-fluid">
      <Link className="navbar-brand m-auto" rel="noreferrer" target="_blank" to="https://github.com/untitled-team-101">&copy; UNTITLED TEAM</Link>
    </div>
  </nav>
  </div>
  );
}

export default Footer;