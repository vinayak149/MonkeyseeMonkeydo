import { useFetchWrapper } from "../utils/fetchWrapper";

export const TeamService = () => {
    const fetchWrapper = useFetchWrapper();
    const baseURL = 'teams';

    function getAllTeams() {
        const url = `${baseURL}/allteams`;
        return fetchWrapper.get(url);
    }

    function addParticipantToTeam(teamId, participant) {
        const url = `${baseURL}/add-participant/${teamId}`;
        return fetchWrapper.post(url, participant);
    }

    function assignIdeaToTeam(teamId, idea) {
        const url = `${baseURL}/assign-idea/${teamId}`;
        return fetchWrapper.post(url, idea);
    }

    function addTeam(team) {
        const url = `${baseURL}/add`;
        return fetchWrapper.post(url, team);
    }

    return {
        getAllTeams,
        addParticipantToTeam,
        assignIdeaToTeam,
        addTeam,
    };
};
