import React from "react";
import "./Login.css";
import googleicon from "./google_icon.png";
function Login() {
  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://www.bitsathy.ac.in/events/STCR-2022/assets/img/bit.png"
        alt="Login"
      />

      <div className="login__container">
        <img src={googleicon} alt="Login" />
        <p> Login with Google</p>
      </div>
    </div>
  );
}

export default Login;
