import { useFetchWrapper } from "../utils/fetchWrapper";

export const AuthService = () => {
  const fetchWrapper = useFetchWrapper();
  const baseURL = "auth";

  function login(email, password) {
    let url = `${baseURL}/login`;
    return fetchWrapper.post(url, {
      username: email,
      password: password,
    });
  }

  function register(data) {
    let url = `${baseURL}/register`;
    return fetchWrapper.post(url, data);
  }

  return { login };
};
