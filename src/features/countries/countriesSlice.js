import {createSlice} from '@reduxjs/toolkit'
import {showAllCountries, searchByCode, filterByRegion} from './countriesAction.js'

const initialState = {
    loading: false,
    countriesData: [],
    countrySearch: [],
    region: '',
    searchQuery: '',
    error: false,
    success: false,
    errorMessage: ''
}
export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        initial: (state) => {
            state.loading = false;
            state.success = false;
            state.error = false
            state.message = '';
            state.countrySearch = [];
            state.region = ''
        },
        setRegion: (state, action) => {
            state.region = action.payload
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(showAllCountries.pending, (state) => {
            state.loading = true
        });
        builder.addCase(showAllCountries.fulfilled, (state, action) => {
            state.loading = false
            state.countriesData = action.payload;
            state.success = true
        });
        builder.addCase(showAllCountries.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.payload;
            state.countriesData = [];
        });
        builder.addCase(searchByCode.pending, (state) => {
            state.loading = true
        });
        builder.addCase(searchByCode.fulfilled, (state, action) => {
            state.loading = false
            state.countrySearch = action.payload;
            state.success = true
        });
        builder.addCase(searchByCode.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.payload;
            state.countrySearch = [];
        });
        builder.addCase(filterByRegion.pending, (state) => {
            state.loading = true
        });
        builder.addCase(filterByRegion.fulfilled, (state, action) => {
            state.loading = false
            state.countriesData = action.payload;
            state.success = true
        });
        builder.addCase(filterByRegion.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.payload;
            state.countriesData = [];
        });
    }
})

export default countriesSlice.reducer
export const {initial, setSearchQuery, setRegion} = countriesSlice.actions