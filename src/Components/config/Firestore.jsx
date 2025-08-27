import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const ProductContext = createContext();
export function useProducts() {
  return useContext(ProductContext);
}

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const productsRef = collection(db, "products");

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await getDocs(productsRef);
        setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (err) {
        console.error(err);
      }
    }
    getProducts();
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};
