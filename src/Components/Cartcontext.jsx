import { createContext, useState, useEffect } from "react";

export const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  // Load From Storage
  useEffect(() => {
    const savedProduct = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedProduct);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add To Cart
  function addToCart(product) {
    setCart((prevProduct) => {
      const exist = prevProduct.find((item) => item.id === product.id);
      console.log(prevProduct);

      if (exist) {
        return prevProduct.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevProduct, { ...product, quantity: 1 }];
    });
  }

  // Remove To Cart
  function removeFromCart() {}

  // Update Cart
  function updateCart() {}

  // Clear Cart
  function clearCart() {}
  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch("/items.json");
      const data = await res.json();
      setProduct(data.products);
    }
    fetchProduct();
  }, []);

  return (
    <cartContext.Provider value={{ cart, addToCart }}>
      {children}
    </cartContext.Provider>
  );
};
