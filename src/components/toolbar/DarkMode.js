import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DarkMode = () => {
  return (
    <Wrap>
      <MyDarkMode>
        <FontAwesomeIcon icon="sun" />
      </MyDarkMode>
      <MyDarkMode>
        <FontAwesomeIcon icon="moon" />
      </MyDarkMode>
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.span``;
const MyDarkMode = styled.button``;

export default DarkMode;
