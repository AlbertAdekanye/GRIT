import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Analytics />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;