import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const req = axios.create({
    baseURL: 'http://localhost:3001/api',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
})

export const loadPhonebooks = createAsyncThunk(
    'relationship/loadPhonebooks',
    async () => {
        const { data } = await req.get('phonebooks');
        console.log("ini coy=>", data)
        return data;
    }
);

export const addPhonebooks = createAsyncThunk(
    'relationship/addPhonebooks',
    async (contact) => {
        const { data } = await req.post('phonebooks', contact);
        console.log("INI APA COY =>", contact)
        return data;
    }
);

export const deletePhonebooks = createAsyncThunk(
    'relationship/deletePhonebooks',
    async ({ id }) => {
        const { data } = await req.delete('phonebooks'/{ id })
        return data
    }
)