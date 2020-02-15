import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

const ViewMode = ({ ...props }) => {
  const onViewClick = () => {
    props.isListMode ? props.onFontSize(40) : props.onFontSize(64);
    return props.onViewClick(!props.isListMode);
  };

  return (
    <Button onClick={onViewClick} isDarkMode={props.isDarkMode}>
      {!props.isListMode ? (
        <FontAwesomeIcon icon="bars" />
      ) : (
        <FontAwesomeIcon icon="th" />
      )}
    </Button>
  );
};

//* styled-component < 💅>

export default ViewMode;
