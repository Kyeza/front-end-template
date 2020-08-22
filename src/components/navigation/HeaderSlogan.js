import React from "react";
import styled from "styled-components";

import COLORS from "../../assets/colors";
import DEVICES from "../../assets/dimens";
import KingsCaslon from "../../assets/fonts/Kings Caslon W01 Italic/Kings Caslon W01 Italic.woff";

const Styles = styled.div`
  text-align: center;
  position: relative;
  padding-bottom: 10px;

  h1 {
    font-size: 10px;
    letter-spacing: 4px;
    position: relative;
    text-indent: 4px;
    line-height: 1.44;
    color: ${COLORS.white};
    text-transform: uppercase;
    margin-bottom: 10px;
    white-space: nowrap;
  }

  @font-face {
    font-family: KingsCaslon;
    src: url(${KingsCaslon});
  }

  h2 {
    font-family: KingsCaslon;
    position: relative;
    padding: 0 30px;
    font-size: 12px;
    letter-spacing: -0.9px;
    color: ${COLORS.white};
  }

  h2 span::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    width: 50px;
    height: 1px;
    background: ${COLORS.goldYellow};
  }

  h2 span::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 100%;
    width: 50px;
    height: 1px;
    background: ${COLORS.goldYellow};
  }

  @media screen and ${DEVICES.tablet} {
    h1 {
      font-size: 18px;
    }

    h2 {
      font-size: 16px;
    }

    h2 span::before,
    h2 span::after {
      width: 60%;
    }
  }

  @media screen and ${DEVICES.laptop} {
    padding-bottom: 0;

    h1 {
      text-indent: 5px;
      line-height: 5px;
    }
  }
`;

const HeaderSlogan = () => {
  return (
    <Styles>
      <h1>KEMPINSKI HOTELS</h1>
      <h2 className="text-nowrap font-weight-normal font-italic mb-0">
        <span>A Collection of Individuals</span>
      </h2>
    </Styles>
  );
};

export default HeaderSlogan;
