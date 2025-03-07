import { createSlice, createSelector } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    // addContact: (state, action) => {
    //   state.items.push(action.payload);
    //   // console.log(state.items);
    // },
    // deleteContact: (state, action) => {
    //   state.items = state.items.filter(
    //     (item) => item.id !== action.payload
    //   );
    //   // console.log(id);
    // },
    // selectContacts: (state, action) => {
    //   state.items = action.payload;
    //   state.loading = false;
    // },
    // selectError: (state, action) => {
    //   state.error = action.payload;
    // },
    // selectLoading: (state, action) => {
    //   state.loading = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        // console.log(state.items, "4");
      })
      .addCase(fetchContacts.pending, (state, action) => {
        state.loading = true;
        // console.log(state, "4");
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // console.log(state, "4");
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addContact.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = slice.reducer;
// export const { selectContacts, selectError, selectLoading } = slice.actions;

export const selectContacts = (state) => state.contacts.items;
export const selectFilterName = (state) => state.filters.name;

export const selectFilteredContactsMemo = createSelector(
  [selectContacts, selectFilterName],
  (contacts, filter) => {
    // const contacts = selectContacts(state);
    // const filter = selectFilterName(state);
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  }
);
