import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";

const Toolbar = () => {
  return (
    <Wrap>
      <Search placeholder="Search font" />
      <TextModifier placeholder="Type something" />
      <FontSize>
        <FontAwesomeIcon icon="font" />
      </FontSize>
      <BackgroundSwitch>
        <BackgroundSwitch>
          <FontAwesomeIcon icon="sun" />
        </BackgroundSwitch>
        <BackgroundSwitch>
          <FontAwesomeIcon icon="moon" />
        </BackgroundSwitch>
      </BackgroundSwitch>
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
