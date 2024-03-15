import { useFetchWrapper } from "../utils/fetchWrapper";

export const IdeaService = () => {
  const fetchWrapper = useFetchWrapper();
  const baseURL = "/ideas";

  const getAllIdeas = () => {
    const url = `${baseURL}/all`;
    return fetchWrapper.get(url);
  };

  const getIdeaById = (id) => {
    const url = `${baseURL}/${id}`;
    return fetchWrapper.get(url);
  };

  const addIdea = (idea) => {
    const url = `${baseURL}/add`;
    return fetchWrapper.post(url, idea);
  };

  const updateIdea = (id, idea) => {
    const url = `${baseURL}/update/${id}`;
    return fetchWrapper.put(url, idea);
  };

  const deleteIdea = (id) => {
    const url = `${baseURL}/delete/${id}`;
    return fetchWrapper.delete(url);
  };

  return { getAllIdeas, getIdeaById, addIdea, updateIdea, deleteIdea };
};
