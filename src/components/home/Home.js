import React from "react";
import Footer from "../footer/Footer";
import Banner from "../banner/Banner";
import Navbar from "../navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Banner />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
