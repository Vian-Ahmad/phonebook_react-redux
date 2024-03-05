import { createSlice } from "@reduxjs/toolkit";
import { addPhonebooks, loadPhonebooks, deletePhonebooks, updatePhonebooks, uploadAvatar, loadPage } from "./API";


const initialState = {
    phonebooks: [],
    page: 1,
    pages: 1,
    limit: 10,
    total: 11,
    status: 'idle',
    error: null
}

export const phonebookSlice = createSlice({
    name: 'relationship',
    initialState,
    reducers: {
        startContacts: (state) => {
            state.phonebooks = []
            state.page = 1
            state.pages = 1
            state.limit = 10
            state.total = 11
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
                state = { ...state, ...action.payload, status: 'succeeded' }
                console.log("INI LOAD =>", state)
                return state
            })

            .addCase(loadPhonebooks.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })

            .addCase(loadPage.pending, (state) => {
                state.status = 'loading'
            })

            .addCase(loadPage.fulfilled, (state, action) => {
                state = { ...state, phonebooks: [...state.phonebooks, ...action.payload.phonebooks], status: 'succeeded' }
                state.page = action.payload.page
                state.status = 'succeeded'
                return state
            })

            .addCase(loadPage.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })

            .addCase(addPhonebooks.pending, (state) => {
                state.status = 'loading'
            })

            .addCase(addPhonebooks.fulfilled, (state, action) => {
                console.log("BROWWWWW SEE (add)=>", state, action.payload)
                state = { ...state, phonebooks: [action.payload, ...state.phonebooks], status: 'succeeded' }
                return state
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
                );
                state.status = 'succeeded';

            })

            .addCase(deletePhonebooks.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })

        .addCase(updatePhonebooks.pending, (state) => {
            state.status = 'loading'
        })

        .addCase(updatePhonebooks.fulfilled, (state, action) => {
            state.phonebooks = state.phonebooks.map((item) => {
                if (item.id === action.payload.id) {
                    item.name = action.payload.name
                    item.phone = action.payload.phone
                }

                return item
            })
            state.status = 'succeeded'
        })

        .addCase(updatePhonebooks.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error
        })

        .addCase(uploadAvatar.pending, (state) => {
            state.status = 'loading'
        })

        .addCase(uploadAvatar.fulfilled, (state, action) => {
            state.phonebooks = state.phonebooks.map((item) => {
                if (item.id === action.payload.id) {
                    item.avatar = action.payload.avatar
                }

                return item
            })
            state.status = 'succeeded'
        })

        .addCase(uploadAvatar.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error
        })



    }
})

export const showPhonebooks = (state) => {
    return state.relationship
}

export const { startContacts } = phonebookSlice.actions

export default phonebookSlice.reducer