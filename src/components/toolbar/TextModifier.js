import React from "react";
import styled from "styled-components";

const TextModifier = ({ ...props }) => {
  // get the value of the Type Input
  const typeChange = e => {
    return props.onTypeValue(e.target.value); // get the value and pass it as argument to onTypeValue()
  };
  return (
    <MyTextModifier className="TextModifier">
      <input type="text" placeholder="Type something" onChange={typeChange} />
    </MyTextModifier>
  );
};

//* styled-component < 💅>
const MyTextModifier = styled.span`
  height: 100%;
  margin-left: 10px;
  align-items: center;
  display: flex;
  border-right: 0.3px solid #aaa;
  width: 100%;

  input {
    height: 35px;
    border: none;
    font-size: 15px;
    border-bottom: 0.3px solid #aaa;
    font-weight: 500;
  }
`;

export default TextModifier;
