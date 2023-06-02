import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from 'shared/apiAuth'

export const signup = createAsyncThunk(
    "auth/signup",
    async (data, { rejectWithValue }) => {
        try {
            const result = await authApi.signup(data);
            console.log("result", result);
            return result;
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message,
            }
            return rejectWithValue(error);
        }
    }
);

export const logIn = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue }) => {
        try {
            const result = await authApi.login(data);
            console.log("result", result);
            return result;
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message,
            }
            return rejectWithValue(error);
        }
    }
);

export const logOut = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            const result = await authApi.logout();
            return result;
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message,
            }
            return rejectWithValue(error);
        }
    }
);

export const current = createAsyncThunk(
    "auth/current",
    async (_, thunkAPI) => {
        try {
            const { auth } = thunkAPI.getState();
            const result = await authApi.getCurrentUser(auth.token);
            console.log(result);
            return result;

        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message,
            }
            return thunkAPI.rejectWithValue(error);
        }
    }
)

