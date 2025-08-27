import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { defer } from "react-router-dom";

const loaders = () => {
  const productsRef = collection(db, "products");

  async function getProducts() {
    const data = await getDocs(productsRef);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  }
  return defer({ promise: getProducts() });
};
export default loaders;
