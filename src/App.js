import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

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

  //! Note that handling promises with the more concise async/await syntax
  //! requires creating a separate function.
  //! (Why? The effect callback function cannot be async.)
  // use async / await in separate function, then call
  // function back in useEffect
  const getFonts = async () => {
    const response = await googleFonts.get("/webfonts", {
      params: {
        key: "AIzaSyBnR7OcpIdnPjygLbpBIWZIbXX5sdKSDLM",
        sort: "popularity"
      }
    });

    setFonts(response.data.items);
  };

  // calling the axios function
  useEffect(() => {
    getFonts();
  }, []);
  console.log(fonts);
  return (
    <Wrap>
      <Normalize />
      <Header />
      <Toolbar />
      <FontsCard fontsArray={fonts} />
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
