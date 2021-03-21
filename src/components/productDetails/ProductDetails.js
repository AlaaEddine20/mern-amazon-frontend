import React, { useState, useEffect } from "react";

const ProductDetails = () => {
  const [product, setProducts] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async (id) => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch("http://localhost:4004/products" + id, {
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
      {!loading && (
        <div className="d-flex justify-content-center align-items-center">
          <p>{product.name}</p>
        </div>
      )}
      {loading && <h1>Loading...</h1>}
    </>
  );
};

export default ProductDetails;
