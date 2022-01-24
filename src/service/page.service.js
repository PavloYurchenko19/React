import axiosService from "./axios.service";
import {urls} from "../urls/urls";

export const PageService={
    getById:(id)=>axiosService.get(`${urls.episode}?page=${id}`).then(value => value.data)
}