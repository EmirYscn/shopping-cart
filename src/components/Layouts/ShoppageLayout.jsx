import { Outlet, useOutletContext, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

function ShoppageLayout() {
  const { cartItems, setCartItems } = useOutletContext();
  const [sortType, setSortType] = useState("sortBy");

  const { productType } = useParams();

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

        console.log(products);
        setData(products);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };
    console.log("fetching data");
    fetchProducts();

    return () => console.log("destroying fetched data");
  }, []);

  const filteredData = useMemo(() => {
    if (productType !== "all") {
      if (!data) return [];
      if (productType === "men" || productType === "women") {
        return data.filter(
          (product) => product.category === `${productType}'s clothing`
        );
      } else {
        return data.filter((product) => product.category === productType);
      }
    } else {
      return data;
    }
  }, [data, productType]);

  const sortedData = useMemo(() => {
    if (sortType !== "sortBy") {
      if (sortType === "priceAsc") {
        return filteredData.sort((a, b) => a.price - b.price);
      } else if (sortType === "priceDesc") {
        return filteredData.sort((a, b) => b.price - a.price);
      }
    } else {
      return filteredData;
    }
  }, [filteredData, sortType]);

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
    <div>
      <Outlet
        context={{
          data: sortedData,
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
