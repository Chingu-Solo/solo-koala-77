import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextModifier = ({ ...props }) => {
  // get the value of the Type Input
  const typeChange = e => {
    return props.onTypeValue(e.target.value); // get the value and pass it as argument to onTypeValue()
  };
  return (
    <MyTextModifier className="TextModifier">
      <FontAwesomeIcon icon="keyboard" />
      <input type="text" placeholder="Type something" onChange={typeChange} />
    </MyTextModifier>
  );
};

//* styled-component < 💅>
const MyTextModifier = styled.span``;

export default TextModifier;
