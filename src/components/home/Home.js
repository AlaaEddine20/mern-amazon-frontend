import React, { useState, useEffect } from "react";
// Components
import Footer from "../footer/Footer";
import Banner from "../banner/Banner";
import Navbar from "../navbar/Navbar";
import Product from "../products/Product";
// CSS
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:4004/products", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <Banner />
      <div style={{ marginTop: -250 }} className="container-lg">
        <div className="row d-flex justify-content-center align-items-center">
          {products.map((product, idx) => (
            <Product
              key={idx}
              id={product.id}
              title={product.name}
              description={product.description}
              price={product.price}
              img={product.imageUrl}
              rate={products[0].reviews[0].rate}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
