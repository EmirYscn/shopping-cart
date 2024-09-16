import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav({ cartCount, cartPrice, inShop }) {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/shop" end>
            Shop
          </NavLink>
        </li>
        {inShop && (
          <li>
            <NavLink to="cart">Cart</NavLink>
            <NavLink to="cart">
              <img src="./cart.png" alt="" className={styles.img} />
            </NavLink>
            {cartCount && (
              <>
                <span>{cartCount}</span>
                <span>{cartPrice.toFixed(2)}$</span>
              </>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
}

export default PageNav;
