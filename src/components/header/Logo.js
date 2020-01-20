import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <LogoWrap className="logo-wrap">
      <img
        src={require("../../img/googlelogo_dark_color.png")}
        alt="Google Logo"
      />
      <span>Fonts</span>
    </LogoWrap>
  );
};

//* styled-component < 💅>

const LogoWrap = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 74px;
    height: 24px;
    opacity: 0.6;
  }

  span {
    color: rgba(0, 0, 0, 0.6);
    font-size: 22.1px;
  }
`;

export default Logo;
