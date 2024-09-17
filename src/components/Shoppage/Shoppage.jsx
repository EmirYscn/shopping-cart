import { useEffect, useState } from "react";
import { Outlet, useLocation, useOutletContext } from "react-router-dom";

import PageNav from "../Navs/PageNav";
import ProductCards from "../ProductCards/ProductCards";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";

import styles from "./Shoppage.module.css";

function Shoppage() {
  const { cartItems, setCartItems } = useOutletContext();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { pathname } = useLocation();
  const isRootShopRoute = pathname === "/shop";

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          signal,
        });

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
    console.log("fetching items");
    fetchProducts();

    // return () => {
    //   controller.abort();
    // };
  }, []);

  function handleCartItems(item) {
    console.log(item);
    console.log(cartItems);
    if (cartItems.some((cartItem) => cartItem.product.id === item.product.id)) {
      // Update the existing cart item
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.product.id === item.product.id
          ? { ...cartItem, count: cartItem.count + item.count } // Update count
          : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      // Add new item to cart
      setCartItems([...cartItems, item]);
    }
  }

  return (
    <div className={styles.shoppage}>
      {isLoading && <Loader />}
      {error && <Error error={error} />}
      {data && isRootShopRoute ? (
        <ProductCards products={data} onAddCartItems={handleCartItems} />
      ) : (
        <Outlet context={{ cartItems, setCartItems, product: data }} />
      )}
    </div>
  );
}

export default Shoppage;
