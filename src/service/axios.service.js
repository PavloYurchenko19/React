import axios from "axios";
import baseURL from "../config/urls";

const axionService = axios.create({baseURL});
export default axionService;