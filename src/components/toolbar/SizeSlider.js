import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";

const SizeSlider = ({ ...props }) => {
  // get the font's size value from the slide and pass it to onFontSize in App
  const handleSizeSlide = e => {
    return props.onFontSize(e.target.value);
  };
  // get the font's size clicked in the dropdown component and pass it to onFontSize in App
  const handleDropdown = e => {
    return props.onFontSize(e);
  };

  return (
    <Wrap>
      <Dropdown fontSize={props.fontSize} handleDropdown={handleDropdown} />
      <input
        type="range"
        min={8}
        max={120}
        value={props.fontSize}
        onChange={handleSizeSlide}
      />
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.div`
  display: flex;
  input {
    width: 60%;
  }
`;

export default SizeSlider;
