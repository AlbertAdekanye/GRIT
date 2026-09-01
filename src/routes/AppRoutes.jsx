import { Route, Routes } from "react-router-dom";

import SiteLayout from "../components/layout/SiteLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProductDetails from "../pages/ProductDetails";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import PaymentVerify from "../pages/PaymentVerify";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productId" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment/verify" element={<PaymentVerify />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;