import { Outlet, useOutletContext, useParams } from "react-router-dom";
import ProductNav from "../Navs/ProductNav";
import { useEffect, useState } from "react";

function ShoppageLayout() {
  const { cartItems, setCartItems } = useOutletContext();
  const [sortType, setSortType] = useState("sortBy");

  const { productType } = useParams();
  console.log(productType);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {});

        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }

        let products = await response.json();

        if (productType !== "all") {
          if (productType === "men" || productType === "women") {
            products = products.filter(
              (product) => product.category === `${productType}'s clothing`
            );
          } else {
            products = products.filter(
              (product) => product.category === productType
            );
          }
        }
        if (sortType !== "sortBy") {
          if (sortType === "priceAsc") {
            products.sort((a, b) => a.price - b.price);
          } else if (sortType === "priceDesc") {
            products.sort((a, b) => b.price - a.price);
          }
        }

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

    return () => console.log("cleaned fetch");
  }, [productType, sortType]);

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
    <div>
      <Outlet
        context={{
          data,
          isLoading,
          error,
          cartItems,
          setCartItems,
          handleCartItems,
          sortType,
          setSortType,
        }}
      />
    </div>
  );
}

export default ShoppageLayout;
