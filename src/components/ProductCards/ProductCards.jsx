import ProductCard from "./ProductCard";

import styles from "./ProductCards.module.css";

function ProductCards({
  products,
  onSetCartCount,
  onSetCartPrice,
  onAddCartItems,
}) {
  return (
    <ul className={styles.productCards}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSetCartCount={onSetCartCount}
          onSetCartPrice={onSetCartPrice}
          onAddCartItems={onAddCartItems}
        />
      ))}
    </ul>
  );
}

export default ProductCards;
