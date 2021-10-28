import { axios } from "../../core";

const sharesApi = {
    getAll: () => axios.get(`http://localhost:7070/shares`),
    getOne: (id) => axios.get(`http://localhost:7070/shares/${id}`),
};
  
export default sharesApi;