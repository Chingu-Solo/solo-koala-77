import React from "react";
import LazyLoad from "react-lazyload";

import styled from "styled-components";
import Card from "./Card";
import NoFonts from "./NoFonts";

// === COMPONENT === \\

const FontsCard = ({ ...props }) => {
  const mapFonts = props.filterFonts.map((font, index) => {
    return (
      <LazyLoad height={100} once key={index}>
        <Card
          font={font}
          key={font.family.split(" ").join("")}
          searchValue={props.searchValue}
          typeValue={props.typeValue}
          isDarkMode={props.isDarkMode}
          fontSize={props.fontSize}
        />
      </LazyLoad>
    );
  });

  return (
    <Wrap className="cardWrap" isListMode={props.isListMode}>
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
  grid-row-gap: 80px; /*${props => (props.isListMode ? "0" : "80px")};*/
  flex-direction: ${props => (props.isListMode ? "column" : "none")};

  @media(max-width: 660px){
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1600px){
    grid-template-columns: repeat(4, 1fr)
  }
  @media (max-width: 1250px){
    grid-template-columns: repeat(2, 1fr)
  }
`;

export default FontsCard;
