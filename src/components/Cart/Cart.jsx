import { useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";

import styles from "./Cart.module.css";

function Cart() {
  const { cartItems, setCartItems } = useOutletContext();
  console.log(cartItems);
  return (
    <div className={styles.cart}>
      <h1>YOUR CART</h1>
      {!cartItems.length ? (
        <h2>Your cart is empty</h2>
      ) : (
        <ul>
          {cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.product.id}
              cartItem={cartItem}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
