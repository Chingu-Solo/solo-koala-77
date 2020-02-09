import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FontSize = () => {
  return (
    <MyFontSize>
      <FontAwesomeIcon icon="font" />
    </MyFontSize>
  );
};

//* styled-component < 💅>
const MyFontSize = styled.button``;

export default FontSize;
