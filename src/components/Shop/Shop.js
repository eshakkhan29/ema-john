import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducs";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [product, setProduct] = useProducts([]);
  const [cart, setCart] = useCart(product);

  const addToCart = (products) => {
    let newCart = [];
    const oldCart = cart.find((product) => product.id === products.id);
    if (!oldCart) {
      products.quantity = 1;
      newCart = [...cart, products];
    } else {
      const rest = cart.filter((product) => product.id !== products.id);
      oldCart.quantity = oldCart.quantity + 1;
      newCart = [...rest, oldCart];
    }
    setCart(newCart);
    addToDb(products.id);
  };

  return (
    <div className="container-fluid">
      <div className="row row-cols-lg-2 row-cols-1 d-flex justify-content-between">
        <div className="col-lg-10 col-7 p-lg-5 pt-4">
          <div className="row row-cols-lg-3 row-cols-1 g-lg-4 gy-4 p-lg-5">
            {product.map((product) => (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
              ></Product>
            ))}
          </div>
        </div>
        <div className="col-lg-2 col-5 p-0">
          <Cart item={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
