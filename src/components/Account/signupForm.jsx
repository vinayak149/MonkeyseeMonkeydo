import React, { useContext } from "react";
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

export function SignupForm(props) {
  const { switchToSignin, switchToOtp } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name"  required/>
        <Input type="email" placeholder="Email" required/>
        <Input type="password" placeholder="Password" required/>
        <Input type="password" placeholder="Confirm Password" required/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={switchToOtp} >Signup</SubmitButton>
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

// username
// email 
// password 
// otp 
