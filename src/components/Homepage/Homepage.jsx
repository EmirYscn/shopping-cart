import { Link } from "react-router-dom";
import Button from "../Button/Button";
import PageNav from "../Navs/PageNav";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.home}>
        <p>Welcome to our Shop</p>
        <Button type="primary" onClick={() => {}}>
          <Link to="shop/all">Begin Shopping</Link>
        </Button>
      </div>
    </div>
  );
}

export default Homepage;
