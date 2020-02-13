import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

const Reset = ({ ...props }) => {
  return (
    <Button isDarkMode={props.isDarkMode}>
      <FontAwesomeIcon icon="redo-alt" />
    </Button>
  );
};

//* styled-component < 💅>

export default Reset;
