import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const postService = {
    getALL: () => axiosService.get(urls.posts).then(value => value.data)
}
