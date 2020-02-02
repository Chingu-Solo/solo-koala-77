import React from "react";
import styled from "styled-components";

const Card = props => {
  return (
    <Card
      className={`${props.font.family.split(" ").join("")} card`}
      key={props.index}
      style={{
        fontFamily: `"${props.font.family}"`
      }}
    >
      <div className="fontTitle">
        {props.font.family}
        <button>+</button>
      </div>
      {props.typeValue.length === 0 ? "The quick brown fox" : props.typeValue}
    </Card>
  );
};

//* styled-component < 💅>
// const Card = styled.div``;

export default Card;
