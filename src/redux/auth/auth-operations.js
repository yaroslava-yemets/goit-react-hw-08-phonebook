import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        return data;
    } catch (error) {
        return new Error(error.massage);
    }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        return data;
    } catch (error) {
        return new Error(error.massage);
    }
});

export const logOut = createAsyncThunk('auth/logout', async credentials => {
    try {
        const { data } = await axios.post('/users/logout', credentials);
        return data;
    } catch (error) {
        return new Error(error.massage);
    }
});