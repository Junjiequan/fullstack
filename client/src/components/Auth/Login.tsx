import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as L from "./AuthElements";
import { muiConstants } from "../../utilities/muiConstants";
import { login_success } from "../../utilities/notifications";
import { getUser, loggedIn, loggedOut } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const LOGGED = useSelector((state: any) => state.logged);
  const USER = useSelector((state: any) => state.user);
  const [checkUsername, setCheckUsername] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [form, setForm] = useState({});
  const isMobile = useMediaQuery("(max-width:750px)");
  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    // must set credential to true in order to set cookie
    axios.defaults.withCredentials = true;

    const { username, password } = form as any;
    const URL = "http://localhost:5000/auth";
    const PROFILE = "http://localhost:5000/profile";
    try {
      const resp = await axios.post(URL + "/login", {
        username,
        password,
      });

      if (resp.status === 200) {
        const user = await axios.get(PROFILE);

        handleLoggin();
        dispatch(getUser({ username: user.data.username, nickname: user.data.nickname, img: user.data.selectedFile }));
        setCheckUsername("");
        setCheckPassword("");
        login_success(user.data.username);
        localStorage.setItem(
          "feedback-app-user",
          JSON.stringify({ username: user.data.username, nickname: user.data.nickname, img: user.data.selectedFile })
        );
      } else {
        setCheckUsername(resp.data.message);
        alert(resp.data.message);
      }
    } catch (err: any) {
      /**
       * @desc err only returns statusCode whereas err.response returns object
       */
      const userErr = "User Doesn't Exist!";
      const passErr = "Wrong Password";
      if (err.response.data.error === userErr) {
        return setCheckUsername(userErr);
      } else if (err.response.data.error === passErr) {
        return setCheckPassword(passErr);
      }
      console.log(err);
    }
  };
  const handleLoggin = () => {
    dispatch(loggedIn());
  };
  const handleLoggout = () => {
    dispatch(loggedOut());
    localStorage.removeItem("feedback-app-user");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
    e.currentTarget.name === "password" ? setCheckPassword("") : setCheckUsername("");
  };
  if (LOGGED) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "2rem 2.4rem ",
          my: "2.5rem",
          background: `white`,
          borderRadius: "10px",
        }}
      >
        <p style={{ marginBottom: "2rem" }}>
          Welcome, &nbsp;
          <b style={{ color: "RebeccaPurple" }}>{USER.username}</b>.
        </p>
        <img width="80" height="80" src={USER.img} alt=""></img>
        <Button
          variant="contained"
          color="warning"
          type="submit"
          form="loginForm"
          value="Submit"
          onClick={handleLoggout}
          sx={{ mt: 2, p: 1, fontSize: "1.2rem", letterSpacing: "0.1rem" }}
        >
          Logout
        </Button>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "1.2rem 2.4rem 1.5rem",
        marginTop: "2.5rem",
        marginBottom: "2.5rem",
        background: `white`,
        borderRadius: "10px",
      }}
    >
      <form id="loginForm" onSubmit={handleSubmit} autoComplete="off">
        <TextField
          error={!checkUsername ? false : true}
          type="text"
          inputProps={{ "aria-label": "username", style: muiConstants.input }}
          name="username"
          fullWidth
          sx={{ my: 1 }}
          id="login-username"
          label={muiConstants.label(!checkUsername ? "username" : checkUsername)}
          variant="outlined"
          onChange={handleChange}
          required
        />
        <TextField
          error={!checkPassword ? false : true}
          type="password"
          inputProps={{
            "aria-label": "password",
            style: muiConstants.input,
          }}
          name="password"
          fullWidth
          sx={{ my: 1 }}
          id="login-password"
          label={muiConstants.label(!checkPassword ? "password" : checkPassword)}
          variant="outlined"
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </form>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        form="loginForm"
        value="Submit"
        sx={{ mt: 1, p: 1.2, fontSize: "1.2rem", letterSpacing: "0.1rem" }}
      >
        Login
      </Button>
      {!isMobile && (
        <Box my={1.5}>
          No account yet?
          <L.Register href="/signup">Register</L.Register>
        </Box>
      )}
    </Box>
  );
};

export default Login;
