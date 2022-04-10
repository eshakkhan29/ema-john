import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="mt-5 form-container">
      <div className="form-div">
        <form>
          <h2 className="mb-5">SignUp</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Your Name" id="" />
          </div>
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              id=""
            />
          </div>
        </form>
        <input className="submit-button" type="submit" value="Sign Up" />
        <div className="text-center">
          <p>
            Already have an account?{" "}
            <Link className="navigate-link" to="/login">
              {" "}
              Login
            </Link>
          </p>
        </div>
        <div className="d-flex justify-content-around mt-4">
            <div className="left-line"></div> <span className="or">or</span> <div className="right-line"></div>
        </div>
        <button className="google-log-sign-button mt-4">Continue with Google</button>
      </div>
      
    </div>
  );
};

export default Signup;
