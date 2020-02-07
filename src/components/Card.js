import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Card = props => {
  // <----------------------------
  // ALL THE STATES /
  const [url, setUrl] = useState(""); // 300 (Regular) url
  // ---------------------------->
  //

  useEffect(() => {
    // extract Regular url if not available get the first one available
    props.font.files[300]
      ? setUrl(props.font.files[300])
      : setUrl(Object.values(props.font.files)[0]);
  }, [props.font.files, url]);

  return (
    <MyCard
      url={url}
      family={props.font.family}
      className="card"
      style={{
        fontFamily: `"${props.font.family}"`
      }}
    >
      <div className="fontTitle">
        {props.font.family}
        <button>+</button>
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
    font-size: 9pt;
    margin-bottom: 20px;
    margin-top: 12px;
    margin-bottom: 4px;
  }
`;

export default Card;
