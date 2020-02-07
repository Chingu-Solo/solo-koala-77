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
  faListAlt,
  faRedoAlt,
  faSun,
  faMoon,
  faFont
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, far, faListAlt, faRedoAlt, faSun, faMoon, faFont);

// === COMPONENT === \\

const App = () => {
  // <----------------------------
  // ALL THE STATES /
  const [fontsObject, setFontsObject] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
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
    console.log(response.data.items);
    setFontsObject(response.data.items); // update state with promise
  };
  // --------------------------->

  // <---------------------------
  // Access the value of the Search Input /
  const handleSetupChange = value => {
    return setSearchValue(value); // Update searchValue state
  };
  // --------------------------->

  // <---------------------------
  // Access the value of the Type Input /
  const handleTypeChange = value => {
    return setTypeValue(value); // Update typeValue state
  };
  // --------------------------->

  // <---------------------------
  // Fetch all fonts only when app first render /
  useEffect(() => {
    fetchFonts();
  }, []);
  // -------------------------->

  return (
    <Wrap>
      <Normalize />
      <Header />
      <Toolbar
        onSearchValue={handleSetupChange} // pass it as props
        onTypeValue={handleTypeChange}
      />
      <FontsCard
        searchValue={searchValue}
        typeValue={typeValue}
        fontsObject={fontsObject}
      ></FontsCard>
    </Wrap>
  );
};

// <---------------------------
//* styled-component < 💅>
// Reset styling
const Normalize = createGlobalStyle`
*{
font-family: "Roboto";
  box-sizing: border-box;
}
body{
  margin: 0;
  padding: 60px;
}
`;

const Wrap = styled.div`
  box-sizing: border-box;
`;
export default App;
