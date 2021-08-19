import './App.scss';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import CartPage from "./components/CartPage";
import LandingPage from "./components/LandingPage";
import CheckoutPage from "./components/CheckoutPage";
import ProductPage from "./components/ProductPage";
import OrderPage from "./components/OrderPage";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {loadProducts} from "./Redux/products/Actions";

function App() {
  console.log("hello");
  const products = useSelector(state => state.product.data);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, [])
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Switch>
          <Route to='/' exact component={LandingPage}/>
          <Route to='/cart' exact component={CartPage}/>
          <Route to='/checkout' exact component={CheckoutPage}/>
          <Route to='/product' exact component={ProductPage}/>
          <Route to='/orders' exact component={OrderPage}/>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
