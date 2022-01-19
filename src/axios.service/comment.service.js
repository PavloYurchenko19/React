import {urls} from "../config/urls";
import {axiosService} from "./axios.service";

export const commentService = {
    getById: (id) => axiosService.get(`${urls.comments}/${id}`).then(value => value.data),
    getAll: () => axiosService.get(urls.comments).then(value => value.data)
}