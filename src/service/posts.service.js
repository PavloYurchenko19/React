import axionService from "./axios.service";
import {urls} from "../config/urls";

const postsService ={
    getAll:()=> axionService.get(urls.posts).then(value => value.data)
}