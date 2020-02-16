import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideDrawer = ({ ...props }) => {
  // add event listener to detect click outside the side navbar
  useEffect(() => {
    // handle click outside side navbar when open
    const handleClick = e => {
      console.log(e);
      // if side navbar open and click inside sidebar (300px)
      props.isSideDrawer && e.clientX < 300
        ? props.onOutsideClick(true) // keep it open
        : props.onOutsideClick(false); // close
    };
    // eventListener only when side navbar open
    props.isSideDrawer
      ? document.addEventListener("mousedown", handleClick)
      : document.removeEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [props]);

  return (
    <Wrap
      className={props.isSideDrawer ? `${"sideNav"} open` : "sideNav"}
      isDarkMode={props.isDarkMode}
      isSideDrawer={props.SideDrawer}
    >
      <Logo isDarkMode={props.isDarkMode} />
      <div className="navItemsWrap">
        <div className="navItemWrap">
          <FontAwesomeIcon icon="home" />
          <NavItem className="sideItem" isDarkMode={props.isDarkMode} href="/">
            Catalog
          </NavItem>
        </div>
        <div className="navItemWrap">
          <FontAwesomeIcon icon="star" />
          <NavItem
            className="sideItem"
            isDarkMode={props.isDarkMode}
            href="https://fonts.google.com/featured"
            target="blank"
          >
            Featured
          </NavItem>
        </div>
        <div className="navItemWrap">
          <FontAwesomeIcon icon="newspaper" />
          <NavItem
            className="sideItem"
            isDarkMode={props.isDarkMode}
            href="https://design.google/library/google-fonts/?utm_source=Google&utm_medium=Fonts&utm_campaign=Article%20Tab"
            target="blank"
          >
            Articles
          </NavItem>
        </div>
        <div className="navItemWrap">
          <FontAwesomeIcon icon="info-circle" />
          <NavItem
            className="sideItem"
            isDarkMode={props.isDarkMode}
            href="https://fonts.google.com/about"
            target="blank"
          >
            About
          </NavItem>
        </div>
      </div>
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.nav`
  height: 100vh;
  position: absolute;
  top: 0;
  width: 300px;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  line-height: 3;
  padding: 20px 80px;
  border-right: 3px solid #606060;
  background: ${props => (props.isDarkMode ? "#222" : "#fff")};
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;

  &.sideNav.open {
    transform: translateX(0);
    transition: transform 0.3s ease-out;
  }

  .logo-wrap {
  }
  .navItemWrap {
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
      color: ${props => (props.isDarkMode ? "#fff" : "#222")};
    }
  }
`;

const NavItem = styled.a`
  color: ${props => (props.isDarkMode ? "#fff" : "#222")};
  &:hover {
    text-decoration: none;
    color: #ff5252;
  }
`;

export default SideDrawer;
