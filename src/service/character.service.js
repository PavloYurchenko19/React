import axiosService from "./axios.service";
import {urls} from "../urls/urls";

export const CharacterService={
    getAll:()=> axiosService.get(urls.character).then(value => value.data)
}