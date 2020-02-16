import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import styled from "styled-components";

const DarkMode = ({ ...props }) => {
  // this gets called on MyDarkMode button click
  const onDarkMode = () => {
    // set the opposite of whatever is in isDarkMode state in App
    return props.onDarkMode(!props.isDarkMode);
  };

  return (
    <Wrap>
      <Button onClick={onDarkMode} isDarkMode={props.isDarkMode}>
        {props.isDarkMode ? (
          <FontAwesomeIcon icon="sun" />
        ) : (
          <FontAwesomeIcon icon="moon" />
        )}
      </Button>
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.span`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export default DarkMode;
