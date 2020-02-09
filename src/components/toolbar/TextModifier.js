import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextModifier = ({ onTypeValue }) => {
  // get the value of the Type Input
  const typeChange = e => {
    return onTypeValue(e.target.value); // get the value pass the value to the callback (parameter) so it's accessible by the parent
  };
  return (
    <MyTextModifier>
      <FontAwesomeIcon icon="keyboard" />
      <input type="text" placeholder="Type something" onChange={typeChange} />
    </MyTextModifier>
  );
};

//* styled-component < 💅>
const MyTextModifier = styled.div``;

export default TextModifier;
