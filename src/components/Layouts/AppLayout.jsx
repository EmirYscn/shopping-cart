import { Outlet } from "react-router-dom";
import PageNav from "../Navs/PageNav";
import { useState } from "react";

function AppLayout() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <PageNav cartItems={cartItems} />
      <Outlet context={{ cartItems, setCartItems }} />
    </div>
  );
}

export default AppLayout;
