import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.loading;
export const getFilter = state => state.contacts.filter;
export const getVisibleContacts = createSelector(
    [getContacts, getFilter], 
    (allContacts, filter) => {
        const lowerCasedFilter = filter.toLocaleLowerCase();
        return allContacts.filter(contact => 
            contact.name.toLocaleLowerCase().includes(lowerCasedFilter));
    },
);

