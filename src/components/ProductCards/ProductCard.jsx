import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import styles from "./ProductCard.module.css";
import StarRating from "../StarRating/StarRating";

function ProductCard({ product, onAddCartItems }) {
  const [itemCount, setItemCount] = useState(0);
  const navigate = useNavigate();

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

  function handleProductClick() {
    console.log(product.id);
    navigate(`/shop/all/product/${product.id}`);
  }

  return (
    <li className={styles.productCard}>
      <div className={styles.title} onClick={handleProductClick}>
        <h3>{product.title}</h3>
      </div>
      {/* <div className={styles.desc}>
        <p>
          <em>{truncate(product.description, 100)}&hellip;</em>
        </p>
      </div> */}
      <div className={styles.image} onClick={handleProductClick}>
        <img src={product.image} alt="image of product" />
      </div>
      <div className={styles.cost}>
        <span className={styles.price}>${product.price}</span>
        <span className={styles.ratings}>
          <StarRating
            size={20}
            defaultRating={Math.round(product.rating.rate)}
          />
        </span>
      </div>
      <div className={styles.count}>
        <Button type="dec" onClick={(e) => handleDesc(e)}>
          -
        </Button>
        <span>{itemCount}</span>
        <Button type="inc" onClick={(e) => handleInc(e)}>
          +
        </Button>
      </div>
      <div className={styles.cart}>
        <Button type="details" onClick={() => handleProductClick()}>
          View Details
        </Button>
        <Button type="cart" onClick={(e) => handleAddCart(e)}>
          Add to Cart
        </Button>
      </div>
    </li>
  );
}

export default ProductCard;
