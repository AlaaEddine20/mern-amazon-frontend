import React, { useState, useEffect } from "react";
// Components
import Footer from "../footer/Footer";
import Banner from "../banner/Banner";
import Navbar from "../navbar/Navbar";
import Product from "../products/Product";
// Pics
import image from "../products/dummy-pics/dummy-product.jpg";
// CSS
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    await getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3055/products", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />

      <Banner />
      <div className="container-lg col col-10 d-flex">
        {products.map((product) => (
          <Product
            id={product._id}
            title={product.name}
            description={product.description}
            price={product.price}
            img={product.imageUrl}
            rating={5}
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Home;
