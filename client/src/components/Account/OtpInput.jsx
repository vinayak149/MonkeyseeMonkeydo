import React, { useContext, useEffect, useRef, useState } from "react";
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
import { AuthService } from "../../service/auth.service.js";
import { useNavigate } from "react-router-dom";


const OtpInput = ({ length = 6 , email}) => {
    const [otp, setOtp] = useState("");
    const inputRef = useRef(null);
    // const navigate = useNavigate();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const onOtpSubmit = async(otp) => {
        try {
            
            const authService = AuthService();
            const response = await authService.verifyOTP(email, otp);
            console.log("Registration successful:", response);
            // navigate('/');
            switchToSignin()
            // switchToOtp();
        } catch (error) {
            console.error("Registration failed:", error.message);
        }
    }
    
    const { switchToSignin } = useContext(AccountContext)

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
        console.log(otp)
        if (otp.length === length) {
            console.log("hi");
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
