import { useEffect, useState } from "react";
import PageNav from "../PageNav/PageNav";
import ProductCards from "../ProductCards/ProductCards";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";

import styles from "./Shoppage.module.css";

function Shoppage() {
  const [cartCount, setCartCount] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }

        const products = await response.json();

        console.log(products);
        setData(products);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  function handleCartCount() {
    setCartCount((cnt) => (cnt += 1));
  }

  function handleCartPrice(price) {
    setCartPrice((totalPrice) => (totalPrice += price));
  }

  return (
    <div className={styles.shoppage}>
      <PageNav cartCount={cartCount} cartPrice={cartPrice} />
      {isLoading && <Loader />}
      {error && <Error error={error} />}
      {data && (
        <ProductCards
          products={data}
          onSetCartCount={handleCartCount}
          onSetCartPrice={handleCartPrice}
        />
      )}
    </div>
  );
}

export default Shoppage;
