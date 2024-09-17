import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./CartItem.module.css";

function CartItem({ cartItem, cartItems, setCartItems }) {
  const [itemQuantity, setItemQuantity] = useState(cartItem.count);

  // Function to handle cart item deletion
  function handleDeleteCartItem(item) {
    setCartItems((cartItems) =>
      cartItems.filter((i) => i.product.id !== item.product.id)
    );
  }

  // Function to update cart items in the parent state
  function updateCartItems(item, newQuantity) {
    const updatedItems = cartItems.map((cartItem) =>
      cartItem.product.id === item.product.id
        ? { ...cartItem, count: newQuantity } // Update quantity in the specific item
        : cartItem
    );
    setCartItems(updatedItems);
  }

  // Handle increasing or decreasing item quantity
  function handleQuantityChange(amount) {
    const newQuantity = itemQuantity + amount;

    if (newQuantity > 0) {
      setItemQuantity(newQuantity); // Update local state
      updateCartItems(cartItem, newQuantity); // Update parent cartItems state
    }
  }

  return (
    <li className={styles.cartItem}>
      <img src={cartItem.product.image} alt="" />
      <div className={styles.titlePrice}>
        <span>
          <strong>{cartItem.product.title}</strong>
        </span>
        <span>${cartItem.product.price}</span>
      </div>
      <div className={styles.quantity}>
        <div>
          <span>
            <strong>Quantity</strong>
          </span>
          <Button
            type="cart-delete"
            onClick={() => {
              handleDeleteCartItem(cartItem);
            }}
          >
            &times;
          </Button>
        </div>
        <div className={styles.count}>
          <Button
            type="cart-quantity"
            onClick={() => {
              handleQuantityChange(-1);
            }}
          >
            -
          </Button>
          <span>{itemQuantity}</span>
          <Button
            type="cart-quantity"
            onClick={() => {
              handleQuantityChange(1);
            }}
          >
            +
          </Button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
