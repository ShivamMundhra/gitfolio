import React from "react";
import styled from "styled-components";
import Doughnut from "../components/DoughNutChart";

const WrapperDiv = styled.div`
  width: 70%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 1px 2px 5px #000;
  padding: 5px 20px 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LangDetails = (props) => {
  return (
    <WrapperDiv>
      <h2>Top Languages</h2>
      <Doughnut data={props.data} />
    </WrapperDiv>
  );
};

export default LangDetails;
