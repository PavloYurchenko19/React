import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carsService} from "../service/cars.service";

export const getAllCars = createAsyncThunk(
    'carsSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const cars = await carsService.getAll();
            return cars
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const createCar = createAsyncThunk(
    'carsSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carsService.createCar(data)
            dispatch(addCar({newCar}))
        } catch (e) {

        }
    }
)

export const deleteCar = createAsyncThunk(
    'carsSlice/deleteCar',
    async ({id}, {dispatch}) => {
        try {
            await carsService.deleteCarById(id)
            await dispatch(reloadPage())

        } catch (e) {
        }
    }
)

export const getById = createAsyncThunk(
    'carsSlice/getById',
    async ({id}, {dispatch}) => {
        try {
            const overRideCar = await carsService.getById(id)
            dispatch(updateCar({overRideCar}))
        } catch (e) {

        }
    }
)

export const updateCarById = createAsyncThunk(
    'carsSlice/updateCarById',
    async ({data, id}, {dispatch}) => {
        try {
            const updateCarToArr = await carsService.updateCarById(id, data)
            console.log(updateCarToArr);
        } catch (e) {
        }
    }
)

const carsSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        overRideCar: [],
        reload: [],
        status: null,
        error: null,
    },

    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.newCar)
        },
        updateCar: (state, action) => {
            state.overRideCar = action.payload.overRideCar

        },
        reloadPage: (state, action) => {
            state.reload.push({})
        }

    },

    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'pending';
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
})
const carsReduce = carsSlice.reducer;
export const {addCar, updateCar, reloadPage} = carsSlice.actions
export default carsReduce