import React from "react";
import StyledProductImg from "./styles/StyledProductImg";
import { useHistory } from "react-router-dom";
import "./Product.css";

const Product = ({ id, title, price, reviews, img, description }) => {
  let history = useHistory();

  console.log("REVIEW HERE: ", reviews);
  function calculateRate(review) {
    let result;
    const length = review.length;

    for (const rev of review) {
      result += rev;
      // console.log(review.rate);
      return Math.floor(result / length);
    }
  }

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
        {reviews.fill().map((_) => (
          <p className="my-auto">⭐</p>
        ))}
      </div>
      <div className="my-2">
        <button className="add-to-cart-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
