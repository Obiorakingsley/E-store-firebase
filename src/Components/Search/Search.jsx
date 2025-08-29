import React, { useState, useEffect, Suspense } from "react";
import "./Search.css";
import { Link, useLocation, useNavigate, Await } from "react-router-dom";
import { FaArrowLeft, FaSearch, FaMinus } from "react-icons/fa";
import Spinners from "../Utils/Spinners";
import { useLoaderData } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const useQuery = new URLSearchParams(useLocation().search);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const productData = useLoaderData();

  function renderData(data) {
    const query = useQuery.get("query") || "";
    useEffect(() => {
      async function fetchData() {
        try {
          setProducts(data);
        } catch (err) {
          return new Promise(err.message);
        }
      }
      fetchData();
    }, []);

    const filterdeData = products.filter(
      (item) =>
        item.category.includes(query) ||
        item.name.toLowerCase().includes(query) ||
        item.subCategory.toLowerCase().includes(query)
    );
    return (
      <>
        <div className="search-navbar">
          <Link to={".."} relative="path">
            <span>
              <FaArrowLeft size={20} />
            </span>
          </Link>
          <input
            type="text"
            placeholder="Search"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
              if (!input) return;
              navigate(`/search?query=${encodeURIComponent(input)}`);
            }}
            className="search-icon"
          >
            <FaSearch size={20} />
          </button>
        </div>

        <div className="grid-search-container">
          {query
            ? filterdeData.map((item) => {
                let itemName = item.name;
                const subName = item && itemName.substring(0, 20) + "...";

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
                        <p className="name">{subName}</p>
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
              })
            : []}
        </div>
      </>
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

export default Search;
