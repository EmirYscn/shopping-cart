import { useEffect, useState } from "react";
import {
  Outlet,
  useLocation,
  useOutletContext,
  useParams,
} from "react-router-dom";

import ProductCards from "../ProductCards/ProductCards";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";

import styles from "./Shoppage.module.css";
import ProductNav from "../Navs/ProductNav";

function Shoppage() {
  document.title = "Shop";
  const {
    cartItems,
    setCartItems,
    data,
    isLoading,
    error,
    sortType,
    setSortType,
  } = useOutletContext();

  const { pathname } = useLocation();
  // Check if the current route starts with '/shop'
  const isRootShopRoute = pathname.startsWith("/shop");

  function handleCartItems(item) {
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
      <ProductNav sortType={sortType} setSortType={setSortType} />
      {isLoading && <Loader />}
      {error && <Error error={error} />}
      {data && isRootShopRoute ? (
        <ProductCards products={data} onAddCartItems={handleCartItems} />
      ) : (
        <Outlet
          context={{ cartItems, setCartItems, product: data, handleCartItems }}
        />
      )}
    </div>
  );
}

export default Shoppage;
