import React from "react";
// Logo
import logo from "./images/logo.png";
// Styles
import StyledLogo from "./styles/StyledLogo";
import StyledNavbar from "./styles/StyledNavbar";
import StytledSearchDiv from "./styles/StytledSearchDiv";
import StyledNavDiv from "./styles/StyledNavDiv";
import StytledLinkUp from "./styles/StyledLinkTop";
import StytledLinkDown from "./styles/StyledLinkBottom";
// Router
import { Link } from "react-router-dom";
// icons
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import StyledLinkBottom from "./styles/StyledLinkBottom";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">
        <StyledLogo id="navbar-logo" src={logo} alt="" />
      </Link>
      <StytledSearchDiv>
        <input type="text" />
        <SearchIcon
          style={{ backgroundColor: "#cd9042", height: "30px", width: "27px" }}
        />
      </StytledSearchDiv>
      <StyledNavDiv>
        <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
          <div className="d-flex flex-column mx-2">
            <StytledLinkUp>Hello Doe</StytledLinkUp>
            <StytledLinkDown>Sign in</StytledLinkDown>
          </div>
        </Link>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <div className="d-flex flex-column mx-2">
            <StytledLinkUp>Returns</StytledLinkUp>
            <StytledLinkDown>& Orders</StytledLinkDown>
          </div>
        </Link>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <div className="d-flex flex-column mx-2">
            <StytledLinkUp>Your</StytledLinkUp>
            <StytledLinkDown>Prime</StytledLinkDown>
          </div>
        </Link>
        <Link to="/checkout" style={{ color: "white", textDecoration: "none" }}>
          <div className="d-flex align-items-center mx-2 py-1">
            <ShoppingBasketIcon />
            <StyledLinkBottom className="mx-1">0</StyledLinkBottom>
          </div>
        </Link>
      </StyledNavDiv>
    </StyledNavbar>
  );
};

export default Navbar;
