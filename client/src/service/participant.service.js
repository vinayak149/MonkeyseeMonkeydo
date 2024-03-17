import { useFetchWrapper } from "../utils/fetchWrapper";

export const ParticipantService = () => {
    const fetchWrapper = useFetchWrapper();
    const baseURL = '/participants';

    function getAllParticipants() {
        const url = `${baseURL}`;
        return fetchWrapper.get(url);
    }

    function getParticipantById(id) {
        const url = `${baseURL}/${id}`;
        return fetchWrapper.get(url);
    }

    function addParticipant(participantData) {
        const url = `${baseURL}/add`;
        return fetchWrapper.post(url, participantData);
    }

    function updateParticipant(id, participantData) {
        const url = `${baseURL}/${id}`;
        return fetchWrapper.put(url, participantData);
    }

    function deleteParticipant(id) {
        const url = `${baseURL}/${id}`;
        return fetchWrapper.delete(url);
    }

    function getDashboardProgress(id) {
        const url = `${baseURL}/dashboard/${id}/progress`;
        return fetchWrapper.get(url);
    }

    return {
        getAllParticipants,
        getParticipantById,
        addParticipant,
        updateParticipant,
        deleteParticipant,
        getDashboardProgress,
    };
};
