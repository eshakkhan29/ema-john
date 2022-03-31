import React from "react";
import "./Order.css";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducs";
import Cart from "../Cart/Cart";
import Review from "../Review/Review";
import { removeFromDb } from "../../utilities/fakedb";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
  const [product, setProduct] = useProducts();
  const [cart, setCart] = useCart(product);
  const removeReview = (product) => {
    const existProducts = cart.filter((pd) => pd.id !== product.id);
    setCart(existProducts);
    removeFromDb(product.id);
  };
  const navigate = useNavigate();
  const ProceedCheckout = () => {
    const path = "/inventory";
    navigate(path);
  };
  return (
    <div className="container">
      <div className="row row-cols-lg-2 row-cols-1 mt-5">
        <div className="col p-5 d-flex flex-column align-items-center justify-content-center">
          {cart.map((product) => (
            <Review
              removeReview={removeReview}
              key={product.id}
              product={product}
            ></Review>
          ))}
        </div>
        <div className="col p-5 position-relative">
          <Cart item={cart}>
            <button
              onClick={ProceedCheckout}
              className="btn checkout-btn w-75 p-2 text-white"
            >
              Proceed Checkout
              <span className="ms-2">
                <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
              </span>
            </button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
