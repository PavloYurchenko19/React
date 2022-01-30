import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const commnetsService = {
    getAll: () => axiosService.get(urls.comments).then(value => value.data)
}