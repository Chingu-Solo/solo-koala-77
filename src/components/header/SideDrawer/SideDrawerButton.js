import React from "react";
import styled from "styled-components";

const SideDrawerButton = ({ ...props }) => {
  const handleSideDrawer = e => {
    return props.onButtonSideDrawer(!props.isSideDrawer);
  };

  return (
    <Wrap className="toggle-button" onClick={handleSideDrawer}>
      <div className="toggle-button__line"></div>
      <div className="toggle-button__line"></div>
      <div className="toggle-button__line"></div>
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.button`
  display: flex;
  height: 20px;
  width: 30px;
  border: none;
  background: transparent;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  left: 70px;

  &:focus {
    outline: none;
  }

  .toggle-button__line {
    width: 20px;
    height: 3px;
    background: #606060;
    border-radius: 50px;
  }
`;

export default SideDrawerButton;
