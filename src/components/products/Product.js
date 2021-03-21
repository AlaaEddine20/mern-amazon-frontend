import React from "react";
import StyledProductImg from "./styles/StyledProductImg";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ id, title, price, reviews, img, description }) => {
  const ratings = reviews;

  // function calculateAverageRating(ratings) {
  //   let result = 0;
  //   for (const rate of ratings) {
  //     result += rate.rate;
  //     return Math.round(result / ratings.length);
  //   }
  // }
  // function popolateArray(num) {
  //   const result = [];
  //   for (let i = 0; i < num; i++) result.push(".");
  //   return result;
  // }

  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 product mx-4 my-5 text-center">
      <p className="my-3 mx-auto" style={{ fontWeight: 500, fontSize: "15px" }}>
        {title}
      </p>
      <Link to={`/details/${id}`}>
        <StyledProductImg src={img} alt="" />
      </Link>
      <p className="my-2">${price}</p>
      <div style={{ height: 30 }} className="d-flex justify-content-center">
        {/* {popolateArray(calculateAverageRating(ratings)).map((rate, idx) => (
          <p key={rate + idx} className="my-auto">
            ⭐
          </p>
        ))} */}
      </div>
      <div className="my-2">
        <button className="add-to-cart-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
