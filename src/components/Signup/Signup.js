import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  const handelNameBlur = (event) => {
    setName(event.target.value);
  };
  const handelEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handelPasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handelConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };
  if (user) {
    navigate("/");
  }
  const handelCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return setError("your password not match");
    }
    if(password <= 6){
      return setError('your Password must be 6 characters or longer')
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="mt-5 form-container">
      <div className="form-div">
        <form onSubmit={handelCreateUser}>
          <h2 className="mb-5">SignUp</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              onBlur={handelNameBlur}
              type="text"
              name="name"
              placeholder="Your Name"
              id=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handelEmailBlur}
              type="email"
              name="name"
              placeholder="Email"
              id=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handelPasswordBlur}
              type="password"
              name="password"
              placeholder="Password"
              id=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword"> Confirm Password</label>
            <input
              onBlur={handelConfirmPasswordBlur}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              id=""
            />
            <p className="text-danger">{error}</p>
          </div>
          <input className="submit-button" type="submit" value="Sign Up" />
        </form>
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
          <div className="left-line"></div> <span className="or">or</span>{" "}
          <div className="right-line"></div>
        </div>
        <button onClick={()=> signInWithGoogle()} className="google-log-sign-button mt-4">
          <FontAwesomeIcon className="google-icon" icon={faUpRightFromSquare} />{" "}
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
