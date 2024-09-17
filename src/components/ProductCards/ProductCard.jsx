import { useState } from "react";
import Button from "../Button/Button";
import styles from "./ProductCard.module.css";
import StarRating from "../StarRating/StarRating";

import { truncate } from "../../utils/truncDes";

function ProductCard({ product, onAddCartItems }) {
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

    const price = itemCount * product.price;
    onAddCartItems({ product, count: itemCount });
    setItemCount(0);
  }

  return (
    <li className={styles.productCard}>
      <div className={styles.title}>
        <h3>{product.title}</h3>
      </div>
      <div className={styles.desc}>
        <p>{truncate(product.description, 100)}&hellip;</p>
      </div>
      <div className={styles.image}>
        <img src={product.image} alt="image of product" />
      </div>
      <div className={styles.cost}>
        <span className={styles.price}>${product.price}</span>
        <span className={styles.ratings}>
          <StarRating
            size={24}
            defaultRating={Math.round(product.rating.rate)}
          />
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
