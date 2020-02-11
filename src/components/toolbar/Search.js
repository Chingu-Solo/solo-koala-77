import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = ({ ...props }) => {
  // get the value of the Search Input
  const searchChange = e => {
    return props.onSearchValue(e.target.value); // get the value and pass the value to the callback (parameter) so it's accessible by the parent
  };
  return (
    <MySearchInput>
      <FontAwesomeIcon icon="search" />
      <input type="text" placeholder="Search Font" onChange={searchChange} />
    </MySearchInput>
  );
};

//* styled-component < 💅>
const MySearchInput = styled.span`
  /* width: 23%; */
  height: 100%;
  border-right: 0.3px solid #aaa;
  display: flex;
  align-items: center;
  width: 100%;
  svg {
    font-size: 20px;
    margin: 0 13px 0 0;
    vertical-align: middle;
    color: #707070;
  }
  input {
    height: 35px;
    border: none;
    font-size: 15px;
  }
`;

export default Search;
