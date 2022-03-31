import { useEffect, useState } from "react";
import { getStorCart } from "../utilities/fakedb";

const useCart = (product) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storCart = getStorCart();
    const saveProduct = [];
    for (const id in storCart) {
      const addedProduct = product.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storCart[id];
        addedProduct.quantity = quantity;
        saveProduct.push(addedProduct);
      }
    }
    setCart(saveProduct);
  }, [product]);
  return [cart, setCart];
};

export default useCart;
