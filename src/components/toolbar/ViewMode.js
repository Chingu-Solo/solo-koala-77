import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ViewMode = () => {
  return (
    <MyViewMode>
      <FontAwesomeIcon icon="list-alt" />
    </MyViewMode>
  );
};

//* styled-component < 💅>
const MyViewMode = styled.button``;

export default ViewMode;
