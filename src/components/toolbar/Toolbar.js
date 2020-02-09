import React, { useState } from "react";
import styled from "styled-components";
import Search from "./Search";
import DarkMode from "./DarkMode";
import FontSize from "./FontSize";
import TextModifier from "./TextModifier";
import ViewMode from "./ViewMode";
import Reset from "./Reset";

const Toolbar = ({ onSearchValue, onTypeValue }) => {
  const [isDarkMode] = useState(false);
  const [isListMode] = useState(false);

  return (
    <Wrap>
      <Search onSearchValue={onSearchValue} />
      <TextModifier onTypeValue={onTypeValue} />
      <FontSize />
      <DarkMode isDarkMode={isDarkMode} />
      <ViewMode isListMode={isListMode} />
      <Reset />
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.div``;

export default Toolbar;
