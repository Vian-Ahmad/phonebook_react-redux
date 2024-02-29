import { createSlice } from "@reduxjs/toolkit";
import { addPhonebooks, loadPhonebooks, deletePhonebooks } from "./API";


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
                state = { ...state, phonebooks: action.payload, status: 'succeeded' }
                // state.status = 'succeeded'
                // state.phonebooks = action.payload
                return state
            })

            .addCase(loadPhonebooks.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })

            .addCase(addPhonebooks.pending, (state) => {
                state.status = 'loading'
            })

            .addCase(addPhonebooks.fulfilled, (state, action) => {
                console.log("BROWWWWW SEE =>", state, action.payload)
                state = { ...state, phonebooks: [{ id: action.payload.id, name: action.payload.name, phone: action.payload.phone }, ...state.phonebooks], status: 'succeeded' }
            })

            .addCase(addPhonebooks.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })

            .addCase(deletePhonebooks.pending, (state) => {
                state.status = 'loading'
            })

            .addCase(deletePhonebooks.fulfilled, (state, action) => {
                state.phonebooks = state.phonebooks.filter(
                    (data) => data.id !== action.payload.id
                )    
            })

            .addCase(deletePhonebooks.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })
    }
})

export const { startContacts } = phonebookSlice.actions

export default phonebookSlice.reducer