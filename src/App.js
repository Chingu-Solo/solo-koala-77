import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faListAlt,
  faRedoAlt,
  faSun,
  faMoon,
  faFont
} from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Header from "./components/header/Header";
import Toolbar from "./components/toolbar/Toolbar";

library.add(fab, far, faListAlt, faRedoAlt, faSun, faMoon, faFont);

const App = () => {
  return (
    <Wrap>
      <Header />
      <Toolbar />
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.header`
  font-family: "Roboto";
  box-sizing: border-box;
`;

export default App;
