import React from "react";
import LazyLoad from "react-lazyload";

import styled from "styled-components";
import Card from "./Card";
import NoFonts from "./NoFonts";
console.log(process.env);
// === COMPONENT === \\
const FontsCard = ({ ...props }) => {
  const mapFonts = props.filterFonts.map((font, index) => {
    return (
      <LazyLoad height={150} once key={index}>
        <Card
          key={font.family.split(" ").join("")}
          font={font}
          index={index}
          searchValue={props.searchValue}
          typeValue={props.typeValue}
          fonts={props.fonts}
          isDarkMode={props.isDarkMode}
        />
      </LazyLoad>
    );
  });

  return (
    <Wrap className="cardWrap">
      {props.searchValue === "" ? (
        mapFonts
      ) : props.filterFonts.length === 0 ? (
        <NoFonts />
      ) : (
        mapFonts
      )}
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.main`
  display: ${props => (props.isListMode ? "flex" : "grid")};
  grid-template-columns: ${props =>
    props.isListMode ? "0" : "repeat(3, 1fr)"};
  grid-column-gap: ${props => (props.isListMode ? "0" : "50px")};
  grid-row-gap: ${props => (props.isListMode ? "0" : "80px")};

  flex-direction: ${props => (props.isListMode ? "column" : "none")};
`;

export default FontsCard;
