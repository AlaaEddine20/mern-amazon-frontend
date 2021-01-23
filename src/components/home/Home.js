import React, { useState, useEffect } from "react";
import axios from "axios";
// Components
import Footer from "../footer/Footer";
import Banner from "../banner/Banner";
import Navbar from "../navbar/Navbar";
import Product from "../products/Product";
// Bootstrap
import { Spinner } from "react-bootstrap";
// CSS
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch("http://localhost:4004/products", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      {error ? (
        <>
          <h1> An error occured, please refresh and try again </h1>
        </>
      ) : (
        <>
          <Navbar />
          <Banner />
          {loading ? (
            <>
              <Spinner
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                animation="border"
              ></Spinner>
              <h1>Loading...</h1>
            </>
          ) : (
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
          )}

          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
