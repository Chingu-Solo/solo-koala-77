import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackToTop = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", getScroll);
  }, [scroll]);

  const getScroll = () => {
    setScroll(window.pageYOffset);
  };

  const backToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Wrap className="scrollTopButton" onClick={backToTop}>
      <span className={scroll > 180 ? "icon-wrap" : "icon-wrap-none"}>
        <FontAwesomeIcon icon="arrow-up" />
      </span>
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.div`
  .icon-wrap {
    background-color: rgb(255, 82, 82);
    width: 50px;
    height: 50px;
    border-radius: 50px;
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 40px 60px;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
      transform: translateY(-10px);
      transition: all 0.3s;
    }

    @media (max-width: 525px) {
      margin: 60px 30px;
    }

    &-none {
      display: none;
    }

    svg {
      font-size: 35px;
    }
  }
`;

export default BackToTop;
