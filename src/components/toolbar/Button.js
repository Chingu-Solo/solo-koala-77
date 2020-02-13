import React from "react";
import styled from "styled-components";

const Button = ({ ...props }) => {
  return (
    <MyButton onClick={props.onClick} isDarkMode={props.isDarkMode}>
      {props.children}
    </MyButton>
  );
};

//* styled-component < 💅>
const MyButton = styled.button`
  border: none;
  background: none;
  margin: 0 10px;
  font-size: 20px;
  color: ${props => (props.isDarkMode ? "#fff" : "#606060")};
`;

export default Button;
