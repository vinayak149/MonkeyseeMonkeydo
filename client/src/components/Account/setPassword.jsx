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

export function SetPasswordForm(props) {
    const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" inputMode="numeric" placeholder="OTP" />
        {/* <Input type="email" placeholder="Email" /> */}
        <Input type="password" placeholder="New Password" />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Set Password</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      {/* <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink> */}
      {/* </MutedLink> */}
    </BoxContainer>
  );
}

//otp, email , new password, confirm password