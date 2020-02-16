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
  padding: 0;
  margin: 10px;
  display: flex;
  height: 20px;
  width: 30px;
  border: none;
  background: transparent;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  left: 10px;

  &:focus {
    outline: none;
  }

  .toggle-button__line {
    width: 20px;
    height: 3px;
    background: #606060;
    border-radius: 50px;
  }

  @media (min-width: 1250px) {
    display: none;
  }
`;

export default SideDrawerButton;
