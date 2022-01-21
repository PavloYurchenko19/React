import axionService from "./axios.service";
import {urls} from "../config/urls";

export const fotoService = {
    getById: (id) => axionService.get(`${urls.foto}?albumId=${id}`).then(value => value.data)
}