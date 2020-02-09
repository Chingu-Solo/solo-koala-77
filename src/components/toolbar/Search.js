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
const MySearchInput = styled.span``;

export default Search;
