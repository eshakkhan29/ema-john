import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Review.css";

const Review = ({ product, removeReview }) => {
  const { name, quantity, shipping, price, img } = product;
  return (
    <div className="review-item mt-3 p-2">
      <div className="d-flex">
        <img className="rounded-3" width={90} src={img} alt="" />
        <div className="d-flex justify-content-between align-items-center w-100 ms-2">
          <div className="info">
            <h4 className="m-0" title={name}>
              {name.length > 20 ? name.slice(0, 20) + "..." : name}
            </h4>
            <p>
              Price: <span>${price}</span>
            </p>
            <p>
              Shipping: <span>${shipping}</span>
            </p>
            <p>
              Quantity: <span>{quantity}</span>
            </p>
          </div>
          <div>
            <button
              onClick={() => removeReview(product)}
              className="delete-button"
            >
              <FontAwesomeIcon
                className="dbtn"
                icon={faTrashAlt}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
