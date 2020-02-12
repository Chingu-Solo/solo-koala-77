import React from "react";
import styled from "styled-components";
// import { CSSTransition } from "react-transition-group";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownToggle from "react-bootstrap/DropdownToggle";

const SizeDropdown = ({ ...props }) => {
  const fontsArray = [8, 12, 14, 20, 24, 32, 40, 64, 96, 120];

  return (
    <Wrap>
      <Dropdown>
        <DropdownToggle className="toggle">{`${props.fontSize}px`}</DropdownToggle>
        <DropdownMenu className="menu">
          {/* render each fontArray element and apply its size */}
          {fontsArray.map((font, index) => {
            return (
              <DropdownItem
                className="item"
                key={index}
                onClick={e => props.handleDropdown(font)}
              >{`${font}px`}</DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.div`
  .dropdown {
  }
  .toggle {
    &.btn-primary {
      color: #707070;
      background: none;
      border: none;

      &::after {
        color: red;
        margin-left: 0.7em;
        margin-right: 0.7em;
      }
    }
  }
  .menu {
    height: 150px;
    min-width: 7rem;
    overflow: auto;
  }
  .item {
  }
`;

export default SizeDropdown;
