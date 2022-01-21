import axionService from "./axios.service";
import {urls} from "../config/urls";

export const postsService ={
    getById:(id)=>axionService.get(`${urls.posts}/${id}`).then(value => value.data),
    getAll:()=> axionService.get(urls.posts).then(value => value.data)
}