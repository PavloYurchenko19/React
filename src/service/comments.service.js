import axionService from "./axios.service";
import {urls} from "../config/urls";

const commentsService ={
    comments:()=>axionService.get(urls.comments).then(value => value.data)
}