import React from 'react';
import './styles/footer.scss'
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
            <li className="product-li-footer"> <a className="text-white text-decoration-none" href="">Camera</a></li>
            <li className="product-li-footer"><a className="text-white text-decoration-none" href="">Laptop</a></li>
            <li className="product-li-footer"><a className="text-white text-decoration-none" href="">Grocery</a></li>
            <li className="product-li-footer"><a className="text-white text-decoration-none" href="">Home Appliances</a></li>
          </ul>
</div>
        <div className="col-lg-3 col-sm-6"><h3>USEFUL LINKS</h3>
          <div className="footer-decoration"></div>
          <br />
          <ul className="product-ul-footer font-small">
            <li className="product-li-footer"><a className="text-white text-decoration-none" href="">Your Account</a></li>
            <li className="product-li-footer"><a className="text-white text-decoration-none" href="">Become an Affiliate</a></li>
            <li className="product-li-footer"><a className="text-white text-decoration-none" href="">Shipping Rates</a></li>
            <li className="product-li-footer"><a className="text-white text-decoration-none" href="">Help</a></li>
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
      <a className="navbar-brand m-auto" rel="noreferrer" target="_blank" href="https://github.com/untitled-team-101">&copy; UNTITLED TEAM</a>
    </div>
  </nav>
  </div>
  );
}

export default Footer;