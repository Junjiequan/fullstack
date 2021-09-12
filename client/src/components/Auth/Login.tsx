import React, { useState } from "react";

import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({});
  console.log(form);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { userName, password } = form as any;
    const URL = "http://localhost:5000/auth";
    const data = await axios.post(URL + "/login", { userName, password });
  };
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };
  return (
    <div>
      <form id="loginForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="useName"
          aria-label="username"
          name="userName"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          placeholder="passWord"
          aria-label="password"
          name="password"
          onChange={handleChange}
        ></input>
      </form>
      <button
        type="submit"
        style={{ width: "50px", height: "20px" }}
        form="loginForm"
        value="Submit"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
