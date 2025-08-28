import { createContext, useState, useEffect } from "react";

export const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const savedItem = JSON.parse(localStorage.getItem("cart"));
  const loadItem = savedItem ? savedItem : [];
  const [cart, setCart] = useState(loadItem);

  // set Item to LocalStorage

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart ? cart : []));
  }, [cart]);

  // Add To Cart
  function addToCart(product) {
    setCart((prevProduct) => {
      const exist = prevProduct.find((item) => item.id === product.id);

      if (exist) {
        return prevProduct.map((item) =>
          item.id === product.id && item.quantity < 1
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevProduct, { ...product, quantity: 1 }];
    });
  }

  // Remove To Cart
  function removeFromCart(product) {
    setCart((prevProduct) => {
      const filtered = prevProduct.filter((item) => item.id !== product.id);
      console.log("deleted");

      return filtered;
    });
  }

  // Update Cart

  //increase cart quantity
  function increaseItemQuantity(product) {
    setCart((prevProduct) => {
      const found = prevProduct.find((item) => item.id === product.id);
      if (found) {
        return prevProduct.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return prevProduct;
    });
  }

  //decrease cart quantity
  function decreaseItemQuantity(product) {
    setCart((prevProduct) => {
      return prevProduct.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      );
    });
  }

  // Clear Cart
  function clearCart() {
    setCart([]);
  }

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch("/items.json");
      const data = await res.json();
      setProduct(data.products);
    }
    fetchProduct();
  }, []);

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        clearCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
