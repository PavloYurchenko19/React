import axios from "axios";
import baseURL, {carsURL} from "../config/urls";

export const axiosService = axios.create({baseURL})
export const axiosServiceCar = axios.create({baseURL: carsURL})
