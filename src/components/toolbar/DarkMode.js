import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DarkMode = ({ ...props }) => {
  const [isDarkMode, setIsDarkMode] = useState(props.isDarkMode);

  const onDarkClick = () => {
    !isDarkMode ? setIsDarkMode(true) : setIsDarkMode(false);
  };

  return (
    <Wrap>
      <MyDarkMode onClick={onDarkClick}>
        {isDarkMode ? (
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
