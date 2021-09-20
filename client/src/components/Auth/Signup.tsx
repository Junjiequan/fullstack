import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Box } from "@mui/material";
import { muiConstants } from "../../utilities/muiConstants";

const Signup = () => {
  const [form, setForm] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = form as any;
    const URL = "http://localhost:5000/auth";
    const data = await axios.post(URL + "/signup", { username, password });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };
  return (
    <div>
      <h1 style={{ margin: "2rem 0" }}>REGISTER</h1>
      <form id="signupForm" onSubmit={handleSubmit} autoComplete="off">
        <TextField
          type="text"
          inputProps={{ "aria-label": "username", style: muiConstants.input }}
          name="username"
          fullWidth
          sx={{ my: 1 }}
          id="outlined-basic"
          label={muiConstants.label("username")}
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          type="text"
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
        form="signupForm"
        value="Submit"
        fullWidth
        sx={{ mt: 1, p: 1.2, fontSize: "1.2rem", letterSpacing: "0.1rem" }}
      >
        Signup
      </Button>
    </div>
  );
};

export default Signup;
