import React from "react";
import styled from "styled-components";

const FontsCard = props => {
  // create a <link> element in the head with font-family
  const appendLink = font => {
    const link = document.createElement("link");
    link.href = `https://fonts.googleapis.com/css?family=${font}&display=swap`;
    link.rel = "stylesheet";
    link.type = "text/css";
    document.head.appendChild(link);
  };

  return (
    <Wrap>
      {/* map the fonts array, create the <link> and return the Card with the styled font-family*/}
      {props.fontsArray.map(element => {
        return (
          appendLink(element.family),
          (
            <Card style={{ fontFamily: `'${element.family}'` }}>
              <div className="fontTitle">
                {element.family}
                <button>+</button>
              </div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              corporis.
            </Card>
          )
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
