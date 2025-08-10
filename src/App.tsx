import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/home";
import Cart from "./features/cart/cart";
import PlaceOrder from "./features/order/place-order";
import CheckOutOrder from "./features/order/check-out-order";
import AppLayout from "./components/layout/AppLayout";
import ProductId, {
  loader as productIdLoader,
} from "./features/products/productId";
import Products, {
  loader as productsLoader,
} from "./features/products/Products";
import About from "./components/pages/about";
import Creator from "./components/pages/creator";
import Error from "./components/ui/error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/creator",
        element: <Creator />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "/products/:productId",
        element: <ProductId />,
        loader: productIdLoader,
      },
      {
        path: "/order/new",
        element: <PlaceOrder />,
      },
      {
        path: "/order/:orderId",
        element: <CheckOutOrder />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
