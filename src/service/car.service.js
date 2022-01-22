import axiosService from "./axios.service";
import {urls} from "../urls/urls";

export const CarService ={
    getAll:()=>axiosService.get(urls.cars).then(value => value.data),
    updateById:(id,car)=>axiosService.patch(`${urls.cars}/${id}`,car).then(value => value.data),
    create:(car)=>axiosService.post(urls.cars,car).then(value => value.data),
    delete:(id)=> axiosService.delete(`${urls.cars}/${id}`).then(value => value.data)
}