import axiosService from "./axios.service";
import {urls} from "../urls/urls";

export const RickAndMortyService = {
    character: () => axiosService.get(urls.character).then(value => value.data),
    episode: () => axiosService.get(urls.episode).then(value => value.data)
}