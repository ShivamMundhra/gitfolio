import React from "react";
import styled from "styled-components";
import { DARK_THEME } from "../utils/constants";
import useWindowSize from "../utils/useWindowSize";
import Organisations from "./Organsations";

import * as Icon from "react-feather";
import "./styles.css";

const DetailBox = styled.div`
  color: ${DARK_THEME.accent2};
  background-color: #173f5f;
  min-height: 100vh;
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 0vh;
  justify-content: center;
  position: fixed;
  left: 0%;
  top: 0;
  @media all and (max-width: 1000px) {
    width: 100%;
    position: relative;
  }
`;

const UserImg = styled.img`
  height: 20vw;
  width: 20vw;
  border-radius: 10vw;
  border: 6px solid palevioletred;
  margin: 20px 0 0 0;
  @media all and (max-width: 1000px) {
    width: 200px;
    height: 200px;
    border-radius: 100px;
  }
`;

const Name = styled.div`
  font-size: 3vw;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  /* margin: 10px 0 0 0; */
  @media all and (max-width: 1000px) {
    font-size: 30px;
  }
`;

const Username = styled.div`
  color: ${DARK_THEME.accent1};
  font-size: 2vw;
  color: ${DARK_THEME.accent};
  font-weight: 500;
  text-decoration: none;
  margin-top: 5px;
  @media all and (max-width: 1000px) {
    font-size: 20px;
  }
`;

const Login = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

const Website = styled.div`
  font-size: 2vw;
  color: ${DARK_THEME.accent1};
  font-weight: 500;
  text-decoration: none;
  margin-top: 5px;
  &:hover {
    text-decoration: underline;
  }
  display: flex;
  align-items: center;
  @media all and (max-width: 1000px) {
    font-size: 20px;
  }
`;

const Row1 = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  margin-top: 10px;
  width: 70%;
  @media all and (max-width: 1000px) {
    flex-wrap: wrap;
    width: 90%;
  }
`;

const Row2 = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  margin-top: 10px;
  width: 90%;
  @media all and (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;

const OrgRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const StatWrapper = styled.div`
  color: #fff;

  display: flex;
  align-items: baseline;
  padding: 10px 20px;
`;

const Title = styled.div`
  font-size: 1.5vw;
  font-weight: 500;
  margin: 0 5px;
  @media all and (max-width: 1000px) {
    font-size: 15px;
  }
`;

const Count = styled.div`
  font-size: 1.5vw;
  font-weight: 400;
  @media all and (max-width: 1000px) {
    font-size: 15px;
  }
`;

const W2 = styled.div`
  color: #fff;
  /* border: 1px solid palevioletred; */
  display: flex;
  align-items: center;
  padding: 10px 20px;
`;

const OrgTitle = styled.span`
  font-size: 1.5vw;
  font-weight: 500;
  margin: 30px 0 0 0;
  color: #fff;
  @media all and (max-width: 1000px) {
    font-size: 15px;
  }
`;
const UserDetailBox = (props) => {
  const size = useWindowSize();
  if (size.width < 1000) size.width = 1000;
  const { userData } = props;
  const company = userData.company?.split("@")[1];
  // console.log(userData);
  return (
    <DetailBox>
      <UserImg src={userData.avatar_url} alt="avatar" />

      <Name>{userData.name}</Name>
      <Username as="a" href={userData.html_url}>
        @<Login>{userData.login}</Login>
      </Username>
      {userData.blog ? (
        <Website as="a" href={userData.blog}>
          <Icon.Link size={size.width / 64} style={{ marginRight: "3px" }} />{" "}
          <span>{userData.blog}</span>
        </Website>
      ) : null}

      <Row1>
        {userData.location && (
          <W2>
            <Icon.MapPin
              size={size.width / 75}
              style={{ marginRight: "5px" }}
            />
            <span>{userData.location}</span>
          </W2>
        )}

        {company && (
          <W2>
            <Icon.Briefcase
              size={size.width / 75}
              style={{ marginRight: "5px" }}
            />
            <span>{company}</span>
          </W2>
        )}
        {userData.twitter_username && (
          <W2>
            <Icon.Twitter
              size={size.width / 75}
              style={{ marginRight: "5px" }}
            />
            <span>{userData.twitter_username}</span>
          </W2>
        )}
      </Row1>

      <Row2>
        <StatWrapper>
          <Title>Followers:</Title>
          <Count>{userData.followers}</Count>
        </StatWrapper>
        <StatWrapper>
          <Title>Following:</Title>
          <Count>{userData.following}</Count>
        </StatWrapper>
        <StatWrapper>
          <Title>Public Repos:</Title>
          <Count>{userData.public_repos}</Count>
        </StatWrapper>
      </Row2>
      <OrgRow style={{ width: "90%" }}>
        <OrgTitle>Organisations:</OrgTitle>
        <Organisations Url={userData.organizations_url} />
      </OrgRow>
    </DetailBox>
  );
};

export default UserDetailBox;
