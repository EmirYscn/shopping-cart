import { Outlet } from "react-router-dom";
import { useState } from "react";

import ThemeContext from "../Contexts/ThemeContext";
import PageNav from "../Navs/PageNav";
import Footer from "../Footer/Footer";

function AppLayout() {
  const [cartItems, setCartItems] = useState([]);
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <PageNav cartItems={cartItems} />
        <Outlet context={{ cartItems, setCartItems }} />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default AppLayout;
