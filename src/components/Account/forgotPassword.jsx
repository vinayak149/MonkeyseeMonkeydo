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
  const { switchToForgotPass } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" inputMode="numeric" placeholder="OTP" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="New Password" />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToForgotPass}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}