import React from "react";
import styled from "styled-components";

const TextModifier = ({ ...props }) => {
  // UPDATE THE TEXT MODIFIER INPUT VALUE
  const onTypeChange = e => {
    return props.onTypeValue(e.target.value);
  };
  return (
    <MyTextModifier isDarkMode={props.isDarkMode}>
      <input
        type="text"
        placeholder="Type something"
        onChange={onTypeChange}
        className="input-modifier"
      />
    </MyTextModifier>
  );
};

//* styled-component < 💅>
const MyTextModifier = styled.span`
  height: 100%;
  align-items: center;
  display: flex;
  border-right: 0.3px solid ${props => (props.isDarkMode ? "#fff" : "#606060")};
  width: 100%;
  padding: 0 10px;

  @media (max-width: 660px) {
    display: none;
  }

  input {
    background: none;
    height: 35px;
    width: 100%;
    border: none;
    font-size: 15px;
    border-bottom: 0.3px solid
      ${props => (props.isDarkMode ? "#fff" : "#606060")};
    font-weight: 500;
    color: ${props => (props.isDarkMode ? "#fff" : "#606060")};
    ::placeholder {
      color: ${props => (props.isDarkMode ? "#fff" : "#606060")};
      opacity: ${props => (props.isDarkMode ? 1 : 0.7)};
    }
  }
`;

export default TextModifier;
