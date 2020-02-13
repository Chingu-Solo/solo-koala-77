import React from "react";
import styled from "styled-components";

const Logo = ({ ...props }) => {
  return (
    <LogoWrap className="logo-wrap" isDarkMode={props.isDarkMode}>
      {props.isDarkMode ? (
        <img
          src={require("../../img/googlelogo_light.png")}
          alt="Google Logo"
        />
      ) : (
        <img src={require("../../img/googlelogo_dark.png")} alt="Google Logo" />
      )}
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
    opacity: ${props => (props.isDarkMode ? 1 : 0.6)};
    transform: translateY(2px);
  }

  span {
    color: ${props => (props.isDarkMode ? "#fff" : "#606060")};
    font-size: 22.1px;
  }
`;

export default Logo;
