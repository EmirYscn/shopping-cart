import { Outlet } from "react-router-dom";
import PageNav from "../Navs/PageNav";
import { useState } from "react";
import Footer from "../Footer/Footer";

function AppLayout() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <PageNav cartItems={cartItems} />
      <Outlet context={{ cartItems, setCartItems }} />
      <Footer />
    </div>
  );
}

export default AppLayout;
