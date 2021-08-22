import React, {useState} from 'react';
import {loginUser, logoutUser, removeLoginPopup} from "../Redux/user/Actions";
import {useDispatch, useSelector} from "react-redux";

function Login() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  // TODO: add other fields
  const userData = {
    userName,
    userEmail
  }
  return (
    <div>
      {
        user.loggedIn ?
          <>
            <div>{user.userName}</div>
            <div>{user.userEmail}</div>
            <button onClick={()=>dispatch(removeLoginPopup())}>Cancel</button>
            <button onClick={()=>dispatch(logoutUser())}>Logout</button>
          </>
          : <>
            <input type="text" onChange={(e)=>setUserName(e.target.value)}/>
            <input type="email" onChange={(e)=>setUserEmail(e.target.value)}/>
            <button onClick={()=>dispatch(removeLoginPopup())}>Cancel</button>
            <button onClick={()=>dispatch(loginUser(userData))}>Login</button>
          </>
      }
    </div>
  );
}

export default Login;
