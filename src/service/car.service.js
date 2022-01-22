import axiosService from "./axios.service";
import {urls} from "../urls/urls";

const CarService ={
    getAll:()=>axiosService.get(urls.cars).then(value => value.data),
    updateById:(id,car)=>axiosService.patch(`${urls.cars}/${id}`,)
}