import { useFetchWrapper } from "../utils/fetchWrapper";

export const PanelistService = () => {
    const fetchWrapper = useFetchWrapper();
    const baseURL = 'panelists';

    function getAllPanelists() {
        const url = `${baseURL}/all`;
        return fetchWrapper.get(url);
    }

    function getPanelistById(panelistId) {
        const url = `${baseURL}/${panelistId}`;
        return fetchWrapper.get(url);
    }

    function addPanelist(panelist) {
        const url = `${baseURL}/add`;
        return fetchWrapper.post(url, panelist);
    }

    function giveReview(panelistId, ideaId, reviewRequest) {
        const url = `${baseURL}/${panelistId}/give-review/${ideaId}`;
        return fetchWrapper.post(url, reviewRequest);
    }

    return {
        getAllPanelists,
        getPanelistById,
        addPanelist,
        giveReview,
    };
};
