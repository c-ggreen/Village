import "./Styles.css";
import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landingContainer">
      <div className="loginSection">
        <h1>Village</h1>
        <form className="form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="btnGroup">
            <Link to="/home">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button>Sign Up</button>
            </Link>
          </div>
        </form>
      </div>
      <div className="graphicSection">
        <h1>join the community.</h1>
      </div>
    </div>
  );
}

export default Landing;
