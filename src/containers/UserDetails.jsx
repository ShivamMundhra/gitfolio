import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import GhPolyglot from "gh-polyglot";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_GITHUB_URL, DARK_THEME } from "../utils/constants";
import UserDetailBox from "../components/UserDetailBox";
import RepoDetails from "../containers/RepoDetails";
import LangDetails from "../containers/LangDetails";
import RepoChart from "../containers/RepoCharts";
import RateLimit from "../components/RateLimit";
import Limit from "../components/Limit";

const WrapperDiv = styled.div`
  background: transparent;
  color: ${DARK_THEME.accent};
  height: max-content;
  min-height: 100vh;
  width: 100%;
  /* display: flex; */
  position: relative;
`;

const Scrollable = styled.div`
  min-height: 100vh;
  display: flex;
  width: 50%;
  /* height: 100%; */
  flex-direction: column;
  align-items: center;
  padding-top: 0vh;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  @media all and (max-width: 1000px) {
    width: 100%;
    position: relative;
  }
`;

const Wrapper2 = styled.div`
  background-color: #f6d55c;
  min-height: 100vh;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  @media all and (max-width: 1000px) {
    width: 100%;
    position: relative;
    padding: 30px 0;
  }
  /* z-index: -1; */
`;

const Wrapper3 = styled.div`
  background-color: #3caea3;
  min-height: 100vh;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 20;
  @media all and (max-width: 1000px) {
    width: 100%;
    position: relative;
    padding: 30px 0;
  }
`;

const UserDetails = (props) => {
  // const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState(null);
  const [userStats, setUserStats] = useState(null);
  const [limit, setLimit] = useState(null);
  const [remaining, setRemaining] = useState(0);
  const [resetTime, setResetTime] = useState(null);
  const params = useParams();
  const getLimit = useCallback(async () => {
    try {
      const { data } = await axios.get(`${BASE_GITHUB_URL}/rate_limit`);
      setLimit(data.resources.core.limit);
      setRemaining(data.resources.core.remaining);
      setResetTime(data.resources.core.reset);
    } catch (error) {}
  }, []);
  const getUserDetails = useCallback(async () => {
    // console.log(`${BASE_GITHUB_URL}/users/${username}`);
    try {
      const { data } = await axios.get(
        `${BASE_GITHUB_URL}/users/${params.userId}`
      );
      // console.log(data);
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  }, [params.userId]);
  const getRepoDetails = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${BASE_GITHUB_URL}/users/${params.userId}/repos?per_page=100`
      );
      // console.log(data);
      setRepoData(data);
    } catch (error) {
      console.log(error);
    }
  }, [params.userId]);
  const g = useCallback(() => {
    // console.log("hisnogh");
    const me = new GhPolyglot(`${params.userId}`);
    me.userStats(function (err, stats) {
      console.log(err || stats);
      if (!err) {
        setUserStats(stats);
      }
    });
  }, [params.userId]);

  useEffect(() => {
    // setUsername(params.userId);
    getUserDetails();
    getRepoDetails();
    g();
    getLimit();
  }, [params.userId, getUserDetails, getRepoDetails, g, getLimit]);

  return (
    <WrapperDiv>
      <Limit limit={limit} remaining={remaining} />
      {remaining && remaining > 0 ? (
        <>
          {userData && <UserDetailBox userData={userData} />}
          <Scrollable>
            <Wrapper2>
              {userStats && (
                <LangDetails data={userStats} repoData={repoData} />
              )}
              {repoData && <RepoChart repoData={repoData} />}
            </Wrapper2>
            <Wrapper3>
              {repoData && <RepoDetails repoData={repoData} />}
            </Wrapper3>
          </Scrollable>
        </>
      ) : (
        <RateLimit resetTime={resetTime} />
      )}

      {/* <button onClick={g}>
        {userData ? <img src={userData.avatar_url} alt="avatar" /> : "Hert"}
      </button> */}
    </WrapperDiv>
  );
};

export default UserDetails;
