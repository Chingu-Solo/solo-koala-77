import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DarkMode = ({ ...props }) => {
  // this gets called on MyDarkMode button click
  const onDarkClick = () => {
    // set the opposite of whatever is in isDarkMode state in App
    return props.onDarkClick(!props.isDarkMode);
  };
  return (
    <Wrap>
      <MyDarkMode onClick={onDarkClick}>
        {props.isDarkMode ? (
          <FontAwesomeIcon icon="sun" />
        ) : (
          <FontAwesomeIcon icon="moon" />
        )}
      </MyDarkMode>
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.span``;
const MyDarkMode = styled.button``;

export default DarkMode;
