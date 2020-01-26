import React, { useEffect } from "react";
import styled from "styled-components";

const FontsCard = props => {
  // append fonts link only at first render
  useEffect(() => {
    props.fontsArray.map(element => {
      const link = document.createElement("link");
      link.href = `https://fonts.googleapis.com/css?family=${element}|&display=swap`;
      link.rel = "stylesheet";
      link.type = "text/css";
      document.head.appendChild(link);
    });
  }, [props.fontsArray]);

  return (
    <Wrap>
      {/* map the fonts array, create the <link> and return the Card with the styled font-family*/}
      {props.fontsArray.map((element, index) => {
        return (
          // appendLink(element),
          <Card key={index} style={{ fontFamily: `'${element}'` }}>
            <div className="fontTitle">
              {element.family}
              <button>+</button>
            </div>
            {props.typeValue.length === 0
              ? "The quick brown fox"
              : props.typeValue}
          </Card>
        );
      })}
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.ol`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.li`
  width: calc(30% - 20px + 0px);
  margin-right: 40px;
  margin-bottom: 66px;
  border-top: 1px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.4);
  font-size: 40px;

  .fontTitle {
    display: flex;
    justify-content: space-between;
    font-size: 9pt;
    margin-bottom: 20px;
    margin-top: 12px;
    margin-bottom: 4px;
  }
`;

export default FontsCard;
