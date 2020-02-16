import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = ({ ...props }) => {
  // UPDATE THE SEARCH INPUT VALUE
  const onSearchChange = e => {
    return props.onSearchValue(e.target.value);
  };

  return (
    <MySearchInput isDarkMode={props.isDarkMode}>
      <FontAwesomeIcon icon="search" />
      <input
        type="text"
        className="input-search"
        placeholder="Search Font"
        onChange={onSearchChange}
      />
    </MySearchInput>
  );
};

//* styled-component < 💅>
const MySearchInput = styled.span`
  height: 100%;
  align-items: center;
  display: flex;
  border-right: 0.3px solid ${props => (props.isDarkMode ? "#fff" : "#606060")};
  width: 100%;
  padding: 0 10px;
  svg {
    font-size: 20px;
    margin: 0 13px 0 0;
    vertical-align: middle;
    color: ${props => (props.isDarkMode ? "#fff" : "#606060")};
  }

  input {
    background: none;
    height: 35px;
    width: 75%;
    border: none;
    font-size: 15px;

    font-weight: 500;
    color: ${props => (props.isDarkMode ? "#fff" : "#606060")};
    ::placeholder {
      color: ${props => (props.isDarkMode ? "#fff" : "#606060")};
      opacity: ${props => (props.isDarkMode ? 1 : 0.7)};
    }
  }
`;

export default Search;
