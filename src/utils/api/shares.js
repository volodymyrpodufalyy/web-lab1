import { axios } from "../../core";

const sharesApi = {
    getAll: () => axios.get(`http://localhost:7070/shares`),
};
  
export default sharesApi;