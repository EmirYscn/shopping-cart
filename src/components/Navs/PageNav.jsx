import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav({ cartItems }) {
  const cartPrice = cartItems?.reduce(
    (acc, cur) => (acc += cur.product.price * cur.count),
    0
  );
  const cartCount = cartItems?.reduce((acc, cur) => (acc += cur.count), 0);

  const { pathname } = useLocation();
  const inShop = pathname === "/shop" || pathname === "/shop/cart";

  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/about">
            <img src="./about.png" alt="" className={styles.img} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/support">Support</NavLink>
          <NavLink to="/support">
            <img src="./support.png" alt="" className={styles.img} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/account" end>
            Account
          </NavLink>
          <NavLink to="/account">
            <img src="./account.png" alt="" className={styles.img} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" end>
            Shop
          </NavLink>
          <NavLink to="/shop">
            <img src="./shop.png" alt="" className={styles.img} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop/cart">Cart</NavLink>
          <NavLink to="/shop/cart">
            <img src="./cart.png" alt="" className={styles.img} />
          </NavLink>
        </li>

        {inShop && (
          <li>
            {cartItems && (
              <>
                <span>({cartCount})</span>
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
