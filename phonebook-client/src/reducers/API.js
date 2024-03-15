import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const req = axios.create({
    baseURL: 'http://localhost:3001/api',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
})

export const loadPhonebooks = createAsyncThunk(
    'relationship/loadPhonebooks',
    async ({ keyword, sort }) => {
        const { data } = await req.get('phonebooks', { params: { keyword, sort } });
        return data;
    }
);

export const loadPage = createAsyncThunk(
    'relationship/loadPage',
    async ({ page, keyword, sort }) => {
        const { data } = await req.get('phonebooks', { params: { page, keyword, sort } })
        return data
    }
)

export const addPhonebooks = createAsyncThunk(
    'relationship/addPhonebooks',
    async (contact) => {
        const { data } = await req.post('phonebooks', contact);
        return data;
    }
)

export const deletePhonebooks = createAsyncThunk(
    'relationship/deletePhonebooks',
    async ({ id }) => {
        const { data } = await req.delete(`phonebooks/${id}`)
        return data
    }
)

export const updatePhonebooks = createAsyncThunk(
    'relationship/updatePhonebooks',
    async ({ id, contact }) => {
        const { data } = await req.put(`phonebooks/${id}`, contact)
        return data
    }
)

export const uploadAvatar = createAsyncThunk(
    'relationship/uploadAvatar',
    async ({ id, formUser }) => {
        const { data } = await req.put(`phonebooks/${id}/avatar`, formUser, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return data
    }
)