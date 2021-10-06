import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { muiConstants } from "../../utilities/muiConstants";
import { signup_success, signup_fail } from "../../utilities/notifications";
import FileBase from "react-file-base64";

const Signup = () => {
  const history = useHistory();
  const [form, setForm] = useState({});

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const { username, password, nickname, selectedFile } = form as any;
    const URL = "http://localhost:5000/auth";
    try {
      const res = await axios.post(URL + "/signup", {
        username,
        password,
        nickname,
        selectedFile,
      });
      if (res.data) {
        history.push("/");
        signup_success(res.data.message);
      }
    } catch (err: any) {
      if (err.response.status === 413) return signup_fail("Image is too big");
      signup_fail(err.response.data.error);
    }
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
          id="signup-username"
          label={muiConstants.label("username")}
          variant="outlined"
          required
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
          id="signup-password"
          label={muiConstants.label("password")}
          variant="outlined"
          required
          onChange={handleChange}
        />
        <TextField
          type="text"
          inputProps={{
            "aria-label": "nickname",
            style: muiConstants.input,
          }}
          name="nickname"
          fullWidth
          sx={{ my: 1 }}
          id="nickname"
          label={muiConstants.label("nickname")}
          variant="outlined"
          required
          onChange={handleChange}
        />
        <Box
          sx={{
            mt: "1rem",
            mb: "2.5rem",
            display: "flex",
            position: "relative",
          }}
        >
          <FileBase
            type="text"
            // multiple={true}
            onDone={({ base64 }) => setForm({ ...form, selectedFile: base64 })}
            inputProps={{ accept: "image/*,.jpg,.png" }}
          />
          <span style={{ fontSize: "1.2rem", color: "red", position: "absolute", left: "0", bottom: "-2rem" }}>
            * Max : 20kb (only accept image)
          </span>
        </Box>
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
