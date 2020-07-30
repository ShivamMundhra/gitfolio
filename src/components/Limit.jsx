import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: transparent;
  font-size: 1em;
  font-weight: 300;
  color: #ddd;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media all and (max-width: 1000px) {
    position: absolute;
  }
`;

const Limit = (props) => {
  return (
    <Wrapper>
      <span>Request Left</span>
      {/* <span></span> */}
      <span style={{ fontSize: "1.5em" }}>
        {props.remaining}/{props.limit}
      </span>
    </Wrapper>
  );
};

export default Limit;
