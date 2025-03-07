import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectFilterName = (state) => state.filters.name;

// export const selectFilteredContacts = (state) => {
//   const contacts = selectContacts(state);
//   const filter = selectFilterName(state);
//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.trim().toLowerCase())
//   );
// };

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
