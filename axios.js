import axios from "axios"; //  axios from axios module

const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});
export default instance;
