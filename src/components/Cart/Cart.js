import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = ({ item, removeCart, children }) => {
  let price = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of item) {
    quantity = quantity + product.quantity;
    price = price + product.price * product.quantity;
    shipping = shipping + product.shipping * product.quantity;
  }
  let tax = parseFloat((price * 0.1).toFixed(2));
  const grandTotal = (price + shipping + tax).toFixed(2);

  return (
    <div className="cart p-5">
      <h3 className="text-center">Order Summary</h3>
      <div className="mt-5">
        <h6 className="fs-5">Selected Items: {quantity}</h6>
        <p>Total Price: ${price}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h5>Grand Total: ${grandTotal}</h5>
      </div>
      <div className="text-center mt-5">
        <button onClick={removeCart} className="btn btn-danger w-75 p-2 mb-3">
          Clear Cart
          <span className="ms-2">
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Cart;
