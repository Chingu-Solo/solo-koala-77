import React from "react";
import styled from "styled-components";

const Card = props => {
  return (
    <MyCard
      className="card"
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
    </MyCard>
  );
};

//* styled-component < 💅>
const MyCard = styled.div`
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

export default Card;
