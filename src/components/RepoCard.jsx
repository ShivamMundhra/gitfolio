import React from "react";
import styled from "styled-components";
import * as Icon from "react-feather";
import ForkIcon from "../assets/gitfork_120084.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 95%;
  margin: 10px 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  justify-content: space-between;
  text-decoration: none;
  color: #000;
`;

const Name = styled.div`
  font-size: 1.2em;
  font-weight: 600;
`;

const Description = styled.div`
  font-size: 0.8em;
  margin: 3px 0;
`;
const Language = styled.div`
  font-size: 0.8em;
  margin: 3px 0;
`;

const Row = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin-top: 5px;
`;
const Star = styled.div`
  display: flex;
  font-size: 0.7em;
  align-items: center;
`;

const RepoCard = (props) => {
  const { repo } = props;
  return (
    <Wrapper as="a" href={repo.html_url}>
      <Name>{repo.name}</Name>
      <Description>{repo.description}</Description>
      <Language>Language : {repo.language}</Language>
      <Row>
        <Star>
          <Icon.Star color="#bbb" size={16} style={{ marginRight: "3px" }} />
          {repo.stargazers_count}
        </Star>

        <Star style={{ marginLeft: "3px" }}>
          <img src={ForkIcon} alt="icon" />
          {repo.forks_count}
        </Star>
        <Star>
          <Icon.Eye color="#bbb" size={16} style={{ marginRight: "3px" }} />
          {repo.watchers_count}
        </Star>

        <Star>{repo.size}Kb</Star>
      </Row>
    </Wrapper>
  );
};

export default RepoCard;
