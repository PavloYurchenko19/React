import {axiosService} from "./axios.service";
import urls from "../config/urls";

export const usersService = {
    getAll: () => axiosService.get(`${urls}`).then(value => value.json())
}
