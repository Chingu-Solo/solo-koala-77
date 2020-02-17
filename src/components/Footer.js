import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Wrap>
      <span className="text-wrap">
        Created by{" "}
        <a href="https://github.com/Brewno88" className="user-wrap gh">
          <FontAwesomeIcon icon={faGithub} className="icon" />
          <span className="gh-user">Brewno88</span>
        </a>{" "}
        as a
        <a href="https://www.chingu.io/" className="chingu">
          {" "}
          Chingu
        </a>{" "}
        project
      </span>
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.div`
  position: fixed;
  z-index: 100;
  bottom: 0;
  margin: 10px auto;
  right: 0;
  left: 0;
  width: 35%;
  background: rgb(255, 82, 82);
  border-radius: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  word-spacing: 2px;

  @media (max-width: 1025px) {
    width: 50%;
    font-size: 16px;
  }
  @media (max-width: 660px) {
    width: 50%;
    font-size: 12px;
  }
  @media (max-width: 525px) {
    width: 80%;
    font-size: 12px;
  }

  a {
    color: #fff;

    &:hover {
      color: #222;
      text-decoration: none;
    }
  }
`;

export default Footer;
