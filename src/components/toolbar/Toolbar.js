import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import GoogleFonts from "../../apis/GoogleFonts";
import styled from "styled-components";
// import Search from "./Search";

const Toolbar = ({ onSearchValue, onTypeValue }) => {
  const searchChange = e => {
    return onSearchValue(e.target.value);
  };

  const typeChange = e => {
    return onTypeValue(e.target.value);
  };

  return (
    <Wrap>
      <Search placeholder="Search font" onChange={searchChange} />
      <TextModifier placeholder="Type something" onChange={typeChange} />
      <FontSize>
        <FontAwesomeIcon icon="font" />
      </FontSize>
      <span>
        <BackgroundSwitch>
          <FontAwesomeIcon icon="sun" />
        </BackgroundSwitch>
        <BackgroundSwitch>
          <FontAwesomeIcon icon="moon" />
        </BackgroundSwitch>
      </span>
      <ViewMode>
        <FontAwesomeIcon icon="list-alt" />
      </ViewMode>
      <Reset>
        <FontAwesomeIcon icon="redo-alt" />
      </Reset>
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.div``;

const Search = styled.input``;
const TextModifier = styled.input``;
const FontSize = styled.button``;
const BackgroundSwitch = styled.button``;
const ViewMode = styled.button``;
const Reset = styled.button``;

export default Toolbar;
