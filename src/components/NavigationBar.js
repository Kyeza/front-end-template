import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import styled from "styled-components";

import COLORS from "../assets/colors";
import DEVICES from "../assets/dimens";
import HeaderSlogan from "./navigation/HeaderSlogan";
import Header from "./Header";

const Styles = styled.div``;

const NavigationBar = () => {
  return (
    <Styles>
      <Header />
    </Styles>
  );
};

export default NavigationBar;
