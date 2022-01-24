import axiosService from "./axios.service";
import {urls} from "../urls/urls";

export const EpisodesService = {
    getAll:()=> axiosService.get(urls.episode).then(value => value.data),
    getById:(id)=>axiosService.get(`${urls.episode}/${id}`).then(value => value.data)
}