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
  // get the value coming from ViewModeMode (e) and pass it to App
  const onViewClick = e => {
    return props.onViewClick(e);
  };
  return (
    <Wrap>
      <span className="inputs">
        <Search onSearchValue={props.onSearchValue} />
        <TextModifier onTypeValue={props.onTypeValue} />
      </span>
      <span className="buttons">
        <FontSize />
        <DarkMode onDarkClick={onDarkClick} isDarkMode={props.isDarkMode} />
        <ViewMode onViewClick={onViewClick} isListMode={props.isListMode} />
        <Reset />
      </span>
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.div`
  margin: 30px 0;
  border: 0.5px black solid;
  border-radius: 50px;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;

  .inputs {
    height: 100%;
    display: flex;
    align-items: center;
    width: 60%;
  }

  .button {
  }
`;

export default Toolbar;
