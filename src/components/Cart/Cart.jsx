import { useMemo } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";

import styles from "./Cart.module.css";
import Button from "../Button/Button";

function Cart() {
  document.title = "Cart";
  const { cartItems, setCartItems } = useOutletContext();

  const subtotal = useMemo(() => {
    return cartItems?.reduce(
      (acc, cur) => (acc += cur.product.price * cur.count),
      0
    );
  }, [cartItems]);

  const navigate = useNavigate();
  return (
    <div className={cartItems.length ? styles.cart : styles.cartEmpty}>
      {!cartItems.length ? (
        <>
          <h2>Your cart is empty</h2>
          <Button type="cartEmpty" onClick={() => navigate("/shop/all")}>
            Continue Shopping
          </Button>
        </>
      ) : (
        <>
          <Button type="back" onClick={() => navigate(-1)}>
            <img src="/back.png" alt="" />
          </Button>
          <h1>YOUR CART</h1>
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
          <div className={styles.checkout}>
            <span>
              <strong>SUBTOTAL</strong>
            </span>
            <span>
              <strong>${subtotal.toFixed(2)}</strong>
            </span>
            <span>Shipping calculated at checkout</span>
            <Button type="checkout">CHECK OUT</Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
