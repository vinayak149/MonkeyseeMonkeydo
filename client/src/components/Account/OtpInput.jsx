import React, { useEffect, useRef, useState } from "react";
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

const OtpInput = ({ length = 6, onOtpSubmit = () => {} }) => {
    const [otp, setOtp] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value) && value.length <= length) {
            setOtp(value);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Backspace") {
            // Move focus to the previous input field on backspace
            if (otp.length === 1) {
                setOtp("");
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (otp.length === length) {
            onOtpSubmit(otp);
        }
    };

    return (
        <BoxContainer>
            <FormContainer>
                <Input
                    type="text"
                    ref={inputRef}
                    value={otp}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    maxLength={length}
                    className="otpInput"
                />
                <SubmitButton type="button" onClick={handleSubmit}>
                    Submit
                </SubmitButton>
            </FormContainer>
        </BoxContainer>
    );
};

export default OtpInput;
