import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { CartContextProvider } from "./Components/Contexts/Cartcontext.jsx";
import { FlashSaleProvider } from "./Components/Contexts/Flashsalescontext.jsx";
import { AuthContextProvider } from "./Components/Contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <FlashSaleProvider>
          <App />
        </FlashSaleProvider>
      </CartContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
