import { useFetchWrapper } from "../utils/fetchWrapper"

export const PanelistService = () => {
    const fetchWrapper = useFetchWrapper()
    const baseURL = 'panelist'
    function getPanelists() {
        let url = `${baseURL}`
        return fetchWrapper.get(url)
    } 

    function getPanelistById(id) {
      let url = `${baseURL}/${id}`;
      return fetchWrapper.get(url);
    } 

    return {
      getPanelists,getPanelistById
    }  
    

}