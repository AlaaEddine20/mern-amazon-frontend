import React from "react";
// Logo
import logo from "./images/logo.png";
// Styles
import StyledLogo from "./styles/StyledLogo";
import StyledNavbar from "./styles/StyledNavbar";
import StytledSearchInput from "./styles/StytledSearchInput";
// Router
import { Link } from "react-router-dom";
// icons
import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">
        <StyledLogo id="navbar-logo" src={logo} alt="" />
      </Link>
      <StytledSearchInput>
        <input type="text" />
        <SearchIcon style={{ backgroundColor: "#cd9042" }} />
      </StytledSearchInput>
    </StyledNavbar>
  );
};

export default Navbar;
