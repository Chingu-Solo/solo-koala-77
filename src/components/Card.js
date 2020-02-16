import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ ...props }) => {
  // <----------------------------
  // ALL THE STATES /
  const [url, setUrl] = useState(""); // 300 (Regular) url
  // ---------------------------->
  //

  useEffect(() => {
    // extract Regular url if not available get the first one available
    props.font.files["regular"]
      ? setUrl(`'${props.font.files["regular"]}'`)
      : setUrl(`'${Object.values(props.font.files)[0]}'`);
  }, [props.font]);

  return (
    <MyCard
      fontSize={props.fontSize}
      url={url}
      family={props.font.family}
      className={`${props.font.family.split(" ").join("")} fontCard`}
      style={{
        fontFamily: `"${props.font.family}"`,
        fontWeight: 100
      }}
      isDarkMode={props.isDarkMode}
    >
      <div className="fontTitle">
        {props.font.family}
        <button>
          <FontAwesomeIcon icon="plus" />
        </button>
      </div>
      <span className="changingText">
        {props.typeValue.length === 0 ? "The quick brown fox" : props.typeValue}
      </span>
    </MyCard>
  );
};

//* styled-component < 💅>
const MyCard = styled.div`
  border-top: 1px solid transparent;
  border-top-color: ${props => (props.isDarkMode ? "#fff" : "#111")};
  font-size: ${props => props.fontSize}px;

  .changingText {
    color: ${props => (props.isDarkMode ? "#fff" : "#111")};
  }

  /* apply the font's url */
  @font-face {
    font-family: ${props => props.family};
    src: url(${props => props.url});
  }

  .fontTitle {
    font-family: ubuntu;
    display: flex;
    justify-content: space-between;
    font-size: 9pt;
    margin-bottom: 20px;
    margin-top: 12px;
    margin-bottom: 4px;
  }

  button {
    background-color: rgb(255, 82, 82);
    border-radius: 50px;
    width: 26px;
    height: 26px;
    border: none;
    position: relative;

    svg {
      color: ${props => (props.isDarkMode ? "#fff" : "#000")};
      font-size: 15px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(34%);
      transform: translate(-45%, -50%);
    }
  }
`;

export default Card;
