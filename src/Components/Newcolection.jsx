import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Styles/Newcollection.css";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { FaChevronRight } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { Link, useLoaderData, Await } from "react-router-dom";
import { Line } from "rc-progress";
import { Suspense } from "react";
import { HashLink } from "react-router-hash-link";

const Newcolection = ({ isHome = false }) => {
  const products = useLoaderData();

  function renderData(newColection) {
    const dataItems = newColection.filter((item, id) => item.isNew === true);
    const items = isHome ? dataItems : dataItems.slice(0, 5);
    return (
      <div className="new-collection-container">
        {!isHome ? (
          <div className="navbar-top">
            <h2>New Collections</h2>
            <HashLink smooth to={"/products#newcollection"}>
              <span className="flex">
                See All
                <FaChevronRight size={15} />
              </span>
            </HashLink>
          </div>
        ) : (
          <h2
            style={{
              textAlign: "center",
              backgroundColor: "#f0d9af",
              padding: ".8rem",
            }}
          >
            New Collections
          </h2>
        )}
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode={true}
          modules={[FreeMode]}
          className="swiper-product"
        >
          {items.map((item, id) => {
            let subName = item.name;
            subName = subName.substring(0, 20) + "...";
            return (
              <SwiperSlide key={id} className="collection-item">
                <Link to={isHome ? `${item.id}` : `products/${item.id}`}>
                  <div className="collection-card">
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
                      <p className="flex price">
                        <FaDollarSign size={15} />
                        {item.price}
                      </p>

                      <b>
                        <span className="flex original-price">
                          <FaDollarSign size={15} />
                          {item.originalPrice}
                        </span>
                      </b>
                    </div>
                    <span className="stock">{item.stock} items left</span>
                    <Line
                      percent={item.stock}
                      strokeWidth={4}
                      trailWidth={4}
                      strokeLinecap="round"
                      strokeColor="orange"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  }

  return (
    <Suspense>
      <Await
        resolve={products.promise}
        errorElement={<h1>Error Loading Product</h1>}
      >
        {renderData}
      </Await>
    </Suspense>
  );
};

export default Newcolection;
