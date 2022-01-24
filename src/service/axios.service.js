import axios from "axios";
import baseURL from "../urls/urls";

let axiosService = axios.create({baseURL});

export default axiosService