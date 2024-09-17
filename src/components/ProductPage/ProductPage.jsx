import { useOutletContext, useParams } from "react-router-dom";

function ProductPage() {
  const { productId } = useParams();
  const { product: product } = useOutletContext();

  const currentProduct = product.find((p) => p.id === parseInt(productId));

  return <div>{currentProduct.title}</div>;
}

export default ProductPage;
