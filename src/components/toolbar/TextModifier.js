import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextModifier = ({ ...props }) => {
  // get the value of the Type Input
  const typeChange = e => {
    console.log(e.target.value);
    return props.onTypeValue(e.target.value); // get the value and pass the value to the callback (parameter) so it's accessible by the parent
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
