import React from "react";
import "./login.css"

function Login(params) {
    return(
        <form className="one">
        <div className="">
          <input type="text" placeholder="Login ID " />
        </div>
        <div className="">
          <input type="password" placeholder="Password" />
        </div>
        <div className="">
          <button type="button">Log In</button>
        </div>
      </form>
    )
}

export default Login;