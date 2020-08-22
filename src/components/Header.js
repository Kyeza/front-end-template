import React from "react";
import { Navbar, Nav, Image, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import logoImage from "../assets/images/kempinski_logo.png";

import COLORS from "../assets/colors";
import { size } from "../assets/dimens";
import HeaderSlogan from "./navigation/HeaderSlogan";

const Styles = styled.div`
  .navbar {
    background-color: rgba(1, 15, 42, 0.85);
    justify-content: space-between;
  }

  .navbar-collapse {
    align-items: center;
    flex-grow: unset;
  }

  .navbar-collapse nav {
    justify-content: space-between;
  }

  @media screen and (max-width: ${size.tablet}) {
    img {
      width: 80px;
      height: 80px;
    }

    .navbar {
      background-color: ${COLORS.primary};
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      flex-direction: column;
    }

    .navbar-toggler {
      padding: 0.25rem 0.75rem;
      font-size: 1.25rem;
      line-height: 1;
      background-color: transparent;
      border: 1px solid transparent;
      border-radius: 0.25rem;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

const Header = () => {
  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">
          <Image alt="logo" src={logoImage} height="70" />
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
