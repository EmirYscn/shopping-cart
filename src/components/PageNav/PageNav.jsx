import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav({ cart = 0 }) {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/cart">
            <img src="./cart.png" alt="cart" className={styles.img} />
          </NavLink>
          <span>{cart}</span>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
