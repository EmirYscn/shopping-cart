import ProductCard from "./ProductCard";

function ProductCards({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </ul>
  );
}

export default ProductCards;
