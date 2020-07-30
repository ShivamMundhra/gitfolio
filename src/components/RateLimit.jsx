import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #2a3950;
`;
const Text = styled.span`
  font-size: 2em;
  font-weight: 600;
  color: #fff;
  text-align: center;
`;

const RateLimit = (props) => {
  return (
    <Wrapper>
      <Text>Rate Limit Exceeded. Try again Later</Text>
    </Wrapper>
  );
};

export default RateLimit;
