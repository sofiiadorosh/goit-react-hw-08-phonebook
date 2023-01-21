import { createSelector } from '@reduxjs/toolkit';

const selectContacts = state => state.contacts.items;

const selectIsLoading = state => state.contacts.isLoading;

const selectError = state => state.contacts.error;

const selectFilter = state => state.filter;

const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilter,
  selectFilteredContacts,
};
