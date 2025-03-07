// fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену це рядок "contacts/fetchAll".
// addContact - додавання нового контакту (метод POST). Базовий тип екшену це рядок "contacts/addContact".
// deleteContact - видалення контакту по ID (метод DELETE). Базовий тип екшену це рядок "contacts/deleteContact".
// https://67c5eefb351c081993fbf032.mockapi.io/contacts

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { selectContacts, selectError, selectLoading } from "./contactsSlice";

axios.defaults.baseURL = "https://67c5eefb351c081993fbf032.mockapi.io";

// export const fetchContacts = createAsyncThunk(
//   "contacts/fetchContacts",
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get("/contacts");
//       console.log(data, "2");

//       return data;
//     } catch (error) {
//       console.log(error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/contacts`);
      // console.log(data, "5");

      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post(`/contacts/`, body);
      // console.log(data, "3");
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchContacts = () => async (dispatch) => {
//   try {
//     dispatch(selectError(false));
//     dispatch(selectLoading(true));
//     const response = await axios.get(
//       "https://67c5eefb351c081993fbf032.mockapi.io/contacts"
//     );
//     dispatch(selectContacts(response.data));
//   } catch (error) {
//     dispatch(selectError(true));
//   } finally {
//     dispatch(selectLoading(false));
//   }
// };
