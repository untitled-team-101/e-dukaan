import React, {useState} from 'react';
import {loginUser, logoutUser, removeLoginPopup} from "../Redux/user/Actions";
import {useDispatch, useSelector} from "react-redux";
import './styles/login.scss'

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
  const loggedInOrNot = () => {
    user.loggedIn ? dispatch(logoutUser()) : dispatch(loginUser(userData))
  }
  return (
    <div>
      {/* {
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
      } */}
      <form onSubmit={() => loggedInOrNot()}>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> { user.loggedIn ? "Profile" : "Login" }</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      {
        user.loggedIn ?
          <>
            <div className="user-name">{user.userName}</div>
            <div className="user-email">{user.userEmail}</div>
          </>
          : <>
          <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">user name</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={(e)=>setUserName(e.target.value)} required={true}/>
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Email</span>
  <input type="email" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" onChange={(e)=>setUserEmail(e.target.value)} required={true}/>
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Password</span>
  <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" required={true}/>
</div>
          </>
      }
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" >{ user.loggedIn ?  "Logout" : "Login"}</button>
      </div>
    </div>
  </div>
</div></form>
    </div>
  );
}

export default Login;
