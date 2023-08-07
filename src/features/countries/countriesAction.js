import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const showAllCountries = createAsyncThunk('countries/showAll', async (_, thunkApi) => {
    try {
        const res = await axios.get('https://restcountries.com/v3.1/all')
        return res.data
    } catch (error) {
        const message = (error.response && error.response.data) || error.message;
        return thunkApi.rejectWithValue(message)
    }
})


export const searchByCode = createAsyncThunk('countries/searchByCode', async (code, thunkApi) => {
    try {
        const res = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`)
        return res.data
    } catch (error) {
        const message = (error.response && error.response.data) || error.message;
        return thunkApi.rejectWithValue(message)
    }
})

export const filterByRegion = createAsyncThunk('countries/filterByRegion', async (region, thunkApi) => {
    try {
        const res = await axios.get(`https://restcountries.com/v3.1/${region}`)
        return res.data
    } catch (error) {
        const message = (error.response && error.response.data) || error.message;
        return thunkApi.rejectWithValue(message)
    }
})