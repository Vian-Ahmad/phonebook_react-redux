import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    phonebooks: [],
    status: 'idle',
    error: null
}

export const phonebookSlice = createSlice({
    name: 'relationship',
    initialState,
    reducers: {
        startContacts: (state) => {
            state.phonebooks = []
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase()
    }
})

export const {startContacts} = phonebookSlice.actions

export default phonebookSlice.reducer