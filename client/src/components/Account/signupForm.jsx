import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common.jsx";
import { Marginer } from "./marginer/index.jsx";
import { AccountContext } from "./accountContext.js";
import { AuthService } from "../../service/auth.service";

export function SignupForm({email, setEmail}) {
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
      const authService = AuthService();
      const response = await authService.register(email, password);
      console.log("Registration successful:", response);
      
      switchToOtp();
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };

  const { switchToSignin, switchToOtp } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        {/* <Input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        /> */}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={handleSignup} >
        Signup
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
