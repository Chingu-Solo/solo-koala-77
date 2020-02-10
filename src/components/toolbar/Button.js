import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick }) => {
  return <MyButton onClick={onClick}>{children}</MyButton>;
};

//* styled-component < 💅>
const MyButton = styled.button`
  border: none;
  background: none;
  margin: 0 10px;
  font-size: 20px;
  color: #707070;
`;

export default Button;
