import React, { useState } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";

const fontSize = {
  input: {
    fontSize: 14,
    padding: 14,
  },
  label(text: string) {
    return (
      <span style={{ fontSize: 14, textTransform: "capitalize" }}>{text}</span>
    );
  },
};
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
          inputProps={{ "aria-label": "username", style: fontSize.input }}
          name="userName"
          fullWidth
          sx={{ my: 1.2 }}
          id="outlined-basic"
          label={fontSize.label("username")}
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          type="password"
          inputProps={{
            "aria-label": "password",
            style: fontSize.input,
          }}
          name="password"
          fullWidth
          sx={{ my: 1.2 }}
          id="outlined-basic"
          label={fontSize.label("password")}
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
        sx={{ mt: 1, p: 1.5, fontSize: "1.2rem", letterSpacing: "0.1rem" }}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
