import React from "react";
import { Navbar, Nav, Image, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import logoImage from "../assets/images/kempinski_logo.png";

import DEVICES from "../assets/dimens";
import { size } from "../assets/dimens";
import HeaderSlogan from "./navigation/HeaderSlogan";

const Styles = styled.div`
  .navbar {
    background-color: rgba(1, 15, 42, 0.85);
  }

  @media screen and (max-width: ${size.tablet}) {
    img {
      width: 80px;
      height: 80px;
    }
  }
`;

const Header = () => {
  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">
          <Image alt="logo" src={logoImage} height="80" />
        </Navbar.Brand>
        <Nav className="justify-content-center">
          <Nav.Item className="text-white">
            <HeaderSlogan />
          </Nav.Item>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#features">ENGLISH</Nav.Link>
            <Nav.Link href="#pricing">LOGIN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default Header;
