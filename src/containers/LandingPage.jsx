import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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
`;

const Input = styled.input`
  padding: 14px 10px;
  background-color: #354864;
  color: #fff;
  font-size: 1.3em;
  border: none;
  border-radius: 5px;
  width: 400px;
`;

const LandingPage = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const handleChange = (e) => setUsername(e.target.value);
  const handleSubmit = () => {
    history.push(`/users/${username}`);
  };
  const handleEnter = (e) => {
    if (e.keyCode === 13) handleSubmit();
  };
  return (
    <Wrapper onKeyDown={handleEnter}>
      <Text>Enter Username</Text>
      <Input type="text" value={username} onChange={handleChange} />
    </Wrapper>
  );
};

export default LandingPage;
