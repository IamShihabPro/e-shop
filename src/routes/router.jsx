import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Men from "../pages/Men/Men";
import Home from "../pages/Home/Home";
import Women from "../pages/Women/Women";
import Kids from "../pages/Kids/Kids";
import Login from "../pages/login/Login";
import Product from "../pages/Product/Product";
import Cart from "../pages/Cart/Cart";
// import ProductView from "../pages/Product/ProductView";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/men',
        element: <Men></Men>
      },
      {
        path: '/women',
        element: <Women/>
      },
      {
        path: '/kids',
        element: <Kids/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/product',
        element: <Product/>
      },
      {
        path: '/product/:productId',
        element: <Product/>

      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },

    ]
  },
]);