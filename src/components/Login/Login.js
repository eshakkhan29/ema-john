import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-5">
      <div className="form-div">
        <form>
          <h2 className="mb-5">Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="name" placeholder="Email" id="" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id=""
            />
          </div>
          <input className="submit-button" type="submit" value="Login" />
        </form>
        <div className="text-center">
          <p>
            New to Ema-john?
            <Link className="navigate-link" to="/signup">
              {" "}
              Create New Account
            </Link>
          </p>
        </div>
        <div className="d-flex justify-content-around mt-4">
          <div className="left-line"></div> <span className="or">or</span>{" "}
          <div className="right-line"></div>
        </div>
        <button className="google-log-sign-button mt-4">Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;
