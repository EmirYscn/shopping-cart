import ProductCard from "./ProductCard";

import styles from "./ProductCards.module.css";

function ProductCards({ products, onAddCartItems }) {
  return (
    <ul className={styles.productCards}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddCartItems={onAddCartItems}
        />
      ))}
    </ul>
  );
}

export default ProductCards;
