import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { CartContextProvider } from "./Components/Contexts/Cartcontext.jsx";
import { FlashSaleProvider } from "./Components/Contexts/Flashsalescontext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
      <FlashSaleProvider>
        <App />
      </FlashSaleProvider>
    </CartContextProvider>
  </StrictMode>
);
