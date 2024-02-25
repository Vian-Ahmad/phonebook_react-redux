import { configureStore } from "@reduxjs/toolkit";
import phonebookReducer from "./reducers/Phonebooks";


export const store = configureStore({
    reducer: {
        relationship: phonebookReducer
    }
})