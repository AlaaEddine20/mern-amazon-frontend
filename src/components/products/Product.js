import React from "react";
import StyledProductImg from "./styles/StyledProductImg";
import StyledProductDiv from "./styles/StyledProductDiv";

const Product = ({ id, title, price, rating, img, description }) => {
  return (
    <StyledProductDiv>
      <p className="my-3" style={{ fontWeight: 500, fontSize: "15px" }}>
        {title}
      </p>
      <StyledProductImg className="my-auto" src={img} alt="" />
      <p className="my-2">${price}</p>
      <p className="my-2">{description}</p>
      <div className="d-flex my-2">
        {Array(rating)
          .fill()
          .map((_) => (
            <p>⭐</p>
          ))}
      </div>
      <button className="d-flex my-2">Add to cart</button>
    </StyledProductDiv>
  );
};

export default Product;
