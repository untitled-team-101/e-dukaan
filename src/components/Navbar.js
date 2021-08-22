import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {showLoginPopup} from "../Redux/user/Actions";
import Login from "./Login";
import {Link} from "react-router-dom";

function NavBar() {
  const user = useSelector(state=> state.user)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(showLoginPopup())}>{
        user.loggedIn ? "profile" : "login"
      }</button>
      <Link to='/cart'>
        <button>Cart</button>
      </Link>
      {
        user.popup ?
          <Login/>
          : ""
      }
    </div>
  );
}

export default NavBar;
