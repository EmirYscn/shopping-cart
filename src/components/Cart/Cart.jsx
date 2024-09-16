import { useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";

import styles from "./Cart.module.css";

function Cart() {
  const { cartItems, setCartItems } = useOutletContext();
  console.log(cartItems);
  return (
    <div className={styles.cart}>
      <h1>YOUR CART</h1>
      <ul>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.product.id} cartItem={cartItem} />
        ))}
      </ul>
    </div>
  );
}

export default Cart;
