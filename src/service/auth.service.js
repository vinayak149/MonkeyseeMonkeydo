import { useFetchWrapper } from "../utils/fetchWrapper";

export const AuthService = () => {
  const fetchWrapper = useFetchWrapper();
  const baseURL = "/auth"; // Updated base URL

  function login(email, password) {
    let url = `${baseURL}/login`;
    return fetchWrapper.post(url, {
      email: email, // Updated to match the backend endpoint
      password: password,
    });
  }

  function register(user) {
    let url = `${baseURL}/register`;
    return fetchWrapper.post(url, user);
  }

  function verifyOtp(email, otp) {
    let url = `${baseURL}/verify-otp`;
    return fetchWrapper.post(url, {
      email: email,
      otp: otp,
    });
  }

  function sendOtp(username) {
    let url = `${baseURL}/send-otp`;
    return fetchWrapper.post(url, {
      username: username,
    });
  }

  function forgotPassword(email) {
    let url = `${baseURL}/forgot-password`;
    return fetchWrapper.post(url, {
      email: email,
    });
  }

  function resetPassword(email, otp, password, confirmPassword) {
    let url = `${baseURL}/reset-password`;
    return fetchWrapper.post(url, {
      email: email,
      otp: otp,
      password: password,
      confirmPassword: confirmPassword,
    });
  }

  return { login, register, verifyOtp, sendOtp, forgotPassword, resetPassword };
};
