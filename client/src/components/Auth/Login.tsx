import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Box } from "@mui/material";
import * as L from "./AuthElements";
import { muiConstants } from "../../utilities/muiConstants";

const Login = () => {
  const [form, setForm] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { userName, password } = form as any;
    const URL = "http://localhost:5000/auth";
    const data = await axios.post(URL + "/login", { userName, password });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1.2rem 2.4rem 2.4rem",
        marginTop: "2rem",
        background: `white`,
        borderRadius: "10px",
      }}
    >
      <form
        id="loginForm"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <TextField
          type="text"
          inputProps={{ "aria-label": "username", style: muiConstants.input }}
          name="userName"
          fullWidth
          sx={{ my: 1 }}
          id="outlined-basic"
          label={muiConstants.label("username")}
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          type="password"
          inputProps={{
            "aria-label": "password",
            style: muiConstants.input,
          }}
          name="password"
          fullWidth
          sx={{ my: 1 }}
          id="outlined-basic"
          label={muiConstants.label("password")}
          variant="outlined"
          onChange={handleChange}
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
      <Box mt={1.5}>
        No account yet? <L.Register href="/register">Register</L.Register>
      </Box>
    </div>
  );
};

export default Login;
