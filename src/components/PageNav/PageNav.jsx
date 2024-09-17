import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav({ cartItems, inShop }) {
  const cartPrice = cartItems?.reduce(
    (acc, cur) => (acc += cur.product.price * cur.count),
    0
  );
  const cartCount = cartItems?.reduce((acc, cur) => (acc += cur.count), 0);

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
            {cartItems && (
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
