import { createSelector } from '@reduxjs/toolkit';

export const selectContactsInfo = state => state.contacts;
export const selectFilter = state => state.filter.value;

export const selectIsLoading = createSelector(
  selectContactsInfo,
  contacts => contacts.isLoading
);

export const selectError = createSelector(
  selectContactsInfo,
  contacts => contacts.error
);

export const selectVisibleItems = createSelector(
  [selectContactsInfo, selectFilter],
  ({ items }, value) =>
    items.filter(({ name }) =>
      name.toLowerCase().includes(value.trim().toLowerCase())
    ) // (Note: any string includes an empty string))
);
