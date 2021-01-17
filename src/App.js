import React from "react";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Navbar />
            <h1>Checkout Page</h1>
          </Route>
          <Route path="/login">
            <Navbar />
            <h1>Login Page</h1>
          </Route>
          <Route extact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
