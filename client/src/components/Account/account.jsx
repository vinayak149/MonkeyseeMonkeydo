import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm.jsx";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext.js";
import { SignupForm } from "./signupForm.jsx";
import {forgotPassword, ForgotPasswordForm} from "./forgotPassword.jsx"
import OtpInput from "./OtpInput.jsx"
import MyParticles from '../Particles/Particles';

const BoxContainer = styled.div`
  width: 320px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: rgba(10, 25, 47, 0.95);
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(200, 200, 200, 0.3);
`;

const TopContainer = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: #112240;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #ccd6f6;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #8892b0;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
  margin-top: -50px; /* Adjusted margin to move the inner container up */
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};
export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const switchToForgotPass = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("forgotpass");
    }, 400);
  };

  const switchToOtp = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("otp");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin, switchToForgotPass, switchToOtp };

  return (
    <div className="auth-container">
            <MyParticles />
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
              <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>Please sign-up to continue!</SmallText>
            </HeaderContainer>
          )}
          {active === "forgotpass" && (
            <HeaderContainer>
              <HeaderText>Forgot</HeaderText>
              <HeaderText>Password?</HeaderText>
              <SmallText>Set your new password!</SmallText>
            </HeaderContainer>
          )}
          {active === "otp" && (
            <HeaderContainer>
              <HeaderText>Type</HeaderText>
              <HeaderText>In OTP</HeaderText>
              <SmallText>Verify yourself!</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
          {active === "forgotpass" && <ForgotPasswordForm/>}
          {active === "otp" && <OtpInput/>}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
    </div>
  );
}