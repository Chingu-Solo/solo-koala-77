import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ViewMode = ({ ...props }) => {
  const [isListMode, setIsListMode] = useState(props.isListMode);

  const onViewClick = () => {
    !isListMode ? setIsListMode(true) : setIsListMode(false);
  };
  return (
    <MyViewMode onClick={onViewClick}>
      {isListMode ? (
        <FontAwesomeIcon icon="bars" />
      ) : (
        <FontAwesomeIcon icon="th" />
      )}
    </MyViewMode>
  );
};

//* styled-component < 💅>
const MyViewMode = styled.button``;

export default ViewMode;
