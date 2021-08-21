import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {showLoginPopup} from "../Redux/user/Actions";
import Login from "./Login";

function NavBar() {
  const user = useSelector(state=> state.user)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(showLoginPopup())}>{
        user.loggedIn ? "profile" : "login"
      }</button>
      {
        user.popup ?
          <Login/>
          : ""
      }
    </div>
  );
}

export default NavBar;
