import React, { useEffect, useState, Suspense } from "react";

import { useLocation, Link, useLoaderData, Await } from "react-router-dom";
import { FaMinus } from "react-icons/fa";
import "./Search.css";
import Spinners from "../Utils/Spinners";

const Homesearch = () => {
  const useQuery = new URLSearchParams(useLocation().search);
  const productData = useLoaderData();
  const [products, setProducts] = useState([]);

  function renderData(data) {
    const query = useQuery.get("query") || "";
    useEffect(() => {
      async function fetchData() {
        try {
          setProducts(data);
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }, []);

    const filterdeData = products.filter(
      (item) =>
        item?.category.includes(query) ||
        item?.name.toLowerCase().includes(query) ||
        item?.subCategory.toLowerCase().includes(query)
    );
    return (
      <div style={{ minHeight: "95vh" }} className="grid-search-container">
        {filterdeData.map((item) => {
          {
            return (
              <Link key={item.id} to={`/products/${item.id}`}>
                <div className="flash-sales-item">
                  <img
                    src={`/${item.images[0]}`}
                    alt=""
                    width={90}
                    height={90}
                  />
                  <span className=" flex discount">
                    <FaMinus size={5} />
                    {item.discountPercentage}%
                  </span>
                  <p className="name">{item.name}</p>
                  <div className="price-container">
                    <p className="flex price">${item.price}</p>

                    <b>
                      <span className="flex original-price">
                        ${item.originalPrice}
                      </span>
                    </b>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
    );
  }
  return (
    <Suspense fallback={<Spinners />}>
      <Await
        resolve={productData.promise}
        errorElement={<h1>Error Loading Product</h1>}
      >
        {renderData}
      </Await>
    </Suspense>
  );
};

export default Homesearch;
