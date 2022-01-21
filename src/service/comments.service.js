import axionService from "./axios.service";
import {urls} from "../config/urls";

export const commentsService = {
    getById: (id) => axionService.get(`${urls.comments}?postId=${id}`).then(value => value.data)
}