import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

const DarkMode = ({ ...props }) => {
  // this gets called on MyDarkMode button click
  const onDarkClick = () => {
    // set the opposite of whatever is in isDarkMode state in App
    return props.onDarkClick(!props.isDarkMode);
  };

  return (
    <Button onClick={onDarkClick} isDarkMode={props.isDarkMode}>
      {props.isDarkMode ? (
        <FontAwesomeIcon icon="sun" />
      ) : (
        <FontAwesomeIcon icon="moon" />
      )}
    </Button>
  );
};

//* styled-component < 💅>

export default DarkMode;
