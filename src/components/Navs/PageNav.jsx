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
  const notInShop = pathname === "/";
  // const inShop = pathname === "/shop" || pathname === "/shop/cart";

  return (
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <Logo />
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop/all" end>
              Store
            </NavLink>
            <NavLink to="/shop/all" end>
              <img src="/shop.png" alt="" className={styles.img} />
            </NavLink>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/about">
            <img src="/about.png" alt="" className={styles.img} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/support">Support</NavLink>
          <NavLink to="/support">
            <img src="/support.png" alt="" className={styles.img} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/account" end>
            Account
          </NavLink>
          <NavLink to="/account">
            <img src="/account.png" alt="" className={styles.img} />
          </NavLink>
        </li>

        <li>
          <NavLink to="/shop/all/cart">Cart</NavLink>
          <NavLink to="/shop/all/cart">
            <img src="/cart.png" alt="" className={styles.img} />
          </NavLink>
        </li>

        {!notInShop && (
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
