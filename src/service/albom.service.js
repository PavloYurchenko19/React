import axionService from "./axios.service";
import {urls} from "../config/urls";

export const albomService = {
    getById:(id)=>axionService.get(`${urls.alboms}?userId=${id}`).then(value => value.data)
};