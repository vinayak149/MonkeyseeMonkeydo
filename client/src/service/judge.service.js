import { useFetchWrapper } from "../utils/fetchWrapper";

export const JudgeService = () => {
  const fetchWrapper = useFetchWrapper();
  const baseURL = "judge";
  function getJudges() {
    let url = `${baseURL}/all`;
    return fetchWrapper.get(url);
  }

  function getJudgeById(id) {
    let url = `${baseURL}/${id}`;
    return fetchWrapper.get(url);
  }

  // function addJudges()

  return {
    getJudges,
    getJudgeById,
  };
};
