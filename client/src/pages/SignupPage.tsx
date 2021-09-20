import React from "react";
import GoBack from "../components/GoBack";
import Signup from "../components/Auth/Signup";
import { SignupContainer, SignupWrapper } from "./pagesElements";
import { pageVariants, pageTransition } from "../utilities/framerMotion";

const SignupPage = () => {
  return (
    <SignupContainer
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <SignupWrapper>
        <GoBack isWhite={false} />
        <Signup />
      </SignupWrapper>
    </SignupContainer>
  );
};

export default SignupPage;
