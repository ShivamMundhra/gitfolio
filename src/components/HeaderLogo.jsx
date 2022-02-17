import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: transparent;
  font-size: 5em;
  /* font-weight: bold; */
  font-weight: 300;
  color: #ddd;
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 100;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-50%);

  @media all and (max-width: 1000px) {
    position: absolute;
  }
`;

const HeaderLogo = (props) => {
  return (
    <Wrapper>
      <span>Gitfolio</span>
    </Wrapper>
  );
};

export default HeaderLogo;
