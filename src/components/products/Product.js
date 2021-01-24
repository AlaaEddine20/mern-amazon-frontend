import React from "react";
import StyledProductImg from "./styles/StyledProductImg";
import { useHistory } from "react-router-dom";
import "./Product.css";

const Product = ({ id, title, price, reviews, img, description }) => {
  let history = useHistory();

  // console.log("REVIEW HERE: ", reviews[0].rate);

  const ratings = reviews;

  function calculateAverageRating(ratings) {
    let result = 0;
    for (const rate of ratings) {
      result += rate.rate;
      return Math.round(result / ratings.length);
    }
  }
  function popolateArray(num) {
    const result = [];
    for (let i = 0; i < num; i++) result.push(".");
    return result;
  }

  const Star = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
      </svg>
    );
  };

  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 product mx-4 my-5 text-center">
      <p className="my-3 mx-auto" style={{ fontWeight: 500, fontSize: "15px" }}>
        {title}
      </p>
      <StyledProductImg
        onClick={() => history.push(`details/${id}`)}
        src={img}
        alt=""
      />
      <p className="my-2">${price}</p>
      <div style={{ height: 30 }} className="d-flex justify-content-center">
        {popolateArray(calculateAverageRating(ratings)).map((rate, idx) => (
          <Star key={rate + idx} />
        ))}
      </div>
      <div className="my-2">
        <button className="add-to-cart-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
