

import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
import *  as api from 'shared/apiContacts'

const isDublicate = ({ name, number }, contacts) => {
    const normalizedName = name.toLowerCase();
    const normalizedPhone = number.toLowerCase();

    const result = contacts.find((item) => {
        return (normalizedName === item.name.toLowerCase() && item.number.toLowerCase() === normalizedPhone);
    });
    return Boolean(result);
};


export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, thunkAPI) => {
        try {
            const data = await api.fetchContacts();
            return data;
        } catch (error) {
            Notify.failure('Oops, something went wrong...');
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const response = await api.addContact(contact);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
    {
        condition: (data, { getState }) => {
            const { contacts } = getState();
            if (isDublicate(data, contacts.items)) {
                const mesage = Notify.info(`${data.name}  is already in contacts.`);
                return mesage(data);
            }
        }
    },
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactID, thunkAPI) => {
        try {
            const response = await api.removeContact(contactID);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);
