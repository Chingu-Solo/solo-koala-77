import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Search = ({ onSearchValue }) => {
  // get the value of the Search Input
  const searchChange = e => {
    return onSearchValue(e.target.value); // get the value and pass the value to the callback (parameter) so it's accessible by the parent
  };
  return (
    <MySearch>
      <FontAwesomeIcon icon="search" />
      <input type="text" placeholder="Search font" onChange={searchChange} />
    </MySearch>
  );
};

//* styled-component < 💅>
const MySearch = styled.div``;

export default Search;
