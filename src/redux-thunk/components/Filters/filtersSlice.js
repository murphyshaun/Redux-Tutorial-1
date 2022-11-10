import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priorities: [],
    },

    reducers: {
        //auto create function action
        //{type: `${name}/searchFilterChange`},  name = filters
        searchFilterChange: (state, action) => {
            //(IMMER libarary) mutation + redux-toolkit => immutability
            state.search = action.payload;
        },
        statusFilterChange: (state, action) => {
            state.status = action.payload;
        },
        priorityFilterChange: (state, action) => {
            state.priorities = action.payload;
        }
    }
})