import { configureStore } from '@reduxjs/toolkit'
import countriesReducer from '../features/countries/countriesSlice.js'

export const store = configureStore({
    reducer: {
        country:countriesReducer,
    },
})