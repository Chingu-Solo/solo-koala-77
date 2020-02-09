import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Reset = () => {
  return (
    <MyReset>
      <FontAwesomeIcon icon="redo-alt" />
    </MyReset>
  );
};

//* styled-component < 💅>
const MyReset = styled.button``;

export default Reset;
