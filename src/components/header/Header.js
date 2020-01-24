import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
// import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrap>
      <Logo />
      <NavWrap>
        <NavItem>Catalog</NavItem>
        <NavItem>Featured</NavItem>
        <NavItem>Articles</NavItem>
        <NavItem>About</NavItem>
      </NavWrap>
    </HeaderWrap>
  );
};

//* styled-component < 💅>

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  border-bottom: 1px solid #000;
  border-color: rgba(0, 0, 0, 0.14);
`;

const NavWrap = styled.div`
  display: flex;
`;
const NavItem = styled.div`
  /* When active --> color: #ff5252; */
  color: rgba(0, 0, 0, 0.6);
  margin-left: 32px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
`;

export default Header;
