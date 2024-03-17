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

  function register(email,password) {
    let url = `${baseURL}/register`;
    let requestData = {
      email: email,
      password: password,
    }
    console.log(requestData)
    return fetchWrapper.post(url,requestData);
  }

  return { login,register};
};
