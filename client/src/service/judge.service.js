import { useFetchWrapper } from "../utils/fetchWrapper";

export const JudgeService = () => {
  const fetchWrapper = useFetchWrapper();
  const baseURL = "/judge";

  function getAllJudges() {
    let url = `${baseURL}/all`;
    return fetchWrapper.get(url);
  }

  function addJudge(judgeData) {
    let url = `${baseURL}/add`;
    return fetchWrapper.post(url, judgeData);
  }

  function updateJudge(judgeId, updatedJudge) {
    let url = `${baseURL}/update/${judgeId}`;
    return fetchWrapper.put(url, updatedJudge);
  }

  function deleteJudge(judgeId) {
    let url = `${baseURL}/delete/${judgeId}`;
    return fetchWrapper.delete(url);
  }

  function updateRatingAndFeedback(judgeId, ideaId, requestBody) {
    let url = `${baseURL}/${judgeId}/giverating/${ideaId}`;
    return fetchWrapper.put(url, requestBody);
  }

  return {
    getAllJudges,
    addJudge,
    updateJudge,
    deleteJudge,
    updateRatingAndFeedback,
  };
};
