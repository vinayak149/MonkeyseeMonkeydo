import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "./marginer/index.jsx";
import { AccountContext } from "./accountContext.js";
// import { ForgotPasswordForm } from "./forgotPassword";
// import Navbar2 from "../Navbar/Navbar2.jsx";
import { AuthService } from "../../service/auth.service";
import { useNavigate } from "react-router-dom";

export function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

const handleLogin = async () => {
  try {
    const authService =  AuthService();
    const response = await authService.login(email, password);
    console.log("Login successful:", response);
    navigate('/');
    
  } catch (error) {
    console.error("Login failed:", error);
    
  }
};


  const { switchToSignup, switchToForgotPass } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#" onClick={switchToForgotPass}>Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton  type="submit" onClick={handleLogin}>LogIn</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#" onClick={switchToSignup} >
        Don't have an accoun?{" "}
        <BoldLink href="#" >
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}