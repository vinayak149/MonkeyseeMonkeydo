import { useFetchWrapper } from "../utils/fetchWrapper";

export const AuthService = () => {
  const fetchWrapper = useFetchWrapper();
  const baseURL = "/auth";

  function login(email, password) {
    let url = `${baseURL}/login`;
    return fetchWrapper.post(url, {
      email: email,
      password: password,
    });
  }

  function register(email, password) {
    let url = `${baseURL}/register`;
    let requestData = {
      email: email,
      password: password,
    };
    return fetchWrapper.post(url, requestData);
  }

  function verifyOTP(email, otp) {
    let url = `${baseURL}/verify-otp`;
    let verificationRequest = {
      email: email,
      otp: otp,
    };
    return fetchWrapper.post(url, verificationRequest);
  }

  function resendOTP(email) {
    let url = `${baseURL}/resend-otp`;
    let user = {
      email: email,
    };
    return fetchWrapper.post(url, user);
  }

  function forgotPassword(email) {
    let url = `${baseURL}/forgot-password`;
    let user = {
      email: email,
    };
    return fetchWrapper.post(url, user);
  }

  function resetPassword(email, otp, password, conform) {
    let url = `${baseURL}/reset-password`;
    let resetRequest = {
      email: email,
      otp: otp,
      password: password,
      conform: conform,
    };
    return fetchWrapper.post(url, resetRequest);
  }

  return {
    login,
    register,
    verifyOTP,
    resendOTP,
    forgotPassword,
    resetPassword,
  };
};
