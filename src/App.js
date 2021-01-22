import React from "react";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ProductDetails from "./components/productDetails/ProductDetails";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/checkout">
            <Navbar />
            <h1>Checkout Page</h1>
          </Route>
          <Route path="/login">
            <Navbar />
            <h1>Login Page</h1>
          </Route>
          <Route path="/details/:id">
            <ProductDetails />
          </Route>
          <Route extact path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
