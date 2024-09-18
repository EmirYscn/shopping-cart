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
  // const { productType } = useParams();
  // console.log(productType);

  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  const { pathname } = useLocation();
  // Check if the current route starts with '/shop'
  const isRootShopRoute = pathname.startsWith("/shop");

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch("https://fakestoreapi.com/products", {
  //         signal,
  //       });

  //       if (!response.ok) {
  //         throw new Error(`HTTP error: Status ${response.status}`);
  //       }

  //       let products = await response.json();

  //       if (productType !== "all") {
  //         if (productType === "men" || productType === "women") {
  //           products = products.filter(
  //             (product) => product.category === `${productType}'s clothing`
  //           );
  //         } else {
  //           products = products.filter(
  //             (product) => product.category === productType
  //           );
  //         }
  //       }

  //       console.log(products);
  //       setData(products);
  //     } catch (err) {
  //       setError(err.message);
  //       setData(null);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   console.log("fetching items");
  //   fetchProducts();
  // }, [productType]);

  function handleCartItems(item) {
    // console.log(item);
    // console.log(cartItems);
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
