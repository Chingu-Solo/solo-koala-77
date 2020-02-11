import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

const ViewMode = ({ ...props }) => {
  const onViewClick = () => {
    return props.onViewClick(!props.isListMode);
  };

  return (
    <Button onClick={onViewClick}>
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
