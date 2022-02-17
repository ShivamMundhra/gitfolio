import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import { BASE_GITHUB_URL } from "../utils/constants";
import Limit from "../components/Limit";
import HeaderLogo from "../components/HeaderLogo";

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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const LandingPage = (props) => {
  const history = useHistory();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [open, setOpen] = useState(false);
  const handleChange = (e) => setUsername(e.target.value);
  const [limit, setLimit] = useState(null);
  const [remaining, setRemaining] = useState(0);
  // const [resetTime, setResetTime] = useState(null);
  const handleSubmit = () => {
    history.push(`/users/${username}`);
  };
  const handleEnter = (e) => {
    if (e.keyCode === 13) handleSubmit();
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const getLimit = useCallback(async () => {
    try {
      const { data } = await axios.get(`${BASE_GITHUB_URL}/rate_limit`);
      setLimit(data.resources.core.limit);
      setRemaining(data.resources.core.remaining);
      // setResetTime(data.resources.core.reset);
    } catch (error) {}
  }, []);
  // console.log(location);
  useEffect(() => {
    // Update the document title using the browser API    document.title = `You clicked ${count} times`;  });
    if (location.state && location.state.redirected) {
      setOpen(true);
      location.state.redirected = false;
    }
    getLimit();
  }, [open, getLimit, location.state]);
  return (
    <Wrapper onKeyDown={handleEnter}>
      <Limit limit={limit} remaining={remaining} />
      <HeaderLogo />
      <Text>Enter Username</Text>
      <Input type="text" value={username} onChange={handleChange} />
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Please enter a valid Username
        </Alert>
      </Snackbar>
    </Wrapper>
  );
};

export default LandingPage;
