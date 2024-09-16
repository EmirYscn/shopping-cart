import { useState } from "react";
import Button from "../Button/Button";
import styles from "./ProductCard.module.css";

function ProductCard({ product, onSetCartCount, onSetCartPrice }) {
  const [itemCount, setItemCount] = useState(0);

  function handleDesc() {
    if (itemCount === 0) return;
    setItemCount((cnt) => (cnt = cnt - 1));
  }

  function handleInc() {
    setItemCount((cnt) => (cnt = cnt + 1));
  }

  function handleAddCart() {
    if (itemCount === 0) return;
    onSetCartCount();

    const price = itemCount * product.price;
    onSetCartPrice(price);

    setItemCount(0);
  }

  return (
    <li className={styles.productCard}>
      <div className={styles.title}>
        <h3>{product.title}</h3>
      </div>
      <div className={styles.desc}>
        <p>{product.description}</p>
      </div>
      <div className={styles.image}>
        <img src={product.image} alt="image of product" />
      </div>
      <div className={styles.cost}>
        <span className={styles.price}>${product.price}</span>
        <span className={styles.ratings}>
          {product.rating.rate} / {product.rating.count}
        </span>
      </div>
      <div className={styles.count}>
        <Button type="dec" onClick={() => handleDesc()}>
          -
        </Button>
        <span>{itemCount}</span>
        <Button type="inc" onClick={() => handleInc()}>
          +
        </Button>
      </div>
      <div className={styles.cart}>
        <Button type="cart" onClick={() => handleAddCart()}>
          Add to Cart
        </Button>
      </div>
    </li>
  );
}

export default ProductCard;
