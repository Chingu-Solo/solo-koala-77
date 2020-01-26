import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components"; // used to normalize browser style

// My Components
import Header from "./components/header/Header";
import Toolbar from "./components/toolbar/Toolbar";
import googleFonts from "./api/googleFonts";
import FontsCard from "./components/FontsCard";

// Font Awesome Library
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import {
  faListAlt,
  faRedoAlt,
  faSun,
  faMoon,
  faFont
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, far, faListAlt, faRedoAlt, faSun, faMoon, faFont);

//
const App = () => {
  const [fonts, setFonts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [typeValue, setTypeValue] = useState("");

  //* ----- FETCHING DATA WITH AXIOS ---------------- */
  // Note that handling promises with the more concise async/await syntax
  // requires creating a separate function because the effect callback function cannot be async.)
  // use async / await in separate function, then call function back in useEffect
  const getFonts = async font => {
    const response = await googleFonts.get("/webfonts", {
      params: {
        key: "AIzaSyBnR7OcpIdnPjygLbpBIWZIbXX5sdKSDLM",
        sort: "popularity"
      }
    });
    setFonts(response.data.items.map(font => font.family));
  };
  // fetch all fonts only when app first render
  useEffect(() => {
    getFonts();
  }, []);

  console.log(fonts);

  // Access the value of the Search Input
  const handleSetupChange = value => {
    return setSearchValue(value); // Update searchValue state
  };
  // Access the value of the Type Input
  const handleTypeChange = value => {
    return setTypeValue(value); // Update typeValue state
  };

  return (
    <Wrap>
      <Normalize />

      <Header />

      <Toolbar
        onSearchValue={handleSetupChange} // pass it as props
        onTypeValue={handleTypeChange}
      />

      <FontsCard
        fontsArray={fonts}
        searchValue={searchValue}
        typeValue={typeValue}
      />
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.header`
  font-family: "Roboto";
  box-sizing: border-box;
`;

// Reset styling
const Normalize = createGlobalStyle`
*{
  box-sizing: border-box;
}
body{
  margin: 0;
  padding: 60px;
}
`;

export default App;
