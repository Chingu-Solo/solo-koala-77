import React from "react";
import styled from "styled-components";
import Search from "./Search";
import DarkMode from "./DarkMode";
import FontSize from "./FontSize";
import TextModifier from "./TextModifier";
import ViewMode from "./ViewMode";
import Reset from "./Reset";

const Toolbar = ({ ...props }) => {
  // get the value coming from DarkMode (e) and pass it to App
  const onDarkClick = e => {
    return props.onDarkClick(e);
  };
  return (
    <Wrap>
      <Search onSearchValue={props.onSearchValue} />
      <TextModifier onTypeValue={props.onTypeValue} />
      <FontSize />
      <DarkMode onDarkClick={onDarkClick} isDarkMode={props.isDarkMode} />
      <ViewMode isListMode={props.isListMode} />
      <Reset />
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.div``;

export default Toolbar;
