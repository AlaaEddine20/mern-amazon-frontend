import React from "react";
import image1 from "./images/carousel-item4.jpg";
import "./Banner.css";
import StyledImg from "./styles/StyledImg";

const Banner = () => {
  return (
    <div style={{ maxWidth: "1500px", margin: "0 auto " }}>
      <StyledImg src={image1} alt="" />
    </div>
  );
};

export default Banner;
