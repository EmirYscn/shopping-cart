import { NavLink } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";

import styles from "./ProductNav.module.css";

function ProductNav({ sortType, setSortType }) {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      className={`${styles.nav} ${
        theme === "dark" ? styles.darkTheme : styles.lightTheme
      }`}
    >
      <ul>
        <li>
          <NavLink to="/shop/all">All</NavLink>
        </li>
        <li>
          <NavLink to="/shop/women">Women</NavLink>
        </li>
        <li>
          <NavLink to="/shop/men">Men</NavLink>
        </li>
        <li>
          <NavLink to="/shop/jewelery">Jewelery</NavLink>
        </li>
        <li>
          <NavLink to="/shop/electronics">Electronics</NavLink>
        </li>
      </ul>

      <select
        name="sort"
        id="sort"
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value={"sortBy"} disabled>
          Sort By
        </option>
        <option value="priceAsc">Price: Ascending</option>
        <option value="priceDesc">Price: Descending</option>
      </select>
    </nav>
  );
}

export default ProductNav;
