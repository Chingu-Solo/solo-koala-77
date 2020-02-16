import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

const Reset = ({ ...props }) => {
  const resetButton = () => {
    props.onFontSize(40); // reset to 40px font-size
    props.onDarkMode(false); // reset to Light mode
    props.onViewMode(false); // reset to Grid view
    props.onSearchValue(""); // reset Search results
    document.querySelectorAll(".input-search")[0].value = ""; // reset value into input
    props.onTypeValue(""); // reset Text inside Card
    document.querySelectorAll(".input-modifier")[0].value = ""; // reset value into input
  };

  return (
    <Wrap>
      <Button isDarkMode={props.isDarkMode} onClick={resetButton}>
        <FontAwesomeIcon icon="redo-alt" />
      </Button>
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.span`
  display: flex;
  align-items: center;
`;

export default Reset;
