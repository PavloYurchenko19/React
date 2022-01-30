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

const carsSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null,
    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'pending';

        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status='fulfilled'
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {
            state.status='rejected'
        },
    }
})
const carsReduce = carsSlice.reducer;
export default carsReduce