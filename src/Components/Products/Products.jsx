import React, { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Products.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Product from "./Product.jsx";
import { FaChevronRight } from "react-icons/fa6";
import {
  Await,
  Link,
  useLoaderData,
  useSearchParams,
  NavLink,
} from "react-router-dom";
import Spinners from "../Utils/Spinners.jsx";
import Newcolection from "../Newcolection.jsx";
import Bestseller from "../Bestseller.jsx";

const Products = ({ isHome = false }) => {
  const products = useLoaderData();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navItems = [
    {
      key: "All",
      value: "",
    },
    { key: "Phones & Tablets", value: "phones" },
    { key: "Home & Office", value: "office" },
    { key: "Appliances", value: "appliances" },
    { key: "Fassion", value: "fashion" },
    { key: "Eletronics", value: "electronics" },
    { key: "Beauty", value: "beauty" },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");

  function renderData(data) {
    const dataItems = data.map((item) => item);
    let itemFilter = type
      ? dataItems.filter((item) => item.category.includes(type))
      : dataItems;

    const items = isHome ? itemFilter : itemFilter.slice(0, 8);

    return (
      <div className={`products-container ${isHome ? "min-height" : null}`}>
        <div className={` ${isHome ? "hidden" : "navbar-top"}`}>
          <h2>Browse by categories</h2>
          <Link to={"/products?type="}>
            <span className="flex">
              More
              <FaChevronRight size={10} />
            </span>
          </Link>
        </div>
        <div className="products-navbar">
          <nav>
            <Swiper
              slidesPerView="auto"
              spaceBetween={15}
              freeMode={true}
              modules={[FreeMode]}
              className="swiper-navbar"
            >
              {navItems.map((item, index) => (
                <SwiperSlide key={index} className="nav-item">
                  <NavLink
                    end
                    relative="path"
                    className={() =>
                      type === item.value ? "active-nav-link" : null
                    }
                    to={`?type=${item.value}`}
                  >
                    {item.key}
                  </NavLink>
                </SwiperSlide>
              ))}
            </Swiper>
          </nav>
        </div>

        {isHome ? (
          <div className="display-grid">
            {items.map((item) => (
              <Product
                name={item.name}
                isHome={isHome}
                item={item}
                shortDescription={item.shortDescription}
                price={item.price}
                originalPrice={item.originalPrice}
                discountPercentage={item.discountPercentage}
                rating={item.rating}
                key={item.id}
                id={item.id}
                images={item.images}
              />
            ))}
          </div>
        ) : (
          <Swiper
            slidesPerView="auto"
            spaceBetween={15}
            freeMode={true}
            modules={[FreeMode]}
            className="swiper-product"
          >
            {items.map((item, index) => (
              <SwiperSlide key={index} className="product-item">
                <Product
                  name={item.name}
                  shortDescription={item.shortDescription}
                  price={item.price}
                  originalPrice={item.originalPrice}
                  discountPercentage={item.discountPercentage}
                  rating={item.rating}
                  key={item.id}
                  id={item.id}
                  item={item}
                  images={item.images}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {isHome && (
          <>
            <div id="newcollection" className="newcolection-section">
              <Newcolection isHome={true} />
            </div>

            <div id="bestseller" className="bestseller-section">
              <Bestseller isHome={true} />
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <Suspense fallback={<Spinners />}>
      <Await
        resolve={products.promise}
        errorElement={<h1>Error Loading Product</h1>}
      >
        {renderData}
      </Await>
    </Suspense>
  );
};

export default Products;
