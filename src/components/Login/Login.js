import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handelEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handelPasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const handelLoginWithEmailPassword = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="mt-5">
      <div className="form-div">
        <form onSubmit={handelLoginWithEmailPassword}>
          <h2 className="mb-5">Login</h2>
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
        <button
          onClick={() => signInWithGoogle()}
          className="google-log-sign-button mt-4"
        >
          {" "}
          <FontAwesomeIcon
            className="google-icon"
            icon={faUpRightFromSquare}
          />{" "}
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
