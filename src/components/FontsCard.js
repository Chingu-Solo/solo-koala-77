import React from "react";
import LazyLoad from "react-lazyload";

import styled from "styled-components";
import Card from "./Card";

// === COMPONENT === \\
const FontsCard = props => {
  return (
    <Wrap className="cardWrap">
      {props.fontsObject.map((font, index) => {
        return (
          <LazyLoad height={200} key={index}>
            <Card
              font={font}
              index={index}
              earchValue={props.searchValue}
              typeValue={props.typeValue}
              fontsObject={props.fontsObject}
            />
          </LazyLoad>
        );
      })}
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export default FontsCard;
