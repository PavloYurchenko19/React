import axionService from "./axios.service";
import {urls} from "../config/urls";

export  const userService ={
    getAll:()=>axionService.get(urls.users).then(value => value.data)
}