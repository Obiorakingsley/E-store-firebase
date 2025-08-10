import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { FaChevronRight } from "react-icons/fa6";

const Bestseller = () => {
  const [bestseller, setBestSeller] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/data.json");
      const data = await res.json();
      setBestSeller(data.products);
    }
    fetchProducts();
  }, []);
  return (
    <div className="best-seller-container">
      <div className="navbar-top">
        <h2>Top sellers</h2>
        <span className="flex">
          More
          <FaChevronRight size={10} />
        </span>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        freeMode={true}
        modules={[FreeMode]}
        className="swiper-product"
      >
        {bestseller.map((item, id) => {
          <SwiperSlide key={id} className="best-seller-item">
            <div className="flash-sales-item">
              <img src={item.images} alt="" width={90} height={90} />
              <span className=" flex discount">
                <FaMinus size={5} />
                {item.discountPercentage}%
              </span>
              <p className="name">{subName}</p>
              <div className="price-container">
                <p className="flex price">
                  <FaNairaSign size={15} />
                  {item.price}
                </p>

                <b>
                  <span className="flex original-price">
                    <FaNairaSign size={15} />
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
          </SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};

export default Bestseller;
