import React from "react";
import { useOutletContext } from "react-router-dom";
import StarRatings from "react-star-ratings";

const Productreviews = () => {
  const product = useOutletContext();

  return (
    <div>
      {product.reviews
        ? product.reviews.map((review) => (
            <div className="product-details-review">
              <div className="rating">
                <StarRatings
                  starRatedColor="#ff9100ff"
                  starDimension="25px"
                  rating={review.rating}
                  numberOfStars={5}
                  starSpacing="2px"
                  name="rating"
                />
                <span className="rating-count">
                  {Number(review.rating).toFixed(1)}
                </span>
              </div>
              <div className="review-user">
                <div className="flex">
                  <img
                    src={`/${review.user.image}`}
                    alt=""
                    width={40}
                    height={40}
                  />
                  <p>{review.user.name}</p>
                </div>
                <p>{review.date}</p>
              </div>
              <p>{review.title}</p>
              <p>
                <b>{review.body}</b>
              </p>
              <div className="review-images">
                {product.images
                  ? product.images.map((img, index) => {
                      return (
                        <img
                          key={index}
                          src={`/${img}`}
                          width={100}
                          height={100}
                        />
                      );
                    })
                  : null}
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Productreviews;
