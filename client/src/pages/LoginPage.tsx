import React from "react";
import GoBack from "../components/GoBack";
import Login from "../components/Auth/Login";
import { LoginContainer, LoginWrapper } from "./pagesElements";
import { pageVariants, pageTransition } from "../utilities/framerMotion";

const SignupPage = () => {
  return (
    <LoginContainer
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <LoginWrapper>
        <GoBack isWhite={false} />
        <Login />
      </LoginWrapper>
    </LoginContainer>
  );
};

export default SignupPage;
