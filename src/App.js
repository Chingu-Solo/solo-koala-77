import React from "react";
import styled from "styled-components";
import Header from "./components/header/Header";

const App = () => {
  return (
    <Wrap>
      <Header />
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.header`
  font-family: "Roboto";
  box-sizing: border-box;
`;

export default App;
