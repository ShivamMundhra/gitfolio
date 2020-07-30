import React from "react";
import styled from "styled-components";
import BarChart from "../components/BarChart";

const WrapperDiv = styled.div`
  width: 70%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 1px 2px 5px #000;
  padding: 5px 20px 20px 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RepoCharts = (props) => {
  const { repoData } = props;
  const topRepos = repoData
    .filter((repo) => !repo.fork)
    .sort((a, b) => b["stargazers_count"] - a["stargazers_count"])
    .slice(0, 4);
  console.log(topRepos);
  return (
    <WrapperDiv>
      <h2>Stars</h2>
      <BarChart data={topRepos} />
    </WrapperDiv>
  );
};

export default RepoCharts;
