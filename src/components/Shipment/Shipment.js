import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");

  const handelName = event =>{
    setName(event.target.value);
  }
  const handelAdders = event => {
    setAddress(event.target.value);
  }
  const handelNumber = event =>{
    setNumber(event.target.value);
  }
  const handelSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="mt-5 form-container">
      <div className="form-div">
        <form onSubmit={handelSubmit}>
          <h2 className="mb-5">your shipment information</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input onClick={handelName} type="text" name="name" placeholder="Your Name" id="" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input value={user?.email} readOnly type="email" name="name" placeholder="Email" id="" />
          </div>
          <div className="form-group">
            <label htmlFor="Address">Address</label>
            <input onClick={handelAdders} type="text" name="address" placeholder="Address" id="" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Mobile number</label>
            <input onClick={handelNumber}
              type="text"
              name="mobileNumber"
              placeholder="Mobile number"
              id=""
            />
          </div>
          <input className="submit-button" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
