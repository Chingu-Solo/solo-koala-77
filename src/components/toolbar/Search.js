import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = ({ ...props }) => {
  // get the value of the Search Input
  const searchChange = e => {
    return props.onSearchValue(e.target.value); // get the value and pass the value to the callback (parameter) so it's accessible by the parent
  };
  return (
    <MySearchInput isDarkMode={props.isDarkMode}>
      <FontAwesomeIcon icon="search" />
      <input type="text" placeholder="Search Font" onChange={searchChange} />
    </MySearchInput>
  );
};

//* styled-component < 💅>
const MySearchInput = styled.span`
  /* width: 23%; */
  height: 100%;
  border-right: 1px solid ${props => (props.isDarkMode ? "#fff" : "#606060")};
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: 500;
  svg {
    font-size: 20px;
    margin: 0 13px 0 0;
    vertical-align: middle;
    color: ${props => (props.isDarkMode ? "#fff" : "#606060")};
  }
  input {
    background: none;
    height: 35px;
    border: none;
    font-size: 15px;
    color: ${props => (props.isDarkMode ? "#fff" : "#606060")};
    ::placeholder {
      color: ${props => (props.isDarkMode ? "#fff" : "#606060")};
      opacity: ${props => (props.isDarkMode ? 1 : 0.7)};
    }
  }
`;

export default Search;
