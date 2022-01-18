import {urls} from "../config/urls";
import {axiosService} from "./axios.service";

export const postService = {
    getAll:()=> axiosService.get(urls.posts).then(value => value.data),
    getById:(id)=> axiosService.get(`${urls.posts}/${id}`).then(value => value.data)
}