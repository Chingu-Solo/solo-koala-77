import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components"; // used to normalize browser style
// My Components
import googleFonts from "./api/googleFonts";
import Header from "./components/header/Header";
import Toolbar from "./components/toolbar/Toolbar";
import FontsCard from "./components/FontsCard";

// Font Awesome Library
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faTh,
  faRedoAlt,
  faSun,
  faMoon,
  faFont,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, far, faBars, faTh, faRedoAlt, faSun, faMoon, faFont, faSearch);

// === COMPONENT === \\

const App = () => {
  // <----------------------------
  // ALL THE STATES /
  const [fontsObject, setFontsObject] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [fontSize, setFontSize] = useState("40px");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isListMode, setIsListMode] = useState(false);
  // ---------------------------->

  // <----------------------------
  // FETCHING DATA WITH AXIOS  /
  //* Note that handling promises with the more concise async/await syntax
  //* requires creating a separate function because the effect callback function cannot be async.)
  //* use async / await in separate function, then call function back in useEffect
  const fetchFonts = async font => {
    const response = await googleFonts.get("/webfonts", {
      params: {
        key: "AIzaSyBnR7OcpIdnPjygLbpBIWZIbXX5sdKSDLM",
        sort: "popularity"
      }
    });
    setFontsObject(response.data.items); // update state with promise
  };
  // --------------------------->

  // <---------------------------
  // Fetch all fonts only when app first render /
  useEffect(() => {
    fetchFonts();
  }, []);
  // -------------------------->

  return (
    <Wrap isListMode={isListMode}>
      <Normalize isDarkMode={isDarkMode} isListMode={isListMode} />
      <Header />
      <Toolbar
        // get the search value and update search State
        onSearchValue={value => {
          return setSearchValue(value);
        }}
        // get the typed value and update type state
        onTypeValue={value => {
          return setTypeValue(value);
        }}
        onDarkClick={e => {
          setIsDarkMode(e);
        }}
        isDarkMode={isDarkMode}
        onViewClick={e => {
          setIsListMode(e);
        }}
        isListMode={isListMode}
      />
      <FontsCard
        isListMode={isListMode}
        searchValue={searchValue}
        typeValue={typeValue}
        fontsObject={fontsObject}
        fontSize={fontSize}
      ></FontsCard>
    </Wrap>
  );
};

// <---------------------------
//* styled-component < 💅>
// Reset styling
const Normalize = createGlobalStyle`
*{
  box-sizing: border-box;

}
body{
  margin: 0;
  padding: 70px 120px;
  background-color: ${props => (props.isDarkMode ? "#222" : "#fff")}
}
`;

const Wrap = styled.div`
  box-sizing: border-box;

  main {
    display: ${props => (props.isListMode ? "flex" : "grid")};
    grid-template-columns: ${props =>
      props.isListMode ? "0" : "repeat(4, 1fr)"};
    grid-column-gap: ${props => (props.isListMode ? "0" : "50px")};
    grid-row-gap: ${props => (props.isListMode ? "0" : "80px")};

    flex-direction: ${props => (props.isListMode ? "column" : "none")};
  }
`;
export default App;
