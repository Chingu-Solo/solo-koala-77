import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import styled from "styled-components";

const ViewMode = ({ ...props }) => {
  const onViewMode = () => {
    props.isListMode ? props.onFontSize(40) : props.onFontSize(64);
    return props.onViewMode(!props.isListMode);
  };

  return (
    <Wrap className="viewMode">
      <Button onClick={onViewMode} isDarkMode={props.isDarkMode}>
        {!props.isListMode ? (
          <FontAwesomeIcon icon="bars" />
        ) : (
          <FontAwesomeIcon icon="th" />
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

export default ViewMode;
