import {axiosServiceCar} from "./axios.service";
import {urls} from "../config/urls";

export const carsService = {
    getAll:()=>axiosServiceCar.get(urls.cars).then(value => value.data),
    createCar:(car)=>axiosServiceCar.post(urls.cars,car).then(value => value.data),
    updateCarById:(id,car)=>axiosServiceCar.patch(`${urls.cars}/${id}`,car).then(value => value.data),
    getById:(id)=>axiosServiceCar.get(`${urls.cars}/${id}`).then(value => value.data),
    deleteCarById:(id)=>axiosServiceCar.delete(`${urls.cars}/${id}`)
}