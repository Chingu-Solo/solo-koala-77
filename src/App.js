import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import styled from "styled-components";
import { createGlobalStyle } from "styled-components"; // used to normalize browser style

// My Components
import googleFonts from "./api/googleFonts";
import Header from "./components/header/Header";
import Toolbar from "./components/toolbar/Toolbar";
import FontsCard from "./components/FontsCard";
import SideDrawer from "./components/header/SideDrawer/SideDrawer";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

// Font Awesome Library
import { library } from "@fortawesome/fontawesome-svg-core";

import { far } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faTh,
  faRedoAlt,
  faSun,
  faMoon,
  faSearch,
  faPlus,
  faHome,
  faStar,
  faNewspaper,
  faInfoCircle,
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";

library.add(
  far,
  faBars,
  faTh,
  faRedoAlt,
  faSun,
  faMoon,
  faSearch,
  faPlus,
  faHome,
  faStar,
  faNewspaper,
  faInfoCircle,
  faArrowUp
);
// === COMPONENT === \\

const App = () => {
  // <----------------------------
  // ALL THE STATES /
  const [fonts, setFonts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [fontSize, setFontSize] = useState(40);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isListMode, setIsListMode] = useState(false);
  const [isSideDrawer, setIsSideDrawer] = useState(false);
  // ---------------------------->

  // <----------------------------
  // FETCHING DATA WITH AXIOS  /
  //* Note that handling promises with the more concise async/await syntax
  //* requires creating a separate function because the effect callback function cannot be async.)
  //* use async / await in separate function, then call function back in useEffect
  const fetchFonts = async font => {
    const response = await googleFonts.get("/webfonts", {
      params: {
        key: process.env.REACT_APP_GOOGLE_FONTS_API,
        sort: "popularity"
      }
    });
    setFonts(response.data.items); // update state with promise
  };
  // --------------------------->

  // <---------------------------
  // Fetch all fonts only when app first render /
  useEffect(() => {
    fetchFonts();
  }, []);
  // -------------------------->

  console.log(process.env);

  const filterFonts = fonts.filter(font => {
    return font.family.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <Wrap className="Wrapper" isListMode={isListMode}>
      <Normalize isDarkMode={isDarkMode} isListMode={isListMode} />

      <SideDrawer
        className="sideNav-open"
        isSideDrawer={isSideDrawer}
        isDarkMode={isDarkMode}
        onOutsideClick={e => setIsSideDrawer(e)}
      />

      <Header
        isDarkMode={isDarkMode}
        isSideDrawer={isSideDrawer}
        onButtonSideDrawer={e => setIsSideDrawer(e)}
      />
      <Toolbar
        // get the search value and update search State
        searchValue={searchValue}
        onSearchValue={e => setSearchValue(e)}
        // get the typed value and update type state
        typeValue={typeValue}
        onTypeValue={e => setTypeValue(e)}
        isDarkMode={isDarkMode}
        onDarkMode={e => setIsDarkMode(e)}
        isListMode={isListMode}
        onViewMode={e => setIsListMode(e)}
        fontSize={fontSize}
        onFontSize={e => setFontSize(e)}
      />
      <BackToTop />
      <Footer />
      <FontsCard
        filterFonts={filterFonts}
        isListMode={isListMode}
        searchValue={searchValue}
        typeValue={typeValue}
        fonts={fonts}
        fontSize={fontSize}
        isDarkMode={isDarkMode}
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
  font-family: ubuntu, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: 64px 60px 48px;
  background-color: ${props => (props.isDarkMode ? "#222" : "#fff")};
  word-wrap: anywhere;

  @media (max-width: 480px ){
    padding-left: 20px;
    padding-right: 20px;
  }
}
`;

const Wrap = styled.div`
  box-sizing: border-box;

  main {
  }
`;
export default App;
