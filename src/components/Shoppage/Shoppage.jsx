import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import PageNav from "../PageNav/PageNav";
import ProductCards from "../ProductCards/ProductCards";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";

import styles from "./Shoppage.module.css";

function Shoppage() {
  const [cartCount, setCartCount] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const isRootShopRoute = location.pathname === "/shop";

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

  function handleCartItems(item) {
    console.log(item);
    console.log(cartItems);
    setCartItems([...cartItems, item]);
  }

  return (
    <div className={styles.shoppage}>
      <PageNav cartCount={cartCount} cartPrice={cartPrice} inShop={true} />
      {isLoading && <Loader />}
      {error && <Error error={error} />}
      {data && isRootShopRoute ? (
        <ProductCards
          products={data}
          onSetCartCount={handleCartCount}
          onSetCartPrice={handleCartPrice}
          onAddCartItems={handleCartItems}
        />
      ) : (
        <Outlet context={{ cartItems, setCartItems }} />
      )}
    </div>
  );
}

export default Shoppage;
