import React, { useState } from "react";
import styled from "styled-components";
import RepoCard from "../components/RepoCard";
import { Flipper, Flipped } from "react-flip-toolkit";
import Select from "react-select";

const MainWrapper = styled.div`
  background-color: #3caea3;
  min-height: 100vh;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 0vh;
  justify-content: center;
`;

const ReposWrapper = styled.ul`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  align-items: center;
  padding: 0;
  margin: 0 auto;
`;

const Repo = styled.li`
  width: 48%;
  list-style: none;
  align-self: stretch;
  @media all and (max-width: 1000px) {
    min-width: 280px;
  }
`;
// const opionsArr = ["stargazers_count", "size", "watchers_count", "forks"];

// const optionObj={

// }

const options = [
  { value: "stargazers_count", label: "Top Repo by Stars" },
  { value: "size", label: "Top Repo by Size" },
  { value: "watchers_count", label: "Top Repo by Watchers" },
  { value: "forks_count", label: "Top Repo by Forks" },
];
const customStyles = {
  option: (provided, state) => ({
    ...provided,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 300,
    display: "flex",
    backgroundColor: "#fff",
    padding: 10,
  }),
  singleValue: (provided, state) => ({ ...provided }),
};
const RepoDetails = (props) => {
  const [type, setType] = useState("stargazers_count");
  const { repoData } = props;
  const topRepos = repoData
    .filter((repo) => !repo.fork)
    .sort((a, b) => b[type] - a[type])
    .slice(0, 6);
  const handleTypeChange = (newValue) => {
    console.log(newValue);
    setType(newValue.value);
  };

  return (
    <MainWrapper onClick={props.onclick}>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={options[0]}
        name="color"
        options={options}
        onChange={handleTypeChange}
        styles={customStyles}
        isClearable={false}
        isSearchable={false}
      />

      <Flipper flipKey={type}>
        <ReposWrapper>
          {topRepos.map((repo, i) => (
            <Flipped key={repo.name} flipId={repo.name}>
              <Repo>
                <RepoCard repo={repo} />
              </Repo>
            </Flipped>
          ))}
        </ReposWrapper>
      </Flipper>
    </MainWrapper>
  );
};

export default RepoDetails;
