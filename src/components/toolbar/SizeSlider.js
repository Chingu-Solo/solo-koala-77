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
      <Dropdown
        fontSize={props.fontSize}
        handleDropdown={handleDropdown}
        isDarkMode={props.isDarkMode}
      />
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
  /* ---------------------->
  Applying base CSS styles
  <---------------------- */
  */ input[type="range"] {
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: 100%; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  input[type="range"]:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }

  input[type="range"]::-ms-track {
    width: 100%;
    cursor: pointer;

    /* Hides the slider so custom styles can be added */
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  /* ------------------->
  Styling the Thumb
  <---------------------- */
  /* for Firefox */
  input[type="range"]::-moz-range-thumb {
    background: rgb(255, 82, 82);
    cursor: pointer;
    border: none;
  }
  /* for WebKit/Blink */
  input[type="range"]::-webkit-slider-thumb {
    background: rgb(255, 82, 82);
    cursor: pointer;
    border: none;
  }
  /* for IE */
  input[type="range"]::-ms-thumb {
    background: rgb(255, 82, 82);
    cursor: pointer;
    border: none;
  }
  /* ------------------->
  Styling the Track
  <---------------------- */
`;

export default SizeSlider;
