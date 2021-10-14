import { axios } from "../../core";

const pokemonApi = {
    getAll: () => axios.get(`http://localhost:7070/shares`),
};
  
export default pokemonApi;