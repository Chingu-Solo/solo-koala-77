import React from "react";
import styled from "styled-components";
import Search from "./Search";
import DarkMode from "./DarkMode";
import SizeSlider from "./SizeSlider";
import TextModifier from "./TextModifier";
import ViewMode from "./ViewMode";

import Reset from "./Reset";

const Toolbar = ({ ...props }) => {
  // UPDATE THE DARK MODE (light/dark)
  const onDarkMode = e => {
    return props.onDarkMode(e);
  };
  // UPDATE THE VIEW MODE (List/Grid)
  const onViewMode = e => {
    return props.onViewMode(e);
  };

  return (
    <Wrap isDarkMode={props.isDarkMode}>
      <span className="inputs">
        <Search
          onSearchValue={props.onSearchValue}
          isDarkMode={props.isDarkMode}
        />
        <TextModifier
          onTypeValue={props.onTypeValue}
          isDarkMode={props.isDarkMode}
        />
      </span>
      <span className="buttons">
        <SizeSlider
          fontSize={props.fontSize}
          onFontSize={props.onFontSize}
          isDarkMode={props.isDarkMode}
        />
        <DarkMode onDarkMode={onDarkMode} isDarkMode={props.isDarkMode} />
        <ViewMode
          onFontSize={props.onFontSize}
          onViewMode={onViewMode}
          isListMode={props.isListMode}
          isDarkMode={props.isDarkMode}
        />
        <Reset
          isDarkMode={props.isDarkMode}
          onDarkMode={props.onDarkMode}
          onFontSize={props.onFontSize}
          onViewMode={props.onViewMode}
          onSearchValue={props.onSearchValue}
          onTypeValue={props.onTypeValue}
        />
      </span>
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.div`
  margin: 30px 0;
  border: 0.5px ${props => (props.isDarkMode ? "#fff" : "#606060")} solid;
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
    width: 50%;
    flex: 1;
  }

  .buttons {
    display: flex;
  }
`;

export default Toolbar;
