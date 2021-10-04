import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarStyled>
      <Link to="/">Contact Book</Link>
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  height: 4rem;
  background: #343a40;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: white;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 500;
  }
`;

export default Navbar;
