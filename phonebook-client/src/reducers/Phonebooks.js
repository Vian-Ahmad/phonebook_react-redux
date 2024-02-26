import { createSlice } from "@reduxjs/toolkit";
import { loadPhonebooks } from "./API";


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
            state.status = 'idle'
            state.error = null
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(loadPhonebooks.pending, (state) => {
                state.status = 'loading'
            })

            .addCase(loadPhonebooks.fulfilled, (state, action) => {
                // state = { ...state, ...action.payload, status: 'succeeded' }
                state.status = 'succeeded'
                state.phonebooks = action.payload
                console.log('ini load', state.phonebooks)
                return state
            })

            .addCase(loadPhonebooks.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })
    }
})

export const { startContacts } = phonebookSlice.actions

export default phonebookSlice.reducer