import React from "react";
import styled from "styled-components";
import Search from "./Search";
import DarkMode from "./DarkMode";
import SizeSlider from "./SizeSlider";
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
    console.log(e);
    return props.onViewClick(e);
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
        <DarkMode onDarkClick={onDarkClick} isDarkMode={props.isDarkMode} />
        <ViewMode
          onFontSize={props.onFontSize}
          onViewClick={onViewClick}
          isListMode={props.isListMode}
          isDarkMode={props.isDarkMode}
        />
        <Reset isDarkMode={props.isDarkMode} />
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
  }

  .buttons {
    display: flex;
  }
`;

export default Toolbar;
