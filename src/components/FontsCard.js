import React, { useState, useEffect } from "react";

import styled from "styled-components";
// import Card from "./Card"

// === COMPONENT === \\

const FontsCard = props => {
  // <----------------------------
  // === STATES === \\
  const [nodeElements, setNodeElements] = useState([]);
  // ---------------------------->

  // <---------------------------
  // Pass the nodeList from querySelectorAll to nodeElements when the component render /
  useEffect(() => {
    setNodeElements(document.querySelectorAll(".card"));
  }, []);
  // --------------------------->

  // <---------------------------
  // INTERSECTION OBSERVER \\

  // This option array let you control when the observer is invoked
  const options = {
    root: null, // the elements that is used as viewport ( default to the browser viewport if not specified)
    rootMargin: "0px", // margin around the root before computing intersections ( default to all zeros)
    threshold: 1 // between 0 - 1 ( default is 0, means as soon as is visible, 1 needs to be fully visible)
  };
  // creating the observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        // if it's not in the root viewport
        return; // do nothing
      }
      // else
      // convert the Font with the valid format in order to import it (i.e Open+Sans)
      const fontLink = entry.target.firstChild.firstChild.data
        .split(" ")
        .join("+");
      // append a <link> to the <head> for the viewed elements
      const link = document.createElement("link");
      link.href = `https://fonts.googleapis.com/css?family=${fontLink}&display=swap`;
      link.rel = "stylesheet";
      link.type = "text/css";
      document.head.appendChild(link);
      // unobserve if the element is not in the viewport
      console.log(entry.target);
      observer.unobserve(entry.target);
    });
  }, options);
  // Observe each element in the nodeElements array
  nodeElements.forEach(element => {
    observer.observe(element);
  });

  // --------------------------->

  const fonts = props.fontsObject.map((font, index) => {
    return (
      <Card
        className={`${font.family.split(" ").join("")} card`}
        key={index}
        style={{
          fontFamily: `"${font.family}"`
        }}
      >
        <div className="fontTitle">
          {font.family}
          <button>+</button>
        </div>
        {props.typeValue.length === 0 ? "The quick brown fox" : props.typeValue}
      </Card>
      // <Card font={font} index={index}/>
    );
  });

  return <Wrap>{fonts}</Wrap>;
};

//* styled-component < 💅>
const Wrap = styled.section`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  width: calc(30% - 20px + 0px);
  margin-right: 40px;
  margin-bottom: 66px;
  border-top: 1px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.4);
  font-size: 40px;

  .fontTitle {
    display: flex;
    justify-content: space-between;
    font-size: 9pt;
    margin-bottom: 20px;
    margin-top: 12px;
    margin-bottom: 4px;
  }
`;

export default FontsCard;
