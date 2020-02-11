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
    // setUrl(props.font.files);
  }, [props.font]);
  return (
    <MyCard
      url={url}
      family={props.font.family}
      className={`${props.font.family.split(" ").join("")} card`}
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
      {props.typeValue.length === 0 ? "The quick brown fox" : props.typeValue}
    </MyCard>
  );
};

//* styled-component < 💅>
const MyCard = styled.div`
  border-top: 1px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.4);
  font-size: 40px;

  /* apply the font's url */
  @font-face {
    font-family: ${props => props.family};
    src: url(${props => props.url});
  }

  .fontTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 9pt;
    margin-bottom: 20px;

    button {
      background: rgb(255, 82, 82);
      border-color: rgb(255, 82, 82);
      border-radius: 61px;
      height: 25px;
      width: 25px;
      border: none;

      svg {
        color: ${props => (props.isDarkMode ? "#222" : "#fff")};
      }
    }
  }
`;

export default Card;
