import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";

import styles from "./ProductNav.module.css";

function ProductNav({ cartItems }) {
  // const cartPrice = cartItems?.reduce(
  //   (acc, cur) => (acc += cur.product.price * cur.count),
  //   0
  // );
  // const cartCount = cartItems?.reduce((acc, cur) => (acc += cur.count), 0);
  const { pathname } = useLocation();
  const notInShop = pathname === "/";
  return (
    <nav className={styles.nav}>
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
    </nav>
  );
}

export default ProductNav;
