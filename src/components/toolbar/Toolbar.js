import React from "react";
import styled from "styled-components";
import Search from "./Search";
import TextModifier from "./TextModifier";
import FontSize from "./FontSize";
import DarkMode from "./DarkMode";
import ViewMode from "./ViewMode";
import Reset from "./Reset";

const Toolbar = ({ ...props }) => {
  console.log(props);
  return (
    <Wrap className="toolbar">
      <Search onSearchValue={props.onSearchValue} />
      <TextModifier onTypeValue={props.onTypeValue} />
      <FontSize />
      <DarkMode />
      <ViewMode />
      <Reset />
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.div`
  display: flex;
`;

export default Toolbar;
