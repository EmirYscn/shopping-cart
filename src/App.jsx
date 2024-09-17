import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage.jsx";
import Shoppage from "./components/Shoppage/Shoppage.jsx";
import Cart from "./components/Cart/Cart.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import AppLayout from "./components/Layouts/AppLayout.jsx";
import ProductPage from "./components/ProductPage/ProductPage.jsx";
import Login from "./components/Login/Login.jsx";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Homepage />,
  // },
  // {
  //   path: "shop",
  //   element: <Shoppage />,
  //   children: [
  //     {
  //       path: "cart",
  //       element: <Cart />,
  //     },
  //   ],
  // },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "account",
        element: <Login />,
      },
      {
        path: "shop",
        element: <Shoppage />,
        children: [
          {
            path: ":productId",
            element: <ProductPage />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
