import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useContext } from "react";

import ThemeContext from "../Contexts/ThemeContext";
import styles from "./ProductPage.module.css";
import Button from "../Button/Button";

function ProductPage() {
  const { theme } = useContext(ThemeContext);

  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const { productId } = useParams();

  const { data: product, handleCartItems } = useOutletContext();

  const currentProduct = product.find((p) => p.id === parseInt(productId));

  return (
    <>
      <Button type="back" onClick={() => navigate(-1)}>
        <img src="/back.png" alt="" />
      </Button>

      <div
        className={`${
          theme === "dark" ? styles.productPageDark : styles.productPageLight
        }`}
      >
        <div className={styles.image}>
          <img src={currentProduct.image} alt="" />
        </div>
        <div className={styles.productInfo}>
          <span>
            <strong>{currentProduct.title}</strong>
          </span>
          <span>{currentProduct.description}</span>
          <span>${currentProduct.price}</span>
          <Button
            type="productPageCart"
            onClick={() =>
              handleCartItems({ product: currentProduct, count: 1 })
            }
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
