import React from "react";
import StyledProductImg from "./styles/StyledProductImg";
import { useHistory } from "react-router-dom";
import "./Product.css";

const Product = ({ id, title, price, rate, img, description }) => {
  let history = useHistory();
  return (
    <div className="col-3 product mx-4 my-5 text-center">
      <p className="my-3 mx-auto" style={{ fontWeight: 500, fontSize: "15px" }}>
        {title}
      </p>
      <StyledProductImg
        onClick={() => history.push(`details/${id}`)}
        className="my-2"
        src={img}
        alt=""
      />
      <p className="my-2">${price}</p>
      {/* <p className="my-2">{description}</p> */}
      <div className="d-flex justify-content-center">
        {Array(rate)
          .fill()
          .map((_) => (
            <p>⭐</p>
          ))}
      </div>
      <button className="add-to-cart-btn">Add to cart</button>
    </div>
  );
};

export default Product;
