import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { CartContextProvider } from "./Components/Contexts/Cartcontext.jsx";
import { FlashSaleProvider } from "./Components/Contexts/Flashsalescontext.jsx";
import { AuthContextProvider } from "./Components/Contexts/AuthContext.jsx";
import { ProductContextProvider } from "./Components/config/Firestore.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductContextProvider>
      <AuthContextProvider>
        <CartContextProvider>
          <FlashSaleProvider>
            <App />
          </FlashSaleProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </ProductContextProvider>
  </StrictMode>
);
