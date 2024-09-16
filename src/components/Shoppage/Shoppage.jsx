import { useEffect, useState } from "react";
import PageNav from "../PageNav/PageNav";
import ProductCards from "../ProductCards/ProductCards";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";

function Shoppage() {
  const [cartCount, setCartCount] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const products = await (
          await fetch("https://fakestoreapi.com/products")
        ).json();
        console.log(products);
        setData(products);
      } catch (err) {
        setError(err);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <PageNav cart={cartCount} />
      {isLoading && <Loader />}
      {error && <Error />}
      {data && <ProductCards products={data} />}
    </div>
  );
}

export default Shoppage;
