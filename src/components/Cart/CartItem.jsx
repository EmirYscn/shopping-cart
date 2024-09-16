import Button from "../Button/Button";
import styles from "./CartItem.module.css";

function CartItem({ cartItem }) {
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
        <span>
          <strong>Quantity</strong>
        </span>
        <div className={styles.count}>
          <Button type="cart-quantity">-</Button>
          <span>{cartItem.count}</span>
          <Button type="cart-quantity">+</Button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
