export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectIsModalOpen = (state) => state.contacts.isModalOpen;
export const selectActiveContactId = (state) => state.contacts.activeContactId;
export const selectContactById = (state, contactId) =>
  state.contacts.items.find((contact) => contact.id === contactId);
