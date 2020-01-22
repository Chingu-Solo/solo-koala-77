import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import GoogleFonts from "../../apis/GoogleFonts";
import styled from "styled-components";
// import Search from "./Search";

const Toolbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [typeInput, setTypeInput] = useState("");

  const onSearch = async e => {
    // TODO this will search the fonts based on what typed
  };

  const onType = e => {
    setTypeInput(e.target.value);
    // TODO this will modify the text inside the cards
  };

  return (
    <Wrap>
      <Search placeholder="Search font" onChange={onSearch} />
      <TextModifier placeholder="Type something" onChange={onType} />
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
