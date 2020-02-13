import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
// import styled from "styled-components";

const Header = ({ ...props }) => {
  return (
    <HeaderWrap isDarkMode={props.isDarkMode}>
      <Logo isDarkMode={props.isDarkMode} />
      <NavWrap>
        <NavItem isDarkMode={props.isDarkMode} href="/">
          Catalog
        </NavItem>
        <NavItem
          isDarkMode={props.isDarkMode}
          href="https://fonts.google.com/featured"
          target="blank"
        >
          Featured
        </NavItem>
        <NavItem
          isDarkMode={props.isDarkMode}
          href="https://design.google/library/google-fonts/?utm_source=Google&utm_medium=Fonts&utm_campaign=Article%20Tab"
          target="blank"
        >
          Articles
        </NavItem>
        <NavItem
          isDarkMode={props.isDarkMode}
          href="https://fonts.google.com/about"
          target="blank"
        >
          About
        </NavItem>
      </NavWrap>
    </HeaderWrap>
  );
};

//* styled-component < 💅>

const HeaderWrap = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  height: 70px;
  padding: 0 120px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${props => (props.isDarkMode ? "#fff" : "#606060")};
  border-color: ${props => (props.isDarkMode ? "#fff" : "#606060")};
`;

const NavWrap = styled.nav`
  display: flex;
`;
const NavItem = styled.a`
  /* When active --> color: #ff5252; */
  text-decoration: none;
  color: ${props => (props.isDarkMode ? "#fff" : "#606060")};
  margin-left: 32px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
`;

export default Header;
