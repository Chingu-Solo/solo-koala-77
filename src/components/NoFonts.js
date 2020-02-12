import React from "react";
import styled from "styled-components";

const NoFonts = () => {
  return (
    <Wrap>
      <div className="ascii">(≥o≤)</div>
      <div className="text">No fonts found!</div>
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  margin: auto;
  left: 50%;
  transform: translateX(-50%);
  .ascii {
    font-size: 200px;
    letter-spacing: 10px;
    color: #bbb;
    margin: 50px;
  }
  .test {
    color: #bbb;
    margin: 50px;
  }
`;

export default NoFonts;
